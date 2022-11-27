// Write your solution in this file!
let employee = {
    name:'', streetAddress: ''
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee [key]= value
    return employee
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    let realEmployee = {...employee}
    realEmployee [key] = value
    return realEmployee
}

function deleteFromEmployeeByKey(employee, key){
    let realEmployee = {...employee}
    delete realEmployee[key]
    return realEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}