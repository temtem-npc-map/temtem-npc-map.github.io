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
  var npcCrystalGuardIcon = new TemMarker({iconUrl: 'images/icons/npc-crystal-guard.png'});
  
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
  var tonaliscompanion = L.marker([833.47, 440.67], {title: 'tonaliscompanion', icon: npcCombatIcon}).bindTooltip("Tonali's Companion??", {className: 'tooltip'}).addTo(map);
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
  var dayami = L.marker([692.08, 351.53], {title: 'dayami', icon: npcGenericIcon}).bindTooltip('Dayami', {className: 'tooltip'}).addTo(map);
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
  var tlaicuilo = L.marker([741.12, 709.51], {title: 'tlaicuilo', icon: npcCombatIcon}).bindTooltip('Tlaicuilo', {className: 'tooltip'}).addTo(map);
  tlaicuilo._icon.classList.add('tlaicuilo');
  tlaicuilo._icon.classList.add('combat');
  markers.push(tlaicuilo);
  var chaustlil = L.marker([714.99, 731.39], {title: 'chaustlil', icon: npcCombatIcon}).bindTooltip('Chaustlil', {className: 'tooltip'}).addTo(map);
  chaustlil._icon.classList.add('chaustlil');
  chaustlil._icon.classList.add('combat');
  markers.push(chaustlil);
  var ailani = L.marker([740.99, 755.52], {title: 'ailani', icon: npcCombatIcon}).bindTooltip('Ailani', {className: 'tooltip'}).addTo(map);
  ailani._icon.classList.add('ailani');
  ailani._icon.classList.add('combat');
  markers.push(ailani);
  var gardenguardian = L.marker([732.75, 770.78], {title: 'gardenguardian', icon: npcCombatIcon}).bindTooltip('Gardenguardian', {className: 'tooltip'}).addTo(map);
  gardenguardian._icon.classList.add('gardenguardian');
  gardenguardian._icon.classList.add('combat');
  markers.push(gardenguardian);
  var gardenguardian2 = L.marker([732.75, 772.53], {title: 'gardenguardian2', icon: npcCombatIcon}).bindTooltip('Gardenguardian 2', {className: 'tooltip'}).addTo(map);
  gardenguardian2._icon.classList.add('gardenguardian2');
  gardenguardian2._icon.classList.add('combat');
  markers.push(gardenguardian2);
  var izamn = L.marker([737.13, 811.87], {title: 'izamn', icon: npcMovingCombatIcon}).bindTooltip('Izamná', {className: 'tooltip'}).addTo(map);
  izamn._icon.classList.add('izamn');
  izamn._icon.classList.add('moving');
  izamn._icon.classList.add('combat');
  markers.push(izamn);
  var tastelesscosplayer = L.marker([722.5, 831.24], {title: 'tastelesscosplayer', icon: npcCombatIcon}).bindTooltip('Tasteless Cosplayer', {className: 'tooltip'}).addTo(map);
  tastelesscosplayer._icon.classList.add('tastelesscosplayer');
  tastelesscosplayer._icon.classList.add('combat');
  markers.push(tastelesscosplayer);
  var tlateco = L.marker([750.5, 826.62], {title: 'tlateco', icon: npcCombatIcon}).bindTooltip('Tlateco', {className: 'tooltip'}).addTo(map);
  tlateco._icon.classList.add('tlateco');
  tlateco._icon.classList.add('combat');
  markers.push(tlateco);
  var centli = L.marker([693.32, 841.72], {title: 'centli', icon: npcCombatIcon}).bindTooltip('Centli', {className: 'tooltip'}).addTo(map);
  centli._icon.classList.add('centli');
  centli._icon.classList.add('combat');
  markers.push(centli);
  var ariam = L.marker([782.15, 845.85], {title: 'ariam', icon: npcCombatIcon}).bindTooltip('Ariam', {className: 'tooltip'}).addTo(map);
  ariam._icon.classList.add('ariam');
  ariam._icon.classList.add('combat');
  markers.push(ariam);
  var chizuka = L.marker([712.25, 877.61], {title: 'chizuka', icon: npcCombatIcon}).bindTooltip('Chizuka', {className: 'tooltip'}).addTo(map);
  chizuka._icon.classList.add('chizuka');
  chizuka._icon.classList.add('combat');
  markers.push(chizuka);
  var yoali = L.marker([765.89, 877.8], {title: 'yoali', icon: npcCombatIcon}).bindTooltip('Yoali', {className: 'tooltip'}).addTo(map);
  yoali._icon.classList.add('yoali');
  yoali._icon.classList.add('combat');
  markers.push(yoali);
  var soma = L.marker([736.64, 870.04], {title: 'soma', icon: npcCombatIcon}).bindTooltip('Soma', {className: 'tooltip'}).addTo(map);
  soma._icon.classList.add('soma');
  soma._icon.classList.add('combat');
  markers.push(soma);
  var spacedoutguard = L.marker([671.06, 405.47], {title: 'spacedoutguard', icon: npcGenericIcon}).bindTooltip('Spaced-Out Guard', {className: 'tooltip'}).addTo(map);
  spacedoutguard._icon.classList.add('spacedoutguard');
  markers.push(spacedoutguard);
  var offdutyguard = L.marker([668.06, 405.47], {title: 'offdutyguard', icon: npcGenericIcon}).bindTooltip('Off-Duty Guard', {className: 'tooltip'}).addTo(map);
  offdutyguard._icon.classList.add('offdutyguard');
  markers.push(offdutyguard);
  var chilledoutguard = L.marker([665.06, 405.47], {title: 'chilledoutguard', icon: npcGenericIcon}).bindTooltip('Chilled-Out Guard', {className: 'tooltip'}).addTo(map);
  chilledoutguard._icon.classList.add('chilledoutguard');
  markers.push(chilledoutguard);
  var kemal = L.marker([674.56, 447.48], {title: 'kemal', icon: npcGenericIcon}).bindTooltip('Kemal', {className: 'tooltip'}).addTo(map);
  kemal._icon.classList.add('kemal');
  markers.push(kemal);
  var retiredminer = L.marker([667.78, 460.24], {title: 'retiredminer', icon: npcGenericIcon}).bindTooltip('Retired Miner', {className: 'tooltip'}).addTo(map);
  retiredminer._icon.classList.add('retiredminer');
  markers.push(retiredminer);
  var smithsguardrep = L.marker([675.03, 468.87], {title: 'smithsguardrep', icon: npcGenericIcon}).bindTooltip("Smith's Guard Rep", {className: 'tooltip'}).addTo(map);
  smithsguardrep._icon.classList.add('smithsguardrep');
  markers.push(smithsguardrep);
  var guildmasterjatziri = L.marker([678.03, 468.87], {title: 'guildmasterjatziri', icon: npcGenericIcon}).bindTooltip('Guildmaster Jatziri', {className: 'tooltip'}).addTo(map);
  guildmasterjatziri._icon.classList.add('guildmasterjatziri');
  markers.push(guildmasterjatziri);
  var tepanahui = L.marker([675, 478.86], {title: 'tepanahui', icon: npcGenericIcon}).bindTooltip('Tepanahui', {className: 'tooltip'}).addTo(map);
  tepanahui._icon.classList.add('tepanahui');
  markers.push(tepanahui);
  var donaj = L.marker([675, 482.37], {title: 'donaj', icon: npcGenericIcon}).bindTooltip('Donaj', {className: 'tooltip'}).addTo(map);
  donaj._icon.classList.add('donaj');
  markers.push(donaj);
  var chantico = L.marker([677.5, 501.12], {title: 'chantico', icon: npcGenericIcon}).bindTooltip('Chantico', {className: 'tooltip'}).addTo(map);
  chantico._icon.classList.add('chantico');
  markers.push(chantico);
  var meztli = L.marker([684.75, 482.24], {title: 'meztli', icon: npcGenericIcon}).bindTooltip('Meztli', {className: 'tooltip'}).addTo(map);
  meztli._icon.classList.add('meztli');
  markers.push(meztli);
  var ollinkan = L.marker([716.18, 472.62], {title: 'ollinkan', icon: npcGenericIcon}).bindTooltip('Ollinkan', {className: 'tooltip'}).addTo(map);
  ollinkan._icon.classList.add('ollinkan');
  markers.push(ollinkan);
  var yoltic = L.marker([725.93, 470.62], {title: 'yoltic', icon: npcGenericIcon}).bindTooltip('Yoltic', {className: 'tooltip'}).addTo(map);
  yoltic._icon.classList.add('yoltic');
  markers.push(yoltic);
  var narrativedesigner = L.marker([728.93, 470.62], {title: 'narrativedesigner', icon: npcGenericIcon}).bindTooltip('Narrative Designer', {className: 'tooltip'}).addTo(map);
  narrativedesigner._icon.classList.add('narrativedesigner');
  markers.push(narrativedesigner);
  var xochipilli = L.marker([698.56, 438.36], {title: 'xochipilli', icon: npcGenericIcon}).bindTooltip('Xochipilli', {className: 'tooltip'}).addTo(map);
  xochipilli._icon.classList.add('xochipilli');
  markers.push(xochipilli);
  var xochitl = L.marker([699.93, 440.23], {title: 'xochitl', icon: npcGenericIcon}).bindTooltip('Xochitl', {className: 'tooltip'}).addTo(map);
  xochitl._icon.classList.add('xochitl');
  markers.push(xochitl);
  var tzopelli = L.marker([691.91, 413.7], {title: 'tzopelli', icon: npcGenericIcon}).bindTooltip('Tzopelli', {className: 'tooltip'}).addTo(map);
  tzopelli._icon.classList.add('tzopelli');
  markers.push(tzopelli);
  var generalx = L.marker([605.25, 335.97], {title: 'generalx', icon: npcGenericIcon}).bindTooltip('General X', {className: 'tooltip'}).addTo(map);
  generalx._icon.classList.add('generalx');
  markers.push(generalx);
  var ocelotl = L.marker([561.42, 403.86], {title: 'ocelotl', icon: npcGenericIcon}).bindTooltip('Ocelotl', {className: 'tooltip'}).addTo(map);
  ocelotl._icon.classList.add('ocelotl');
  markers.push(ocelotl);
  var miner = L.marker([552.17, 430.36], {title: 'miner', icon: npcCombatIcon}).bindTooltip('Miner', {className: 'tooltip'}).addTo(map);
  miner._icon.classList.add('miner');
  miner._icon.classList.add('combat');
  markers.push(miner);
  var alitzel = L.marker([551.59, 455.06], {title: 'alitzel', icon: npcGenericIcon}).bindTooltip('Alitzel', {className: 'tooltip'}).addTo(map);
  alitzel._icon.classList.add('alitzel');
  markers.push(alitzel);
  var technologist = L.marker([536.25, 419.71], {title: 'technologist', icon: npcMovingIcon}).bindTooltip('Technologist', {className: 'tooltip'}).addTo(map);
  technologist._icon.classList.add('technologist');
  technologist._icon.classList.add('moving');
  markers.push(technologist);
  var oxomoco = L.marker([527.75, 381.46], {title: 'oxomoco', icon: npcCombatIcon}).bindTooltip('Oxomoco', {className: 'tooltip'}).addTo(map);
  oxomoco._icon.classList.add('oxomoco');
  oxomoco._icon.classList.add('combat');
  markers.push(oxomoco);
  var angryminer = L.marker([510.5, 403.62], {title: 'angryminer', icon: npcCombatIcon}).bindTooltip('Angry Miner', {className: 'tooltip'}).addTo(map);
  angryminer._icon.classList.add('angryminer');
  angryminer._icon.classList.add('combat');
  markers.push(angryminer);
  var crystallographer = L.marker([513.31, 426.93], {title: 'crystallographer', icon: npcGenericIcon}).bindTooltip('Crystallographer', {className: 'tooltip'}).addTo(map);
  crystallographer._icon.classList.add('crystallographer');
  markers.push(crystallographer);
  var cluelessguard = L.marker([486.2, 395.06], {title: 'cluelessguard', icon: npcCombatIcon}).bindTooltip('Clueless Guard', {className: 'tooltip'}).addTo(map);
  cluelessguard._icon.classList.add('cluelessguard');
  cluelessguard._icon.classList.add('combat');
  markers.push(cluelessguard);
  var helplessguard = L.marker([486.2, 397], {title: 'helplessguard', icon: npcCombatIcon}).bindTooltip('Helpless Guard', {className: 'tooltip'}).addTo(map);
  helplessguard._icon.classList.add('helplessguard');
  helplessguard._icon.classList.add('combat');
  markers.push(helplessguard);
  var yuritzi = L.marker([488.34, 426.55], {title: 'yuritzi', icon: npcMovingCombatIcon}).bindTooltip('Yuritzi', {className: 'tooltip'}).addTo(map);
  yuritzi._icon.classList.add('yuritzi');
  yuritzi._icon.classList.add('moving');
  yuritzi._icon.classList.add('combat');
  markers.push(yuritzi);
  var losttourist = L.marker([455.4, 445.46], {title: 'losttourist', icon: npcCombatIcon}).bindTooltip('Lost Tourist', {className: 'tooltip'}).addTo(map);
  losttourist._icon.classList.add('losttourist');
  losttourist._icon.classList.add('combat');
  markers.push(losttourist);
  var xalli = L.marker([445.13, 411.24], {title: 'xalli', icon: npcCombatIcon}).bindTooltip('Xalli', {className: 'tooltip'}).addTo(map);
  xalli._icon.classList.add('xalli');
  xalli._icon.classList.add('combat');
  markers.push(xalli);
  var xalliscompanion = L.marker([442.88, 414.24], {title: 'xalliscompanion', icon: npcCombatIcon}).bindTooltip("Xalli's Companion", {className: 'tooltip'}).addTo(map);
  xalliscompanion._icon.classList.add('xalliscompanion');
  xalliscompanion._icon.classList.add('combat');
  markers.push(xalliscompanion);
  var meya = L.marker([419.38, 390.86], {title: 'meya', icon: npcCombatIcon}).bindTooltip('Meya', {className: 'tooltip'}).addTo(map);
  meya._icon.classList.add('meya');
  meya._icon.classList.add('combat');
  markers.push(meya);
  var meyascompanion = L.marker([422.13, 388.23], {title: 'meyascompanion', icon: npcCombatIcon}).bindTooltip("Meya's Companion", {className: 'tooltip'}).addTo(map);
  meyascompanion._icon.classList.add('meyascompanion');
  meyascompanion._icon.classList.add('combat');
  markers.push(meyascompanion);
  var crystaltemtemfan = L.marker([415.57, 419.28], {title: 'crystaltemtemfan', icon: npcCombatIcon}).bindTooltip('Crystal Temtem Fan', {className: 'tooltip'}).addTo(map);
  crystaltemtemfan._icon.classList.add('crystaltemtemfan');
  crystaltemtemfan._icon.classList.add('combat');
  markers.push(crystaltemtemfan);
  var crystaltemtemfan2 = L.marker([415.57, 421.91], {title: 'crystaltemtemfan2', icon: npcCombatIcon}).bindTooltip('Crystal Temtem Fan 2', {className: 'tooltip'}).addTo(map);
  crystaltemtemfan2._icon.classList.add('crystaltemtemfan2');
  crystaltemtemfan2._icon.classList.add('combat');
  markers.push(crystaltemtemfan2);
  var chauatl = L.marker([430.83, 446.91], {title: 'chauatl', icon: npcGenericIcon}).bindTooltip('Chauatl', {className: 'tooltip'}).addTo(map);
  chauatl._icon.classList.add('chauatl');
  markers.push(chauatl);
  
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
