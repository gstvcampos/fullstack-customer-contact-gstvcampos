'use client'

import { DialogContext } from '@/contexts/DialogContext'
import { useContext } from 'react'

export default function AddContModal({ userId }: { userId: string }) {
  const { openAddContact, toggleAddContact } = useContext(DialogContext)

  const handleAdd = async (userId: string) => {
    await fetch(
      `https://customer-contact.onrender.com/users/${userId}/contacts/`,
      {
        method: 'POST',
      },
    )
    window.location.reload()
  }

  return (
    <>
      {openAddContact && (
        <div className="fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-50">
          <div className="flex min-h-screen items-center justify-center">
            <div className="rounded-lg bg-zinc-800 p-6">
              <h3 className="text-xl font-semibold text-white">
                Adicionar contato
              </h3>

              <div className="m-3 flex justify-between">
                <button
                  className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                  onClick={toggleAddContact}
                >
                  Cancelar
                </button>
                <button
                  className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                  onClick={() => handleAdd(userId)}
                >
                  Adicionar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
