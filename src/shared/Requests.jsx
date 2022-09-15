import axios from "axios";

export const BASE_API_URL = `http://43.201.36.176/`;

const instance = axios.create({
    baseURL: BASE_API_URL, // 요청을 www.aa.com/user로 보낸다면, www.aa.com까지 기록
});

// 가지고 있는 토큰 넣어주기!
// 로그인 전이면 토큰이 없으니 못 넣어요.
// 그럴 땐 로그인 하고 토큰을 받아왔을 때 넣어줍시다.
let AUTH_TOKEN = null;
let REFRESH_TOKEN = null;

instance.defaults.headers.common["Authorization"] = AUTH_TOKEN || null;
instance.defaults.headers.common["refreshToken"] = REFRESH_TOKEN || null;

export default instance;
