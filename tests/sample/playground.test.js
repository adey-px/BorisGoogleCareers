/*
import { describe, it, expect } from "vitest";
import { evenOrOdd, multiply } from "./plaground";
*/

/* TDD with vue-test-utils, built-in to vue
   use 'npm run test:unit --coverage' 
*/

/* tdd implies:
  - write test code that will fail (red phase)
  - write min code to pass the test (green phase)
  - improve the code structure (refactor phase)
  - Below, math functions are used before writing them

  * vitest usage:
   - describ() to categorize tests
   - it() to declare test logic
   - expect() to write assertion
*/
/*
describe("basic math operations", () => {
  it("adds two numbers", () => {
    expect(1 + 1).toBe(2);
  }); 

  describe("evenOrOdd", () => {
    describe("when number is even", () => {
      it("indicates number is even", () => {
        expect(evenOrOdd(2)).toBe("Even");
      });
    });

    describe("When number is odd", () => {
      it("indicates number is odd", () => {
        expect(evenOrOdd(3)).toBe("Odd");
      });
    });
  });

  describe("multiply two numbers", () => {
    it("multiplies two numbers", () => {
      expect(multiply(2, 4)).toBe(8);
    });
  });
});
*/

/* Non-existing fun is used to try multiply 
  two numbers, test failed as expected.
  Finally the actual fun is written to satisy
  the requirements shown in the failed result
  at terminal. Keep test running as you write
  solution code
*/

// NB
/* Testing Pyramid:
  - Unit test with
  - Integration test
  - E2E test
*/