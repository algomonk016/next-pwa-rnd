
import { FC, Suspense } from "react";
import { fetchUsersSimple } from "./user.service";
import { Loading } from "@/components";
import { RenderUsers } from "./components";

const Users: FC = async () => {

  const { mode, data } = await fetchUsersSimple();

  if(data === 'failed') {
    return (
      <div className="font-2xl">
        failed
      </div>
    )
  }

  return (
    <div className="min-h-screen p-10">
      <Suspense fallback={ <Loading /> }>
        <RenderUsers data={data} />
      </Suspense>
    </div>
  )
}

export default Users;