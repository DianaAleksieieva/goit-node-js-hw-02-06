const fs = require('fs/promises')
const contactPath = require('../filePath')

const listContacts = async () => {
  const data = await fs.readFile(contactPath)
  const contacts = JSON.parse(data)
  return contacts
}

module.exports = listContacts
