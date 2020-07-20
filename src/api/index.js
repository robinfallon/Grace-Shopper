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
    localStorage.setItem("user", data.user.username);
<<<<<<< HEAD
    localStorage.setItem("seller", data.user.seller)
    localStorage.setItem('id', data.user.id)
=======
    localStorage.setItem("seller", data.user.seller);
<<<<<<< HEAD
    localStorage.setItem("id", data.user.id);
=======
    localStorage.setItem('id', data.user.id)
>>>>>>> b2930b0a791b691a7999bcdae3b9ef3c9be91bd9
>>>>>>> 26bc9f0118c9fa4cbc5ec7a4076e46ac458848f3
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
    localStorage.setItem("user", data.user.username);
    localStorage.setItem("seller", data.user.seller)
    localStorage.setItem('id', data.user.id)
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getUserInfo() {
  try {
    const user = await axios.get("/api/users/getUserInfo", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return user;
  } catch (error) {
    throw error;
  }
}
