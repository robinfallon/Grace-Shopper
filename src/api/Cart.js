import axios from 'axios';

export async function addToCart(productId) {
  try {
    console.log(productId)
    const { data } = await axios.post('/api/cart', {productId},   
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