const User = require('../models/user');
const jwt = require('jsonwebtoken');

const makeTutor = async (req, res, next) => {
        const { _id } = req.user;
    await User.findById(_id);
    if (user.role === "Admin") return res.status(400).json("User is already an Admin")
    if (user.role !== "Tutor") return res.status(400).json("User must be a tutor");

    await User.find({role: "Admin"})
    if (users.length > 4) return res.status(400).json("Only three Admins can exist")

    try {
        updatedUser = await User.findByIdAndUpdate(_id,
            {
                $set: {role: "Admin"}
            },
            {
                new: true
            })

            return res.status(200).json({
                message: "Successful",
                data: updatedUser
            })
        } catch (err) {
        return next();
    }
}

module.exports = {
    makeTutor
}