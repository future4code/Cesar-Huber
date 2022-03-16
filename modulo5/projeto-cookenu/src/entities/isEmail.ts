export function validateEmail(email: string): boolean {
  var validEmail = /\S+@\S+\.\S+/
  return validEmail.test(email)
}