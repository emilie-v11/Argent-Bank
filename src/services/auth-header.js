// export default function authHeader() {
//     const user = JSON.parse(localStorage.getItem('user'));

//     if (user && user.accessToken) {
//         // for Node.js Express back-end
//         return { 'x-access-token': user.accessToken };
//     } else {
//         return {};
//     }
// }

export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));

    console.log(user.body.token);
    if (user && user.body.token) {
        // return { Authorization: 'Bearer ' + user.body.token };
        return { Authorization: 'Bearer ' + user.body.token };
    } else {
        return {};
    }
}
