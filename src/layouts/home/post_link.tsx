import { Post } from '../../interfaces/post';
import { h } from '../../util/h';

export const PostLink = (post: Post) => (
  <div className="post-link">
    <h3 className="post-link__title">
      <a href={post.url}>
        {post.data.title}
      </a>
    </h3>
    <p>
      {post.data.description}
    </p>
    <div className="post-link__date">
      {post.data.date}
    </div>
  </div> 
)