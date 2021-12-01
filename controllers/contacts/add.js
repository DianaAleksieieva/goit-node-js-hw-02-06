const { Contact } = require('../../models')

const add = async (req, res, next) => {
  try {
    const contacts = await Contact.create(req.body)
    res.status(201).json({
      status: 'success',
      code: 200,
      data: {
        contacts,
      },
    })
  } catch (error) {
    next(error)
  }
}

module.exports = add
