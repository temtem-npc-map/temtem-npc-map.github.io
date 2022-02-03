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
  var npcBreederIcon = new TemMarker({iconUrl: 'images/icons/npc-breeder.png'});
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
  var indecisiveshopper = L.marker([881.56, 674.23], {title: 'indecisiveshopper', icon: npcMovingIcon}).bindTooltip('Indecisive Shopper', {className: 'tooltip'}).addTo(map);
  indecisiveshopper._icon.classList.add('indecisiveshopper');
  indecisiveshopper._icon.classList.add('moving');
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
  var strandedcaptain = L.marker([776.83, 694.01], {title: 'strandedcaptain', icon: npcGenericIcon}).bindTooltip('Stranded Captain', {className: 'tooltip'}).addTo(map);
  strandedcaptain._icon.classList.add('strandedcaptain');
  markers.push(strandedcaptain);
  var exasperatedtamer = L.marker([781.83, 694.01], {title: 'exasperatedtamer', icon: npcGenericIcon}).bindTooltip('Exasperated Tamer', {className: 'tooltip'}).addTo(map);
  exasperatedtamer._icon.classList.add('exasperatedtamer');
  markers.push(exasperatedtamer);
  var lodger = L.marker([786.83, 694.01], {title: 'lodger', icon: npcGenericIcon}).bindTooltip('Lodger', {className: 'tooltip'}).addTo(map);
  lodger._icon.classList.add('lodger');
  markers.push(lodger);
  var haplesswriter = L.marker([791.83, 694.01], {title: 'haplesswriter', icon: npcGenericIcon}).bindTooltip('Hapless Writer', {className: 'tooltip'}).addTo(map);
  haplesswriter._icon.classList.add('haplesswriter');
  markers.push(haplesswriter);
  var accountant = L.marker([776.83, 699.01], {title: 'accountant', icon: npcGenericIcon}).bindTooltip('Accountant', {className: 'tooltip'}).addTo(map);
  accountant._icon.classList.add('accountant');
  markers.push(accountant);
  var olianasassistant = L.marker([781.83, 699.01], {title: 'olianasassistant', icon: npcGenericIcon}).bindTooltip("Oliana's Assistant", {className: 'tooltip'}).addTo(map);
  olianasassistant._icon.classList.add('olianasassistant');
  markers.push(olianasassistant);
  var oliana = L.marker([786.83, 699.01], {title: 'oliana', icon: npcGenericIcon}).bindTooltip('Oliana', {className: 'tooltip'}).addTo(map);
  oliana._icon.classList.add('oliana');
  markers.push(oliana);
  var intern = L.marker([791.83, 699.01], {title: 'intern', icon: npcGenericIcon}).bindTooltip('Intern', {className: 'tooltip'}).addTo(map);
  intern._icon.classList.add('intern');
  markers.push(intern);
  var designer = L.marker([776.83, 704.01], {title: 'designer', icon: npcGenericIcon}).bindTooltip('Designer', {className: 'tooltip'}).addTo(map);
  designer._icon.classList.add('designer');
  markers.push(designer);
  var nanguitoddler = L.marker([877.53, 630.95], {title: 'nanguitoddler', icon: npcGenericIcon}).bindTooltip('Nangui Toddler', {className: 'tooltip'}).addTo(map);
  nanguitoddler._icon.classList.add('nanguitoddler');
  markers.push(nanguitoddler);
  var nanguigranny = L.marker([877.53, 628.2], {title: 'nanguigranny', icon: npcGenericIcon}).bindTooltip('Nangui Granny', {className: 'tooltip'}).addTo(map);
  nanguigranny._icon.classList.add('nanguigranny');
  markers.push(nanguigranny);
  var loali = L.marker([772.67, 605.43], {title: 'loali', icon: npcGenericIcon}).bindTooltip('Loali', {className: 'tooltip'}).addTo(map);
  loali._icon.classList.add('loali');
  markers.push(loali);
  var stargazer = L.marker([772.67, 609.56], {title: 'stargazer', icon: npcGenericIcon}).bindTooltip('StarGazer', {className: 'tooltip'}).addTo(map);
  stargazer._icon.classList.add('stargazer');
  markers.push(stargazer);
  var tupou = L.marker([816.94, 611.06], {title: 'tupou', icon: npcGenericIcon}).bindTooltip('Tupou', {className: 'tooltip'}).addTo(map);
  tupou._icon.classList.add('tupou');
  markers.push(tupou);
  var losa = L.marker([784.3, 570.8], {title: 'losa', icon: npcGenericIcon}).bindTooltip('Losa', {className: 'tooltip'}).addTo(map);
  losa._icon.classList.add('losa');
  markers.push(losa);
  var tarlae = L.marker([766.04, 642.69], {title: 'tarlae', icon: npcGenericIcon}).bindTooltip('Tarlae', {className: 'tooltip'}).addTo(map);
  tarlae._icon.classList.add('tarlae');
  markers.push(tarlae);
  var dojogirl = L.marker([875.21, 592.65], {title: 'dojogirl', icon: npcGenericIcon}).bindTooltip('Dojo Girl', {className: 'tooltip'}).addTo(map);
  dojogirl._icon.classList.add('dojogirl');
  markers.push(dojogirl);
  var oneeyedmatthew = L.marker([923.43, 599.05], {title: 'oneeyedmatthew', icon: npcCombatIcon}).bindTooltip('One-Eyed Matthew', {className: 'tooltip'}).addTo(map);
  oneeyedmatthew._icon.classList.add('oneeyedmatthew');
  oneeyedmatthew._icon.classList.add('combat');
  markers.push(oneeyedmatthew);
  var aulii = L.marker([932.69, 593.05], {title: 'aulii', icon: npcGenericIcon}).bindTooltip("Auli'i", {className: 'tooltip'}).addTo(map);
  aulii._icon.classList.add('aulii');
  markers.push(aulii);
  var filisione = L.marker([937.69, 593.05], {title: 'filisione', icon: npcCombatIcon}).bindTooltip('Filisione', {className: 'tooltip'}).addTo(map);
  filisione._icon.classList.add('filisione');
  oneeyedmatthew._icon.classList.add('combat');
  markers.push(filisione);
  var sione = L.marker([942.69, 593.05], {title: 'sione', icon: npcCombatIcon}).bindTooltip('Sione', {className: 'tooltip'}).addTo(map);
  sione._icon.classList.add('sione');
  sione._icon.classList.add('combat');
  markers.push(sione);
  var vaitiar = L.marker([947.69, 593.05], {title: 'vaitiar', icon: npcCombatIcon}).bindTooltip('Vaitiaré', {className: 'tooltip'}).addTo(map);
  vaitiar._icon.classList.add('vaitiar');
  vaitiar._icon.classList.add('combat');
  markers.push(vaitiar);
  var taliauli = L.marker([932.69, 598.05], {title: 'taliauli', icon: npcCombatIcon}).bindTooltip("Talia'uli", {className: 'tooltip'}).addTo(map);
  taliauli._icon.classList.add('taliauli');
  taliauli._icon.classList.add('combat');
  markers.push(taliauli);
  var hoku = L.marker([937.69, 598.05], {title: 'hoku', icon: npcCombatIcon}).bindTooltip('Hoku', {className: 'tooltip'}).addTo(map);
  hoku._icon.classList.add('hoku');
  hoku._icon.classList.add('combat');
  markers.push(hoku);
  var tihani = L.marker([942.69, 598.05], {title: 'tihani', icon: npcCombatIcon}).bindTooltip('Tihani', {className: 'tooltip'}).addTo(map);
  tihani._icon.classList.add('tihani');
  tihani._icon.classList.add('combat');
  markers.push(tihani);
  var maata = L.marker([887.97, 546.21], {title: 'maata', icon: npcCombatIcon}).bindTooltip('Maata', {className: 'tooltip'}).addTo(map);
  maata._icon.classList.add('maata');
  maata._icon.classList.add('combat');
  markers.push(maata);
  var temtivist = L.marker([907.48, 486.7], {title: 'temtivist', icon: npcGenericIcon}).bindTooltip('Temtivist', {className: 'tooltip'}).addTo(map);
  temtivist._icon.classList.add('temtivist');
  markers.push(temtivist);
  var freetemcoordinator = L.marker([930.74, 498.71], {title: 'freetemcoordinator', icon: npcGenericIcon}).bindTooltip('FreeTem! Coordinator', {className: 'tooltip'}).addTo(map);
  freetemcoordinator._icon.classList.add('freetemcoordinator');
  markers.push(freetemcoordinator);
  var freetemmanager = L.marker([925.74, 498.71], {title: 'freetemmanager', icon: npcGenericIcon}).bindTooltip('FreeTem! Manager', {className: 'tooltip'}).addTo(map);
  freetemmanager._icon.classList.add('freetemmanager');
  markers.push(freetemmanager);
  var temtembreeder = L.marker([951.21, 529.46], {title: 'temtembreeder', icon: npcBreederIcon}).bindTooltip('Temtem Breeder', {className: 'tooltip'}).addTo(map);
  temtembreeder._icon.classList.add('temtembreeder');
  temtembreeder._icon.classList.add('breeder');
  markers.push(temtembreeder);
  var breecenshopkeeper = L.marker([956.21, 529.46], {title: 'breecenshopkeeper', icon: npcBreederIcon}).bindTooltip('BreeCen Shopkeeper', {className: 'tooltip'}).addTo(map);
  breecenshopkeeper._icon.classList.add('breecenshopkeeper');
  breecenshopkeeper._icon.classList.add('breeder');
  markers.push(breecenshopkeeper);
  var fateia = L.marker([874.7, 489.96], {title: 'fateia', icon: npcCombatIcon}).bindTooltip('Fateia', {className: 'tooltip'}).addTo(map);
  fateia._icon.classList.add('fateia');
  fateia._icon.classList.add('combat');
  markers.push(fateia);
  var siosaia = L.marker([852.43, 468.46], {title: 'siosaia', icon: npcCombatIcon}).bindTooltip('Siosaia', {className: 'tooltip'}).addTo(map);
  siosaia._icon.classList.add('siosaia');
  siosaia._icon.classList.add('combat');
  markers.push(siosaia);
  var leilani = L.marker([806.71, 477.31], {title: 'leilani', icon: npcGenericIcon}).bindTooltip('Leilani', {className: 'tooltip'}).addTo(map);
  leilani._icon.classList.add('leilani');
  markers.push(leilani);
  var vea = L.marker([790.2, 553.07], {title: 'vea', icon: npcCombatIcon}).bindTooltip('Vea?', {className: 'tooltip'}).addTo(map);
  vea._icon.classList.add('vea');
  vea._icon.classList.add('combat');
  markers.push(vea);
  var mea = L.marker([785.7, 553.07], {title: 'mea', icon: npcCombatIcon}).bindTooltip('Mea?', {className: 'tooltip'}).addTo(map);
  mea._icon.classList.add('mea');
  mea._icon.classList.add('combat');
  markers.push(mea);
  var jordi = L.marker([768.11, 534.74], {title: 'jordi', icon: npcCombatIcon}).bindTooltip('Jordi', {className: 'tooltip'}).addTo(map);
  jordi._icon.classList.add('jordi');
  jordi._icon.classList.add('combat');
  markers.push(jordi);
  var koen = L.marker([768.11, 390.21], {title: 'koen', icon: npcCombatIcon}).bindTooltip('Koen', {className: 'tooltip'}).addTo(map);
  koen._icon.classList.add('koen');
  koen._icon.classList.add('combat');
  markers.push(koen);
  var taika = L.marker([795.6, 373.06], {title: 'taika', icon: npcCombatIcon}).bindTooltip('Taika', {className: 'tooltip'}).addTo(map);
  taika._icon.classList.add('taika');
  taika._icon.classList.add('combat');
  markers.push(taika);
  var waruu = L.marker([796.72, 374.69], {title: 'waruu', icon: npcCombatIcon}).bindTooltip('Waruu', {className: 'tooltip'}).addTo(map);
  waruu._icon.classList.add('waruu');
  waruu._icon.classList.add('combat');
  markers.push(waruu);
  var maka = L.marker([862.61, 378.06], {title: 'maka', icon: npcCombatIcon}).bindTooltip('Maka', {className: 'tooltip'}).addTo(map);
  maka._icon.classList.add('maka');
  maka._icon.classList.add('combat');
  markers.push(maka);
  var tamala = L.marker([919.05, 430.12], {title: 'tamala', icon: npcMovingCombatIcon}).bindTooltip('Tamala', {className: 'tooltip'}).addTo(map);
  tamala._icon.classList.add('tamala');
  tamala._icon.classList.add('moving');
  tamala._icon.classList.add('combat');
  markers.push(tamala);
  var fruitpicker2 = L.marker([926.47, 372.49], {title: 'fruitpicker2', icon: npcGenericIcon}).bindTooltip('Fruit Picker 2', {className: 'tooltip'}).addTo(map);
  fruitpicker2._icon.classList.add('fruitpicker2');
  markers.push(fruitpicker2);
  var tuki = L.marker([929.98, 375.49], {title: 'tuki', icon: npcGenericIcon}).bindTooltip('Tuki', {className: 'tooltip'}).addTo(map);
  tuki._icon.classList.add('tuki');
  markers.push(tuki);
  var fruitpicker1 = L.marker([944.23, 399.99], {title: 'fruitpicker1', icon: npcGenericIcon}).bindTooltip('Fruit Picker 1', {className: 'tooltip'}).addTo(map);
  fruitpicker1._icon.classList.add('fruitpicker1');
  markers.push(fruitpicker1);
  var visesiafanboy = L.marker([800.23, 346.36], {title: 'visesiafanboy', icon: npcGenericIcon}).bindTooltip('Visesia Fanboy', {className: 'tooltip'}).addTo(map);
  visesiafanboy._icon.classList.add('visesiafanboy');
  markers.push(visesiafanboy);
  var ukamalover = L.marker([799.6, 314.86], {title: 'ukamalover', icon: npcGenericIcon}).bindTooltip('Ukama Lover', {className: 'tooltip'}).addTo(map);
  ukamalover._icon.classList.add('ukamalover');
  markers.push(ukamalover);
  var retireddojomaster = L.marker([884.73, 302.1], {title: 'retireddojomaster', icon: npcGenericIcon}).bindTooltip('Retired Dojo Master', {className: 'tooltip'}).addTo(map);
  retireddojomaster._icon.classList.add('retireddojomaster');
  markers.push(retireddojomaster);
  var lazyvillager = L.marker([906.12, 313.86], {title: 'lazyvillager', icon: npcGenericIcon}).bindTooltip('Lazy Villager', {className: 'tooltip'}).addTo(map);
  lazyvillager._icon.classList.add('lazyvillager');
  markers.push(lazyvillager);
  var sanyu = L.marker([905.93, 338.66], {title: 'sanyu', icon: npcGenericIcon}).bindTooltip('Sanyu', {className: 'tooltip'}).addTo(map);
  sanyu._icon.classList.add('sanyu');
  markers.push(sanyu);
  var dembe = L.marker([910.93, 338.66], {title: 'dembe', icon: npcGenericIcon}).bindTooltip('Dembe', {className: 'tooltip'}).addTo(map);
  dembe._icon.classList.add('dembe');
  markers.push(dembe);
  var amateurcook = L.marker([915.93, 338.66], {title: 'amateurcook', icon: npcGenericIcon}).bindTooltip('Amateur Cook', {className: 'tooltip'}).addTo(map);
  amateurcook._icon.classList.add('amateurcook');
  markers.push(amateurcook);
  var politevillager = L.marker([925.07, 291.34], {title: 'politevillager', icon: npcGenericIcon}).bindTooltip('Polite Villager', {className: 'tooltip'}).addTo(map);
  politevillager._icon.classList.add('politevillager');
  markers.push(politevillager);
  var nonplussedvillager = L.marker([930.07, 291.34], {title: 'nonplussedvillager', icon: npcGenericIcon}).bindTooltip('Nonplussed Villager', {className: 'tooltip'}).addTo(map);
  nonplussedvillager._icon.classList.add('nonplussedvillager');
  markers.push(nonplussedvillager);
  var tofia = L.marker([937.47, 263.97], {title: 'tofia', icon: npcClothingIcon}).bindTooltip('Tofia', {className: 'tooltip'}).addTo(map);
  tofia._icon.classList.add('tofia');
  tofia._icon.classList.add('clothing');
  markers.push(tofia);
  var tofia = L.marker([937.47, 263.97], {title: 'tofia', icon: npcClothingIcon}).bindTooltip('Tofia', {className: 'tooltip'}).addTo(map);
  tofia._icon.classList.add('tofia');
  tofia._icon.classList.add('clothing');
  markers.push(tofia);
  var bigfootedshopper = L.marker([942.47, 263.97], {title: 'bigfootedshopper', icon: npcGenericIcon}).bindTooltip('Big-Footed Shopper', {className: 'tooltip'}).addTo(map);
  bigfootedshopper._icon.classList.add('bigfootedshopper');
  markers.push(bigfootedshopper);
  var myrislanman = L.marker([843.45, 264.22], {title: 'myrislanman', icon: npcGenericIcon}).bindTooltip('Myrislan Man', {className: 'tooltip'}).addTo(map);
  myrislanman._icon.classList.add('myrislanman');
  markers.push(myrislanman);
  var myrislanwoman = L.marker([854.71, 253.22], {title: 'myrislanwoman', icon: npcGenericIcon}).bindTooltip('Myrislan Woman', {className: 'tooltip'}).addTo(map);
  myrislanwoman._icon.classList.add('myrislanwoman');
  markers.push(myrislanwoman);
  
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
