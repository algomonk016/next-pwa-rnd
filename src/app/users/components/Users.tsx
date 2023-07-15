import { FC } from "react";
import { TUsers } from "../type";
import User from "./User";

interface Props {
  data: TUsers
}

const Users: FC<Props> = (props) => {
  const { data } = props;
  return (
    <div>
      {
        data.map((user) => (
          <User user={user} key={`user-${user.email}-${user.id}`} />
        ))
      }
    </div>
  )
}

export default Users;