// Write your solution in this file!


const employee = {
    name:"Nancy",
    streetAddress:"854 Sargent",
};


function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;

    return newEmployee;
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;

    return employee;
};


function deleteFromEmployeeByKey(employee, key, value) {
    return {
        ...employee,
        [key]: value,
    };
}

function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    employee[key] = value;

    return employee;
}