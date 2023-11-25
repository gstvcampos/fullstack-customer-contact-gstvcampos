
import { DialogProvider } from '@/contexts/DialogContext'
import { Contact } from '@/interfaces/interfaces'
import DelEditContactBtn from './buttons/DelEditContactBtn'

export default function ContactLi({ contact }: { contact: Contact }) {
  return (
    <li
      key={contact.id}
      className="m-2 flex h-20 items-center justify-between rounded-md border p-5"
    >
      <div>
        <p className="text-sm">{contact.email}</p>
        <p className="text-sm">{contact.phone}</p>
      </div>
      <DialogProvider>
        <DelEditContactBtn userId={contact.userId} contactId={contact.id} />
      </DialogProvider>
    </li>
  )
}
