import {Link} from "react-router-dom";

export default function UserList({users}) {
    return (
        <div className="user-list">
            {
               users.map((item) => {
                  return <div key={item.email}>
                     <div>{item.name}</div>
                     <div>{item.email}</div>
                     <div>
                         User
                     </div>
                  </div>
                })
            }
        </div>
    );
}
