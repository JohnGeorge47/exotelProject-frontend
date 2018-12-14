import axios from "axios";
let verifyUser = data => {
  return axios({
    method: "post",
    url: "http://localhost:3000/api/verify",
    data: data
  })
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};

let otpPanelApi = {
  verifyUser
};

export default otpPanelApi;
