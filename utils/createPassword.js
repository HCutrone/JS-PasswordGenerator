const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numebrs = '0123456789'
const symbols = '!@#$%^&*_-+='

const createPassword = (length = 8, hasNumbers = true, hasSymbols = true) => {
  let chars = alpha
  hasNumbers ? (chars += numebrs) : ''
  hasSymbols ? (chars += symbols) : ''
  return generatePassord(length, chars)
}

const generatePassord = (length, chars) => {
  let password = ''
  for(let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return password
}

export { createPassword as default }