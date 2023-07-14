'use strict';

/**
 * tutorial-page service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tutorial-page.tutorial-page');
