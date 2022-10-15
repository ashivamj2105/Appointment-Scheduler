const { model, Schema } = require('mongoose');
const { Joi } = require('express-validation');

const appointment = new Schema({
    title: {
        type: String,
        required: true
    },

    agenda: {
        type: String,
        required: true
    },

    time: {
        type: String,
        required: true 
    },

    guest: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: 'login',
        }],
        required: true
    }
});

model('appointment', appointment);

const createValidationApppointment = {
    body: Joi.object({
        title: Joi.string().required(),
        agenda: Joi.string().required(),
        time: Joi.time().required(),
        guest: Joi.array().items(Joi.string()).unique(),
    }),
};

model('createValidationAppointment', createValidationApppointment);

module.exports = {
    model: model('appointment'),
    schema: appointment,
    cvModel: model('createValidationAppointment'),
    cvSchema: createValidationApppointment,
};