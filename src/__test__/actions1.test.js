import { actioncreater1 } from "../app/Slices/actions";


const mockFn = jest.fn(actioncreater1)
const msg = {msg : "Hello Vinay", time:"12:00PM"}

test("Should Receive Object as parameter", ()=>{
    mockFn(msg)
    expect(typeof mockFn.mock.calls[0][0]).toBe('object')
})

test("Object should contain the 2 key value pairs", ()=>{
    mockFn(msg)
    expect(Object.keys(mockFn.mock.calls[0][0]).length).toBe(2)
})
