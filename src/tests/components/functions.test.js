import { timesTwo, order, sum, substract } from "../../components/functions";

const menuItems = [
  {
    id: "1",
    name: "tatted up turkey burger",
    price: 19.5,
  },
  {
    id: "2",
    name: "lobster lollipops",
    price: 16.5,
  },
  {
    id: "3",
    name: "Motley Que Pulled Pork Sandwich",
    price: 21.5,
  },
  {
    id: "4",
    name: "Trash can Nachos",
    price: 19.5,
  },
];

test("Multiplies by two", () => {
  expect(timesTwo(4)).toBe(8);
});

test("build an order object", () => {
  const result = {
    orderItems: menuItems,
    total: 77,
  };
  expect(order(menuItems)).toEqual(result);
});

// test with describe: describe wrap functions to show a pack of function in test results
describe("Math Functions", () => {
  test("Multiply by two", () => {
    expect(timesTwo(4)).toBe(8);
  });
  test("Add Two numbers", () => {
    expect(sum(4, 3)).toBe(7);
  });
  test("substracts two numbers", () => {
    expect(substract(4, 2)).toBe(2);
  });
});
