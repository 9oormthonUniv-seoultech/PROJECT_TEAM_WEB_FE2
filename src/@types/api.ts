export type CommonResponse<T> = {
  result: {
    code: number;
    message: string;
  };
  payload: T;
};

export type CommonError = {
  errorCode: string;
  message: string;
  success: boolean;
};
