import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import SummaryPage from "../SummaryPage";

test("checkbox and button", () => {
  render(<SummaryPage />);
  const checkbox = screen.getByRole("checkbox", {
    name: "주문하려는 것을 확인하셨나요?",
  });
  expect(checkbox.checked).toEqual(false);

  const cofirmButton = screen.getByRole("button", { name: "주문 확인" });
  expect(cofirmButton.disabled).toBeTruthy();
});
