/* eslint-disable import/prefer-default-export */
export function reducer(state = [], action) {
    switch (action.type) {
        case 'requestAction':
            return {
                ...state,
                inputCompany: action.inputCompany,
            };
        case 'requestSuccess':
            return {
                ...state,
                companies: action.companies,
            };
        default:
            return state;
    }
}
