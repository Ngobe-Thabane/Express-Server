import bcrypt from 'bcrypt';
import db from '../db/Database.js';

const saltRounds = 10;

export async function createUser(username, email, password) {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const result = await db.run(`INSERT INTO users (username, email, password) VALUES (?, ?, ?)`, [username, email, hashedPassword]);
    return result;
}

export async function loginUser(username, password) {
    const user = await db.get(`SELECT * FROM users WHERE username = ?`, [username]);
    if (!user) {
        throw new Error('User not found');
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        throw new Error('Invalid password');
    }
    return user;
}

export async function updateUserDetails(userId, fullName, bio, profilePictureUrl) {
    const result = await db.run(`UPDATE users SET full_name = ?, bio = ?, profile_picture_url = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?`, [fullName, bio, profilePictureUrl, userId]);
    return result;
}