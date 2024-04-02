import { MenuItem, orderItem } from "../types";


export type OrderActions =
    { type: 'add-item', payload: { item: MenuItem } } |
    { type: 'remove-item', payload: { id: MenuItem['id'] } } |
    { type: 'placeOrder' } |
    { type: 'add-tip', payload: { value: number } }

export type OrderState = {
    order: orderItem[],
    tip: number
}

export const initialState: OrderState = {
    order: [],
    tip: 0
}

export const orderReducer = (state: OrderState = initialState, action: OrderActions) => {
    if (action.type === 'add-item') {
        const itemExist = state.order.find(orderItem => orderItem.id === action.payload.item.id)
        let updateOrder: orderItem[] = []
        if (itemExist) {
            updateOrder = state.order.map(orderItem => orderItem.id === action.payload.item.id ?
                { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem)

        } else {
            const newItem: orderItem = { ...action.payload.item, quantity: 1 }
            updateOrder = [...state.order, newItem]
        }

        return {
            ...state,
            order: updateOrder
        }
    }
    if (action.type === 'remove-item') {
        const removeItem = state.order.filter(item => item.id !== action.payload.id)
        return {
            ...state,
            order: removeItem
        }
    }
    if (action.type === 'placeOrder') {
        return {
            ...state,
            order: [],
            tip: 0
        }
    }
    if (action.type === 'add-tip') {
        const tip = action.payload.value
        return {
            ...state,
            tip
        }
    }
    return state
}