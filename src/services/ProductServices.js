import axios from "axios";
const baseUrl = "https://bookstore.incubation.bridgelabz.com/bookstore_user"

const configForProducts = () => {
    const accessToken = localStorage.getItem("token")
    const header = {
        headers: {
            // 'Accept': "application/json",
            "x-access-token": accessToken
        }
    }
    return header
}
export const getProducts = async () => {
    try {
        const response = await axios.get(`${baseUrl}/get/book`);
        return (response)
    } catch (error) {
        console.error(error);
    }
};

export const addCart = async (productId, product) => {
    try {
        const response = await axios.post(`${baseUrl}/add_cart_item/${productId}`, product, configForProducts())
        return (response)
    } catch (error) {
        console.error(error);
    }
};



export const updateQuantity = async (productId, quantity) => {

    await axios.put(`${baseUrl}/cart_item_quantity/${productId}`, quantity, configForProducts()).then(result => {
        return result
    }).catch(err => {
        return (err.message);
    })
};

export const getCartItems = async () => {
    try {
        const response = await axios?.get(`${baseUrl}/get_cart_items`, configForProducts())
        return (response)
    } catch (error) {
        console.error(error);
    }
};


export const deleteCartItem = async (productId) => {
    await axios.delete(`${baseUrl}/remove_cart_item/${productId}`, configForProducts()).then(result => {
        return result
    }).catch(err => {
        return (err.message);
    })
};

export const placeOrder = async (order) => {
    try {
        const response = await axios.post(`${baseUrl}/add/order`, order, configForProducts())
        return (response)
    } catch (error) {
        console.error(error);
    }
};

export const addressUpdate = async (obj) => {
    try {
        const response = await axios.put(`${baseUrl}/edit_user`, obj, configForProducts())
        return (response)
    } catch (error) {
        console.error(error);
    }
};