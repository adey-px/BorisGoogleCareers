/** 
 TDD config using testing library, vitest & jest-dom
 - set as globals under test:{} in root/vite.config
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