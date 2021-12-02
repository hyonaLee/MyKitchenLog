const express = require('express');
const app = express();
const { User } = require("./models/User");

app.use(express.urlencoded({extended: true})); 
app.use(express.json());

const dbAddress = "mongodb+srv://hyunhaLee:hyun9332!!@boilerplate.eaxo9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const mongoose = require('mongoose');

mongoose.connect(dbAddress, { 
}).then(() => console.log('mongoDB Connected....'))
  .catch(err => console.log(err))


app.get('/', (req, res) => res.send('Hello world!!!'))


app.post('/api/users/register', (req, res) => {
    //회원가입 시 필요한 정보들을 client에서 가져오면
    //그것들을 데이터베이스에 넣어준다.
    const user = new User(req.body)
  
    user.save((err,userInfo) => {
      if(err) return res.json({ success: false, err })
      return res.status(200).json({
        success: true
      })
    })
  })

  
const port = 5000
app.listen(port, () => console.log(`서버연결 성공!!! http://localhost:${port}`))