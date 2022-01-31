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
  var savvyshopper = L.marker([906.68, 662.99], {title: 'savvyshopper', icon: npcGenericIcon}).bindTooltip('Savvy Shopper', {className: 'tooltip'}).addTo(map);
  savvyshopper._icon.classList.add('savvyshopper');
  markers.push(savvyshopper);
  var civilengineer = L.marker([793.98, 738.12], {title: 'civilengineer', icon: npcGenericIcon}).bindTooltip('Civil Engineer', {className: 'tooltip'}).addTo(map);
  civilengineer._icon.classList.add('civilengineer');
  markers.push(civilengineer);
  var mele = L.marker([776.65, 738.76], {title: 'mele', icon: npcGenericIcon}).bindTooltip('Mele', {className: 'tooltip'}).addTo(map);
  mele._icon.classList.add('mele');
  markers.push(mele);
  var myrengreceptionist = L.marker([777.08, 720.01], {title: 'myrengreceptionist', icon: npcGenericIcon}).bindTooltip('MyrEng Receptionist', {className: 'tooltip'}).addTo(map);
  myrengreceptionist._icon.classList.add('myrengreceptionist');
  markers.push(myrengreceptionist);
  var taterubreeder = L.marker([779.08, 720.01], {title: 'taterubreeder', icon: npcGenericIcon}).bindTooltip('Tateru Breeder', {className: 'tooltip'}).addTo(map);
  taterubreeder._icon.classList.add('taterubreeder');
  markers.push(taterubreeder);
  var taterufan = L.marker([781.08, 720.01], {title: 'taterufan', icon: npcGenericIcon}).bindTooltip('Tateru Fan', {className: 'tooltip'}).addTo(map);
  taterufan._icon.classList.add('taterufan');
  markers.push(taterufan);
  var sleepytraveler = L.marker([783.08, 720.01], {title: 'sleepytraveler', icon: npcGenericIcon}).bindTooltip('Sleepy Traveler', {className: 'tooltip'}).addTo(map);
  sleepytraveler._icon.classList.add('sleepytraveler');
  markers.push(sleepytraveler);
  var skepticalwoman = L.marker([777.08, 715.01], {title: 'skepticalwoman', icon: npcGenericIcon}).bindTooltip('Skeptical Woman', {className: 'tooltip'}).addTo(map);
  skepticalwoman._icon.classList.add('skepticalwoman');
  markers.push(skepticalwoman);
  var windbag = L.marker([779.08, 715.01], {title: 'windbag', icon: npcGenericIcon}).bindTooltip('Windbag', {className: 'tooltip'}).addTo(map);
  windbag._icon.classList.add('windbag');
  markers.push(windbag);
  var foxytamer = L.marker([781.08, 715.01], {title: 'foxytamer', icon: npcGenericIcon}).bindTooltip('Foxy Tamer', {className: 'tooltip'}).addTo(map);
  foxytamer._icon.classList.add('foxytamer');
  markers.push(foxytamer);
  var taciturnlodger = L.marker([783.08, 715.01], {title: 'taciturnlodger', icon: npcGenericIcon}).bindTooltip('Taciturn Lodger', {className: 'tooltip'}).addTo(map);
  taciturnlodger._icon.classList.add('taciturnlodger');
  markers.push(taciturnlodger);
  var zeppelinlover = L.marker([785.08, 715.01], {title: 'zeppelinlover', icon: npcGenericIcon}).bindTooltip('Zeppelin Lover', {className: 'tooltip'}).addTo(map);
  zeppelinlover._icon.classList.add('zeppelinlover');
  markers.push(zeppelinlover);
  var restingtraveler = L.marker([785.08, 715.01], {title: 'restingtraveler', icon: npcGenericIcon}).bindTooltip('Resting Traveler', {className: 'tooltip'}).addTo(map);
  restingtraveler._icon.classList.add('restingtraveler');
  markers.push(restingtraveler);
  var strandedcaptain = L.marker([776.83, 689.01], {title: 'strandedcaptain', icon: npcGenericIcon}).bindTooltip('Stranded Captain', {className: 'tooltip'}).addTo(map);
  strandedcaptain._icon.classList.add('strandedcaptain');
  markers.push(strandedcaptain);
  var exasperatedtamer = L.marker([781.83, 689.01], {title: 'exasperatedtamer', icon: npcGenericIcon}).bindTooltip('Exasperated Tamer', {className: 'tooltip'}).addTo(map);
  exasperatedtamer._icon.classList.add('exasperatedtamer');
  markers.push(exasperatedtamer);
  var lodger = L.marker([786.83, 689.01], {title: 'lodger', icon: npcGenericIcon}).bindTooltip('Lodger', {className: 'tooltip'}).addTo(map);
  lodger._icon.classList.add('lodger');
  markers.push(lodger);
  var haplesswriter = L.marker([791.83, 689.01], {title: 'haplesswriter', icon: npcGenericIcon}).bindTooltip('Hapless Writer', {className: 'tooltip'}).addTo(map);
  haplesswriter._icon.classList.add('haplesswriter');
  markers.push(haplesswriter);
  var accountant = L.marker([776.83, 694.01], {title: 'accountant', icon: npcGenericIcon}).bindTooltip('Accountant', {className: 'tooltip'}).addTo(map);
  accountant._icon.classList.add('accountant');
  markers.push(accountant);
  var olianasassistant = L.marker([781.83, 694.01], {title: 'olianasassistant', icon: npcGenericIcon}).bindTooltip("Oliana's Assistant", {className: 'tooltip'}).addTo(map);
  olianasassistant._icon.classList.add('olianasassistant');
  markers.push(olianasassistant);
  var oliana = L.marker([786.83, 694.01], {title: 'oliana', icon: npcGenericIcon}).bindTooltip('Oliana', {className: 'tooltip'}).addTo(map);
  oliana._icon.classList.add('oliana');
  markers.push(oliana);
  var intern = L.marker([791.83, 694.01], {title: 'intern', icon: npcGenericIcon}).bindTooltip('Intern', {className: 'tooltip'}).addTo(map);
  intern._icon.classList.add('intern');
  markers.push(intern);
  var designer = L.marker([776.83, 699.01], {title: 'designer', icon: npcGenericIcon}).bindTooltip('Designer', {className: 'tooltip'}).addTo(map);
  designer._icon.classList.add('designer');
  markers.push(designer);
  
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
