import {combineReducers,createStore} from 'redux';

const userReducer = (state={},action)=>{

	switch(action.type){
		case "CHANGE_NAME":{
			state = {...state,name:action.payload}
			break;
		}
		case "CHANGE_AGE":{
			state = {...state,age:action.payload}
			break;
		}
	}
	return state;
};

const tweetsReducer = (state=[],action)=>{
	return state;
};

const reducers = combineReducers({
	user:userReducer,
	tweets:tweetsReducer,
});

// const reducer = function(state,action){
// //type is necessary in the object payload can be anything
// 	if(action.type === "INC"){
// 		return state+action.payload;
// 	}
// 	if(action.type === "DEC"){
// 		return state-action.payload;
// 	}
// 		return state;
	
// }

const store = createStore(reducers,{
	user:{
		name:"Will",
		age:35,
	},
	tweets : []
});

store.subscribe(()=>{
	console.log("Store changed",store.getState())
})

store.dispatch({type:"CHANGE_NAME",payload:"Will"})
store.dispatch({type:"CHANGE_AGE",payload:24})

store.dispatch({type:"CHANGE_NAME",payload:"Will Smith"})
