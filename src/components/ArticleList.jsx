
import Article from "./Article";

// Receives the posts array as a prop and renders one Article component for each post.
function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post) => (
        <Article
          key={post.id || post.title}
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </main>
  );
}

export default ArticleList;