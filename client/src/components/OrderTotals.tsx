import { Dispatch, useMemo } from "react"
import { orderItem } from "../types"
import { formatCurrency } from "../helpers"
import { OrderActions } from "../reducers/orderReducers"

type OrderTotalsProps = {
    order: orderItem[],
    tip: number,
    dispatch: Dispatch<OrderActions>
}

const OrderTotals = ({order, tip, dispatch} : OrderTotalsProps) => {

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
    <button className="w-full bg-black p-3 uppercase text-white 
    font-bold mt-10 disabled:opacity-10"
    disabled= {totalAmount === 0}
    onClick={() => dispatch({type: 'placeOrder'})}>

        Guardar orden
    </button>
    </>
  )
}

export default OrderTotals
