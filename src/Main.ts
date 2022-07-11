import Phaser from 'phaser';

import PreloaderScene from './scenes/PreloaderScene';
import InitialScene from './scenes/InitialScene';

const config: Phaser.Types.Core.GameConfig = {
    scale: {
        width: 800,
        height: 400,
    },
    pixelArt: true,
    type: Phaser.AUTO,
    parent: "yourgamediv",
    backgroundColor: "#0072bc",
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 300 },
            debug: false,
        },
    },
    scene: [PreloaderScene, InitialScene],
};

export default new Phaser.Game(config);