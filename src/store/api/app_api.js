import axios from "axios";
import {COMMITTEE_API_URL} from "../../constants/api_constants";
import {ACCESS_TOKEN} from "../../constants/app_variables";


export const getCommitteeInfo = async (committeeId) => {
	try {
		let response = await axios.get(`${COMMITTEE_API_URL}/${committeeId}?access_token=${ACCESS_TOKEN}`);
		if(response.data){
			return{
				success:true,
				terms:response.data['terms'],
				status:response.status
			}
		}

	} catch (e) {
		return ({
			success:false,
			error:"Something went wrong. Try Again",
			status:e.response.status
		})
	}
};


export const getTeamList = async (committeeId,termId) => {
	try {
		let response = await axios.get(`${COMMITTEE_API_URL}/${committeeId}/terms/${termId}?access_token=${ACCESS_TOKEN}`);
		if(response.data){
			return{
				success:true,
				teams:response.data['teams'],
				status:response.status
			}
		}

	} catch (e) {
		return ({
			success:false,
			error:"Something went wrong. Try Again",
			status:500
		})
	}
};