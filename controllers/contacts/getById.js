const contactsOperation = require('../../model/contacts')
const { NotFound } = require('http-errors')

const getById = async (req, res, next) => {
  try {
    const { id } = req.params
    const result = await contactsOperation.getContactById(id)
    if (!result) {
      throw new NotFound(`Product with id=${id} not found`)
    }
    res.json({
      message: 'success',
      data: { result },
    })
  } catch (error) {
    next(error)
  }
}

module.exports = getById
