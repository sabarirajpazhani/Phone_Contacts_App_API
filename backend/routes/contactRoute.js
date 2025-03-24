const express = require('express')
const { getAllContact, getSingleContact } = require('../controllers/getContact')
const { addContact } = require('../controllers/addContact')
const router = express.Router()

router.route('/getAllContact').get(getAllContact)
router.route('/getContact/:id').get(getSingleContact)
router.route('/addContact').post(addContact)

module.exports = router