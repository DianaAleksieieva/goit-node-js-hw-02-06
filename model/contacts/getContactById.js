const getListContacts = require('./getListContacts')

const getContactById = async (id) => {
  const contacts = await getListContacts()
  const result = contacts.find((contact) => contact.id.toString() === id)
  if (!result) {
    return null
  }
  return result
}

module.exports = getContactById
