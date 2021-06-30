import { validateWorkshopObj,changeStateToRequested } from '../../../redux/actions/Wokshop.action';
import {allocateSlot} from '../scheduleAtom'

test('Test workshop state change  ',() => {
    let obj = {state:"abc",id:"",conductor:"asd",noOfHours:2,title:"asc",state:"approved"}
    let assertObj = {state:"abc",id:"",conductor:"asd",noOfHours:2,title:"asc",state:"requested"}
    expect(changeStateToRequested(obj).state).toBe(assertObj.state)

    obj = {state:"abc",id:"asd",conductor:"asd",noOfHours:3,title:"",state:"requested"}
    expect(changeStateToRequested(obj).state).toBe(assertObj.state)


})

test('Test Allocation of workshop ',() => {
    let obj = {state:"abc",id:"",startTime:null,noOfHours:null,title:"asc",state:"requested"}
    let assertObj = {state:"abc",id:"",startTime:2,noOfHours:2,title:"asc",state:"approved"}
    let retVal = allocateSlot(obj,assertObj)
    expect(retVal.state).toBe(assertObj.state)
    expect(retVal.noOfHours).toBe(assertObj.noOfHours)
    expect(retVal.startTime).toBe(assertObj.startTime)



})