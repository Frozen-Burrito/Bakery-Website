// Filepond
FilePond.registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginImageResize,
    FilePondPluginFileEncode,
);

FilePond.setOptions({
    stylePanelAspectRatio: 100 / 100,
    imageResizeTargetWidth: 50,
    imageResizeTargetHeight: 50,
})

FilePond.parse(document.body);

// Mapbox
mapboxgl.accessToken = 'pk.eyJ1Ijoic2VuZG5vb2JzIiwiYSI6ImNrMHEwaThyeTAyMTUzcW8za2EwdGkyNjUifQ.ZJUcR-YnSBGy8PKLFOBBgw';
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-123.108076, 49.264180],
    zoom: 15
});

console.log('Js loaded');