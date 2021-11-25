const getListContacts = require('./getListContacts')
const updateContacts = require('./updateContacts')
const { v4 } = require('uuid')

const addContact = async (data) => {
  const contacts = await getListContacts()
  const newContact = { ...data, id: v4() }
  contacts.push(newContact)
  await updateContacts(contacts)
  return newContact
}

module.exports = addContact
