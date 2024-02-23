import { sum, mult } from "../sum";

test("sum Function should return the addition of two numbers", ()=>{
    expect(sum(10,20)).toBe(30)
    expect(sum(10,30)).toBe(40)
})

test("mult function should return product of two numbers. ", ()=>{
    expect(mult(20,40)).toBe(800)
    expect(mult(10,100)).toBe(1000)
})