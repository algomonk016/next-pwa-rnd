import { FC } from "react";
import { TPost } from "../type";

interface Props {
  post: TPost
}

const Post: FC<Props> = (props) => {
  const { post } = props;
  return (
    <div className="bg-slate-50 text-slate-500 px-2 py-1 rounded my-2">
        <p>{post.userId} : {post.title}</p>
    </div>
  )
}

export default Post;