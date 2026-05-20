module.exports.checkAuth = function (req, res, next) {
  const userId = req.session.userid;

  // Se o usuário não estiver logado, redireciona para o login
  if (!userId) {
    res.redirect('/login');
  }

  next();
};
