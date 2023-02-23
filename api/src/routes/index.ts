import * as express from "express";
import * as foodAPI from "./food_api";

export const register = ( app: express.Application ) => {

    foodAPI.register( app );
}
