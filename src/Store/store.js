import { makeObservable, observable, action, computed, toJS } from "mobx";
import axios from "axios";

class store {
  blogData = [];

  constructor() {
    makeObservable(this, {

      blogData: observable,

      LoadData: action,
      AddData: action,
      EditData: action,
      DeleteData: action,
   
      getBlogData: computed
    });
  }

  
LoadData = () => {
  axios
    .post("http://localhost:5000/api/upload/getpost", {
      email:"kiko@gmail.com"
    })
    .then((response) => {
      
      this.blogData = response.data.userInfo.posts;
      
    })
    .catch((err) => {
      console.log("Load실패",err);
    });
};
get getBlogData() {
  return this.blogData;
}

AddData = (data) => {
  console.log("AddData로 들어온 data", data);
  axios
    .post("http://localhost:5000/api/upload/addpost", {
      ...data,
      email:"kiko@gmail.com"
    })
    .then(function (response) {
      console.log("Add성공", response);
    })
    .catch(function (error) {
      console.log("Add실패",error);
    });
};

EditData = (currentid,data) => {
  console.log("EditData로 들어온 data", data);
  console.log("EditData로 들어온 currentid", currentid);
  axios
  .put(`http://localhost:5000/api/upload/updatepost`, {
    ...data,
    email:"kiko@gmail.com",
    postid:currentid
  })
  .then(function (response) {
    console.log("수정성공", response);
  })
  .catch(function (error) {
    console.log(error);
  });
}


  DeleteData = (currentid) => {
    console.log("DeleteData로 들어온 currentid", currentid);
    axios
    .put(`http://localhost:5000/api/upload/delpost`, {
      email:"kiko@gmail.com",
      postid:currentid
    })
      .then((response) => {
        console.log("Delete완료",response);
      })
      .catch(function (error) {
        console.log("Delete실패",error)
      })
  }


}
const myStore = new store();

export default myStore;


