<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Header from './components/Header.vue'
import Footer from './components/Footer.vue';
</script>

<template>
	<Header/>
	<div class="flex flex-col gap-8 mx-6 lg:mx-24 mb-6">
		<div id="home" class="ctnr flex flex-col items-center p-6 lg:p-8 gap-6 lg:gap-8 w-full rounded-2xl bg-slate-100/80 font-bold shadow-lg backdrop-blur-sm">
			<div class="flex flex-col lg:flex-row justify-center items-center flex-grow w-full lg:gap-8 lg:px-24">
				<div class="flex justify-center items-center w-full lg:w-1/2 h-1/2 lg:h-full rounded-2xl">
					<img src="./assets/logo.png" alt="">
				</div>
				<div class="flex flex-col justify-center items-center gap-6 w-full lg:w-1/2 h-1/2 lg:h-full">
					<div class="flex flex-col justify-center items-center text-lg lg:text-4xl">
						<h1 class="thugo"><span style="color: #f95700;">E-Summit</span>'22</h1>
						<span class="font-normal italic text-black/60">Triumph Over Turmoil</span>
					</div>
					<div class="flex flex-col justify-center items-center text-xl lg:text-3xl text-black/40">
						<span>28th - 29th April 2022</span>
					</div>
					<div class="flex gap-6">
						<button class="h-10 px-6 font-semibold rounded-md text-white hidden lg:block" style="background-color: #f95700;" type="submit">
							Register
						</button>
						<button class="h-10 px-6 font-semibold rounded-md text-white hidden lg:block" style="background-color: #5865F2;" type="submit">
							<img src="./assets/Discord-Logo+Wordmark-White.svg" class="w-24">
						</button>
					</div>
				</div>
			</div>
		</div>
		<div id="about" class="ctnr flex flex-col items-center p-6 lg:p-8 gap-6 w-full rounded-2xl bg-slate-100/80 font-bold shadow-lg backdrop-blur-sm">
			<h1 class="text-4xl">About <span class="italic" style="color: #f95700;">E-Summit</span></h1>
			<div class="flex flex-col lg:flex-row justify-center items-center flex-grow w-full gap-6 lg:gap-8">
				<div class="flex justify-center items-center w-full lg:w-1/2 h-1/2 lg:h-full rounded-2xl">
					<img src="./assets/logo.png" alt="">
				</div>
				<div class="flex justify-center items-center w-full lg:w-1/2 h-1/2 lg:h-full m-12 text-lg font-normal">
					Innovation & Entrepreneurship are at the core of University’s mission statement. With a view to build strong innovation and 
					entrepreneurship culture across the University, a ‘Centre for Entrepreneurship & Innovation (CEI)’ is established in 2019. With a 
					view to create an enabling eco-system on campus and to develop leadership and organizational skills, the center has instituted and 
					setup a Student Entrepreneurship and Innovation Cell (EIC).<br><br>
					The cell having 250 members is the second largest club on campus. It organizes events that exposes students to various aspects of 
					the entrepreneurial lifestyle by conducting, Hackathon, Meets, business simulation games, talks and visits to industrial parks. The 
					Center also helps the cell members to participate in international competitions.<br>
					EIC’s flagship event is the annual E-summit relishes being a platform that brings several people part of the entrepreneurial 		
					ecosystem together. 
				</div>
			</div>
		</div>
		<div id="events" class="ctnr flex flex-col items-center p-6 lg:p-8 gap-6 lg:gap-8 w-full rounded-2xl bg-slate-100/80 font-bold shadow-lg backdrop-blur-sm">
			<h1>Title</h1>
			<div class="flex flex-col lg:flex-row justify-center items-center flex-grow w-full gap-6 lg:gap-8">
				<div class="flex justify-center items-center bg-black/5 w-full lg:w-1/2 h-1/2 lg:h-full rounded-2xl">Image box</div>
				<div class="flex justify-center items-center bg-black/5 w-full lg:w-1/2 h-1/2 lg:h-full rounded-2xl">Text box</div>
			</div>
		</div>
		<div id="sponsors" class="ctnr flex flex-col items-center p-6 lg:p-8 gap-6 lg:gap-8 w-full rounded-2xl bg-slate-100/80 font-bold shadow-lg backdrop-blur-sm">
			<h1>Title</h1>
			<div class="flex flex-col lg:flex-row justify-center items-center flex-grow w-full gap-6 lg:gap-8">
				<div class="flex justify-center items-center bg-black/5 w-full lg:w-1/2 h-1/2 lg:h-full rounded-2xl">Image box</div>
				<div class="flex justify-center items-center bg-black/5 w-full lg:w-1/2 h-1/2 lg:h-full rounded-2xl">Text box</div>
			</div>
		</div>
		<div id="schedule" class="ctnr flex flex-col items-center p-6 lg:p-8 gap-6 lg:gap-8 w-full rounded-2xl bg-slate-100/80 font-bold shadow-lg backdrop-blur-sm">
			<h1>Title</h1>
			<div class="flex flex-col lg:flex-row justify-center items-center flex-grow w-full gap-6 lg:gap-8">
				<div class="flex justify-center items-center bg-black/5 w-full lg:w-1/2 h-1/2 lg:h-full rounded-2xl">Image box</div>
				<div class="flex justify-center items-center bg-black/5 w-full lg:w-1/2 h-1/2 lg:h-full rounded-2xl">Text box</div>
			</div>
		</div>
		<div id="prizes" class="ctnr flex flex-col items-center p-6 lg:p-8 gap-6 lg:gap-8 w-full rounded-2xl bg-slate-100/80 font-bold shadow-lg backdrop-blur-sm">
			<h1>Title</h1>
			<div class="flex flex-col lg:flex-row justify-center items-center flex-grow w-full gap-6 lg:gap-8">
				<div class="flex justify-center items-center bg-black/5 w-full lg:w-1/2 h-1/2 lg:h-full rounded-2xl">Image box</div>
				<div class="flex justify-center items-center bg-black/5 w-full lg:w-1/2 h-1/2 lg:h-full rounded-2xl">Text box</div>
			</div>
		</div>
		<div id="" class="ctnr flex flex-col items-center p-6 lg:p-8 gap-6 lg:gap-8 w-full rounded-2xl bg-slate-100/80 font-bold shadow-lg backdrop-blur-sm">
			<h1>Title</h1>
			<div class="flex flex-col lg:flex-row justify-center items-center flex-grow w-full gap-6 lg:gap-8">
				<div class="flex justify-center items-center bg-black/5 w-full lg:w-1/2 h-1/2 lg:h-full rounded-2xl">Image box</div>
				<div class="flex justify-center items-center bg-black/5 w-full lg:w-1/2 h-1/2 lg:h-full rounded-2xl">Text box</div>
			</div>
		</div>
		<div id="team" class="ctnr flex flex-col items-center p-6 lg:p-8 gap-6 lg:gap-8 w-full rounded-2xl bg-slate-100/80 font-bold shadow-lg backdrop-blur-sm">
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
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap');

#app {
	font-family: 'Ubuntu', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: black;
	min-height: 100vh;
	background: url(./assets/8e105b2d-8986-4182-83ec-4c429f7e0058.png) fixed;
	background-size: cover;
}

.thugo {
	font-size: 4rem;
	line-height: 6rem;
}

.ctnr {
	min-height: calc(100vh - 92.94px - 1.5rem);
}

@media(max-width: 1024px) {
	.thugo {
		font-size: 2rem;
		line-height: 2rem;
	}
}
</style>
