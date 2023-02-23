import dotenv from "dotenv";
import express from "express";
// import path from "path";
import * as routes from "./routes";

// initialize configuration
dotenv.config();

// port is now available to the Node.js runtime
const port = process.env.SERVER_PORT;

const app = express();

// Configure Express to parse incoming JSON data
app.use( express.json() );

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );

// Configure routes
routes.register( app );

// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );