interface EditClientProps {
  params: {
    id: string
  }
}

export interface User {
  id: string;
  email: string;
  fullName: string;
  phone: string;
  createdAt: string;
}

export interface Contact {
  id: string;
  email: string;
  fullName: string;
  phone: string;
  createdAt: string;
}

export default async function Edit({params}: EditClientProps) {
  const resClient = await fetch(`https://customer-contact.onrender.com/users/${params.id}`,{
    cache: 'no-store'
  })

  const resCont = await fetch(`https://customer-contact.onrender.com/users/${params.id}/contacts`,{
    cache: 'no-store'
  })

  const client = await resClient.json()

  const contacts = await resCont.json()

  return(
    <main className="flex h-screen justify-center items-center bg-neutral-950">
        <div className="h-5/6 w-96 border rounded-md">
          <header className="flex justify-between items-center h-1/6 p-5 border-4 rounded-md">
            <h1 className="text-3xl">Lista de contatos</h1>
          </header>
          <ul className="h-5/6 overflow-y-auto border-4 rounded-md">
            {contacts.map((contact)=> (
              <ContactLi key={contact.id} contact={contact}/>
            ))}
          </ul> 
        </div>
      </main>
  )
}