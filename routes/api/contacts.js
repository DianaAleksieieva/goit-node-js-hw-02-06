const express = require('express')
const router = express.Router()
const contactsCtrl = require('../../controllers/contacts')
const { validation, ctrlWrapper } = require('../../middlewares')
const { contactsSchema } = require('../../schemas')

const validateMiddleware = validation(contactsSchema)

router.get('/', ctrlWrapper(contactsCtrl.getAll))

router.get('/:id', ctrlWrapper(contactsCtrl.getById))

router.post('/', validateMiddleware, ctrlWrapper(contactsCtrl.add))

router.delete('/:contactId', ctrlWrapper(contactsCtrl.deletebyId))

router.put('/:contactId', validation(contactsSchema), ctrlWrapper(contactsCtrl.updateById))

module.exports = router
