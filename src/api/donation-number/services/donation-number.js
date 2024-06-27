'use strict';

/**
 * donation-number service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::donation-number.donation-number');
