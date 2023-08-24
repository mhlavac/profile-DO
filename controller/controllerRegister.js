import {User} from '../model/modelSchema.js';


export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const userFound = await User.findOne({ email });

        if (userFound)
            return res.status(400).json({ message: ["The email is already in use"] });
    } catch (err) {
        console.error(err);
    }
};