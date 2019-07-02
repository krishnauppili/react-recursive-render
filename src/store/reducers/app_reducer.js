import {CreateReducer} from '../../lib/create_reducer';
import {GET_TEAMS, GET_TERMS, SET_POSITION_LIST} from "../definitions/global_constants";

const initState = {
	termList: [],
	teamList: [],
	positionList: [],
	successMessage: null,
	errorMessage: null,
};

const applicationReducer = CreateReducer(initState, {
	[GET_TERMS](state, action) {
		return {...state, termList:action.payload};
	},
	[GET_TEAMS](state, action) {
		return {...state, teamList:action.payload};
	},
	[SET_POSITION_LIST](state, action) {
		return {...state, positionList:action.payload};
	}
});

export default applicationReducer;