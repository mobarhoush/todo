import axios, { AxiosResponse } from "axios"

const baseUrl: string = "http://localhost:4000"

export const getTodos = async (): Promise<AxiosResponse<ApiDataType>> => {
    const todos: AxiosResponse<ApiDataType> = await axios.get(
        baseUrl + "/todos"
    )
    return todos
}