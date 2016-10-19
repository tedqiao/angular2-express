/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
import express = require('express');
import path = require('path');
import emailRouter = require('../routes/emailRouters');

// import HeroRoutes = require('../routes/HeroRoutes');

var app = express();

class Routes {

    get routes() {

         app.use("/email", emailRouter);
        
        return app;
    }
}
export = Routes;