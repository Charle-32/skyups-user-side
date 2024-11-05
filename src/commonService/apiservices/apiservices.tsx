export const ApiServices = async (endpoint: string, body = null, method: string = 'GET') => {
    const dataObj = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method,
        body: body && JSON.stringify(body) || null
    };

    const url = `${process.env.NEXT_PUBLIC_LOCAL_API_URL}${endpoint}`
    try {
        const response = await fetch(url, dataObj);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Error in ApiServices:", error);
        throw error;
    }
};
