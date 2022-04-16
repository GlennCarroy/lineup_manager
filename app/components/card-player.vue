<template>
	<v-card elevation="24" @click="$emit('setPenalty',player.id)" :disabled="player.penalties === 7" :style="setColors(player)">
		<v-card-text>
			<p>{{ player.name || '/' }}</p>
			<p class="display-1 text--primary">{{ player.id }} - {{ player.derbyname }}</p>
			<span class="penalties">{{ player.penalties }}</span>
			<v-btn
				v-if="correction"
				:color="'primary'"
				elevation="9"
				fab
				small
				@click.stop="$emit('correctPenalties',player.id)"
			>-
			</v-btn>
		</v-card-text>
	</v-card>
</template>

<script>
export default {
		props: {
			player: {
				type: Object,
				required: true
			},
			correction: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			setColors (player) {
					if (player.penalties >= 4 && player.penalties < 6) {
							return { 'background-color':'orange', 'color': 'red' }
					} else if (player.penalties === 6) {
							return { 'background-color':'red', 'color': 'red' }
					} else if (player.penalties === 7) {
							return { 'background-color':'grey', 'color': 'black' }
					}
			}
		}
}
</script>

<style lang="scss" scoped>
.v-card {
  position: relative;
  .penalties {
    position: absolute;
    right: 10px;
    bottom: -50px;
    font-size: 100px;
    display: block;
    height: 100%;
  }
}
</style>
