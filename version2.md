# Version 2

Instead of adding a tutorial to each, I'm going to combine the experiences to one continuous experience.  This accounts for the order of ambisonic then positional.

How I imagine it

Screens and Screens-within-experience

1. enter/info
2. put on headphones
--- no scene screen ----
3. loading / play
4. look around instruction
    - direct touch / talkback instruction if mobile / tablet
    - touch instructions if mobile / tablet
    - keyboard instruction is default
    - ignore mouse if you don't use it
    - gamepad instruction if gamepad detected
    - small ambisonic instructions
    - maybe the audio itself is the instruction on loop
---- detect that listener has been looking around ----
5. Menu
    - Resume
    - 5.1 settings screen   
        haptics can be turned off
        mouse controls
        an instruction to use gamepad if desired
    - 5.2 screen midi configuration available
    - Info
---- optional: change calibration / other settings ---
---- credits and info are also in settings ---
---- ambisonic experience ----
6. teleport and move instructions
---- positional audio experience ----
7. instrumentation / additional interactivity


Before I work on this
12. any sonifications

The Spatial Sonic Webpage
1. not much but some audible music in the distance, introduction to controls
2. is scroll a good idea? probably not. Scroll is such a wanky control anyway built for 2D pages, feels awful in these R3F pages
3. there's a visible path for sighted people.  Darkness implies that we should be listening.
4. scene description? ideally
5. bounding boxes for each part, and upon entering the sounds change
6. swipe / tab through everything


Ideas:
- combine touch and mouse controls
- sonification to locate next scene
- play audio only when inside scene
- instead of a menu control, just locate it after the list and listen for focus
- class for instancing accessible scenes


todo
- trampbunny music for outside scene
- ambisonic voiceover production
- combine mouse and touch controls
    - right now it's stuck a buggy inbetween state between my code and orbit controls code
    - i think we could just start with orbit controls code 
- 3D scene building
- settings
- xbox controls
- take advantage of pmndrs' work

What's different about this project
- using immersive audio or sonification for navigation
- no dependancies other than three.js and jsambisonics

How does PMNDRS do it?
section (aria-label, out of sight)
    p (innerhtml)
    div
        div
            button
    div 
        div
            p (innerhtml, tabindex=-1)
    div
        div
            button
    div 
        div
            button
a (link out)
div(aria-atomic, aria-live)

they have 4 a11y roles - button, content, togglebutton, link
link and button already exist
content - probably the p tags + text
togglebutton - probably just button tag, with aria-pressed



