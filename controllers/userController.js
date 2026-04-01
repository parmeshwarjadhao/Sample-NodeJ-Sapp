let users = [
{
id:1,
name:"John"
}
]

exports.getUsers = (req,res)=>{
res.json(users)
}

exports.createUser = (req,res)=>{
const user = {
id:users.length+1,
name:req.body.name
}

users.push(user)

res.json(user)
}