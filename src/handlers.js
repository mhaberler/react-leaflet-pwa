import { baseMaps } from './mapLayers'
import { Icon } from 'leaflet'

let mymap,
    gpxLoaded,
    marker,
    circle

export function initMap() {
    resetMarkerIcon()
    mymap = L.map('map', {
        layers: [
            baseMaps['Mapa raster IGN - Spain'],
        ]
    }).fitBounds([[24.9300000311, -19.6], [46.0700000311, 5.6]])
    L.control.layers(baseMaps).addTo(mymap)
    L.control.scale({ options: { position: 'bottomleft', metric: true } }).addTo(mymap)
}

function resetMarkerIcon() {
    delete Icon.Default.prototype._getIconUrl;
    Icon.Default.mergeOptions({
        iconRetinaUrl: 'markers/marker-icon-2x.png',
        iconUrl: 'markers/marker-icon.png',
        shadowUrl: 'markers/marker-shadow.png',
    });
}

export function openFile(e) {
    removeTrack()

    const input = e.target;
    const reader = new FileReader()
    reader.onload = () => {
        const data = reader.result;
        displayTrack(data)
        // console.log(data)
    }
    // if (input.files[0]) reader.readAsText(input.files[0])
    reader.readAsText(input.files[0])
}

export function displayTrack(data) {
    gpxLoaded = new L.GPX(data, {
        async: true,
        marker_options: {
            wptIconUrls: {
                '': 'markers/pin-icon-wpt.png',
            },
            startIconUrl: 'markers/pin-icon-start.png',
            endIconUrl: 'markers/pin-icon-end.png',
            shadowUrl: 'markers/pin-shadow.png'
        }
    }).on('loaded', (e) => {
        const gpx = e.target
        // this.name = `${gpx.get_name()}`;
        // this.distance = `${Math.round((gpx.get_distance() / 1000) * 100) / 100} km`;
        // this.maxElevation = `${Math.round(gpx.get_elevation_max() * 100) / 100} m`;
        // const hours = Math.round((gpx.get_total_time() / 3600000) * 100) / 100;
        // const minutes = Math.ceil((hours - Math.floor(hours)) * 60);
        // this.time = `${Math.floor(hours)} horas y ${minutes} minutos`;

        mymap.fitBounds(gpx.getBounds());
    }).addTo(mymap)

    window.localStorage.setItem('gpx', data)
}

export function removeTrack() {
    if (gpxLoaded && mymap.hasLayer(gpxLoaded)) {
        mymap.removeLayer(gpxLoaded);
        gpxLoaded = null;
    }

    // this.name = '';
    // this.distance = '';
    // this.maxElevation = '';
    // this.time = '';
    window.localStorage.removeItem('gpx')
}

export function checkLocation() {
    if (!(marker && circle)) {
        // this.btnNavigation = 'btn--nonavigation';
        initializeLocator()
    } else {
        // this.btnNavigation = 'btn--navigation';
        mymap.stopLocate();
        if (mymap.hasLayer(circle) && mymap.hasLayer(marker)) {
            mymap.removeLayer(circle)
            mymap.removeLayer(marker)
            marker = circle = null
        }
    }
}

function onLocationFound(e) {

    let radius = e.accuracy / 2;
    if (mymap.hasLayer(circle) && mymap.hasLayer(marker)) {
        mymap.removeLayer(circle);
        mymap.removeLayer(marker);
    }

    marker = new L.Marker(e.latlng, { draggable: true });
    circle = new L.circle(e.latlng, radius);
    circle
        .bindPopup(`Estás a menos de ${radius} metros de este punto`)
        .openPopup();

    mymap.addLayer(marker);
    mymap.addLayer(circle);
}

function initializeLocator() {
    if (mymap) {
        mymap.locate({
            // setView: true,
            // maxZoom: 16,
            watch: true,
            timeout: 5000
        })
    
        mymap.on('locationfound', onLocationFound)
    }
}

export function removeCacheMap() {

    // this.showRemoveCache = false;
    
    if ('caches' in window) {
        caches.delete('cache-map')
            .then((bool) => {
                console.log(bool, 'clear cache-map operation') // true
            })
            .catch((err) => {
                console.log(err);
            })
    }
}