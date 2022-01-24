// const express = require("express");
// const router = express.Router();


// router.post("/addpost", (req, res) => {
//     console.log(req)
//     console.log(req.body)
//     //회원가입 시 필요한 정보들을 client에서 가져오면
//     //그것들을 데이터베이스에 넣어준다.
  
//     const user = new User(req.body);
  
//     user.save((err, userInfo) => {
//       if (err) return res.json({ success: false, err });
//       return res.status(200).json({
//         success: true,
//       });
//     });
//   });