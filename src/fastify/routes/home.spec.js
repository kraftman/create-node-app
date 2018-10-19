let describe = require('mocha').describe;
let expect = require('chai').expect;
let sinon = require('sinon');

let homeRoute = require('./home');

// module name to root case
describe('home', () => {

  /**
   * wrap each method to separate describe to implement tests independent for each other
   * common naming "#methodName"
   */
  describe('#homeRoute', () => {
    // closure as a way to use one dependency during all the tests cases
    let fastify;
    let getSpy;

    /**
     * set preconditions in separate "beforeEach" structures
     * it's a nice place for initilal settings/spies and so on
     */
    //
    beforeEach(() => {
      getSpy = sinon.spy();

      fastify = {
        get: getSpy,
      }
    });

    // one test one case (optional)
    it('should call #get', function() {
      homeRoute(fastify);

      expect(getSpy.called).to.be.true;
    });

    // or first one can be missed since you checked it in the next case
    it('should call #get with async callback which return "ready"', async () => {
      let expectedURL = '/';
      let expectedResult = 'ready';

      homeRoute(fastify);

      let [url, callback] = getSpy.args[0];
      let actualResult = await callback();

      expect(url).to.equal(expectedURL);
      expect(actualResult).to.equal(expectedResult);
    });
  });
});