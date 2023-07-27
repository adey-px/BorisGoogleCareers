import { render, screen } from '@testing-library/vue';
import LowerNav from '@/components/LowerNav.vue';
/**
 * Unit testing on LowerNav
 */
describe('Unit test on LowerNav Component', () => {
	describe('when user on jobs page', () => {
		it('display job count', () => {
			render(LowerNav, {
				data() {
					return {
						jobSearchResultPage: true,
					};
				},
			});
			const jobCount = screen.getByText('1680');
			expect(jobCount).toBeInTheDocument();
		});
	});

	describe('when user NOT on jobs page', () => {
		it('does not display job count', () => {
			render(LowerNav, {
				data() {
					return {
						jobSearchResultPage: false,
					};
				},
			});
			const jobCount = screen.queryByText('1680');
			expect(jobCount).not.toBeInTheDocument();
		});
	});
});
