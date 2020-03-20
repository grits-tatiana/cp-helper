export const requestAction = (inputCompany) => {
    return { 
        type: "requestAction",
        inputCompany: inputCompany
    }
}

export const requestSuccess = (companies) => {
    return {
        type: "requestSuccess", 
        companies: companies
    }
}
