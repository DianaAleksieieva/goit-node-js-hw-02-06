const { NotFound } = require('http-errors')
const { Contact } = require('../../models/contact')

const removeById = async (req, res, next) => {
  const { contactId } = req.params
  const result = await Contact.findByIdAndRemove(contactId)
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

module.exports = removeById
