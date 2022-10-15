const signup = require('$/models/signup').model;
const login  = require('$/models/login').model;
const appointment  = require('$/models/appointment').model;
const profile = require('$/models/profile').model;
const { serviceBoilerPlate } = require('$/utils/service-utils');

module.exports = {
    createUser: serviceBoilerPlate(async(data) => {
        const response = await signup.create(data);
        return response;
    }),

    searchByEntity: serviceBoilerPlate(async(entity, entityValue) => {
        let data;
        if(entity === 'username') {
            data = await login.findOne({ username: entityValue}).exec();
        } 
        if(entity === 'password') {
            data = await login.findOne({ password: entityValue}).exec();
        }
    }),

    searchByUsernameAndUpdateProfile: serviceBoilerPlate(async(username) => {
        const response = await profile.findOneAndUpdate({ username }, body, { new: true }).exec();
        return response;
    }),

    createAppointment: serviceBoilerPlate(async(data) => {
        const response = await appointment.create(data);
        return response;
    }),

    searchAllAppointments: serviceBoilerPlate(async() => {
        const query= {};
        const data = await appointment.find(query).exec();
        return data;
    }),

    searchAppointmentByTitle: serviceBoilerPlate(async(title) => {
        const query = {title};
        const data = await appointment.findOne(query).exec();
        return data;
    }),

    searchByTitleAndUpdate: serviceBoilerPlate(async (title, body) => {
        const data = await appointment.findOneAndUpdate({ title }, body, { new: true }).exec();
        return data;
    }),

    deleteAppointmentByTitle: serviceBoilerPlate(async(title) => {
        await appointment.findOneAndDelete({ title }).exec();
    }),
};
