// Cor 55.938954, 37.750469

corX =  55.938954;
corY =  37.750469;

ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [corX, corY], // In Moscow
        zoom: 17
    });

    // Create mark
    var myPlacemark = new ymaps.Placemark([corX, corY], {
        hintContent: 'ViColor',
        balloonContent: 'ViColor\nPlakhov&CO Logistics'
    });

    // Add mark on map
    myMap.geoObjects.add(myPlacemark);
}