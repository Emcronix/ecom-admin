import axios from "axios";
import { BASE_URL, IG_USER_ACCESS_TOKEN } from "../../config";

export const getInstagramHashtagPosts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/hashtagpost`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

const accessToken = IG_USER_ACCESS_TOKEN;

const instagramApiUrl = `https://graph.facebook.com/v20.0/18008984500097700/top_media?user_id=17841407828748565&fields=id%2Ccaption%2Cchildren%2Clike_count%2Cpermalink%2Cmedia_url%2Cmedia_product_type&access_token=${accessToken}`;

export const fetchInstagramHashtagPosts = async () => {
  try {
    const response = await axios.get(instagramApiUrl);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const createInstagramHashtagPost = async ({
  id,
  mediaUrl,
  products,
  permalink,
  categoryId,
  categoryName,
  username,
}) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/hashtagpost`, {
      id,
      mediaUrl,
      products,
      categoryId,
      categoryName,
      username,
      postUrl: permalink,
    });
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteInstagramHashtagPost = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/api/hashtagpost/${id}`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const updateInstagramHashtagPost = async ({
  id,
  products,
  categoryId,
  username,
}) => {
  try {
    const response = await axios.patch(`${BASE_URL}/api/hashtagpost/${id}`, {
      products,
      categoryId,
      username,
    });
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
