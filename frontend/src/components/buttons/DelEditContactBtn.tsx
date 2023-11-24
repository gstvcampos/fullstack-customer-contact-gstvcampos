'use client'

import { DialogContext } from '@/contexts/DialogContext'
import { useContext } from 'react'
import { MdDeleteForever, MdOutlineEdit } from 'react-icons/md'
import DeleteContModal from '../modals/DeleteContModal'
import EditContModal from '../modals/EditContModal'

export default function DelEditContactBtn({
  userId,
  contactId,
}: {
  userId: string
  contactId: string
}) {
  const { toggleEditContact, toggleDelContact } = useContext(DialogContext)

  return (
    <div className="flex">
      <button className="m-1" onClick={toggleEditContact}>
        <MdOutlineEdit size={20} />
      </button>
      <button className="m-1" onClick={toggleDelContact}>
        <MdDeleteForever size={20} />
      </button>
      <DeleteContModal userId={userId} contactId={contactId} />
      <EditContModal userId={userId} contactId={contactId} />
    </div>
  )
}
