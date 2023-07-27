/** 
 TDD config with vitest, jest-dom & user-event 
*/
import { cleanup } from "@testing-library/vue";
import { expect, afterEach } from "vitest";
import matchers from "@testing-library/jest-dom/matchers";

// Set to configure before every test
expect.extend(matchers);

// Set to invoke clean-up after each test
afterEach(() => {
  cleanup();
})