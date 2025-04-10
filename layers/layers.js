ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([40.309932, 22.750547, 51.313983, 28.847967]);
var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_region_1 = new ol.format.GeoJSON();
var features_region_1 = format_region_1.readFeatures(json_region_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_region_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_region_1.addFeatures(features_region_1);
var lyr_region_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_region_1, 
                style: style_region_1,
                popuplayertitle: 'region',
                interactive: false,
                title: '<img src="styles/legend/region_1.png" /> region'
            });
var format____2 = new ol.format.GeoJSON();
var features____2 = format____2.readFeatures(json____2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource____2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource____2.addFeatures(features____2);
var lyr____2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource____2, 
                style: style____2,
                popuplayertitle: 'مشروع_البلدات_التراثية',
                interactive: true,
    title: 'مشروع_البلدات_التراثية<br />\
    <img src="styles/legend/___2_0.png" /> 1<br />' });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: 'مشروع ترميم وتاهيل',
                interactive: true,
    title: 'مشروع ترميم وتاهيل<br />\
    <img src="styles/legend/_3_0.png" /> 1<br />' });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: 'مشروع الاصول الثقافيه',
                interactive: true,
    title: 'مشروع الاصول الثقافيه<br />\
    <img src="styles/legend/_4_0.png" /> 1<br />' });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__5, 
                style: style__5,
                popuplayertitle: 'مشروع اللوحات',
                interactive: true,
    title: 'مشروع اللوحات<br />\
    <img src="styles/legend/_5_0.png" /> 1<br />' });

