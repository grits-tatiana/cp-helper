import {requestSuccess} from './search-action';

const middleware = ({dispatch}) => next => (action) => {
    if (action.type === 'requestAction') {
        const request = action.inputCompany;
        const url = `https://api.hh.ru/employers?text=${encodeURIComponent(request)}`;
        fetch(url)
            .then((res) => { return res.json(); })
            .then(companies => dispatch(requestSuccess(companies)));
    }
    return next(action);
};

export default middleware;
