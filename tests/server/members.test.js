const app = require('../../index');
const request = require('supertest')(app);
const expect = require('chai').expect;

describe('request for members', () => {
  it('returns a list of github andela users', (done) => {
    request
      .get('/api/members')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.exist;
        expect(Array.isArray(res.body)).to.be.true;
        expect(res.body).to.have.length(30);
      });
  });

  it('returns the most recent commit from a user', (done) => {
    request
      .get('/api/commits')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.exist;
        expect(Array.isArray(res.body)).to.be.true;
      });
  });
})
