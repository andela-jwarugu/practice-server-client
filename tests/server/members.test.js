const app = require('../../index');
const request = require('supertest')(app);
const expect = require('chai').expect;

describe('request for members', () => {
  it('returns an array of github andela users', (done) => {
    request
      .get('/api/members')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.exist;
        expect(Array.isArray(res.body)).to.be.true;
        expect(res.body).to.have.length(30);
        done();
      });
  });

  it('returns an array of objects ', (done) => {
    request
      .get('/api/commits?username=andela-jwarugu')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.exist;
        expect(Array.isArray(res.body)).to.be.true;
        expect(res.body[0]).to.be.an.object;
        expect(res.body[0]).to.have.keys('repo', 'commit');
        done();
      });
  });
})
