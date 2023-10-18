"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// Middleware: permissions

module.exports = {

    isLogin: (req, res, next) => {

        // return next() // permissionları pasife almak için, herşeye izin vermek için yapılan bir işlem

        if (req.isLogin) {
            next()
        } else {
            res.errorStatusCode = 403
            throw new Error('NoPermission: You must login.')
        }
    },

    isAdmin: (req, res, next) => {

        // return next() // permissionları pasife almak için, herşeye izin vermek için yapılan bir işlem

        if (req.isLogin && req.user.isAdmin) {
            next()
        } else {
            res.errorStatusCode = 403
            throw new Error('NoPermission: You must login and to be Admin.')
        }
    },
}