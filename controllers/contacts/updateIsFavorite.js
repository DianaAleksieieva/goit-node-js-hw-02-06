const { NotFound } = require('http-errors')

const { Contact } = require('../../models')

const updateIsFavorite = async (req, res) => {
  const { contactId } = req.params
  const { favourite } = req.body
  const result = await Contact.findByIdAndUpdate(
    contactId,
    { favourite },
    { new: true }
  )
  if (!result) {
    throw new NotFound(`Contact with id=${contactId} not found`);
  }
  res.json({
    status: 'success',
    code: 200,
    data: {
      result,
    },
  })
}

module.exports = updateIsFavorite
