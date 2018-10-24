'use strict';

// use for cookie sign key, should change to your own and keep security
exports.keys = 'calpa_1540363723101_515';

// add your config here
exports.middleware = [];

exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: { '.tpl': 'nunjucks' },
};

exports.news = {
  pageSize: 5,
  serverUrl: 'https://hacker-news.firebaseio.com/v0',
};

// add middleware robot
exports.middleware = [ 'robot' ];
// robot's configurations
exports.robot = { ua: [ /curl/i, /Baiduspider/i ] };
