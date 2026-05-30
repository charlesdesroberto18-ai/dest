"use client"

import { createContext, useContext, useState, ReactNode } from "react"

type OrderContextType = {
  isOrderFormOpen: boolean
  openOrderForm: () => void
  closeOrderForm: () => void
}

const OrderContext = createContext<OrderContextType | undefined>(undefined)

export function OrderProvider({ children }: { children: ReactNode }) {
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false)

  const openOrderForm = () => setIsOrderFormOpen(true)
  const closeOrderForm = () => setIsOrderFormOpen(false)

  return (
    <OrderContext.Provider value={{ isOrderFormOpen, openOrderForm, closeOrderForm }}>
      {children}
    </OrderContext.Provider>
  )
}

export function useOrder() {
  const context = useContext(OrderContext)
  if (context === undefined) {
    throw new Error("useOrder must be used within an OrderProvider")
  }
  return context
}
