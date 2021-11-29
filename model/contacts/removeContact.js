const getListContacts = require('./getListContacts')
const updateContacts = require('./updateContacts')

const removeContact = async (id) => {
  const contacts = await getListContacts()
  const idx = contacts.findIndex((item) => item.id === id)
  if (idx === -1) {
    return null
  }
  const newContacts = contacts.filter((_, index) => index !== idx)
  await updateContacts(newContacts)
  return contacts[idx]
}
module.exports = removeContact
