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
  var giovannassuitora = L.marker([703.69, 338.81], {title: 'giovannassuitora', icon: npcGenericIcon}).bindTooltip('Giovanna\'s Suitor A', {className: 'tooltip'}).addTo(map);
  giovannassuitora._icon.classList.add('giovannassuitora');
  markers.push(giovannassuitora);
  var giovannassuitorb = L.marker([704, 341.88], {title: 'giovannassuitorb', icon: npcGenericIcon}).bindTooltip('Giovanna\'s Suitor B', {className: 'tooltip'}).addTo(map);
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
  var carlota = L.marker([346.5, 319.39], {title: 'carlota', icon: npcGenericIcon}).bindTooltip('Carlota', {className: 'tooltip'}).addTo(map);
  carlota._icon.classList.add('carlota');
  markers.push(carlota);
  var saiparkvendor = L.marker([321.5, 283.03], {title: 'saiparkvendor', icon: npcGenericIcon}).bindTooltip('Saipark Vendor', {className: 'tooltip'}).addTo(map);
  saiparkvendor._icon.classList.add('saiparkvendor');
  markers.push(saiparkvendor);
  var temtemologist = L.marker([312.13, 236.68], {title: 'temtemologist', icon: npcGenericIcon}).bindTooltip('Temtemologist', {className: 'tooltip'}).addTo(map);
  temtemologist._icon.classList.add('temtemologist');
  markers.push(temtemologist);
  var saiparkemployee = L.marker([312.5, 344.08], {title: 'saiparkemployee', icon: npcGenericIcon}).bindTooltip('Saipark employee', {className: 'tooltip'}).addTo(map);
  saiparkemployee._icon.classList.add('saiparkemployee');
  markers.push(saiparkemployee);
  var oldschoolcollector = L.marker([278.56, 345.51], {title: 'oldschoolcollector', icon: npcGenericIcon}).bindTooltip('Old-school Collector', {className: 'tooltip'}).addTo(map);
  oldschoolcollector._icon.classList.add('oldschoolcollector');
  markers.push(oldschoolcollector);
  var saiparkpatron = L.marker([260.13, 352.39], {title: 'saiparkpatron', icon: npcGenericIcon}).bindTooltip('Saipark patron', {className: 'tooltip'}).addTo(map);
  saiparkpatron._icon.classList.add('saiparkpatron');
  markers.push(saiparkpatron);
  var aina = L.marker([179.88, 358.01], {title: 'aina', icon: npcGenericIcon}).bindTooltip('Aina', {className: 'tooltip'}).addTo(map);
  aina._icon.classList.add('aina');
  markers.push(aina);
  var txell = L.marker([157.13, 365.76], {title: 'txell', icon: npcGenericIcon}).bindTooltip('Txell', {className: 'tooltip'}).addTo(map);
  txell._icon.classList.add('txell');
  markers.push(txell);
  var fatima = L.marker([155.13, 374.25], {title: 'fatima', icon: npcGenericIcon}).bindTooltip('Fatima', {className: 'tooltip'}).addTo(map);
  fatima._icon.classList.add('fatima');
  markers.push(fatima);
  var fiammetta = L.marker([173.56, 374.88], {title: 'fiammetta', icon: npcGenericIcon}).bindTooltip('Fiammetta', {className: 'tooltip'}).addTo(map);
  fiammetta._icon.classList.add('fiammetta');
  markers.push(fiammetta);
  var miguel = L.marker([171.69, 383.93], {title: 'miguel', icon: npcGenericIcon}).bindTooltip('Miguel', {className: 'tooltip'}).addTo(map);
  miguel._icon.classList.add('miguel');
  markers.push(miguel);
  var yannis = L.marker([175.19, 384.75], {title: 'yannis', icon: npcGenericIcon}).bindTooltip('Yannis', {className: 'tooltip'}).addTo(map);
  yannis._icon.classList.add('yannis');
  markers.push(yannis);
  var beatriz = L.marker([172.44, 389.87], {title: 'beatriz', icon: npcGenericIcon}).bindTooltip('Beatriz', {className: 'tooltip'}).addTo(map);
  beatriz._icon.classList.add('beatriz');
  markers.push(beatriz);
  var laia = L.marker([149.63, 386.06], {title: 'laia', icon: npcGenericIcon}).bindTooltip('laia', {className: 'tooltip'}).addTo(map);
  laia._icon.classList.add('laia');
  markers.push(laia);
  var tucmanitrekker = L.marker([176.88, 413.83], {title: 'tucmanitrekker', icon: npcGenericIcon}).bindTooltip('Tucmani Trekker', {className: 'tooltip'}).addTo(map);
  tucmanitrekker._icon.classList.add('tucmanitrekker');
  markers.push(tucmanitrekker);
  var tucmanitourist = L.marker([178.88, 416.33], {title: 'tucmanitourist', icon: npcGenericIcon}).bindTooltip('Tucmani Tourist', {className: 'tooltip'}).addTo(map);
  tucmanitourist._icon.classList.add('tucmanitourist');
  markers.push(tucmanitourist);
  var localscholar = L.marker([155.25, 416.46], {title: 'localscholar', icon: npcGenericIcon}).bindTooltip('Local Scholar', {className: 'tooltip'}).addTo(map);
  localscholar._icon.classList.add('localscholar');
  markers.push(localscholar);
  var beccario = L.marker([151.75, 418.58], {title: 'beccario', icon: npcGenericIcon}).bindTooltip('Beccario', {className: 'tooltip'}).addTo(map);
  beccario._icon.classList.add('beccario');
  markers.push(beccario);
  var flora = L.marker([186.38, 426.45], {title: 'flora', icon: npcGenericIcon}).bindTooltip('Flora', {className: 'tooltip'}).addTo(map);
  flora._icon.classList.add('flora');
  markers.push(flora);
  var vassilis = L.marker([149.75, 450.82], {title: 'vassilis', icon: npcGenericIcon}).bindTooltip('Vassilis', {className: 'tooltip'}).addTo(map);
  vassilis._icon.classList.add('vassilis');
  markers.push(vassilis);
  var clara = L.marker([160.13, 435.82], {title: 'clara', icon: npcGenericIcon}).bindTooltip('Clara', {className: 'tooltip'}).addTo(map);
  clara._icon.classList.add('clara');
  markers.push(clara);
  var marino = L.marker([180.13, 447.07], {title: 'marino', icon: npcGenericIcon}).bindTooltip('Marino', {className: 'tooltip'}).addTo(map);
  marino._icon.classList.add('marino');
  markers.push(marino);
  var enduranceswimmer = L.marker([131.75, 468.31], {title: 'enduranceswimmer', icon: npcGenericIcon}).bindTooltip('Endurance Swimmer', {className: 'tooltip'}).addTo(map);
  enduranceswimmer._icon.classList.add('enduranceswimmer');
  markers.push(enduranceswimmer);
  var uncleeulogi = L.marker([196.13, 466.31], {title: 'uncleeulogi', icon: npcGenericIcon}).bindTooltip('Uncle Eulogi', {className: 'tooltip'}).addTo(map);
  uncleeulogi._icon.classList.add('uncleeulogi');
  markers.push(uncleeulogi);
  var swimmingtamer = L.marker([200.63, 487.17], {title: 'swimmingtamer', icon: npcGenericIcon}).bindTooltip('Swimming Tamer', {className: 'tooltip'}).addTo(map);
  swimmingtamer._icon.classList.add('swimmingtamer');
  markers.push(swimmingtamer);
  var minos = L.marker([156.13, 500.04], {title: 'minos', icon: npcGenericIcon}).bindTooltip('Minos', {className: 'tooltip'}).addTo(map);
  minos._icon.classList.add('minos');
  markers.push(minos);
  var pasiphae = L.marker([131.63, 503.91], {title: 'pasiphae', icon: npcGenericIcon}).bindTooltip('Pasiphae', {className: 'tooltip'}).addTo(map);
  pasiphae._icon.classList.add('pasiphae');
  markers.push(pasiphae);
  var glaucus = L.marker([130.5, 521.53], {title: 'glaucus', icon: npcGenericIcon}).bindTooltip('Glaucus', {className: 'tooltip'}).addTo(map);
  glaucus._icon.classList.add('glaucus');
  markers.push(glaucus);
  var retiredman = L.marker([139, 546.14], {title: 'retiredman', icon: npcGenericIcon}).bindTooltip('Retired Man', {className: 'tooltip'}).addTo(map);
  retiredman._icon.classList.add('retiredman');
  markers.push(retiredman);
  var retiredwomen = L.marker([134.75, 548.02], {title: 'retiredwomen', icon: npcGenericIcon}).bindTooltip('Retired Women', {className: 'tooltip'}).addTo(map);
  retiredwomen._icon.classList.add('retiredwomen');
  markers.push(retiredwomen);
  var giada = L.marker([152.88, 564.13], {title: 'giada', icon: npcGenericIcon}).bindTooltip('Giada', {className: 'tooltip'}).addTo(map);
  giada._icon.classList.add('giada');
  markers.push(giada);
  var sillarosailor = L.marker([148.5, 569.26], {title: 'sillarosailor', icon: npcGenericIcon}).bindTooltip('Sillaro Sailor', {className: 'tooltip'}).addTo(map);
  sillarosailor._icon.classList.add('sillarosailor');
  markers.push(sillarosailor);
  var kisiwansailor = L.marker([149, 571.63], {title: 'kisiwansailor', icon: npcGenericIcon}).bindTooltip('Kisiwan Sailor', {className: 'tooltip'}).addTo(map);
  kisiwansailor._icon.classList.add('kisiwansailor');
  markers.push(kisiwansailor);
  var riverinefellowshipclerk = L.marker([145.88, 571.75], {title: 'riverinefellowshipclerk', icon: npcGenericIcon}).bindTooltip('Riverine Fellowship Clerk', {className: 'tooltip'}).addTo(map);
  riverinefellowshipclerk._icon.classList.add('riverinefellowshipclerk');
  markers.push(riverinefellowshipclerk);
  var restingsailor = L.marker([142.13, 569.5], {title: 'restingsailor', icon: npcGenericIcon}).bindTooltip('Resting Sailor', {className: 'tooltip'}).addTo(map);
  restingsailor._icon.classList.add('restingsailor');
  markers.push(restingsailor);
  var temporiumowner = L.marker([177.13, 578.38], {title: 'temporiumowner', icon: npcGenericIcon}).bindTooltip('Temporium Owner', {className: 'tooltip'}).addTo(map);
  temporiumowner._icon.classList.add('temporiumowner');
  markers.push(temporiumowner);
  var argumentativekid = L.marker([173.63, 578.88], {title: 'argumentativekid', icon: npcGenericIcon}).bindTooltip('Argumentative Kid', {className: 'tooltip'}).addTo(map);
  argumentativekid._icon.classList.add('argumentativekid');
  markers.push(argumentativekid);
  var opinionatedkid = L.marker([173.5, 575.5], {title: 'opinionatedkid', icon: npcGenericIcon}).bindTooltip('Opinionated Kid', {className: 'tooltip'}).addTo(map);
  opinionatedkid._icon.classList.add('opinionatedkid');
  markers.push(opinionatedkid);
  var fomufan = L.marker([160.5, 590.74], {title: 'fomufan', icon: npcGenericIcon}).bindTooltip('Fomufan', {className: 'tooltip'}).addTo(map);
  fomufan._icon.classList.add('fomufan');
  markers.push(fomufan);
  var gokcek = L.marker([158.75, 592.62], {title: 'gokcek', icon: npcGenericIcon}).bindTooltip('Gokcek', {className: 'tooltip'}).addTo(map);
  gokcek._icon.classList.add('gokcek');
  markers.push(gokcek);
  var alice = L.marker([157.5, 591.24], {title: 'alice', icon: npcGenericIcon}).bindTooltip('Alice', {className: 'tooltip'}).addTo(map);
  alice._icon.classList.add('alice');
  markers.push(alice);
  var monste = L.marker([156.75, 593.37], {title: 'monste', icon: npcGenericIcon}).bindTooltip('Monste', {className: 'tooltip'}).addTo(map);
  monste._icon.classList.add('monste');
  markers.push(monste);
  var hector = L.marker([154.38, 591.87], {title: 'hector', icon: npcGenericIcon}).bindTooltip('Hector', {className: 'tooltip'}).addTo(map);
  hector._icon.classList.add('hector');
  markers.push(hector);
  var sirokosbartender = L.marker([153.25, 591.38], {title: 'sirokosbartender', icon: npcGenericIcon}).bindTooltip('Sirokos bartender', {className: 'tooltip'}).addTo(map);
  sirokosbartender._icon.classList.add('sirokosbartender');
  markers.push(sirokosbartender);
  var kizin = L.marker([151.5, 591.38], {title: 'kizin', icon: npcGenericIcon}).bindTooltip('Kizin', {className: 'tooltip'}).addTo(map);
  kizin._icon.classList.add('kizin');
  markers.push(kizin);
  var jana = L.marker([158.88, 598.01], {title: 'jana', icon: npcGenericIcon}).bindTooltip('Jana', {className: 'tooltip'}).addTo(map);
  jana._icon.classList.add('jana');
  markers.push(jana);
  var nikos = L.marker([178.13, 597.76], {title: 'nikos', icon: npcGenericIcon}).bindTooltip('Nikos', {className: 'tooltip'}).addTo(map);
  nikos._icon.classList.add('nikos');
  markers.push(nikos);
  var lola = L.marker([176, 611.87], {title: 'lola', icon: npcGenericIcon}).bindTooltip('Lola', {className: 'tooltip'}).addTo(map);
  lola._icon.classList.add('lola');
  markers.push(lola);
  var retiredfisherman = L.marker([184.38, 608.87], {title: 'retiredfisherman', icon: npcGenericIcon}).bindTooltip('Retired Fisherman', {className: 'tooltip'}).addTo(map);
  retiredfisherman._icon.classList.add('retiredfisherman');
  markers.push(retiredfisherman);
  var sakultist = L.marker([191.13, 612.37], {title: 'sakultist', icon: npcGenericIcon}).bindTooltip('Sakultist', {className: 'tooltip'}).addTo(map);
  sakultist._icon.classList.add('sakultist');
  markers.push(sakultist);
  var rabia = L.marker([209.88, 609.87], {title: 'rabia', icon: npcGenericIcon}).bindTooltip('Rabia', {className: 'tooltip'}).addTo(map);
  rabia._icon.classList.add('rabia');
  markers.push(rabia);
  
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
