
import  {
    ADD_INVOICE,
    EDIT_INVOICE,
    DELETE_INVOICE,
    SET_FILTER,
    SET_ACTIVE_INVOICE,
    GET_INVOICES
} from '../type';

export function dataReducer(state, action) {
    switch (action.type) {
case ADD_INVOICE:
        return {
          ...state,
          invoices: [...state.invoices, action.payload]
        };
        case GET_INVOICES:
          return {  ...state, invoices: action.payload };
        case SET_FILTER:
          return { ...state, filter: action.payload };
        case SET_ACTIVE_INVOICE:
          return { ...state, activeInvoice: action.payload };
        default:
            return state;
    }
}