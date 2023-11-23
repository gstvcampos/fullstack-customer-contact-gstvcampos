import { User } from "@/app/page";
import { DialogProvider } from "@/contexts/DialogContext";
import DeleteEditButton from "./buttons/DeleteEditButton";

export default function UserLi({user}: {user: User}){
  return(
    <li key={user.id} className="flex justify-between items-center h-20 m-2 p-5 rounded-md border">
      <div>
        <p>{user.fullName}</p>
        <p>{user.email}</p>
      </div>
      <DialogProvider>
        <DeleteEditButton userId={user.id}/>
      </DialogProvider>
    </li>
  )
}
