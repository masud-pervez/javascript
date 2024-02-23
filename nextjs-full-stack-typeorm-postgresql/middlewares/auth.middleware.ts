import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import path from 'path';

//set cookies data
const sendCookiesResponse = (token: any, res: any) => {
    let options = {
        maxAge: 20 * 60 * 1000, // would expire in 20minutes
        // maxAge: '1d', // would expire in 20minutes
        httpOnly: true, // The cookie is only accessible by the web server
        secure: true,
    };
    res.status(200).cookie(process.env.COOKIE_NAME, token, options);
    // .json({ success: true, token }); // set the token to response header, so that the client sends it back on each subsequent request
};

const getSignJwtToken = (user: any) => {
    return jwt.sign({}, "process.env.JWT_SECRET", {
        expiresIn: '1d',
    });
};

const hashedPassword = (password: any) => {
    return bcrypt.hash(password, 10);
};

const matchPassword = function (enterPassword: any, user: any) {
    return bcrypt.compare(enterPassword, user.password);
};

export {
    getSignJwtToken,
    hashedPassword,
    matchPassword,
    sendCookiesResponse
}
