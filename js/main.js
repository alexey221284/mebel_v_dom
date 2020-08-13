ymaps.ready(function () {
    let myMap = new ymaps.Map('map', {
        center: [51.556432, 46.045476],
        zoom: 17
    }, {
        searchControlProvider: 'yandex#search'
    })
});

ymaps.ready(init);