import { updateUserDetails } from '../Service/AuthService.js';


export async function updateUser(req, res) {

    const { userId, fullName, bio, profilePictureUrl } = req.body;
    try {
        const result = await updateUserDetails(userId, fullName, bio, profilePictureUrl);
        res.status(200).json({ message: 'User details updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}