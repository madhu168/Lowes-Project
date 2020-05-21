const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const eventRoutes = require('./api/routes/events');
const memberRoutes = require('./api/routes/member');
const teamRoutes = require('./api/routes/team');
const orgRoutes = require('./api/routes/organization');
const mongoose = require('mongoose');

mongoose.connect(
    "mongodb+srv://madhu:" + 
    process.env.MONG_ATLAS_PW + 
    "@cluster0-bwyon.mongodb.net/test?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accpet, Authorization"
    );
    if (req.method === 'OPTIONS'){
        res.header('Accecss-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
});

app.use('/events',eventRoutes);
app.use('/member',memberRoutes);
app.use('/team',teamRoutes);
app.use('/organization',orgRoutes);

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;
