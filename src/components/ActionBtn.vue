<!-- template section -->
<template>
	<button
		@click="clickHandler"
		:class="{ primary }"
	>
		{{ label }}
	</button>
</template>

<!-- script section -->
<script>
	export default {
		name: 'ActionBtn',
		props: ['label'],
		data() {
			return {
				primary: true,
			};
		},
		methods: {
			clickHandler(event) {
				console.log(event);
			},
		},
	};
</script>

<!-- 
Type 'von' shortcut gives onClick (@click)
-->

<style scoped>
	button {
		@apply rounded px-5 py-3 font-medium;
	}

	.primary {
		@apply border-0 bg-brand-blue-1 text-white hover:shadow-blue;
	}
</style>
