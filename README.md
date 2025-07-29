# NexShare

NexShare is a modern Next.js 13 project that lets users create and share posts with a title, image, and content. It features server-side form handling, image upload integration with Cloudinary, optimistic UI updates for likes, and modular, scalable code architecture.

---

## Features

### 1. Post Creation & Form Validation

- Users can submit new posts using a form with title, image upload, and content.
- Server-side validation for required fields ensures data integrity.
- Inline error reporting for missing or invalid input.

### 2. Image Upload Integration

- Images are uploaded securely to [Cloudinary](https://cloudinary.com/) using server actions.
- Uploaded image URLs are saved with posts for reliable storage and delivery.
- Handles upload failures gracefully with user-facing error messages.

### 3. Optimistic UI for Likes

- Users can like/unlike posts with immediate UI feedback without waiting for server confirmation.
- Optimistic updates handled with `useOptimistic` React hook and a dedicated reducer.
- Like toggle reducer logic extracted into a separate file for clarity and reusability.

### 4. Modular & Clean Code Structure

- **actions/posts.js**: Server-side actions for creating posts and toggling likes.
- **lib/cloudinary.js**: Cloudinary upload helper for image processing.
- **lib/toggle-like-reducer.js**: Pure reducer function to manage optimistic like toggling.
- **components/post-form.js**: Client-side React form component for creating posts.
- **components/posts.js**: Posts list component with like button and optimistic UI logic.

### 5. Environment Configuration

- Uses `.env.local` for managing Cloudinary API credentials and other secrets.
- Example variables needed:
  ```
  CLOUDINARY_CLOUD_NAME=your_cloud_name_here
  CLOUDINARY_API_KEY=your_api_key_here
  CLOUDINARY_API_SECRET=your_api_secret_here
  ```
- Ensure environment variables are kept secret and not committed to version control.

---

## Getting Started

### Prerequisites

- Node.js (>=16 recommended)
- Cloudinary account with API keys
- Next.js 13+ development environment

### Setup

1. Clone this repository:

   ```
   git clone
   cd nexshare
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Create a `.env.local` file at the root and add your Cloudinary credentials:

   ```
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

4. Run the development server:

   ```
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Usage

- Visit `/new-post` to create a new post with image upload.
- The homepage (`/feed`) shows posts with like buttons.
- Click the heart icon to like or unlike a post, with immediate visual feedback.

---

## Project Structure

```
.
├── actions
│   └── posts.js            # Server actions (createPost, togglePostLikeStatus)
├── app
│   ├── feed                # Feed page components
│   ├── new-post            # New post page
│   └── globals.css         # Global styles
├── components
│   ├── post-form.js        # React post creation form
│   ├── posts.js            # Posts display component
│   └── like-icon.js        # Like button SVG component
├── lib
│   ├── cloudinary.js       # Cloudinary upload helper
│   └── toggle-like-reducer.js # Optimistic UI reducer function
├── data
│   └── posts.db            # Local data storage (e.g., SQLite)
├── public                  # Static assets
├── .env.local              # Local environment variables, not committed
├── package.json
└── README.md               # This file
```

---

## Notes and Future Improvements

- Currently, image upload uses base64 encoding; for large images, consider streaming or more efficient upload methods.
- Server-side validation is basic; consider adding more detailed rules (e.g., content length, image types).
- Add client-side validation for better user experience.
- Implement user authentication for associating posts with actual users.
- Add pagination or infinite scroll on feed page.
- Enhance accessibility and responsive design.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgments

- Next.js framework for server actions and modern React capabilities.
- Cloudinary for image upload and management.
- Unsplash for free image resources used in sample posts.
