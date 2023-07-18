// gnb
const gnbItems = document.querySelectorAll(".gnb > li");

gnbItems.forEach(item => {
  item.addEventListener("mouseover", function() {
    document.querySelectorAll(".sub, .bg").forEach(element => {
      element.style.display = "block";
    });
  });
});

gnbItems.forEach(item => {
  item.addEventListener("mouseout", function() {
    document.querySelectorAll(".sub, .bg").forEach(element => {
      element.style.display = "none";
    });
  });
});




// location
// c843f38e0ea86de237b21137a0dba9c2


//center: new kakao.maps.LatLng(37.4868302, 126.7829877), // 지도의 중심좌표
const mapContainer = document.getElementById("map");
const branchBtn = document.querySelectorAll(".branch li");

var mapOptions = {
  center: new kakao.maps.LatLng(37.4868302, 126.7829877),
  level: 3
};

var map = new kakao.maps.Map(mapContainer, mapOptions);

const markerOptions = [
  {
    title: "Main Store",
    latlng: new kakao.maps.LatLng(37.5768578, 126.9889298),
    imgSrc: 'images/map/marker.png',
    imgSize: new kakao.maps.Size(99, 99),
    imgPos: { offset: new kakao.maps.Point(116, 99) },
    button: branchBtn[0]
  },
  {
    title: "Branch1",
    latlng: new kakao.maps.LatLng(37.491649, 126.785895),
    imgSrc: 'images/map/marker.png',
    imgSize: new kakao.maps.Size(99, 99),
    imgPos: { offset: new kakao.maps.Point(116, 99) },
    button: branchBtn[1]
  },
  {
    title: "Branch2",
    latlng: new kakao.maps.LatLng(37.3766941, 126.6671667),
    imgSrc: 'images/map/marker.png',
    imgSize: new kakao.maps.Size(99, 99),
    imgPos: { offset: new kakao.maps.Point(116, 99) },
    button: branchBtn[2]
  }
];

markerOptions.forEach((el, index) => {
  const marker = new kakao.maps.Marker({
    map: map,
    position: el.latlng,
    title: el.title,
    image: new kakao.maps.MarkerImage(el.imgSrc, el.imgSize, el.imgPos)
  });

  el.button.addEventListener("click", (e) => {
    e.preventDefault();

    branchBtn.forEach((btn) => {
      btn.classList.remove("on");
    });
    el.button.classList.add("on");

    moveTo(el.latlng);
  });
});

function moveTo(target) {
  const moveLatlng = target;
  map.setCenter(moveLatlng);
}

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.7128, lng: -74.0060 },
    zoom: 12
  });

  const placesService = new google.maps.places.PlacesService(map);

  document.getElementById("search-box").addEventListener("input", () => {
    const searchText = document.getElementById("search-box").value;

    const request = {
      query: searchText,
      fields: ["name", "geometry"]
    };

    placesService.findPlaceFromQuery(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        const place = results[0]; // Get the first result

        if (place.geometry && place.geometry.location) {
          const location = place.geometry.location;
          moveTo(location);
        }
      }
    });
  });
}
