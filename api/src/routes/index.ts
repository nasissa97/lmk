import * as express from "express";
import * as foodAPI from "./food_api";
import * as userAPI from "./user_api";

export const register = ( app: express.Application ) => {

    foodAPI.register( app );
    userAPI.register( app );
}
