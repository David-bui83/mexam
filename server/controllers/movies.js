mongoose = require('mongoose');
const Movies = mongoose.model('Movies');
const Reviews = mongoose.model('Reviews');

module.exports = {
  getAll:(req,res)=>{
    Movies.find({},(err,data)=>{
      if(err){
        res.json({message:'error',data:err});
      }else{
        res.json({message:'success',data:data});
      }
    }).sort({name:1});
  },
  getOne:(req,res)=>{
    Movies.findById({_id:req.params.id},(err,data)=>{
      if(err){
        res.json({message:'error',data:err});
      }else{
        res.json({message:'success',data:data});
      }
    })
  },
  new:(req,res)=>{
    Movies.create(req.body,(err,data)=>{
      if(err){
        res.json({message:'error',data:err});
      }else{
        res.json({message:'success',data:data});
      }
    })
  },
  add:(req,res)=>{
    console.log('review from controller: ', req.body);
    Reviews.create(req.body,(err,data)=>{
      if(err){
        res.json({message:'error',data:err});
      }else{
        Movies.findByIdAndUpdate({_id:req.params.id},{$push:{reviews:data}},(err,data)=>{
          if(err){
            res.json({message:'error',data:err});
          }else{
            res.json({message:'success',data:data});
          }
        })
      }
    })
  },
  destroy:(req,res)=>{
    Movies.findByIdAndDelete({_id:req.params.id},(err,data)=>{
      if(err){
        res.json({message:'error',data:err});
      }else{
        res.json({message:'success',data:data});
      }
    })
  }
};