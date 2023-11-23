import { DialogProvider } from "@/contexts/DialogContext";
import DeleteEditButton from "./buttons/DeleteEditButton";

export default function ContactLi({contact}: {contact: Contact}){
  return(
    <li key={contact.id} className="flex justify-between items-center h-20 m-2 p-5 rounded-md border">
      <div>
        <p>{contact.fullName}</p>
        <p>{contact.email}</p>
      </div>
      <DialogProvider>
        <DeleteEditButton userId={contact.id}/>
      </DialogProvider>
    </li>
  )
}
