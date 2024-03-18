import axios from "axios";
const baseUrl = "https://bookstore.incubation.bridgelabz.com/bookstore_user"

const configForProducts = () => {
    const accessToken = localStorage.getItem("token")
    const header = {
        headers: {
            "Content-Type": "application/json",
            "x-access-token": accessToken
        }
    }
    return header
}
export const getProducts = async () => {
    try {
        const response = await axios.get(`${baseUrl}/get/book`);
        return (response)
        // window.localStorage.setItem(, value);
        // Handle successful signup (e.g., redirect to login page)
    } catch (error) {
        console.error(error);
        // Handle errors (e.g., show an error message)
    }

};

export const addCart = async (productId,product) => {
    try {
        const response = await axios.post(`${baseUrl}/add_cart_item/${productId}`,product , configForProducts())
        return (response)
    } catch (error) {
        console.error(error);
    }
};


  
export const updateQuantity = async (productId, quantity) => {

    console.log(quantity);
    await axios.put(`${baseUrl}/cart_item_quantity/${productId}`, quantity, configForProducts()).then(result => {
        return result
    }).catch(err => {
        return (err.message);
    })
};

export const getCartItems = async () => {
    try {
        const response = await axios.get(`${baseUrl}/get_cart_items`, configForProducts())
        return (response)
    } catch (error) {
        console.error(error);
    }
};


export const deleteCartItem = async (productId) => {

    await axios.delete(`${baseUrl}/cart_item_quantity/${productId}`,  configForProducts()).then(result => {
        return result
    }).catch(err => {
        return (err.message);
    })
};