import React,{Component} from 'react';
import TermDropdown from "./term_dropdown";
import TeamList from "./team_list";
import PositionTree from "./position_tree";
import {constructTree} from "../../lib/create_tree";
import ApplicationContainer from "../../store/containers/app_container";

class Main extends Component{

	render(){
		const tree = constructTree(this.props.positionList);
		return(
			<div>
				<TermDropdown/>
				<TeamList/>
				<div className="position-tree">
					{this.props.positionList.length > 0 ?<PositionTree childrenArray={tree}/>:"Please select a valid team"}
				</div>
			</div>
		)
	}
}
export default ApplicationContainer(Main);