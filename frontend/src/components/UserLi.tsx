import { User } from '@/app/page'
import { DialogProvider } from '@/contexts/DialogContext'
import DelEditClientBtn from './buttons/DelEditClientBtn'

export default function UserLi({ user }: { user: User }) {
  return (
    <li
      key={user.id}
      className="m-2 flex h-20 items-center justify-between rounded-md border p-5"
    >
      <div>
        <p className="text-sm">{user.fullName}</p>
        <p className="text-sm">{user.email}</p>
      </div>
      <DialogProvider>
        <DelEditClientBtn userId={user.id} />
      </DialogProvider>
    </li>
  )
}
