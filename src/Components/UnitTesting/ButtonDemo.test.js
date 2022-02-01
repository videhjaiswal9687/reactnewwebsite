import {render, fireEvent} from "@testing-library/react"
import ButtonDemo from "./ButtonDemo"

it("checkButton",()=>{
    const {queryByTitle} = render(<ButtonDemo/>);
    const btn = queryByTitle("dummyButton");
    expect(btn).toBeTruthy();
})

describe("clickButton",() => {
    it("onClick", ()=> {
        const { queryByTitle } = render(<ButtonDemo/>)
        const btn = queryByTitle("dummyButton");
        expect(btn.innerHTML).toBe("Press Here");
        fireEvent.click(btn);
        expect(btn.innerHTML).toBe("You Clicked!!");
    })
})