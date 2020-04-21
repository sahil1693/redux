const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers  //To combine multiple reducer we can use combineReducer function or direct way 
const BUY_CAKE = "BUY_CAKE"
const BUY_ICECREAM = 'BUY_ICECREAM'

function buycake(){
	return {
	type:BUY_CAKE,
	info: 'First redux action'
	}
}

function buyicecream(){
	return {
	
	type:BUY_ICECREAM,
	info: 'Second redux action'
	}

}
/*Above part is Action*/


/*const initialState = {

	numberOfCakes:10,
	numberOfIceCream: 20
}*/
/*initial state*/
/*const reducer  = (state= initialState,action)=>{

	switch(action.type){
		case BUY_CAKE: return {
			...state,
			numberOfCakes: state.numberOfCakes-1
		}
		case BUY_ICECREAM: return {
			...state,
			numberOfIceCream:state.numberOfIceCream - 1		
		}
		default : return state
	}

}*/
const cakestate = {
	numberOfCakes:10
}
const icestate = {
	numberOfIceCream:20
}
const cakeReducer  = (state= cakestate,action)=>{

	switch(action.type){
		case BUY_CAKE: return {
			...state,
			numberOfCakes: state.numberOfCakes-1
		}
		default : return state
	}

}
const iceCreamReducer  = (state= icestate,action)=>{

	switch(action.type){
		case BUY_ICECREAM: return {
			...state,
			numberOfIceCream:state.numberOfIceCream - 1		
		}
		default : return state
	}

}
const rootReducer = combineReducers({

	cake: cakeReducer,
	Icecream: iceCreamReducer
	}
)
/*reducer function which */
const store = createStore(rootReducer)   //creating a state container for store the state of an application
console.log('initial state',store.getState())  //To get current state of a container
const unsubscribe=store.subscribe(()=>console.log('Updated State', store.getState())); // to subscribe to the store so get do the changes in the state
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buyicecream())
store.dispatch(buyicecream())
unsubscribe()  // unsubscribe an action

console.log(store.getState())
store.dispatch(buycake()) //after unsubscribe the store we can't make changes to the store



