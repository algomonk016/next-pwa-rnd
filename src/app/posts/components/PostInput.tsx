'use client';
import { FC, useState } from "react";
import { PostDetails } from "../type";
import { postPostSimple } from "../post.service";

interface ValidatePayloadResp { 
  status: boolean, 
  message: string 
}

const inputClass = "placeholder:italic placeholder:text-slate-300 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm text-slate-500 m-2";

const validatePayload = (postDetails: PostDetails): ValidatePayloadResp => {
  if(postDetails.title.trim().length === 0) return { status: false, message: "title can't be empty" };
  if(postDetails.body.trim().length === 0) return { status: false, message: "body can't be empty" };
  return { status: true, message: "all ok" };
}

const PostInput: FC = () => {

  const [postDetails, setPostDetails] = useState<PostDetails>({
    title: '',
    body: '',
    userId: 10
  });  

  const handleTitle = (e: any) => setPostDetails((postDetails) => ({...postDetails, title: e.target.value}));
  
  const handleBody = (e: any) => setPostDetails((postDetails) => ({...postDetails, body: e.target.value}));

  const handlePost = async (e: any) => {
    e.preventDefault();
    const { status, message } = validatePayload(postDetails);

    if(!status) {
      alert(message);
      return;
    }

    const { data, mode } = await postPostSimple(postDetails);
    if(!!data && data !== 'Failed') {
      alert(`post successful ${data.id}`);
      setPostDetails((postDetails) => ({ ...postDetails, title: '', body: '' }));
    }
  }

  return (
    <div className="flex items-center">
      <input type="text" id="post-title" className={inputClass} placeholder="title" value={postDetails.title} onChange={handleTitle} />
      <input type="text" id="post-body" className={inputClass} placeholder="body" value={postDetails.body} onChange={handleBody} />

      <button className="px-6 py-2 rounded bg-blue-600" onClick={handlePost} >Post</button>
    </div>
  )
}

export default PostInput;