const express=require("express");
const router=express.Router()
const colgcontroller= require("../controller/Collegecontroller");

router.post('/addcolg',colgcontroller.addcolg)
router.get('/getcolgName',colgcontroller.getcolgName)
// router.get('/getcolgEmail/:id',colgcontroller.getcolgEmail)
// router.get('/getcolgPhoneno/:id',colgcontroller.getcolgPhoneno)
router.get('/getcolgNameByid/:id',colgcontroller.getcolgNameByid)
router.put('/updatecolg/:id',colgcontroller.updatecolg)
router.delete('/deletecolg/:id',colgcontroller.deletecolg)
module.exports=router;