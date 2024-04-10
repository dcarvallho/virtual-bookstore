export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const handleLoginToggle = (payload) => ({
    type: LOGIN,
    payload,
});

export const handleLogoutToggle = (payload) => ({
    type: LOGOUT,
    payload,
})