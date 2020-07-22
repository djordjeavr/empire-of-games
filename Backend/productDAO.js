var conn=require('./connection');
const { query } = require('express');


module.exports={
    getAllProducts:function(req,res){
        conn.query
        ('SELECT product.* FROM PRODUCT ORDER BY date_create DESC',
        function(err,result){
            if(err) return res.send(err);
            res.status(200).json(result);
            
            
          })
    },
    geAllGenres:function(req,res){
        conn.query('SELECT * FROM GENRE',
        function(err,result){
            if(err) return res.send(err);
            res.status(200).json(result);
          }) 
    },
    geAllPlatforms:function(req,res){
        conn.query('SELECT * FROM PLATFORM',
        function(err,result){
            if(err) return res.send(err);
            res.status(200).json(result);
          }) 
    },
    getAllGames:function(req,res){
        conn.query
        ('SELECT * FROM PRODUCT WHERE CATEGORY_ID=1 ',
        function(err,result){
            if(err) return res.send(err);
            res.status(200).json(result);
          })
    },
    getAllSoftware:function(req,res){
        conn.query
        ('SELECT * FROM PRODUCT WHERE CATEGORY_ID=2 ',
        function(err,result){
            if(err) return res.send(err);
            res.status(200).json(result);
          })
    },
    getAllDevices:function(req,res){
        conn.query
        ('SELECT * FROM DEVICE ',
        function(err,result){
            if(err) return res.send(err);
            res.status(200).json(result);
          })
    },
    getAllGiftCards:function(req,res){
        conn.query
        ('SELECT * FROM PRODUCT WHERE CATEGORY_ID=3 ',
        function(err,result){
            if(err) return res.send(err);
            res.status(200).json(result);
          })
    },
   searchGames:function(req,res){
       const searchGames=req.body;
      
       let query='SELECT * FROM PRODUCT WHERE CATEGORY_ID=1 ';

       if(searchGames.genreIds ){
           query +=`AND genre_id IN ('${searchGames.genreIds}')`;
       }
       if(searchGames. platformIds){
        query +=`AND platform_id IN ('${searchGames.platformIds}')`;
       }
      if(searchGames.priceFrom){
          query +=`AND price >= '${searchGames.priceFrom}'`;
      }
      if(searchGames.priceTo){
        query +=`AND price <= '${searchGames.priceTo}'`;
    }
    if(searchGames. deviceIds){
        query +=`AND device_id IN ('${searchGames.deviceIds}')`;
       }
       if(searchGames.sort=='Newest'){
         query +='ORDER BY DATE_CREATE DESC'
       }
       if(searchGames.sort=='Price-lower'){
        query +='ORDER BY PRICE'
      }
      if(searchGames.sort=='Price-highest'){
        query +='ORDER BY PRICE DESC'
      }
       conn.query
       (query,
       function(err,result){
        if(err) return res.send(err);
        res.status(200).json(result);
      })
   },
   searchSoftware:function(req,res){
  const searchSoftware=req.body;
  let query='SELECT * FROM PRODUCT WHERE CATEGORY_ID=2 ';
  
  if(searchSoftware.priceFrom){
      query +=`AND price >= '${searchSoftware.priceFrom}'`;
  }
  if(searchSoftware.priceTo){
    query +=`AND price <= '${searchSoftware.priceTo}'`;
}
if(searchSoftware.sort=='Newest'){
  query +='ORDER BY DATE_CREATE DESC'
}
if(searchSoftware.sort=='Price-lower'){
 query +='ORDER BY PRICE'
}
if(searchSoftware.sort=='Price-highest'){
 query +='ORDER BY PRICE DESC'
}

  
  conn.query
  (query,
  function(err,result){
   if(err) return res.send(err);
   res.status(200).json(result);
 })
   },
   searchGiftCards:function(req,res){
    const searchGiftCards=req.body;
   console.log(searchGiftCards);
    let query='SELECT * FROM PRODUCT WHERE CATEGORY_ID=1 ';

  
    if(searchGiftCards. platformIds){
     query +=`AND platform_id IN ('${searchGiftCards.platformIds}')`;
    }
   if(searchGiftCards.priceFrom){
       query +=`AND price >= '${searchGiftCards.priceFrom}'`;
   }
   if(searchGiftCards.priceTo){
     query +=`AND price <= '${searchGiftCards.priceTo}'`;
 }
    if(searchGiftCards.sort=='Newest'){
      query +='ORDER BY DATE_CREATE DESC'
    }
    if(searchGiftCards.sort=='Price-lower'){
     query +='ORDER BY PRICE'
   }
   if(searchGiftCards.sort=='Price-highest'){
     query +='ORDER BY PRICE DESC'
   }
    conn.query
    (query,
    function(err,result){
     if(err) return res.send(err);
     res.status(200).json(result);
   })
},
   searchCategoryGiftCard:function(req,res){
       const searchCategory=req.body.id;
       conn.query
  (`SELECT * FROM PRODUCT WHERE subcategory_gift_card_id=${searchCategory}`,
  function(err,result){
   if(err) return res.send(err);
   res.status(200).json(result);
 })
   },
   searchCategorySoftware:function(req,res){
    const searchCategory=req.body.id;
    conn.query
(`SELECT * FROM PRODUCT WHERE subcategory_software_id='${searchCategory}'`,
function(err,result){
if(err) return res.send(err);
res.status(200).json(result);
})
},
getTotalNumberOfGames:function(req,res){
  conn.query('SELECT COUNT(ID) AS numberOfGames FROM PRODUCT WHERE CATEGORY_ID=1',
  function(err,result){
    if(err) return res.send(err);
    res.status(200).json(result);
    
    
    }) 
},
getTotalNumberOfSoftware:function(req,res){
  conn.query('SELECT COUNT(ID) AS numberOfSoftware FROM PRODUCT WHERE CATEGORY_ID=2',
  function(err,result){
    if(err) return res.send(err);
    res.status(200).json(result);
    
    
    }) 
},
getTotalNumberOfGiftCards:function(req,res){
  conn.query('SELECT COUNT(ID) AS numberOfGiftCards FROM PRODUCT WHERE CATEGORY_ID=3',
  function(err,result){
    if(err) return res.send(err);
    res.status(200).json(result);
    console.log(result);
    
   
    }) 
},
getProduct:function(req,res){
  const product=req.body;
  console.log(product);
  let query= `SELECT  product.*,platform.name as platformName,company.name as companyName,company.logo as companyLogo,platform.logo as platformLogo FROM product  join platform on product.platform_id=platform.id join company on product.company_id=company.id WHERE product.id=${product.id}`; 
  if(product.category==2){
     query= `SELECT product.*,company.name as companyName,company.logo as companyLogo FROM product  join company on product.company_id=company.id WHERE product.id=${product.id}`;
  }
  if(product.category==3){
    query= `SELECT product.*,platform.name as platformName,platform.logo as platformLogo FROM product  join platform on product.platform_id=platform.id  WHERE product.id=${product.id}`;
  }
  conn.query(query,
  function(err,result){
    if(err) return res.send(err);
    res.status(200).json(result[0]);
    
    
    })
},

getAllCategories:function(req,res){
  conn.query('SELECT * FROM category',
  function(err,result){
      if(err) return res.send(err);
      res.status(200).json(result);
      
    }) 
},
getBestProducts:function(req,res){
    
  conn.query('SELECT * FROM product  ORDER BY sold DESC LIMIT 5',function(err,results){
      if(err) return res.status(500).send(err);
      res.status(200).json(results);
      
      
  })
},getAllCompany:function(req,res){
  
  conn.query('SELECT * FROM company',function(err,results){
    if(err) return res.status(500).send(err);
    res.status(200).json(results);
    
    
})
},
InsertProductInTable:function(req,res){
  const product =req.body;
  
  conn.query('INSERT INTO product SET ?',[product],function(err,results){
    if(err) return res.status(500).send(err);
    res.status(200).json({message:'AddProductInDatabase'}); 
})
},
InsertNewFeatures:function(req,res){
  const features =req.body;

  let query=`INSERT INTO device SET name='${features.name}'`;

if(features.isClicked1==true){
  query=`INSERT INTO subcategory_gift_card SET name='${features.name}'`
}
if(features.isClicked2==true){
  query=`INSERT INTO platform SET  name='${features.name}',logo='${features.logo}'`
}
if(features.isClicked3==true){
  query=`INSERT INTO genre SET  name='${features.name}'`
}
if(features.isClicked4==true){
  query=`INSERT INTO subcategory_software SET name='${features.name}'`
}
if(features.isClicked5==true){
  query=`INSERT INTO company SET  name='${features.name}',logo='${features.logo}'`
}
  
  conn.query(query,function(err,results){
    if(err) return res.status(500).send(err);
    res.status(200).json({message:'AddFeatures'});  
})
},
deleteFeaturesFromDatabase:function(req,res){
  const features=req.query;
console.log(features);
 
},
updateProduct:function(req,res){
  const product=req.body;
  console.log(product);
  conn.query(
    `UPDATE product SET name='${product.name}', description='${product.description}',image='${product.image}',video='${product.video}',platform_id=${product.platform_id},genre_id=${product.genre_id},subcategory_software_id=${product.subcategory_software_id},subcategory_gift_card_id=${product.subcategory_gift_card_id},company_id=${product.company_id},device_id=${product.device_id},smallImage='${product.smallImage}' WHERE id=${product.id}`,function(err,results){
        if(err) return res.status(500).send(err);
        res.status(200).json({message:'ChangeProduct'});  
    })
},
DeleteFeature:function(req,res){
  const feature =req.query;
  console.log(feature);
 let query;
if(feature.name=='Platform'){
  query=`DELETE FROM platform   WHERE id=${feature.id}`
}
if(feature.name=='Genre'){
  query=`DELETE FROM genre WHERE id=${feature.id}`
}
if(feature.name=='Device'){
  query=`DELETE FROM device WHERE id='${feature.id}'`
}
if(feature.name=='Subcategory software'){
  query=`DELETE FROM subcategory_software WHERE id='${feature.id}'`
}
if(feature.name=='Subcategory gift card'){
  query=`DELETE FROM subcategory_gift_card WHERE  ID=${feature.id}`
}
if(feature.name=='Company'){
  query=`DELETE FROM company WHERE id='${feature.id}'`
}
  
  conn.query(query,function(err,results){
    if(err) return res.status(500).send(err);
    res.status(200).json({message:'DeleteFeature'});  
})
},

}
