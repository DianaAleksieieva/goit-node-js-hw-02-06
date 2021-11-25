const Joi = require('joi')

const contactsSchema = Joi.object({
  name: Joi.string().required().min(2).max(30),
  number: Joi.number().min(10).required(),
  mail: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),
})

module.exports = contactsSchema
