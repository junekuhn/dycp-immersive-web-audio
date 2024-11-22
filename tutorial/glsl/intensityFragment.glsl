#define numPoints 30

precision mediump float;
varying float uFragIntensity;

//from
varying vec2 vUv;
uniform vec2 uCircle[numPoints];
uniform float uIntensity[numPoints];

  void main()
  { 
    float strength = 0.;
    for(int i = 0; i<numPoints; ++i) {
        strength = strength + 0.01 * uIntensity[i] / (distance(vUv, uCircle[i]));
    }
    gl_FragColor = vec4(vec3(strength), 1.0);
  }