'use strict';

const { Service } = require('egg');

class UserAgentSerivce extends Service {
  async listBlockedRobot() {
    const blockedRobot = this.config.robot.ua;
    return blockedRobot;
  }
}

module.exports = UserAgentSerivce;
