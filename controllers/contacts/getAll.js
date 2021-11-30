const contactsOperation = require('../../model/contacts')

const getAll = async (req, res, next) => {
  try {
    const contacts = await contactsOperation.getListContacts()
    res.json({
      message: 'success',
      data: { contacts },
    })
  } catch (error) {
    next(error)
  }
}

module.exports = getAll
