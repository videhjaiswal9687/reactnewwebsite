import Sum from './Sum'

it("When a & b is number",() => {
    const result = Sum(1,2)
    expect(result).toBe(3)
})

// it("When a and b is string", ()=> {
//     const result = Sum("1","2")
//     expect(result).toBe(3)
// })