function showEmployees(employees) {
    let employeesList = [];
    for(let employee of employees) {
        let person = {
            name: employee,
            number: employee.length
        }
        employeesList.push(person);
    }

    for(let person of employeesList) {
        console.log(`Name: ${person.name} -- Personal Number: ${person.number}`);
    }
}

showEmployees(['Silas Butler','Adnaan Buckley','Juan Peterson', 'Brendan Villarreal']);

/*
Task: You're tasked to create a list of employees and their personal numbers.
You will receive an array of strings. Each string is an employee name and to assign them a personal number you have to find the length of the name (whitespace included). 
Try to use an object.
At the end print all the list employees in the following format:
 "Name: {employeeName} -- Personal Number: {personalNum}" 
*/
