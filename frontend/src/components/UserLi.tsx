"use client"

import { User } from "@/app/page";
import { useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { IoPersonRemoveSharp } from "react-icons/io5";

export default function UserLi({user}: {user: User}){
  const [showModalEdit, setShowModalEdit] = useState(false)
  const [showModalDelete, setShowModalDelete] = useState(false)

  const handleOpenEdit = () => {
    setShowModalEdit(true)
  }

  const handleOpenDelete = () => {
    setShowModalDelete(true)
  }

  return(
    <li key={user.id} className="flex justify-between items-center h-20 m-2 p-5 rounded-md border">
      <div>
        <p>{user.fullName}</p>
        <p>{user.email}</p>
      </div>
      <div>
        <button className="m-3" onClick={handleOpenDelete}>
          <FaUserEdit size={25} />
        </button>
        <button className="m-3" onClick={handleOpenDelete}>
          <IoPersonRemoveSharp size={25} />
        </button>
      </div>
      {showModalEdit && (<p></p>)}
      {showModalDelete && (<p></p>)}
    </li>
  )
}