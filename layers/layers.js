ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([39.203430, 22.879669, 41.954442, 24.404024]);
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
var format_Sheet1_XYTableToPoint_2 = new ol.format.GeoJSON();
var features_Sheet1_XYTableToPoint_2 = format_Sheet1_XYTableToPoint_2.readFeatures(json_Sheet1_XYTableToPoint_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Sheet1_XYTableToPoint_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sheet1_XYTableToPoint_2.addFeatures(features_Sheet1_XYTableToPoint_2);
var lyr_Sheet1_XYTableToPoint_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sheet1_XYTableToPoint_2, 
                style: style_Sheet1_XYTableToPoint_2,
                popuplayertitle: 'Sheet1_XYTableToPoint',
                interactive: true,
    title: 'Sheet1_XYTableToPoint<br />\
    <img src="styles/legend/Sheet1_XYTableToPoint_2_0.png" /> الباحة<br />\
    <img src="styles/legend/Sheet1_XYTableToPoint_2_1.png" /> الجوف<br />\
    <img src="styles/legend/Sheet1_XYTableToPoint_2_2.png" /> الحدود الشمالية<br />\
    <img src="styles/legend/Sheet1_XYTableToPoint_2_3.png" /> الرياض<br />\
    <img src="styles/legend/Sheet1_XYTableToPoint_2_4.png" /> القصيم<br />\
    <img src="styles/legend/Sheet1_XYTableToPoint_2_5.png" /> المدينة المنورة<br />\
    <img src="styles/legend/Sheet1_XYTableToPoint_2_6.png" /> المنطقة الشرقية<br />\
    <img src="styles/legend/Sheet1_XYTableToPoint_2_7.png" /> تبوك<br />\
    <img src="styles/legend/Sheet1_XYTableToPoint_2_8.png" /> جازان<br />\
    <img src="styles/legend/Sheet1_XYTableToPoint_2_9.png" /> حائل<br />\
    <img src="styles/legend/Sheet1_XYTableToPoint_2_10.png" /> عسير<br />\
    <img src="styles/legend/Sheet1_XYTableToPoint_2_11.png" /> مكة المكرمة<br />\
    <img src="styles/legend/Sheet1_XYTableToPoint_2_12.png" /> نجران<br />\
    <img src="styles/legend/Sheet1_XYTableToPoint_2_13.png" /> <br />' });

