// test/controller/news.test.js

'use strict';

const { app } = require('egg-mock/bootstrap');

describe('test/controller/news.test.js', () => {
  it('should get /news', () => {
    return app
      .httpRequest()
      .get('/')
      .expect(200);
  });
});
