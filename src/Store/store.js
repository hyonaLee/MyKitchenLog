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
      .get("http://localhost:3001/posts")
      .then((response) => {
        this.blogData = response.data;
        console.log("Load성공", toJS(this.blogData));
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
      .post("http://localhost:3001/posts", {
        ...data,
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
    .patch(`http://localhost:3001/posts/${currentid}`, {
      ...data,
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
      .delete(`http://localhost:3001/posts/${currentid}`)
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
