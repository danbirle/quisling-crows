<script lang="ts">
	export let name: string;
</script>

<main>
	<h1>Hello {name}!</h1>
	<input type="text" placeholder="name" bind:value="{name}" />
	<button>Create room</button>
	<h2>or</h2>
	<label for="room-field">Join with a room number:</label>
	<input type="text" placeholder="Four digit room number" id="room-field" />
	<button>Join</button>
</main>

<style lang="scss">
	main {
		text-align: center;
		max-width: 240px;
		margin: 0 auto;
	}

	h1, h2 {
		color: #ff3e00;
		font-weight: 100;
		text-transform: uppercase;
	}

	h1 {
		font-size: 4rem;
	}

	h2 {
		font-size: 2rem
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>