let router = require('express').Router();
router.get('/',function(req,res){
    res.json({status:'API its working',message:'Welcome to rest'});
});


var contactController = require('./contactController');
router.route('/contacts')
.get(contactController.index)
.post(contactController.new);

router.route('/contacts/:contact_id')
.get(contactController.view)
.patch(contactController.update)
.put(contactController.update)
.delete(contactController.delete)

module.exports = router;