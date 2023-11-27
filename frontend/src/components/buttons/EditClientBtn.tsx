'use client'

import { DialogContext } from '@/contexts/DialogContext'
import { Client } from '@/interfaces/interfaces'
import { useContext } from 'react'
import { FaUserEdit } from 'react-icons/fa'
import EditClientModal from '../modals/EditClientModal'

export default function EditClientBtn({ client }: { client: Client }) {
  const { toggleEditClient } = useContext(DialogContext)

  return (
    <div className="flex">
      <button className="m-2" onClick={toggleEditClient}>
        <FaUserEdit size={25} />
      </button>
      <EditClientModal client={client} />
    </div>
  )
}
