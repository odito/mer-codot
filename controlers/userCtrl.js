
const usersChema = require('../model/userModel');
const { use } = require('../routes/userRoute');

const userCtrl = {

// get users
getUsers: async (req, res)=>{
 const users = await usersChema.find({});

 res.json(users)


},

// post users
postUsers:async (req, res)=>{

  const  {name, email, description}= req.body;
  
  const user = await usersChema.findOne({email:email})
  if(user) return res.status(400).json({msg:"user already exists"})

  const newUser = new usersChema({
    name, email, description 
  })

await newUser.save();
res.json(newUser)
},

// find specific user by id
editUser:async (req, res)=>{

  const {name, email, description}=req.body;

  await usersChema.findById(req.params.id);

  newUser = await new usersChema({

     name,email, description


  })

  newUser.save();

res.json(newUser)

},


// delete users
deleteUsers: async (req, res)=>{
   const user = await usersChema.findByIdAndDelete(req.params.id) 
   
   res.json(user)
},




// update users
updateUsers: async (req, res)=>{
    const {name, email,description} = req.body;

  const user=  await usersChema.findByIdAndUpdate((req.params.id),{

        name, email,description,


    }) 


   
    
    res.json(user)
 }





}


module.exports = userCtrl;