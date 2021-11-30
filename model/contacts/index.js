const getListContacts = require('./getListContacts')
const getContactById = require('./getContactById')
const addContact = require('./addContact')
const removeContact = require('./removeContact')
const updateContactsById = require('./updateContactsById')

module.exports = {
  getListContacts,
  getContactById,
  removeContact,
  addContact,
  updateContactsById,
}
