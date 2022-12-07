import React, { createContext, useContext, useReducer } from 'react'

export type CartItemType = TProduct & { quantity: number }

export type AllCartItemsType = CartItemType[]

export type CartState = {
    items: AllCartItemsType
    total: number
}

type ContextType = CartState & { count: number } & {
    addToCart(product: TProduct, quantity: number): void
    removeFromCart(product: TProduct, quantity: number): void
}

export type CartAction = {
    type: 'add' | 'remove'
    payload: CartState
}

const defaultState = { items: [], total: 0 } as CartState
const defaultContextState = {} as ContextType
//
const ShopContext = createContext(defaultContextState)


const shopReducer = (
    state: CartState,
    { type, payload }: CartAction
) => {
    switch (type) {
        case 'add': {
            console.log('ADD_TO_CART', payload)
            return {
                ...state,
                items: payload.items,
                total: payload.total
            }
        }
        case 'remove': {
            console.log('REMOVE_FROM_CART', payload)
            return {
                ...state,
                items: payload.items,
                total: payload.total
            }
        }
        default:
            throw new Error(`No case for type ${type} found in shopReducer.`) // This is for developer only and shouldn't be seen by any end user
    }
}

export const ShopProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(shopReducer, defaultState)

    const addToCart = (product: TProduct, quantity: number) => {
        const existingCartItem = state.items.find((itemInCart: CartItemType) => itemInCart.id === product.id)
        let updatedCart: AllCartItemsType

        if (existingCartItem === undefined) {
            updatedCart = state.items.concat({
                ...product,
                quantity
            })
        } else {
            updatedCart = state.items.map((currentItem: CartItemType) => {
                if (currentItem.id === product.id) {
                    return {
                        ...currentItem,
                        quantity: currentItem.quantity + quantity
                    }
                } else {
                    return currentItem
                }
            })
        }

        dispatch({
            type: 'add',
            payload: {
                items: updatedCart,
                total: getCartTotal(updatedCart),
            },
        })

    }
    const removeFromCart = (product: TProduct, quantity: number = 1) => {

        const updatedCart = state.items.reduce<AllCartItemsType>((itemsInCart, currentItem) => {
            if (currentItem.id === product.id) {
                /* 👇 There is no 'else' event, which means that currentItem
                      simply doesn't get included when not enough quantity */
                if (currentItem.quantity - quantity > 0) {
                    itemsInCart.push({
                        ...currentItem,
                        quantity: currentItem.quantity - quantity
                    })
                }
            } else {
                itemsInCart.push(currentItem)
            }
            return itemsInCart

        }, [])

        dispatch({
            type: 'remove',
            payload: {
                items: updatedCart,
                total: getCartTotal(updatedCart),
            },
        })

    }

    const getCartTotal = (products: AllCartItemsType) => {
        return products.reduce((sum, item) => sum + (item.quantity * item.price), 0)
    }

    const value = {
        items: state.items,
        total: state.total,
        count: state.items.length,
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