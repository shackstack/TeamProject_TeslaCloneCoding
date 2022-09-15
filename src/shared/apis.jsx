export const authApi = {
  // e.g) 회원 가입
  signup: (someData) =>
    instance.post("api/user", {
      someData: someData,
      someOtherData: someOtherData,
    }),

  // e.g) 유저 프로필 변경
  editUserProfile: (someData) =>
    instance.put(`api/user/${userId}`, {
      someData: someData,
      someOtherData: someOtherData,
    }),
};

export const postApi = {
  // e.g) 회원 가입
  getPost: () => instance.get("api/posts"),

  // e.g) 유저 프로필 변경
  editPosts: (someData) =>
    instance.put(`api/post/${postId}`, {
      someData: someData,
      someOtherData: someOtherData,
    }),
};
