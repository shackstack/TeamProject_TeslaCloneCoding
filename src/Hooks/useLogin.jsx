import { setCookie } from "../Cookie";
import instance from "../shared/Requests";

const useLogin = (navi, data) => {
  instance
    .post("member/login", data)
    .then((res) => {
      res.data.error === null
        ? navi("/") &&
          setCookie("auth_token", res.headers.authorization) &&
          setCookie("refresh_token", res.headers.refreshtoken)
        : alert(res.data.error.message);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default useLogin;
