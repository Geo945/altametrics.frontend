export const getRequestHeaders = (token: string) => {
    return {authorization: `Bearer ${token}`}
}
