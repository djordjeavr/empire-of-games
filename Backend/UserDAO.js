var conn=require('./connection');
var bcrypt=require('bcrypt');
const saltRounds = 10;

function getAllUsers(){
    return new Promise(function(resolve,reject){
      conn.query('SELECT * FROM user',
          function(err,result){
            if(err) return reject(err);
           resolve(result)
           
       
            })
    })
  }

module.exports={
    register:function(req,res){
        const user=req.body;
        bcrypt.hash(user.password, saltRounds, function(err, hash) {
            user.password=hash;
            conn.query('INSERT INTO USER SET ?',[user],function(err,results){
                if(err) return res.status(500).send(err);
                res.status(200).json(results.InsertId);
            })
        }); 
        
    },
    login: async function(req,res){
        const request=req.body;
        console.log(request);
      const users=await getAllUsers();
   
      const user=users.find(user=>user.username==request.username);
      
      if(user==null){
        res.status(200).json([{},{messageError:'ErrorUsernamePassword'}])
      }
      try{
        
          if(await bcrypt.compare(request.password,user.password)){
            console.log(user.password);
           res.status(200).json([user,{message:'LoggedIn'}])
          }else{  
            res.status(200).json([{},{messageError:'ErrorUsernamePassword'}])
          }
      }catch(err){
          console.log(err);
      }
             
    },
  UpdateUser:async function(req,res){
    const request=req.body;
  
    const users= await getAllUsers();
    const user=users.find(user=>user.id==request.id); 
     try{
         console.log(await bcrypt.compare(request.currentPassword,user.password));
       if(await bcrypt.compare(request.currentPassword,user.password)){
           if(request.password){
            
            delete request['currentPassword'];
            bcrypt.hash(request.password, saltRounds, function(err, hash) {
              
                conn.query(`UPDATE user SET password=? WHERE id=${request.id}`,[hash],function(err,results){
                    if(err) return res.status(500).send(err);
                    console.log(results);
                    res.status(200).json(results[0]);
                })
            });
           }
           else if(!request.password){ 
           delete request['currentPassword']
           console.log(request);
        conn.query(`UPDATE user SET ? WHERE id=${request.id}`,[request],function(err,results){
            if(err) return res.status(500).send(err);
            console.log(results);
            res.status(200).json(results[0]);
        })
       }
    }
     } catch(err){
        res.status(500).send(err)
     }
   
},
getAllUsers:function(req,res){
    conn.query('SELECT * FROM user',function(err,results){
        if(err) return res.status(500).send(err);
        res.status(200).json(results);
        
        
    })
},
getBestCustomers:function(req,res){
    
    conn.query('SELECT * FROM user  ORDER BY totalProductsPurchased DESC LIMIT 5',function(err,results){
        if(err) return res.status(500).send(err);
        res.status(200).json(results);
        
        
    })
}

}