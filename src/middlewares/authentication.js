"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// $ npm i jsonwebtoken
// app.use(authentication):

// const jwt = require('jsonwebtoken')

// module.exports = (req, res, next) => {

//     const auth = req.headers?.authorization || null
//     const accessToken = auth ? auth.split(' ')[1] : null

//     req.isLogin = false
//     req.user = null

//     jwt.verify(accessToken, process.env.ACCESS_KEY, (err, userData) => req.user = userData) 
//     next()
// }

const jwt = require('jsonwebtoken')
module.exports = ( req, res, next) => {

    // const accessToken = req.headers?.authorization.replaceAll( 'Bearer')  // ('Bearer')
    const auth = req.headers?.authorization // Bearer ...Token... 
    const accessToken = auth ? auth.split(' ')[1] : null // ['Bearer', '...token...']
   
    req.isLogin = false
    req.user = null

    jwt.verify(accessToken, process.env.ACCESS_KEY, function (err, userData  ) {
        if (userData && userData.isActive) {
            req.isLogin = false 
            req.user = userData
        } 
    })
    next()
}


