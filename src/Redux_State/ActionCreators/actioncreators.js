export const mode = (mode)=>{
    return (dispatch) => {dispatch({type: "dark", payload: mode})}
}
// export const lightmode = (mode)=>{
//     return (dispatch) => {dispatch({type: "light", payload: mode})}
// }