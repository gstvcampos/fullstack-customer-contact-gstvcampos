import { DeleteButton } from "./DeleteButton"

export default async function DeleteModal({ userId }: {userId: string}) {
  const handleDeleteUser = async (userId: string) => {
    const res = await fetch(`https://customer-contact.onrender.com/users/${userId}`, {
      method: 'DELETE',
    })
  }

  return (
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold text-gray-900">
              Excluir cliente
            </h3>
            <p className="text-sm text-gray-500">
              Tem certeza de que quer excluir esse cliente?
            </p>
            <div className="mt-4 flex justify-end">
              <DeleteButton handleDeleteUser={handleDeleteUser} userId={userId}/>
              <button
                className="ml-2 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}