import users from './users.js';

const separator = '\n'

const requestedEntries = [
'usr',
'eme',
'psw',
'age',
'loc',
'fll',
]

let cleanedUsers = []
let isNew = true
let validUserCounter = 0

users.split(separator).forEach((el) => {
  if (isNew) {
    cleanedUsers.push(el)
  } else {
    const lastPosition = cleanedUsers.length - 1
    cleanedUsers[lastPosition] = cleanedUsers[lastPosition] + ' ' + el
  }
  isNew = el == ''
})

console.log('TOTAL: ', cleanedUsers.length)

cleanedUsers.forEach(user => {
  const isValid = requestedEntries.every((e) => {
    const regex = new RegExp(`(${e}:)[\\S]+`, 'g')
    const entry = user.match(regex)
    const value = (entry && entry[0].replace(`${e}:`, ''))
    return value + user.includes(e)
  })
  if (isValid) {
    validUserCounter++
  }
})

console.log('VALIDOS: ', validUserCounter);