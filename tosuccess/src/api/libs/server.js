import { getData } from './request';
export default async(filed, params) => {
    let data = null;

    switch (filed) {
        case 'day':
            data = await getData(params)
            break;
        default:
            break;
    }

    return data
}