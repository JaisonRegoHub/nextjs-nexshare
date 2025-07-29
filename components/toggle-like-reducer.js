export function toggleLikeReducer(prevPosts, updatedPostId) {
  const idx = prevPosts.findIndex((post) => post.id === updatedPostId);
  if (idx === -1) return prevPosts;

  const updatedPost = { ...prevPosts[idx] };
  updatedPost.likes += updatedPost.isLiked ? -1 : 1;
  updatedPost.isLiked = !updatedPost.isLiked;

  return [...prevPosts.slice(0, idx), updatedPost, ...prevPosts.slice(idx + 1)];
}
