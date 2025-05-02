import axios from './axiosInstance';

export const getUnreadMessages = () => axios.get('/api/therapist/unread-messages-count');
export const getPendingAppointments = () => axios.get('/api/therapist/pending-appointments');
