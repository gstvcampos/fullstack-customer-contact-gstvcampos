import UserLi from '@/components/UserLi'
import AddClientBtn from '@/components/buttons/AddClientBtn'
import { DialogProvider } from '@/contexts/DialogContext'
import { Client } from '@/interfaces/interfaces'

export default async function Home() {
  const response = await fetch('https://customer-contact.onrender.com/users', {
    cache: 'no-store',
  })

  const clients: Client[] = await response.json()

  return (
    <main className="flex h-full items-center justify-center bg-neutral-950">
      <div className="h-5/6 w-96 overflow-auto rounded-md border bg-zinc-900 p-4">
        <header className="mb-6">
          <h1 className="mb-2 text-xl font-bold text-gray-300">
            Banco de dados interno
          </h1>
          <div className="mb-4">
            <h2 className="font-bold text-gray-300">Empresa</h2>
            <p className="text-gray-400">Kenzie Academy</p>
          </div>
          <div className="mb-4">
            <h2 className="font-bold text-gray-300">Projeto</h2>
            <p className="text-gray-400">FullStack: next/nest</p>
          </div>
          <div className="mb-4">
            <h2 className="font-bold text-gray-300">Email</h2>
            <p className="text-gray-400">kenzie@mail.com</p>
          </div>
        </header>
        <div className="mb-6 flex items-center justify-between rounded-md bg-zinc-700 p-4">
          <h2 className="font-bold text-gray-50">Adicionar cliente</h2>
          <DialogProvider>
            <AddClientBtn />
          </DialogProvider>
        </div>
        <div className="h-1/2 rounded-md border-4 p-4">
          <h2 className="mb-2 font-bold text-gray-300">Lista de clientes</h2>
          <ul className="h-5/6 overflow-y-auto">
            {clients.map((client: Client) => (
              <UserLi key={client.id} client={client} />
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
}
