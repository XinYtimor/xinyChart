<template>
	<view>
		<text>msg</text>
		<button @click="toDia">toDia</button>
	</view>
</template>

<script>
	export default {

		data() {
			return {

			}
		},

		methods: {
			toDia() {
				uni.navigateTo({
					url: '/subpages/details/details',
					animationType: 'pop-in',
					animationDuration: 200
				});
			}
		}
	}
</script>

<style>

</style>
