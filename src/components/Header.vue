<template>
	<header id="header" class="flex w-full justify-between items-center px-8 py-5 z-40 sticky -top-0 backdrop-blur transition-colors duration-500 bg-transparent" :class="{'bg-slate-800/5': !showNavbar}">
		<a href="/" class="flex items-center gap-2 font-bold">
			<img src="../assets/esummit.svg" class="lg:w-12 w-6 select-none" />
			E-SUMMIT
		</a>
		<ul class="lg:flex hidden gap-6 font-bold text-black/40">
			<li><a class="hover:underline transition ease-in-out duration-300 cursor-pointer" v-scroll-to="`#home`" :class="{'nav-col': home}" @click="home = !home, about = false, events = false, sponsors = false, schedule = false, prizes = false, team = false">Home</a></li>
			<li><a class="hover:underline transition ease-in-out duration-300 cursor-pointer" v-scroll-to="`#about`" :class="{'nav-col': about}" @click="home = false, about = !about, events = false, sponsors = false, schedule = false, prizes = false, team = false">About</a></li>
			<li><a class="hover:underline transition ease-in-out duration-300 cursor-pointer" v-scroll-to="`#events`" :class="{'nav-col': events}" @click="home = false, about = false, events = !events, sponsors = false, schedule = false, prizes = false, team = false">Events</a></li>
			<!-- <li><a class="hover:underline transition ease-in-out duration-300 cursor-pointer" v-scroll-to="`#tracks`">Tracks</a></li> -->
			<!-- <li><a class="hover:underline transition ease-in-out duration-300 cursor-pointer" v-scroll-to="`#sponsors`" :class="{'nav-col': sponsors}" @click="home = false, about = false, events = false, sponsors = !sponsors, schedule = false, prizes = false, team = false">Sponsors</a></li> -->
			<li><a class="hover:underline transition ease-in-out duration-300 cursor-pointer" v-scroll-to="`#schedule`" :class="{'nav-col': schedule}" @click="home = false, about = false, events = false, sponsors = false, schedule = !schedule, prizes = false, team = false">Schedule</a></li>
			<li><a class="hover:underline transition ease-in-out duration-300 cursor-pointer" v-scroll-to="`#prizes`" :class="{'nav-col': prizes}" @click="home = false, about = false, events = false, sponsors = false, schedule = false, prizes = !prizes, team = false">Prizes</a></li>
			<li><a class="hover:underline transition ease-in-out duration-300 cursor-pointer" v-scroll-to="`#team`" :class="{'nav-col': team}" @click="home = false, about = false, events = false, sponsors = false, schedule = false, prizes = false, team = !team">Team</a></li>
		</ul>
		<button class="h-10 px-6 font-semibold rounded-md text-white hidden lg:block bg-orange-500 hover:bg-orange-400 hover:scale-105 transition duration-200 ease-in-out" type="submit">
			Join Us
		</button>
		<div class="block lg:hidden" @click="overflow = true">
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-if="overflow">
				<path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="black"/>
			</svg>
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-else>
				<path d="M3 6H21V8H3V6ZM3 11H21V13H3V11ZM3 16H21V18H3V16Z" fill="black"/>
			</svg>
		</div>
	</header>
	<div class="fixed z-50 inset-0 lg:hidden" v-if="overflow">
		<div class="fixed inset-0 bg-black/20 backdrop-blur-sm" @click="overflow = false"></div>
		<div class="fixed top-4 right-4 w-full max-w-xs bg-white rounded-lg shadow-lg p-6 text-base font-semibold">
			<button @click="overflow = false" class="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-600">
				<svg viewBox="0 0 10 10" class="w-2.5 h-2.5 overflow-visible" aria-hidden="true">
					<path d="M0 0L10 10M10 0L0 10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
				</svg>
			</button>
				<ul class="flex flex-col gap-12 text-black">
				<li><a class="hover:underline transition ease-in-out duration-300 cursor-pointer" v-scroll-to="`#home`" :class="{'nav-col': home}" @click="home = !home, about = false, events = false, sponsors = false, schedule = false, prizes = false, team = false">Home</a></li>
				<li><a class="hover:underline transition ease-in-out duration-300 cursor-pointer" v-scroll-to="`#about`" :class="{'nav-col': about}" @click="home = false, about = !about, events = false, sponsors = false, schedule = false, prizes = false, team = false">About</a></li>
				<li><a class="hover:underline transition ease-in-out duration-300 cursor-pointer" v-scroll-to="`#events`" :class="{'nav-col': events}" @click="home = false, about = false, events = !events, sponsors = false, schedule = false, prizes = false, team = false">Events</a></li>
				<!-- <li><a class="hover:underline transition ease-in-out duration-300 cursor-pointer" v-scroll-to="`#tracks`">Tracks</a></li> -->
				<!-- <li><a class="hover:underline transition ease-in-out duration-300 cursor-pointer" v-scroll-to="`#sponsors`" :class="{'nav-col': sponsors}" @click="home = false, about = false, events = false, sponsors = !sponsors, schedule = false, prizes = false, team = false">Sponsors</a></li> -->
				<li><a class="hover:underline transition ease-in-out duration-300 cursor-pointer" v-scroll-to="`#schedule`" :class="{'nav-col': schedule}" @click="home = false, about = false, events = false, sponsors = false, schedule = !schedule, prizes = false, team = false">Schedule</a></li>
				<li><a class="hover:underline transition ease-in-out duration-300 cursor-pointer" v-scroll-to="`#prizes`" :class="{'nav-col': prizes}" @click="home = false, about = false, events = false, sponsors = false, schedule = false, prizes = !prizes, team = false">Prizes</a></li>
				<li><a class="hover:underline transition ease-in-out duration-300 cursor-pointer" v-scroll-to="`#team`" :class="{'nav-col': team}" @click="home = false, about = false, events = false, sponsors = false, schedule = false, prizes = false, team = !team">Team</a></li>
			</ul>
			<button class="mt-12 h-10 px-6 font-semibold rounded-md text-white bg-orange-500 hover:bg-orange-400 hover:scale-105 transition duration-200 ease-in-out" type="submit">
			Join Us
		</button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			overflow: false,
			showNavbar: true,
			lastScrollPosition: 0,
			home: true,
			about: false,
			events: false,
			sponsors: false,
			schedule: false,
			prizes: false,
			team: false
		}
	},
	mounted() {
		window.addEventListener('scroll', this.onScroll)
	},
	beforeDestroy() {
		window.removeEventListener('scroll', this.onScroll)
	},
	methods: {
	onScroll () {
		const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
		if (currentScrollPosition < 0) {
			return
		}
		if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 1) {
			return
		}
		this.showNavbar = currentScrollPosition < this.lastScrollPosition
		this.lastScrollPosition = currentScrollPosition
	}
}
}
</script>

<style>
header {
	font-family: 'Inter', sans-serif;
}

.nav-col {
	color: #f95700;
}
</style>
