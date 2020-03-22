import {connect} from 'react-redux';
import SearchSection from './search-section';
import {requestAction} from './search-action';

function mapStateToProps(state) {
    return {...state};
}

function mapDispatchToProps(dispatch) {
    return {
        requestAction: inputCompany => dispatch(requestAction(inputCompany)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SearchSection);
