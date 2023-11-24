'use client'

import { DialogContext } from '@/contexts/DialogContext'
import { useContext } from 'react'
import { IoPersonAdd } from 'react-icons/io5'
import AddClientModal from '../modals/AddClientModal'

export default function AddClientBtn() {
  const { toggleAddClient } = useContext(DialogContext)

  return (
    <>
      <button onClick={toggleAddClient}>
        <IoPersonAdd size={25} />
      </button>
      <AddClientModal />
    </>
  )
}
