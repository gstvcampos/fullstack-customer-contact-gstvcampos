'use client'

import { DialogContext } from '@/contexts/DialogContext'
import { Contact } from '@/interfaces/interfaces'
import { useContext } from 'react'
import { MdDeleteForever, MdOutlineEdit } from 'react-icons/md'
import DeleteContModal from '../modals/DeleteContModal'
import EditContModal from '../modals/EditContModal'

export default function DelEditContactBtn({
  userId,
  contact,
}: {
  userId: string
  contact: Contact
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
      <DeleteContModal userId={userId} contactId={contact.id} />
      <EditContModal userId={userId} contact={contact} />
    </div>
  )
}
