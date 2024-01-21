const cookiesResponse = (token, res) => {
  let options = {
    // maxAge: 20 * 60 * 1000, // would expire in 20minutes
    maxAge: process.env.JWT_EXPIRES, // would expire in 20minutes
    httpOnly: true, // The cookie is only accessible by the web server
    secure: true,
  };
  res.cookie(process.env.COOKIE_NAME, token, options); // set the token to response header, so that the client sends it back on each subsequent request
};

module.exports = cookiesResponse;
