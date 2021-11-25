import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Home from "../components/Home";

test("uses the 'username' and 'city' props to display the correct text", () => {
  render(<Home username="Liza" city="New York" color="firebrick" />);
  const liza = screen.queryByText(`Liza is a Web Developer from New York`);
  console.log(liza)
  expect(liza).toBeInTheDocument();

  render(<Home username="Duane" city="Queens" color="firebrick" />);
  const duane = screen.queryByText(`Duane is a Web Developer from Queens`);
  expect(duane).toBeInTheDocument();
});

test("uses the 'color' prop to set the inline style color of the h1", () => {
  const { container } = render(
    <Home username="Liza" city="New York" color="firebrick" />
  );
  const h1 = container.querySelector("h1");
  expect(h1).toBeInTheDocument();
  expect(h1.style.color).toEqual("firebrick");
});
