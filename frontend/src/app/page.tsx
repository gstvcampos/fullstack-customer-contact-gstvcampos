import UserLi from "@/components/UserLi";
import { IoPersonAdd } from "react-icons/io5";

export interface User {
  id: string;
  email: string;
  fullName: string;
  phone: string;
  createdAt: string;
}

export default async function Home() {
  const response = await fetch('https://customer-contact.onrender.com/users', {
    cache: 'no-store'
  })

  const users: User[] = await response.json()

  return (
      <main className="flex h-screen justify-center items-center bg-neutral-950">
        <div className="h-5/6 w-96 border rounded-md">
          <header className="flex justify-between items-center h-1/6 p-5 border-4 rounded-md">
            <h1 className="text-3xl">Lista de clientes</h1>
              <button>
                <IoPersonAdd size={50} />
              </button>
          </header>
          <ul className="h-5/6 overflow-y-auto border-4 rounded-md">
            {users.map((user: User)=> (
              <UserLi key={user.id} user={user}/>
            ))}
          </ul>        
        </div>
      </main>
  )
}