// @ts-nocheck
import { render, screen } from "@testing-library/vue";
import MainNav from "@/components/MainNav.vue";

//
/* Test to assert on mainNav*/
describe("MainNav", () => {
  it("checks company name on mainNav", () => {
    render(MainNav);
    // screen.debug();
    const companyName = screen.getByText("Google Careers");
    expect(companyName).toBeInTheDocument();
  });

  it("checks nav items on mainNav", () => {
    render(MainNav);
    const navItems = screen.getAllByRole("listitem");
    const navLabels = navItems.map((item) => item.textContent);
    expect(navLabels).toEqual([
      "Teams",
      "Locations",
      "Life At Google",
      "How We Hire",
      "Students",
      "Jobs",
    ]);
  });
});

/*NB: screen.debug() shows mainNav html in terminal 
    - Roles are found in browser-inspect-Accessibilty 
*/