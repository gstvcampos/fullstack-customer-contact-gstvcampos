'use client'

import { DialogContext } from '@/contexts/DialogContext'
import { useContext } from 'react'

export default function DeleteUserModal({ userId }: { userId: string }) {
  const { openDelClient, toggleDelClient } = useContext(DialogContext)

  const handleDelete = async (id: string) => {
    await fetch(`https://customer-contact.onrender.com/users/${id}`, {
      method: 'DELETE',
    })
    window.location.reload()
  }

  return (
    <>
      {openDelClient && (
        <div className="fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-50">
          <div className="flex min-h-screen items-center justify-center">
            <div className="rounded-lg bg-zinc-800 p-6">
              <h3 className="text-xl font-semibold text-white">
                Excluir cliente
              </h3>
              <p className="text-sm text-white">
                Tem certeza de que quer excluir esse cliente?
              </p>
              <div className="m-3 flex justify-between">
                <button
                  className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                  onClick={toggleDelClient}
                >
                  Cancelar
                </button>
                <button
                  className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                  onClick={() => handleDelete(userId)}
                >
                  Deletar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
