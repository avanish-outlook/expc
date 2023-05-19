export const DataLoadingState = {
    IDLE: 'idle',
    LOADING: 'loading',
    SUCCEED: 'succeed',
    FAILED: 'Failed'
}

export class DataState {
    setInitialState() {
        return {
            isLoading: false,
            data: null,
            error: null,
            status: DataLoadingState.IDLE
        }
    }

    setLoadingState() {
        return {
            isLoading: true,
            data: null,
            error: null,
            status: DataLoadingState.LOADING
        }
    }
    setSuccessState(data) {
        return {
            isLoading: false,
            data: data,
            error: null,
            status: DataLoadingState.SUCCEED
        }
    }

    setSuccessState(error) {
        return {
            isLoading: false,
            data: null,
            error: error,
            status: DataLoadingState.FAILED
        }
    }



}