import {User} from "../model/modelSchema.js";

/**
 * Handles the logout post request.
 * @param {import('express').Request} req - The request object.
 * @param {import('express').Response} res - The response object.
 */

//login User
export const loginUser = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email});
        if (!user) {
            return res.status(404).send({success: false, error: 'User/Password Combination not found'});
        }
        res.status(200).send({success: true, msg: `User ${user.email} logged in`})

    } catch (error) {
        res.status(500).send({success: false, error: error.message});
        console.error(error.message);
    }
}

