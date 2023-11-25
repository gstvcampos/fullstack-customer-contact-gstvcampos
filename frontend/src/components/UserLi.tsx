import { DialogProvider } from '@/contexts/DialogContext'
import { Client } from '@/interfaces/interfaces'
import DelEditClientBtn from './buttons/DelEditClientBtn'

export default function UserLi({ client }: { client: Client }) {
  return (
    <li
      key={client.id}
      className="m-2 flex h-20 items-center justify-between rounded-md border p-5"
    >
      <div>
        <p className="text-sm">{client.fullName}</p>
        <p className="text-sm">{client.email}</p>
      </div>
      <DialogProvider>
        <DelEditClientBtn userId={client.id} />
      </DialogProvider>
    </li>
  )
}
