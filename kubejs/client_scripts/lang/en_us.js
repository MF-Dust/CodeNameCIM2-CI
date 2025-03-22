ClientEvents.lang("en_us", (event) => {
	addCastItemLanguaue("mechanism", "mechanism")

	addItemLanguaue("geological_hammer", "Geological hammer")

	addMechanismPartLanguaue("basic", "Basic")
	addMechanismPartLanguaue("mechanical", "Mechanical")
	addMechanismPartLanguaue("flux", "Flux")
	addMechanismPartLanguaue("magical", "Magical")
	addMechanismPartLanguaue("quantum", "Quantum")
	addMechanismPartLanguaue("engineering", "Engineering")
	addMechanismPartLanguaue("mekanism", "Generic")
	addMechanismPartLanguaue("final", "Final")

	addFluidLanguaue("molten_andesite_alloy", "Molten andesite alloy")

	addBlockLanguaue("the_accelerator_of_mechanism_power", "Mechanism power accelerator")
	addBlockLanguaue("quartz_ore", "Quartz ore")
	addBlockLanguaue("deepslate_quartz_ore", "Deepslate quarz ore")

	addAloneLanguaue(`itemGroup.${global.namespace}.all`, "Create: Mechanism and Innovation")
	addAloneLanguaue("curios.identifier.mechanisms", "Mechanism")
	addAloneLanguaue(`promp.${global.namespace}.ender_mechanism.location_stored`, "Current position stored")
	addAloneLanguaue(`message.${global.namespace}.debug.getHardness`, "The hardness of this block is: %s")
	addAloneLanguaue(`text.${global.namespace}.dev`, "§0Dev only. See Release")
	addAloneLanguaue(`text.${global.namespace}.player`, "§0Test, not final")
	addAloneLanguaue(`message.${global.namespace}.checkCheating`, "§bYou seem to have added the mod%s§b?\n§bMaybe it's a better choice to experience\n§bcontents of this modpack without it?")
	addAloneLanguaue(`message.${global.namespace}.checkMultipleCheating`, "§bYou seem to have added these mods?\n%s§b\n§bMaybe it's a better choice to experience\n§bcontents of this modpack without them?")

	addCommonTooltipLanguage("ue_addons:pigiron_mechanism", "Can be eaten infinitely")
	addCommonTooltipLanguage("ue_addons:acceleratable", "§bHold shift to check accelerator functions")
	addCommonTooltipLanguage("ue_addons:stone_mechanism", "§cRight click a cobblestone with it to transform it into a stone")
	addCommonTooltipLanguage("ue_addons:copper_mechanism", "§6Right click with this in hand to throw bottles of water")
	addCommonTooltipLanguage("ue_addons:ender_mechanism", "§dRight click with this in hand to teleport randomly\n§dsneak and right click to store your current position")
	addCommonTooltipLanguage("ue_addons:enchanted_mechanism", "§9Right click a block with this to generate experience orbs")
	addCommonTooltipLanguage("ue_addons:nature_mechanism", "§a手持右键方块可以替代骨粉的功能")
	addCommonTooltipLanguage("ue_addons:nuclear_mechanism", "§3右键QIO驱动器盒以将其升级（无需消耗！）")
	addCommonTooltipLanguage("ue_addons:geographycal_hammer.developer1", "手持右键方块获取方块硬度")
	addCommonTooltipLanguage("ue_addons:geographycal_hammer.developer2", "副手手持潜行右键获取主手物品ID")
	addCommonTooltipLanguage("ue_addons:geographycal_hammer.not_developer", "似乎有一种神秘的力量阻止了你使用这个物品")

	addAccelerateTooltipLanguage("ue_addons:stone_mechanism", "§e转化石头\n10%安山岩\n10%闪长岩\n10%花岗岩\n10%石灰岩\n10%焦黑石头\n§2转化深板岩\n10%焦黑石头\n10%凝灰岩\n10%熔渣\n10%滴水石块\n10%平滑玄武岩")
	addAccelerateTooltipLanguage("ue_addons:andesite_mechanism", "§e转化石头\n20%安山岩\n5%铁矿石\n5%石头\n§2转化深板岩\n15%安山岩\n10%深层铁矿石\n10%深板岩")
	addAccelerateTooltipLanguage("ue_addons:copper_mechanism", "§e转化石头\n20%铜矿石\n5%金矿石\n5%粘土块\n§2转化深板岩\n15%深层铜矿石\n10%深层金矿石\n10%粘土块")
	addAccelerateTooltipLanguage("ue_addons:iron_mechanism", "§e转化石头\n20%铁矿石\n5%红石矿石\n5%镍矿石\n§2转化深板岩\n15%深层铁矿石\n10%深层红石矿\n10%深层镍矿石")
	addAccelerateTooltipLanguage("ue_addons:gold_mechanism", "§e转化石头\n20%金矿石\n5%朱砂矿石\n5%石英矿石\n§2转化深板岩\n15%深层金矿石\n10%深层朱砂矿\n10%深层石英矿")
	addAccelerateTooltipLanguage("ue_addons:ender_mechanism", "§5将玩家传送到构件所记录的坐标")

	addHeatedLanguaue("grilled", "炙烤")

	addMusicDiscLanguaue("lan_huo", "烂活", "霜落落落霜")
	addMusicDiscLanguaue("monody", "Monody", "TheFatRat")
	addMusicDiscLanguaue("life", "Life", "Neuro Sama")
	addMusicDiscLanguaue("soul", "鬼", "草东没有派对")
	addMusicDiscLanguaue("cylinder", "缸", "草东没有派对")
	addMusicDiscLanguaue("but", "但", "草东没有派对")
	addMusicDiscLanguaue("dirt", "烂泥", "草东没有派对")

	addBlockLanguaue("qio_empty", "空的QIO驱动器盒")
	addBlockLanguaue("qio_one", "QIO驱动器盒")
	addBlockLanguaue("qio_two", "超密集QIO驱动器盒")
	addBlockLanguaue("qio_three", "时间膨胀QIO驱动器盒")
	addBlockLanguaue("qio_four", "超质量QIO驱动器盒")

	let materialGroup = [
		["nature", "自然"],
		["wooden", "木质"],
		["stone", "石质"],
		["iron", "铁质"],
		["copper", "铜质"],
		["andesite", "安山"],
		["photosensitive", "感光"],
		["gold", "金质"],
		["cobalt", "钴质"],
		["thermal", "热力"],
		["feinforced", "强化"],
		["resonant", "谐振"],
		["railway", "铁路"],
		["ender", "末影"],
		["light_engineering", "轻型工程"],
		["heavy_engineering", "重型工程"],
		["enchanted", "附魔"],
		["smart", "智能"],
		["basic_mekanism", "基础通用"],
		["advanced_mekanism", "高级通用"],
		["elite_mekanism", "精英通用"],
		["ultimate_mekanism", "终极通用"],
		["structure", "结构"],
		["nuclear", "核"],
		["antimatter", "反物质"],
		["coil", "线圈"],
		["sculk", "幽匿"],
		["colorful", "多彩"],
		["pigiron", "生铁"],
		["creative", "创造"]
	]
	materialGroup.forEach(([material, name]) => {
		addMechanismLanguaue(material, name)
	})

	let completeMaterialGroup = [
		["basic_random", "基础随机"],
		["mechanical_random", "机械随机"],
		["engineering_random", "工程随机"],
		["flux_random", "通量随机"],
		["magical_random", "魔力随机"],
		["quantum_random", "量子随机"],
		["mekanism_random", "通用随机"],
		["final_random", "最终随机"]
	]
	completeMaterialGroup.forEach(([material, name]) => {
		addCompleteMechanismLanguaue(material, name)
	})
	function addItemLanguaue(key, value) {
		event.add(`item.${global.namespace}.${key}`, value)
	}

	function addCastItemLanguaue(key, value) {
		event.add(`item.${global.namespace}.${key}_cast`, `${value}铸模`)
		event.add(`item.${global.namespace}.${key}_sand_cast`, `${value}沙子铸模`)
		event.add(`item.${global.namespace}.${key}_red_sand_cast`, `${value}红沙铸模`)
	}

	function addMechanismLanguaue(material, value) {
		event.add(`item.${global.namespace}.${material}_mechanism`, `${value}构件`)
		event.add(`item.${global.namespace}.incomplete_${material}_mechanism`, `${value}构件(半成品)`)
	}

	function addCompleteMechanismLanguaue(material, value) {
		event.add(`item.${global.namespace}.${material}_mechanism`, `${value}构件`)
	}

	function addMechanismPartLanguaue(material, value) {
		event.add(`item.${global.namespace}.${material}_mechanism_part`, `${value}构件零件`)
	}

	function addBlockLanguaue(key, value) {
		event.add(`block.${global.namespace}.${key}`, value)
	}

	function addFluidLanguaue(key, value) {
		event.add(`fluid.${global.namespace}.${key}`, value)
		event.add(`block.${global.namespace}.${key}`, value)
		event.add(`item.${global.namespace}.${key}_bucket`, `${value}桶`)
	}

	function addCommonTooltipLanguage(key, value) {
		event.add(`tooltip.${key}`.replace(":", "."), `§b${value}`)
	}

	function addAccelerateTooltipLanguage(key, value) {
		event.add(`tooltip.${key}.accelerate`.replace(":", "."), `§b${value}`)
	}

	function addJEIInfoLanguage(key, value) {
		event.add(`jei.info.${key}`.replace(":", "."), `§b${value}`)
	}

	function addHeatedLanguaue(key, value) {
		event.add(`create.recipe.heat_requirement.${key}`, value)
	}

	function addMusicDiscLanguaue(key, value, author) {
		event.add(`item.${global.namespace}.${key}`, value)
		event.add(`item.${global.namespace}.${key}.desc`, `${value} - ${author}`)
	}

	function addAloneLanguaue(key, value) {
		event.add(key, value)
	}
});

