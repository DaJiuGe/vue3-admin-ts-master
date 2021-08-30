export function validatePhone(value: string): boolean {
  const reg = /^1[3456789]\d{9}$/g;
  return reg.test(value);
}

export function validatePassword(value: string): boolean {
  const reg = /^(?!\d+)$(?![^a-zA-Z]+$)\s[6,20]$/g;
  return reg.test(value);
}
