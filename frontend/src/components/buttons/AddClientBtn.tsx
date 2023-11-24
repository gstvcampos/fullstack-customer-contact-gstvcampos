'use client'

import { DialogContext } from '@/contexts/DialogContext'
import { useContext } from 'react'
import { IoIosAddCircle } from 'react-icons/io'
import AddClientModal from '../modals/AddClientModal'

export default function AddClientBtn() {
  const { toggleAddClient } = useContext(DialogContext)

  return (
    <>
      <button onClick={toggleAddClient}>
        <IoIosAddCircle size={25} />
      </button>
      <AddClientModal/>
    </>
  )
}
