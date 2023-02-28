<!-- template section -->
<template>
	<button
		:class="btnClass"
		@click="clickHandler"
	>
		{{ label }}
	</button>
</template> 
<!-- 
If no computed prop, use :class="{primary}" 
as option to btnClass.
Type 'von' shortcut gives onClick (@click).
-->

<!-- script section -->
<script>
	export default {
		name: 'ActionBtn',
		props: ['type', 'label'],
		data() {
			return {};
		},
		computed: {
			btnClass() {
				return {
					[this.type]: true
					// primary: this.type === 'primary',
					// secondary: this.type === 'secondary',
				};
			},
		},
		methods: {
			clickHandler(event) {
				console.log(event);
			},
		},
	};
</script>

<!-- style section -->
<style scoped>
	button {
		@apply rounded px-2 py-3 font-medium;
	}

	.primary {
		@apply border-0 bg-brand-blue-1 text-white hover:shadow-blue;
	}

	.secondary {
		@apply bg-transparent text-brand-blue-1 hover:bg-brand-blue-2 hover:text-white;
	}
</style>
