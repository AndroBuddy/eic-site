<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Header from './components/Header.vue'
import Footer from './components/Footer.vue';
</script>

<template>
	<Header/>
	<div class="flex flex-col gap-8 mx-6 mb-6">
		<div id="home" class="ctnr flex flex-col lg:flex-row justify-around items-center p-6 lg:p-8 gap-6 lg:gap-8 w-full rounded-2xl bg-slate-200 font-bold">
			<div class="flex justify-center items-center bg-black/5 w-full lg:w-1/2 h-1/2 lg:h-full rounded-2xl">Image box</div>
			<div class="flex justify-center items-center bg-black/5 w-full lg:w-1/2 h-1/2 lg:h-full rounded-2xl">Text box</div>
		</div>
		<div id="about" class="ctnr flex flex-col lg:flex-row justify-center items-center p-6 lg:p-8 gap-6 lg:gap-8 w-full rounded-2xl bg-slate-200 font-bold">
			<div class="flex justify-center items-center bg-black/5 w-full lg:w-1/2 h-1/2 lg:h-full rounded-2xl">Image box</div>
			<div class="flex justify-center items-center bg-black/5 w-full lg:w-1/2 h-1/2 lg:h-full rounded-2xl">Text box</div>
		</div>
		<div id="tracks" class="ctnr flex flex-col lg:flex-row justify-center items-center p-6 lg:p-8 gap-6 lg:gap-8 w-full rounded-2xl bg-slate-200 font-bold">
			<div class="flex justify-center items-center bg-black/5 w-full lg:w-1/2 h-1/2 lg:h-full rounded-2xl">Image box</div>
			<div class="flex justify-center items-center bg-black/5 w-full lg:w-1/2 h-1/2 lg:h-full rounded-2xl">Text box</div>
		</div>
		<div id="sponsors" class="ctnr flex flex-col lg:flex-row justify-center items-center p-6 lg:p-8 gap-6 lg:gap-8 w-full rounded-2xl bg-slate-200 font-bold">
			<div class="flex justify-center items-center bg-black/5 w-full lg:w-1/2 h-1/2 lg:h-full rounded-2xl">Image box</div>
			<div class="flex justify-center items-center bg-black/5 w-full lg:w-1/2 h-1/2 lg:h-full rounded-2xl">Text box</div>
		</div>
		<div id="schedule" class="ctnr flex flex-col lg:flex-row justify-center items-center p-6 lg:p-8 gap-6 lg:gap-8 w-full rounded-2xl bg-slate-200 font-bold">
			<div class="flex justify-center items-center bg-black/5 w-full lg:w-1/2 h-1/2 lg:h-full rounded-2xl">Image box</div>
			<div class="flex justify-center items-center bg-black/5 w-full lg:w-1/2 h-1/2 lg:h-full rounded-2xl">Text box</div>
		</div>
		<div id="prizes" class="ctnr flex flex-col lg:flex-row justify-center items-center p-6 lg:p-8 gap-6 lg:gap-8 w-full rounded-2xl bg-slate-200 font-bold">
			<div class="flex justify-center items-center bg-black/5 w-full lg:w-1/2 h-1/2 lg:h-full rounded-2xl">Image box</div>
			<div class="flex justify-center items-center bg-black/5 w-full lg:w-1/2 h-1/2 lg:h-full rounded-2xl">Text box</div>
		</div>
		<div id="events" class="ctnr flex flex-col lg:flex-row justify-center items-center p-6 lg:p-8 gap-6 lg:gap-8 w-full rounded-2xl bg-slate-200 font-bold">
			<div class="flex justify-center items-center bg-black/5 w-full lg:w-1/2 h-1/2 lg:h-full rounded-2xl">Image box</div>
			<div class="flex justify-center items-center bg-black/5 w-full lg:w-1/2 h-1/2 lg:h-full rounded-2xl">Text box</div>
		</div>
		<div id="team" class="ctnr flex flex-col lg:flex-row justify-center items-center p-6 lg:p-8 gap-6 lg:gap-8 w-full rounded-2xl bg-slate-200 font-bold">
			<div class="flex justify-center items-center bg-black/5 w-full lg:w-1/2 h-1/2 lg:h-full rounded-2xl">Image box</div>
			<div class="flex justify-center items-center bg-black/5 w-full lg:w-1/2 h-1/2 lg:h-full rounded-2xl">Text box</div>
		</div>
	</div>
	<Footer/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

#app {
	font-family: 'Montserrat', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: black;
	min-height: 100vh;
}

.ctnr {
	height: calc(100vh - 82px - 1.5rem);
}
</style>
