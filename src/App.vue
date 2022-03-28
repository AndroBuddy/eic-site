<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Header from './components/Header.vue'
import Footer from './components/Footer.vue';
</script>

<template>
	<Header/>
	<div class="flex flex-col gap-8 mx-6 lg:mx-24 mb-12">
		<div id="home" class="ctnr flex flex-col items-center p-6 lg:p-8 gap-6 lg:gap-8 w-full rounded-2xl bg-slate-100/40 font-bold shadow-lg backdrop-blur-sm">
			<div class="flex flex-col lg:flex-row justify-around items-center flex-grow w-full lg:gap-8 lg:px-24">
				<div class="flex justify-center items-center w-full lg:w-1/2 h-1/2 lg:h-full rounded-2xl">
					<img src="./assets/esummit.svg" alt="">
				</div>
				<div class="flex flex-col justify-center items-center gap-6 w-full lg:w-1/2 h-1/2 lg:h-full">
					<div class="flex flex-col justify-center items-center text-lg lg:text-4xl">
						<h1 class="thugo"><span style="color: #f95700;">E-Summit</span><span class="italic">'22</span></h1>
						<span class="font-normal text-black/60">Triumph Over Turmoil</span>
					</div>
					<div class="flex flex-col justify-center items-center text-xl lg:text-3xl text-orange-400">
						<span>28th - 29th April</span>
					</div>
					<div class="flex gap-6">
						<button class="h-10 px-6 font-semibold rounded-md text-white bg-orange-500 hover:bg-orange-400 hover:scale-105 transition duration-200 ease-in-out" type="submit">
							Register
						</button>
						<button class="h-10 px-6 font-semibold rounded-md text-white hover:scale-105 transition duration-200 ease-in-out" style="background-color: #5865F2;" type="submit">
							<img src="./assets/discord.svg" class="w-24">
						</button>
					</div>
				</div>
			</div>
		</div>
		<div id="about" class="ctnr flex flex-col items-center p-6 lg:p-8 gap-12 w-full rounded-2xl bg-slate-100/40 font-bold shadow-lg backdrop-blur-sm">
			<h1 class="thugo">About <span style="color: #f95700;">E-Summit</span></h1>
			<div class="flex flex-col lg:flex-row justify-center items-center flex-grow w-full gap-6 lg:gap-8">
				<div class="flex justify-center items-center w-full lg:w-1/2 h-1/2 lg:h-full rounded-2xl">
					<img src="./assets/logo.svg" alt="">
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
		<div id="events" class="ctnr flex flex-col p-6 lg:p-8 gap-6 lg:gap-8 w-full rounded-2xl bg-slate-100/40 font-bold shadow-lg backdrop-blur-sm">
			<h1 class="thugo self-center" style="color: #f95700;">Events</h1>
			<div class="grid grid-cols-1 lg:grid-cols-3 auto-rows-auto gap-6">
				<div class="flex flex-col bg-slate-200/20 min-h-64 rounded-xl">
					<div class=" bg-orange-300 p-6 rounded-t-xl">
						Speaker Series
					</div>
					<div class="p-6 font-normal">
						There will be series of Key note speeches by the founders of Unicorns, Policy makers, Eco-system partners and motivational speakers.
					</div>
				</div>
				<div class="flex flex-col bg-slate-200/20 min-h-64 rounded-xl">
					<div class=" bg-orange-300 p-6 rounded-t-xl">
						Interactive Panel Discussions
					</div>
					<div class="p-6 font-normal">
						Interactive panel discussions are aimed at unfolding entrepreneurial journeys of successful young start-up founders. Discussions on how venture capitalists evaluate new venture opportunities and improving entrepreneurial eco-system and so on.
					</div>
				</div>
				<div class="flex flex-col bg-slate-200/20 min-h-64 rounded-xl">
					<div class=" bg-orange-300 p-6 rounded-t-xl">
						Business Idea Competetion
					</div>
					<div class="p-6 font-normal">
						Students from MU and other colleges will have an opportunity to pitch their business ideas.  Participating students will apply their knowledge of opportunity identification and assessment resulting in a feasibility analysis of a new business idea. Each business idea should address one of the UN goals in a way that could ultimately result in the creation of a new for-profit or non profit venture.  The best 3 teams would receive handsome prizes.
					</div>
				</div>
				<div class="flex flex-col bg-slate-200/20 min-h-64 rounded-xl">
					<div class=" bg-orange-300 p-6 rounded-t-xl">
						Startup Showcase
					</div>
					<div class="p-6 font-normal">
						Early stage start-ups will have an opportunity to showcase their product/service/prototype/ demo etc during the event. In addition to winning best start-up prize, participating start-ups will have an opportunity to validate their product/ service concept, interact with investors and potential customers.
					</div>
				</div>
				<div class="flex flex-col bg-slate-200/20 min-h-64 rounded-xl">
					<div class=" bg-orange-300 p-6 rounded-t-xl">
						Networking
					</div>
					<div class="p-6 font-normal">
						Summit delegates will have an opportunity to interact one-on one with mentors, potential investors, support system partners, incubators and fellow entrepreneurs.
					</div>
				</div>
			</div>
		</div>
		<!-- <div id="sponsors" class="ctnr flex flex-col items-center p-6 lg:p-8 gap-6 lg:gap-8 w-full rounded-2xl bg-slate-100/40 font-bold shadow-lg backdrop-blur-sm">
			<h1 class="thugo" style="color: #f95700;">Sponsors</h1>
			<div class="flex flex-col lg:flex-row justify-center items-center flex-grow w-full gap-6 lg:gap-8">
				<div class="flex justify-center items-center bg-slate-200/20 w-full lg:w-1/2 h-1/2 lg:h-full rounded-2xl">Image box</div>
				<div class="flex justify-center items-center bg-slate-200/20 w-full lg:w-1/2 h-1/2 lg:h-full rounded-2xl">Text box</div>
			</div>
		</div> -->
		<div id="schedule" class="ctnr flex flex-col items-center p-6 lg:p-8 gap-6 lg:gap-8 w-full rounded-2xl bg-slate-100/40 font-bold shadow-lg backdrop-blur-sm">
			<h1 class="thugo"><span style="color: #f95700;">E-Summit</span> Schedule</h1>
			<div class="flex flex-col flex-grow w-full gap-6 lg:gap-8">
				<div class="flex items-center bg-slate-200/30 w-full rounded-2xl gap-6 p-2 lg:p-4">
					<div class="flex flex-col items-center min-w-20">
						<h1 style="color: #f95700;">2:00PM</h1>
						<h2 class="font-normal">28th Apr</h2>
					</div>
					<div class="w-60 lg:w-auto">Inauguration</div>
				</div>
				<div class="flex items-center bg-orange-200/30 w-full rounded-2xl gap-6 p-2 lg:p-4">
					<div class="flex flex-col items-center min-w-20">
						<h1 style="color: #f95700;">2:30PM</h1>
						<h2 class="font-normal">28th Apr</h2>
					</div>
					<div class="w-60 lg:w-auto">Keynote Speaker 1</div>
				</div>
				<div class="flex items-center bg-slate-200/30 w-full rounded-2xl gap-6 p-2 lg:p-4">
					<div class="flex flex-col items-center min-w-20">
						<h1 style="color: #f95700;">2:55PM</h1>
						<h2 class="font-normal">28th Apr</h2>
					</div>
					<div class="w-60 lg:w-auto">Keynote Speaker 2</div>
				</div>
				<div class="flex items-center bg-orange-200/30 w-full rounded-2xl gap-6 p-2 lg:p-4">
					<div class="flex flex-col items-center min-w-20">
						<h1 style="color: #f95700;">3:15PM</h1>
						<h2 class="font-normal">28th Apr</h2>
					</div>
					<div class="w-60 lg:w-auto">Quick Icebreaker / Speed Networking</div>
				</div>
				<div class="flex items-center bg-slate-200/30 w-full rounded-2xl gap-6 p-2 lg:p-4">
					<div class="flex flex-col items-center min-w-20">
						<h1 style="color: #f95700;">3:30PM</h1>
						<h2 class="font-normal">28th Apr</h2>
					</div>
					<div class="w-60 lg:w-auto">Panel Discussion</div>
				</div>
				<div class="flex items-center bg-orange-200/30 w-full rounded-2xl gap-6 p-2 lg:p-4">
					<div class="flex flex-col items-center min-w-20">
						<h1 style="color: #f95700;">5:00PM</h1>
						<h2 class="font-normal">28th Apr</h2>
					</div>
					<div class="w-60 lg:w-auto">Snacks & Tea</div>
				</div>
				<div class="flex items-center bg-slate-200/30 w-full rounded-2xl gap-6 p-2 lg:p-4">
					<div class="flex flex-col items-center min-w-20">
						<h1 style="color: #f95700;">6:00PM</h1>
						<h2 class="font-normal">28th Apr</h2>
					</div>
					<div class="w-60 lg:w-auto">Relaxed Panel Discussion, Live Music, Speed Networking</div>
				</div>
				<div class="flex items-center bg-orange-200/30 w-full rounded-2xl gap-6 p-2 lg:p-4">
					<div class="flex flex-col items-center min-w-20">
						<h1 style="color: #f95700;">7:30PM</h1>
						<h2 class="font-normal">28th Apr</h2>
					</div>
					<div class="w-60 lg:w-auto">Food Stalls Open</div>
				</div>
				<div class="flex items-center bg-slate-200/30 w-full rounded-2xl gap-6 p-2 lg:p-4">
					<div class="flex flex-col items-center min-w-20">
						<h1 style="color: #f95700;">8:00PM</h1>
						<h2 class="font-normal">28th Apr</h2>
					</div>
					<div class="w-60 lg:w-auto">DJ Night</div>
				</div>
			</div>
			<div class="flex items-center bg-orange-200/30 w-full rounded-2xl gap-6 p-2 lg:p-4">
				<div class="flex flex-col items-center min-w-20">
					<h1 style="color: #f95700;">10:00AM</h1>
					<h2 class="font-normal">28th Apr</h2>
				</div>
				<div class="w-60 lg:w-auto">Innovation Workshop & Case Study Challenge</div>
			</div>
			<div class="flex items-center bg-slate-200/30 w-full rounded-2xl gap-6 p-2 lg:p-4">
				<div class="flex flex-col items-center min-w-20">
					<h1 style="color: #f95700;">12:30PM</h1>
					<h2 class="font-normal">28th Apr</h2>
				</div>
				<div class="w-60 lg:w-auto">Break</div>
			</div>
			<div class="flex items-center bg-orange-200/30 w-full rounded-2xl gap-6 p-2 lg:p-4">
				<div class="flex flex-col items-center min-w-20">
					<h1 style="color: #f95700;">2:30PM</h1>
					<h2 class="font-normal">28th Apr</h2>
				</div>
				<div class="w-60 lg:w-auto">Business Ideation Challenge & StoryWallah Workshop</div>
			</div>
			<div class="flex items-center bg-slate-200/30 w-full rounded-2xl gap-6 p-2 lg:p-4">
				<div class="flex flex-col items-center min-w-20">
					<h1 style="color: #f95700;">4:30PM</h1>
					<h2 class="font-normal">28th Apr</h2>
				</div>
				<div class="w-60 lg:w-auto">Prize Distributions</div>
			</div>
		</div>
		<div id="prizes" class="ctnr flex flex-col items-center p-6 lg:p-8 gap-6 lg:gap-8 w-full rounded-2xl bg-slate-100/40 font-bold shadow-lg backdrop-blur-sm">
			<h1 class="thugo" style="color: #f95700;">Prizes</h1>
			<div class="flex flex-col lg:flex-row justify-center items-center flex-grow w-full gap-6 lg:gap-8">
				<div class="flex justify-center items-center bg-slate-200/20 w-full lg:w-1/2 h-1/2 lg:h-full rounded-2xl">Image box</div>
				<div class="flex justify-center items-center bg-slate-200/20 w-full lg:w-1/2 h-1/2 lg:h-full rounded-2xl">Text box</div>
			</div>
		</div>
		<div id="team" class="ctnr flex flex-col items-center p-6 lg:p-8 gap-6 lg:gap-8 w-full rounded-2xl bg-slate-100/40 font-bold shadow-lg backdrop-blur-sm">
			<h1 class="thugo" style="color: #f95700;">Team</h1>
			<div class="flex flex-col lg:flex-row justify-center items-center flex-grow w-full gap-6 lg:gap-8">
				<div class="flex justify-center items-center bg-slate-200/20 w-full lg:w-1/2 h-1/2 lg:h-full rounded-2xl">Image box</div>
				<div class="flex justify-center items-center bg-slate-200/20 w-full lg:w-1/2 h-1/2 lg:h-full rounded-2xl">Text box</div>
			</div>
		</div>
	</div>
	<Footer/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;700&display=swap');

#app {
	font-family: 'Inter', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: black;
	min-height: 100vh;
	background: url(./assets/bg.svg) fixed;
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
