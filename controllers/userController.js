import { v4 as uuid } from "uuid";

let users = [
    {
        firstName: "Hermit",
        lastName: "Smith",
        age: 25,
    },
    {
        firstName: "John",
        lastName: "Cena",
        age: 35,
    },
    {
        firstName: "Natalie",
        lastName: "Hoshikawa",
        age: 40,
    },
];

export const createUser = (req, res) => {
    const userId = uuid();
    const newUser = { ...req.body, id: userId };
    users.push(newUser);
    res.send(users);
};
export const getUsers = (req, res) => {
    res.send(users);
};

export const getUser = (req, res) => {
    const id = req.params.id;
    const user = users.find((user) => user.id === id);
    res.send(user);
};

export const deleteUser = (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);
    res.send("user has been deleted");
};

export const patchUser = (req, res) => {
    const id = req.params.id;
    users = users.map((user) =>
        user.id === id ? { ...user, ...req.body } : user
    );
    res.send(users);
};

export const putUser = (req, res) => {
    const id = req.params.id;
    users = users.map((user) => (user.id === id ? req.body : user));
    res.send(users);
};
