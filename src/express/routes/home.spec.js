let describe = require('mocha').describe;
let expect = require('chai').expect;

let homeRoute = require('./home');

// module name to root case
describe('home', () => {
  /**
   * wrap each method to separate describe to implement tests independent for each other
   * common naming "#methodName"
   */
  describe('#homeRoute', () => {
    it('should return index page', () => {
      let req = {};
      let res = {
        sendCalledWith: '',
        send: function(arg) {
          this.sendCalledWith = arg;
        },
      };
      homeRoute(req, res);
      expect(res.sendCalledWith).to.contain('ready');
    });
  });
});
