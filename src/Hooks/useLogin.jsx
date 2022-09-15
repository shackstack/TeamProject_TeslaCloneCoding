import {setCookie} from "../Cookie";
import instance from "../shared/Requests";

const useLogin = () => {
    return (data) => {
        instance
            .post("api/login", data)
            .then((res) => {
                setCookie("auth_token", res.headers.authorization);
                setCookie("refresh_token", res.headers.refreshtoken);
            })
            .catch((err) => {
                console.log(err);
            });
    }
};

export default useLogin;
