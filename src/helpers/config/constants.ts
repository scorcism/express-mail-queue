export const PI = 3.145;

export const ERROR_CODE: Record<string, number> = {
  VALIDATION_ERROR: 8001,
};

export const ERROR_CODE_REV: Record<number, string> = {
  8001: "VALIDATION ERROR",
};

export const SUCCESS_CODE: Record<string, number> = {
  APPLE: 9001,
};

export const SUCCESS_CODE_REV: Record<number, string> = {
  9001: "APPLE",
};

export const ERROR_RESPONSE = (
  http_code: number,
  error_code: keyof typeof ERROR_CODE_REV,
  error: unknown,
) => {
  return {
    http_code,
    code: error_code,
    message: ERROR_CODE_REV[error_code],
    error: error,
    data: {},
  };
};

export const SUCCESS_RESPONSE = (
  http_code: number,
  success_code: keyof typeof SUCCESS_CODE_REV,
  data?: unknown,
) => {
  return {
    http_code,
    code: success_code,
    message: SUCCESS_CODE_REV[success_code],
    data: data,
    error: {},
  };
};
