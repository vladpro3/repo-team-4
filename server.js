const {createServer} = require("./src/server/server");

const {
    MONGO_USER = "repoteam4",
    MONGO_PASSWORD = "repoteam4",
    MONGO_DATABSE = "repoteam4",
    MONGO_HOST = "ds157538.mlab.com",
    MONGO_PORT = 57538,
    // SERVER_HOST = "localhost",
    // SERVER_PORT = 3001
} = process.env;

/**
 * Setup mongo configuration
 */
const DATABASE_CONFIG = {
    user: MONGO_USER,
    password: MONGO_PASSWORD,
    host: MONGO_HOST,
    port: MONGO_PORT,
    local: "false",
    database: MONGO_DATABSE
};

/**
 * Socket.io server
 */
const SERVER_CONFIG = {
    // host: "localhost",
    // port: 3001
    host: process.env.HOST || process.env.SERVER_HOST || "localhost",
    port: process.env.PORT || 8080,
};

createServer(SERVER_CONFIG, DATABASE_CONFIG)
    .catch(err => {
        console.log(err);
    });
