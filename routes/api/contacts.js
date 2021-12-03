const express = require('express')
const { contacts: contactsCtrl } = require('../../controllers')
const { validation, ctrlWrapper } = require('../../middlewares')
const { joiSchema, isFavoriteJoiSchema } = require('../../models/contact')

const router = express.Router()

router.get('/', ctrlWrapper(contactsCtrl.getAll))

router.get('/:id', ctrlWrapper(contactsCtrl.getById))

router.post('/', validation(joiSchema), ctrlWrapper(contactsCtrl.add))

router.delete('/:contactId', ctrlWrapper(contactsCtrl.deletebyId))

router.put('/:contactId', validation(joiSchema), ctrlWrapper(contactsCtrl.updateById))

router.patch(
  '/:contactId/favorite',
  validation(isFavoriteJoiSchema),
  ctrlWrapper(contactsCtrl.updateIsFavorite)
)

module.exports = router
