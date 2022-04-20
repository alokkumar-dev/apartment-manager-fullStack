import { ADD_FLAT, SEARCH } from "./action";


const initState={
    flat:[],
    filterData:[]
}


export const flatReducer =(store=initState,{type,payload})=>{

    switch(type){
        case ADD_FLAT :
            return {...store,flat:payload}
         case SEARCH :
             return {...store,filterData:[...searchData(store.flat,payload)]}   
        default:
            return store    
    }
}

const searchData=(data,input)=>{
    if (input.length == 0){
        return data;
    }
    var newData = data.filter((item) => item.blockName == input);
      console.log(newData)
    return newData;
      
}