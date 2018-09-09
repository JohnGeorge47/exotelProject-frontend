import axios from "axios";

let SignUpCaller = data => {
  return axios({
    method: "post",
    url: "http://localhost:3000/api/sms",
    data: data
  })
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};

let homeApis = {
  SignUpCaller
};

export default homeApis;
