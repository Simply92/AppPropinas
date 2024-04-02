import { Dispatch } from "react"
import type { MenuItem } from "../types"
import { OrderActions } from "../reducers/orderReducers"

type MenuItemProps = {
   item: MenuItem,
   dispatch: Dispatch<OrderActions>
}

const MenuItem = ({item, dispatch} : MenuItemProps) => {
  return (
    <div>
        <button className="border-2 border-teal-200 w-full p-3 flex justify-between hover:bg-teal-100"
        onClick={() => dispatch({type: 'add-item', payload: {item}})}>
      <p>{item.name}</p>
      <p className="font-back">$ {item.price}</p>
      </button>
    </div>
  )
}



export default MenuItem
