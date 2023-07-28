import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import MainNav from '@/components/MainNav.vue';
/**
 * TDD Unit testing on MainNav
 * - with Testing Library
 */
describe('Unit test on MainNav Component', () => {
	const renderMainNav = () => {
		render(MainNav, {
			global: {
				stubs: {
					FontAwesomeIcon: true,
				},
			},
		});
	};

	describe('when user on home page', () => {
		it('show company name on main nav', () => {
			renderMainNav();
			const companyName = screen.getByText('Google Careers');
			expect(companyName).toBeInTheDocument();
		});
	});

	describe('when user on home page', () => {
		it('show nav items on main nav', () => {
			renderMainNav();
			const navItems = screen.getAllByRole('listitem');
			const navLabels = navItems.map((item) => item.textContent);
			expect(navLabels).toEqual(['Teams', 'Locations', 'Life At Google', 'How We Hire', 'Students', 'Jobs']);
		});
	});

	describe('main nav state before and after login', () => {
		it('when to show user profile image', async () => {
			renderMainNav();
			let profileImg = screen.queryByRole('img', {
				name: /profile image/i,
			});
			expect(profileImg).not.toBeInTheDocument();

			const loginBtn = screen.getByRole('button', {
				name: /sign in/i,
			});
			await userEvent.click(loginBtn);

			profileImg = screen.getByRole('img', {
				name: /profile image/i,
			});
			expect(profileImg).toBeInTheDocument();
		});
	});
});

/* Note:
- Use screen.debug to inspect html of component in terminal.
- Roles are found in browser -inspect-Accessibilty.
- In checking profile pic, name refers value of image 'alt',
  while i refers case-insensitive. Use of // is called regex.
  name can also be string without // & i, but can cause errors 
  For button, name is the button label which shows in ui.
*/
