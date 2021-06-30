import { validateWorkshopObj,changeStateToRequested } from '../../../redux/actions/Wokshop.action';



test('Test Validate Workshop Happy path',() => {
    let obj = {state:"abc",id:"asd",conductor:"asd",noOfHours:0,title:"asc",email:"email@gmail.com",link:"ads"}
    expect(validateWorkshopObj(obj)).toBe(null)

    obj = {state:"abc",id:"asd",conductor:"asd",noOfHours:null,title:"asc",email:"email@gmail.com"}
    expect(validateWorkshopObj(obj)).toBe("Field link Cannot be empty")


    obj = {state:"abc",id:"asd",conductor:"",noOfHours:0,title:"asc",email:"email@gmail.com"}
    expect(validateWorkshopObj(obj)).toBe("Field conductor Cannot be empty")

})





test('Test Validate Workshop',() => {
    let obj = {state:"abc",id:"acd",conductor:"asd",noOfHours:2,title:"asc",email:"email@gmail.com"}
    expect(validateWorkshopObj(obj)).toBe("Field link Cannot be empty")

    obj = {state:"abc",id:"asd",conductor:"asd",noOfHours:3,title:"",email:"email@gmail.com"}
    expect(validateWorkshopObj(obj)).toBe("Field title Cannot be empty")


})