lyr_GoogleRoad_0.setVisible(true);lyr_region_1.setVisible(true);lyr____2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_region_1,lyr____2,lyr__3,lyr__4,lyr__5];
lyr_region_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'EMIRATE_ID': 'EMIRATE_ID', 'A_NAME': 'A_NAME', 'E_NAME': 'E_NAME', 'CAPITAL_ID': 'CAPITAL_ID', 'CLASS': 'CLASS', 'POPULATION': 'POPULATION', 'SHAPE_Leng': 'SHAPE_Leng', 'الاسم': 'الاسم', 'عددال': 'عددال', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr____2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'اسم_المشروع': 'اسم المشروع', 'المنطقة': 'المنطقة', 'المحافظة': 'المحافظة', 'طبيعة_الأعمال': 'طبيعة الأعمال', 'اسم_الموقع': 'اسم الموقع', 'مشروع_اللوحات': 'مشروع_اللوحات', 'مشروع_الأصول_الثقافية': 'مشروع_الأصول_الثقافية', 'ترميم_وتأهيل_130_مسجد': 'ترميم_وتأهيل_130_مسجد', 'مشروع_البلدات_التراثية': 'مشروع_البلدات_التراثية', 'مشروع_حصر_المواقع_والمباني': 'مشروع_حصر_المواقع_والمباني', 'مشروع_أطلس_المساجد_التاريخية': 'مشروع_أطلس_المساجد_التاريخية', 'مشروع_الأتفاقية_الاتفاقية_الاط': 'مشروع_الأتفاقية_الاتفاقية_الاط', 'مشروع_أصول_الدرعية_التاريخية': 'مشروع_أصول_الدرعية_التاريخية', 'مشروع_قصر_ثريان': 'مشروع_قصر_ثريان', 'مشروع_مباني_سمحان': 'مشروع_مباني_سمحان', 'مشروع_قصر_بن_رقوش': 'مشروع_قصر_بن_رقوش', 'PHOTOS': 'PHOTOS', 'ID': 'ID', 'POINT_X': 'POINT_X', 'POINT_Y': 'POINT_Y', 'SITE_E_NAME': 'SITE_E_NAME', });
lyr__3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'اسم_المشروع': 'اسم المشروع', 'المنطقة': 'المنطقة', 'المحافظة': 'المحافظة', 'طبيعة_الأعمال': 'طبيعة الأعمال', 'اسم_الموقع': 'اسم الموقع', 'مشروع_اللوحات': 'مشروع_اللوحات', 'مشروع_الأصول_الثقافية': 'مشروع_الأصول_الثقافية', 'ترميم_وتأهيل_130_مسجد': 'ترميم_وتأهيل_130_مسجد', 'مشروع_البلدات_التراثية': 'مشروع_البلدات_التراثية', 'مشروع_حصر_المواقع_والمباني': 'مشروع_حصر_المواقع_والمباني', 'مشروع_أطلس_المساجد_التاريخية': 'مشروع_أطلس_المساجد_التاريخية', 'مشروع_الأتفاقية_الاتفاقية_الاط': 'مشروع_الأتفاقية_الاتفاقية_الاط', 'مشروع_أصول_الدرعية_التاريخية': 'مشروع_أصول_الدرعية_التاريخية', 'مشروع_قصر_ثريان': 'مشروع_قصر_ثريان', 'مشروع_مباني_سمحان': 'مشروع_مباني_سمحان', 'مشروع_قصر_بن_رقوش': 'مشروع_قصر_بن_رقوش', 'PHOTOS': 'PHOTOS', 'ID': 'ID', 'POINT_X': 'POINT_X', 'POINT_Y': 'POINT_Y', 'SITE_E_NAME': 'SITE_E_NAME', });
lyr__4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'اسم_المشروع': 'اسم المشروع', 'المنطقة': 'المنطقة', 'المحافظة': 'المحافظة', 'طبيعة_الأعمال': 'طبيعة الأعمال', 'اسم_الموقع': 'اسم الموقع', 'مشروع_اللوحات': 'مشروع_اللوحات', 'مشروع_الأصول_الثقافية': 'مشروع_الأصول_الثقافية', 'ترميم_وتأهيل_130_مسجد': 'ترميم_وتأهيل_130_مسجد', 'مشروع_البلدات_التراثية': 'مشروع_البلدات_التراثية', 'مشروع_حصر_المواقع_والمباني': 'مشروع_حصر_المواقع_والمباني', 'مشروع_أطلس_المساجد_التاريخية': 'مشروع_أطلس_المساجد_التاريخية', 'مشروع_الأتفاقية_الاتفاقية_الاط': 'مشروع_الأتفاقية_الاتفاقية_الاط', 'مشروع_أصول_الدرعية_التاريخية': 'مشروع_أصول_الدرعية_التاريخية', 'مشروع_قصر_ثريان': 'مشروع_قصر_ثريان', 'مشروع_مباني_سمحان': 'مشروع_مباني_سمحان', 'مشروع_قصر_بن_رقوش': 'مشروع_قصر_بن_رقوش', 'PHOTOS': 'PHOTOS', 'ID': 'ID', 'POINT_X': 'POINT_X', 'POINT_Y': 'POINT_Y', 'SITE_E_NAME': 'SITE_E_NAME', });
lyr__5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'اسم_المشروع': 'اسم المشروع', 'المنطقة': 'المنطقة', 'المحافظة': 'المحافظة', 'طبيعة_الأعمال': 'طبيعة الأعمال', 'اسم_الموقع': 'اسم الموقع', 'مشروع_اللوحات': 'مشروع_اللوحات', 'مشروع_الأصول_الثقافية': 'مشروع_الأصول_الثقافية', 'ترميم_وتأهيل_130_مسجد': 'ترميم_وتأهيل_130_مسجد', 'مشروع_البلدات_التراثية': 'مشروع_البلدات_التراثية', 'مشروع_حصر_المواقع_والمباني': 'مشروع_حصر_المواقع_والمباني', 'مشروع_أطلس_المساجد_التاريخية': 'مشروع_أطلس_المساجد_التاريخية', 'مشروع_الأتفاقية_الاتفاقية_الاط': 'مشروع_الأتفاقية_الاتفاقية_الاط', 'مشروع_أصول_الدرعية_التاريخية': 'مشروع_أصول_الدرعية_التاريخية', 'مشروع_قصر_ثريان': 'مشروع_قصر_ثريان', 'مشروع_مباني_سمحان': 'مشروع_مباني_سمحان', 'مشروع_قصر_بن_رقوش': 'مشروع_قصر_بن_رقوش', 'PHOTOS': 'PHOTOS', 'ID': 'ID', 'POINT_X': 'POINT_X', 'POINT_Y': 'POINT_Y', 'SITE_E_NAME': 'SITE_E_NAME', });
lyr_region_1.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'EMIRATE_ID': 'TextEdit', 'A_NAME': 'TextEdit', 'E_NAME': 'TextEdit', 'CAPITAL_ID': 'TextEdit', 'CLASS': 'TextEdit', 'POPULATION': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'الاسم': 'TextEdit', 'عددال': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr____2.set('fieldImages', {'OBJECTID': 'TextEdit', 'اسم_المشروع': 'TextEdit', 'المنطقة': 'TextEdit', 'المحافظة': 'TextEdit', 'طبيعة_الأعمال': 'TextEdit', 'اسم_الموقع': 'TextEdit', 'مشروع_اللوحات': 'TextEdit', 'مشروع_الأصول_الثقافية': 'TextEdit', 'ترميم_وتأهيل_130_مسجد': 'TextEdit', 'مشروع_البلدات_التراثية': 'TextEdit', 'مشروع_حصر_المواقع_والمباني': 'Range', 'مشروع_أطلس_المساجد_التاريخية': 'Range', 'مشروع_الأتفاقية_الاتفاقية_الاط': 'TextEdit', 'مشروع_أصول_الدرعية_التاريخية': 'TextEdit', 'مشروع_قصر_ثريان': 'TextEdit', 'مشروع_مباني_سمحان': 'TextEdit', 'مشروع_قصر_بن_رقوش': 'TextEdit', 'PHOTOS': 'ExternalResource', 'ID': 'TextEdit', 'POINT_X': 'TextEdit', 'POINT_Y': 'TextEdit', 'SITE_E_NAME': 'TextEdit', });
lyr__3.set('fieldImages', {'OBJECTID': 'TextEdit', 'اسم_المشروع': 'TextEdit', 'المنطقة': 'TextEdit', 'المحافظة': 'TextEdit', 'طبيعة_الأعمال': 'TextEdit', 'اسم_الموقع': 'TextEdit', 'مشروع_اللوحات': 'TextEdit', 'مشروع_الأصول_الثقافية': 'TextEdit', 'ترميم_وتأهيل_130_مسجد': 'TextEdit', 'مشروع_البلدات_التراثية': 'TextEdit', 'مشروع_حصر_المواقع_والمباني': 'Range', 'مشروع_أطلس_المساجد_التاريخية': 'Range', 'مشروع_الأتفاقية_الاتفاقية_الاط': 'TextEdit', 'مشروع_أصول_الدرعية_التاريخية': 'TextEdit', 'مشروع_قصر_ثريان': 'TextEdit', 'مشروع_مباني_سمحان': 'TextEdit', 'مشروع_قصر_بن_رقوش': 'TextEdit', 'PHOTOS': 'ExternalResource', 'ID': 'TextEdit', 'POINT_X': 'TextEdit', 'POINT_Y': 'TextEdit', 'SITE_E_NAME': 'TextEdit', });
lyr__4.set('fieldImages', {'OBJECTID': 'TextEdit', 'اسم_المشروع': 'TextEdit', 'المنطقة': 'TextEdit', 'المحافظة': 'TextEdit', 'طبيعة_الأعمال': 'TextEdit', 'اسم_الموقع': 'TextEdit', 'مشروع_اللوحات': 'TextEdit', 'مشروع_الأصول_الثقافية': 'TextEdit', 'ترميم_وتأهيل_130_مسجد': 'TextEdit', 'مشروع_البلدات_التراثية': 'TextEdit', 'مشروع_حصر_المواقع_والمباني': 'Range', 'مشروع_أطلس_المساجد_التاريخية': 'Range', 'مشروع_الأتفاقية_الاتفاقية_الاط': 'TextEdit', 'مشروع_أصول_الدرعية_التاريخية': 'TextEdit', 'مشروع_قصر_ثريان': 'TextEdit', 'مشروع_مباني_سمحان': 'TextEdit', 'مشروع_قصر_بن_رقوش': 'TextEdit', 'PHOTOS': 'ExternalResource', 'ID': 'TextEdit', 'POINT_X': 'TextEdit', 'POINT_Y': 'TextEdit', 'SITE_E_NAME': 'TextEdit', });
lyr__5.set('fieldImages', {'OBJECTID': 'TextEdit', 'اسم_المشروع': 'TextEdit', 'المنطقة': 'TextEdit', 'المحافظة': 'TextEdit', 'طبيعة_الأعمال': 'TextEdit', 'اسم_الموقع': 'TextEdit', 'مشروع_اللوحات': 'TextEdit', 'مشروع_الأصول_الثقافية': 'TextEdit', 'ترميم_وتأهيل_130_مسجد': 'TextEdit', 'مشروع_البلدات_التراثية': 'TextEdit', 'مشروع_حصر_المواقع_والمباني': 'Range', 'مشروع_أطلس_المساجد_التاريخية': 'Range', 'مشروع_الأتفاقية_الاتفاقية_الاط': 'TextEdit', 'مشروع_أصول_الدرعية_التاريخية': 'TextEdit', 'مشروع_قصر_ثريان': 'TextEdit', 'مشروع_مباني_سمحان': 'TextEdit', 'مشروع_قصر_بن_رقوش': 'TextEdit', 'PHOTOS': 'ExternalResource', 'ID': 'TextEdit', 'POINT_X': 'TextEdit', 'POINT_Y': 'TextEdit', 'SITE_E_NAME': 'TextEdit', });
lyr_region_1.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'EMIRATE_ID': 'no label', 'A_NAME': 'no label', 'E_NAME': 'no label', 'CAPITAL_ID': 'no label', 'CLASS': 'no label', 'POPULATION': 'no label', 'SHAPE_Leng': 'no label', 'الاسم': 'no label', 'عددال': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr____2.set('fieldLabels', {'OBJECTID': 'hidden field', 'اسم_المشروع': 'inline label - visible with data', 'المنطقة': 'inline label - visible with data', 'المحافظة': 'inline label - visible with data', 'طبيعة_الأعمال': 'inline label - visible with data', 'اسم_الموقع': 'inline label - visible with data', 'مشروع_اللوحات': 'hidden field', 'مشروع_الأصول_الثقافية': 'hidden field', 'ترميم_وتأهيل_130_مسجد': 'hidden field', 'مشروع_البلدات_التراثية': 'hidden field', 'مشروع_حصر_المواقع_والمباني': 'hidden field', 'مشروع_أطلس_المساجد_التاريخية': 'hidden field', 'مشروع_الأتفاقية_الاتفاقية_الاط': 'hidden field', 'مشروع_أصول_الدرعية_التاريخية': 'hidden field', 'مشروع_قصر_ثريان': 'hidden field', 'مشروع_مباني_سمحان': 'hidden field', 'مشروع_قصر_بن_رقوش': 'hidden field', 'PHOTOS': 'header label - visible with data', 'ID': 'inline label - visible with data', 'POINT_X': 'hidden field', 'POINT_Y': 'hidden field', 'SITE_E_NAME': 'hidden field', });
lyr__3.set('fieldLabels', {'OBJECTID': 'hidden field', 'اسم_المشروع': 'inline label - visible with data', 'المنطقة': 'inline label - visible with data', 'المحافظة': 'inline label - visible with data', 'طبيعة_الأعمال': 'inline label - visible with data', 'اسم_الموقع': 'inline label - visible with data', 'مشروع_اللوحات': 'hidden field', 'مشروع_الأصول_الثقافية': 'hidden field', 'ترميم_وتأهيل_130_مسجد': 'hidden field', 'مشروع_البلدات_التراثية': 'hidden field', 'مشروع_حصر_المواقع_والمباني': 'hidden field', 'مشروع_أطلس_المساجد_التاريخية': 'hidden field', 'مشروع_الأتفاقية_الاتفاقية_الاط': 'hidden field', 'مشروع_أصول_الدرعية_التاريخية': 'hidden field', 'مشروع_قصر_ثريان': 'hidden field', 'مشروع_مباني_سمحان': 'hidden field', 'مشروع_قصر_بن_رقوش': 'hidden field', 'PHOTOS': 'header label - visible with data', 'ID': 'inline label - visible with data', 'POINT_X': 'hidden field', 'POINT_Y': 'hidden field', 'SITE_E_NAME': 'hidden field', });
lyr__4.set('fieldLabels', {'OBJECTID': 'hidden field', 'اسم_المشروع': 'inline label - visible with data', 'المنطقة': 'inline label - visible with data', 'المحافظة': 'inline label - visible with data', 'طبيعة_الأعمال': 'inline label - visible with data', 'اسم_الموقع': 'inline label - visible with data', 'مشروع_اللوحات': 'hidden field', 'مشروع_الأصول_الثقافية': 'hidden field', 'ترميم_وتأهيل_130_مسجد': 'hidden field', 'مشروع_البلدات_التراثية': 'hidden field', 'مشروع_حصر_المواقع_والمباني': 'hidden field', 'مشروع_أطلس_المساجد_التاريخية': 'hidden field', 'مشروع_الأتفاقية_الاتفاقية_الاط': 'hidden field', 'مشروع_أصول_الدرعية_التاريخية': 'hidden field', 'مشروع_قصر_ثريان': 'hidden field', 'مشروع_مباني_سمحان': 'hidden field', 'مشروع_قصر_بن_رقوش': 'hidden field', 'PHOTOS': 'header label - visible with data', 'ID': 'inline label - visible with data', 'POINT_X': 'hidden field', 'POINT_Y': 'hidden field', 'SITE_E_NAME': 'hidden field', });
lyr__5.set('fieldLabels', {'OBJECTID': 'hidden field', 'اسم_المشروع': 'inline label - visible with data', 'المنطقة': 'inline label - visible with data', 'المحافظة': 'inline label - visible with data', 'طبيعة_الأعمال': 'inline label - visible with data', 'اسم_الموقع': 'inline label - visible with data', 'مشروع_اللوحات': 'hidden field', 'مشروع_الأصول_الثقافية': 'hidden field', 'ترميم_وتأهيل_130_مسجد': 'hidden field', 'مشروع_البلدات_التراثية': 'hidden field', 'مشروع_حصر_المواقع_والمباني': 'hidden field', 'مشروع_أطلس_المساجد_التاريخية': 'hidden field', 'مشروع_الأتفاقية_الاتفاقية_الاط': 'hidden field', 'مشروع_أصول_الدرعية_التاريخية': 'hidden field', 'مشروع_قصر_ثريان': 'hidden field', 'مشروع_مباني_سمحان': 'hidden field', 'مشروع_قصر_بن_رقوش': 'hidden field', 'PHOTOS': 'header label - visible with data', 'ID': 'inline label - visible with data', 'POINT_X': 'hidden field', 'POINT_Y': 'hidden field', 'SITE_E_NAME': 'hidden field', });
lyr__5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});