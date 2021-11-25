const getListContacts = require('./getListContacts')
const updateContacts = require('./updateContacts')

const updateContactsById = async (id, data) => {
  const contacts = await getListContacts()
  const idx = contacts.findIndex((item) => item.id === id)
  if (idx === -1) {
    return null
  }
  contacts[idx] = { ...data, id }
  await updateContacts(contacts)
  return contacts[idx]
}

module.exports = updateContactsById
