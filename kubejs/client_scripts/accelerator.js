Ponder.registry((event) => {
    event.create("ue_addons:the_accelerator_of_mechanism_power")//hello,UE=)
        .scene(
            "kubejs:the_accelerator_of_mechanism_power",
            "How to use the accelerator",
            "kubejs:stone",
            (scene, utils) => {
                scene.configureBasePlate(0, 0, 7)
                scene.showBasePlate()
                scene.idle(10)
                scene.idle(5)
                scene.world.setBlocks([3, 0, 3], "ue_addons:the_accelerator_of_mechanism_power")
                scene.idle(10)
                scene.text(30, "This is an accelerator", [3, 1, 3])
                scene.idle(40)
                scene.text(30, "Rightclick it with an iron mechanism in hand...", [3, 1, 3])
                scene.idle(40)
                scene.showControls(30, [3, 1, 3], "up")
                    .rightClick()
                    .withItem("ue_addons:iron_mechanism")
                scene.idle(40)
                scene.world.setBlocks([3, 0, 4], "minecraft:iron_ore")
                scene.world.setBlocks([4, 0, 3], "minecraft:iron_ore")
                scene.world.setBlocks([3, 0, 5], "minecraft:redstone_ore")
                scene.world.setBlocks([3, 0, 2], "minecraft:iron_ore")
                scene.world.setBlocks([2, 0, 5], "minecraft:iron_ore")
                scene.world.setBlocks([1, 0, 1], "minecraft:iron_ore")
                scene.text(30, "...and the stone around it changes into ore!", [3, 1, 3])
                scene.idle(40)
                scene.text(30, "The accelerator also supports these mechanisms")
                scene.world.createItemEntity([2, 1, 2], Direction.DOWN, "ue_addons:stone_mechanism")
                scene.world.createItemEntity([3, 1, 2], Direction.DOWN, "ue_addons:copper_mechanism")
                scene.world.createItemEntity([4, 1, 2], Direction.DOWN, "ue_addons:andesite_mechanism")
                scene.world.createItemEntity([5, 1, 2], Direction.DOWN, "ue_addons:gold_mechanism")
                scene.idle(40)
                scene.overlay.showOutline("red", {}, [1, 0, 1, 5, 0, 5], 45)
                scene.text(45, "But attention, only blocks in 5x5 zone around it can be transformed!")
            })
});