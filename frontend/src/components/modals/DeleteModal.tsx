"use client"

import { DialogContext } from "@/contexts/DialogContext";
import { useContext } from "react";

export default function DeleteModal({ userId }: {userId: string}) {
  const { open, toggle } = useContext(DialogContext)

  const handleDelete = async (id: string) => {
    const res = await fetch(`https://customer-contact.onrender.com/users/${id}`, {
      method: "DELETE"
    });
    window.location.reload();
  };

  return (
    <>
    {open && (
      <div className="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-50">
        <div className="flex items-center justify-center min-h-screen">
          <div className="bg-zinc-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white">
              Excluir cliente
            </h3>
            <p className="text-sm text-white">
              Tem certeza de que quer excluir esse cliente?
            </p>
            <div className="flex justify-between m-3">
                <button
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                  onClick={toggle}
                >
                  Cancelar
                </button>
                <button
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
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