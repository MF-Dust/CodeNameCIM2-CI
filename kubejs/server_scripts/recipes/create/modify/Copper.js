ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes
	let mech = "ue_addons:copper_mechanism"
	let casing = "create:copper_casing"

	// 驱魔池(你只管开车, 办法由老爹来想~)
	kubejs.shaped("create_enchantment_industry:disenchanter", [
		"A",
		"B",
		"C"
	], {
		A: "#create:sandpaper",
		B: casing,
		C: mech
	}).id("create_enchantment_industry:crafting/disenchanter")

	// 分液池(传送带青春再青春版)
	kubejs.shaped("create:item_drain", [
		"A",
		"B",
		"C"
	], {
		A: "minecraft:iron_bars",
		B: casing,
		C: mech
	}).id("create:crafting/kinetics/item_drain")

	// 流体接口(你们不准Kiss👊😭👊)
	kubejs.shapeless("create:portable_fluid_interface", [
		"create:chute",
		casing,
		mech
	]).id("create:crafting/kinetics/portable_fluid_interface")

	// 软管滑轮(为什么干海带可以承受1000乃至1500度的高温啊Kora!😡)
	kubejs.shaped("create:hose_pulley", [
		" A ",
		"BCB",
		" D "
	], {
		A: casing,
		B: "minecraft:dried_kelp_block",
		C: mech,
		D: "#forge:plates/copper"
	}).id("create:crafting/kinetics/hose_pulley")

	// 压缩机(动力泵异父异母的亲兄弟(点头))
	kubejs.shaped("vintageimprovements:vacuum_chamber", [
		" A ",
		"BCB",
		"DED"
	], {
		A: mech,
		B: "#vintageimprovements:springs/iron",
		C: "create:andesite_casing",
		D: "#forge:ingots/andesite_alloy",
		E: "create:mechanical_pump"
	}).id("vintageimprovements:craft/vacuum_chamber")

	// 注液器(滋尿器(点头))
	kubejs.shaped("create:spout", [
		"A",
		"B",
		"C"
	], {
		A: mech,
		B: casing,
		C: "minecraft:dried_kelp"
	}).id("create:crafting/kinetics/spout")

	// 打印器( System.out.print("Hello World!"); )
	kubejs.shaped("create_enchantment_industry:printer", [
		" A ",
		"BCB",
		" D "
	], {
		A: casing,
		B: "minecraft:dried_kelp",
		C: mech,
		D: "#forge:storage_blocks/iron"
	}).id("create_enchantment_industry:crafting/printer")
})