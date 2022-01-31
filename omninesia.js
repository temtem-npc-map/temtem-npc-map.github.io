var markers = [];
var map;

$(document).ready(function() {  
  
    map = L.map('map-omninesia', {
        crs: L.CRS.Simple,
        attributionControl: false,
        minZoom: 1,
        preferCanvas: true
    });
  
  var bounds = [[0,0], [1000,1000]];
  var image = L.imageOverlay('images/maps/omninesia.png', bounds).addTo(map);
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
  
  var bwanbale = L.marker([568.38, 302], {title: 'bwanbale', icon: npcGenericIcon}).bindTooltip('Bwanbale', {className: 'tooltip'}).addTo(map);
  bwanbale._icon.classList.add('bwanbale');
  markers.push(bwanbale);
  var touristinformation = L.marker([861.42, 797.22], {title: 'touristinformation', icon: npcMovingIcon}).bindTooltip('Tourist Information', {className: 'tooltip'}).addTo(map);
  touristinformation._icon.classList.add('touristinformation');
  touristinformation._icon.classList.add('moving');
  markers.push(touristinformation);
  var nangalocal = L.marker([865.04, 772.71], {title: 'nangalocal', icon: npcGenericIcon}).bindTooltip('Nanga Local', {className: 'tooltip'}).addTo(map);
  nangalocal._icon.classList.add('nangalocal');
  markers.push(nangalocal);
  var nakkiah = L.marker([855.64, 758.26], {title: 'nakkiah', icon: npcGenericIcon}).bindTooltip('Nakkiah', {className: 'tooltip'}).addTo(map);
  nakkiah._icon.classList.add('nakkiah');
  markers.push(nakkiah);
  var nanguitamer = L.marker([892.62, 709.13], {title: 'nanguitamer', icon: npcGenericIcon}).bindTooltip('Nangui Tamer', {className: 'tooltip'}).addTo(map);
  nanguitamer._icon.classList.add('nanguitamer');
  markers.push(nanguitamer);
  var mokupunitamer = L.marker([889.62, 711.75], {title: 'mokupunitamer', icon: npcGenericIcon}).bindTooltip('Mokupuni Tamer', {className: 'tooltip'}).addTo(map);
  mokupunitamer._icon.classList.add('mokupunitamer');
  markers.push(mokupunitamer);
  var newspaperboy = L.marker([905.92, 690.84], {title: 'newspaperboy', icon: npcMovingIcon}).bindTooltip('Newspaper Boy', {className: 'tooltip'}).addTo(map);
  newspaperboy._icon.classList.add('newspaperboy');
  newspaperboy._icon.classList.add('moving');
  markers.push(newspaperboy);
  var matelita = L.marker([902.58, 725.61], {title: 'matelita', icon: npcFurnitureIcon}).bindTooltip('Matelita', {className: 'tooltip'}).addTo(map);
  matelita._icon.classList.add('matelita');
  matelita._icon.classList.add('furniture');
  markers.push(matelita);
  var temporiumvendor = L.marker([933.68, 690.69], {title: 'temporiumvendor', icon: npcVendorIcon}).bindTooltip('Temporium Vendor', {className: 'tooltip'}).addTo(map);
  temporiumvendor._icon.classList.add('temporiumvendor');
  temporiumvendor._icon.classList.add('vendor');
  markers.push(temporiumvendor);
  var braggingtamer = L.marker([933.68, 692.69], {title: 'braggingtamer', icon: npcGenericIcon}).bindTooltip('Bragging Tamer', {className: 'tooltip'}).addTo(map);
  braggingtamer._icon.classList.add('braggingtamer');
  markers.push(braggingtamer);
  var chattytamer = L.marker([933.68, 689.69], {title: 'chattytamer', icon: npcGenericIcon}).bindTooltip('Chatty Tamer', {className: 'tooltip'}).addTo(map);
  chattytamer._icon.classList.add('chattytamer');
  markers.push(chattytamer);
  var elderlyomninesian = L.marker([875.31, 678.81], {title: 'elderlyomninesian', icon: npcGenericIcon}).bindTooltip('Elderly Omninesian', {className: 'tooltip'}).addTo(map);
  elderlyomninesian._icon.classList.add('elderlyomninesian');
  markers.push(elderlyomninesian);
  var indecisiveshopper = L.marker([881.56, 674.23], {title: 'indecisiveshopper', icon: npcGenericIcon}).bindTooltip('Indecisive Shopper', {className: 'tooltip'}).addTo(map);
  indecisiveshopper._icon.classList.add('indecisiveshopper');
  markers.push(indecisiveshopper);
  var nanguifashionista = L.marker([889.56, 658.35], {title: 'nanguifashionista', icon: npcGenericIcon}).bindTooltip('Nangui Fashionista', {className: 'tooltip'}).addTo(map);
  nanguifashionista._icon.classList.add('nanguifashionista');
  markers.push(nanguifashionista);
  var mahi = L.marker([906.68, 658.99], {title: 'mahi', icon: npcClothingIcon}).bindTooltip('Mahi', {className: 'tooltip'}).addTo(map);
  mahi._icon.classList.add('mahi');
  mahi._icon.classList.add('clothing');
  markers.push(mahi);
  var cluelessshopper = L.marker([906.68, 660.99], {title: 'cluelessshopper', icon: npcGenericIcon}).bindTooltip('Clueless Shopper', {className: 'tooltip'}).addTo(map);
  cluelessshopper._icon.classList.add('cluelessshopper');
  markers.push(cluelessshopper);
  
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
