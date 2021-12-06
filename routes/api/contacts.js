const express = require('express')
const contactsCtrl = require('../../controllers/contacts')
const { contactsSchema } = require('../../schemas')
const { auth, validation, ctrlWrapper } = require('../../middlewares')
const { joiSchema, isFavoriteJoiSchema } = require('../../models/contact')

const router = express.Router();

router.get('/', auth, ctrlWrapper(contactsCtrl.getAll))

router.get("/:id", ctrlWrapper(contactsCtrl.getById));

router.post("/", auth, validation(joiSchema), ctrlWrapper(contactsCtrl.add));

router.delete('/:contactId', ctrlWrapper(contactsCtrl.deletebyId))

router.put('/:contactId', validation(contactsSchema), ctrlWrapper(contactsCtrl.updateById))

module.exports = router
