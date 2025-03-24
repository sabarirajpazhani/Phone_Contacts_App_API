const express = require('express')
const { getAllContact, getSingleContact } = require('../controllers/getContact')
const { addContact } = require('../controllers/addContact')
const { updateContact } = require('../controllers/updateContact')
const { deleteContact } = require('../controllers/deleteContact')
const router = express.Router()

router.route('/getAllContact').get(getAllContact)
router.route('/getContact/:id').get(getSingleContact)
router.route('/addContact').post(addContact)
router.route('/updateContact/:id').put(updateContact)
router.route('/deleteContact/:id').delete(deleteContact)

module.exports = router