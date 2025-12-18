ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3003").setExtent([1601600.447118, 4835458.945244, 1603997.636375, 4836787.457472]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_WazeWorld_1 = new ol.layer.Tile({
            'title': 'Waze (World)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://worldtiles3.waze.com/tiles/{z}/{x}/{y}.png'
            })
        });
var format_tipologiaisolati_2 = new ol.format.GeoJSON();
var features_tipologiaisolati_2 = format_tipologiaisolati_2.readFeatures(json_tipologiaisolati_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3003'});
var jsonSource_tipologiaisolati_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tipologiaisolati_2.addFeatures(features_tipologiaisolati_2);
var lyr_tipologiaisolati_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tipologiaisolati_2, 
                style: style_tipologiaisolati_2,
                popuplayertitle: 'tipologia isolati',
                interactive: true,
    title: 'tipologia isolati<br />\
    <img src="styles/legend/tipologiaisolati_2_0.png" /> isolato a lotti<br />\
    <img src="styles/legend/tipologiaisolati_2_1.png" /> isolato aperto<br />\
    <img src="styles/legend/tipologiaisolati_2_2.png" /> isolato semi-aperto<br />\
    <img src="styles/legend/tipologiaisolati_2_3.png" /> isolato chiuso<br />' });
var format_tipologiaedilizia_3 = new ol.format.GeoJSON();
var features_tipologiaedilizia_3 = format_tipologiaedilizia_3.readFeatures(json_tipologiaedilizia_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3003'});
var jsonSource_tipologiaedilizia_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tipologiaedilizia_3.addFeatures(features_tipologiaedilizia_3);
var lyr_tipologiaedilizia_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tipologiaedilizia_3, 
                style: style_tipologiaedilizia_3,
                popuplayertitle: 'tipologia edilizia',
                interactive: true,
    title: 'tipologia edilizia<br />\
    <img src="styles/legend/tipologiaedilizia_3_0.png" /> a ballatoio<br />\
    <img src="styles/legend/tipologiaedilizia_3_1.png" /> a blocco<br />\
    <img src="styles/legend/tipologiaedilizia_3_2.png" /> a corte aperta<br />\
    <img src="styles/legend/tipologiaedilizia_3_3.png" /> a linea<br />\
    <img src="styles/legend/tipologiaedilizia_3_4.png" /> a schiera<br />\
    <img src="styles/legend/tipologiaedilizia_3_5.png" /> derivato<br />\
    <img src="styles/legend/tipologiaedilizia_3_6.png" /> in linea<br />\
    <img src="styles/legend/tipologiaedilizia_3_7.png" /> monofamiliare<br />\
    <img src="styles/legend/tipologiaedilizia_3_8.png" /> plurifamiliare<br />' });
var group_Analisitipologica = new ol.layer.Group({
                                layers: [lyr_tipologiaisolati_2,lyr_tipologiaedilizia_3,],
                                fold: 'close',
                                title: 'Analisi tipologica'});

lyr_GoogleSatellite_0.setVisible(true);lyr_WazeWorld_1.setVisible(true);lyr_tipologiaisolati_2.setVisible(true);lyr_tipologiaedilizia_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_WazeWorld_1,group_Analisitipologica];
lyr_tipologiaisolati_2.set('fieldAliases', {'id': 'id', 'tipo': 'tipo', });
lyr_tipologiaedilizia_3.set('fieldAliases', {'id': 'id', 'area': 'area', 'tipo. edi.': 'tipo. edi.', });
lyr_tipologiaisolati_2.set('fieldImages', {'id': 'TextEdit', 'tipo': 'TextEdit', });
lyr_tipologiaedilizia_3.set('fieldImages', {'id': 'Range', 'area': 'TextEdit', 'tipo. edi.': 'TextEdit', });
lyr_tipologiaisolati_2.set('fieldLabels', {'id': 'inline label - always visible', 'tipo': 'inline label - always visible', });
lyr_tipologiaedilizia_3.set('fieldLabels', {'id': 'inline label - always visible', 'area': 'inline label - always visible', 'tipo. edi.': 'inline label - always visible', });
lyr_tipologiaedilizia_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});