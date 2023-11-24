'use client'

import { DialogContext } from '@/contexts/DialogContext'
import { useContext } from 'react'
import { IoIosAddCircle } from 'react-icons/io'
import AddContModal from '../modals/AddContModal'

export default function AddContactBtn({ userId }: { userId: string }) {
  const { toggleAddContact } = useContext(DialogContext)

  return (
    <>
      <button onClick={toggleAddContact}>
        <IoIosAddCircle size={25} />
      </button>
      <AddContModal userId={userId} />
    </>
  )
}
