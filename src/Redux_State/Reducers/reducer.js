const modereducer = (state = "light", action)=>{
    switch(action.type){
        case "light":
            return state = action.payload;
        case "dark":
            return state = action.payload;
        default:
            return state;
    }
}
export default modereducer;