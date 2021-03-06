import axios from "axios";

export async function addToCart(
  userId,
  productId,
  quantity,
  itemname,
  price,
  image
) {
  try {
    const { data } = await axios.post("/api/cart", {
      userId,
      productId,
      quantity,
      itemname,
      price,
      image,
    });
    console.log("sending to shoppingcart.js");
    return data;
  } catch (error) {
    throw error;
  }
}

export async function removeFromCart(id) {
  try {
    console.log("firiing", id);
    const { data } = await axios.delete(`/api/cart/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function showMyCart(id) {
  try {
    const data = await axios.get(`/api/cart/`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    console.log("data", data);
    return data.data.cartItems;
  } catch (error) {
    return error;
  }
}

export async function updateCartForUser(quantity, cartId) {
  try {
    console.log("UDC is firing", quantity, cartId);
    const { data } = await axios.put("/api/cart/update", { quantity, cartId });
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}
