import {actioncreater} from '../app/Slices/actions'


const mockFn = jest.fn(actioncreater)
const msg = {msg:"Hello Ram", time:"20:00PM"}


test("Should take object as parameter.", ()=>{
    mockFn(msg)
    expect(typeof mockFn.mock.calls[0][0]).toBe('object')    
})

test("Should take msg as a string inside that object", ()=>{   
    mockFn(msg)
    expect(typeof mockFn.mock.calls[0][0].msg).toBe('string')
})

test("Should take time as a string inside that object.", ()=>{
    mockFn(msg)
    expect(typeof mockFn.mock.calls[0][0].time).toBe("string")
})

