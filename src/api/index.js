import axios from "axios";

export async function getSomething() {
  try {
    const { data } = await axios.get("/api");
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getMyProducts() {
  try {
    const myProducts = await axios.get("/api/products");
    // console.log("My products are", myProducts);
    return myProducts.data.allProducts;
  } catch (error) {
    throw error;
  }
}

export async function loginUser(username, password) {
  try {
    const { data } = await axios.post("/api/users/login", {
      username,
      password,
    });
    console.log(data);
    localStorage.setItem("token", data.token);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function registerUser(username, password, email) {
  try {
    const { data } = await axios.post("/api/users/register", {
      username,
      password,
      email,
    });
    console.log(data);
    localStorage.setItem("token", data.token);
    return data;
  } catch (error) {
    throw error;
  }
}
