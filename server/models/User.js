// const mongoose = require('mongoose')
// const bcrypt = require('bcrypt');
// const saltRounds = 10;
// const jwt = require('jsonwebtoken');

// const userSchema = mongoose.Schema({
//     id: {
//         type: String,
//         maxlength: 50,
//     },
//     email: {
//         type: String,
//         trim: true,
//         unique: 1, //똑같은 이메일을 쓸 수 없도록 설정
//     },
//     password: {
//         type: String,
//         maxlength: 50,
//     },
//     role: {
//         type: Number,
//         default: 0,
//     },
//     token: {
//         type: String
//     },
//     tokenExp: {
//         type: Number
//     }
// })


// const User = mongoose.model('User',userSchema)
// module.exports = { User }