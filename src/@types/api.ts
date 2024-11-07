export type CommonResponse<T> = {
  result: {
    code: number;
    message: string;
  };
  payload: T;
};

export type CommonError = {
  statusCode: string;
  message: string;
  content: string;
};
