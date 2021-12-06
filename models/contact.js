const { Schema, model } = require('mongoose')
const Joi = require('joi')

const contactSchema = Schema({
  name: { type: String, required: [true, 'Set name for contact'] },
  phone: Number,
  email: String,
  favorite: { Boolean, default: false },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  }

}, { versionKey: false, timestamps: true })

const joiSchema = Joi.object({
  name: Joi.string().required().min(2).max(30),
  phone: Joi.number().min(10).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),
  favorite: Joi.boolean(),
})
const isFavoriteJoiSchema = Joi.object({
  favourite: Joi.boolean().required(),
})
const Contact = model('contact', contactSchema)
// mice => mouse
// contacts => contact
module.exports = {
  Contact,
  joiSchema,
  isFavoriteJoiSchema
}
