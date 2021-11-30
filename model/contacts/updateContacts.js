const fs = require('fs/promises')
const contactPath = require('../../helpers/filePath')

const updateContacts = (data) => {
  fs.writeFile(contactPath, JSON.stringify(data))
}
module.exports = updateContacts
