import axios from 'axios';

async function callApi() {
    console.log("API start");
    try {
        const response = await axios.get("https://reqres.in/api/unknown");
        console.log("API end");
        console.log(response.data); // Log the data received from the API
    } catch (error) {
        console.error("API error:", error.message);
    }
}

callApi();
