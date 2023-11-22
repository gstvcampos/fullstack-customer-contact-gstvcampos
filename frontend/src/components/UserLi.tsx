import { User } from "@/app/page";
import { FaUserEdit } from "react-icons/fa";
import { IoPersonRemoveSharp } from "react-icons/io5";

export default function UserLi({user}: {user: User}){
  const handleDeleteUser = async (userId: string) => {
    await fetch('https://customer-contact.onrender.com/users', {
      method: 'DELETE',
    })
  }

  return(
    <li key={user.id} className="flex justify-between items-center h-20 m-2 p-5 rounded-md border">
    <div>
      <p>{user.fullName}</p>
      <p>{user.email}</p>
    </div>
    <div>
      <button className="m-3">
        <FaUserEdit size={25} />
      </button>
      <button className="m-3">
        <IoPersonRemoveSharp size={25} />
      </button>
    </div>
  </li>
  )
}