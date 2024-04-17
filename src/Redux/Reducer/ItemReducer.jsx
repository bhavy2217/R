import { ActionTypes } from '../Constants/Constants'
const initState = {
    items: [],
};

const ItemReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case ActionTypes.AddFav:
            return {
                ...state,
                items: payload,
            };
        case ActionTypes.RemoveFav:
            return {
                ...state,
                items: payload,
            };
        case ActionTypes.EmptyFav:
            return {
                ...state,
                items: payload,
            };
        default:
            return state;
    }
}
export default ItemReducer;