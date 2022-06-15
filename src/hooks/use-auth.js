import {useSelector} from 'react-redux';

export function useAuth() {
    const {onauth, email, firstname, lastname, token, id} = useSelector(state => state.user);

    return {
        isAuth: !!email,
        onauth,
        email,
        firstname,
        lastname,
        token,
        id,
    };
}