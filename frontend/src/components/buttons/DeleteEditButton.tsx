"use client"

import { DialogContext } from "@/contexts/DialogContext";
import Link from "next/link";
import { useContext } from "react";
import { FaUserEdit } from "react-icons/fa";
import { IoPersonRemoveSharp } from "react-icons/io5";
import DeleteModal from "../modals/DeleteModal";

export default function DeleteEditButton({userId}: {userId: string}){
  const { toggle } = useContext(DialogContext)

  return (
    <>      
      <Link className="m-3" href={`/edit/${userId}`}>
        <FaUserEdit size={25} />
      </Link>
      <button className="m-3" onClick={toggle}>
        <IoPersonRemoveSharp size={25} />
      </button>
      <DeleteModal userId={userId}/>
    </>
)}
