

What's left (MVP)


7. shift-tab goes back
8. barriers to prevent you moving too far
9. the three.js script should be better organized, it feels really clunky at the moment
    going to look into the game script
10. what's going on with the white blurb changing position? it shouldn't
11. can I detect a swipe from left to right? or have html dummy elements that advance the page along?
12. any sonifications
13. record voiceover
14. record trampbunny tracks
15. can I get a basic scene description read out for a 3D object?



    Sofa files
        debug converter to json
        upload your own file?

        











# Ambisonics (3 dof)

numeric is not defined
- it's a dependency of ambisonics and it's not defined there
installing via config doesn't work
still an issue

write a new scene rotator?

Some basic UI

gamepad api
 - detect if gamepad connected
 - event for gamepad connection
 - UI for gamepad controls (help section
    in three.js script, show 'no gamepad connected by default'
    create custom event 
touch and orientation controls

touch events from cmajor

orbit controls rotates you in orbit around the scene
I need controls that are from the center and rotate the scene around you (look controls?)

we may need to add functionality to pointerlockcontrols


do we control azimuth and elevation from controls, then map to a 3D vector in THREE?
    maps easily to XY
    https://math.stackexchange.com/questions/1150232/finding-the-unit-direction-vector-given-azimuth-and-elevation
    if a = azimuth and e = elevation
    x = sin(a) * cos(e)
    y = cos(a) * cos(e)
    z = sin(e)

    azimuth is y axis rotation - corresponds to mouse x
    elevation is x axis rotation - corresponds to mouse y
    order has to be YXZ

    so pull the azimuth and elevation from camera quaternion OR keep a global state YXZ euler, it's the same thing

    does this mean pointerlock is invalid? no


next step is ambisonic playback
get the scene rotator working

pointerlock doesn't work with touchstart

# Positional Audio (6 dof)

looking is the same as the ambisonic scene
setting up a scene like the example from three.js but you can tab your way through different positions
double tap on mobile / tablet
tab joystick down on controller

mouse in pointerlock, click for moving forward
Arrow keys for looking, spacebar for moving forward
using azimuth and elevation for looking around, and dedicating the lower left to moving forward
joystick for looking, a button for moving forward

Why? because this isn't intended for gaming, we're trying to simplify controls to the necessities
instead of 8 kinds of movement, we only need 5 (4 looking, 1 movement)




# ambisonics 6DOF?

what if you could, from positional audio sources, mix, convolve and present ambisonics?
useful especially if you wanted to perform

# 3D Alt text

on tab - scene description readout
for forward movement - define zones, and on entry of the zone readout

ScreenReaderControls?
kind of implies that there be read outs of 3D objects and scene

captioning
html can add a text track
vttcue's can be added to an audio element

the exception being buffer source files


# controls object

automatically assigns values

MouseOnlyControls - PointerLock extended for gallery settings
    methods for modifying defaults
    easing
KeyboardAccessControls - Arrow Keys, Spacebar, 
    methods for modifying defaults
TouchAccessControls - like pointerlock but touch, move with hit area
    requires a hit box dom element
GamepadAccessControls - one handed joystick + button 

When it comes to art, better access means a better experience for everyone.

onpointerdown is not relevant, because a touch event should not move you by default


# User Flow

controls calibration, mouse, arrows, controller, touch
choice of controller
choice of background / scene
cache for user preferences

# Intensity

I'm not sure why I only get one value per frame
I need a 2D array to send to the shader

I think I discovered that because the circle is inside out I have reverse the equation
the convolver helped, and it works somehow

# archive

    ambisonics don't work on mobile?
        could be a chrome / brave issue

    vibration API
        doesn't work on safari, safari ios
    vibration on gamepad
        doesn't work on firefox, safari ios
        nonstandard and shouldn't be depended on
    what should it be used for?
        zero crossing of up/down looking
            single buzz
        moving too far away from experience


    midi access controls
        buy a midi controller with a joystick
        x/y controls
        buttons for teleport, move forward
        a place where you can map midi interfaces

        you can't use js to control focus, so controlling the menu with any controller is kind of out of the question

            

    xbox controller should navigate menu
    gamepad should only look left / right
    have different audio examples for both ambisonic and positional

    positional - left/right only, or limit up/down
    ambisonic - different sensitivity for up/down

    reset view option - maybe a reset experience that doesn't refresh
    a way of sonifiying your location in space

    two finger drag - look around 
    two finger drag = one finger hold = move forward
    teleport - four single taps
    exit - disabled
    two-finger hold maybe?

Midi controls