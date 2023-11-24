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
            <div className="rounded-lg bg-white p-6">
              <h3 className="mb-4 text-xl font-bold text-gray-700">
                Adicionar contato
              </h3>
              <form>
                <div className="mb-4">
                  <label className="font-bold text-gray-700">Email</label>
                  <input
                    className="mt-1 w-full rounded-md border p-2"
                    type="text"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-4">
                  <label className="font-bold text-gray-700">Telefone</label>
                  <input
                    className="mt-1 w-full rounded-md border p-2"
                    type="text"
                    placeholder="Telefone"
                  />
                </div>
              </form>
              <div className="mt-4 flex justify-between">
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
