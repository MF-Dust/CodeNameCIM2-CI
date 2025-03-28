new Schema("createaddition:rolling")
	.simpleKey("result", "outputItem")
	.simpleKey("input", "inputItem")

new Schema("createaddition:charging")
	.simpleKey("result", "outputItem")
	.simpleKey("input", "inputItem")
	.simpleKey("energy", "intNumber")
	.simpleKey("maxChargeRate", "intNumber", 2147483647)

new Schema("createaddition:liquid_burning")
	.simpleKey("burnTime", "intNumber")
	.dynamicKey((c, cb) =>
		c.get("inputFluid")()
			.or(new cb(2)
				.add(c.get("fluidTag")().key("fluidTag"))
				.add(c.get("intNumber")().key("amount"))
				.inputRole())
			.key("input"))