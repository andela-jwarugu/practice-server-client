const request = require('superagent');

module.exports = {
  fetch: (req, res) => {
    const username = req.query.username;
    request
      .get(`https://api.github.com/users/${username}/events`)
      .auth(process.env.USERNAME, process.env.PASSWORD, {type: 'auto'})
      .end((err, response) => {
        if (err) {
          res.status(500).send({
            message: 'Error occured while fetching commits'
          })
        } else {
          let events = response.body.filter((event) => {
            if(event.type === 'PushEvent') {
              return event;
            }
          })


          events = events.map((event) => {
            let repo = event.repo.name;
            let commit = event.payload.commits[0].message
            return {
              repo,
              commit
            }
          })

          res.status(200).send(events);
        }
      })
  }
}
