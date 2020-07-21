import axios from "axios";

export async function addToCart(userId, productId, quantity) {
  try {
    console.log("ATC is firing with", userId, productId, quantity)
    const { data } = await axios.post("/api/cart", { userId, productId, quantity });
    console.log(data)
    return data;
  } catch (error) {
    throw error;
  }
}

export async function removeFromCart(id) {
  try {
    const { data } = await axios.delete(`/api/cart/${id}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    return data;
  } catch (error) {
    throw error;
  }
}

// export async function updateCartForUser() {
//   try {
//     console.log("UDC is firing")
//     const { data } = await axios.post("/api/cart/");
//     console.log(data)
//     return data;
//   } catch (error) {
//     throw error;
//   }
// }
