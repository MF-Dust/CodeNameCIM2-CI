JEIEvents.information((event) => {
	function addJEIInfo(name) {
		event.addItem(name, Component.translate(`jei.info.${name}`.replace(":", ".")))
	}

	addJEIInfo("cookingforblockheads:sink")
})