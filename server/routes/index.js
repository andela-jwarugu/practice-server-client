const members = require('../controller/members');
const commits = require('../controller/commits');

const routes = (app) => {
  app.get('/api/members', members.fetch);
  app.get('/api/commits', commits.fetch);
}

module.exports = routes;
