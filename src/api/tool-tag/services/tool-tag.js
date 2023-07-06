'use strict';

/**
 * tool-tag service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tool-tag.tool-tag');
