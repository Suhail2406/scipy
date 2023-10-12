const College=require("../model/collegeschema")
module.exports={
   addcolg:async(req,res)=>{
       const {CollegeName,Address,Email,Phoneno}=req.body;
        try{
            const result=await College.create({
                CollegeName,
                Address,
                Email,
                Phoneno

          });
            res.status(200).json({result});
        }
        catch(err){
            res.status(400).json({err});
        }
    },
    getcolgName:async(req,res)=>{
        try {
        const R=await College.find()
        res.status(200).json({R});
        }
        catch(err) {
        res.status(400).json({err});
        }       
},
    getcolgNameByid:async(req,res)=>{
        const id=req.params.id
        try {
        const result3=await College.findById(id)
        res.status(200).json({result3});
        }
        catch(err) {
        res.status(400).json({err});
        }
        
        
        },
        getcolgAddress:async(req,res)=>{
            const id=req.params.id
            try {
            const result3=await College.findById(id)
            res.status(200).json({result3});
            }
            catch(err) {
            res.status(400).json({err});
            }
            
            
            },
            getcolgEmail:async(req,res)=>{
                const id=req.params.id
                try {
                const result3=await College.findById(id)
                res.status(200).json({result3});
                }
                catch(err) {
                res.status(400).json({err});
                }
                
                
                },
                getcolgPhoneno:async(req,res)=>{
                    const id=req.params.id
                    try {
                    const result3=await College.findById(id)
                    res.status(200).json({result3});
                    }
                    catch(err) {
                    res.status(400).json({err});
                    }
                    
                    
                    },
        updatecolg:async(req,res)=>{
            const id=req.params.id
            try {
            await College.findByIdAndUpdate(id,{
            CollegeName:req.body.CollegeName,
            Address:req.body.Address,
            Email:req.body.Email,
            Phoneno:req.body.Phoneno
         });
            res.status(200).json("success");
            }
            catch(err) {
            res.status(400).json({err});
            }
    },
    deletecolg:async(req,res)=>{
        const id=req.params.id
        try {
        await College.findByIdAndDelete(id)
        res.status(200).json("success");
        }
        catch(err) {
        res.status(400).json({err});
        }
},
}