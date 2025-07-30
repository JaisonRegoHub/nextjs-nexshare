import Posts from "@/components/posts";
import { getPosts } from "@/lib/posts";

export async function generateMetadata() {
  const posts = await getPosts();

  return {
    title: `Browse all ${posts.length} posts - NexShare`,
    description: `View a collection of ${posts.length} engaging posts shared by our community. Explore, like, and share your favorite stories on NexShare.`,
  };
}

export default async function FeedPage() {
  const posts = await getPosts();

  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}
