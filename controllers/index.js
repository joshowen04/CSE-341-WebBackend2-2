loginPage = (req, res) => {
  res.render('login', { layout: 'login' });
};

module.exports = {
  loginPage
};
