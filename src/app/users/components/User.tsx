import { FC } from "react";
import { TUser } from "../type";

interface Props {
  user: TUser
}

const User: FC<Props> = (props) => {
  const { user } = props;
  return (
    <div className="bg-slate-50 text-slate-500 px-2 py-1 rounded my-2">
        <p>{user.name} : {user.phone}</p>
    </div>
  )
}

export default User;