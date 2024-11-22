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

Big Questions:
1. How does the instruction get relayed well for both sighted and nonsighted people?
2. Will there be any prompts for using or changing settings on the screen reader?
3. What audio will be used?
4. What other ambisonics features would be good to showcase?
5. How do I illustrate the Tab metaphor better
    a. maybe something with a path that you travel along

Before I work on this

1. Midi Access Controls
    in progress, impossible to have by default anyway
2. see if midi / xbox can navigate menu - false, nothing can simulate a tab focus
    no
3. teleport to right click, two finger double tap / hold? no right click
    there's no touch equivalent
4. look again at sofa file conversion
    maybe ask for help from imperial
5. why doesn't ambisonics work on mobile?
    fixed
6. reset experience option
    no elevation for 3d
    use tab if it's ambisonics
    you shouldn't need to reset view if using touch controls, no one's had difficulty
7. shift-tab goes back
8. barriers to prevent you moving too far
9. the three.js script should be better organized, it feels really clunky at the moment
    going to look into the game script
10. what's going on with the white blurb changing position? it shouldn't
11. can I detect a swipe from left to right? or have html dummy elements that advance the page along?
12. any sonifications

Other things
1. 3d Alt Text

Answering the Big Questions
1. Instead of writing a piece, I'm going to produce a spatial audio instruction
2. answered
3. for the music section maybe the trampbunny stuff I've been working on
    with rhythmic sections separated by kick, percussion, bass, and leads
    I'd like to make better use of the analogy I'm describing with tab, where teleport actually 
    moves you through space to a different sonic landscape

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

- instead of a menu control, just locate it after the list and listen for focus


todo
- trampbunny music for outside scene
- andy's piece
- ambisonics for 4th bit - morning
- 3D scene building
    environment building 
- something happens with clicking a button (mobile?)
- settings
    mobile - morning
    gamepad
- when gamepad connects, replace description automatically

- instrumentation (laptop, mobile, gamepad)
    - egirl performance with gamepad
    - laptop performance, hdmi, audio out
    - mobile not really possible at this time
    - tablet?
    - cmpsr?  other midi?


changing parameters for screenreader
verbosity - low
ralph - 70
cyborg realities with the personalisation of screenreader tech
portable preferences



    captions yes or no?
        on screen readers for mac the text appears

        captions only appear in the track element when there's audio and video elements
        so is this case it wouldn't work unless I had spoken narration
        so it would be good to put the captions as 3D text in the experience