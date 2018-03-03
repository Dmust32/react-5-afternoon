const initialState ={
    loanType: 'Home Purchase',
    propertyType: 'Single Family Home',
    city: '',
    propToBeUsedOn: '',
    found: false,
    realEstateAgent: "false",
    cost: 0,
    downPayment: 0,
    credit: '',
    history: '',
    addressOne: '',
    addressTwo: '',
    addressThree: '',
    firstName: '',
    lastName: '',
    email: ''
}
//ACTION TYPES
const UPDATE_LOAN_TYPE = 'UPDATE_LOAN_TYPE'
const UPDATE_PROPERTY_TYPE = 'UPDATE_PROPERTY_TYPE'
const UPDATE_CITY= 'UPDATE_CITY'
const UPDATE_PROP= 'UPDATE_PROP'
const UPDATE_FOUND= 'UPDATE_FOUND'
const REAL_ESTATE_AGENT= 'REAL_ESTATE_AGENT'
const COST = 'COST'
const DOWN_PAYMENT = 'DOWN_PAYMENT'
const CREDIT = 'CREDIT'
const HISTORY = 'HISTORY'
const ADDRESS = 'ADDRESS_ONE'
const ADDRESS_TWO = 'ADDRESS_TWO'
const ADDRESS_THREE = 'ADDRESS_THREE'
const FIRST_NAME = 'FIRST_NAME'
const LAST_NAME = 'LAST_NAME'
const EMAIL = 'EMAIL'

function reducer(state= {initialState}, action){
   switch(action.type){
        case UPDATE_PROPERTY_TYPE:
            return Object.assign({}, state, {propertyType: action.payload});
        case UPDATE_LOAN_TYPE:
            return Object.assign({}, state, {loanType: action.payload});
        case UPDATE_CITY:
            return Object.assign({}, state, {city: action.payload});
        case UPDATE_PROP:
            return Object.assign({}, state, {propToBeUsedOn: action.payload})   
        case UPDATE_FOUND:
            return Object.assign({}, state, {found: action.payload})    
        case REAL_ESTATE_AGENT:
            return Object.assign({}, state, {realEstateAgent: action.payload}) 
        case COST:
            return Object.assign({}, state, {cost: action.payload})
        case DOWN_PAYMENT:
            return Object.assign({}, state, {downPayment: action.payload})
        case CREDIT:
            return Object.assign({}, state, {credit: action.payload})
        case HISTORY:
            return Object.assign({}, state, {history: action.payload})  
        case ADDRESS: 
            return Object.assign({}, state, {addressOne: action.payload}) 
        case ADDRESS_TWO:
            return Object.assign({}, state, {addressTwo: action.payload})  
        case ADDRESS_THREE:
            return Object.assign({}, state, {addressThree: action.payload})  
        case FIRST_NAME:
            return Object.assign({}, state, {firstName: action.payload})  
        case LAST_NAME:
            return Object.assign({}, state, {lastName: action.payload})  
        case EMAIL:
            return Object.assign({}, state, {email: action.payload}) 
        default: 
            return state    
   }
}

function updateLoanType (loanType) {
    return {
        type: UPDATE_PROPERTY_TYPE,
        payload: loanType
    }
}

function updatePropertyType (property){
    return {
        type: UPDATE_PROPERTY_TYPE,
        payload: property
    }
}

function updateCity (city){
    return {
        type: UPDATE_CITY,
        payload: city
    }
}

function updateProp (prop){
    return{
        type: UPDATE_PROP,
        payload: prop
    }
}

function updateFound (found){
    return{
        type: UPDATE_FOUND,
        payload: found
    }
}
function realEstateAgent(agent){
    return{
        type: REAL_ESTATE_AGENT,
        payload: agent
    }
}
function cost (cost){
    return{
        type: COST,
        payload: cost
    }
}
function downPayment (payment){
    return{
        type: DOWN_PAYMENT,
        payload: payment
    }
}
function credit (credit){
    return{
        type: CREDIT,
        payload: credit
    }
}
function history (history){
    return{
        type: HISTORY,
        payload: history
    }
}
function addressOne (line1){
    return{
        type: ADDRESS,
        payload: line1
    }
}
function addressTwo (line2){
    return{
        type: ADDRESS_TWO,
        payload: line2
    }
}
function addressThree (line3){
    return{
        type: ADDRESS_THREE,
        payload: line3
    }
}
function firstName (name){
    return{
        type: FIRST_NAME,
        payload: name
    }
}
function lastName (last){
    return{
        type: LAST_NAME,
        payload: last
    }
}
function email (email){
    return{
        type: EMAIL,
        payload: email
    }
}

export default reducer;