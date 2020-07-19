import axios from 'axios';

export async function updateReview(id, itemname) {
    try {
      const { data } = await axios.patch('/:reviewId', {id, itemname});
      return data;
    } catch (error) {
      throw error;
    }
}

export async function getReviewsByProductID(productId) {
    try {
      const { data } = await axios.get('/productReviews/:productId', {productId});
      return data;
    } catch (error) {
      throw error;
    }
}

// ?????????????????

export async function getReviewsByUserID(userId) {
    try {
      const { data } = await axios.get('/userReviews/:userId', {userId});
      return data;
    } catch (error) {
      throw error;
    }
}

export async function createReview(id, itemname) {
    try {
      const { data } = await axios.post('/:reviewId', {id, itemname});
      return data;
    } catch (error) {
      throw error;
    }
}

// not sure if these params are correct:
export async function destroyReview(id) {
    try {
      const { data } = await axios.delete('/:reviewId', {id});
      return data;
    } catch (error) {
      throw error;
    }
}