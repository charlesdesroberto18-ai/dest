"use client"

import { useOrder } from "@/contexts/order-context"
import { OrderForm } from "./order-form"

export function GlobalOrderForm() {
  const { isOrderFormOpen, closeOrderForm } = useOrder()
  
  return <OrderForm isOpen={isOrderFormOpen} onClose={closeOrderForm} />
}
