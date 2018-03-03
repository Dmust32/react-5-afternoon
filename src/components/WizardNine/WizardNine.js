import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {addressOne, addressTwo, addressThree} from '../../ducks/reducer'

class WizardNine extends Component {

    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">                    
                    
                    <p>What is your address?</p> <br />

                    <input type="text" placeholder="Line One" onChange={(e)=> addressOne(e.target.value)}/>
                    <input type="text" placeholder="Line Two" onChange={(e)=> addressTwo(e.target.value)}/>
                    <input type="text" placeholder="Line Three" onChange={(e)=> addressThree(e.target.value)}/>
                
                    
                    <Link to="/wTen"><button className="margin-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}
mapStateToProps = state => {
    const {addressOne, addressTwo, addressThree} = state
    return{
        addressOne, addressTwo, addressThree
    }
}


export default connect(mapStateToProps, {addressOne, addressTwo, addressThree}) (WizardNine);