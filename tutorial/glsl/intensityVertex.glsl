precision mediump float;
uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;

attribute vec3 position;

uniform float uTime;


//three.js already generates this
attribute vec2 uv;
//to pass to frag
varying vec2 vUv;

void main()
{   
    vUv = uv;
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
}
