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
  var npcAinaIcon = new TemMarker({iconUrl: 'images/icons/aina.png'});  
  var npcMeleeGuardIcon = new TemMarker({iconUrl: 'images/icons/npc-melee-guard.png'});
  
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
  var vavua = L.marker([364.63, 256.4], {title: 'vavua', icon: npcGenericIcon}).bindTooltip('Vavua', {className: 'tooltip'}).addTo(map);
  vavua._icon.classList.add('vavua');
  markers.push(vavua);
  var fred = L.marker([364.63, 259.4], {title: 'fred', icon: npcGenericIcon}).bindTooltip('Fred', {className: 'tooltip'}).addTo(map);
  fred._icon.classList.add('fred');
  markers.push(fred);
  var profgreen = L.marker([369.63, 250.4], {title: 'profgreen', icon: npcGenericIcon}).bindTooltip('Prof. Green', {className: 'tooltip'}).addTo(map);
  profgreen._icon.classList.add('profgreen');
  markers.push(profgreen);
  var scarlett = L.marker([369.63, 369.63], {title: 'scarlett', icon: npcGenericIcon}).bindTooltip('Scarlett', {className: 'tooltip'}).addTo(map);
  scarlett._icon.classList.add('scarlett');
  markers.push(scarlett);
  var sienna = L.marker([369.63, 256.4], {title: 'sienna', icon: npcGenericIcon}).bindTooltip('Sienna', {className: 'tooltip'}).addTo(map);
  sienna._icon.classList.add('sienna');
  markers.push(sienna);
  var aina = L.marker([369.63, 259.4], {title: 'aina', icon: npcAinaIcon}).bindTooltip('Aina', {className: 'tooltip'}).addTo(map);
  aina._icon.classList.add('aina');
  aina._icon.classList.add('combat');
  markers.push(aina);
  var annabelle = L.marker([400.83, 306.53], {title: 'annabelle', icon: npcGenericIcon}).bindTooltip('Annabelle', {className: 'tooltip'}).addTo(map);
  annabelle._icon.classList.add('annabelle');
  markers.push(annabelle);
  var holly = L.marker([412.45, 314.78], {title: 'holly', icon: npcGenericIcon}).bindTooltip('Holly', {className: 'tooltip'}).addTo(map);
  holly._icon.classList.add('holly');
  markers.push(holly);
  var marehau = L.marker([407.45, 289.77], {title: 'marehau', icon: npcGenericIcon}).bindTooltip('Marehau', {className: 'tooltip'}).addTo(map);
  marehau._icon.classList.add('marehau');
  markers.push(marehau);
  var freya = L.marker([440.88, 303.74], {title: 'freya', icon: npcGenericIcon}).bindTooltip('Freya', {className: 'tooltip'}).addTo(map);
  freya._icon.classList.add('freya');
  markers.push(freya);
  var aline = L.marker([440.88, 306.74], {title: 'aline', icon: npcGenericIcon}).bindTooltip('Aline', {className: 'tooltip'}).addTo(map);
  aline._icon.classList.add('aline');
  markers.push(aline);
  var propertontemporium = L.marker([440.88, 309.74], {title: 'propertontemporium', icon: npcVendorIcon}).bindTooltip('Properton Temporium', {className: 'tooltip'}).addTo(map);
  propertontemporium._icon.classList.add('propertontemporium');
  propertontemporium._icon.classList.add('vendor');
  markers.push(propertontemporium);
  var amber = L.marker([429.75, 275.48], {title: 'amber', icon: npcGenericIcon}).bindTooltip('Amber', {className: 'tooltip'}).addTo(map);
  amber._icon.classList.add('amber');
  markers.push(amber);
  var stanley = L.marker([443.99, 242.19], {title: 'stanley', icon: npcGenericIcon}).bindTooltip('Stanley', {className: 'tooltip'}).addTo(map);
  stanley._icon.classList.add('stanley');
  markers.push(stanley);
  var loganstours = L.marker([488.25, 264.73], {title: 'loganstours', icon: npcGenericIcon}).bindTooltip("Logan's Tours", {className: 'tooltip'}).addTo(map);
  loganstours._icon.classList.add('loganstours');
  markers.push(loganstours);
  var hannah = L.marker([420.12, 352.22], {title: 'hannah', icon: npcGenericIcon}).bindTooltip('Hannah', {className: 'tooltip'}).addTo(map);
  hannah._icon.classList.add('hannah');
  markers.push(hannah);
  var jester = L.marker([421.87, 366.72], {title: 'jester', icon: npcGenericIcon}).bindTooltip('Jester', {className: 'tooltip'}).addTo(map);
  jester._icon.classList.add('jester');
  markers.push(jester);
  var ladyromanescu = L.marker([397.03, 351.35], {title: 'ladyromanescu', icon: npcGenericIcon}).bindTooltip('Lady Romanescu', {className: 'tooltip'}).addTo(map);
  ladyromanescu._icon.classList.add('ladyromanescu');
  markers.push(ladyromanescu);
  var poolpaul = L.marker([397.03, 354.35], {title: 'poolpaul', icon: npcGenericIcon}).bindTooltip('Pool Paul', {className: 'tooltip'}).addTo(map);
  poolpaul._icon.classList.add('poolpaul');
  markers.push(poolpaul);
  var christathefashionista = L.marker([467.38, 336.05], {title: 'christathefashionista', icon: npcClothingIcon}).bindTooltip('Christa the Fashionista', {className: 'tooltip'}).addTo(map);
  christathefashionista._icon.classList.add('christathefashionista');
  christathefashionista._icon.classList.add('clothing');
  markers.push(christathefashionista);
  var peenrelakos = L.marker([470.38, 336.05], {title: 'peenrelakos', icon: npcGenericIcon}).bindTooltip('Peenrelakos', {className: 'tooltip'}).addTo(map);
  peenrelakos._icon.classList.add('peenrelakos');
  markers.push(peenrelakos);
  var isabelle = L.marker([467.37, 339.05], {title: 'isabelle', icon: npcGenericIcon}).bindTooltip('Isabelle', {className: 'tooltip'}).addTo(map);
  isabelle._icon.classList.add('isabelle');
  markers.push(isabelle);
  var imogen = L.marker([470.37, 339.05], {title: 'imogen', icon: npcGenericIcon}).bindTooltip('Imogen', {className: 'tooltip'}).addTo(map);
  imogen._icon.classList.add('imogen');
  markers.push(imogen);
  var henry = L.marker([467.37, 342.05], {title: 'henry', icon: npcGenericIcon}).bindTooltip('Henry', {className: 'tooltip'}).addTo(map);
  henry._icon.classList.add('henry');
  markers.push(henry);
  var adam = L.marker([470.37, 297.74], {title: 'adam', icon: npcGenericIcon}).bindTooltip('Adam', {className: 'tooltip'}).addTo(map);
  adam._icon.classList.add('adam');
  markers.push(adam);
  var percival = L.marker([466.32, 282.57], {title: 'percival', icon: npcCombatIcon}).bindTooltip('Percival', {className: 'tooltip'}).addTo(map);
  percival._icon.classList.add('percival');
  percival._icon.classList.add('combat');
  markers.push(percival);
  var suzie = L.marker([466.32, 285.57], {title: 'suzie', icon: npcCombatIcon}).bindTooltip('Suzie', {className: 'tooltip'}).addTo(map);
  suzie._icon.classList.add('suzie');
  suzie._icon.classList.add('combat');
  markers.push(suzie);
  var jason = L.marker([466.32, 288.57], {title: 'jason', icon: npcCombatIcon}).bindTooltip('Jason', {className: 'tooltip'}).addTo(map);
  jason._icon.classList.add('jason');
  jason._icon.classList.add('combat');
  markers.push(jason);
  var nikki = L.marker([466.32, 291.57], {title: 'nikki', icon: npcCombatIcon}).bindTooltip('Nikki', {className: 'tooltip'}).addTo(map);
  nikki._icon.classList.add('nikki');
  nikki._icon.classList.add('combat');
  markers.push(nikki);
  var chrissy = L.marker([471.32, 282.57], {title: 'chrissy', icon: npcCombatIcon}).bindTooltip('Chrissy', {className: 'tooltip'}).addTo(map);
  chrissy._icon.classList.add('chrissy');
  chrissy._icon.classList.add('combat');
  markers.push(chrissy);
  var arthur = L.marker([471.32, 285.57], {title: 'arthur', icon: npcCombatIcon}).bindTooltip('Arthur', {className: 'tooltip'}).addTo(map);
  arthur._icon.classList.add('arthur');
  arthur._icon.classList.add('combat');
  markers.push(arthur);
  var propertondojomc = L.marker([471.32, 288.57], {title: 'propertondojomc', icon: npcGenericIcon}).bindTooltip('Properton Dojo MC', {className: 'tooltip'}).addTo(map);
  propertondojomc._icon.classList.add('propertondojomc');
  markers.push(propertondojomc);
  var sewersam = L.marker([404.56, 260.12], {title: 'sewersam', icon: npcGenericIcon}).bindTooltip('Sewer Sam', {className: 'tooltip'}).addTo(map);
  sewersam._icon.classList.add('sewersam');
  markers.push(sewersam);
  var jessica = L.marker([404.56, 263.12], {title: 'jessica', icon: npcGenericIcon}).bindTooltip('Jessica', {className: 'tooltip'}).addTo(map);
  jessica._icon.classList.add('jessica');
  markers.push(jessica);
  var neal = L.marker([404.56, 266.12], {title: 'neal', icon: npcGenericIcon}).bindTooltip('Neal', {className: 'tooltip'}).addTo(map);
  neal._icon.classList.add('neal');
  markers.push(neal);
  var ruth = L.marker([407.56, 260.12], {title: 'ruth', icon: npcGenericIcon}).bindTooltip('Ruth', {className: 'tooltip'}).addTo(map);
  ruth._icon.classList.add('ruth');
  markers.push(ruth);
  var nate = L.marker([407.56, 263.12], {title: 'nate', icon: npcGenericIcon}).bindTooltip('Nate', {className: 'tooltip'}).addTo(map);
  nate._icon.classList.add('nate');
  markers.push(nate);
  var tim = L.marker([475.02, 244.82], {title: 'tim', icon: npcGenericIcon}).bindTooltip('Tim', {className: 'tooltip'}).addTo(map);
  tim._icon.classList.add('tim');
  markers.push(tim);
  var frances = L.marker([475.02, 247.82], {title: 'frances', icon: npcGenericIcon}).bindTooltip('Frances', {className: 'tooltip'}).addTo(map);
  frances._icon.classList.add('frances');
  markers.push(frances);
  var isaac = L.marker([498.69, 248.8], {title: 'isaac', icon: npcGenericIcon}).bindTooltip('Isaac', {className: 'tooltip'}).addTo(map);
  isaac._icon.classList.add('isaac');
  markers.push(isaac);
  var amelia = L.marker([498.69, 251.8], {title: 'amelia', icon: npcGenericIcon}).bindTooltip('Amelia', {className: 'tooltip'}).addTo(map);
  amelia._icon.classList.add('amelia');
  markers.push(amelia);
  var rupert = L.marker([497.81, 273.62], {title: 'rupert', icon: npcGenericIcon}).bindTooltip('Rupert', {className: 'tooltip'}).addTo(map);
  rupert._icon.classList.add('rupert');
  markers.push(rupert);
  var virgina = L.marker([497.81, 276.62], {title: 'virgina', icon: npcGenericIcon}).bindTooltip('Virgina', {className: 'tooltip'}).addTo(map);
  virgina._icon.classList.add('virgina');
  markers.push(virgina);
  var neil = L.marker([497.81, 279.62], {title: 'neil', icon: npcGenericIcon}).bindTooltip('Neil', {className: 'tooltip'}).addTo(map);
  neil._icon.classList.add('neil');
  markers.push(neil);
  var fishyphil = L.marker([501.82, 323.83], {title: 'fishyphil', icon: npcGenericIcon}).bindTooltip('Fishy Phil', {className: 'tooltip'}).addTo(map);
  fishyphil._icon.classList.add('fishyphil');
  markers.push(fishyphil);
  var alyssa = L.marker([501.07, 311.83], {title: 'alyssa', icon: npcGenericIcon}).bindTooltip('Alyssa', {className: 'tooltip'}).addTo(map);
  alyssa._icon.classList.add('alyssa');
  markers.push(alyssa);
  var bighugh = L.marker([499.69, 369], {title: 'bighugh', icon: npcGenericIcon}).bindTooltip('Big Hugh', {className: 'tooltip'}).addTo(map);
  bighugh._icon.classList.add('bighugh');
  markers.push(bighugh);
  var ian = L.marker([463.38, 366.96], {title: 'ian', icon: npcGenericIcon}).bindTooltip('Ian', {className: 'tooltip'}).addTo(map);
  ian._icon.classList.add('ian');
  markers.push(ian);
  var patrick = L.marker([466.38, 366.96], {title: 'patrick', icon: npcGenericIcon}).bindTooltip('Patrick', {className: 'tooltip'}).addTo(map);
  patrick._icon.classList.add('patrick');
  markers.push(patrick);
  var rigoberta = L.marker([455.88, 364.71], {title: 'rigoberta', icon: npcGenericIcon}).bindTooltip('Rigoberta', {className: 'tooltip'}).addTo(map);
  rigoberta._icon.classList.add('rigoberta');
  markers.push(rigoberta);
  var ermengildo = L.marker([455.88, 367.71], {title: 'ermengildo', icon: npcGenericIcon}).bindTooltip('Ermengildo', {className: 'tooltip'}).addTo(map);
  ermengildo._icon.classList.add('ermengildo');
  markers.push(ermengildo);
  var saturnino = L.marker([455.88, 370.71], {title: 'saturnino', icon: npcGenericIcon}).bindTooltip('Saturnino', {className: 'tooltip'}).addTo(map);
  saturnino._icon.classList.add('saturnino');
  markers.push(saturnino);
  var jonsewerinspector = L.marker([321.1, 536.44], {title: 'jonsewerinspector', icon: npcGenericIcon}).bindTooltip('Jon, Sewer Inspector', {className: 'tooltip'}).addTo(map);
  jonsewerinspector._icon.classList.add('jonsewerinspector');
  markers.push(jonsewerinspector);
  var alejandra = L.marker([286.39, 529.53], {title: 'alejandra', icon: npcCombatIcon}).bindTooltip('Alejandra', {className: 'tooltip'}).addTo(map);
  alejandra._icon.classList.add('alejandra');
  alejandra._icon.classList.add('combat');
  markers.push(alejandra);
  var drunkbelsoto = L.marker([271.03, 510.23], {title: 'drunkbelsoto', icon: npcGenericIcon}).bindTooltip('Drunk Belsoto', {className: 'tooltip'}).addTo(map);
  drunkbelsoto._icon.classList.add('drunkbelsoto');
  markers.push(drunkbelsoto);
  var anacaona = L.marker([286.94, 502.38], {title: 'anacaona', icon: npcCombatIcon}).bindTooltip('Anacaona', {className: 'tooltip'}).addTo(map);
  anacaona._icon.classList.add('anacaona');
  anacaona._icon.classList.add('combat');
  markers.push(anacaona);
  var belsotoshirker = L.marker([301.92, 510.96], {title: 'belsotoshirker', icon: npcCombatIcon}).bindTooltip('Belsoto Shirker', {className: 'tooltip'}).addTo(map);
  belsotoshirker._icon.classList.add('belsotoshirker');
  belsotoshirker._icon.classList.add('combat');
  markers.push(belsotoshirker);
  var sewerkate = L.marker([256.47, 490.59], {title: 'sewerkate', icon: npcCombatIcon}).bindTooltip('Sewer Kate', {className: 'tooltip'}).addTo(map);
  sewerkate._icon.classList.add('sewerkate');
  sewerkate._icon.classList.add('combat');
  markers.push(sewerkate);
  var sewerbob = L.marker([253.48, 449.06], {title: 'sewerbob', icon: npcMovingCombatIcon}).bindTooltip('Sewer Bob', {className: 'tooltip'}).addTo(map);
  sewerbob._icon.classList.add('sewerbob');
  sewerbob._icon.classList.add('moving');
  sewerbob._icon.classList.add('combat');
  markers.push(sewerbob);
  var saylene = L.marker([302.99, 430.23], {title: 'saylene', icon: npcCombatIcon}).bindTooltip('Saylene', {className: 'tooltip'}).addTo(map);
  saylene._icon.classList.add('saylene');
  saylene._icon.classList.add('combat');
  markers.push(saylene);
  var barbara = L.marker([396.58, 450.21], {title: 'barbara', icon: npcCombatIcon}).bindTooltip('Barbara', {className: 'tooltip'}).addTo(map);
  barbara._icon.classList.add('barbara');
  barbara._icon.classList.add('combat');
  markers.push(barbara);
  var philip = L.marker([304.9, 450.21], {title: 'philip', icon: npcCombatIcon}).bindTooltip('Philip', {className: 'tooltip'}).addTo(map);
  philip._icon.classList.add('philip');
  philip._icon.classList.add('combat');
  markers.push(philip);
  var culadra = L.marker([352.61, 481.55], {title: 'culadra', icon: npcGenericIcon}).bindTooltip('Culadra', {className: 'tooltip'}).addTo(map);
  culadra._icon.classList.add('culadra');
  markers.push(culadra);
  var timmy = L.marker([377.13, 474.22], {title: 'timmy', icon: npcCombatIcon}).bindTooltip('Timmy', {className: 'tooltip'}).addTo(map);
  timmy._icon.classList.add('timmy');
  timmy._icon.classList.add('combat');
  markers.push(timmy);
  var sally = L.marker([377.13, 475.66], {title: 'sally', icon: npcCombatIcon}).bindTooltip('Sally', {className: 'tooltip'}).addTo(map);
  sally._icon.classList.add('sally');
  sally._icon.classList.add('combat');
  markers.push(sally);
  var reesaka = L.marker([377.13, 501.37], {title: 'reesaka', icon: npcCombatIcon}).bindTooltip('Rees Aka', {className: 'tooltip'}).addTo(map);
  reesaka._icon.classList.add('reesaka');
  reesaka._icon.classList.add('combat');
  markers.push(reesaka);
  var guidejoe = L.marker([377.13, 512.5], {title: 'guidejoe', icon: npcMovingCombatIcon}).bindTooltip('Guide Joe', {className: 'tooltip'}).addTo(map);
  guidejoe._icon.classList.add('guidejoe');
  guidejoe._icon.classList.add('moving');
  guidejoe._icon.classList.add('combat');
  markers.push(guidejoe);
  var profmapidozi = L.marker([339.53, 540.48], {title: 'profmapidozi', icon: npcCombatIcon}).bindTooltip('Prof. Mapidozi', {className: 'tooltip'}).addTo(map);
  profmapidozi._icon.classList.add('profmapidozi');
  profmapidozi._icon.classList.add('combat');
  markers.push(profmapidozi);
  var sewerjane = L.marker([338.82, 477.84], {title: 'sewerjane', icon: npcCombatIcon}).bindTooltip('Sewer Jane', {className: 'tooltip'}).addTo(map);
  sewerjane._icon.classList.add('sewerjane');
  sewerjane._icon.classList.add('combat');
  markers.push(sewerjane);
  var mudlark = L.marker([344.88, 462.92], {title: 'mudlark', icon: npcCombatIcon}).bindTooltip('Mudlark', {className: 'tooltip'}).addTo(map);
  mudlark._icon.classList.add('mudlark');
  mudlark._icon.classList.add('combat');
  markers.push(mudlark);
  var terrifiedbelsoto = L.marker([321.94, 465.27], {title: 'terrifiedbelsoto', icon: npcCombatIcon}).bindTooltip('Terrified Belsoto', {className: 'tooltip'}).addTo(map);
  terrifiedbelsoto._icon.classList.add('terrifiedbelsoto');
  terrifiedbelsoto._icon.classList.add('combat');
  markers.push(terrifiedbelsoto);
  var scaredbelsoto = L.marker([320.44, 465.27], {title: 'scaredbelsoto', icon: npcCombatIcon}).bindTooltip('Scared Belsoto', {className: 'tooltip'}).addTo(map);
  scaredbelsoto._icon.classList.add('scaredbelsoto');
  scaredbelsoto._icon.classList.add('combat');
  markers.push(scaredbelsoto);
  var mrseuphegenia = L.marker([591.31, 460.72], {title: 'mrseuphegenia', icon: npcGenericIcon}).bindTooltip('Mrs. Euphegenia', {className: 'tooltip'}).addTo(map);
  mrseuphegenia._icon.classList.add('mrseuphegenia');
  markers.push(mrseuphegenia);
  var lachina = L.marker([602.88, 471.42], {title: 'lachina', icon: npcGenericIcon}).bindTooltip('Lachina', {className: 'tooltip'}).addTo(map);
  lachina._icon.classList.add('lachina');
  markers.push(lachina);
  var kirstine = L.marker([605.88, 471.42], {title: 'kirstine', icon: npcGenericIcon}).bindTooltip('Kirstine', {className: 'tooltip'}).addTo(map);
  kirstine._icon.classList.add('kirstine');
  markers.push(kirstine);
  var archie = L.marker([608.88, 471.42], {title: 'archie', icon: npcGenericIcon}).bindTooltip('Archie', {className: 'tooltip'}).addTo(map);
  archie._icon.classList.add('archie');
  markers.push(archie);
  var claymorebartender = L.marker([602.88, 474.42], {title: 'claymorebartender', icon: npcGenericIcon}).bindTooltip('Claymore Bartender', {className: 'tooltip'}).addTo(map);
  claymorebartender._icon.classList.add('claymorebartender');
  markers.push(claymorebartender);
  var nict = L.marker([605.88, 474.42], {title: 'nict', icon: npcGenericIcon}).bindTooltip('Nicté', {className: 'tooltip'}).addTo(map);
  nict._icon.classList.add('nict');
  markers.push(nict);
  var gilberto = L.marker([608.88, 474.42], {title: 'gilberto', icon: npcGenericIcon}).bindTooltip('Gilberto', {className: 'tooltip'}).addTo(map);
  gilberto._icon.classList.add('gilberto');
  markers.push(gilberto);
  var reddeirdre = L.marker([602.88, 477.42], {title: 'reddeirdre', icon: npcGenericIcon}).bindTooltip('Red Deirdre', {className: 'tooltip'}).addTo(map);
  reddeirdre._icon.classList.add('reddeirdre');
  markers.push(reddeirdre);
  var anisa = L.marker([605.88, 477.42], {title: 'anisa', icon: npcGenericIcon}).bindTooltip('Anisa', {className: 'tooltip'}).addTo(map);
  anisa._icon.classList.add('anisa');
  markers.push(anisa);
  var marktheknife = L.marker([608.88, 477.42], {title: 'marktheknife', icon: npcGenericIcon}).bindTooltip('Mark the Knife', {className: 'tooltip'}).addTo(map);
  marktheknife._icon.classList.add('marktheknife');
  markers.push(marktheknife);
  var eilidh = L.marker([598.48, 500.61], {title: 'eilidh', icon: npcMovingIcon}).bindTooltip('Eilidh', {className: 'tooltip'}).addTo(map);
  eilidh._icon.classList.add('eilidh');
  eilidh._icon.classList.add('moving');
  markers.push(eilidh);
  var iain = L.marker([594.48, 495.3], {title: 'iain', icon: npcGenericIcon}).bindTooltip('Iain', {className: 'tooltip'}).addTo(map);
  iain._icon.classList.add('iain');
  markers.push(iain);
  var meleetamer = L.marker([570.98, 468.24], {title: 'meleetamer', icon: npcGenericIcon}).bindTooltip('Melee Tamer', {className: 'tooltip'}).addTo(map);
  meleetamer._icon.classList.add('meleetamer');
  markers.push(meleetamer);
  var kathleen = L.marker([545.43, 476.75], {title: 'kathleen', icon: npcGenericIcon}).bindTooltip('Kathleen', {className: 'tooltip'}).addTo(map);
  kathleen._icon.classList.add('kathleen');
  markers.push(kathleen);
  var lily = L.marker([545.43, 479.75], {title: 'lily', icon: npcGenericIcon}).bindTooltip('Lily', {className: 'tooltip'}).addTo(map);
  lily._icon.classList.add('lily');
  markers.push(lily);
  var aoife = L.marker([541.39, 521.08], {title: 'aoife', icon: npcGenericIcon}).bindTooltip('Aoife', {className: 'tooltip'}).addTo(map);
  aoife._icon.classList.add('aoife');
  markers.push(aoife);
  var lacey = L.marker([546.82, 535.05], {title: 'lacey', icon: npcGenericIcon}).bindTooltip('Lacey', {className: 'tooltip'}).addTo(map);
  lacey._icon.classList.add('lacey');
  markers.push(lacey);
  
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
