/**
 * checks if a user is authenticated
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns function
 */
const checkIsAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next()
    }

    // res.redirect('/login')
    res.send('UnAuthenticated')
}

module.exports = checkIsAuthenticated