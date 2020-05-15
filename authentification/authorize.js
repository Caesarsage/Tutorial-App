const auth = (role = []) => {
    if (typeof role === 'string') {
        role = [role];
    }

    return (req, res, next) => {
        if (role.length && !role.includes(req.user.role)) {
            return res.status(401).json("Not Authorize");
        }
        next();
    }
}

module.exports = {
    auth
}