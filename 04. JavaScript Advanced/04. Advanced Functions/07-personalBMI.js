function patientInfo(name, age, weight, height) {
    let bmi = Math.round(weight / Math.pow(height / 100, 2));
    let person = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: bmi,
    };

    if (bmi < 18.5) {
        person.status = 'underweight';
    } else if(bmi < 25) {
        person.status = 'normal';
    } else if(bmi < 30) {
        person.status = 'overweight';
    } else {
        person.status = 'obese';
        person.recommendation = 'admission required';
    }
        return person;
}

console.log(patientInfo('Peter', 29, 75, 182));
console.log(patientInfo('Honey Boo Boo', 9, 57, 137));

/*
Task: A wellness clinic has contacted you with an offer - they want you to write a program that composes patient charts and performs some preliminary evaluation of their condition. The data comes in the form of several arguments, describing a person - their name, age, weight in kilograms and height in centimeters. Your program must compose this information into an object and return it for further processing.
The patient chart object must contain the following properties:
•	name
•	personalInfo, which is an object holding their age, weight and height as properties
•	BMI - body mass index. You can find information about how to calculate it here: https://en.wikipedia.org/wiki/Body_mass_index
•	status
The status is one of the following:
•	underweight, for BMI less than 18.5;
•	normal, for BMI less than 25;
•	overweight, for BMI less than 30;
•	obese, for BMI 30 or more;
Once the BMI and status are calculated, you can make a recommendation. If the patient is obese, add an additional property called recommendation and set it to “admission required”.
Input
Your function needs to take four arguments - name, age, weight and height
Output
Your function needs to return an object with properties as described earlier. All numeric values should be rounded to the nearest whole number. All fields should be named exactly as described (their order is not important).
Look at the sample output for more information.
*/