lyr_GoogleRoad_0.setVisible(true);lyr_region_1.setVisible(true);lyr_Sheet1_XYTableToPoint_2.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_region_1,lyr_Sheet1_XYTableToPoint_2];
lyr_region_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'EMIRATE_ID': 'EMIRATE_ID', 'A_NAME': 'A_NAME', 'E_NAME': 'E_NAME', 'CAPITAL_ID': 'CAPITAL_ID', 'CLASS': 'CLASS', 'POPULATION': 'POPULATION', 'SHAPE_Leng': 'SHAPE_Leng', 'الاسم': 'الاسم', 'عددال': 'عددال', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_Sheet1_XYTableToPoint_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'اسم_المشروع': 'اسم المشروع', 'المنطقة': 'المنطقة', 'المحافظة': 'المحافظة', 'طبيعة_الأعمال': 'طبيعة الأعمال', 'اسم_الموقع': 'اسم الموقع', 'مشروع_اللوحات': 'مشروع_اللوحات', 'مشروع_الأصول_الثقافية': 'مشروع_الأصول_الثقافية', 'ترميم_وتأهيل_130_مسجد': 'ترميم_وتأهيل_130_مسجد', 'مشروع_البلدات_التراثية': 'مشروع_البلدات_التراثية', 'مشروع_حصر_المواقع_والمباني': 'مشروع_حصر_المواقع_والمباني', 'مشروع_أطلس_المساجد_التاريخية': 'مشروع_أطلس_المساجد_التاريخية', 'مشروع_الأتفاقية_الاتفاقية_الاط': 'مشروع_الأتفاقية_الاتفاقية_الاط', 'مشروع_أصول_الدرعية_التاريخية': 'مشروع_أصول_الدرعية_التاريخية', 'مشروع_قصر_ثريان': 'مشروع_قصر_ثريان', 'مشروع_مباني_سمحان': 'مشروع_مباني_سمحان', 'مشروع_قصر_بن_رقوش': 'مشروع_قصر_بن_رقوش', 'PHOTOS': 'PHOTOS', 'ID': 'ID', 'POINT_X': 'POINT_X', 'POINT_Y': 'POINT_Y', 'SITE_E_NAME': 'SITE_E_NAME', });
lyr_region_1.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'EMIRATE_ID': 'TextEdit', 'A_NAME': 'TextEdit', 'E_NAME': 'TextEdit', 'CAPITAL_ID': 'TextEdit', 'CLASS': 'TextEdit', 'POPULATION': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'الاسم': 'TextEdit', 'عددال': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Sheet1_XYTableToPoint_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'اسم_المشروع': 'TextEdit', 'المنطقة': 'TextEdit', 'المحافظة': 'TextEdit', 'طبيعة_الأعمال': 'TextEdit', 'اسم_الموقع': 'TextEdit', 'مشروع_اللوحات': 'TextEdit', 'مشروع_الأصول_الثقافية': 'TextEdit', 'ترميم_وتأهيل_130_مسجد': 'TextEdit', 'مشروع_البلدات_التراثية': 'TextEdit', 'مشروع_حصر_المواقع_والمباني': 'Range', 'مشروع_أطلس_المساجد_التاريخية': 'Range', 'مشروع_الأتفاقية_الاتفاقية_الاط': 'TextEdit', 'مشروع_أصول_الدرعية_التاريخية': 'TextEdit', 'مشروع_قصر_ثريان': 'TextEdit', 'مشروع_مباني_سمحان': 'TextEdit', 'مشروع_قصر_بن_رقوش': 'TextEdit', 'PHOTOS': 'ExternalResource', 'ID': 'TextEdit', 'POINT_X': 'TextEdit', 'POINT_Y': 'TextEdit', 'SITE_E_NAME': 'TextEdit', });
lyr_region_1.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'EMIRATE_ID': 'no label', 'A_NAME': 'no label', 'E_NAME': 'no label', 'CAPITAL_ID': 'no label', 'CLASS': 'no label', 'POPULATION': 'no label', 'SHAPE_Leng': 'no label', 'الاسم': 'no label', 'عددال': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_Sheet1_XYTableToPoint_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'اسم_المشروع': 'inline label - visible with data', 'المنطقة': 'inline label - visible with data', 'المحافظة': 'inline label - visible with data', 'طبيعة_الأعمال': 'inline label - visible with data', 'اسم_الموقع': 'inline label - visible with data', 'مشروع_اللوحات': 'hidden field', 'مشروع_الأصول_الثقافية': 'hidden field', 'ترميم_وتأهيل_130_مسجد': 'hidden field', 'مشروع_البلدات_التراثية': 'hidden field', 'مشروع_حصر_المواقع_والمباني': 'hidden field', 'مشروع_أطلس_المساجد_التاريخية': 'hidden field', 'مشروع_الأتفاقية_الاتفاقية_الاط': 'hidden field', 'مشروع_أصول_الدرعية_التاريخية': 'hidden field', 'مشروع_قصر_ثريان': 'hidden field', 'مشروع_مباني_سمحان': 'hidden field', 'مشروع_قصر_بن_رقوش': 'hidden field', 'PHOTOS': 'header label - visible with data', 'ID': 'inline label - visible with data', 'POINT_X': 'hidden field', 'POINT_Y': 'hidden field', 'SITE_E_NAME': 'hidden field', });
lyr_Sheet1_XYTableToPoint_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});