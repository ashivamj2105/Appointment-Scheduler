const router = require('express').Router();

const { cvSchema: signupCVSchema } = require('$/models/signup');
const { controllerBoilerPlate, controllerResponse} = require('$/utils/controller-utils');
const Service = require('$/services/service');
const { schemaValidationHandlerMiddleware } = require('$/middlewares/validation.js');

const { controllerBoilerPlate, controllerResponse } = require('$/utils/controller-utils');

router.post('/signup', schemaValidationHandlerMiddleware(signupCVSchema),controllerBoilerPlate(async (req) => { 
  const user = await Service.createUser(req.body);
  return controllerResponse(200, 'Successful', user);
}));

router.post('/login', controllerBoilerPlate(async(req, res) => {
  let verify;
  if(req.body.username) {
    verify = await Service.searchByEntity('username', req.body.username);
    return controllerResponse(200, verify);
  }
  const passwordIsValid = bcrypt.compareSync(req.body.password, verify.password);
  if(passwordIsValid) {
    return controllerResponse(200, 'Successful Login',passwordIsValid);
  }
}));

router.patch('/updateprofile/:username', controllerBoilerPlate(async(req) => {
  const profileData = await Service.searchByUsernameAndUpdateProfile(req.params.username, req.body);
  return controllerResponse(204, 'Successful', profileData);
}));

router.post('/create', controllerBoilerPlate(async(req) => {
  const appointmentData = await Service.createAppointment(req.body);
  return controllerResponse(200, 'Successful', appointmentData);
}));

router.get('/all', controllerBoilerPlate(async(req) => {
  const appointmentAll = await Service.searchAllAppointments();
  return controllerResponse(200, 'Successful', appointmentAll);
}));

router.get('/title', controllerBoilerPlate(async(req) => {
  const appointmentData = await Service.searchAppointmentByTitle();
  return controllerResponse(200, 'Successful', appointmentData);
}));

router.patch('/update/:title', controllerBoilerPlate(async(req) => {
  const appointmentData = await Service.searchByTitleAndUpdate(req.params.title, req.body);
  return controllerResponse(204, 'Successful', appointmentData);
}));

router.delete('/delete', controllerBoilerPlate(async(req) => {
  const appointmentData = await Service.deleteAppointmentByTitle(req.params.title);
  return controllerResponse(204, 'Successful', appointmentData);
}));

module.exports = router;













// router.post('/create',
//   // roleVerifier('masterAdmin'),
//   schemaValidationHandlerMiddleware(organizationCVSchema),
//   controllerBoilerPlate(async (req) => {
//     const data = await organizationService.create(req.body);
//     return controllerResponse(201, 'Successful', data);
//   }));


//   router.get('/all',
//   // roleVerifier('organizationEditor'),
//   controllerBoilerPlate(async (req) => {
//     const org = await organizationService.searchAll(!req.isGetAllEnabled);
//     return controllerResponse(200, 'Successful', org);
//   }));

// // Router Controller for PATCH request for updation of Organization details by Id
// router.patch('/updatebyid/:id',
//   // roleVerifier('masterAdmin'),
//   controllerBoilerPlate(async (req) => {
//     const org = await organizationService.searchByIdAndUpdate(req.params.id, req.body);
//     return controllerResponse(204, 'Successful', org);
//   }));

// // Router Controller for PATCH request for deletion of Organization by it's Id
// router.patch('/disablebyid/:id',
//   // roleVerifier('masterAdmin'),
//   controllerBoilerPlate(async (req) => {
//     const org = await organizationService.searchByIdAndDisable(req.params.id);
//     return controllerResponse(204, 'Successful', org);
//   }));

// // Router Controller for PATCH request for deletion of Organization by it's Slug
// router.patch('/disablebyslug/:slug',
//   // roleVerifier('masterAdmin'),
//   controllerBoilerPlate(async (req) => {
//     const org = await organizationService.searchBySlugAndDisable(req.params.slug);
//     return controllerResponse(204, 'Successful', org);
//   }));

// router.get('/all', controllerBoilerPlate(async (req) => {
//     const participantData = await participantService.searchAll(!req.isGetAllEnabled);
//     return controllerResponse(200, 'Successful', participantData);
//   }));
  
//   // Router Controller fot PATCH request for updation of Participant by it's Id
//   router.patch('/updatebyid/:id', controllerBoilerPlate(async (req) => {
//     const participantData = await participantService.searchByIdAndUpdate(req.params.id, req.body);
//     return controllerResponse(204, 'Successful', participantData);
//   }));