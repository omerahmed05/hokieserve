const axios = require('axios');

// Base URL of the Spring Boot backend
const API_BASE_URL = 'http://localhost:8080';

// Fetch all users
const fetchAllUsers = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/allUsers`);
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

// Search users by text
const searchUsers = async (text) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/Users/${text}`);
        return response.data;
    } catch (error) {
        console.error('Error searching users:', error);
        throw error;
    }
};

// Add a new user
const addUser = async (user) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/User`, user);
        return response.data;
    } catch (error) {
        console.error('Error adding user:', error);
        throw error;
    }
};

module.exports = { fetchAllUsers, searchUsers, addUser };
