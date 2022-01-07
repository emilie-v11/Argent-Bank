export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));

    console.log(user.body.token, user);
    if (user && user.body.token) {
        return { Authorization: 'Bearer ' + user.body.token };
    } else {
        return {};
    }
}
