// src/lib/api.js
export async function fetchProducts() {
    try {
        const response = await fetch('http://185.243.48.247:3000/data/products.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error; // Propagate the error for the calling component to handle
    }
}
