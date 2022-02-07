var markers = [];
var map;

$(document).ready(function() {  
  
    map = L.map('map-arbury', {
        crs: L.CRS.Simple,
        attributionControl: false,
        minZoom: 1,
        preferCanvas: true
    });
  
  var bounds = [[0,0], [1000,1000]];
  var image = L.imageOverlay('images/maps/arbury.png', bounds).addTo(map);
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
  
  var stevedoresteven = L.marker([310.98, 263.8], {title: 'stevedoresteven', icon: npcMovingIcon}).bindTooltip('Stevedore Steven', {className: 'tooltip'}).addTo(map);
  stevedoresteven._icon.classList.add('stevedoresteven');
  stevedoresteven._icon.classList.add('moving');
  markers.push(stevedoresteven);
  var missphileas = L.marker([307.87, 276.92], {title: 'missphileas', icon: npcGenericIcon}).bindTooltip('Miss Phileas', {className: 'tooltip'}).addTo(map);
  missphileas._icon.classList.add('missphileas');
  markers.push(missphileas);
  var tournamentjudge = L.marker([366.63, 310.1], {title: 'tournamentjudge', icon: npcGenericIcon}).bindTooltip('Tournament Judge', {className: 'tooltip'}).addTo(map);
  tournamentjudge._icon.classList.add('tournamentjudge');
  markers.push(tournamentjudge);
  var james = L.marker([370.25, 325.62], {title: 'james', icon: npcCombatIcon}).bindTooltip('James', {className: 'tooltip'}).addTo(map);
  james._icon.classList.add('james');
  james._icon.classList.add('combat');
  markers.push(james);
  var tournamentjudge = L.marker([369.56, 334.68], {title: 'tournamentjudge', icon: npcGenericIcon}).bindTooltip('Tournament Judge', {className: 'tooltip'}).addTo(map);
  tournamentjudge._icon.classList.add('tournamentjudge');
  markers.push(tournamentjudge);
  var endaira = L.marker([378.19, 342.37], {title: 'endaira', icon: npcGenericIcon}).bindTooltip('"Endaira"', {className: 'tooltip'}).addTo(map);
  endaira._icon.classList.add('endaira');
  markers.push(endaira);
  var endaira = L.marker([378.25, 345.25], {title: 'endaira', icon: npcCombatIcon}).bindTooltip('Endaira?', {className: 'tooltip'}).addTo(map);
  endaira._icon.classList.add('endaira');
  endaira._icon.classList.add('combat');
  markers.push(endaira);
  var nicola = L.marker([354.13, 346], {title: 'nicola', icon: npcCombatIcon}).bindTooltip('Nicola', {className: 'tooltip'}).addTo(map);
  nicola._icon.classList.add('nicola');
  nicola._icon.classList.add('combat');
  markers.push(nicola);
  var lochburgcollegereception = L.marker([359.63, 356.37], {title: 'lochburgcollegereception', icon: npcGenericIcon}).bindTooltip('Lochburg College Reception', {className: 'tooltip'}).addTo(map);
  lochburgcollegereception._icon.classList.add('lochburgcollegereception');
  markers.push(lochburgcollegereception);
  var erii = L.marker([359.63, 359.37], {title: 'erii', icon: npcGenericIcon}).bindTooltip('Erii', {className: 'tooltip'}).addTo(map);
  erii._icon.classList.add('erii');
  markers.push(erii);
  var sae = L.marker([359.63, 362.37], {title: 'sae', icon: npcGenericIcon}).bindTooltip('Sae', {className: 'tooltip'}).addTo(map);
  sae._icon.classList.add('sae');
  markers.push(sae);
  var abioye = L.marker([359.63, 365.37], {title: 'abioye', icon: npcGenericIcon}).bindTooltip('Abioye', {className: 'tooltip'}).addTo(map);
  abioye._icon.classList.add('abioye');
  markers.push(abioye);
  var leticia = L.marker([364.63, 356.37], {title: 'leticia', icon: npcGenericIcon}).bindTooltip('Leticia', {className: 'tooltip'}).addTo(map);
  leticia._icon.classList.add('leticia');
  markers.push(leticia);
  var sianiu = L.marker([364.63, 359.37], {title: 'sianiu', icon: npcGenericIcon}).bindTooltip('Sianiu', {className: 'tooltip'}).addTo(map);
  sianiu._icon.classList.add('sianiu');
  markers.push(sianiu);
  var profwardley = L.marker([364.63, 362.37], {title: 'profwardley', icon: npcGenericIcon}).bindTooltip('Prof. Wardley', {className: 'tooltip'}).addTo(map);
  profwardley._icon.classList.add('profwardley');
  markers.push(profwardley);
  var profconsuelo = L.marker([364.63, 365.37], {title: 'profconsuelo', icon: npcGenericIcon}).bindTooltip('Prof Consuelo', {className: 'tooltip'}).addTo(map);
  profconsuelo._icon.classList.add('profconsuelo');
  markers.push(profconsuelo);
  var ollie = L.marker([369.63, 356.37], {title: 'ollie', icon: npcGenericIcon}).bindTooltip('Ollie', {className: 'tooltip'}).addTo(map);
  ollie._icon.classList.add('ollie');
  markers.push(ollie);
  var paolo = L.marker([369.63, 359.37], {title: 'paolo', icon: npcGenericIcon}).bindTooltip('Paolo', {className: 'tooltip'}).addTo(map);
  paolo._icon.classList.add('paolo');
  markers.push(paolo);
  var megan = L.marker([369.63, 362.37], {title: 'megan', icon: npcGenericIcon}).bindTooltip('Megan', {className: 'tooltip'}).addTo(map);
  megan._icon.classList.add('megan');
  markers.push(megan);
  var alynna = L.marker([359.63, 250.4], {title: 'alynna', icon: npcGenericIcon}).bindTooltip('Alynna', {className: 'tooltip'}).addTo(map);
  alynna._icon.classList.add('alynna');
  markers.push(alynna);
  var alanna = L.marker([359.63, 253.4], {title: 'alanna', icon: npcGenericIcon}).bindTooltip('Alanna', {className: 'tooltip'}).addTo(map);
  alanna._icon.classList.add('alanna');
  markers.push(alanna);
  var guglielmo = L.marker([359.63, 256.4], {title: 'guglielmo', icon: npcGenericIcon}).bindTooltip('Guglielmo', {className: 'tooltip'}).addTo(map);
  guglielmo._icon.classList.add('guglielmo');
  markers.push(guglielmo);
  var josephine = L.marker([359.63, 259.4], {title: 'josephine', icon: npcGenericIcon}).bindTooltip('Josephine', {className: 'tooltip'}).addTo(map);
  josephine._icon.classList.add('josephine');
  markers.push(josephine);
  var profjudith = L.marker([364.63, 250.4], {title: 'profjudith', icon: npcGenericIcon}).bindTooltip('Prof. Judith', {className: 'tooltip'}).addTo(map);
  profjudith._icon.classList.add('profjudith');
  markers.push(profjudith);
  var blake = L.marker([364.63, 253.4], {title: 'blake', icon: npcGenericIcon}).bindTooltip('Blake', {className: 'tooltip'}).addTo(map);
  blake._icon.classList.add('blake');
  markers.push(blake);
  
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
