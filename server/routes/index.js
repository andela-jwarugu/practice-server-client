const routes = (app) => {
  app.get('/', (req, res) => {
    res.send('Hey')
  })
}

module.exports = routes;
