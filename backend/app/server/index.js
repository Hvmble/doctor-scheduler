const express = require('express');
const { dbConnection } = require("../config/database");
const { paths } = require("../config/paths");

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.path = paths;

        //* Database connection
        this.connectDB();

        //* Middleware setup
        this.Middleware();

        //* Routes
        this.routes();
    }

    async connectDB() {
        await dbConnection();
    }

    Middleware() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    routes() {
        this.app.use(this.path.users, require('../routes/users.routes'));
        this.app.use(this.path.doctors, require('../routes/doctors.routes'));
        this.app.use(this.path.roles, require('../routes/roles.routes'));
        this.app.use(this.path.patients, require('../routes/patients.routes'));
        this.app.use(this.path.appointments, require('../routes/appointment.routes'));
    }

    start() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }
}

module.exports = Server;
