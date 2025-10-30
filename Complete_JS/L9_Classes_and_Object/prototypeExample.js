const employee = {
    calTax() {
        console.log("Tax rate is 10%");
    },
};

const karanArjun = {
    salary: 50000,

};

karanArjun.__proto__ = employee; // setting prototype
// This allows karanArjun to access employee's methods

const karanArjun2 = {
    salary: 50000,
};

const karanArjun3 = {
    salary: 50000,
};

const karanArjun4 = {
    salary: 50000,
};

karanArjun2.__proto__ = employee;
karanArjun3.__proto__ = employee;
karanArjun4.__proto__ = employee;
// This allows karanArjun2, karanArjun3, and karanArjun4 to access employee's methods


const karanArjun5 = {
    salary: 50000,
    calcTax() {
        console.log("Tax Rate is 20%");
    },
};
karanArjun5.__proto__ = employee; // setting prototype
// This allows karanArjun5 to access employee's methods
// NOTE: But, In this case, the method in karanArjun5 will access the method defined in karanArjun5 instead of employee