import axios from "axios";

export async function addToCart(id) {
  try {
    const { data } = await axios.post("/api/cart", { id });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function removeFromCart(id) {
  try {
    const { data } = await axios.delete(`/api/cart/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function updateCartForUser() {
  try {
    const { data } = await axios.post("/api/cart/");
    return data;
  } catch (error) {
    throw error;
  }
}
