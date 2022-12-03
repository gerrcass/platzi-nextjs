import React, { /* Dispatch, */ useContext, useReducer } from 'react'

export type CartItemType = TProduct & { quantity: number }
/* same as 👆
export interface CartItemType extends TProduct {
    quantity: number
} */
export type AllCartItemsType = [CartItemType]

export type CartState = {
    subTotal: number
    itemsInCart: AllCartItemsType
}
/* export type CartState = {
    [key: string]: CartItemType
} */

export type CartAction = {
    type: 'add' | 'remove'
    item: TProduct
    quantity?: number
}

const defaultState = {} as CartState

const ShopContext = React.createContext(defaultState)
/* const CartDispatchContext = React.createContext((() => { }) as Dispatch<
    CartAction
>) */

export const ShopProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(cartReducers, defaultState)

    const addToCart = (product: TProduct, quantity?: number) =>
        dispatch({
            type: 'add',
            item: product,
            quantity,
        })

    const removeFromCart = (product: TProduct) =>
        dispatch({
            type: 'remove',
            item: product,
        })

    const getCartSubTotal = () => {
        return state.itemsInCart.reduce((sum, item) => sum + (item.quantity * item.price), 0)
    }

    const value = {
        subTotal: getCartSubTotal(),
        itemsInCart: state.itemsInCart,
        addToCart,
        removeFromCart
    }

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}

const useShop = () => {
    const context = useContext(ShopContext)

    if (context === undefined) {
        throw new Error("useShop must be used within ShopContext")
    }
    return context
}
export default useShop

const shopReducer = (
    state: CartState,
    { item, type, quantity: qtyToAdd = 1 }: CartAction
) => {
    const existingCartItem = state.itemsInCart.filter(itemInCart => itemInCart.id === item.id)[0]
    switch (type) {
        case 'add': {
            let qty: number
            existingCartItem === undefined ? qty = qtyToAdd : qty = existingCartItem.quantity + qtyToAdd

            return {
                ...state,
                itemsInCart: state.itemsInCart.map(currentItem => {
                    if (currentItem.id === item.id) {
                        return {
                            ...currentItem,
                            quantity: qty
                        }
                    }
                })
            }
        }
        case 'remove': {
            if (existingCartItem == undefined) {
                return state
            }

            const newQty = existingCartItem.quantity - 1
            return {
                ...state,
                itemsInCart: state.itemsInCart.map(currentItem => {
                    if (currentItem.id === item.id && newQty > 0) {
                        return {
                            ...currentItem,
                            quantity: newQty
                        }
                    }
                })
            }
        }



    }

}

function cartReducers(
    state: CartState,
    { item, type, quantity: qtyToAdd = 1 }: CartAction
) {
    const existingCartItem = state[item.id]

    switch (type) {
        case 'add': {
            if (existingCartItem != undefined) {
                const quantity = existingCartItem.quantity + qtyToAdd
                return {
                    ...state,
                    [item.id]: {
                        ...existingCartItem,
                        quantity,
                    },
                }
            }

            return {
                ...state,
                [item.id]: {
                    ...item,
                    quantity: qtyToAdd,
                },
            }
        }

        case 'remove': {
            if (existingCartItem == undefined) {
                return state
            }

            const quantity = existingCartItem.quantity - 1
            if (quantity > 0) {
                return {
                    ...state,
                    [item.id]: {
                        ...existingCartItem,
                        quantity,
                    },
                }
            }

            const newCartItems = { ...state }
            delete newCartItems[item.id]
            return newCartItems
        }

        default: {
            throw new Error(`Unhandled action type: ${type}`)
        }
    }
}

const getCartSubTotal = (sum: number, item: CartItemType) => {
    sum += item.price * item.quantity
    return sum
}
const getCartCount = (sum: number, item: CartItemType) => sum + item.quantity
/**
 * Hey there insatiably brain,
 * Are you interested in this pattern where the Context values are
 * exposed without actually provinding access to the Context itself :)
 * https://kentcdodds.com/blog/how-to-use-react-context-effectively
 */






export const useCart = () => {
    const itemsById = useContext(ShopContext)
    const items = Object.values(itemsById)
    // Not familiar with Array.reduce? :)
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
    const count = items.reduce(getCartCount, 0)
    const subTotal = items.reduce(getCartSubTotal, 0)

    return {
        items,
        itemsById,
        count,
        subTotal,
    }
}
export const useCartMutations = () => {
    const dispatch = useContext(CartDispatchContext)

    const addToCart = (product: TProduct, quantity?: number) =>
        dispatch({
            type: 'add',
            item: product,
            quantity,
        })

    const removeFromCart = (product: TProduct) =>
        dispatch({
            type: 'remove',
            item: product,
        })

    return {
        addToCart,
        removeFromCart,
    }
}

//export default ShopProvider