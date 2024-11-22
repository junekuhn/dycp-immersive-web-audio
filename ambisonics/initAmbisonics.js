import * as ambisonics from 'ambisonics';

export const initAmbisonics = (context) => {

    const maxOrder = 1;

    // initialize encoder
    const encoder = new ambisonics.monoEncoder(context, 1);
    console.log(encoder);
    // initialise encoder (convolver really)
    const convolver = new ambisonics.convolver(context, maxOrder);
    console.log(convolver);
    // FuMa to ACN converter
    const converter = new ambisonics.converters.wxyz2acn(context);
    console.log(converter);
    const rotator = new ambisonics.sceneRotator(context, maxOrder);
    console.log(rotator);
    // initialize mirroring
    const mirror = new ambisonics.sceneMirror(context, 1);
    console.log(mirror);
    // initialize decoder
    const decoder = new ambisonics.binDecoder(context, 1);
    console.log(decoder);
    // initialize intensity analyser
    const analyser = new ambisonics.intensityAnalyser(context);
    console.log(analyser);
    // output gain
    const gainOut = context.createGain();

    // connect graph
    convolver.out.connect(converter.in);
    converter.out.connect(mirror.in);
    mirror.out.connect(analyser.in);
    mirror.out.connect(rotator.in);
    rotator.out.connect(decoder.in);
    decoder.out.connect(gainOut);
    gainOut.connect(context.destination);

    return { mirror, gainOut, decoder, rotator, convolver, converter, analyser }
}

