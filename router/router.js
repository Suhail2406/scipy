const express=require("express");
const router=express.Router()
const Studcontroller=require('../controller/controller')

router.post('/addSTUD',Studcontroller.addStud)
router.get('/getSTUD',Studcontroller.getStud)
router.get('/getStudByid/:id',Studcontroller.getStudByid)
router.put('/updateStud/:id',Studcontroller.updateStud)
router.delete('/deletestud/:id',Studcontroller.deleteStud)
module.exports=router;