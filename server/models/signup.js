const { model, Schema } = require('mongoose');
const { Joi } = require('express-validation');

const signup = new Schema({
    firstName: {
        type: String,
        required: [true, 'First Name is requried'],
    },

    lastName: {
        type: String,
        required: [true, 'Last Name is required'],
    },

    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        validate: {
            validator(v) {
              return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: 'Please enter a valid email',
          },
        required: [true, 'Email required'],
    },

    phone: {
        type: Number,
        unique: true,
        minlength: [10, 'Please enter a Valid Phone Number'],
        maxlength: [10, 'Please enter a Valid Phone Number'],
        required: [true, 'Phone number is required'],
    },

    organization: {
        type: String,
        required: [true, 'Organization is required'],
    },

    designation: {
        type: String,
        required: [true, 'Designation is required'],
    },

    username: {
        type: String, 
        required: [true, 'Username is required'],
    },

    password: {
        type: String,
        required: [true,'Password is required'],
    }
});

model('signup', signup);

const createValidationSignup = {
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

model('createValidationSignup', createValidationSignup);

module.exports = {
    model: model('signup'),
    schema: signup,
    cvModel: model('createValidationSignup'),
    cvSchema: createValidationSignup,
};