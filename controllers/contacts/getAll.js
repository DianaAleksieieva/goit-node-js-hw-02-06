const { Contact } = require('../../models')

const getAll = async (req, res, next) => {
  const { _id } = req.user;
  const { page = 1, limit = 10 } = req.query
  const skip = (page-1)*limit
    const contacts = await Contact.find({owner: _id}, "", {skip, limit: Number(limit) }).populate("owner", "_id name email")
    res.json({
      message: 'success',
      data: { contacts },
    })
}

module.exports = getAll
