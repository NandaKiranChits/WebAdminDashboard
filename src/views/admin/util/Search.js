
function search(searchData,fields,searchVal){
    var filtered = [];

    searchData.forEach((obj)=>{
        var shouldAdd = false;
        fields.forEach((field)=>{
            if(obj[field].includes(searchVal)){
                shouldAdd = true;
            }
        })
        if(shouldAdd){
            filtered.push(obj);
        }
    })

    return filtered;
}

export default search;