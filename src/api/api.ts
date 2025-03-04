import { API_BASE_URL } from '../constants/constants'

export async function fetchAPI(
    method: string,
    path: string
): Promise<any> {
    const url = `${API_BASE_URL}${path}`
    const response = await fetch(url)
    const data = await response.json()
    return data
}
