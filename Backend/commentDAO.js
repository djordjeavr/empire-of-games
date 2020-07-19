var conn=require('./connection');

module.exports={ 
getAllCommentaries:function(req,res){
  const product_id=req.query.product_id;
  conn.query(`SELECT comment.*,user.username FROM comment JOIN user on comment.user_id=user.id WHERE product_id=${product_id} `,
  function(err,result){
    if(err) return res.send(err);
    res.status(200).json(result);
    
    }) 
},
insertComment:function(req,res){
  const comment=req.body;
  conn.query('INSERT INTO COMMENT SET ?',[comment],function(err,results){
    if(err) return res.status(500).send(err);
    res.status(200).json(results);
})
},
getAllComments:function(req,res){
  
  conn.query(`SELECT user.username,comment.id,user.email,comment.comment,product.name as nameProduct FROM comment JOIN user ON comment.user_id=user.id JOIN product ON comment.product_id=product.id `,
  function(err,result){
    if(err) return res.send(err);
    res.status(200).json(result);
    
    }) 
}
}