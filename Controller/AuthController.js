import { createUser, loginUser } from '../Service/AuthService.js';

export async function register(req, res) {
    const { username, email, password } = req.body;
    try {
        const result = await createUser(username, email, password);
        res.status(201).json({ message: 'User created successfully', userId: result.lastID });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function login(req, res) {
    const { username, password } = req.body;
    try {
        const { token, user } = await loginUser(username, password);
        res.status(200).json({ token, user });
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
}