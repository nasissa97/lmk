import dotenv from "dotenv";
import express from "express";
import path from "path";

// initialize configuration
dotenv.config();

// port is now available to the Node.js runtime
const port = process.env.SERVER_PORT;

const app = express();

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );

// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );