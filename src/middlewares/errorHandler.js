import { notFound, internalServerError } from '../controllers/error.controller.js';

export default (app) => {
    app.use('*', notFound);
    app.use(internalServerError);
};