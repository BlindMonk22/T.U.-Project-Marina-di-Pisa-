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
var format_perimetrodelcentroabitato_2 = new ol.format.GeoJSON();
var features_perimetrodelcentroabitato_2 = format_perimetrodelcentroabitato_2.readFeatures(json_perimetrodelcentroabitato_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3003'});
var jsonSource_perimetrodelcentroabitato_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_perimetrodelcentroabitato_2.addFeatures(features_perimetrodelcentroabitato_2);
var lyr_perimetrodelcentroabitato_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_perimetrodelcentroabitato_2, 
                style: style_perimetrodelcentroabitato_2,
                popuplayertitle: 'perimetro del centro abitato',
                interactive: true,
                title: '<img src="styles/legend/perimetrodelcentroabitato_2.png" /> perimetro del centro abitato'
            });
var format_fasciadirispettodepuratori_3 = new ol.format.GeoJSON();
var features_fasciadirispettodepuratori_3 = format_fasciadirispettodepuratori_3.readFeatures(json_fasciadirispettodepuratori_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3003'});
var jsonSource_fasciadirispettodepuratori_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fasciadirispettodepuratori_3.addFeatures(features_fasciadirispettodepuratori_3);
var lyr_fasciadirispettodepuratori_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_fasciadirispettodepuratori_3, 
                style: style_fasciadirispettodepuratori_3,
                popuplayertitle: 'fascia di rispetto depuratori',
                interactive: false,
                title: '<img src="styles/legend/fasciadirispettodepuratori_3.png" /> fascia di rispetto depuratori'
            });
var group_vincolidiinedificabilit = new ol.layer.Group({
                                layers: [lyr_perimetrodelcentroabitato_2,lyr_fasciadirispettodepuratori_3,],
                                fold: 'open',
                                title: 'vincoli di inedificabilità'});

lyr_GoogleSatellite_0.setVisible(true);lyr_WazeWorld_1.setVisible(true);lyr_perimetrodelcentroabitato_2.setVisible(true);lyr_fasciadirispettodepuratori_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_WazeWorld_1,group_vincolidiinedificabilit];
lyr_perimetrodelcentroabitato_2.set('fieldAliases', {'id': 'id', });
lyr_fasciadirispettodepuratori_3.set('fieldAliases', {'id': 'id', });
lyr_perimetrodelcentroabitato_2.set('fieldImages', {'id': 'TextEdit', });
lyr_fasciadirispettodepuratori_3.set('fieldImages', {'id': 'TextEdit', });
lyr_perimetrodelcentroabitato_2.set('fieldLabels', {'id': 'no label', });
lyr_fasciadirispettodepuratori_3.set('fieldLabels', {'id': 'no label', });
lyr_fasciadirispettodepuratori_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});