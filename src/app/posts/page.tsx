
import { FC, Suspense } from "react";
import { fetchPostsSimple } from "./post.service";
import { Loading } from "@/components";
import { PostInput, RenderPosts } from "./components";

const Posts: FC = async () => {

  const { mode, data } = await fetchPostsSimple();

  if(data === 'failed') {
    return (
      <div className="font-2xl">
        failed
      </div>
    )
  }

  return (
    <div className="min-h-screen p-10">
      <PostInput />

      <Suspense fallback={ <Loading /> }>
        <RenderPosts data={data} />
      </Suspense>
    </div>
  )
}

export default Posts;