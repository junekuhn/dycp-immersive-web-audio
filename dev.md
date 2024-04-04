vite

modules


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