import React, { Component, TextInput } from 'react';
import { v4 as uuidv4} from 'uuid';
import './StockControl.css';

class StockControl extends React.Component {

	constructor(props) {
		super(props);
		
		this.state = {
			name: '',
			type: '',
			expDate: '',
			lux: 0,
			ess: 0,
			gif: 0,
			item: {name: '', type: '', expDate: ''},
			itemList: [],
			itemId : []
		}
		this.updateStateName = this.updateStateName.bind(this);
		this.updateStateType = this.updateStateType.bind(this);
		this.updateStateDate = this.updateStateDate.bind(this);
	};

	handleSubmit() {
		if (this.state.type == "luxury") {
			this.setState({lux: this.state.lux + 1})
			localStorage.setItem("luxNb", parseInt(localStorage.getItem("luxNb")) + 1);
		}
		else if (this.state.type == "essential") {
			this.setState({ess: this.state.ess + 1})
			localStorage.setItem("essNb", parseInt(localStorage.getItem("essNb")) + 1);
		}
		else if (this.state.type == "gift") {
			this.setState({gif: this.state.gif + 1})
			localStorage.setItem("gifNb", parseInt(localStorage.getItem("gifNb")) + 1);
		}
		var sent = "NAME: " + this.state.name + "  TYPE: " + this.state.type + "  EXPIRATION DATE: " + this.state.expDate + "\n";
		localStorage.setItem(uuidv4(), sent)
	}

	updateStateName(e) {
		this.setState({name: e.target.value});
	}

	updateStateType(e) {
		this.setState({type: e.target.value});
	}

	updateStateDate(e) {
		this.setState({expDate: e.target.value});
	}

	allStorage() {

		var values = [];
		var keys = Object.keys(localStorage);
		var i = keys.length;
	
		while ( i-- ) {
			if (keys[i] != "luxNb" && keys[i] != "essNb" &&
			keys[i] != "gifNb") {
				values.push( localStorage.getItem(keys[i]) );
			}
		}
	
		return values;
	}

	render () {
		return (
		<div className="wrapper">
		<h1>Stock Control</h1>
		<form onSubmit={this.handleSubmit.bind(this)}>
		<fieldset>
			<label>
				<p>Name</p>
				<input name="name" value={this.state.name} onChange={this.updateStateName}/>
			</label>
			<label>
			<p>Item Type</p>
			<select name="type" value={this.state.type} onChange={this.updateStateType}>
				<option value="">--Please choose an option--</option>
				<option value="luxury">Luxury</option>
				<option value="essential">Essential</option>
				<option value="gift">Gift</option>
			</select>
			</label>
			<label>
			<p>Expiration Date</p>
			<input type="date" name="expDate" value={this.state.expDate} onChange={this.updateStateDate}/>
			</label>
			<label>
				<p></p>
				<button type="submit">Add Item</button>
			</label>
		</fieldset>
		</form>
		<fieldset>
		<label>{this.allStorage().map(data => (
        <p>{data}</p>
      ))}</label>
		<div className="number">
			<p>Number of luxury items:  {localStorage.getItem("luxNb")}</p>
			<p>Number of essential items:  {localStorage.getItem("essNb")}</p>
			<p>Number of gift items:  {localStorage.getItem("gifNb")}</p>
		</div>
		</fieldset>
		</div>
		)}
}

export default StockControl;