ServerEvents.recipes((event) => {
	let { tconstruct } = event.recipes

	// 机壳
	tconstruct.casting_basin(
		"create:andesite_casing",
		Fluid.of("ue_addons:molten_andesite_alloy", 90)
	).cast("#minecraft:logs").cast_consumed(true).cooling_time(40)

	tconstruct.casting_basin(
		"create:copper_casing",
		Fluid.of("tconstruct:molten_copper", 90)
	).cast("#minecraft:logs").cast_consumed(true).cooling_time(40)

	tconstruct.casting_basin(
		"create:brass_casing",
		Fluid.of("tconstruct:molten_brass", 90)
	).cast("#minecraft:logs").cast_consumed(true).cooling_time(40)

	tconstruct.casting_basin(
		"create:railway_casing",
		Fluid.of("tconstruct:molten_obsidian", 90)
	).cast("create:brass_casing").cast_consumed(true).cooling_time(40)
})