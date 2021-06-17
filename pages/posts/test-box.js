import Layout from '../../components/layout'
import React from 'react'

class Toggle extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isToggleOn: true};

		//This biding is necessary to make 'this' work in the callback
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState(state => ({
			isToggleOn: !state.isToggleOn
		}));
	}

	

	render() {
	  var btnstyle = {
	    color: "red"
	  };

	  return (
		<Layout>
		  <h1>TestBox</h1>

		  <h2>Toggle Switch</h2>
		    <button className="button　button-a" style={{color:"orange"}}onClick={this.handleClick}>
		      {this.state.isToggleOn ? 'ON' : 'OFF'}
		    </button>
		</Layout>
		)
	 }
}


export default Toggle;

