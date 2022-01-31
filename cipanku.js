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
  var hakura = L.marker([294.88, 197.25], {title: 'hakura', icon: npcGenericIcon}).bindTooltip('Hakura', {className: 'tooltip'}).addTo(map);
  hakura._icon.classList.add('hakura');
  markers.push(hakura);
  var goro = L.marker([316.13, 267.63], {title: 'goro', icon: npcGenericIcon}).bindTooltip('Goro', {className: 'tooltip'}).addTo(map);
  goro._icon.classList.add('goro');
  markers.push(goro);
  var mjuni = L.marker([309.25, 310.63], {title: 'mjuni', icon: npcGenericIcon}).bindTooltip('Mjuni', {className: 'tooltip'}).addTo(map);
  mjuni._icon.classList.add('mjuni');
  markers.push(mjuni);
  var rin = L.marker([294.63, 203.5], {title: 'rin', icon: npcGenericIcon}).bindTooltip('Rin', {className: 'tooltip'}).addTo(map);
  rin._icon.classList.add('rin');
  markers.push(rin);
  var atsushi = L.marker([669.5, 859.23], {title: 'atsushi', icon: npcGenericIcon}).bindTooltip('Atsushi', {className: 'tooltip'}).addTo(map);
  atsushi._icon.classList.add('atsushi');
  markers.push(atsushi);
  var chie = L.marker([708.5, 748.46], {title: 'chie', icon: npcGenericIcon}).bindTooltip('Chie', {className: 'tooltip'}).addTo(map);
  chie._icon.classList.add('chie');
  markers.push(chie);
  var confusedlady = L.marker([655.75, 818.47], {title: 'confusedlady', icon: npcGenericIcon}).bindTooltip('Confused Lady', {className: 'tooltip'}).addTo(map);
  confusedlady._icon.classList.add('confusedlady');
  markers.push(confusedlady);
  var drjunko = L.marker([663.25, 782.21], {title: 'drjunko', icon: npcGenericIcon}).bindTooltip('Dr. Junko', {className: 'tooltip'}).addTo(map);
  drjunko._icon.classList.add('drjunko');
  markers.push(drjunko);
  var elderlypriest = L.marker([627, 728.45], {title: 'elderlypriest', icon: npcGenericIcon}).bindTooltip('Elderly Priest', {className: 'tooltip'}).addTo(map);
  elderlypriest._icon.classList.add('elderlypriest');
  markers.push(elderlypriest);
  var formertamer = L.marker([710.25, 770.46], {title: 'formertamer', icon: npcGenericIcon}).bindTooltip('Former Tamer', {className: 'tooltip'}).addTo(map);
  formertamer._icon.classList.add('formertamer');
  markers.push(formertamer);
  var grumpypriest = L.marker([707.25, 747.46], {title: 'grumpypriest', icon: npcGenericIcon}).bindTooltip('Grumpy Priest', {className: 'tooltip'}).addTo(map);
  grumpypriest._icon.classList.add('grumpypriest');
  markers.push(grumpypriest);
  var highpriest = L.marker([707.5, 758.71], {title: 'highpriest', icon: npcGenericIcon}).bindTooltip('High Priest', {className: 'tooltip'}).addTo(map);
  highpriest._icon.classList.add('highpriest');
  markers.push(highpriest);
  var hinata = L.marker([706.5, 764.21], {title: 'hinata', icon: npcGenericIcon}).bindTooltip('Hinata', {className: 'tooltip'}).addTo(map);
  hinata._icon.classList.add('hinata');
  markers.push(hinata);
  var hiromi = L.marker([652.5, 864.73], {title: 'hiromi', icon: npcGenericIcon}).bindTooltip('Hiromi', {className: 'tooltip'}).addTo(map);
  hiromi._icon.classList.add('hiromi');
  markers.push(hiromi);
  var homura = L.marker([706.5, 752.96], {title: 'homura', icon: npcGenericIcon}).bindTooltip('Homura', {className: 'tooltip'}).addTo(map);
  homura._icon.classList.add('homura');
  markers.push(homura);
  var imamu = L.marker([626.25, 782.96], {title: 'imamu', icon: npcGenericIcon}).bindTooltip('Imamu', {className: 'tooltip'}).addTo(map);
  imamu._icon.classList.add('imamu');
  markers.push(imamu);
  var imperturablepriest = L.marker([646.25, 777.71], {title: 'imperturablepriest', icon: npcGenericIcon}).bindTooltip('Imperturable Priest', {className: 'tooltip'}).addTo(map);
  imperturablepriest._icon.classList.add('imperturablepriest');
  markers.push(imperturablepriest);
  var keiku = L.marker([701.5, 756.46], {title: 'keiku', icon: npcGenericIcon}).bindTooltip('Keiku', {className: 'tooltip'}).addTo(map);
  keiku._icon.classList.add('keiku');
  markers.push(keiku);
  var koki = L.marker([626.5, 755.21], {title: 'koki', icon: npcGenericIcon}).bindTooltip('Koki', {className: 'tooltip'}).addTo(map);
  koki._icon.classList.add('koki');
  markers.push(koki);
  var malko = L.marker([627.25, 781.61], {title: 'malko', icon: npcGenericIcon}).bindTooltip('Malko', {className: 'tooltip'}).addTo(map);
  malko._icon.classList.add('malko');
  markers.push(malko);
  var martinetpriest = L.marker([664.25, 781.61], {title: 'martinetpriest', icon: npcGenericIcon}).bindTooltip('Martinet Priest', {className: 'tooltip'}).addTo(map);
  martinetpriest._icon.classList.add('martinetpriest');
  markers.push(martinetpriest);
  var anzu = L.marker([653.25, 863.48], {title: 'anzu', icon: npcGenericIcon}).bindTooltip('Anzu', {className: 'tooltip'}).addTo(map);
  anzu._icon.classList.add('anzu');
  markers.push(anzu);
  var masashiro = L.marker([662.5, 850.25], {title: 'masashiro', icon: npcGenericIcon}).bindTooltip('Masashiro', {className: 'tooltip'}).addTo(map);
  masashiro._icon.classList.add('masashiro');
  markers.push(masashiro);
  var masaki = L.marker([631.13, 828.24], {title: 'masaki', icon: npcGenericIcon}).bindTooltip('Masaki', {className: 'tooltip'}).addTo(map);
  masaki._icon.classList.add('masaki');
  markers.push(masaki);
  var mayu = L.marker([617, 767.6], {title: 'mayu', icon: npcGenericIcon}).bindTooltip('Mayu', {className: 'tooltip'}).addTo(map);
  mayu._icon.classList.add('mayu');
  markers.push(mayu);
  var michiru = L.marker([711.13, 750.48], {title: 'michiru', icon: npcGenericIcon}).bindTooltip('Michiru', {className: 'tooltip'}).addTo(map);
  michiru._icon.classList.add('michiru');
  markers.push(michiru);
  var miku = L.marker([626.75, 770.23], {title: 'miku', icon: npcGenericIcon}).bindTooltip('Miku', {className: 'tooltip'}).addTo(map);
  miku._icon.classList.add('miku');
  markers.push(miku);
  var mitsuru = L.marker([708.75, 761.98], {title: 'mitsuru', icon: npcGenericIcon}).bindTooltip('Mitsuru ', {className: 'tooltip'}).addTo(map);
  mitsuru._icon.classList.add('mitsuru');
  markers.push(mitsuru);
  var miyakianapprentice = L.marker([661.25, 733.35], {title: 'miyakianapprentice', icon: npcGenericIcon}).bindTooltip('Miyakian Apprentice', {className: 'tooltip'}).addTo(map);
  miyakianapprentice._icon.classList.add('miyakianapprentice');
  markers.push(miyakianapprentice);
  var miyakoyouth = L.marker([662.63, 837.5], {title: 'miyakoyouth', icon: npcGenericIcon}).bindTooltip('Miyako Youth', {className: 'tooltip'}).addTo(map);
  miyakoyouth._icon.classList.add('miyakoyouth');
  markers.push(miyakoyouth);
  var mizuki = L.marker([698.88, 748.23], {title: 'mizuki', icon: npcGenericIcon}).bindTooltip('Mizuki', {className: 'tooltip'}).addTo(map);
  mizuki._icon.classList.add('mizuki');
  markers.push(mizuki);
  var myrenginspector = L.marker([619.38, 783.98], {title: 'myrenginspector', icon: npcGenericIcon}).bindTooltip('MyrEng inspector', {className: 'tooltip'}).addTo(map);
  myrenginspector._icon.classList.add('myrenginspector');
  markers.push(myrenginspector);
  var pilgrimssupplies = L.marker([634.13, 828.62], {title: 'pilgrimssupplies', icon: npcVendorIcon}).bindTooltip('Pilgrim's Supplies', {className: 'tooltip'}).addTo(map);
  pilgrimssupplies._icon.classList.add('pilgrimssupplies');
  pilgrimssupplies._icon.classList.add('vendor');
  markers.push(pilgrimssupplies);
  var proudpriest = L.marker([706.75, 754.35], {title: 'proudpriest', icon: npcGenericIcon}).bindTooltip('Proud Priest', {className: 'tooltip'}).addTo(map);
  proudpriest._icon.classList.add('proudpriest');
  markers.push(proudpriest);
  var ryuji = L.marker([641.63, 775.98], {title: 'ryuji', icon: npcGenericIcon}).bindTooltip('Ryuji', {className: 'tooltip'}).addTo(map);
  ryuji._icon.classList.add('ryuji');
  markers.push(ryuji);
  var scholarlypriest = L.marker([712.38, 772.73], {title: 'scholarlypriest', icon: npcGenericIcon}).bindTooltip('Scholarly Priest', {className: 'tooltip'}).addTo(map);
  scholarlypriest._icon.classList.add('scholarlypriest');
  markers.push(scholarlypriest);
  var temtherapist = L.marker([699.75, 762.23], {title: 'temtherapist', icon: npcGenericIcon}).bindTooltip('TemTherapist', {className: 'tooltip'}).addTo(map);
  temtherapist._icon.classList.add('temtherapist');
  markers.push(temtherapist);
  var tiredpilgrim = L.marker([632.13, 811.43], {title: 'tiredpilgrim', icon: npcGenericIcon}).bindTooltip('Tired Pilgrim', {className: 'tooltip'}).addTo(map);
  tiredpilgrim._icon.classList.add('tiredpilgrim');
  markers.push(tiredpilgrim);
  var unemotionalpriest = L.marker([700, 747.98], {title: 'unemotionalpriest', icon: npcGenericIcon}).bindTooltip('Unemotional Priest', {className: 'tooltip'}).addTo(map);
  unemotionalpriest._icon.classList.add('unemotionalpriest');
  markers.push(unemotionalpriest);
  var untroubledpriestess = L.marker([697.88, 769.86], {title: 'untroubledpriestess', icon: npcGenericIcon}).bindTooltip('Untroubled Priestess', {className: 'tooltip'}).addTo(map);
  untroubledpriestess._icon.classList.add('untroubledpriestess');
  markers.push(untroubledpriestess);
  
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
