'use client'

import { ReactNode, createContext, useState } from 'react'

interface DialogContextType {
  openDelClient: boolean
  toggleDelClient: () => void
  openEditClient: boolean
  toggleEditClient: () => void
  openAddContact: boolean
  toggleAddContact: () => void
  openDelContact: boolean
  toggleDelContact: () => void
  openEditContact: boolean
  toggleEditContact: () => void
  openAddClient: boolean
  toggleAddClient: () => void
}

export const DialogContext = createContext({} as DialogContextType)

export function DialogProvider({ children }: { children: ReactNode }) {
  const [openDelClient, setOpenDelClient] = useState(false)
  const [openEditClient, setOpenEditClient] = useState(false)
  const [openAddContact, setOpenAddContact] = useState(false)
  const [openEditContact, setOpenEditContact] = useState(false)
  const [openDelContact, setOpenDelContact] = useState(false)
  const [openAddClient, setOpenAddClient] = useState(false)

  function toggleDelClient() {
    setOpenDelClient((state) => !state)
  }

  function toggleEditClient() {
    setOpenEditClient((state) => !state)
  }

  function toggleAddContact() {
    setOpenAddContact((state) => !state)
  }

  function toggleEditContact() {
    setOpenEditContact((state) => !state)
  }

  function toggleDelContact() {
    setOpenDelContact((state) => !state)
  }

  function toggleAddClient() {
    setOpenAddClient((state) => !state)
  }

  return (
    <DialogContext.Provider
      value={{
        openDelClient,
        toggleDelClient,
        openEditClient,
        toggleEditClient,
        openAddContact,
        toggleAddContact,
        openEditContact,
        toggleEditContact,
        openDelContact,
        toggleDelContact,
        openAddClient,
        toggleAddClient,
      }}
    >
      {children}
    </DialogContext.Provider>
  )
}
