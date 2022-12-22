<template>
	<view>
		<text @click="toMsg">details</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			toMsg() {
				uni.switchTab({
					url: '/pages/msg/msg'
				});
			}
		}
	}
</script>

<style>

</style>
