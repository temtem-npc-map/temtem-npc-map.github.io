var markers = [];
var map;

$(document).ready(function() {  
  
    map = L.map('map-deniz', {
        crs: L.CRS.Simple,
        attributionControl: false,
        minZoom: 1,
        preferCanvas: true
    });
  
  var bounds = [[0,0], [1000,1000]];
  var image = L.imageOverlay('images/maps/deniz.png', bounds).addTo(map);
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
  
  var agustin = L.marker([638.13, 206.97], {title: 'agustin', icon: npcGenericIcon}).bindTooltip('Agustin', {className: 'tooltip'}).addTo(map);
  agustin._icon.classList.add('agustin');
  markers.push(agustin);
  var denizanlongshorewoman = L.marker([650, 235.09], {title: 'denizanlongshorewoman', icon: npcGenericIcon}).bindTooltip('Denizan Longshorewoman', {className: 'tooltip'}).addTo(map);
  denizanlongshorewoman._icon.classList.add('denizanlongshorewoman');
  markers.push(denizanlongshorewoman);
  var denizanlongshoreman = L.marker([648.31, 233.53], {title: 'denizanlongshoreman', icon: npcGenericIcon}).bindTooltip('Denizan Longshoreman', {className: 'tooltip'}).addTo(map);
  denizanlongshoreman._icon.classList.add('denizanlongshoreman');
  markers.push(denizanlongshoreman);
  var denizanforeman = L.marker([650.94, 237.53], {title: 'denizanforeman', icon: npcGenericIcon}).bindTooltip('Denizan Foreman', {className: 'tooltip'}).addTo(map);
  denizanforeman._icon.classList.add('denizanforeman');
  markers.push(denizanforeman);
  var terminalemployee = L.marker([648, 258.83], {title: 'terminalemployee', icon: npcGenericIcon}).bindTooltip('Terminal Employee', {className: 'tooltip'}).addTo(map);
  terminalemployee._icon.classList.add('terminalemployee');
  markers.push(terminalemployee);
  var travelagency = L.marker([623.63, 280.58], {title: 'travelagency', icon: npcGenericIcon}).bindTooltip('Travel Agency', {className: 'tooltip'}).addTo(map);
  travelagency._icon.classList.add('travelagency');
  markers.push(travelagency);
  var luca = L.marker([657.38, 289.58], {title: 'luca', icon: npcMovingIcon}).bindTooltip('Luca', {className: 'tooltip'}).addTo(map);
  luca._icon.classList.add('luca');
  luca._icon.classList.add('moving');
  markers.push(luca);
  var sleepyarissolan = L.marker([618.81, 290.51], {title: 'sleepyarissolan', icon: npcMovingIcon}).bindTooltip('Sleepy Arissolan', {className: 'tooltip'}).addTo(map);
  sleepyarissolan._icon.classList.add('sleepyarissolan');
  sleepyarissolan._icon.classList.add('moving');
  markers.push(sleepyarissolan);
  var literarysnob = L.marker([628.06, 299.45], {title: 'literarysnob', icon: npcGenericIcon}).bindTooltip('Literary Snob', {className: 'tooltip'}).addTo(map);
  literarysnob._icon.classList.add('literarysnob');
  markers.push(literarysnob);
  var strollingarrisolan = L.marker([633.63, 304.13], {title: 'strollingarrisolan', icon: npcMovingIcon}).bindTooltip('Strolling Arrisolan', {className: 'tooltip'}).addTo(map);
  strollingarrisolan._icon.classList.add('strollingarrisolan');
  strollingarrisolan._icon.classList.add('moving');
  markers.push(strollingarrisolan);
  
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
