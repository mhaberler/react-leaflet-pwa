import L from 'leaflet'

export const baseMaps = {
    "Mapa raster IGN - Spain": L.tileLayer.wms('http://www.ign.es/wms-inspire/mapa-raster', {
        layers: 'mtn_rasterizado',
        crossOrigin: true,
        format: 'image/png',
        transparent: false,
        continuousWorld: true,
        attribution: '© <a href="http://www.ign.es/ign/main/index.do" target="_blank">Instituto Geográfico Nacional de España</a> contributors'
    }),
    "Ortoimagen PNOA - Spain": L.tileLayer.wms('http://www.ign.es/wms-inspire/pnoa-ma', {
        layers: 'OI.OrthoimageCoverage',
        crossOrigin: true,
        format: 'image/png',
        transparent: false,
        continuousWorld: true,
        attribution: 'PNOA cedido por © <a href="http://www.ign.es/ign/main/index.do" target="_blank">Instituto Geográfico Nacional de España</a> contributors'
    }),
    "OpenStreetMap": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        crossOrigin: true,
        attribution: '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }),
    "OpenTopoMap": L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        crossOrigin: true,
        attribution: '&copy; <a target="_blank" href="https://opentopomap.org">OpenTopoMap</a> contributors'
    }),
}