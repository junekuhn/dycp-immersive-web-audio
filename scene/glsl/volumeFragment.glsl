//from
varying vec2 vUv;
uniform float volume;

  void main()
  { 

    gl_FragColor = vec4(vec3(1.-volume), 1.0);
  }