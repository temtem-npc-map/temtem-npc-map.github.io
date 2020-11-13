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
  var travelagent = L.marker([623.63, 280.58], {title: 'travelagent', icon: npcMovingIcon}).bindTooltip('Travel Agent', {className: 'tooltip'}).addTo(map);
  travelagent._icon.classList.add('travelagent');
  travelagent._icon.classList.add('moving');
  markers.push(travelagent);
  var luca = L.marker([657.38, 289.58], {title: 'luca', icon: npcGenericIcon}).bindTooltip('Luca', {className: 'tooltip'}).addTo(map);
  luca._icon.classList.add('luca');
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
  var assistant = L.marker([807.25, 505.63], {title: 'assistant', icon: npcGenericIcon}).bindTooltip('Assistant', {className: 'tooltip'}).addTo(map);
  assistant._icon.classList.add('assistant');
  markers.push(assistant);
  var distressedarchaeologist = L.marker([788.56, 507.56], {title: 'distressedarchaeologist', icon: npcGenericIcon}).bindTooltip('Distressed Archaeologist', {className: 'tooltip'}).addTo(map);
  distressedarchaeologist._icon.classList.add('distressedarchaeologist');
  markers.push(distressedarchaeologist);
  var oriol = L.marker([811.25, 410.81], {title: 'oriol', icon: npcGenericIcon}).bindTooltip('Oriol', {className: 'tooltip'}).addTo(map);
  oriol._icon.classList.add('oriol');
  markers.push(oriol);
  var gabrielthegray = L.marker([806.25, 384.38], {title: 'gabrielthegray', icon: npcGenericIcon}).bindTooltip('Gabriel the Gray', {className: 'tooltip'}).addTo(map);
  gabrielthegray._icon.classList.add('gabrielthegray');
  markers.push(gabrielthegray);
  var nicoletta = L.marker([820.75, 370.94], {title: 'nicoletta', icon: npcGenericIcon}).bindTooltip('Nicoletta', {className: 'tooltip'}).addTo(map);
  nicoletta._icon.classList.add('nicoletta');
  markers.push(nicoletta);
  var sevilay = L.marker([827.06, 378.63], {title: 'sevilay', icon: npcGenericIcon}).bindTooltip('Sevilay', {className: 'tooltip'}).addTo(map);
  sevilay._icon.classList.add('sevilay');
  markers.push(sevilay);
  var guifre = L.marker([773.06, 324.06], {title: 'guifre', icon: npcGenericIcon}).bindTooltip('Guifre', {className: 'tooltip'}).addTo(map);
  guifre._icon.classList.add('guifre');
  markers.push(guifre);
  var busra = L.marker([756.88, 323.63], {title: 'busra', icon: npcGenericIcon}).bindTooltip('Busra', {className: 'tooltip'}).addTo(map);
  busra._icon.classList.add('busra');
  markers.push(busra);
  var aburianvisitor = L.marker([778.63, 355.13], {title: 'aburianvisitor', icon: npcGenericIcon}).bindTooltip('Aburian Visitor', {className: 'tooltip'}).addTo(map);
  aburianvisitor._icon.classList.add('aburianvisitor');
  markers.push(aburianvisitor);
  var aburiantourist = L.marker([778.25, 358.13], {title: 'aburiantourist', icon: npcGenericIcon}).bindTooltip('Aburian Tourist', {className: 'tooltip'}).addTo(map);
  aburiantourist._icon.classList.add('aburiantourist');
  markers.push(aburiantourist);
  var annoyedlocal = L.marker([772.94, 384.63], {title: 'annoyedlocal', icon: npcGenericIcon}).bindTooltip('Annoyed Local', {className: 'tooltip'}).addTo(map);
  annoyedlocal._icon.classList.add('annoyedlocal');
  markers.push(annoyedlocal);
  var aggrievedlocal = L.marker([774.44, 395.88], {title: 'aggrievedlocal', icon: npcGenericIcon}).bindTooltip('Aggrieved Local', {className: 'tooltip'}).addTo(map);
  aggrievedlocal._icon.classList.add('aggrievedlocal');
  markers.push(aggrievedlocal);
  var giulia = L.marker([759.69, 417.38], {title: 'giulia', icon: npcGenericIcon}).bindTooltip('Giulia', {className: 'tooltip'}).addTo(map);
  giulia._icon.classList.add('giulia');
  markers.push(giulia);
  var flowerpicker = L.marker([738.25, 396.31], {title: 'flowerpicker', icon: npcGenericIcon}).bindTooltip('Flower Picker', {className: 'tooltip'}).addTo(map);
  flowerpicker._icon.classList.add('flowerpicker');
  markers.push(flowerpicker);
  var sonia = L.marker([736.75, 346.56], {title: 'sonia', icon: npcGenericIcon}).bindTooltip('Sonia', {className: 'tooltip'}).addTo(map);
  sonia._icon.classList.add('sonia');
  markers.push(sonia);
  var giovannassuitora = L.marker([703.69, 338.81], {title: 'giovannassuitora', icon: npcGenericIcon}).bindTooltip('Giovanna's Suitor A', {className: 'tooltip'}).addTo(map);
  giovannassuitora._icon.classList.add('giovannassuitora');
  markers.push(giovannassuitora);
  var giovannassuitorb = L.marker([704, 341.88], {title: 'giovannassuitorb', icon: npcGenericIcon}).bindTooltip('Giovanna's Suitor B', {className: 'tooltip'}).addTo(map);
  giovannassuitorb._icon.classList.add('giovannassuitorb');
  markers.push(giovannassuitorb);
  var valeria = L.marker([717.06, 362.88], {title: 'valeria', icon: npcGenericIcon}).bindTooltip('Valeria', {className: 'tooltip'}).addTo(map);
  valeria._icon.classList.add('valeria');
  markers.push(valeria);
  var giovanna = L.marker([717.38, 378.75], {title: 'giovanna', icon: npcGenericIcon}).bindTooltip('Giovanna', {className: 'tooltip'}).addTo(map);
  giovanna._icon.classList.add('giovanna');
  markers.push(giovanna);
  var kerem = L.marker([717.56, 395], {title: 'kerem', icon: npcGenericIcon}).bindTooltip('Kerem', {className: 'tooltip'}).addTo(map);
  kerem._icon.classList.add('kerem');
  markers.push(kerem);
  var amateurhistorian = L.marker([693.19, 418], {title: 'amateurhistorian', icon: npcGenericIcon}).bindTooltip('Amateur Historian', {className: 'tooltip'}).addTo(map);
  amateurhistorian._icon.classList.add('amateurhistorian');
  markers.push(amateurhistorian);
  var fortunatajacinta = L.marker([676.19, 411.06], {title: 'fortunatajacinta', icon: npcGenericIcon}).bindTooltip('Fortunata Jacinta', {className: 'tooltip'}).addTo(map);
  fortunatajacinta._icon.classList.add('fortunatajacinta');
  markers.push(fortunatajacinta);
  var fernandoekim = L.marker([678.06, 361.75], {title: 'fernandoekim', icon: npcGenericIcon}).bindTooltip('Fernando Ekim', {className: 'tooltip'}).addTo(map);
  fernandoekim._icon.classList.add('fernandoekim');
  markers.push(fernandoekim);
  
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
