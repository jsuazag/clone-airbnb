import axios from 'axios'

const URL_BASE = 'http://localhost:3001'

export const requestHttp = async (method, endpoint, body = {}, params = {}) => {
    try {
        const url = `${URL_BASE}${endpoint}`
        const options = {
            method, // method: method
            url,
            data: body,
            params
        }
        const response = await axios(options)
        const { data } = response
        return data
    } catch (error) {
        throw error
    }
}