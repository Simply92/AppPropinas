import type { MenuItem } from "../types"
type MenuItemProps = {
   item: MenuItem,
   addItem: (item : MenuItem) => void
}

const MenuItem = ({item, addItem} : MenuItemProps) => {
  return (
    <div>
        <button className="border-2 border-teal-200 w-full p-3 flex justify-between hover:bg-teal-100"
        onClick={() => addItem(item)}>
      <p>{item.name}</p>
      <p className="font-back">$ {item.price}</p>
      </button>
    </div>
  )
}



export default MenuItem
