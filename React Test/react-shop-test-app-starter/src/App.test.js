import { render } from "@testing-library/react";
import App from "./App";
test("", async () => {
  render(<App />);
  const lintTest = screen.getByRole("button", {
    name: "lintTest"
  })

  expect(lintTest.testContent).toBe('lintTest');
});
