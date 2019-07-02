import React,{Component} from 'react';
import {Button} from "semantic-ui-react";
import AddPositions from "./Positions/add_positions";

class PositionTree extends Component{

	constructor(props){
		super(props);
		this.state = {
			action:"view",
			activeObject: {},
		}
	}

	handleClose = () =>{
		this.setState({
			action:"view",
			activeObject:{},
		});
	};

	render() {
		return(
			<ul>
				{this.props.childrenArray && this.props.childrenArray.map((item,index) => {
					return(
						<React.Fragment key={index}>
							<li>{item.name}
							<span>
								<Button circular icon='plus' onClick={(e)=>{
									this.setState({
										action:"add",
										activeObject:item
									});
								}}/>
								<Button circular icon='pencil'/>
								<Button circular icon='trash'/>
							</span>
							{
								item.children.length > 0 && <PositionTree childrenArray = {item.children}/>
							}
							</li>
						</React.Fragment>
					);
				})}
				{/*<AddPositions open = {this.state.action === "add"} item={this.state.activeObject} onClose={this.handleClose}/>*/}
			</ul>
		)
	}
}
export default PositionTree;