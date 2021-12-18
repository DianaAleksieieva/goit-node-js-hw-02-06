const { Contact } = require('../../models')

const add = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const contacts = await Contact.create({ ...req.body, owner: _id });
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
