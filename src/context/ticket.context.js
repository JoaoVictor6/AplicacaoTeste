import React, {createContext, useContext, useState} from 'react'


const TicketContext = createContext(null)

export function TicketProvider({children}) {
  const [ticket, setTicket] = useState()
  return (
    <TicketContext.Provider value={{
      ticket, setTicket
    }}>
      {children}
    </TicketContext.Provider>
  )
}

export function useTicket(){
  const context = useContext(TicketContext)

  return context
}