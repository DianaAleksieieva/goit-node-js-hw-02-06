const { Contact } = require('../../models')
const { json, query } = require('express')

const getAll = async (req, res, next) => {
  const { _id } = req.user;
  const { page = 1, limit = 10 } = req.query
  const skip = (page-1)*limit
    const contacts = await Contact.find({owner: _id}, "", {skip, limit: Number(limit) }).populate("owner", "_id name email")
    res.json({
      status: 'success',
      code: 200,
      data: {
        contacts
      }
    })
}

module.exports = getAll
