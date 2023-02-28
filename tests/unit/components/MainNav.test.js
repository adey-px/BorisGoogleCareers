// @ts-nocheck
import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import MainNav from '@/components/MainNav.vue';

/* Test to assert on mainNav*/
describe('MainNav', () => {
	it('checks company name on mainNav', () => {
		render(MainNav);
		// screen.debug();
		const companyName = screen.getByText('Google Careers');
		expect(companyName).toBeInTheDocument();
	});

	it('checks nav items on mainNav', () => {
		render(MainNav);
		const navItems = screen.getAllByRole('listitem');
		const navLabels = navItems.map(
			(item) => item.textContent
		);
		expect(navLabels).toEqual([
			'Teams',
			'Locations',
			'Life At Google',
			'How We Hire',
			'Students',
			'Jobs',
		]);
	});

	describe('MainNav state before and after login', () => {
		it('checks display of profile pic', async () => {
			render(MainNav);
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

/* 
- Use screen.debug to inspect html of component in terminal.
- Roles are found in browser -inspect-Accessibilty.
- In checking profile pic, name refers value of image 'alt',
  while i refers case-insensitive. Use of // is called regex.
  name can also be string without // & i, but can cause errors 
  For button, name is the button label which shows in ui.
*/
