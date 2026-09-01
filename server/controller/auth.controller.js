import User from "../models/user.model"
import jwt from "jsonwebtoken"
export const googleAuth = async (req, res) => {
try{
    const { name, email, avatar } = req.body;
    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    }
    const user = await User.findOne({ email });
    if (!user) {
        user = await User.create({ name, email, avatar });
    }
    const token = await jwt.sign({id:user.id}, process.env.JWT_SECRET,{expiresIn: '7d'});
}catch(error){
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
}
}