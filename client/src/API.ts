import axios from "axios";
const baseUrl: string = "http://localhost:4000"

export interface TODO {
    description: string;
    name: string;
    _id: string;
}
export const getTodos = async (): Promise<TODO[]> => {
    const res = await axios.get(`${baseUrl}/todos`);
    const { todos } = res.data;

    return todos;
};