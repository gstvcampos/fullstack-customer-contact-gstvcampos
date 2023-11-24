'use client'

import { DialogContext } from '@/contexts/DialogContext'
import Link from 'next/link'
import { useContext } from 'react'
import { FaUserEdit } from 'react-icons/fa'
import { IoPersonRemoveSharp } from 'react-icons/io5'
import DeleteUserModal from '../modals/DeleteUserModal'

export default function DelEditClientBtn({ userId }: { userId: string }) {
  const { toggleDelClient } = useContext(DialogContext)

  return (
    <div className="flex">
      <Link className="m-1" href={`/edit/${userId}`}>
        <FaUserEdit size={20} />
      </Link>
      <button className="m-1 " onClick={toggleDelClient}>
        <IoPersonRemoveSharp size={20}/>
      </button>
      <DeleteUserModal userId={userId} />
    </div>
  )
}
