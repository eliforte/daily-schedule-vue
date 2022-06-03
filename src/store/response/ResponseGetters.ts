import { IResponseState } from './ResponseTypes';

export default {
  getResponseMessage: (state: IResponseState): string | null => state.message,
  getResponseHasError: (state: IResponseState): boolean => state.hasError,
  getIsLoading: (state: IResponseState): boolean => state.isLoading,
};
