'use strict';

/**
 * tutorial-group service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tutorial-group.tutorial-group');
