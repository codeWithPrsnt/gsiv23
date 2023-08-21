import {createStore} from 'redux';

const initialState = {
    movieId:0,
    movieList:[],
    spinner:false
    
}

export const toggleSpinner = (val) =>{
    return {
        type:"SPINNER",
        payLoad:val
    }
}

export const addMovieList = (list) =>{
    return {
        type:"ADD_MOVIELIST",
        payLoad:list
    }
}

export const updateMovieList = (list) =>{
    return {
        type:"UPDATE_MOVIELIST",
        payLoad:list
    }
}

export const addMovieId = (id) =>{
    return {
        type:"ADD_MOVIEID",
        payLoad:id
    }
}

export const deleteMovieId = () =>{
    return {
        type:"DEL_MOVIEID",
        
    }
}

const movieReducer = (state = initialState,action)=>{
    switch (action.type){
        case 'ADD_MOVIEID':return {
            ...state,
            movieId:action.payLoad
            
        }
        case 'DEL_MOVIEID':return{
            ...state,
            movieId:0
        }
        case 'ADD_MOVIELIST':return{
            ...state,
            movieList:action.payLoad
        }
        case 'UPDATE_MOVIELIST':return{
            ...state,
            movieList:action.payLoad
        }
        case 'SPINNER':return{
            ...state,
            spinner:action.payLoad
        }
        default:return state 
    }
}
export const store = createStore(movieReducer);