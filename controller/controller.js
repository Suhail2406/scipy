const Student=require("../model/schema")
module.exports={
    addStud:async(req,res)=>{
       const {Name,Standard}=req.body;
        try{0
            const result=await Student.create({
                Name,
                Standard
          });
            res.status(200).json({result});
        }
        catch(err){
            res.status(400).json({err});
        }
    },
    getStud:async(req,res)=>{ 
        try {
        const R=await Student.find()
        res.status(200).json({R});
        }
        catch(err) {
        res.status(400).json({err});
        }       
},
    getStudByid:async(req,res)=>{
        const id=req.params.id
        try {
        const result3=await Student.findById(id)
        res.status(200).json({result3});
        }
        catch(err) {
        res.status(400).json({err});
        }
        
        
        },
        updateStud:async(req,res)=>{
            const id=req.params.id
            try {
            await Student.findByIdAndUpdate(id,{
            Name:req.body.Name,
            Standard:req.body.Standard

            });
            res.status(200).json("success");
            }
            catch(err) {
            res.status(400).json({err});
            }
    },
    deleteStud:async(req,res)=>{
        const id=req.params.id
        try {
        await Student.findByIdAndDelete(id)
        res.status(200).json("success");
        }
        catch(err) {
        res.status(400).json({err});
        }
},
}