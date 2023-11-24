'use client'

import { DialogContext } from '@/contexts/DialogContext'
import { useContext } from 'react'

export default function EditClientModal({ userId }: { userId: string }) {
  const { openEditClient, toggleEditClient } = useContext(DialogContext)

  const handleEdit = async (id: string) => {
    await fetch(`https://customer-contact.onrender.com/users/${id}`, {
      method: 'PATCH',
    })
    window.location.reload()
  }

  return (
    <>
      {openEditClient && (
        <div className="fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-50">
          <div className="flex min-h-screen items-center justify-center">
            <div className="rounded-lg bg-zinc-800 p-6">
              <h3 className="text-xl font-semibold text-white">
                Editar cliente
              </h3>

              <div className="m-3 flex justify-between">
                <button
                  className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                  onClick={toggleEditClient}
                >
                  Cancelar
                </button>
                <button
                  className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                  onClick={() => handleEdit(userId)}
                >
                  Editar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
