import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const getArticles = async (topic) => {
  const response = await axios.get("/search/photos", {
    params: {
      query: topic,
      page: 1,
      per_page: 20,
      client_id: "duCeDk0DC7PPxBSLAtblsNuvhoKEeMQjPIFw5fYUIyg",
    },
  });

  return response.data.results;
};
