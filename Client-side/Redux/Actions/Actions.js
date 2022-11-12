import { LOG_OUT, SET_USER } from "../ActionsType/ActionsTypes"

export const set_user=(payload)=>{
    
    return{
        type:SET_USER,
        payload
    }

   
}
export const logout_user=index=>({
    type:LOG_OUT,
    payload:index
});