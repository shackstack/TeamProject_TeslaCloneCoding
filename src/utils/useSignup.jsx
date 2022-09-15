import instance from "../shared/Requests";

const useSignup = (navi, data) => {
  instance
    .post("member/signup", data)
    .then((res) => {
      console.log(res);
      navi("/login");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default useSignup;
