export const isNumber = (value) => /^[+-]?\d+(\.\d+)?$/.test(value);
export const isNotEmpty = (value) => /\S+/.test(value);
export const isMinLength = (value, minLength) => value.length >= minLength;
