PlayerEvents.tick((event) => {
	let { player } = event

	if (player.age % 60 !== 0) {
		return
	}
	const CURIOS = String(player.nbt["ForgeCaps"]["curios:inventory"]["Curios"])

	if (CURIOS.includes("ue_addons:photosensitive_mechanism") && !CURIOS.includes("display")) {
		player.potionEffects.add("minecraft:night_vision", 30 * 20, 0)
	}
	if (CURIOS.includes("ue_addons:cobalt_mechanism") && !CURIOS.includes("display")) {
		player.potionEffects.add("minecraft:haste", 10 * 20, 1)
		player.potionEffects.add("minecraft:speed", 10 * 20, 1)
	}
})