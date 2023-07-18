export type PostDetails = {
  userId: number;
  title: string;
  body: string;
}

export type TPost = PostDetails & {
  id: number;
}

export type TPosts = Array<TPost>;