import {applyMiddleware,createStore} from 'redux';

// const userReducer = (state={},action)=>{

// 	switch(action.type){
// 		case "CHANGE_NAME":{
// 			state = {...state,name:action.payload}
// 			break;
// 		}
// 		case "CHANGE_AGE":{
// 			state = {...state,age:action.payload}
// 			break;
// 		}
// 	}
// 	return state;
// };

// const tweetsReducer = (state=[],action)=>{
// 	return state;
// };

// const reducers = combineReducers({
// 	user:userReducer,
// 	tweets:tweetsReducer,
// });

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

// const store = createStore(reducers,{
// 	user:{
// 		name:"Will",
// 		age:35,
// 	},
// 	tweets : []
// });

// store.subscribe(()=>{
// 	console.log("Store changed",store.getState())
// })

const reducer = (initialState = 0 , action) => {
	if(action.type === "INC"){
		return initialState + 1;
	}else if(action.type === "DEC"){
		return initialState - 1 ;
	}else if(action.type === "E"){
		throw new Error("Error!!")
	}
	return initialState;
}

const logger = (store) => (next) => (action)=> {
	console.log("action firred",action);
	next(action)
}

const error = (store) => (next) => (action) => {
	try{
		next(action)
	}catch(e){
		console.log("AAAA!!",e)
	}
}

const middleware = applyMiddleware(logger,error);
//Middleware
const store = createStore(reducer,1,middleware);

store.subscribe(()=>{
	console.log("Store changed",store.getState())
})
store.dispatch({type:"INC",payload:"Will"})
store.dispatch({type:"DEC",payload:24})

store.dispatch({type:"INC",payload:"Will Smith"})

store.dispatch({type:"E",payload:"Will Smith"})
