export const validate = (value, type) =>  {
    let valid = false;

    switch (type) {
        case 'email':
            valid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            break;
        case 'password':
            valid = value.length >= 3;
            break;
    }

    return valid;
}
