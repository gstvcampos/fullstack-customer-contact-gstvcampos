'use client'

import { DialogContext } from '@/contexts/DialogContext'
import { CreateContact } from '@/interfaces/interfaces'
import { createContactSchema } from '@/schemas/schemas'
import { api } from '@/services/api'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'

export default function AddContModal({ userId }: { userId: string }) {
  const { openAddContact, toggleAddContact } = useContext(DialogContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateContact>({ resolver: zodResolver(createContactSchema) })

  const handleAdd = async (data: CreateContact) => {
    await api.post(
      `https://customer-contact.onrender.com/users/${userId}/contacts/`,
      data,
    )
    window.location.reload()
  }

  return (
    <>
      {openAddContact && (
        <div className="fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-50">
          <div className="flex min-h-screen items-center justify-center">
            <div className="rounded-lg bg-zinc-900 p-6">
              <h3 className="mb-4 text-center text-xl font-bold text-gray-300">
                Adicionar contato
              </h3>
              <form onSubmit={handleSubmit(handleAdd)}>
                <div className="mb-4">
                  <label className="font-bold text-gray-300">Email</label>
                  <input
                    {...register('email')}
                    required
                    className="mt-1 w-full rounded-md border bg-zinc-800 p-2"
                    type="text"
                    placeholder="Email"
                  />
                  {errors.email ? (
                    <p className="text-xs text-red-600">
                      {errors.email.message}
                    </p>
                  ) : (
                    <p></p>
                  )}
                </div>
                <div className="mb-4">
                  <label className="font-bold text-gray-300">Telefone</label>
                  <input
                    {...register('phone')}
                    required
                    className="mt-1 w-full rounded-md border bg-zinc-800 p-2"
                    type="text"
                    placeholder="Telefone"
                  />
                  {errors.phone ? (
                    <p className="text-xs text-red-600">
                      {errors.phone.message}
                    </p>
                  ) : (
                    <p></p>
                  )}
                </div>
                <div className="mt-4 flex justify-between">
                  <button
                    className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-900"
                    onClick={toggleAddContact}
                  >
                    Cancelar
                  </button>
                  <button
                    className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-900"
                    type="submit"
                  >
                    Adicionar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
