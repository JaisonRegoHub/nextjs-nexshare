"use client";

import { useFormState } from "react-dom";
import FormSubmit from "./form-submit";

export default function PostForm({ action }) {
  const [state, formAction] = useFormState(action, {});

  return (
    <>
      <h1>Create a new post</h1>

      <form action={formAction} noValidate>
        <p className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" required />
        </p>

        <p className="form-control">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="image"
            name="image"
            required
          />
        </p>

        <p className="form-control">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" rows={5} required />
        </p>

        <p className="form-actions">
          <FormSubmit />
        </p>

        {state.errors && state.errors.length > 0 && (
          <ul className="form-errors" role="alert" aria-live="assertive">
            {state.errors.map((error, index) => (
              <li key={`${error}-${index}`}>{error}</li>
            ))}
          </ul>
        )}
      </form>
    </>
  );
}
