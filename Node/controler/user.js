//כאן בעצם יש את כל הלוגיקה

import user from "../models/user.js";


export const getByUserNameAndPassword = (req, res) => {
    console.log('הגעתי לפונקציה');
    const { username, password } = req.body; // קבלת הנתונים מהגוף של הבקשה

    // מבצע חיפוש במסד הנתונים
    user.findOne({ username, password })
        .then((user) => {
            if (user) {
                res.send(user); // אם יש משתמש כזה, שלח אותו חזרה
            } else {
                res.status(404).send({ error: "User not found" }); // אם לא מצאנו אותו, מחזירים שגיאה
            }
        })
        .catch((error) => {
            res.status(500).send({ error: error.message }); // במקרה של שגיאה במהלך החיפוש
        });
}


export const Add=(req ,res)=>
{
    const { username, password } = req.body;
    if (!username || !password  === undefined)
      return res.status(400) .send({error:`There is a nullable fileds`})
    const newUser=new user(
        {
            username,
            password

        }
    )
    newUser.save()
    .then(user=>
    {
        return res.status(201).send({message:`This user is Added`,user})
    }
    )
    .catch(err=>
    {
        return res.status(400).send({error:err.message})
    }
    )
}
