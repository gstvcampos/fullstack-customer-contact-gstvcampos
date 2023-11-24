'use client'

import { DialogContext } from '@/contexts/DialogContext'
import { useContext } from 'react'
import { FaUserEdit } from 'react-icons/fa'
import EditClientModal from '../modals/EditClientModal'

export default function EditClientBtn({ userId }: { userId: string }) {
  const { toggleEditClient } = useContext(DialogContext)

  return (
    <div className="flex">
      <button className="m-2" onClick={toggleEditClient}>
        <FaUserEdit size={25} />
      </button>
      <EditClientModal userId={userId} />
    </div>
  )
}
