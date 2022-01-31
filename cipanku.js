var markers = [];
var map;

$(document).ready(function() {  
  
    map = L.map('map-cipanku', {
        crs: L.CRS.Simple,
        attributionControl: false,
        minZoom: 1,
        preferCanvas: true
    });
  
  var bounds = [[0,0], [1000,1000]];
  var image = L.imageOverlay('images/maps/cipanku.png', bounds).addTo(map);
  map.fitBounds(bounds);
  
  L.control.mousePosition().addTo(map);

  var TemMarker = L.Icon.extend({
    options: {
        shadowUrl: '',
        iconSize:     [39, 51], // size of the icon
        shadowSize:   [0, 0], // size of the shadow
        iconAnchor:   [22, 51], // point of the icon which will correspond to marker's location
        shadowAnchor: [0, 0],  // the same for the shadow
        popupAnchor:  [19, 0], // point from which the popup should open relative to the iconAnchor
        tooltipAnchor: [24, -30]
    }
  });
  var npcGenericIcon = new TemMarker({iconUrl: 'images/icons/npc.png'});
  var npcMovingIcon = new TemMarker({iconUrl: 'images/icons/npc-moving.png'});
  var npcVendorIcon = new TemMarker({iconUrl: 'images/icons/npc-vendor.png'});
  var npcClothingIcon = new TemMarker({iconUrl: 'images/icons/npc-clothing.png'});
  var npcFurnitureIcon = new TemMarker({iconUrl: 'images/icons/npc-furniture.png'});
  var npcCombatIcon = new TemMarker({iconUrl: 'images/icons/npc-combat.png'});
  var npcMovingCombatIcon = new TemMarker({iconUrl: 'images/icons/npc-moving-combat.png'});
  var npcProfessorKonstantinosIcon = new TemMarker({iconUrl: 'images/icons/professor-konstantinos.png'});
  var npcAdiaTurayIcon = new TemMarker({iconUrl: 'images/icons/adia-turay.png'});  
  
  var temporiumvendor = L.marker([331, 186.56], {title: 'temporiumvendor', icon: npcVendorIcon}).bindTooltip('Temporium Vendor', {className: 'tooltip'}).addTo(map);
  temporiumvendor._icon.classList.add('temporiumvendor');
  temporiumvendor._icon.classList.add('vendor');
  markers.push(temporiumvendor);
  var aiko = L.marker([329.13, 253], {title: 'aiko', icon: npcGenericIcon}).bindTooltip('Aiko', {className: 'tooltip'}).addTo(map);
  aiko._icon.classList.add('aiko');
  markers.push(aiko);
  var hideyo = L.marker([330.5, 195.75], {title: 'hideyo', icon: npcMovingIcon}).bindTooltip('Hideyo', {className: 'tooltip'}).addTo(map);
  hideyo._icon.classList.add('hideyo');
  hideyo._icon.classList.add('moving');
  markers.push(hideyo);
  var satoshi = L.marker([247, 231.63], {title: 'satoshi', icon: npcGenericIcon}).bindTooltip('Satoshi', {className: 'tooltip'}).addTo(map);
  satoshi._icon.classList.add('satoshi');
  markers.push(satoshi);
  var saeko = L.marker([257.25, 231.5], {title: 'saeko', icon: npcGenericIcon}).bindTooltip('Saeko', {className: 'tooltip'}).addTo(map);
  saeko._icon.classList.add('saeko');
  markers.push(saeko);
  var mirai = L.marker([295.5, 307.38], {title: 'mirai', icon: npcGenericIcon}).bindTooltip('Mirai', {className: 'tooltip'}).addTo(map);
  mirai._icon.classList.add('mirai');
  markers.push(mirai);
  var nami = L.marker([284.5, 262.38], {title: 'nami', icon: npcGenericIcon}).bindTooltip('Nami', {className: 'tooltip'}).addTo(map);
  nami._icon.classList.add('nami');
  markers.push(nami);
  
  // Use the tool over at https://codepen.io/susanpallmann/full/eYzbOyJ to format entries easier!
  
  //var name = L.marker([00, 00], {title: name, icon: npcGenericIcon}).bindTooltip("name", {className: 'tooltip'}).addTo(map);
  //name._icon.classList.add("testclass");
  //markers.push(name);
  
  function listSearchResults(query) {
    $('#results').empty();
    var counter = 0; 
    for (var i in markers){
      if (counter <= 4) {
        var markerID = markers[i].options.title;
        var markerToolTip = markers[i].getTooltip();
        var content = markerToolTip.getContent();
        var source = markers[i].options.icon.options.iconUrl;
        if (markerID.includes(query)){
          counter += 1;
          $('#results').append('<li><a href="" class="result-link" id="' + markerID + '"><img class="marker-small" src="' + source + '" alt="" /><p>' + content + '</p></a></li>');
        }
      }
    }
  }
  
  function refreshSearch(query) {
    $('.leaflet-marker-icon').addClass('hidden-icon');
    $('*[class*=' + query + ']').removeClass('hidden-icon');
  }
  
  $("#search").bind('input', function(){
    let value = $("#search").val();
    value = value.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '').toLowerCase();
    if (value === '') {
      $('.leaflet-marker-icon').removeClass('hidden-icon');
      $('#results').empty();
    } else {
      refreshSearch(value);
      listSearchResults(value);
    }
  });
  
  $('input[type="checkbox"]').bind('input', function(){
    $('.leaflet-marker-icon').addClass('hidden-icon');
    if ($('input:checkbox:checked').length) {
      $('input:checkbox:checked').each(function(index) {
        let key = $(this).val();
        console.log(key);
        $('.' + key).removeClass('hidden-icon');
      });
    } else {
      $('.leaflet-marker-icon').removeClass('hidden-icon');
    }
  });
});

$(document).on('click','.result-link',function(e){
  function markerFunction(id){
    for (var i in markers){
      var markerID = markers[i].options.title;
      if (markerID === id){
        markers[i].openTooltip();
        map.panTo(markers[i].getLatLng());
      } else {
        markers[i].closeTooltip();
      }
    }
  }
  markerFunction($(this).attr('id'));
  e.preventDefault();
}); 
