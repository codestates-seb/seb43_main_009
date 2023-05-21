import axios from 'axios';

export const Axios = axios.create({
  baseURL: process.env.API_SERVER,
  timeout: 10000,
  withCredentials: true,
});

//request 가로채기
Axios.interceptors.request.use(
  function (config) {
    // 요청이 전달되기 전에 작업 수행
    //jwt토큰넣기
    config.headers.Authorization = localStorage.getItem('accessToken');
    return config;
  },
  function (error) {
    // 요청 오류가 있는 작업 수행
    return Promise.reject(error);
  },
);
//응답 가로채기
Axios.interceptors.response.use(
  function (response) {
    // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 데이터가 있는 작업 수행
    return response;
  },
  async function (error) {
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 오류가 있는 작업 수행
    //에러가 401이 온다면, refresh token을 이용해서 access token을 재갱신한 후에,
    //기존에 요청했던 api를 다시 요청한다.
    //refresh token도 만료되어 401이 떨어진다면, 로그인 페이지로 이동시킨다.
    // const originalRequest = error.config;
    // if (error.response.status === 401 && !originalRequest._retry) {
    //   originalRequest._retry = true;
    //   const accessToken = await refreshAccessToken(); // a function to call the API that refreshes the token
    //   if (accessToken) {
    //     localStorage.setItem('accessToken', accessToken);
    //     Axios.defaults.headers.common[
    //       'Authorization'
    //     ] = `Bearer ${accessToken}`;
    //     return Axios(originalRequest);
    //   }

    //   // If refresh token request also gets 401, redirect to login
    //   const navigate = getNavigation();
    //   if (navigate) navigate('/login');
    //   return Promise.reject(error);
    // }
    return Promise.reject(error);
  },
);

//에러코드가 401이고,요청이 아직 재시도 되지 않았는지.
// originalRequest._retry = true;는 토큰을 한 번 새로고치려고 시도했음을 표시하는데 사용