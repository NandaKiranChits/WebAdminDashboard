
function search(searchData,fields,searchVal){
    var filtered = [];

    

    searchData.forEach((obj)=>{
        var shouldAdd = false;
        fields.forEach((field)=>{
            if(field.includes(".")){
                let res = field.split(".");
                console.log("Split Result = ",res);
                if(res.length!==1){
                    let firstKey = res[0];
                    let secondKey = res[1];
                    console.log("Splitted and got ",firstKey," second key = ",secondKey, " Value = ",obj[firstKey][secondKey]);
                    if((obj[firstKey]!==undefined || obj[firstKey]!==null) && ((typeof obj[firstKey])==="object")){
                            console.log("First Key is object");
                            let value = obj[firstKey][secondKey].toString().toUpperCase();
                            if(value.includes(searchVal.toUpperCase())){
                                console.log("It matches the second key")
                                shouldAdd = true;
                            }
                    }
                }
            }
            else if(obj[field]===undefined || obj[field]===null){
                return;
            }
            else if(obj[field].toString().toUpperCase().includes(searchVal.toString().toUpperCase())){
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