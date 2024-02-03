import express from "express";

import {
    createUser,
    deleteUser,
    getUser,
    getUsers,
    patchUser,
    putUser,
} from "../controllers/userController.js";
const userRouter = express.Router();

userRouter.get("/", getUsers);

userRouter.post("/", createUser);

userRouter.get("/:id", getUser);

userRouter.delete("/:id", deleteUser);

userRouter.put("/:id", putUser);

userRouter.patch("/:id", patchUser);

export default userRouter;
