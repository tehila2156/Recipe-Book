//כאן בעצם יש את כל הלוגיקה

import resipy from "../models/resipy.js";


//שליפת כל המתכונים
export const getAll=(req,res)=>{
    resipy.find()
     .then(resipy=>
     {
        res.send(resipy)
     }
     )
      .catch(err => {
        res.send({error: err.message});  
     });
}
//id שליפת מתכון לפי 
export const getById=(req,res)=>{
    resipy.findById(req.params.id)
     .then(recipy=>
     {
        res.send(recipy)
     }

     )
      .catch(err => {
        res.send({error: err.message});  
     });
}

//הוספת מתכון
export const Add=(req ,res)=>
    {
        const {name,difficult_level, time,Ingredients,img  } = req.body;
        if (!name || !difficult_level || !Ingredients || !time || img === undefined)
          return res.status(400) .send({error:`There is a nullable fileds`})
        const newrecipy=new resipy(
            {
                name, 
               difficult_level, 
                time,
                Ingredients,
                img
            }
        )
        newrecipy.save()
        .then(r=>
        {
            return res.status(201).send({message:`This recipy is Added`,r})
        }
        )
        .catch(err=>
        {
            return res.status(400).send({error:err.message})
        }
        )
    }