interface ApiResponse {
    message: string;
}

async function fetchTypedData(url: string): Promise<ApiResponse[]> {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: ApiResponse[] = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching:', error);
        throw error;
    }
}

const typedApiURL = 'https://da0064988beb4b1f9ff18ac118648a4e.api.mockbin.io/';

fetchTypedData(typedApiURL)
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
