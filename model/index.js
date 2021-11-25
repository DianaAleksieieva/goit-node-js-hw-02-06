const getListContacts = require('./contacts/getListContacts')
const getContactById = require('./contacts/getContactById')
const addContact = require('./contacts/addContact')
const removeContact = require('./contacts/removeContact')
const updateContactsById = require('./contacts/updateContactsById')

module.exports = {
  getListContacts,
  getContactById,
  removeContact,
  addContact,
  updateContactsById,
}
