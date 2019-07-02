import React,{Component} from 'react';
import ApplicationContainer from "../../store/containers/app_container";
import {Sidebar,Menu,Segment,Icon} from "semantic-ui-react";

class TeamList extends Component{

	handleClick = (positions=[]) =>{
		console.log("Changed",positions);
		this.props.setPositionList(positions);
	};



	render() {
		const teamList = this.props.teamList;
		return(
			<div>
				<Sidebar
					as={Menu}
					className="application-sidebar"
					icon='labeled'
					vertical
					visible={true}
					width='thin'>
					{
						teamList.length > 0 ? teamList.map((teamItem,index)=>{
							return(
								<Menu.Item as='a' key={index} onClick={()=>{
									this.handleClick(teamItem['positions']);
								}}>
									{teamItem['title']}
								</Menu.Item>
							)
						}):"No teams found"
					}
				</Sidebar>
			</div>
		)
	}
}
export default ApplicationContainer(TeamList);