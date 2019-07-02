import React,{Component} from 'react';
import {Modal} from "semantic-ui-react";

class AddPositions extends Component{
	render() {
		const {open,item} = this.props;
		return(
			<Modal open={open} onClose={this.props.onClose}>
				<Modal.Header>Add position</Modal.Header>
				<Modal.Content image>
					<Modal.Description>

					</Modal.Description>
				</Modal.Content>
			</Modal>
		)
	}
}
export default AddPositions;