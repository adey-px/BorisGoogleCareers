<!-- Template section -->
<template>
	<div class="h-16 w-full border-b border-solid border-brand-gray-1 bg-white">
		<div class="flex h-full items-center px-8">
			<div v-if="jobSearchResultPage">
				<font-awesome
					:icon="['fa-solid', 'search']"
					class="mr-3"
				/>
				<span class="text-brand-green-1">1680</span>
				<span class="ml-1">jobs matched</span>
			</div>
		</div>
	</div>
</template>

<!-- 
	Script section
 -->
<script>
	export default {
		name: 'LowerNav',
		data() {
			return {
				jobSearchResultPage: true,
			};
		},
	};
</script>
