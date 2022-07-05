
import  {
    SET_FILTER,
    SET_ACTIVE_INVOICE,
    GET_INVOICES,
    GET_INVOICE,
    SET_INDEX
} from '../type';

export function dataReducer(state, action) {
    switch (action.type) {
        case GET_INVOICES:
        return {
          ...state,
          invoices: action.payload
        };
        case GET_INVOICE:
          return {  ...state, activeInvoice: action.payload };
        case SET_FILTER:
          return { ...state, filter: action.payload };
        case SET_ACTIVE_INVOICE:
          return { ...state, activeInvoice: action.payload };
          case SET_INDEX: 
          return { ...state, index: action.payload };
        default:
            return state;
    }
}