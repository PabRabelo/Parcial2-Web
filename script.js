function loadGoogleMaps(apiKey, callback) {
    const url = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=${callback}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(scriptText => {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.text = scriptText;
            document.head.appendChild(script);
        })
        .catch(error => {
            console.error('Error loading Google Maps API:', error);
        });
}

function initMap() {
    var location = { lat: -34.397, lng: 150.644 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}


const apiKey = 'AIzaSyChOkChjGYE4_fRDSJuYBDUOS4EAxDFgsY';
window.initMap = initMap;  
loadGoogleMaps(apiKey, 'initMap');
