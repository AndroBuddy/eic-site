<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Header from './components/Header.vue'
import Footer from './components/Footer.vue';
</script>

<template>
	<Header/>
	<div class="flex flex-col gap-8 mx-6 mb-6">
		<div id="home" class="ctnr flex flex-col items-center p-6 lg:p-8 gap-6 lg:gap-8 w-full rounded-2xl bg-slate-200 font-bold">
			<h1>Title</h1>
			<div class="flex flex-col lg:flex-row justify-center items-center flex-grow w-full gap-6 lg:gap-8">
				<div class="flex justify-center items-center bg-black/5 w-full lg:w-1/2 h-1/2 lg:h-full rounded-2xl">Image box</div>
				<div class="flex justify-center items-center bg-black/5 w-full lg:w-1/2 h-1/2 lg:h-full rounded-2xl">Text box</div>
			</div>
		</div>
		<div id="about" class="ctnr flex flex-col items-center p-6 lg:p-8 gap-6 lg:gap-8 w-full rounded-2xl bg-slate-200 font-bold">
			<h1>About</h1>
			<div class="flex flex-col lg:flex-row justify-center items-center flex-grow w-full gap-6 lg:gap-8">
				<div class="flex justify-center items-center bg-black/5 w-full lg:w-1/2 h-1/2 lg:h-full rounded-2xl">Image box</div>
				<div class="flex justify-center items-center bg-black/5 w-full lg:w-1/2 h-1/2 lg:h-full rounded-2xl">
					Innovation & Entrepreneurship are at the core of University’s mission statement. With a view to build strong innovation and entrepreneurship culture across the University, a ‘Centre for Entrepreneurship & Innovation (CEI)’ is established in 2019. With a view to create an enabling eco-system on campus and to develop leadership and organizational skills, the center has instituted and setup a Student Entrepreneurship and Innovation Cell (EIC). 
The cell having 250 members is the second largest club on campus. It organizes events that exposes students to various aspects of the entrepreneurial lifestyle by conducting, Hackathon, Meets, business simulation games, talks and visits to industrial parks. The Center also helps the cell members to participate in international competitions. 

EIC’s flagship event is the annual E-summit relishes being a platform that brings several people part of the entrepreneurial ecosystem together. 
				</div>
			</div>
		</div>
		<div id="events" class="ctnr flex flex-col items-center p-6 lg:p-8 gap-6 lg:gap-8 w-full rounded-2xl bg-slate-200 font-bold">
			<h1>Title</h1>
			<div class="flex flex-col lg:flex-row justify-center items-center flex-grow w-full gap-6 lg:gap-8">
				<div class="flex justify-center items-center bg-black/5 w-full lg:w-1/2 h-1/2 lg:h-full rounded-2xl">Image box</div>
				<div class="flex justify-center items-center bg-black/5 w-full lg:w-1/2 h-1/2 lg:h-full rounded-2xl">Text box</div>
			</div>
		</div>
		<div id="sponsors" class="ctnr flex flex-col items-center p-6 lg:p-8 gap-6 lg:gap-8 w-full rounded-2xl bg-slate-200 font-bold">
			<h1>Title</h1>
			<div class="flex flex-col lg:flex-row justify-center items-center flex-grow w-full gap-6 lg:gap-8">
				<div class="flex justify-center items-center bg-black/5 w-full lg:w-1/2 h-1/2 lg:h-full rounded-2xl">Image box</div>
				<div class="flex justify-center items-center bg-black/5 w-full lg:w-1/2 h-1/2 lg:h-full rounded-2xl">Text box</div>
			</div>
		</div>
		<div id="schedule" class="ctnr flex flex-col items-center p-6 lg:p-8 gap-6 lg:gap-8 w-full rounded-2xl bg-slate-200 font-bold">
			<h1>Title</h1>
			<div class="flex flex-col lg:flex-row justify-center items-center flex-grow w-full gap-6 lg:gap-8">
				<div class="flex justify-center items-center bg-black/5 w-full lg:w-1/2 h-1/2 lg:h-full rounded-2xl">Image box</div>
				<div class="flex justify-center items-center bg-black/5 w-full lg:w-1/2 h-1/2 lg:h-full rounded-2xl">Text box</div>
			</div>
		</div>
		<div id="prizes" class="ctnr flex flex-col items-center p-6 lg:p-8 gap-6 lg:gap-8 w-full rounded-2xl bg-slate-200 font-bold">
			<h1>Title</h1>
			<div class="flex flex-col lg:flex-row justify-center items-center flex-grow w-full gap-6 lg:gap-8">
				<div class="flex justify-center items-center bg-black/5 w-full lg:w-1/2 h-1/2 lg:h-full rounded-2xl">Image box</div>
				<div class="flex justify-center items-center bg-black/5 w-full lg:w-1/2 h-1/2 lg:h-full rounded-2xl">Text box</div>
			</div>
		</div>
		<div id="" class="ctnr flex flex-col items-center p-6 lg:p-8 gap-6 lg:gap-8 w-full rounded-2xl bg-slate-200 font-bold">
			<h1>Title</h1>
			<div class="flex flex-col lg:flex-row justify-center items-center flex-grow w-full gap-6 lg:gap-8">
				<div class="flex justify-center items-center bg-black/5 w-full lg:w-1/2 h-1/2 lg:h-full rounded-2xl">Image box</div>
				<div class="flex justify-center items-center bg-black/5 w-full lg:w-1/2 h-1/2 lg:h-full rounded-2xl">Text box</div>
			</div>
		</div>
		<div id="team" class="ctnr flex flex-col items-center p-6 lg:p-8 gap-6 lg:gap-8 w-full rounded-2xl bg-slate-200 font-bold">
			<h1>Title</h1>
			<div class="flex flex-col lg:flex-row justify-center items-center flex-grow w-full gap-6 lg:gap-8">
				<div class="flex justify-center items-center bg-black/5 w-full lg:w-1/2 h-1/2 lg:h-full rounded-2xl">Image box</div>
				<div class="flex justify-center items-center bg-black/5 w-full lg:w-1/2 h-1/2 lg:h-full rounded-2xl">Text box</div>
			</div>
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
