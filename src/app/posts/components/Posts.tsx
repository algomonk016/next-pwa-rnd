import { FC } from "react";
import { TPosts } from "../type";
import Post from "./Post";

interface Props {
  data: TPosts
}

const Posts: FC<Props> = (props) => {
  const { data } = props;

  return (
    <div>
      {
        data.map((post) => (
          <Post post={post} key={`post-${post.title}-${post.id}`} />
        ))
      }
    </div>
  )
}

export default Posts;