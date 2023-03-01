import * as express from "express";

import * as Users from "../controllers/user_controller";

export const register = ( app: express.Application ) => {
    app.get("/users", (req: any, res ) => {
        const users = Users.getAllUsers();
        res.json(users);
    })

    app.get("/user", (req: any, res) => {
        const name = req.query.name;
        const user = Users.getUser(name);
        res.json(user);
    })

    app.post("/addUser", (req: any, res) => {
        const { name, age, favoriteFood } = req.body;
        Users.addUser(name, +age, favoriteFood)
        res.sendStatus(200);

    })

    app.put("/user", (req: any, res) => {
        const name = req.query.name;
        const { newName, newAge, newFavoriteFood } = req.body;
        Users.updateUser(name, newName, newAge, newFavoriteFood);
        res.sendStatus(200);
    })

    app.delete("/user", (req: any, res) => {
        const name = req.query.name;
        Users.deleteUser(name);
        res.sendStatus(200);
    })
}
