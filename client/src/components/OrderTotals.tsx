import { useMemo } from "react"
import { orderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order: orderItem[],
    tip: number
}

const OrderTotals = ({order, tip} : OrderTotalsProps) => {

    const subtotalAmout = useMemo(() => order.reduce((total, item)=> total + (item.quantity * item.price), 0), 
    [order])
    const tipAmount = useMemo(() => subtotalAmout * tip, [tip, order])
    const totalAmount = useMemo(() => subtotalAmout + tipAmount ,[tip, order])

  return (
    <>
    <div className="space-y-3">
      <h2 className="font.black text-2xl">Totales y Propina:</h2>
      <p>Subtotal a pagar: {''}
        <span className="font-bold">{formatCurrency(subtotalAmout)}</span>
      </p>
      <p>Propina: {''}
        <span className="font-bold">{formatCurrency(tipAmount)}</span>
      </p>
      <p>Total a Pagar: {''}
        <span className="font-bold">{formatCurrency(totalAmount)}</span>
      </p>
    </div>
    <button></button>
    </>
  )
}

export default OrderTotals
