const cookieInfo = require('./cookie-info');

module.exports = (_req, res, next) => {
  try {
    res
      .status(200)
      .clearCookie('songId',{
        httpOnly: true,
        //////////////////
        secure: true,
        sameSite: 'None',
        domain: '*.cake-pop.netlify.app',
        // maxAge: 600000000,
        //////////////////
      })
      .clearCookie('token', cookieInfo)
      .json('Logged out successfully');
  } catch (e) {
    next({ message: e.message });
  }
};
