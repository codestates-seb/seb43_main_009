export const getCookie = (cookieName) => {
  let cookieValue = null;
  if (document.cookie) {
    let array = document.cookie.split(escape(cookieName) + '=');
    if (array.length >= 2) {
      let arraySub = array[1].split(';');
      cookieValue = unescape(arraySub[0]);
    }
  }
  return cookieValue;
};
