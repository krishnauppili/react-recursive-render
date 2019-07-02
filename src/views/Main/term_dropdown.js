import React,{Component} from 'react';
import {Dropdown} from "semantic-ui-react";
import ApplicationContainer from "../../store/containers/app_container";
import {COMMITTEE_ID} from "../../constants/app_variables";

class TermDropdown extends Component {
	constructor(props){
		super(props);
		this.state = {
			termOptions :[],
		}
	}

	componentWillMount() {
		this.props.getTermsAction(COMMITTEE_ID);
	};

	componentWillReceiveProps(nextProps, nextContext) {
		if(nextProps['termList'] && nextProps['termList'].length > 0){
			let termOptions = [];
			nextProps['termList'].forEach((termItem)=>{
				termOptions.push({
					key:termItem['id'],
					text:termItem['short_name'],
					value:termItem['id']
				});
			});
			this.setState({
				termOptions
			});
		}

	}

	handleDropdownChange = (option,data) =>{
		const termId = data.value;
		this.props.getTeamsAction(COMMITTEE_ID,termId);
	};

	render(){
		const {termOptions} = this.state;
		return(
			<Dropdown
				className="application-dropdown"
				placeholder='Select Terms'
				selection
				search
				options={termOptions}
				onChange={this.handleDropdownChange}
			/>
		);
	}

};
export default ApplicationContainer(TermDropdown);