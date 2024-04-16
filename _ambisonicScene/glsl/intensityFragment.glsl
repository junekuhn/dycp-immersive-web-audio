precision mediump float;
varying float uFragIntensity;

//from
varying vec2 vUv;
uniform vec2 uCircle[30];
uniform float uIntensity[30];

  void main()
  { 
    float strength = 0.;
    for(int i = 0; i<30; ++i) {
        strength = strength + 0.01 * uIntensity[i] / (distance(vUv, uCircle[i]));
    }
    gl_FragColor = vec4(vec3(strength), 1.0);
  }