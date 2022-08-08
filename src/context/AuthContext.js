import React, {useReducer, createContext } from 'react'

const AuthContext = createContext()
let initailState = {
    isAuthenticated:false
}
const reducer = ((state,action) => {
    console.log(action)
    console.log(state)
    switch(action.type){
        case "LOGOUT":
            return {
                isAuthenticated:false
            }
        case "LOGIN":
            return {
                isAuthenticated:true
            }
        default:
            return state;
    }
})
export default function AuthContextProvider(props) {
    const [state, dispatch] = useReducer(reducer, initailState)
  return (
    <AuthContext.Provider value={{state,dispatch}}
    >{props.children}</AuthContext.Provider>
  )
}
