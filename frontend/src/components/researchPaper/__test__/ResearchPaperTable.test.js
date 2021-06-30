import { validateResearchObj } from '../../../redux/actions/research.action';



test('TestTest Validate object Happy path',() => {
    let obj = {name:"abc",id:"asd",paperTopic:"asd",paperUploader:"asd",state:"state",paperLink:"asc",email:"email@gmail.com"}
    expect(validateResearchObj(obj)).toBe(null)

     obj = {name:"abc",id:"asd",paperTopic:"asd",paperUploader:"asd",paperLink:null,email:"email@gmail.com",state:"state"}
    expect(validateResearchObj(obj)).toBe("Field paperLink Cannot be empty")


     obj = {name:"abc",id:"asd",paperTopic:"asd",paperUploader:"",paperLink:"tre",email:"email@gmail.com"}
    expect(validateResearchObj(obj)).toBe("Field paperUploader Cannot be empty")

})


test('TestTest Validate object ',() => {
    let obj = {id:"",paperTopic:"asd",paperUploader:"asd",paperLink:"asc",state:"state",email:"email@gmail.com"}

     obj = {name:"abc",id:"asd",paperTopic:"asd",paperUploader:"asd",state:"state",paperLink:null,email:"email@gmail.com"}
    expect(validateResearchObj(obj)).toBe("Field paperLink Cannot be empty")


     obj = {name:"abc",id:"asd",paperTopic:"asd",paperUploader:"",state:"state",paperLink:"tre",email:"email@gmail.com"}
    expect(validateResearchObj(obj)).toBe("Field paperUploader Cannot be empty")

})
