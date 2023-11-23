"use client"

export function DeleteButton({userId, handleDeleteUser}: {userId: string, handleDeleteUser}){
  return (
    <button
      className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      onClick={() => handleDeleteUser(userId)}
      >
        Delete
    </button>
  )
}