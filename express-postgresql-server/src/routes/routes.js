const bootcamp = require('../modules/bootcamp/route/bootcamp.route');
const auth = require('../modules/auth/route/auth.route');
const { register } = require('../modules/auth/controller/auth.controller');

module.exports = app => {
    app.use('/api/v1/bootcamp', bootcamp);
    app.use('/api/v1/auth', auth)
    app.use('/api/v1/register', register)
}
