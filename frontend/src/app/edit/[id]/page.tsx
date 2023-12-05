import ContactLi from '@/components/ContactLi'
import AddContactBtn from '@/components/buttons/AddContactBtn'
import EditClientBtn from '@/components/buttons/EditClientBtn'
import { DialogProvider } from '@/contexts/DialogContext'
import { Client, Contact } from '@/interfaces/interfaces'
import Link from 'next/link'
import { PiKeyReturnBold } from 'react-icons/pi'

interface EditClientProps {
  params: {
    id: string
  }
}

export default async function Edit({ params }: EditClientProps) {
  const resClient = await fetch(
    `https://customer-contact.onrender.com/users/${params.id}`,
    {
      cache: 'no-store',
    },
  )

  const resCont = await fetch(
    `https://customer-contact.onrender.com/users/${params.id}/contacts`,
    {
      cache: 'no-store',
    },
  )

  const client: Client = await resClient.json()

  const contacts: Contact[] = await resCont.json()

  return (
    <main className="flex h-full items-center justify-center bg-neutral-950">
      <div className="h-5/6 w-96 overflow-auto rounded-md border bg-zinc-900 p-4">
        <header className="mb-6">
          <div className="flex items-center justify-between">
            <h1 className="mb-2 text-xl font-bold text-gray-300">
              Informações do Cliente
            </h1>
            <DialogProvider>
              <EditClientBtn client={client} />
            </DialogProvider>
          </div>
          <div className="mb-4">
            <h2 className="font-bold text-gray-300">Nome completo</h2>
            <p className="text-gray-600">{client.fullName}</p>
          </div>
          <div className="mb-4">
            <h2 className="font-bold text-gray-300">Email principal</h2>
            <p className="text-gray-600">{client.email}</p>
          </div>
          <div className="mb-4">
            <h2 className="font-bold text-gray-300">Telefone principal</h2>
            <p className="text-gray-600">{client.phone}</p>
          </div>
        </header>
        <div className="mb-6 flex items-center justify-between rounded-md bg-zinc-700 p-4">
          <h2 className="font-bold text-gray-300">Adicionar contato</h2>
          <DialogProvider>
            <AddContactBtn userId={client.id} />
          </DialogProvider>
        </div>
        <div className="h-1/2 rounded-md border-4 p-4">
          <h2 className="mb-2 font-bold text-gray-300">Outros contatos</h2>
          <ul className="h-5/6 overflow-y-auto">
            {contacts.map((contact) => (
              <ContactLi key={contact.id} contact={contact} />
            ))}
          </ul>
        </div>
        <div className="m-2 flex items-center justify-between">
          <h1 className="mb-2 text-xl font-bold text-gray-300">
            Retornar ao menu
          </h1>
          <Link href={'/'}>
            <PiKeyReturnBold size={25} />
          </Link>
        </div>
      </div>
    </main>
  )
}
