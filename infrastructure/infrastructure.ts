const axios = require("axios");
const fs = require("fs");

const fetchData = async () => {
  try {
    const response = await axios.get("http://127.0.0.1:1337/api/articles", {
      headers: {
        Host: "127.0.0.1",
      },
    });
    fs.writeFileSync("data.json", JSON.stringify(response.data, null, 2));
    console.log("Data has been saved to data.json");
    fs.copyFile("./data.json", "../frontend/public/data.json", (err: any) => {
      console.log(err);
    });
  } catch (error) {
    console.error("Error fetching data from Strapi:", error);
  }
};

fetchData();
