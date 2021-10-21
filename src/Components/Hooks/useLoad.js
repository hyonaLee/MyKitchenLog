import { useEffect, useState } from "react";
import axios from "axios";

export default function useLoad() {
// JSON server
const [blogData, setBlogData] = useState([]);
// (GET) serer로부터 data 불러오기
useEffect(() => {
  axios
    .get("http://localhost:3001/posts")
    .then((response) => {
      //   console.log("받은데이터", response);
      // console.log("받은데이터", response.data);
      setBlogData(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
}, [setBlogData]);
// console.log(typeof(blogData))
// console.log(blogData)

return blogData;

}
