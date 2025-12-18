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
var format_Merged_2 = new ol.format.GeoJSON();
var features_Merged_2 = format_Merged_2.readFeatures(json_Merged_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3003'});
var jsonSource_Merged_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Merged_2.addFeatures(features_Merged_2);
var lyr_Merged_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Merged_2, 
                style: style_Merged_2,
                popuplayertitle: 'Merged',
                interactive: true,
    title: 'Merged<br />\
    <img src="styles/legend/Merged_2_0.png" /> 1954<br />\
    <img src="styles/legend/Merged_2_1.png" /> 1965<br />\
    <img src="styles/legend/Merged_2_2.png" /> 1975-76<br />\
    <img src="styles/legend/Merged_2_3.png" /> 1978<br />\
    <img src="styles/legend/Merged_2_4.png" /> 1988<br />\
    <img src="styles/legend/Merged_2_5.png" /> 1996<br />\
    <img src="styles/legend/Merged_2_6.png" /> 1999<br />\
    <img src="styles/legend/Merged_2_7.png" /> 2003<br />\
    <img src="styles/legend/Merged_2_8.png" /> 2007<br />\
    <img src="styles/legend/Merged_2_9.png" /> 2013<br />' });
var format_POI_Marina_di_PisaNord1_3 = new ol.format.GeoJSON();
var features_POI_Marina_di_PisaNord1_3 = format_POI_Marina_di_PisaNord1_3.readFeatures(json_POI_Marina_di_PisaNord1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3003'});
var jsonSource_POI_Marina_di_PisaNord1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POI_Marina_di_PisaNord1_3.addFeatures(features_POI_Marina_di_PisaNord1_3);
cluster_POI_Marina_di_PisaNord1_3 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_POI_Marina_di_PisaNord1_3
});
var lyr_POI_Marina_di_PisaNord1_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_POI_Marina_di_PisaNord1_3, 
                style: style_POI_Marina_di_PisaNord1_3,
                popuplayertitle: 'POI_Marina_di_Pisa(Nord)1',
                interactive: true,
    title: 'POI_Marina_di_Pisa(Nord)1<br />\
    <img src="styles/legend/POI_Marina_di_PisaNord1_3_0.png" /> “Scoglio” Gabriele D’Annunzio<br />\
    <img src="styles/legend/POI_Marina_di_PisaNord1_3_1.png" /> Barca di Caronte<br />\
    <img src="styles/legend/POI_Marina_di_PisaNord1_3_2.png" /> Casa del tempo (?)<br />\
    <img src="styles/legend/POI_Marina_di_PisaNord1_3_3.png" /> Cippo vittime delle Foibe<br />\
    <img src="styles/legend/POI_Marina_di_PisaNord1_3_4.png" /> Emergenza<br />\
    <img src="styles/legend/POI_Marina_di_PisaNord1_3_5.png" /> IL SANTUARIO PELAGOS<br />\
    <img src="styles/legend/POI_Marina_di_PisaNord1_3_6.png" /> Lapide caduti prima guerra mondiale (scuola)<br />\
    <img src="styles/legend/POI_Marina_di_PisaNord1_3_7.png" /> Lapide commemorativa Gabriele Spanu<br />\
    <img src="styles/legend/POI_Marina_di_PisaNord1_3_8.png" /> Lapide commemorativa Marco<br />\
    <img src="styles/legend/POI_Marina_di_PisaNord1_3_9.png" /> LE FIORITURE DI ALGA OSTREOPSIS OVATA<br />\
    <img src="styles/legend/POI_Marina_di_PisaNord1_3_10.png" /> Obelisco Garibaldi<br />\
    <img src="styles/legend/POI_Marina_di_PisaNord1_3_11.png" /> Piazza Viviani Giuseppe<br />\
    <img src="styles/legend/POI_Marina_di_PisaNord1_3_12.png" /> Piazzale delle capitanerie di porto<br />\
    <img src="styles/legend/POI_Marina_di_PisaNord1_3_13.png" /> Programma bandiera blu<br />\
    <img src="styles/legend/POI_Marina_di_PisaNord1_3_14.png" /> Rifugio per gatti<br />\
    <img src="styles/legend/POI_Marina_di_PisaNord1_3_15.png" /> Scultura in cemento “inizio”<br />\
    <img src="styles/legend/POI_Marina_di_PisaNord1_3_16.png" /> Targa caduti sul lavoro nella seconda guerra mondiale<br />\
    <img src="styles/legend/POI_Marina_di_PisaNord1_3_17.png" /> Targa commemorativa Giovanni Lombardi e monumento Pino Silv…<br />\
    <img src="styles/legend/POI_Marina_di_PisaNord1_3_18.png" /> Targa Gustavo Salvini<br />\
    <img src="styles/legend/POI_Marina_di_PisaNord1_3_19.png" /> Villa con targa in ebraico (?)<br />\
    <img src="styles/legend/POI_Marina_di_PisaNord1_3_20.png" /> Villa Rondini<br />\
    <img src="styles/legend/POI_Marina_di_PisaNord1_3_21.png" /> Villa Santa (luogo di culto mariano)<br />\
    <img src="styles/legend/POI_Marina_di_PisaNord1_3_22.png" /> Villa Tobler<br />' });
var group_analisistorica = new ol.layer.Group({
                                layers: [lyr_Merged_2,lyr_POI_Marina_di_PisaNord1_3,],
                                fold: 'close',
                                title: 'analisi storica'});

lyr_GoogleSatellite_0.setVisible(true);lyr_WazeWorld_1.setVisible(true);lyr_Merged_2.setVisible(true);lyr_POI_Marina_di_PisaNord1_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_WazeWorld_1,group_analisistorica];
lyr_Merged_2.set('fieldAliases', {'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_POI_Marina_di_PisaNord1_3.set('fieldAliases', {'Nome': 'Nome', 'Latitudine': 'Latitudine', 'Longitudin': 'Longitudin', });
lyr_Merged_2.set('fieldImages', {'id': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_POI_Marina_di_PisaNord1_3.set('fieldImages', {'Nome': 'TextEdit', 'Latitudine': 'TextEdit', 'Longitudin': 'TextEdit', });
lyr_Merged_2.set('fieldLabels', {'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_POI_Marina_di_PisaNord1_3.set('fieldLabels', {'Nome': 'no label', 'Latitudine': 'no label', 'Longitudin': 'no label', });
lyr_POI_Marina_di_PisaNord1_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});