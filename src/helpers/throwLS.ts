// LS - localeStorage
export const throwLS = (token:string, username:string) => {
    localStorage.setItem("token", token)
    localStorage.setItem("username", username)
}