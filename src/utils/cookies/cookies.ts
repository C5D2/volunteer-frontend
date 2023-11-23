export const setCookie = (name: string, value: string | null, expires:Date, path = '/') => {
  document.cookie = `${name}=${value}; expires=${expires}; path=${path}`;
};

export const getCookie = (name: string) => {
  const cookies: { [key: string]: string } = document.cookie.split('; ').reduce((acc, cookie) => {
    const [key, value] = cookie.split('=');
    acc[key] = value ? value : '';
    return acc;
  }, {} as { [key: string]: string });
	return cookies[name]
};


export const deleteCookie = function (name:string) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;';
};