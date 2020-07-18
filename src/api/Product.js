import axios from "axios";

export async function getAllProducts() {
  try {
    const { data } = await axios.get("/api/product");
    return data;
  } catch (error) {
    throw error;
  }
}

// export async function searchThing() {
//   try {
//     const { data } = await axios.get('/api/product');
//     data.filter
//   }
// }
