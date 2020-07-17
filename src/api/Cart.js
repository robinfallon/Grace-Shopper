import axios from 'axios';

export async function addToCart(id, itemname) {
  try {
    const { data } = await axios.post('/api/cart', {id, itemname});
    return data;
  } catch (error) {
    throw error;
  }
}

export async function removeFromCart(id, itemname) {
  try {
    const { data } = await axios.post('/api/cart/remove', {id, itemname});
    return data;
  } catch (error) {
    throw error;
  }
}