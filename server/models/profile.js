const { model, Schema } = require('mongoose');
const { Joi } = require('express-validation');

const profile = new Schema({
    firstName: {
        type: [Schema.Types.ObjectId], 
        ref: 'signup',
    },

    lastName: {
        type: [Schema.Types.ObjectId], 
        ref: 'signup',
    },

    email: {
        type: [Schema.Types.ObjectId], 
        ref: 'signup',
    },

    phone: {
        type: [Schema.Types.ObjectId], 
        ref: 'signup',
    },

    organization: {
        type: [Schema.Types.ObjectId], 
        ref: 'signup',
    },

    designation: {
        type: [Schema.Types.ObjectId], 
        ref: 'signup',
    },

    username: {
        type: [Schema.Types.ObjectId], 
        ref: 'signup',
    },

    password: {
        type: [Schema.Types.ObjectId], 
        ref: 'signup',
    }
});

model('profile', profile);

const createValidationProfile = {
    body: Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().email().required(),
        phone: Joi.number().required(),
        organiztion: Joi.string().required(),
        designation: Joi.string().required(),
        username: Joi.string().required(),
        password: Joi.string().required(),
    }),
};

model('createValidationProfile', createValidationProfile);

module.exports = {
    model: model('profile'),
    schema: profile,
    cvModel: model('createValidationProfile'),
    cvSchema: createValidationProfile,
};