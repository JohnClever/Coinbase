import React, { Component } from 'react';
import './style.css'
class SecondPart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			students: [
				{ '#': '', name: '', age: '', email: '' },
				{ id: 1, name: 'Ali', age: 19, email: 'ali@email.com' },
				{ id: 2, name: 'Saad', age: 16, email: 'saad@email.com' },
				{ id: 3, name: 'Asad', age: 25, email: 'asad@email.com' },
			],
		};
	}
	renderTableHeader() {
		let header = Object.keys(this.state.students[0]);
		return header.map((key, index) => {
			return <th key={index}>{key.toUpperCase()}</th>;
		});
	}
	renderTableData() {
		return this.state.students.map((student, index) => {
			const { id, name, age, email } = student; //destructuring
			return (
				<tr key={id}>
					<td>{id}</td>
					<td>{name}</td>
					<td>{age}</td>
					<td>{email}</td>
				</tr>
			);
		});
	}

	render() {
		return (
			<div className="second-container">
				<table id='students'>
					<tbody>
						<tr>{this.renderTableHeader()}</tr>
						{this.renderTableData()}
					</tbody>
				</table>
			</div>
		);
	}
}


   


export default SecondPart; 
