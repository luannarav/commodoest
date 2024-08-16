const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const frameCount = audioCtx.sampleRate * 2.0;
const myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);
const channelData = myArrayBuffer.getChannelData(0); // Retrieves the PCM data for the first channel
