export function criteriaInArray ( state, action) { 
    let inCriteriaArray = false;
    let searchCriteria = state.searchCriteria;
    for(var i = 0; i<=searchCriteria.length-1; i++) {
        if(action.criteria === 'Newest' && searchCriteria[i] === 'Oldest' || action.criteria === 'Oldest' && searchCriteria[i] === 'Newest' ){
            const removed = dateOption(searchCriteria, action)
            console.log(removed);
            return {...state, searchCriteria:removed}
        }
        else if (action.criteria === 'For Sale' && searchCriteria[i] === 'Sold' || action.criteria === 'Sold' && searchCriteria[i] === 'For Sale'){
            const removedSold = soldOption(searchCriteria, action);
            return {...state, searchCriteria:removedSold}
        }
        else if(state.searchCriteria[i] === action.criteria){
            inCriteriaArray=true;
        }
    }
    if(inCriteriaArray){
        return {...state} 
     }
     else{
        return {...state, searchCriteria:[...state.searchCriteria,action.criteria]};
     } 
}

function dateOption (arr, action) {

    
    if(action.criteria === 'Newest'){
        return arr.reduce((acc,item,i)=>{
                    return item==='Oldest' ? acc.concat('Newest') : acc.concat(item);
                },[])

    } 
    else if(action.criteria === 'Oldest') {
        return arr.reduce((acc,item,i)=>{
                    return item==='Newest' ? acc.concat('Oldest') : acc.concat(item);
                },[]);
    }
    else{
        return arr;
    }

}

function soldOption (arr, action) {
    
        if(action.criteria === 'For Sale'){
            return arr.reduce((acc,item,i)=>{
                        return item==='Sold' ? acc.concat('For Sale') : acc.concat(item);
                    },[])

        } 
        else if(action.criteria === 'Sold') {
            return arr.reduce((acc,item,i)=>{
                        return item==='For Sale' ? acc.concat('Sold') : acc.concat(item);
                    },[]);
        }
        else{
            return arr;
        }
}

export function sold(state, action) {
    if (action.criteria === 'Sold'){
        return {...state, sold:true};
    }
    else if(action.criteria === 'For Sale'){
        return {...state, sold:false};
    }
    else{
        return {...state};
    }
}

export function date(state, action) {
    if (action.criteria === 'Newest'){
        return {...state, date:'Oldest'};
    }
    else if(action.criteria === 'Oldest'){
        return {...state, date:'Newest'};
    }
    else{
        return {...state};
    }
}
