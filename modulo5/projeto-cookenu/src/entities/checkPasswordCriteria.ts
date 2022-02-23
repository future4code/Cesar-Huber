export function checkPassword(p: string): boolean {
  var password = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/
  if (p.match(password)) return true
  return false
}