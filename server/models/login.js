const { model, Schema } = require('mongoose');
const { Joi } = require('express-validation');

const login = new Schema({
    username: {
        type: [Schema.Types.ObjectId], 
        ref: 'signup',
        required: true
    },

    password: {
        type: [Schema.Types.ObjectId], 
        ref: 'signup',
        required: true
    },
});

model('login', login);

const createValidationLogin = {
    body: Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required(),
    }),
};

model('createValidationLogin', createValidationLogin);

module.exports = {
    model: model('login'),
    schema: login,
    cvModel: model('createValidationLogin'),
    cvSchema: createValidationLogin,
};