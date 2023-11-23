interface EditClientProps {
  params: {
    id: string
  }
}

export default async function Edit({params}: EditClientProps) {
  const client = await fetch(`https://customer-contact.onrender.com/users/${params.id}`,{
    cache: 'no-store'
  })

  const contacts = await fetch('https://customer-contact.onrender.com/users',{
    cache: 'no-store'
  })

  console.log(params.id)
  return(
    <main className="flex h-screen justify-center items-center bg-neutral-950">
        <div className="h-5/6 w-96 border rounded-md">
          <header className="flex justify-between items-center h-1/6 p-5 border-4 rounded-md">
            <h1 className="text-3xl">Lista de contatos</h1>
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