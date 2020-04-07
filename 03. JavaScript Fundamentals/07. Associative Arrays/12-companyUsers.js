function printUsers(input) {
    let companies = new Map();

    for(let line of input) {
        let [company, user] = line.split(' -> ');
        let users = new Set();
        if(companies.has(company)) {
            users = companies.get(company);
        }
        users.add(user);
        companies.set(company, users);
    }

    let sortedCompanies = Array.from(companies.entries()).sort((a, b) => {
        if(a[0] > b[0]) {
            return 1;
        } else if(a[0] < b[0]) {
            return -1;
        }
        return 0;
    });


    for(let company of sortedCompanies) {
        console.log(company[0]);
        Array.from(company[1].values()).forEach(user => console.log(`-- ${user}`));
    }
}

printUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]);

printUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]);

/*
Task: Write a function which keeps information about companies and their employees. 
You will receive array of strings containing company name and employee's id. Add each employee to the given company. Keep in mind that a company cannot have two employees with the same id.
When you finish reading data, order the companies by the name in ascending order. 
Print the company name and each employee's id in the following format:
{companyName}
-- {id1}
-- {id2}
-- {idN}
Input / Constraints
•	The input come as array of strings, each in the format: "{companyName} -> {employeeId}".
•	The input always will be valid.
*/
