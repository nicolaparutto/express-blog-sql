//express import
const express = require('express');
//router initialization:
router = express.Router();

//postsController import:
const postsController = require('../controllers/postsController.js');


//ROTTE CRUD DEI POST:
//Index
router.get('/', postsController.index);

//Show
router.get('/:id', postsController.show);

//Store
router.post('/', postsController.store);

//Update
router.put('/:id', postsController.update);

//Modify
router.patch('/:id', postsController.modify);

//Destroy
router.delete('/:id', postsController.destroy);

module.exports = router;