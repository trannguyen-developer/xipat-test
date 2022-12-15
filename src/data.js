import axios from "axios";

const getPosts = async function () {
    try {
        let result = await axios.get(
            `https://jsonplaceholder.typicode.com/posts`
        );
        return result
            .then((value) => {
                return value.data; // 👉️ "hello"
            })
            .catch((err) => {
                console.log(err);
            });
    } catch (error) {
        console.log("error", error);
    }
};

export const dataPosts = getPosts();
