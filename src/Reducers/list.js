const listReducer = (state = [], action) => {
    switch(action.type){
        case 'RESULTS':
            return state = action.payload;
        default:
            return state
    }
}
export default listReducer;