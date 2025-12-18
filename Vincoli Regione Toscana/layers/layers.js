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
var format_vincolopaesaggisticoart142_2 = new ol.format.GeoJSON();
var features_vincolopaesaggisticoart142_2 = format_vincolopaesaggisticoart142_2.readFeatures(json_vincolopaesaggisticoart142_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3003'});
var jsonSource_vincolopaesaggisticoart142_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vincolopaesaggisticoart142_2.addFeatures(features_vincolopaesaggisticoart142_2);
var lyr_vincolopaesaggisticoart142_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vincolopaesaggisticoart142_2, 
                style: style_vincolopaesaggisticoart142_2,
                popuplayertitle: 'vincolo paesaggistico art. 142',
                interactive: false,
    title: 'vincolo paesaggistico art. 142<br />\
    <img src="styles/legend/vincolopaesaggisticoart142_2_0.png" /> boschi<br />\
    <img src="styles/legend/vincolopaesaggisticoart142_2_1.png" /> terreni costieri mari<br />\
    <img src="styles/legend/vincolopaesaggisticoart142_2_2.png" /> parchi<br />' });
var format_vincoloidrogeologicoperdecreto_3 = new ol.format.GeoJSON();
var features_vincoloidrogeologicoperdecreto_3 = format_vincoloidrogeologicoperdecreto_3.readFeatures(json_vincoloidrogeologicoperdecreto_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3003'});
var jsonSource_vincoloidrogeologicoperdecreto_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vincoloidrogeologicoperdecreto_3.addFeatures(features_vincoloidrogeologicoperdecreto_3);
var lyr_vincoloidrogeologicoperdecreto_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vincoloidrogeologicoperdecreto_3, 
                style: style_vincoloidrogeologicoperdecreto_3,
                popuplayertitle: 'vincolo idrogeologico per decreto',
                interactive: false,
                title: '<img src="styles/legend/vincoloidrogeologicoperdecreto_3.png" /> vincolo idrogeologico per decreto'
            });
var format_vincoloarchitettonico_4 = new ol.format.GeoJSON();
var features_vincoloarchitettonico_4 = format_vincoloarchitettonico_4.readFeatures(json_vincoloarchitettonico_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3003'});
var jsonSource_vincoloarchitettonico_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vincoloarchitettonico_4.addFeatures(features_vincoloarchitettonico_4);
var lyr_vincoloarchitettonico_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vincoloarchitettonico_4, 
                style: style_vincoloarchitettonico_4,
                popuplayertitle: 'vincolo architettonico',
                interactive: true,
                title: '<img src="styles/legend/vincoloarchitettonico_4.png" /> vincolo architettonico'
            });
var format_reticoloidraulico_5 = new ol.format.GeoJSON();
var features_reticoloidraulico_5 = format_reticoloidraulico_5.readFeatures(json_reticoloidraulico_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3003'});
var jsonSource_reticoloidraulico_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reticoloidraulico_5.addFeatures(features_reticoloidraulico_5);
var lyr_reticoloidraulico_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reticoloidraulico_5, 
                style: style_reticoloidraulico_5,
                popuplayertitle: 'reticolo idraulico',
                interactive: true,
                title: '<img src="styles/legend/reticoloidraulico_5.png" /> reticolo idraulico'
            });
var group_vincoliREGIONETOSCANA = new ol.layer.Group({
                                layers: [lyr_vincolopaesaggisticoart142_2,lyr_vincoloidrogeologicoperdecreto_3,lyr_vincoloarchitettonico_4,lyr_reticoloidraulico_5,],
                                fold: 'open',
                                title: 'vincoli REGIONE TOSCANA'});

lyr_GoogleSatellite_0.setVisible(true);lyr_WazeWorld_1.setVisible(true);lyr_vincolopaesaggisticoart142_2.setVisible(true);lyr_vincoloidrogeologicoperdecreto_3.setVisible(true);lyr_vincoloarchitettonico_4.setVisible(true);lyr_reticoloidraulico_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_WazeWorld_1,group_vincoliREGIONETOSCANA];
lyr_vincolopaesaggisticoart142_2.set('fieldAliases', {'id': 'id', 'tipologia': 'tipologia', });
lyr_vincoloidrogeologicoperdecreto_3.set('fieldAliases', {'id': 'id', });
lyr_vincoloarchitettonico_4.set('fieldAliases', {'id': 'id', });
lyr_reticoloidraulico_5.set('fieldAliases', {'id': 'id', });
lyr_vincolopaesaggisticoart142_2.set('fieldImages', {'id': 'TextEdit', 'tipologia': 'TextEdit', });
lyr_vincoloidrogeologicoperdecreto_3.set('fieldImages', {'id': 'TextEdit', });
lyr_vincoloarchitettonico_4.set('fieldImages', {'id': 'TextEdit', });
lyr_reticoloidraulico_5.set('fieldImages', {'id': 'TextEdit', });
lyr_vincolopaesaggisticoart142_2.set('fieldLabels', {'id': 'no label', 'tipologia': 'no label', });
lyr_vincoloidrogeologicoperdecreto_3.set('fieldLabels', {'id': 'no label', });
lyr_vincoloarchitettonico_4.set('fieldLabels', {'id': 'no label', });
lyr_reticoloidraulico_5.set('fieldLabels', {'id': 'no label', });
lyr_reticoloidraulico_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});