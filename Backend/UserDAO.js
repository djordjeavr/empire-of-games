var conn=require('./connection');

module.exports={
    register:function(req,res){
        const user=req.body
        conn.query('INSERT INTO USER SET ?',[user],function(err,results){
            if(err) return res.status(500).send(err);
            res.status(200).json(results.InsertId);
        })
    },
    login:function(req,res){
        const user=req.body
        conn.query('SELECT * FROM USER WHERE username=? and password=?',[user.username,user.password],function(err,results){
            if(err) return res.status(500).send(err);
            res.status(200).json(results[0]);
            console.log(user);
            
        })
    },
  UpdateUser:function(req,res){
    const user=req.body
    console.log(user.username);
    conn.query(`UPDATE user SET ? WHERE id=${user.id}`,[user],function(err,results){
        if(err) return res.status(500).send(err);
        res.status(200).json(results[0]);
    })
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