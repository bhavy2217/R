import { ActionTypes } from '../Constants/Constants';

export const addFav = (payload) =>{
    return {
        type : ActionTypes.AddFav,
        payload : payload,
    };
};
export const removeFav = (payload) =>{
    return {
        type : ActionTypes.RemoveFav,
        payload : payload,
    };
};

export const emptyFav = (payload) =>{
    return {
        type : ActionTypes.EmptyFav,
        payload : payload,
    };
};
