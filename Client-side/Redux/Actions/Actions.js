import { UPDATE_USER, SET_USER } from "../ActionsType/ActionsTypes"

export const set_user=(payload)=>{
    
    return{
        type:SET_USER,
        payload
    }

   
}
export const update_user=(payload)=>{
    return{
        type:UPDATE_USER,
        payload
    }
}