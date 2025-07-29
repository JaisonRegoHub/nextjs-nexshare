"use server";

import { redirect } from "next/navigation";
import { storePost, updatePostLikeStatus } from "@/lib/posts";
import { uploadImage } from "@/lib/cloudinary";
import { revalidatePath } from "next/cache";

function checkRequired(value, name) {
  if (
    !value ||
    (typeof value === "string" && !value.trim()) ||
    (value instanceof File && value.size === 0)
  ) {
    return `${name} is required`;
  }
  return null;
}

export async function createPost(prevState, formData) {
  const title = formData.get("title");
  const image = formData.get("image");
  const content = formData.get("content");

  const errors = [
    checkRequired(title, "Title"),
    checkRequired(content, "Content"),
    checkRequired(image, "Image"),
  ].filter(Boolean);
  if (errors.length) return { errors };

  let imageUrl;
  try {
    imageUrl = await uploadImage(image);
  } catch (err) {
    console.error("Cloudinary upload error:", err);
    throw new Error(
      "Image upload failed, post was not created. Please try again later."
    );
  }

  await storePost({ imageUrl, title, content, userId: 1 });
  revalidatePath("/", "layout");
  redirect("/feed");
}

export async function togglePostLikeStatus(postId) {
  await updatePostLikeStatus(postId, 2);
  revalidatePath("/", "layout");
}
