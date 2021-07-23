import Greeting from './Greeting.svelte';

const greeting = new Greeting({
	target: document.body,
	props: {
		name: 'Player 1'
	}
})

export default greeting;