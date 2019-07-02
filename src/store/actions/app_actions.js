import * as API from '../api/app_api';
import {GET_TEAMS, GET_TERMS, SET_POSITION_LIST} from "../definitions/global_constants";


export function getTermsAction(committeeId) {
	return async (dispatch) => {
		const response = await API.getCommitteeInfo(committeeId);
		dispatch({type: GET_TERMS, payload: response['terms']});
	};
}

export function getTeamsAction(committeeId,termId) {
	return async (dispatch) => {
		const response = await API.getTeamList(committeeId,termId);
		dispatch({type: GET_TEAMS, payload: response['teams']});
	};
}

export function setPositionList(positionList) {
	return async (dispatch) => {
		dispatch({type: SET_POSITION_LIST, payload: positionList});
	};
}