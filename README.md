# AllEars: Immersive Web Audio

Furthering websites as installation art, accessible immersive media, and hybrid listening environments.

Through the Develop Your Creative Practice grant, I am building a toolkit for artists, web developers, and musicians to build immersive experiences accessible to screen readers in the browser. This approach aims to utilize open web standards to enable myself and others to create website installations that allow for hybridity with in-person immersive installations like projections and speaker arrays.

## Quick Start

comment out in vite.config.js

        base: '/dycp-immersive-web-audio/',

command line run:

        npm i
        npm run dev

## Controls

There are 4 controls based on how Three.js defines controls classes in no specific order

- Gamepad Access Controls
- Keyboard Access Controls
- Mouse Only Controls
- Touch Access Controls

And these controls are specifically designed for the gallery-style hybrid installations. Based on personal experience of exhibitions, these provide self-contained methods of experiencing immersive media with accessibility in mind.  In in-person exhibitions, a Gamepad or Touch-based controls are probably the best to go with.  For virtual exhibitions, all can be used simultaneously in the browser making the installation screen reader and keyboard accessible.

## Ambisonics VS Positional Audio

(Ambisonics)[https://en.wikipedia.org/wiki/Ambisonics], as I might describe them, are a method of representing sound in a spherical format, that has to be decoded to binaural depending on listener orientation.  Zeroth order means mono, and First Order means XYZW, where XYZ are 3D axes and W is overall intensity, and higher orders use more complex spherical harmonics.  If that doesn't make any sense, don't worry, you can just think of it as 'true' VR audio.  Another way to think about it is that spatial information is 'baked' into the audio files themselves.

With positional audio, the spatial information is calculated through Three.js. Very often in game audio, the audio designer places sounds in space, and the position is dependent on camera position and orientation.  This is what you encounter 99% of the time.

## JSAmbisonics

This repository uses the JSAmbisonics library, transpiled with Vite to fit the modern ES6 approach.  Check out that respository to learn more about features and limitations.  I used this instead of Omnitone because it was made by researchers to support ambisonics in general in the browser, where Omnitone seems to exist to support Youtube. Doesn't mean you couldn't make an Omnitone version of this.

## Roadmap

Here's some things I'd like to include in future development, but would require help and/or payment:

1. a system for 3D Alt Text (scene description readout), and a captioning system using native HTML features for audio
2. Typescript support for three.js controls
3. An ambisonic audio class compatible with Three.js
4. A server for
    a. uploading Ambisonic files
    b. positional scene authoring tools
    c. User preferences / login to save
5. 360 Video scene
6. Multichannel output from chromium
7. Heatmaps of ambisonics
8. React-Three-Fiber integrations
9. A-Frame integrations
10. HOA example
11. 6 DOF Ambisonics



