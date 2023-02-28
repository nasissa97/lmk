type User = {
    name: string;
    age: number;
    favoriteFood: string;
};

const users: User[] = [
    {
        name: "Nas",
        age: 25,
        favoriteFood: "pizza"
    },
    {
        name: "Erika",
        age: 23,
        favoriteFood: "seafood boil"
    }
]

export const getAllUsers = (): User[] => {
    return users;
}

export const getUser = (name: string): User => {
    const user = users.find(obj => obj.name === name);
    return user;
}

export const addUser = (newUserName: string, newUserAge: number, newUserFavoriteFood: string) => {
    const newUser: User  = {
        name: newUserName,
        age: newUserAge,
        favoriteFood: newUserFavoriteFood
    }
    users.push(newUser);
}

export const updateUser = (name: string, newName: string, newAge: number, newFavoriteFood: string): any => {
    const index = users.map(obj => obj.name).indexOf(name);
    // tslint:disable-next-line:no-console
    console.log(index);
    if (index === -1) {
        // TODO: add error
        return
    }
    users[index].name = newName;
    users[index].age = newAge;
    users[index].favoriteFood = newFavoriteFood;
}

export const deleteUser = (name: string): any => {
    const index = users.map(obj => obj.name).indexOf(name);
    users.splice(index, 1);
}