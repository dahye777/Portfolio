// c843f38e0ea86de237b21137a0dba9c2


//center: new kakao.maps.LatLng(37.4868302, 126.7829877), // 지도의 중심좌표
const mapContainer = document.getElementById("map");
const branchBtn = document.querySelectorAll(".branch li");

var mapOptions = { //지도를 생성할 때 필요한 기본 옵션
    center: new kakao.maps.LatLng(37.4868302, 126.7829877), //지도의 중심좌표.
    level: 3 //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(mapContainer, mapOptions);
//지도를 표시할 div와 지도옵션으로 지도를 최종 생성하는 코드

const markerOptions = [
    {
        title: "본점", //제목
        latlng: new kakao.maps.LatLng(37.4868302, 126.7829877), //지도의 위치
        imgSrc: 'img/marker1.png', //마커이미지 경로
        imgSize: new kakao.maps.Size(232, 99), //마커이미지 크기
        imgPos: { offset: new kakao.maps.Point(116, 99) }, //마커 이미지 위치
        button: branchBtn[0] //마커와 매치할 버튼의 인덱스
    }, {
        title: "지점1", //제목
        latlng: new kakao.maps.LatLng(37.491649, 126.785895), //지도의 위치
        imgSrc: 'img/marker2.png', //마커이미지 경로
        imgSize: new kakao.maps.Size(232, 99), //마커이미지 크기
        imgPos: { offset: new kakao.maps.Point(116, 99) }, //마커 이미지 위치
        button: branchBtn[1] //마커와 매치할 버튼의 인덱스
    }, {
        title: "지점2", //제목
        latlng: new kakao.maps.LatLng(37.3766941, 126.6671667), //지도의 위치
        imgSrc: 'img/marker3.png', //마커이미지 경로
        imgSize: new kakao.maps.Size(232, 99), //마커이미지 크기
        imgPos: { offset: new kakao.maps.Point(116, 99) }, //마커 이미지 위치
        button: branchBtn[2] //마커와 매치할 버튼의 인덱스
    }
];

//위의 해당 마커옵션들에 반복을 돌면서 마커 정보를 등록합니다
markerOptions.forEach((el, index) => {
    const marker = new kakao.maps.Marker({
        map: map, //앞의 map은 Marker생성시 필요한 정보를 받는 변수이고,
        //뒤에 map 은 우리가 위에서 선언한 map변수입니다
        position: el.latlng, //지도의 위치, 위도 경도값을 
        //markerOptions에 담은 latlng을 객체 배열에 접근해서 가지고 옵니다
        title: el.title,
        image: new kakao.maps.MarkerImage(el.imgSrc, el.imgSize, el.imgPos)
        //카카오맵의 MarkerImage라는 매서드를 사용하는데 매서드에 필요한 값은
        //marketOptions의 객체배열에 접근해서 가지고 옵니다
    })
    //우리는 버튼을 클릭했을때 지점이면 지점, 본점이면 본점으로 이동해야합니다
    //버튼을 또 활성화
    el.button.addEventListener("click", (e) => {
        e.preventDefault();

        branchBtn.forEach((el)=>{el.classList.remove("on")});
        el.button.classList.add("on");

        moveTo(el.latlng);
    })

})

//함수가 위치시킬 값을 매개로 받아서
function moveTo(target) {
    const moveLatlng = target;
    map.setCenter(moveLatlng); //지도를 중심으로 최종 이동시키는 함수
}