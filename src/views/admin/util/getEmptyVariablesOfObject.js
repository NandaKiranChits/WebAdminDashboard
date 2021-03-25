import isEmpty from './isEmpty';

function getEmptyVariablesOfObject(obj){
    var emptyList = [];

    for(const property in obj){
        if(isEmpty(obj[property])){
            emptyList.push(property);
        }
    }

    return emptyList;
}

export default getEmptyVariablesOfObject;