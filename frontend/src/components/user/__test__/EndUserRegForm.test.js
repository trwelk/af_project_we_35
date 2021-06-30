import { validateEndUserReg } from '../../../redux/actions/EndUser.action';

test('Validating for error message',() => {
    let testObj = { email: "", fName: "", lName: "", institution: "", contact: ""}
    expect(validateEndUserReg(testObj)).toBe("Email Cannot be empty");

    testObj = { email: "test@gmail.com", fName: "", lName: "", institution: "", contact: ""}
    expect(validateEndUserReg(testObj)).toBe("First Name Cannot be empty");

    testObj = { email: "test@gmail.com", fName: "Ryan", lName: "", institution: "", contact: ""}
    expect(validateEndUserReg(testObj)).toBe("Last Name Cannot be empty");

    testObj = { email: "test@gmail.com", fName: "Ryan", lName: "Moses", institution: "", contact: ""}
    expect(validateEndUserReg(testObj)).toBe("Institution Cannot be empty");

    testObj = { email: "test@gmail.com", fName: "Ryan", lName: "Moses", institution: "SLIIT", contact: ""}
    expect(validateEndUserReg(testObj)).toBe("Contact Cannot be empty");
})

test('Validating for success scenario',() => {
    let testObj = { email: "test@gmail.com", fName: "Ryan", lName: "Moses", institution: "SLIIT", contact: "771234567"}
    expect(validateEndUserReg(testObj)).toBe(null);
})
