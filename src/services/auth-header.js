import { getCookie } from './useCookies';

export default function authHeader() {
    const token = getCookie('signin-token');
    if (token) {
        return { Authorization: `Bearer ${token}` };
    } else {
        return null;
    }
}
