import { render, screen } from '@testing-library/vue';
import ActionBtn from '@/components/ActionBtn.vue';

describe('ActionBtn', () => {
	it('renders label', () => {
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

	it('applies style type to button', () => {
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
