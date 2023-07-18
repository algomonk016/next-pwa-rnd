import { ApiResponse, getDataSimple, postDataSimple } from "@/services/api";
import { PostDetails } from "./type";

export const fetchPostsSimple = async (): Promise<ApiResponse> => {
  try {
    const res = await getDataSimple('posts');
    return res;
  } catch(error) {
    return {
      mode: 'online',
      data: 'Failed'
    }
  }
}

export const postPostSimple = async (payload: PostDetails): Promise<ApiResponse> => {
  try {
    const res = await postDataSimple('posts', payload);
    return res;
  } catch (error) {
    return {
      mode: 'online',
      data: 'Failed'
    }
  }
}