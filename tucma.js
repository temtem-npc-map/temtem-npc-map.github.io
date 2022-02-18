var markers = [];
var map;

$(document).ready(function() {  
  
    map = L.map('map-tucma', {
        crs: L.CRS.Simple,
        attributionControl: false,
        minZoom: 1,
        preferCanvas: true
    });
  
  var bounds = [[0,0], [1000,1000]];
  var image = L.imageOverlay('images/maps/tucma.png', bounds).addTo(map);
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
  var npcYareniIcon = new TemMarker({iconUrl: 'images/icons/yareni.png'});  
  
  var njema = L.marker([672.75, 373], {title: 'njema', icon: npcGenericIcon}).bindTooltip('Njema', {className: 'tooltip'}).addTo(map);
  njema._icon.classList.add('njema');
  markers.push(njema);
  var taumafa = L.marker([760.38, 410], {title: 'taumafa', icon: npcGenericIcon}).bindTooltip('Taumafa', {className: 'tooltip'}).addTo(map);
  taumafa._icon.classList.add('taumafa');
  markers.push(taumafa);
  var agustn = L.marker([826.95, 542.88], {title: 'agustn', icon: npcGenericIcon}).bindTooltip('Agustín', {className: 'tooltip'}).addTo(map);
  agustn._icon.classList.add('agustn');
  markers.push(agustn);
  var walter = L.marker([827.22, 519.85], {title: 'walter', icon: npcGenericIcon}).bindTooltip('Walter', {className: 'tooltip'}).addTo(map);
  walter._icon.classList.add('walter');
  markers.push(walter);
  var frustratedtaveler = L.marker([806.47, 545.36], {title: 'frustratedtaveler', icon: npcGenericIcon}).bindTooltip('Frustrated Taveler', {className: 'tooltip'}).addTo(map);
  frustratedtaveler._icon.classList.add('frustratedtaveler');
  markers.push(frustratedtaveler);
  var ameyali = L.marker([796.1, 510.48], {title: 'ameyali', icon: npcGenericIcon}).bindTooltip('Ameyali', {className: 'tooltip'}).addTo(map);
  ameyali._icon.classList.add('ameyali');
  markers.push(ameyali);
  var airshipterminalguard = L.marker([762.56, 527.54], {title: 'airshipterminalguard', icon: npcGenericIcon}).bindTooltip('Airship Terminal Guard', {className: 'tooltip'}).addTo(map);
  airshipterminalguard._icon.classList.add('airshipterminalguard');
  markers.push(airshipterminalguard);
  var waitingtraveler = L.marker([760.81, 561.55], {title: 'waitingtraveler', icon: npcGenericIcon}).bindTooltip('Waiting Traveler', {className: 'tooltip'}).addTo(map);
  waitingtraveler._icon.classList.add('waitingtraveler');
  markers.push(waitingtraveler);
  var temtemconnoisseur = L.marker([760.81, 564.55], {title: 'temtemconnoisseur', icon: npcGenericIcon}).bindTooltip('Temtem Connoisseur', {className: 'tooltip'}).addTo(map);
  temtemconnoisseur._icon.classList.add('temtemconnoisseur');
  markers.push(temtemconnoisseur);
  var quetzaliantravelagent = L.marker([760.81, 567.55], {title: 'quetzaliantravelagent', icon: npcGenericIcon}).bindTooltip('Quetzalian Travel Agent', {className: 'tooltip'}).addTo(map);
  quetzaliantravelagent._icon.classList.add('quetzaliantravelagent');
  markers.push(quetzaliantravelagent);
  var tucmatouristguide = L.marker([760.81, 570.55], {title: 'tucmatouristguide', icon: npcGenericIcon}).bindTooltip('Tucma Tourist Guide', {className: 'tooltip'}).addTo(map);
  tucmatouristguide._icon.classList.add('tucmatouristguide');
  markers.push(tucmatouristguide);
  var drunkminer = L.marker([761.82, 462.67], {title: 'drunkminer', icon: npcGenericIcon}).bindTooltip('Drunk Miner', {className: 'tooltip'}).addTo(map);
  drunkminer._icon.classList.add('drunkminer');
  markers.push(drunkminer);
  var cocijo = L.marker([761.82, 465.67], {title: 'cocijo', icon: npcGenericIcon}).bindTooltip('Cocijo', {className: 'tooltip'}).addTo(map);
  cocijo._icon.classList.add('cocijo');
  markers.push(cocijo);
  var drunktamer = L.marker([761.82, 468.67], {title: 'drunktamer', icon: npcGenericIcon}).bindTooltip('Drunk Tamer', {className: 'tooltip'}).addTo(map);
  drunktamer._icon.classList.add('drunktamer');
  markers.push(drunktamer);
  var kuikal = L.marker([761.82, 471.67], {title: 'kuikal', icon: npcGenericIcon}).bindTooltip('Kuikal', {className: 'tooltip'}).addTo(map);
  kuikal._icon.classList.add('kuikal');
  markers.push(kuikal);
  var merryquetzalian = L.marker([761.82, 474.67], {title: 'merryquetzalian', icon: npcGenericIcon}).bindTooltip('Merry Quetzalian', {className: 'tooltip'}).addTo(map);
  merryquetzalian._icon.classList.add('merryquetzalian');
  markers.push(merryquetzalian);
  var xipetotec = L.marker([761.82, 477.67], {title: 'xipetotec', icon: npcGenericIcon}).bindTooltip('Xipe Totec', {className: 'tooltip'}).addTo(map);
  xipetotec._icon.classList.add('xipetotec');
  markers.push(xipetotec);
  var yela = L.marker([765.82, 462.67], {title: 'yela', icon: npcGenericIcon}).bindTooltip('Yela', {className: 'tooltip'}).addTo(map);
  yela._icon.classList.add('yela');
  markers.push(yela);
  var kitchenhand = L.marker([765.82, 465.67], {title: 'kitchenhand', icon: npcGenericIcon}).bindTooltip('Kitchen Hand', {className: 'tooltip'}).addTo(map);
  kitchenhand._icon.classList.add('kitchenhand');
  markers.push(kitchenhand);
  var travelingmerchant = L.marker([765.82, 468.67], {title: 'travelingmerchant', icon: npcGenericIcon}).bindTooltip('Traveling Merchant', {className: 'tooltip'}).addTo(map);
  travelingmerchant._icon.classList.add('travelingmerchant');
  markers.push(travelingmerchant);
  var jimena = L.marker([765.82, 471.67], {title: 'jimena', icon: npcGenericIcon}).bindTooltip('Jimena', {className: 'tooltip'}).addTo(map);
  jimena._icon.classList.add('jimena');
  markers.push(jimena);
  var iztli = L.marker([765.82, 474.67], {title: 'iztli', icon: npcGenericIcon}).bindTooltip('Iztli', {className: 'tooltip'}).addTo(map);
  iztli._icon.classList.add('iztli');
  markers.push(iztli);
  var unreachablekitchenhand = L.marker([765.82, 477.67], {title: 'unreachablekitchenhand', icon: npcMovingIcon}).bindTooltip('Unreachable Kitchen Hand', {className: 'tooltip'}).addTo(map);
  unreachablekitchenhand._icon.classList.add('unreachablekitchenhand');
  unreachablekitchenhand._icon.classList.add('moving');
  markers.push(unreachablekitchenhand);
  var drunksmith = L.marker([765.82, 480.67], {title: 'drunksmith', icon: npcGenericIcon}).bindTooltip('Drunk Smith', {className: 'tooltip'}).addTo(map);
  drunksmith._icon.classList.add('drunksmith');
  markers.push(drunksmith);
  var akatzin = L.marker([762.08, 449.83], {title: 'akatzin', icon: npcGenericIcon}).bindTooltip('Akatzin', {className: 'tooltip'}).addTo(map);
  akatzin._icon.classList.add('akatzin');
  markers.push(akatzin);
  var yeyetzi = L.marker([764.9, 424.07], {title: 'yeyetzi', icon: npcGenericIcon}).bindTooltip('Yeyetzi', {className: 'tooltip'}).addTo(map);
  yeyetzi._icon.classList.add('yeyetzi');
  markers.push(yeyetzi);
  var koyolli = L.marker([763.14, 424.07], {title: 'koyolli', icon: npcGenericIcon}).bindTooltip('Koyolli', {className: 'tooltip'}).addTo(map);
  koyolli._icon.classList.add('koyolli');
  markers.push(koyolli);
  var quetzaliancitizen = L.marker([806.4, 434.83], {title: 'quetzaliancitizen', icon: npcGenericIcon}).bindTooltip('Quetzalian Citizen', {className: 'tooltip'}).addTo(map);
  quetzaliancitizen._icon.classList.add('quetzaliancitizen');
  markers.push(quetzaliancitizen);
  var defeatedtamer = L.marker([824.02, 418.21], {title: 'defeatedtamer', icon: npcGenericIcon}).bindTooltip('Defeated Tamer', {className: 'tooltip'}).addTo(map);
  defeatedtamer._icon.classList.add('defeatedtamer');
  markers.push(defeatedtamer);
  var mitotl = L.marker([833.47, 422.67], {title: 'mitotl', icon: npcCombatIcon}).bindTooltip('Mitotl', {className: 'tooltip'}).addTo(map);
  mitotl._icon.classList.add('mitotl');
  mitotl._icon.classList.add('combat');
  markers.push(mitotl);
  var atlatl = L.marker([833.47, 425.67], {title: 'atlatl', icon: npcCombatIcon}).bindTooltip('Atlatl', {className: 'tooltip'}).addTo(map);
  atlatl._icon.classList.add('atlatl');
  atlatl._icon.classList.add('combat');
  markers.push(atlatl);
  var dojominder = L.marker([833.47, 428.67], {title: 'dojominder', icon: npcMovingIcon}).bindTooltip('Dojo Minder', {className: 'tooltip'}).addTo(map);
  dojominder._icon.classList.add('dojominder');
  dojominder._icon.classList.add('moving');
  markers.push(dojominder);
  var cactonki = L.marker([833.47, 431.67], {title: 'cactonki', icon: npcCombatIcon}).bindTooltip('Cactonki', {className: 'tooltip'}).addTo(map);
  cactonki._icon.classList.add('cactonki');
  cactonki._icon.classList.add('combat');
  markers.push(cactonki);
  var cactonkiscompanion = L.marker([833.47, 434.67], {title: 'cactonkiscompanion', icon: npcCombatIcon}).bindTooltip("Cactonki's Companion", {className: 'tooltip'}).addTo(map);
  cactonkiscompanion._icon.classList.add('cactonkiscompanion');
  cactonkiscompanion._icon.classList.add('combat');
  markers.push(cactonkiscompanion);
  var tonali = L.marker([833.47, 437.67], {title: 'tonali', icon: npcCombatIcon}).bindTooltip('Tonali', {className: 'tooltip'}).addTo(map);
  tonali._icon.classList.add('tonali');
  tonali._icon.classList.add('combat');
  markers.push(tonali);
  var tonaliscompanion = L.marker([833.47, 450.67], {title: 'tonaliscompanion', icon: npcCombatIcon}).bindTooltip("Tonali's Companion??", {className: 'tooltip'}).addTo(map);
  tonaliscompanion._icon.classList.add('tonaliscompanion');
  tonaliscompanion._icon.classList.add('combat');
  markers.push(tonaliscompanion);
  var yareni = L.marker([836.47, 430.9], {title: 'yareni', icon: npcYareniIcon}).bindTooltip('Yareni', {className: 'tooltip'}).addTo(map);
  yareni._icon.classList.add('yareni');
  yareni._icon.classList.add('combat');
  markers.push(yareni);
  var paktli = L.marker([759.91, 407.79], {title: 'paktli', icon: npcClothingIcon}).bindTooltip('Paktli', {className: 'tooltip'}).addTo(map);
  paktli._icon.classList.add('paktli');
  paktli._icon.classList.add('clothing');
  markers.push(paktli);
  var taumafa = L.marker([759.91, 410.79], {title: 'taumafa', icon: npcGenericIcon}).bindTooltip('Taumafa', {className: 'tooltip'}).addTo(map);
  taumafa._icon.classList.add('taumafa');
  markers.push(taumafa);
  var cuitlatl = L.marker([763.16, 386.79], {title: 'cuitlatl', icon: npcGenericIcon}).bindTooltip('Cuitlatl', {className: 'tooltip'}).addTo(map);
  cuitlatl._icon.classList.add('cuitlatl');
  markers.push(cuitlatl);
  var izel = L.marker([763.41, 365.78], {title: 'izel', icon: npcGenericIcon}).bindTooltip('Izel', {className: 'tooltip'}).addTo(map);
  izel._icon.classList.add('izel');
  markers.push(izel);
  var quetzalianvendor = L.marker([728, 384.2], {title: 'quetzalianvendor', icon: npcVendorIcon}).bindTooltip('Quetzalian Vendor', {className: 'tooltip'}).addTo(map);
  quetzalianvendor._icon.classList.add('quetzalianvendor');
  quetzalianvendor._icon.classList.add('vendor');
  markers.push(quetzalianvendor);
  var yolotl = L.marker([728, 387.2], {title: 'yolotl', icon: npcGenericIcon}).bindTooltip('Yolotl', {className: 'tooltip'}).addTo(map);
  yolotl._icon.classList.add('yolotl');
  markers.push(yolotl);
  var teotl = L.marker([728, 390.2], {title: 'teotl', icon: npcGenericIcon}).bindTooltip('Teotl', {className: 'tooltip'}).addTo(map);
  teotl._icon.classList.add('teotl');
  markers.push(teotl);
  var tiredguard = L.marker([712.5, 357.07], {title: 'tiredguard', icon: npcGenericIcon}).bindTooltip('Tired Guard', {className: 'tooltip'}).addTo(map);
  tiredguard._icon.classList.add('tiredguard');
  markers.push(tiredguard);
  var stoicquetzalian = L.marker([708.5, 347.44], {title: 'stoicquetzalian', icon: npcGenericIcon}).bindTooltip('Stoic Quetzalian', {className: 'tooltip'}).addTo(map);
  stoicquetzalian._icon.classList.add('stoicquetzalian');
  markers.push(stoicquetzalian);
  var yaotzin = L.marker([692.08, 348.53], {title: 'yaotzin', icon: npcFurnitureIcon}).bindTooltip('Yaotzin', {className: 'tooltip'}).addTo(map);
  yaotzin._icon.classList.add('yaotzin');
  yaotzin._icon.classList.add('furniture');
  markers.push(yaotzin);
  var lidia = L.marker([692.08, 351.53], {title: 'lidia', icon: npcGenericIcon}).bindTooltip('Lidia', {className: 'tooltip'}).addTo(map);
  lidia._icon.classList.add('lidia');
  markers.push(lidia);
  var dayami = L.marker([692.08, 348.53], {title: 'dayami', icon: npcGenericIcon}).bindTooltip('Dayami', {className: 'tooltip'}).addTo(map);
  dayami._icon.classList.add('dayami');
  markers.push(dayami);
  var ollin = L.marker([686.83, 351.53], {title: 'ollin', icon: npcGenericIcon}).bindTooltip('Ollin', {className: 'tooltip'}).addTo(map);
  ollin._icon.classList.add('ollin');
  markers.push(ollin);
  var yuma = L.marker([686.83, 375.66], {title: 'yuma', icon: npcGenericIcon}).bindTooltip('Yuma', {className: 'tooltip'}).addTo(map);
  yuma._icon.classList.add('yuma');
  markers.push(yuma);
  var kiango = L.marker([674.08, 370.03], {title: 'kiango', icon: npcGenericIcon}).bindTooltip('Kiango', {className: 'tooltip'}).addTo(map);
  kiango._icon.classList.add('kiango');
  markers.push(kiango);
  var njema = L.marker([674.08, 375.03], {title: 'njema', icon: npcGenericIcon}).bindTooltip('Njema', {className: 'tooltip'}).addTo(map);
  njema._icon.classList.add('njema');
  markers.push(njema);
  var thimba = L.marker([667.58, 350.03], {title: 'thimba', icon: npcGenericIcon}).bindTooltip('Thimba', {className: 'tooltip'}).addTo(map);
  thimba._icon.classList.add('thimba');
  markers.push(thimba);
  var pipiyoli = L.marker([667.58, 353.03], {title: 'pipiyoli', icon: npcGenericIcon}).bindTooltip('Pipiyoli', {className: 'tooltip'}).addTo(map);
  pipiyoli._icon.classList.add('pipiyoli');
  markers.push(pipiyoli);
  var huitzilin = L.marker([671.21, 384.54], {title: 'huitzilin', icon: npcGenericIcon}).bindTooltip('Huitzilin', {className: 'tooltip'}).addTo(map);
  huitzilin._icon.classList.add('huitzilin');
  markers.push(huitzilin);
  
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
