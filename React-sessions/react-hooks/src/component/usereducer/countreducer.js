 export const initialState = {
    count: 0,
    incBy: 1
}


export  function countreducer(state=initialState, action){
switch (action.type) {
    case "increment":
        return {...state, count: state.count + state.incBy}
        break;

        case "decrement":
            break;

            case "reset":
                break;

    default:
        break;
}
}