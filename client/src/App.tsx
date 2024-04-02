import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import { menuItems } from "./data/db"
import OrderTotals from "./components/OrderTotals"
import TipsPercentage from "./components/TipsPercentage"
import Fondo from "../public/fondo2.avif"
import { useReducer } from "react"
import { initialState, orderReducer } from "./reducers/orderReducers"


function App() {

  const [state, dispatch] = useReducer(orderReducer, initialState)

  return (
    <div  className="bg-cover bg-no-repeat w-full h-full"
    style={{ backgroundImage: `url(${Fondo})` }}>
     <header className="bg-teal-300 py-5">
      <h1 className="text-center text-4xl font-black">Calculadora de Propinas y Consumo</h1>
    </header>

    <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
      <div className="p-5">
      <h2 className="text-4xl font-black">Menú</h2>
      <div className="space-y-3 mt-8">
      {menuItems.map(item => (
        <MenuItem
        key={item.id}
        item={item}
        dispatch={dispatch}/>
      ))}
      </div>
      </div>
      
      <div className="border border-slate-400 p-5 rounded-lg space-y-10">
        {state.order.length > 0 ?(
          <>
          <OrderContents
          order={state.order}
          dispatch={dispatch}/>
         <TipsPercentage
         dispatch={dispatch}
         tip={state.tip}/>
         <OrderTotals
         order={state.order}
         tip={state.tip}
         dispatch={dispatch}/>
      </>
        ) : (
          <p className="text-center">La orden esta vacia</p>
        )}
      
      </div>

      
    </main>
    </div>
  )
}

export default App
