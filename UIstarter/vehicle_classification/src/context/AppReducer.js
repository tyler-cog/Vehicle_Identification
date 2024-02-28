export default function appReducer(state, action) {
    switch(action.type) {
        case "ADD_ALL_DATA":
            return {
                state,
                carData: [ action.payload ],
            };
        
        default:
            return state;
    }
}