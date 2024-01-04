export interface AuthI {
    api_key: string | null
    loading: boolean
    error: string | null
}

export interface AuthenticationI {
    status_code: number
    status_message: string
    success: boolean
}