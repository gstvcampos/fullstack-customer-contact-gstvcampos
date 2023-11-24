'use client'

import { DialogContext } from '@/contexts/DialogContext'
import { useContext } from 'react'

export default function DeleteContModal({
  userId,
  contactId,
}: {
  userId: string
  contactId: string
}) {
  const { openDelContact, toggleDelContact } = useContext(DialogContext)

  const handleDelete = async (userId: string, id: string) => {
    await fetch(
      `https://customer-contact.onrender.com/users/${userId}/contacts/${id}`,
      {
        method: 'DELETE',
      },
    )
    window.location.reload()
  }

  return (
    <>
      {openDelContact && (
        <div className="fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-50">
          <div className="flex min-h-screen items-center justify-center">
            <div className="rounded-lg bg-white p-6">
              <h3 className="mb-4 text-xl font-bold text-gray-700">
                Excluir Contato
              </h3>
              <p className="mb-4 text-sm text-gray-600">
                Tem certeza de que quer excluir esse contato?
              </p>
              <div className="flex justify-between">
                <button
                  className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                  onClick={toggleDelContact}
                >
                  Cancelar
                </button>
                <button
                  className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                  onClick={() => handleDelete(userId, contactId)}
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
