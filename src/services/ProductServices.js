import axios from "axios";
const baseUrl = "https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book"

const configForProducts = () => {
    const accessToken = localStorage.getItem("token")
    console.log(accessToken)
    const header = {
        headers: {
            "Content-Type": "application/json",
            Authorization: accessToken
        }
    }
    return header
}
export const getProducts = async () => {
    try {
        const response = await axios.get(`${baseUrl}`, configForProducts());
        return (response)
        // window.localStorage.setItem(, value);
        // Handle successful signup (e.g., redirect to login page)
    } catch (error) {
        console.error(error);
        // Handle errors (e.g., show an error message)
    }

};