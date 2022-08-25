import axios from 'axios';
import { queryClient } from '../config/queryClient';

const baseUrl = process.env.REACT_APP_SERVER_URL || 'http://localhost:4000';

export const getStudentsData = async (currUser) => {
    try
    {
        const body = { teacherId: currUser._id };
        const res = await axios.post(`${baseUrl}/getList/studentByTeacher`, body, { withCredentials: true });
        return res.data;
    }
    catch(error)
    {
        const res = error.response;
        if(res.status === 401) return { ...res.data, error: "Please login to view this page" };
        else // 500 or others
        {
            console.error(error.message);
            return { ...res.data, error: "Something went wrong" };
        }
    }
}