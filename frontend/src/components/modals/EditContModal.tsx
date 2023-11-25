'use client'

import { DialogContext } from '@/contexts/DialogContext'
import { api } from '@/services/api'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export const editContactSchema = z.object({
  email: z.string().email('Formato de email invalido').optional(),
  phone: z.string().min(8, 'minimo 8 caracteres').optional(),
})

type EditContactSchema = z.infer<typeof editContactSchema>

export default function EditContModal({
  userId,
  contactId,
}: {
  userId: string
  contactId: string
}) {
  const { openEditContact, toggleEditContact } = useContext(DialogContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditContactSchema>({ resolver: zodResolver(editContactSchema) })

  const handleEdit = async (data: EditContactSchema) => {
    await api.patch(
      `https://customer-contact.onrender.com/users/${userId}/contacts/${contactId}`,
      data,
    )
    window.location.reload()
  }

  return (
    <>
      {openEditContact && (
        <div className="fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-50">
          <div className="flex min-h-screen items-center justify-center">
            <div className="rounded-lg bg-zinc-900 p-6">
              <h3 className="mb-4 text-center text-xl font-bold text-gray-300">
                Editar contato
              </h3>
              <form onSubmit={handleSubmit(handleEdit)}>
                <div className="mb-4">
                  <label className="font-bold text-gray-300">Email</label>
                  <input
                    {...register('email')}
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
                    onClick={toggleEditContact}
                  >
                    Cancelar
                  </button>
                  <button
                    className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-900"
                    type="submit"
                  >
                    Editar
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
