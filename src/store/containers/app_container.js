import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getTermsAction,getTeamsAction,setPositionList} from "../actions/app_actions";

export default function ApplicationContainer(component) {
	return connect(mapStateToProps, mapDispatchToProps)(component);
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({getTermsAction,getTeamsAction,setPositionList}, dispatch);
}

function mapStateToProps(state) {
	return {
		termList: state.global.termList,
		teamList: state.global.teamList,
		positionList: state.global.positionList,
		successMessage: state.global.successMessage,
		errorMessage: state.global.errorMessage,
	};
}
