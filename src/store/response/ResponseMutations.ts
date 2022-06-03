import { IResponseState } from './ResponseTypes';

export default {
  setResponseMessage(state: IResponseState, message: string | null) {
    state.message = message;
  },
  setResponseHasError(state: IResponseState, hasError: boolean) {
    state.hasError = hasError;
  },
  setIsLoading(state: IResponseState, isLoading: boolean) {
    state.isLoading = isLoading;
  },
};
