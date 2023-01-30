/** 
 TDD with vitest, jest-dom & user-event 
*/

import { cleanup } from "@testing-library/vue";
import { expect, afterEach } from "vitest";
import matchers from "@testing-library/jest-dom/matchers";

// Configure before every test
expect.extend(matchers);

// Invoke clean-up after each test
afterEach(() => {
  cleanup();
})