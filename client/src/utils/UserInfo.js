export const getUserInfo = () => {
  const token = localStorage.getItem('accessToken');
  console.log(token);
  if (!token) {
    return null;
  }
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const payload = JSON.parse(atob(base64));
  console.log(payload);
  return payload;
};
