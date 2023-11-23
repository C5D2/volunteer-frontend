interface StatusType {
  isLoading: boolean;
  isError: boolean;
  error?: any;
}

type ErrorType<T> = {
  error: T | null;
};

export const manageStatus = ({ isLoading, isError }: StatusType, { error }: ErrorType<Error | null>) => {
  if (isLoading) {
    return <div>Loading...</div>;
  } else if (isError && error) {
    return <div>{error.message}</div>;
  }
  return null;
};
