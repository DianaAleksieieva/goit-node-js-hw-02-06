const contactsOperation = require('../../models')

const { NotFound } = require('http-errors')

const add = async (req, res, next) => {
  const { contactId } = req.params
  const result = await contactsOperation.removeContact(contactId)
  if (!result) {
    throw new NotFound(`Product with id=${contactId} not found`)
  }
  res.status(204).json({
    status: 'success',
    code: 200,
    message: 'contact deleted',
    data: {
      result,
    },
  })
}

module.exports = add
