import { DataLoadingState } from "../redux/constants/common";
import config from "./config";

export function AddCaseCallback(field, dataLoadingState) {

    return (state, action) => {
        switch (dataLoadingState) {
            case 'pending':
                console.log(`pending state.${field}.data`, action)
                state[field].data = null;
                state[field].error = null;
                state[field].isLoading = true;
                state[field].status = DataLoadingState.LOADING;
                break;
            case 'fulfilled':
                console.log(`Fulfilled state.${field}.data`, action.payload)
                state[field].data = action.payload;
                state[field].error = null;
                state[field].isLoading = false;
                state[field].status = DataLoadingState.SUCCEED;
                break;
            case 'rejected':
                console.log(`Rejected state.${field}.error`, action)
                state[field].data = null;
                state[field].error = action.payload;
                state[field].isLoading = false;
                state[field].status = DataLoadingState.FAILED;
                break;

        }
    }

}


export const PhotoUrl = (path) => {
    return config.BACKEND_HOST_URL + path
}