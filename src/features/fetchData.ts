import API from "@/config/api";

const getData = async () => {
    try {
        const response = await fetch(API.users);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error("Error fetching data: ", error);
    }
}

export default getData;