
const initialState = {
    bank: 0,
    isSavingAccount: true
}

export function bankReducer(state = initialState, action){

    switch (action.type) {
        case "deposit":
            return {...state, bank:state.bank + action.payload, isSavingAccount: state.isSavingAccount}
            break;

            case "withdraw":
            return {...state, bank:state.bank - action.payload, isSavingAccount: state.isSavingAccount}
            break;

            case "change-acct":
            return {...state, bank:state.bank, isSavingAccount: !state.isSavingAccount}
            break;

            case "interest":
            return {...state, bank:state.bank *1.24, isSavingAccount: state.isSavingAccount}
            break;
    
        default:
            console.log(state)
            console.log({...state})
            return {...state}
            break;
    }
    
}