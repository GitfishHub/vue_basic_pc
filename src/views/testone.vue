<template>
	<div>
		测试2
	</div>
</template>

<script>
	import homeAPI from '@/api/home.js'
	export default {
		methods: {
			async init() {
				const data=await homeAPI.musicDetails()
				console.log(data,'datalist')
			}
		},
		mounted() {
			this.init()
		}
	}
</script>

<style>
</style>
