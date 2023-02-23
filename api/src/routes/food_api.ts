import axios from "axios";
import dotenv from "dotenv";
import * as express from "express";

// initialize configuration
dotenv.config();

// API Key
const key = process.env.FOOD;

export const register = ( app: express.Application ) => {

    app.get(`/food`, async (req: any, res) => {
        try {
            const foods = await axios.get(`https://api.spoonacular.com/food/search?apiKey=${key}&query=tacos&number=4`);
            return res.json(foods);
        } catch ( err ) {
            // tslint:disable-next-line:no-console
            console.error(err);
            res.json( {error: err.message || err })
        }
    } );
};