<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title">{{title}}</text>
		</view>
		<view class="mt-2 w-1--2 bg-gray-400 h-24 p-1">
			<!-- <uni-countdown :day="1" :hour="1" :minute="12" :second="40"></uni-countdown> -->
			<uni-easyinput class="uni-mt-5" trim="all" v-model="value" placeholder="请输入内容" @input="input"></uni-easyinput>
			<button class="bg-blue-300 text-white mt-4" @click="onClick">修改title</button>
		</view>

	</view>
</template>

<script>
	import { mapState, mapMutations } from 'vuex'
	export default {
		data() {
			return {
				// title: 'Hello'
				value: ''
			}
		},
		onLoad() {

		},
		computed: {
			...mapState(['title'])
		},
		methods: {
			...mapMutations(['setTitle']),
			input(e) {
				console.log("🚀 ~ file: index.vue:33 ~ input ~ e:", e)
			},
			onClick() {
				this.setTitle(this.value)
				this.value = ''
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin: 200rpx auto 50rpx auto;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
