import {actionPending,
        actionRejected,
        actionResolved} from "../actions/actions";
import {CUDBikes, getBikes} from "../api/axiosFetch";


function actionPromise(Promise, name){
    return async function (dispatch){
        dispatch(actionPending(name));
        try {
            let {data} = await Promise;
            dispatch(actionResolved(data, name));
            return data;
        }
        catch (e) {
            dispatch(actionRejected(e, name))
        }
    }
}

export const actionGetBikes = () => {
    return async (dispatch) => {
       let bikes = await dispatch(actionPromise(getBikes(), 'bikes'));
       return bikes;
    }
};

export const actionDeleteBike = (id) => {
  return async (dispatch) => {
    await dispatch(actionPromise(
        CUDBikes('http://localhost:4001/bike/delete', {id}), 'delete'));
    }
};

export const actionUpdate = (id) => {
    return async (dispatch) => {
        await dispatch(actionPromise(
            CUDBikes('http://localhost:4001/bike/rent', {id}), 'rent'))
    }
};

export const actionCreate = (data) => {
    return async (dispatch) => {
        await dispatch(actionPromise(
            CUDBikes('http://localhost:4001/bike/create' , data), 'create'))
    }
};