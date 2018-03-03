import React from 'react';
import WizardOne from './components/WizardOne/WizardOne';
import WizardTwo from './components/WizardTwo/WizardTwo';
import WizardThree from './components/WizardThree/WizardThree';
import WizardFour from './components/WizardFour/WizardFour';
import WizardFive from './components/WizardFive/WizardFive';
import WizardSix from './components/WizardSix/WizardSix';
import WizardSeven from './components/WizardSeven/WizardSeven';
import WizardEight from './components/WizardEight/WizardEight';
import WizardNine from './components/WizardNine/WizardNine';
import WizardTen from './components/WizardTen/WizardTen';
import WizardEleven from './components/WizardEleven/WizardEleven';
import Finish from './components/Finish/Finish';

import NextBtn from './components/NextBtn/NextBtn';
import { HashRouter, Switch, Route } from 'react-router-dom';


export default function(loanType, propType, changeLoanType, changePropertyType, changePropertyToBeUsedOn, propToBeUsedOn, city, updateCity, foundFalse, foundTrue, found, realEstateAgentTrue, realEstateAgentFalse, realEstateAgent, updateDownPayment, downPayment, updateCost, cost, credit, updateCreditE,updateCreditG, updateCreditF,updateCreditP, history, updateHistory, addressOne, addressTwo, addressThree, updateAddLineOne, updateAddLineTwo, updateAddLineThree, updateFirst, updateLast, updateEmail, firstName, lastName, email){

        return (
        <HashRouter>
        <div>        
            <Route component={NextBtn} exact path= '/'/>
            <Route component={WizardOne}  path='/wOne'/>
            <Route component={WizardTwo}  path="/wTwo"/>
            <Route component={WizardThree} path="/wThree"/>
            <Route component={WizardFour} path="/wFour"/>
            <Route component={WizardFive} path="/wFive"/>
            <Route component={WizardSix} path="/wSix"/>
            <Route component={WizardSeven} path="/wSeven"/>
            <Route component={WizardEight} path="/wEight"/>
            <Route component={WizardNine} path="/wNine"/>
            <Route component={WizardTen} path="/wTen"/>
            <Route component={WizardEleven} path="/wEleven"/>
            <Route component={Finish} path='/finish'/>
        </div>    
        </HashRouter>
        )
}
 

 