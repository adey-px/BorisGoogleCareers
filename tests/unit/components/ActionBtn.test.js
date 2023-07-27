import { render, screen } from '@testing-library/vue';
import ActionBtn from '@/components/ActionBtn.vue';
/**
 * Unit testing on ActionBtn 
 */
describe('Unit test on ActionBtn Component', () => {
	describe('when unAuth user on home page', () => {
		it('show action button label', () => {
			render(ActionBtn, {
				props: {
					type: 'primary',
					label: 'Sign In',
				},
			});
			const button = screen.getByRole('button', {
				name: /sign in/i,
			});
			expect(button).toBeInTheDocument();
		});
	});

	describe('when unAuth user on home page', () => {
		it('show styles on action button', () => {
			render(ActionBtn, {
				props: {
					type: 'primary',
					label: 'Sign In',
				},
			});
			const button = screen.getByRole('button', {
				name: /sign in/i,
			});
			expect(button).toHaveClass('primary');
		});
	});
});
