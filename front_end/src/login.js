export const isLoged = () => {
    const token = localStorage.getItem('token');
    return !!token;
}

export const Logout = () => {
    window.localStorage.removeItem("token");
}

export const setLogin = (token) => {
    window.localStorage.setItem("token", JSON.stringify(token));

}

export const CONNECTED = 0;
export const NOT_CONNECTED = 1;
//export  const NOT_CONNECTED = 1;
