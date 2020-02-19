const isLoggedIn = true; //change false if your data don't public

exports.authenticated = (req, res, next) => {
  if (isLoggedIn) next();
  else {
    res.send({
      message: "Your are authenticated"
    });
  }
};
