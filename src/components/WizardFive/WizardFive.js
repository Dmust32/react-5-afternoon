import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {realEstateAgent} from '../../ducks/reducer'

class WizardFive extends Component {

    render(){
        return(
            <div className="parent-div">
                    <div className="vert-align">    

                    <p>Are you currently working with a real estate agent?</p> <br />
                    <div className="row">
                        <Link to="/wSix"><button onClick={realEstateAgent(true)}>Yes</button></Link>
                        <Link to="/wSix"><button onClick={realEstateAgent(false)}>No </button></Link>
                    </div>
                </div>
            </div>
        )
    }
}
mapStateToProps = state => {
    const {realEstateAgent} = state
    return{
        realEstateAgent
    }
}

export default connect (mapStateToProps, {agent}) (WizardFive);