export const isLoggedIn = () => {
    const userData = JSON.parse(sessionStorage.getItem("auth"));
    return userData.signed;
}