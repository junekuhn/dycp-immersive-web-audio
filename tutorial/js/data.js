import * as THREE from 'three'
/**
 * Constants
 */
export const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
  }
export const listenerPositions = [
    new THREE.Vector3(0,0,0),
    new THREE.Vector3(0,0,-3),
    new THREE.Vector3(0,0,-6),
    new THREE.Vector3(0,0,-9),
    new THREE.Vector3(0,0,-12),
]
export const audioPositions = [
    new THREE.Vector3(-1,0,-4),
    new THREE.Vector3(1,0,-7),
    new THREE.Vector3(-1,0,-7),
    new THREE.Vector3(-1,0,-3)
    // new THREE.Vector3(1,0,-8)
]

export const desktopDescriptions = [
    "This is AllEars, a playable introduction to screenreader-accessible immersive audio on the web.  You can navigate through the experience using the tab key, just like any other accessible website.  Each 3D position is mapped to an HTML list item. If you’ve never used a screen reader before, I challenge you to turn it on, close your eyes, and find out if you can navigate the 3D space.",
    "To look around, use the left and right arrow keys, and spacebar to move forward. You can optionally use the mouse and mouse click to look around, but that tends to be more difficult if your eyes are closed.",
    "This experience i ncorporates a standard 3D virtual space and spatial audio you might incounter in video games, virtual reality, or other kinds of simulations.  To move forward, press spacebar, or hold a single click.",
    "This special kind of spatial audio, however, is called ambisonics, and it allows you to experience * an entire soundfield * without reference to objects in 3D space. All spatial information is contained within the audio file itself, and you need a special player called a binaural decoder to perceive that information. A helpful metaphor, I find, is thinking of it like listening to the sky, since it’s a spherical audio format.",
    "To change settings, navigate to the menu with the escape key.  If you’re using a screenreader, the menu is just after this position. There you can learn more about this project, change control preferences, or connect a game controller."
]

export const mobileDescriptions = [" This is AllEars, a playable introduction to screenreader-accessible immersive audio on the web.  If you’re using a screenreader, you can navigate through the experience by swiping left or right, just like any other accessible website.   Each 3D position is mapped to an HTML list item. Otherwise, you can teleport to the next position with a double tap on the top half of the screen.  If you’ve never used a screen reader before, I challenge you to turn it on, close your eyes, and find out if you can navigate the 3D space.",
"To look around, use a one-finger drag on the top half of the screen. This will also work if you have Direct Touch enabled on iOS.  If you’re using Talkback on Android, a two-finger drag would be the equivalent.",
"This experience incorporates the standard 3D virtual space you might incounter in video games, virtual reality, or other kinds of simulations.  To move forward, with a single finger, press and hold in the lower half of the screen.  If you’re using Talkback on Android, use a two-finger hold.",
"This special kind of spatial audio, however, is called ambisonics, and it allows you to experience * an entire soundfield * without reference to objects in 3D space.  * All spatial information is contained within the audio file itself, and you need a special player called a binaural decoder to perceive that information. A helpful metaphor, I find, is thinking of it like listening to the sky, since it’s a spherical audio format.",
"To change settings, navigate to the menu with a double tap on the bottom half of the screen.  If you’re using a screenreader, the menu is just after this position. There you can learn more about this project, change control preferences, or connect a game controller."
]

const gamepadDescription = [
"This is AllEars, a playable introduction to screenreader-accessible immersive audio on the web.   You can teleport to the next position with a tap of the right button, b.  To move back, tap the left button, x.",
"Congratulations gamer, you’ve unlocked your first achievement.  To look around, use the left joystick or the D-Pad. ",
"This experience is incorporates the standard 3D virtual space you might encounter in video games, virtual reality, or other kinds of simulations.  To move forward, press the bottom button, a. ",
"This special kind of spatial audio, however, is called ambisonics, and it allows you to experience an entire soundfield without reference to objects in 3D space. All spatial information is contained within the audio file itself, and you need a special player called a binaural decoder to perceive that information. A helpful metaphor, I find, is thinking of it like listening to the sky, since it’s a spherical audio format.",
"To change settings, navigate to the menu with another tap of the right button, b. There you can learn more about this project, change control preferences, or go back to using normie controls."
]