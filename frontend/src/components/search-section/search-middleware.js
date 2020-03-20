import { requestSuccess } from './search-action';

const middleware = ({ dispatch, getState }) => next => action => {
    if (action.type === "requestAction") {
        let request = action.inputCompany;
        let url = 'https://api.hh.ru/employers?text=' + encodeURIComponent(request);
        fetch(url)
            .then(res => { return res.json()})
            .then(companies => dispatch(requestSuccess(companies)));
    }
    return next(action);
};
  
export default middleware;
