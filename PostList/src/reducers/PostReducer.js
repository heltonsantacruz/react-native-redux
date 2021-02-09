
const initialState = {
    data: [],
    selected: null
}

export default (state = initialState, action) => {

    switch(action.type){
        case 'FETCH_POSTS':
            return {
                ...state,
                data: action.payload.data
            }
        case 'FETCH_POST':
            return {
                ...state,
                selected: action.payload.data
            }    
        default:
            return state    
    }
    
}    
