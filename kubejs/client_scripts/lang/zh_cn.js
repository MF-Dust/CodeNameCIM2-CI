ClientEvents.lang("zh_cn", (event) => {
	addCastItemLanguaue("mechanism", "构件")

	addItemLanguaue("geological_hammer", "地质锤(调试工具)")
	addItemLanguaue("empty_exe", "空程序.exe")
	addItemLanguaue("unknown_ingot", "可编程的可扩展的格式化的损坏的可加工的集成的复杂的感光的多功能的锭")

	addMechanismPartLanguaue("basic", "基础")
	addMechanismPartLanguaue("mechanical", "机械")
	addMechanismPartLanguaue("flux", "通量")
	addMechanismPartLanguaue("magical", "魔力")
	addMechanismPartLanguaue("quantum", "量子")
	addMechanismPartLanguaue("engineering", "工程")
	addMechanismPartLanguaue("mekanism", "通用")
	addMechanismPartLanguaue("final", "终章")

	let amethystEncyclopedia = "紫水晶中流动的魔力会竭尽全力获取方块中蕴含的资源"
	addTConLanguage(
		"amethyst",
		"紫水晶",
		"优秀的魔导体与媒质",
		amethystEncyclopedia,
		amethystEncyclopedia,
		amethystEncyclopedia
	)
	let andesiteAlloyEncyclopedia = "岩石的能力，铁器的数值"
	addTConLanguage(
		"andesite_alloy",
		"安山合金",
		"岩石和金属居然能变成合金？",
		andesiteAlloyEncyclopedia,
		andesiteAlloyEncyclopedia,
		andesiteAlloyEncyclopedia
	)
	let brassEncyclopedia = "黄铜给工具注入了智慧，使得工具可以自动进行微小的调整"
	addTConLanguage(
		"brass",
		"黄铜",
		"魔法与电流都能在其中受控流动",
		brassEncyclopedia,
		brassEncyclopedia,
		brassEncyclopedia
	)

	addFluidLanguaue("molten_andesite_alloy", "熔融安山合金")
	addFluidLanguaue("molten_vanadium", "熔融钒")

	addBlockLanguaue("the_accelerator_of_mechanism_power", "构件之力催生器")
	addBlockLanguaue("quartz_ore", "石英矿石")
	addBlockLanguaue("deepslate_quartz_ore", "深层石英矿石")

	addAloneLanguaue(`itemGroup.${global.namespace}.all`, "机械动力: 构件与革新")
	addAloneLanguaue("curios.identifier.mechanisms", "构件")
	addAloneLanguaue(`promp.${global.namespace}.ender_mechanism.location_stored`, "当前坐标已存入末影构件")
	addAloneLanguaue(`message.${global.namespace}.debug.getHardness`, "这个方块的硬度是: %s")
	addAloneLanguaue(`text.${global.namespace}.dev`, "§0开发中画面, 实际内容请以正式版为准")
	addAloneLanguaue(`text.${global.namespace}.player`, "§0测试中版本, 不代表最终品质")
	addAloneLanguaue(`message.${global.namespace}.checkCheating`, "§b你似乎添加了%s§b这个Mod?\n§b或许好好体验整合包内容才是更好的选择呢?")
	addAloneLanguaue(`message.${global.namespace}.checkMultipleCheating`, "§b你似乎添加了以下Mod?\n%s§b\n§b或许好好体验整合包内容才是更好的选择呢?")

	addCommonTooltipLanguage("ue_addons:pigiron_mechanism", "可无限次食用")
	addCommonTooltipLanguage("ue_addons:acceleratable", "§b按住Shift查看构件之力催生器用途")
	addCommonTooltipLanguage("ue_addons:stone_mechanism", "§c手持右键圆石可将其转换为石头")
	addCommonTooltipLanguage("ue_addons:copper_mechanism", "§6手持右键可以投掷出水瓶")
	addCommonTooltipLanguage("ue_addons:ender_mechanism", "§d手持右键随机传送，手持潜行右键记录当前坐标")
	addCommonTooltipLanguage("ue_addons:enchanted_mechanism", "§9手持右键方块可生成经验")
	addCommonTooltipLanguage("ue_addons:nature_mechanism", "§a手持右键方块可以替代骨粉的功能")
	addCommonTooltipLanguage("ue_addons:nuclear_mechanism", "§3右键QIO驱动器盒以将其升级（无需消耗！）")
	addCommonTooltipLanguage("ue_addons:geographycal_hammer.developer1", "手持右键潜行方块获取方块硬度")
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

	let mechanismGroup = [
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
		["nether", "下界"],
		["creative", "创造"]
	]
	mechanismGroup.forEach(([material, name]) => {
		addMechanismLanguaue(material, name)
		addForceLanguage(material, name)
	})

	let completeMechanismGroup = [
		["basic_random", "基础随机"],
		["mechanical_random", "机械随机"],
		["engineering_random", "工程随机"],
		["flux_random", "通量随机"],
		["magical_random", "魔力随机"],
		["quantum_random", "量子随机"],
		["mekanism_random", "通用随机"],
		["final_random", "最终随机"]
	]

	completeMechanismGroup.forEach(([material, name]) => {
		addCompleteMechanismLanguaue(material, name)
	})

	let materialGroup = [
		["andesite_alloy", "安山合金"],
		["aluminum", "铝"],
		["brass", "黄铜"],
		["bronze", "青铜"],
		["cobalt", "钴"],
		["constantan", "康铜"],
		["copper", "铜"],
		["electrum", "琥珀金"],
		["enderium", "末影"],
		["gold", "金"],
		["invar", "殷钢"],
		["iron", "铁"],
		["lead", "铅"],
		["lumium", "流明"],
		["netherite", "下界合金"],
		["nickel", "镍"],
		["osmium", "锇"],
		["signalum", "信素"],
		["silver", "银"],
		["steel", "钢"],
		["tin", "锡"],
		["zinc", "锌"],
		["rose_gold", "玫瑰金"],
		["hepatizon", "黑色科斯林青铜"],
		["manyullyn", "玛玉灵"],
		["amethyst_bronze", "紫水晶青铜"],
		["vanadium", "钒"]
	]

	materialGroup.forEach( ([material,name]) => {
		addMaterialLanguaue(material,name)
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

	function addForceLanguage(material, value) {
		event.add(`item.${global.namespace}.${material}_force_exe`, `${value}驱动.exe`)
	}

	function addBlockLanguaue(key, value) {
		event.add(`block.${global.namespace}.${key}`, value)
	}

	function addFluidLanguaue(key, value) {
		event.add(`fluid.${global.namespace}.${key}`, value)
		event.add(`block.${global.namespace}.${key}`, value)
		event.add(`item.${global.namespace}.${key}_bucket`, `${value}桶`)
	}

	function addMaterialLanguaue(key, value) {
		event.add(`item.${global.namespace}.${key}_ingot`, `${value}锭`)
		event.add(`item.${global.namespace}.${key}_nugget`, `${value}粒`)
		event.add(`item.${global.namespace}.${key}_plate`, `${value}板`)

		event.add(`block.${global.namespace}.${key}_block`, `${value}块`)
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

	function addTConLanguage(key, name, flavour, encyclopedia, ranged, armor) {
		event.add(`material.${global.namespace}.${key}`, name)
		event.add(`material.${global.namespace}.${key}.flavor`, flavour)
		event.add(`material.${global.namespace}.${key}.encyclopedia`, encyclopedia)
		event.add(`material.${global.namespace}.${key}.ranged`, ranged)
		event.add(`material.${global.namespace}.${key}.armor`, armor)
	}
});

