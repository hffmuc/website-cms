'use strict';

/**
 * ai-tool service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ai-tool.ai-tool');
