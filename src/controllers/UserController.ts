import { Request, Response } from 'express';

type UserType = {
    id: number;
    name: string;
}
const users: UserType[] = [
    {
        id: 1,
        name: 'John',
    },
    {
        id: 2,
        name: 'Marta',
    },
];

export const getUsers = async (req: Request, res: Response) => {
    res.send(users);
};


export const getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user: UserType | undefined = users.find((user) => user.id === Number(id));
    if (!user) {
        res.status(404).json({ message: 'User not found' });
        return;
    }
    res.send(user);
};
