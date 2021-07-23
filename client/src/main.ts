import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Player 1'
	}
});

export default app;