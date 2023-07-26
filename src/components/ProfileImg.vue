<!-- Template section -->
<template>
	<div>
		<img
			:src="imageLink"
			alt="profile image"
			class="h-8 w-8 rounded object-contain"
		/>
	</div>
</template>
<!-- 
	use 'v-bind:' or shortcut ':' to indicate the prop 
	is JS related, not just a regular string 
-->

<!-- 
	Script section 
-->
<script>
	export default {
		name: 'ProfileImg',
		data() {
			return {
				imageLink:
					'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
			};
		},
	};
</script>
