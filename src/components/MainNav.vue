<!-- Template section -->
<template>
	<header class="w-full text-sm">
		<div class="fixed top-0 left-0 h-16 w-full bg-white">
			<div class="mx-auto flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8">
				<a
					:href="url"
					class="flex h-full items-center text-xl"
				>
					{{ logo }}
				</a>

				<!-- navigation labels -->
				<nav class="ml-12 h-full">
					<ul class="flex h-full list-none">
						<li
							v-for="navLabel in navLabels"
							:key="navLabel"
							class="ml-9 h-full first:ml-0"
						>
							<a
								href=""
								class="flex h-full items-center py-2.5"
							>
								{{ navLabel }}
							</a>
						</li>
					</ul>
				</nav>

				<!-- Login Btn component -->
				<div class="ml-auto flex h-full items-center">
					<ProfileImg v-if="isLoggedIn" />
					<ActionBtn
						v-else
						type="primary"
						label="Sign In"
						@click="userAuth"
					/>
				</div>
			</div>

			<!-- lower nav component -->
			<LowerNav />
		</div>
	</header>
</template>

<!-- 
	Script section 
-->
<script>
	import ActionBtn from './ActionBtn.vue';
	import ProfileImg from './ProfileImg.vue';
	import LowerNav from './LowerNav.vue';

	export default {
		name: 'MainNav',
		components: {
			ActionBtn,
			ProfileImg,
			LowerNav,
		},
		data() {
			return {
				logo: 'Google Careers',
				url: 'https://careers.google.com',
				navLabels: ['Teams', 'Locations', 'Life At Google', 'How We Hire', 'Students', 'Jobs'],
				isLoggedIn: false,
			};
		},
		methods: {
			userAuth() {
				this.isLoggedIn = true;
			},
		},
	};
</script>

<!-- Note
	methods: {} is used to update state
  of items in data() {} using this keyword.
-->
