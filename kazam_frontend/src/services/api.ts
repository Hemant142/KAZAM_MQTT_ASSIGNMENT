import axios from "axios";
const API_BASE_URL = "https://kazam-mqtt-api.vercel.app/tasks";
export const fetchAllTasks = async (): Promise<string[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/getAllTasks`);
    return response.data.tasks || [];
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};
