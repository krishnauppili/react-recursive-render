import React,{Component} from 'react';
import TermDropdown from "./term_dropdown";
import TeamList from "./team_list";
import PositionTree from "./position_tree";
import {constructTree} from "../../lib/create_tree";
import ApplicationContainer from "../../store/containers/app_container";

class Main extends Component{

	constructor(props){
		super(props);
		this.testPositions = [
			{
				id:4325,
				parentId:null,
				name:"President 1"
			},
			{
				id:4326,
				parentId:4325,
				name:"Vice President 1"
			},
			{
				id:4335,
				parentId:4331,
				name:"Junior VP2"
			},
			{
				id:4327,
				parentId:4325,
				name:"Vice President 1"
			},
			{
				id:4328,
				parentId:4326,
				name:"Junior VP1"
			},
			{
				id:4330,
				parentId:4327,
				name:"Junior VP2"
			},
			{
				id:4331,
				parentId:null,
				name:"President 2"
			},

		];
		this.resultDom = "";
	}

	traverse = (tree) => {
		this.resultDom += "<ul>";
		for (let i in tree) {
			this.resultDom += "<li>" + tree[i].name + "</li>";
			if (tree[i]['children'] && tree[i]['children'].length > 0) {
				console.log("Id",tree[i].id,"Name",tree[i].name);
				this.traverse(tree[i]['children']);
			}
			else{
				console.log("Leaf node Id",tree[i].id,"Name",tree[i].name);
			}
		}
		this.resultDom +="</ul>";
		return this.resultDom;
	};


	render(){
		const tree = constructTree(this.props.positionList);
		console.log("Tree is ",tree);
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