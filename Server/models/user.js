let mongoose=    require('mongoose')
   let userSchema=   new mongoose.Schema({
        name:{
            type:String,
            require:true
        },
        email:{
            type:String,
            require:true
        },
        passWord:{
            type :String,
            require:true
        }
        
      })

    let  User=  mongoose.model('User', userSchema)
    module.exports=User