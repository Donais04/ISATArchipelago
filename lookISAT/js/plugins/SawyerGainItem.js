

//Sawyer: Gain Item!

gain = function(item, randomized) {
	randomized = randomized || false; //so function can be called without second param
		if ($gameSystem.gameType == 2){
			//var get = Sawyer.pickupArray[Archipelago[item]]["Item"];
			var get = Location[item];
			//Ask the client to send the item in question; If it's a Silver Daze item, the client will send it to us.
			//We can do this by storing all of the items that are received by the player in an array, then checking every couple frames if that item has been sent/received.
			//This will prevent duplicates, as well as "duds" that don't send, if the player loses connection with the client.
			//If the game isn't Archipelago, then we'll give the item to the player through normal means.
			//We should also error log if the game isn't connected to the client.
			//console.log(get);
			Rando.client.check(get);
			//console.log(get);
			if ($gamePlayer.locationScout[get].receiver.name !== client.players.self.name && $gamePlayer.locationScout[get].receiver.name !== undefined || 
			    $gamePlayer.locationScout[get].game !== "Silver Daze"){
						
				if ($gamePlayer.locationScout[get].receiver.name == undefined){
					$gameVariables._data[500].push('\\i[' + 192 + ']' + $gamePlayer.locationScout[get].name + ' for ' + 'another world...');
				}else{
					$gameVariables._data[500].push('\\i[' + 192 + ']' + $gamePlayer.locationScout[get].name + ' for ' + $gamePlayer.locationScout[get].receiver.name);
				}
				$gameSwitches.setValue(128,true);
				// if ($gameParty && !$gameParty.inBattle()){
					// AudioManager.playSe({name:'1RankA',volume:90,pitch:100,pan:50}); 
					// $gameMessage.newPage();
					// $gameMessage.add('GET: ' + $gameVariables._data[500][0]);
					// $gameMap._interpreter.setWaitMode('message');
					// $gameVariables._data[500].shift();
				// }
				
			}
			if ($gamePlayer.locationScout[get].offline){
				var id = $gamePlayer.locationScout[get].id;
					$gameParty._receivedItemName = 0;
					if (id < 1000){
						$gameParty.gainItem($dataWeapons[id], 1);
						$gameParty._receivedItemName = $dataWeapons[id].name;
						$gameVariables._data[500].push('\\i[' + $dataWeapons[id].iconIndex + ']' + $dataWeapons[id].name);
					}
					if (id > 1000 && id < 2000){
						$gameParty.gainItem($dataArmors[id - 1000], 1);
						$gameParty._receivedItemName = $dataArmors[id - 1000].name;
						// $gameVariables.setValue(500,'\\i[' + $dataArmors[id - 1000].iconIndex + ']' + $dataArmors[id - 1000].name);
						$gameVariables._data[500].push('\\i[' + $dataArmors[id - 1000].iconIndex + ']' + $dataArmors[id - 1000].name);
					}
					if (id > 2000 && id < 3000){
						$gameParty.gainItem($dataItems[id - 2000], 1);
						$gameParty._receivedItemName = $dataItems[id - 2000].name;
						// $gameVariables.setValue(500,'\\i[' + $dataItems[id - 2000].iconIndex + ']' + $dataItems[id - 2000].name);
						$gameVariables._data[500].push('\\i[' + $dataItems[id - 2000].iconIndex + ']' + $dataItems[id - 2000].name);
					}
					if (id > 3000 && id < 4000){
						$gameParty.addActor(id - 3000);
						$gameActors.actor(id - 3000).recoverAll();
						$gameParty._receivedItemName = '\\i[' + Sawyer.Extra.ActorIcons[id - 3000] + ']' + $gameActors.actor(id - 3000)._name;
						// $gameVariables.setValue(500,'\\i[' + Sawyer.Extra.ActorIcons[id - 3000] + ']' + $gameActors.actor(id - 3000)._name);
						$gameVariables._data[500].push('\\i[' + Sawyer.Extra.ActorIcons[id - 3000] + ']' + $gameActors.actor(id - 3000)._name);
					}	
					if (id > 4000 && id < 5000){
						$gameSwitches.setValue(id - 4000,true);
						$gameParty._receivedItemName = '\\i[194]'+ Sawyer.SwitchNames[id - 4000];
						// $gameVariables.setValue(500,'\\i[194]'+ Sawyer.SwitchNames[id - 4000]);
						$gameVariables._data[500].push('\\i[194]'+ Sawyer.SwitchNames[id - 4000]);
						$gameSwitches.setValue(280, true);
					}
					if (id > 5000){
						console.log('Archipelago');
						if (Archipelago[id - 5000]){
							// $gameVariables.setValue(500,'\\i[193]' + Archipelago[id - 5000].name);
							$gameVariables._data[500].push('\\i[193]' + Archipelago[id - 5000].name);
						} else {
							// $gameVariables.setValue(500,'\\i[193] Archipelago Item');
							$gameVariables._data[500].push('\\i[193] Archipelago Item');
						}
					}
					$gameTemp.reserveCommonEvent(242);
				}
				 
			
			
		} else { //not important
				if (!item) $gameMessage.add('PROBLEM!');
				var get = Sawyer.pickupArray[item]['Item'];
				console.log('Get '+ item);

			if (!randomized && Sawyer.Extra.Rando){
				var newPickup = $gamePlayer.randomArray[item];
				gain(newPickup, true)
				//Sawyer: You'll use this part to remove stuff from the tracker.
				for (var i = 0; i < Sawyer.pickupArray[item].Zones.length; i++){
					//console.log(Sawyer.pickupArray[item].Zones[i]);
					//console.log($gamePlayer.randomChecks[Sawyer.pickupArray[item].Zones[i]]);
				}
				
				return;
			}else{
				if (Sawyer.Extra.Rando){
					$gamePlayer.getRando[item] = true;
				}
			}
	
			$gameParty._receivedItemName = 0;
			if (get < 1000){
				$gameParty.gainItem($dataWeapons[get], 1);
				$gameParty._receivedItemName = $dataWeapons[get].name;
				//$gameVariables.setValue(500,'\\i[' + $dataWeapons[get].iconIndex + ']' + $dataWeapons[get].name);
				$gameVariables._data[500].push('\\i[' + $dataWeapons[get].iconIndex + ']' + $dataWeapons[get].name);
			}
			if (get > 1000 && get < 2000){
				$gameParty.gainItem($dataArmors[get - 1000], 1);
				$gameParty._receivedItemName = $dataArmors[get - 1000].name;
				// $gameVariables.setValue(500,'\\i[' + $dataArmors[get - 1000].iconIndex + ']' + $dataArmors[get - 1000].name);
				$gameVariables._data[500].push('\\i[' + $dataArmors[get - 1000].iconIndex + ']' + $dataArmors[get - 1000].name);
			}
			if (get > 2000 && get < 3000){
				$gameParty.gainItem($dataItems[get - 2000], 1);
				$gameParty._receivedItemName = $dataItems[get - 2000].name;
				// $gameVariables.setValue(500,'\\i[' + $dataItems[get - 2000].iconIndex + ']' + $dataItems[get - 2000].name);
				$gameVariables._data[500].push('\\i[' + $dataItems[get - 2000].iconIndex + ']' + $dataItems[get - 2000].name);
			}
			if (get > 3000 && get < 4000){
				$gameParty.addActor(get - 3000);
				$gameActors.actor(get - 3000).recoverAll();
				$gameParty._receivedItemName = '\\i[' + Sawyer.Extra.ActorIcons[get - 3000] + ']' + $gameActors.actor(get - 3000)._name;
				// $gameVariables.setValue(500,'\\i[' + Sawyer.Extra.ActorIcons[get - 3000] + ']' + $gameActors.actor(get - 3000)._name);
				$gameVariables._data[500].push('\\i[' + Sawyer.Extra.ActorIcons[get - 3000] + ']' + $gameActors.actor(get - 3000)._name);
			}	
			if (get > 4000 && get < 5000){
				$gameSwitches.setValue(get - 4000,true);
				$gameParty._receivedItemName = '\\i[194]'+ Sawyer.SwitchNames[get - 4000];
				// $gameVariables.setValue(500,'\\i[194]'+ Sawyer.SwitchNames[get - 4000]);
				$gameVariables._data[500].push('\\i[194]'+ Sawyer.SwitchNames[get - 4000]);
				$gameSwitches.setValue(280, true);
			}
			if (get > 5000){
				console.log('Archipelago');
				if (Archipelago[get - 5000]){
					// $gameVariables.setValue(500,'\\i[193]' + Archipelago[get - 5000].name);
					$gameVariables._data[500].push('\\i[193]' + Archipelago[get - 5000].name);
				} else {
					// $gameVariables.setValue(500,'\\i[193] Archipelago Item');
					$gameVariables._data[500].push('\\i[193] Archipelago Item');
				}
			}
			//console.log($gameVariables._data[500]);
			Sawyer.Extra.BinderCheck();
		}
};

get = gain;

Sawyer.gainArray = Sawyer.pickupArray;

Archipelago = {

};

Sawyer.SwitchNames = {
	178:'ReCollection 00',
	175:'ReCollection 01',
	166:'ReCollection 02',
	168:'ReCollection 05',
	169:'ReCollection 03',
	173:'ReCollection 04',
	176:'ReCollection 06',
	180:'ReCollection 07',
	182:'ReCollection 08',
	184:'ReCollection 09',
	186:'ReCollection 10',
	188:'ReCollection 11',
	190:'ReCollection 12',
	192:'ReCollection 13',
	194:'ReCollection 14',
	196:'ReCollection 16',
	198:'ReCollection 18',
	247:'Exander',
	9999:'End'
};


//Sawyer: Item Pickup array

Sawyer.createPickupArray = function(){
	


var yellowKey = Check.keyYellow
var greenKey = Check.keyGreen
var blueKey = Check.keyBlue
var purpleKey = Check.keyPurple
var redKey = Check.keyRed
var orangeKey = Check.keyOrange
var blackKey = Check.keyBlack

var red = Check.red
var red2 = Check.red2
var orange = Check.orange
var yellow = Check.yellow
var yellow2 = Check.yellow2
var green = Check.green
var green2 = Check.green2
var blue1 = Check.blue1
var blue2 = Check.blue2
var blue3 = Check.blue3
var blue4 = Check.blue4
var blue5 = Check.blue5
var blue6 = Check.blue6
var purple = Check.purple
var purple2 = Check.purple2
var black = Check.black
var black2 = Check.black2
var white = Check.white
var none = Check.none;

var frag = Check.frag;

var dragon = Check.dragon;
var phoenix = Check.phoenix;
var pixie = Check.pixie;
var unicorn = Check.unicorn;
var kappa = Check.kappa;
var cyclops = Check.cyclops;
var pulgasari = Check.pulgasari;

var depression = Check.depression;
var burn = Check.burn;
var sleep = Check.sleep;
var stun = Check.stun;
var fatigue = Check.fatigue;

//these are all functions. if they need args, use funcName(arg1, arg2 etc etc)
var party = function(...args) {
	return Check.party.bind(Check, ...args);
}
var reCo = function(...args) {
	return Check.reCo.bind(Check, ...args);
}
var stars = function(...args) {
	return Check.stars.bind(Check, ...args);
}


var or = function(...args) {
    return () => { return [...args].reduce(function(accumulator, currentValue) {
        return (accumulator || currentValue.call());
    }, false)};
}
var and = function(...args) {
    return () => { return [...args].reduce(function(accumulator, currentValue) {
        return (accumulator && currentValue.call());
    }, true)};
}

var always = () => true;
var never = () => false;

if (BUILD_NAME[0] == "D"){
	Sawyer.pickupArray = {
		//0 is Cards
		//500 is Shiny Cards
		//1000 is Armor
		//2000 is Item
		//3000 is Actor
		//4000 is Switches
		//5000 is Archipelago
	//Start
	'PinnJoin':{Item:3001,Check:(always),Zones:['Grey'],Region:['Grey']},'Ultima':{Item:352,Check:(party(1)),Zones:['Grey'],Region:['Grey']},'StarterHealToken1':{Item:2002,Check:(party(1)),Zones:['Grey'],Region:['Grey']},'StarterHealToken2':{Item:2002,Check:(party(1)),Zones:['Grey'],Region:['Grey']},
	//Grey
	'GeoJoin':{Item:3002,Check:(party(1)),Zones:['Grey'],Region:['Grey']},'Cotton2Chest1':{Item:2002,Check:(party(1)),Zones:['Grey'],Region:['Grey']},'Cotton3Chest1':{Item:1063,Check:(party(1)),Zones:['Grey'],Region:['Grey']},
	//Hub
	'YellowKey':{Item:2010,Check:(party(1)),Zones:['Grey'],Region:['Grey']},
	'Hub2Chest1':{Item:1044,Check:((yellowKey)),Zones:['Grey'],Region:['Grey']},'Hub2Chest2':{Item:42,Check:(and(redKey, red2)),Zones:['Grey'],Region:['Grey']},
	//Red
	'Red1Chest':{Item:2004,Check:(and(red, redKey)),Zones:['Red'],Region:['Red']},'Red3Chest':{Item:2002,Check:(red),Zones:['Red'],Region:['Red']},'Red4Chest1':{Item:2002,Check:(red2),Zones:['Red'],Region:['Red']},'Red4Chest2':{Item:2003,Check:(red2),
	Zones:['Red'],Region:['Red']},
	'Red4Chest3':{Item:1003,Check:(red2),Zones:['Red'],Region:['Red']},'RedTower2Chest':{Item:1065,Check:(red2),Zones:['Red'],Region:['Red']},'RedTower4Chest':{Item:25,Check:(red2),Zones:['Red'],Region:['Red']},'Nyx':{Item:2014,Check:(and(red2,party(2))),Zones:['Boss','Red'],Region:['Boss']},
	'Kani':{Item:3003,Check:(red2),Zones:['Red'],Region:['Red']},'RedChasm1Chest':{Item:1045,Check:(red2),Zones:['Red'],Region:['Red']},'RedChasm2Chest1':{Item:29,Check:(and(red2,redKey)),Zones:['Red'],Region:['Red']},
	'RedChasm2Chest2':{Item:1010,Check:(red2),Zones:['Red'],Region:['Red']},'RedChasmReunionChest':{Item:2006,Check:(red2),Zones:['Red'],Region:['Red']},'Red3_BackdoorChest':{Item:1001,Check:(and(red,redKey)),Zones:['Red'],Region:['Red']},
	//Bosses
	'QuoDefender1':{Item:154,Check:(and(red,party(2))),Zones:['Boss'],Region:['Boss']},'QuoDefender2':{Item:155,Check:(and(red,party(2))),Zones:['Boss'],Region:['Boss']},'QuoDefender3':{Item:256,Check:(and(red,party(2))),Zones:['Boss'],Region:['Boss']},
	'Kingoose1':{Item:311,Check:(and(red2,party(2))),Zones:['Boss'],Region:['Boss']},'Kingoose2':{Item:72,Check:(and(red2,party(2))),Zones:['Boss'],Region:['Boss']},'Kingoose3':{Item:18,Check:(and(red2,party(2))),Zones:['Boss'],Region:['Boss']},
	'Nyx1':{Item:31,Check:(and(red2,party(2))),Region:['Warden']},'Nyx2':{Item:30,Check:(and(red2,party(2))),Region:['Warden']},'Nyx3':{Item:7,Check:(and(red2,party(2))),Region:['Warden']},
	//Party Members
	'PinnMP3':{Item:1042,Check:(party(1)),Zones:['Grey'],Region:['Grey']},
	'GeoMP3':{Item:1062,Check:(party(1)),Zones:['Grey'],Region:['Grey']},'GeoWeapon1':{Item:304,Check:(party(1)),Zones:['Grey'],Region:['Grey']},
	'KaniMP3':{Item:1003,Check:(red2),Zones:['Red'],Region:['Red']},'KaniWeapon1':{Item:5,Check:(red2),Zones:['Red'],Region:['Red']},'KaniWeapon2':{Item:6,Check:(red2),Zones:['Red'],Region:['Red']},'KaniWeapon3':{Item:4,Check:(red2),Zones:['Red'],Region:['Red']},
	//Shop
	'Shop1':{Item:4,Check:(yellowKey),Zones:['Shop'],Region:['Shop']},'Shop2':{Item:6,Check:(yellowKey),Zones:['Shop'],Region:['Shop']},'Shop3':{Item:7,Check:(yellowKey),Zones:['Shop'],Region:['Shop']},'Shop4':{Item:10,Check:(yellowKey),Zones:['Shop'],Region:['Shop']},
	'Shop5':{Item:102,Check:(yellowKey),Zones:['Shop'],Region:['Shop']},'Shop6':{Item:342,Check:(yellowKey),Zones:['Shop'],Region:['Shop']},'Shop7':{Item:334,Check:(yellowKey),Zones:['Shop'],Region:['Shop']},'Shop8':{Item:106,Check:(yellowKey),Zones:['Shop'],Region:['Shop']},
	'Shop9':{Item:185,Check:(yellowKey),Zones:['Shop'],Region:['Shop']},'Shop10':{Item:179,Check:(yellowKey),Zones:['Shop'],Region:['Shop']},'Shop11':{Item:206,Check:(yellowKey),Zones:['Shop'],Region:['Shop']},
	'Shop12':{Item:217,Check:(yellowKey),Zones:['Shop'],Region:['Shop']},'Shop13':{Item:237,Check:(yellowKey),Zones:['Shop'],Region:['Shop']},'Shop14':{Item:331,Check:(yellowKey),Zones:['Shop'],Region:['Shop']},
	'Shop15':{Item:304,Check:(yellowKey),Zones:['Shop'],Region:['Shop']},'Shop16':{Item:303,Check:(yellowKey),Zones:['Shop'],Region:['Shop']},'Shop17':{Item:333,Check:(yellowKey),Zones:['Shop'],Region:['Shop']},
	'Shop18':{Item:78,Check:(and(yellowKey,party(2))),Zones:['Shop'],Region:['Shop']},'Shop19':{Item:122,Check:(and(yellowKey,party(2))),Zones:['Shop'],Region:['Shop']},'Shop20':{Item:182,Check:(and(yellowKey,party(2))),Zones:['Shop'],Region:['Shop']},
	'Shop21':{Item:281,Check:(and(yellowKey,party(2))),Zones:['Shop'],Region:['Shop']},'Shop22':{Item:306,Check:(and(yellowKey,party(2))),Zones:['Shop'],Region:['Shop']},
	//ReCollection
		//00
	'ReCollection0_1':{Item:411,Check:(reCo(0))},'ReCollection0_2':{Item:29,Check:(reCo(0))},'ReCollection0_3':{Item:256,Check:(reCo(0))},
	'ReCollection0_4':{Item:311,Check:(reCo(0))},'ReCollection0_5':{Item:154,Check:(reCo(0))},'ReCollection0_6':{Item:155,Check:(reCo(0))},
	}
} else {
	Sawyer.pickupArray = {
		//0 is Cards
		//500 is Shiny Cards
		//1000 is Armor
		//2000 is Item
		//3000 is Actor
		//4000 is Switches
		//5000 is Archipelago
	}
	Rando.locations = {
	//Start
	'PinnJoin':{Item:3001,Check:(always),Zones:['Grey'],Region:['Grey']},'Ultima':{Item:352,Check:(party(1)),Zones:['Grey'],Region:['Grey']},'StarterHealToken1':{Item:2002,Check:(party(1)),Zones:['Grey'],Region:['Grey']},
	'StarterHealToken2':{Item:2002,Check:(party(1)),Zones:['Grey'],Region:['Grey']},
	//Grey
	'GeoJoin':{Item:3002,Check:(party(1)),Zones:['Grey'],Region:['Grey']},'Cotton2Chest1':{Item:2002,Check:(party(1)),Zones:['Grey'],Region:['Grey']},
	'Cotton3Chest1':{Item:1063,Check:(party(1)),Zones:['Grey'],Region:['Grey']},'Cotton3Chest2':{Item:1021,Check:(and(orange, blackKey)),Zones:['Grey'],Region:['Grey']},
	//Hub
	'YellowKey':{Item:2010,Check:(party(1)),Zones:['Grey'],Region:['Grey']},'Hub1Chest1':{Item:1025,Check:(and(green, greenKey)),Zones:['Grey'],Region:['Grey']},'Hub1Chest2':{Item:65,Check:(and(red, blueKey)),Zones:['Grey'],Region:['Grey']},
	'Hub2Chest1':{Item:1044,Check:(or((yellowKey),(and(blue3,redKey)),(and(purple,blueKey)),(and(orange,greenKey)),(and(orange,purpleKey)))),Zones:['Grey'],Region:['Grey']},
	'ReCollection08':{Item:4182,Check:(or((yellowKey),(and(blue3,redKey)),(and(purple,blueKey)),(and(orange,greenKey)),(and(orange,purpleKey)))),Zones:['Grey'],Region:['Grey']},
	'Hub3Chest1':{Item:2004,Check:(and(party(2),or(and(orange,greenKey),and(purpleKey,yellowKey)))),Zones:['Grey'],Region:['Grey']},'Hub2Chest2':{Item:42,Check:(or(and(redKey, blue1),and(redKey, red2))),Zones:['Grey'],Region:['Grey']},'HubGreenChest':{Item:2004,Check:(or(and(blueKey,party(1)),green)),Zones:['Grey'],Region:['Grey']},
	//Red
	'Red1Chest':{Item:2004,Check:(and(red, redKey)),Zones:['Red'],Region:['Red']},'Red3Chest':{Item:2002,Check:(red),Zones:['Red'],Region:['Red']},'Red4Chest1':{Item:2002,Check:(red2),Zones:['Red'],Region:['Red']},'Red4Chest2':{Item:2003,Check:(red2),Zones:['Red'],Region:['Red']},
	'Red4Chest3':{Item:1002,Check:(red2),Zones:['Red'],Region:['Red']},'RedTower2Chest':{Item:1065,Check:(red2),Zones:['Red'],Region:['Red']},'RedTower4Chest':{Item:25,Check:(red2),Zones:['Red'],Region:['Red']},'Nyx':{Item:2014,Check:(and(red2,party(2))),Zones:['Boss','Red'],Region:['Boss']},
	'Kani':{Item:3003,Check:(red2),Zones:['Red'],Region:['Red']},'RedChasm1Chest':{Item:1045,Check:(red2),Zones:['Red'],Region:['Red']},'RedChasm2Chest1':{Item:29,Check:(and(red2,redKey)),Zones:['Red'],Region:['Red']},
	'RedChasm2Chest2':{Item:1010,Check:(red2),Zones:['Red'],Region:['Red']},
	'ReCollection02':{Item:4166,Check:(red2),Zones:['Red'],Region:['Red']},'RedChasmReunionChest':{Item:2006,Check:(red2),Zones:['Red'],Region:['Red']},'Red3_BackdoorChest':{Item:1001,Check:(or(and(red,redKey),and(blue1,blueKey))),Zones:['Red'],Region:['Red']},
	//Orange
	'Orange1Chest1':{Item:2003,Check:(orange),Zones:['Orange'],Region:['Orange']},'Orange1Chest2':{Item:1028,Check:(and(orange,orangeKey)),Zones:['Orange'],Region:['Orange']},'OrangeLeftChest1':{Item:1031,Check:(orange),Zones:['Orange'],Region:['Orange']},
	'OrangeRightChest1':{Item:2002,Check:(orange),Zones:['Orange'],Region:['Orange']},'Ruda':{Item:2015,Check:(and(orange,party(2))),Zones:['Boss','Orange'],Region:['Boss']},
	'OrangeRight_BackdoorChest':{Item:1013,Check:(or(and(green,purpleKey),and(orange,orangeKey))),Zones:['Orange'],Region:['Orange']},'OrangeKeyAreaChest1':{Item:1049,Check:(and(orange,orangeKey)),Zones:['Orange'],Region:['Orange']},'OrangeKeyAreaChest2':{Item:284,Check:(and(orange,orangeKey)),Zones:['Orange'],Region:['Orange']},
	'ReCollection07':{Item:4180,Check:(and(orange,orangeKey)),Zones:['Orange'],Region:['Orange']},
	//Yellow
	'Yellow3Chest':{Item:2005,Check:(and(yellow,yellowKey)),Zones:['Yellow'],Region:['Yellow']},'Yellow5Chest':{Item:2006,Check:(yellow),Zones:['Yellow'],Region:['Yellow']},'Yellow6Chest1':{Item:1027,Check:(yellow2),Zones:['Yellow'],Region:['Yellow']},
	'Yellow6Chest2':{Item:2006,Check:(yellow2),Zones:['Yellow'],Region:['Yellow']},
	'Yellow8Chest':{Item:225,Check:(yellow2),Zones:['Yellow'],Region:['Yellow']},'Yellow12Chest':{Item:1050,Check:(and(yellow2,yellowKey)),Zones:['Yellow'],Region:['Yellow']},'Yellow14Chest1':{Item:180,Check:(yellow2),Zones:['Yellow'],Region:['Yellow']},
	'Yellow14Chest2':{Item:2004,Check:(yellow2),Zones:['Yellow'],Region:['Yellow']},'Yellow14Chest3':{Item:1064,Check:(yellow2),Zones:['Yellow'],Region:['Yellow']},'YellowTower5Chest1':{Item:2006,Check:(yellow2),Zones:['Yellow'],Region:['Yellow']},
	'YellowTower5Chest2':{Item:140,Check:(yellow2),Zones:['Yellow'],Region:['Yellow']},'Yellow5_BackDoorChest':{Item:1030,Check:(or(and(greenKey,red),yellow)),Zones:['Yellow'],Region:['Yellow']},
	'ReCollection06':{Item:4176,Check:(and(yellow2,yellowKey)),Zones:['Yellow'],Region:['Yellow']},
	//Green
	'Green1Chest':{Item:1023,Check:(green),Zones:['Green'],Region:['Green']},'GreenCyphonDebutChest':{Item:1055,Check:(and(green,greenKey)),Zones:['Green'],Region:['Green']},'Jeff':{Item:3005,Check:(green),Zones:['Green'],Region:['Green']},'CyphonHallChest':{Item:1011,Check:(green2),Zones:['Green'],Region:['Green']},
	'Cyphon':{Item:2011,Check:(and(green2,party(2))),Zones:['Boss','Green'],Region:['Green']},'GreenLeftUpChest':{Item:1056,Check:(green2),Zones:['Green'],Region:['Green']},'GreenRightChest':{Item:76,Check:(green2),Zones:['Green'],Region:['Green']},
	'GreenTheatreChest':{Item:1061,Check:(and(green,greenKey,party(2))),Zones:['Green'],Region:['Green']},'ReCollection03':{Item:4169,Check:(green),Zones:['Green'],Region:['Green']},
	'Green3_BackdoorChest':{Item:1039,Check:(or(and(green,greenKey,green2),and(orange,orangeKey))),Zones:['Green'],Region:['Green']},
	//Blue
	'Blue3Chest':{Item:1005,Check:(blue2),Zones:['Blue'],Region:['Blue']},'Blue3Chest2':{Item:2004,Check:(blue2),Zones:['Blue'],Region:['Blue']},'Blue3Chest3':{Item:2003,Check:(and(blue2,party(2))),Zones:['Blue'],Region:['Blue']},
	'Shane':{Item:3004,Check:(blue2),Zones:['Blue'],Region:['Blue']}, 'DiggerRoomChest':{Item:1012,Check:(blue2),Zones:['Blue'],Region:['Blue']},'PurpleHippoChest':{Item:341,Check:(and(blue3, party(6))),Zones:['Blue'],Region:['Blue']},
	'BlueBridgeRightChest':{Item:2005,Check:(and(blue3, party(3))),Zones:['Blue'],Region:['Blue']},
	'WinkJoin':{Item:3006,Check:(blue4),Zones:['Blue'],Region:['Blue']},'Blue6Chest':{Item:2002,Check:(blue4),Zones:['Blue'],Region:['Blue']},
	'Blue8Chest':{Item:2003,Check:(blue4),Zones:['Blue'],Region:['Blue']},'ReCollection05':{Item:4168,Check:(blue4),Zones:['Blue'],Region:['Blue']},'Blue7Chest':{Item:1046,Check:(and(blue4, party(4))),Zones:['Blue'],Region:['Blue']},
	'BlueCaveRightChest':{Item:112,Check:(and(blue5, party(2))),Zones:['Blue'],Region:['Blue']},
	'BlueCaveRightStory':{Item:2019,Check:(and(blue5,party(3))),Zones:['Blue'],Region:['Blue']},'BlueCaveLeftStory':{Item:2018,Check:(and(blue5,party(3))),Zones:['Blue'],Region:['Blue']},
	'BlueCaveLeftChest':{Item:1020,Check:(and(blue5,blueKey)),Zones:['Blue'],Region:['Blue']},'Scatter':{Item:2012,Check:(and(blue6,party(2))),Zones:['Boss','Blue'],Region:['Boss']},
	'Blue5_BackdoorChest':{Item:1047,Check:(or(and(blue3,blueKey),and(blackKey,yellow))),Zones:['Blue'],Region:['Blue']},
	//Purple
	'Purple1Chest1':{Item:2005,Check:(purple),Zones:['Purple'],Region:['Purple']},'Purple1Chest2':{Item:1059,Check:(and(purple,purpleKey)),Zones:['Purple'],Region:['Purple']},'Purple4Chest1':{Item:125,Check:(purple2),Zones:['Purple'],Region:['Purple']},
	'Purple4Chest2':{Item:2002,Check:(purple2),Zones:['Purple'],Region:['Purple']},
	'PurpleSniper2Chest':{Item:1006,Check:(purple2),Zones:['Purple'],Region:['Purple']},'Purple7Chest1':{Item:1038,Check:(purple2),Zones:['Purple'],Region:['Purple']},
	'Purple7Chest2':{Item:68,Check:(and(purple2,purpleKey)),Zones:['Purple'],Region:['Purple']},'Liza':{Item:3007,Check:(purple2),Zones:['Purple'],Region:['Purple']},'ReCollection04':{Item:4173,Check:(purple2),Zones:['Purple'],Region:['Purple']},'PurpleTowerEntranceChest':{Item:329,Check:(purple2),Zones:['Purple'],Region:['Purple']},'PurpleTower7Chest':{Item:1036,Check:(purple2),Zones:['Purple'],Region:['Purple']},
	'Enri':{Item:2013,Check:(and(purple2,party(2))),Zones:['Boss','Purple'],Region:['Boss']},'Purple2_BackdoorChest':{Item:1060,Check:(or(and(purple2,purpleKey),(blue4,yellowKey))),Zones:['Purple'],Region:['Purple']},'PurpleLeftChest':{Item:1016,Check:(and(purple2,purpleKey)),Zones:['Purple'],Region:['Purple']},
	//Black
	'Black7Chest':{Item:317,Check:(and(black,blackKey)),Zones:['Black'],Region:['Black']},'BlackBetween1Chest':{Item:177,Check:(and(black,blackKey)),Zones:['Black'],Region:['Black']},'Black3Chest':{Item:1057,Check:(black),Zones:['Black'],Region:['Black']},'Black1Chest':{Item:1035,Check:(and(black,blackKey)),Zones:['Black'],Region:['Black']},'Black4Chest':{Item:2005,Check:(black),Zones:['Black'],Region:['Black']},
	'BlackBetween2Chest':{Item:79,Check:(and(black,blackKey)),Zones:['Black'],Region:['Black']},'ReCollection01':{Item:4175,Check:(black),Zones:['Black'],Region:['Black']},'BlackChase1_BackdoorChest':{Item:1068,Check:(or(and(black,blackKey),and(blue3,redKey))),Zones:['Black'],Region:['Black']},
	'Rot':{Item:2016,Check:(and(black2,party(2))),Zones:['Boss','Black'],Region:['Boss']},
	//white
	'MemFinder':{Item:2009,Check:(blackKey),Zones:['White'],Region:['White']},'Final1Chest':{Item:1018,Check:(white),Zones:['White'],Region:['White']},'Final3Chest1':{Item:268,Check:(white),Zones:['White'],Region:['White']},'Final2Chest':{Item:2004,Check:(white),Zones:['White'],Region:['White']},
	'Fair1Chest1':{Item:1033,Check:(white),Zones:['White'],Region:['White']},'Fair1Chest2':{Item:23,Check:(white),Zones:['White'],Region:['White']},'Fair1Chest3':{Item:2005,Check:(white),Zones:['White'],Region:['White']},'BeforeExanderChest':{Item:90,Check:(white),Zones:['White'],Region:['White']},'ExanderMerge':{Item:4247,Check:(white),Zones:['White'],Region:['White']},
	'ChaoticDance':{Item:344,Check:(and(blackKey,frag)),Zones:['White'],Region:['White']},
	'White1Chest':{Item:2005,Check:(blackKey),Zones:['White'],Region:['White']},'White2Chest':{Item:512,Check:(blackKey),Zones:['White'],Region:['White']},'White3Chest1':{Item:2003,Check:(and(blackKey, dragon)),Zones:['White'],Region:['White']},
	'White3Chest2':{Item:736,Check:(and(blackKey, dragon)),Zones:['White'],Region:['White']},'White4Chest1':{Item:772,Check:(and(blackKey, dragon, kappa)),Zones:['White'],Region:['White']},
	'White4Chest2':{Item:2006,Check:(and(blackKey, dragon, kappa)),Zones:['White'],Region:['White']},'White5Chest1':{Item:674,Check:(and(blackKey, dragon, kappa, cyclops)),Zones:['White'],Region:['White']},
	'White6Chest1':{Item:573,Check:(and(blackKey, dragon, kappa, cyclops, unicorn)),Zones:['White'],Region:['White']},'White7Chest1':{Item:837,Check:(and(blackKey, dragon, kappa, cyclops, unicorn, phoenix)),Zones:['White'],Region:['White']},'White8Chest1':{Item:620,Check:(and(blackKey, dragon, kappa, cyclops, unicorn, phoenix, pulgasari)),Zones:['White'],Region:['White']},
	'White9Chest1':{Item:1071,Check:(and(blackKey, dragon, kappa, cyclops, unicorn, phoenix, pulgasari,pixie)),Zones:['White'],Region:['White']},
	'ReCollection10':{Item:4186,Check:(white),Zones:['White'],Region:['White']},'ReCollection09':{Item:4184,Check:(white),Zones:['White'],Region:['White']},
	}
	
	Rando.reCo = {
	//ReCollection Rewards
	//00
	//'ReCollection0_1':{Item:1,Check:(reCo(0))},'ReCollection0_2':{Item:1,Check:(reCo(0))},'ReCollection0_3':{Item:1,Check:(reCo(0))},
	//'ReCollection0_4':{Item:1,Check:(reCo(0))},'ReCollection0_5':{Item:1,Check:(reCo(0))},'ReCollection0_6':{Item:1,Check:(reCo(0))},
	//01
	'ReCollection1_1':{Item:271,Check:(reCo(1)),Zones:['ReCo','Black'],Region:['ReCo']},'ReCollection1_2':{Item:39,Check:(reCo(1)),Zones:['ReCo','Black'],Region:['ReCo']},'ReCollection1_3':{Item:29,Check:(reCo(1)),Zones:['ReCo','Black'],Region:['ReCo']},
	'ReCollection1_4':{Item:164,Check:(reCo(1)),Zones:['ReCo','Black'],Region:['ReCo']},'ReCollection1_5':{Item:306,Check:(reCo(1)),Zones:['ReCo','Black'],Region:['ReCo']},'ReCollection1_6':{Item:1066,Check:(reCo(1)),Zones:['ReCo','Black'],Region:['ReCo']},
	//02
	'ReCollection2_1':{Item:322,Check:(reCo(2)),Zones:['ReCo','Red'],Region:['ReCo']},'ReCollection2_2':{Item:121,Check:(reCo(2)),Zones:['ReCo','Red'],Region:['ReCo']},'ReCollection2_3':{Item:70,Check:(reCo(2)),Zones:['ReCo','Red'],Region:['ReCo']},
	'ReCollection2_4':{Item:28,Check:(reCo(2)),Zones:['ReCo','Red'],Region:['ReCo']},'ReCollection2_5':{Item:274,Check:(reCo(2)),Zones:['ReCo','Red'],Region:['ReCo']},'ReCollection2_6':{Item:1004,Check:(reCo(2)),Zones:['ReCo','Red'],Region:['ReCo']},
	//03
	'ReCollection3_1':{Item:24,Check:(reCo(3)),Zones:['ReCo','Green'],Region:['ReCo']},'ReCollection3_2':{Item:323,Check:(reCo(3)),Zones:['ReCo','Green'],Region:['ReCo']},'ReCollection3_3':{Item:286,Check:(reCo(3)),Zones:['ReCo','Green'],Region:['ReCo']},
	'ReCollection3_4':{Item:11,Check:(reCo(3)),Zones:['ReCo','Green'],Region:['ReCo']},'ReCollection3_5':{Item:69,Check:(reCo(3)),Zones:['ReCo','Green'],Region:['ReCo']},'ReCollection3_6':{Item:1032,Check:(reCo(3)),Zones:['ReCo','Green'],Region:['ReCo']},
	//04
	'ReCollection4_1':{Item:274,Check:(reCo(4),stun),Zones:['ReCo','Purple'],Region:['ReCo']},'ReCollection4_2':{Item:222,Check:(reCo(4),stun),Zones:['ReCo','Purple'],Region:['ReCo']},'ReCollection4_3':{Item:261,Check:(reCo(4),stun),Zones:['ReCo','Purple'],Region:['ReCo']},
	'ReCollection4_4':{Item:8,Check:(reCo(4),stun),Zones:['ReCo','Purple'],Region:['ReCo']},'ReCollection4_5':{Item:59,Check:(reCo(4),stun),Zones:['ReCo','Purple'],Region:['ReCo']},'ReCollection4_6':{Item:1053,Check:(reCo(4),stun),Zones:['ReCo','Purple'],Region:['ReCo']},
	//05
	'ReCollection5_1':{Item:170,Check:(reCo(5)),Zones:['ReCo','Blue'],Region:['ReCo']},'ReCollection5_2':{Item:168,Check:(reCo(5)),Zones:['ReCo','Blue'],Region:['ReCo']},'ReCollection5_3':{Item:126,Check:(reCo(5)),Zones:['ReCo','Blue'],Region:['ReCo']},
	'ReCollection5_4':{Item:241,Check:(reCo(5)),Zones:['ReCo','Blue'],Region:['ReCo']},'ReCollection5_5':{Item:44,Check:(reCo(5)),Zones:['ReCo','Blue'],Region:['ReCo']},'ReCollection5_6':{Item:1015,Check:(reCo(5)),Zones:['ReCo','Blue'],Region:['ReCo']},
	//06
	'ReCollection6_1':{Item:242,Check:(reCo(6)),Zones:['ReCo','Yellow'],Region:['ReCo']},'ReCollection6_2':{Item:169,Check:(reCo(6)),Zones:['ReCo','Yellow'],Region:['ReCo']},'ReCollection6_3':{Item:114,Check:(reCo(6)),Zones:['ReCo','Yellow'],Region:['ReCo']},
	'ReCollection6_4':{Item:279,Check:(reCo(6)),Zones:['ReCo','Yellow'],Region:['ReCo']},'ReCollection6_5':{Item:343,Check:(reCo(6)),Zones:['ReCo','Yellow'],Region:['ReCo']},'ReCollection6_6':{Item:1024,Check:(reCo(6)),Zones:['ReCo','Yellow'],Region:['ReCo']},
	//07
	'ReCollection7_1':{Item:166,Check:(and(reCo(7),depression)),Zones:['ReCo','Orange'],Region:['ReCo']},'ReCollection7_2':{Item:192,Check:(and(reCo(7),depression)),Zones:['ReCo','Orange'],Region:['ReCo']},'ReCollection7_3':{Item:20,Check:(and(reCo(7),depression)),Zones:['ReCo','Orange'],Region:['ReCo']},
	'ReCollection7_4':{Item:321,Check:(and(reCo(7),depression)),Zones:['ReCo','Orange'],Region:['ReCo']},'ReCollection7_5':{Item:263,Check:(and(reCo(7),depression)),Zones:['ReCo','Orange'],Region:['ReCo']},'ReCollection7_6':{Item:1048,Check:(and(reCo(7),depression)),Zones:['ReCo','Orange'],Region:['ReCo']},
	//08
	'ReCollection8_1':{Item:315,Check:(reCo(8)),Zones:['ReCo','Grey'],Region:['ReCo']},'ReCollection8_2':{Item:87,Check:(reCo(8)),Zones:['ReCo','Grey'],Region:['ReCo']},'ReCollection8_3':{Item:103,Check:(reCo(8)),Zones:['ReCo','Grey'],Region:['ReCo']},
	'ReCollection8_4':{Item:278,Check:(reCo(8)),Zones:['ReCo','Grey'],Region:['ReCo']},'ReCollection8_5':{Item:159,Check:(reCo(8)),Zones:['ReCo','Grey'],Region:['ReCo']},'ReCollection8_6':{Item:1073,Check:(reCo(8)),Zones:['ReCo','Grey'],Region:['ReCo']},
	//09
	'ReCollection9_1':{Item:269,Check:(reCo(9)),Zones:['ReCo','White'],Region:['ReCo']},'ReCollection9_2':{Item:173,Check:(reCo(9)),Zones:['ReCo','White'],Region:['ReCo']},'ReCollection9_3':{Item:139,Check:(reCo(9)),Zones:['ReCo','White'],Region:['ReCo']},
	'ReCollection9_4':{Item:259,Check:(reCo(9)),Zones:['ReCo','White'],Region:['ReCo']},'ReCollection9_5':{Item:335,Check:(reCo(9)),Zones:['ReCo','White'],Region:['ReCo']},'ReCollection9_6':{Item:1072,Check:(reCo(9)),Zones:['ReCo','White'],Region:['ReCo']},
	//10
	'ReCollection10_1':{Item:216,Check:(reCo(10)),Zones:['ReCo','White'],Region:['ReCo']},'ReCollection10_2':{Item:215,Check:(reCo(10)),Zones:['ReCo','White'],Region:['ReCo']},'ReCollection10_3':{Item:219,Check:(reCo(10)),Zones:['ReCo','White'],Region:['ReCo']},
	'ReCollection10_4':{Item:56,Check:(reCo(10)),Zones:['ReCo','White'],Region:['ReCo']},'ReCollection10_5':{Item:26,Check:(reCo(10)),Zones:['ReCo','White'],Region:['ReCo']},'ReCollection10_6':{Item:1076,Check:(reCo(10)),Zones:['ReCo','White'],Region:['ReCo']},
	//11
	//'ReCollection11_1':{Item:1,Check:(reCo(11))},'ReCollection11_2':{Item:1,Check:(reCo(11))},'ReCollection11_3':{Item:1,Check:(reCo(11))},
	//'ReCollection11_4':{Item:1,Check:(reCo(11))},'ReCollection11_5':{Item:1,Check:(reCo(11))},'ReCollection11_6':{Item:1,Check:(reCo(11))},
	//12
	//'ReCollection12_1':{Item:1,Check:(reCo(12))},'ReCollection12_2':{Item:1,Check:(reCo(12))},'ReCollection12_3':{Item:1,Check:(reCo(12))},
	//'ReCollection12_4':{Item:1,Check:(reCo(12))},'ReCollection12_5':{Item:1,Check:(reCo(12))},'ReCollection12_6':{Item:1,Check:(reCo(12))},
	//13
	//'ReCollection13_1':{Item:1,Check:(reCo(13))},'ReCollection13_2':{Item:1,Check:(reCo(13))},'ReCollection13_3':{Item:1,Check:(reCo(13))},
	//'ReCollection13_4':{Item:1,Check:(reCo(13))},'ReCollection13_5':{Item:1,Check:(reCo(13))},'ReCollection13_6':{Item:1,Check:(reCo(13))},
	//14
	//'ReCollection14_1':{Item:1,Check:(reCo(14))},'ReCollection14_2':{Item:1,Check:(reCo(14))},'ReCollection14_3':{Item:1,Check:(reCo(14))},
	//'ReCollection14_4':{Item:1,Check:(reCo(14))},'ReCollection14_5':{Item:1,Check:(reCo(14))},'ReCollection14_6':{Item:1,Check:(reCo(14))},
	//15
	//'ReCollection15_1':{Item:1,Check:(reCo(15))},'ReCollection15_2':{Item:1,Check:(reCo(15))},'ReCollection15_3':{Item:1,Check:(reCo(15))},
	//'ReCollection15_4':{Item:1,Check:(reCo(15))},'ReCollection15_5':{Item:1,Check:(reCo(15))},'ReCollection15_6':{Item:1,Check:(reCo(15))},
	//16
	//'ReCollection16_1':{Item:1,Check:(reCo(16))},'ReCollection16_2':{Item:1,Check:(reCo(16))},'ReCollection16_3':{Item:1,Check:(reCo(16))},
	//'ReCollection16_4':{Item:1,Check:(reCo(16))},'ReCollection16_5':{Item:1,Check:(reCo(16))},'ReCollection16_6':{Item:1,Check:(reCo(16))},
	};
	
	Rando.starStuds = {
	//Starstuds
	'Starstud1':{Item:1007,Check:(stars(1)),Zones:['Starstud'],Region:['Starstud']},
	'Starstud2':{Item:1054,Check:(stars(2)),Zones:['Starstud'],Region:['Starstud']},'Starstud3':{Item:19,Check:(stars(3)),Zones:['Starstud'],Region:['Starstud']},'Starstud4':{Item:1067,Check:(stars(4)),Zones:['Starstud'],Region:['Starstud']},
	'Starstud5':{Item:1017,Check:(stars(5)),Zones:['Starstud'],Region:['Starstud']},
	'Starstud6':{Item:64,Check:(stars(6)),Zones:['Starstud'],Region:['Starstud']},'Starstud7':{Item:1034,Check:(stars(7)),Zones:['Starstud'],Region:['Starstud']},'Starstud8':{Item:1026,Check:(stars(8)),Zones:['Starstud'],Region:['Starstud']},
	'Starstud9':{Item:172,Check:(stars(9)),Zones:['Starstud'],Region:['Starstud']},'Starstud10':{Item:1069,Check:(stars(10)),Zones:['Starstud'],Region:['Starstud']},
	'Starstud11':{Item:1019,Check:(stars(11)),Zones:['Starstud'],Region:['Starstud']},'Starstud12':{Item:115,Check:(stars(12)),Zones:['Starstud'],Region:['Starstud']},'Starstud13':{Item:1029,Check:(stars(13)),Zones:['Starstud'],Region:['Starstud']},'Starstud14':{Item:1009,Check:(stars(14)),Zones:['Starstud'],Region:['Starstud']},'Starstud15':{Item:260,Check:(stars(15)),Zones:['Starstud'],Region:['Starstud']},
	'Starstud16':{Item:1040,Check:(stars(16)),Zones:['Starstud'],Region:['Starstud']},'Starstud17':{Item:1008,Check:(stars(17)),Zones:['Starstud'],Region:['Starstud']},'Starstud18':{Item:314,Check:(stars(18)),Zones:['Starstud'],Region:['Starstud']},'Starstud19':{Item:1070,Check:(stars(19)),Zones:['Starstud'],Region:['Starstud']},'Starstud20':{Item:1051,Check:(stars(20)),Zones:['Starstud'],Region:['Starstud']},
	'Starstud21':{Item:214,Check:(stars(21)),Zones:['Starstud'],Region:['Starstud']},'Starstud22':{Item:1058,Check:(stars(22)),Zones:['Starstud'],Region:['Starstud']},'Starstud23':{Item:1043,Check:(stars(23)),Zones:['Starstud'],Region:['Starstud']},'Starstud24':{Item:1041,Check:(stars(24)),Zones:['Starstud'],Region:['Starstud']},'Starstud25':{Item:1074,Check:(stars(25)),Zones:['Starstud'],Region:['Starstud']},
	};
	
	Rando.bosses = {
	//Bosses
	'QuoDefender1':{Item:154,Check:(and(red,party(2))),Zones:['Boss','Red'],Region:['Boss']},'QuoDefender2':{Item:155,Check:(and(red,party(2))),Zones:['Boss','Red'],Region:['Boss']},'QuoDefender3':{Item:256,Check:(and(red,party(2))),Zones:['Boss','Red'],Region:['Boss']},
	'Memo1':{Item:2150,Check:(and(red,party(2))),Zones:['Red'],Region:['Red']},'Memo1A':{Item:35,Check:(and(red,party(2))),Zones:['Red'],Region:['Red']},
	'Kingoose1':{Item:311,Check:(and(red2,party(2))),Zones:['Boss','Red'],Region:['Boss']},'Kingoose2':{Item:72,Check:(and(red2,party(2))),Zones:['Boss','Red'],Region:['Boss']},'Kingoose3':{Item:18,Check:(and(red2,party(2))),Zones:['Boss','Red'],Region:['Boss']},
	'Memo2':{Item:2151,Check:(and(red2,party(2))),Zones:['Red'],Region:['Boss']},'Memo2A':{Item:339,Check:(and(red2,party(2))),Zones:['Red'],Region:['Boss']},
	'Nyx1':{Item:31,Check:(and(red2,party(2))),Zones:['Boss','Red'],Region:['Boss']},'Nyx2':{Item:30,Check:(and(red2,party(2))),Zones:['Boss','Red'],Region:['Boss']},'Nyx3':{Item:7,Check:(and(red2,party(2))),Zones:['Boss','Red'],Region:['Boss']},
	
	'Dualists1':{Item:44,Check:(and(or(and(yellowKey,purpleKey),and(orange,greenKey)),party(2))),Zones:['Boss','Orange'],Region:['Boss']},'Dualists2':{Item:162,Check:(and(or(and(yellowKey,purpleKey),and(orange,greenKey)),party(2))),Zones:['Boss','Orange'],Region:['Boss']},'Dualists3':{Item:182,Check:(and(or(and(yellowKey,purpleKey),and(orange,greenKey)),party(2))),Zones:['Boss','Orange'],Region:['Boss']},'Memo3':{Item:2152,Check:(and(or(and(yellowKey,purpleKey),and(orange,greenKey)),party(2))),Zones:['Orange'],Region:['Orange']},'Memo3A':{Item:141,Check:(and(or(and(yellowKey,purpleKey),and(orange,greenKey)),party(2))),Zones:['Orange'],Region:['Orange']},
	'Ongard1':{Item:239,Check:(and(or(and(yellowKey,greenKey),and(orange,purpleKey)),party(2))),Zones:['Boss','Orange'],Region:['Boss']},'Ongard2':{Item:238,Check:(and(or(and(yellowKey,greenKey),and(orange,purpleKey)),party(2))),Zones:['Boss','Orange'],Region:['Boss']},'Ongard3':{Item:229,Check:(and(or(and(yellowKey,greenKey),and(orange,purpleKey)),party(2))),Zones:['Boss','Orange'],Region:['Boss']},'Memo4':{Item:2153,Check:(and(or(and(yellowKey,greenKey),and(orange,purpleKey)),party(2))),Zones:['Orange'],Region:['Orange']},'Memo4A':{Item:91,Check:(and(or(and(yellowKey,greenKey),and(orange,purpleKey)),party(2))),Zones:['Orange'],Region:['Orange']},
	'Ruda1':{Item:86,Check:(and(orange,party(2))),Zones:['Boss','Orange'],Region:['Boss']},'Ruda2':{Item:73,Check:(and(orange,party(2))),Zones:['Boss','Orange'],Region:['Boss']},'Ruda3':{Item:60,Check:(and(orange,party(2))),Zones:['Boss','Orange'],Region:['Boss']},
	
	'Esquire1':{Item:286,Check:(and(yellow,party(2))),Zones:['Boss','Yellow'],Region:['Boss']},'Esquire2':{Item:279,Check:(and(yellow,party(2))),Zones:['Boss','Yellow'],Region:['Boss']},'Esquire3':{Item:261,Check:(and(yellow,party(2))),Zones:['Boss','Yellow'],Region:['Boss']},
	'Memo5':{Item:2154,Check:(and(yellow,party(2))),Zones:['Yellow'],Region:['Yellow']},'Memo5A':{Item:296,Check:(and(yellow,party(2))),Zones:['Yellow'],Region:['Yellow']},
	'Mothership1':{Item:128,Check:(and(yellow,party(2))),Zones:['Boss','Yellow'],Region:['Boss']},'Mothership2':{Item:116,Check:(and(yellow,party(2))),Zones:['Boss','Yellow'],Region:['Boss']},'Mothership3':{Item:139,Check:(and(yellow,party(2))),Zones:['Boss','Yellow'],Region:['Boss']},'Memo6':{Item:2155,Check:(and(yellow,party(2))),Zones:['Yellow'],Region:['Yellow']},'Memo6A':{Item:244,Check:(and(yellow,party(2))),Zones:['Yellow'],Region:['Yellow']},
	'Wink1':{Item:137,Check:(and(yellow,party(2))),Zones:['Boss','Yellow'],Region:['Boss']},'Wink2':{Item:124,Check:(and(yellow,party(2))),Zones:['Boss','Yellow'],Region:['Boss']},'Wink3':{Item:133,Check:(and(yellow,party(2))),Zones:['Boss','Yellow'],Region:['Boss']},
	
	'Desmodus1':{Item:231,Check:(and(green,party(2))),Zones:['Boss','Green'],Region:['Boss']},'Desmodus2':{Item:164,Check:(and(green,party(2))),Zones:['Boss','Green'],Region:['Boss']},'Desmodus3':{Item:228,Check:(and(green,party(2))),Zones:['Boss','Green'],Region:['Boss']},
	'Memo7':{Item:2156,Check:(and(green,party(2))),Zones:['Green'],Region:['Green']},'Memo7A':{Item:243,Check:(and(green,party(2))),Zones:['Green'],Region:['Green']},
	'Squail1':{Item:161,Check:(and(green,party(2))),Zones:['Boss','Green'],Region:['Boss']},'Squail2':{Item:308,Check:(and(green,party(2))),Zones:['Boss','Green'],Region:['Boss']},'Squail3':{Item:34,Check:(and(green,party(2))),Zones:['Boss','Green'],Region:['Boss']},
	'Memo8':{Item:2157,Check:(and(green,party(2))),Zones:['Green'],Region:['Green']},'Memo8A':{Item:347,Check:(and(green,party(2))),Zones:['Green'],Region:['Green']},
	'Cyphon1':{Item:187,Check:(and(green,party(2))),Zones:['Boss','Green'],Region:['Boss']},'Cyphon2':{Item:175,Check:(and(green,party(2))),Zones:['Boss','Green'],Region:['Boss']},'Cyphon3':{Item:186,Check:(and(green,party(2))),Zones:['Boss','Green'],Region:['Boss']},
	
	'GriffinBlue1':{Item:57,Check:(and(blue2,party(2))),Zones:['Boss','Blue'],Region:['Boss']},'GriffinBlue2':{Item:131,Check:(and(blue2,party(2))),Zones:['Boss','Blue'],Region:['Boss']},'GriffinBlue3':{Item:213,Check:(and(blue2,party(2))),Zones:['Boss','Blue'],Region:['Boss']},'Memo9':{Item:2158,Check:(and(blue2,party(2))),Zones:['Blue'],Region:['Blue']},'Memo9A':{Item:193,Check:(and(blue2,party(2))),Zones:['Blue'],Region:['Blue']},
	'Digger1':{Item:66,Check:(and(blue2,party(2))),Zones:['Boss','Blue'],Region:['Boss']},'Digger2':{Item:108,Check:(and(blue2,party(2))),Zones:['Boss','Blue'],Region:['Boss']},'Digger3':{Item:287,Check:(and(blue2,party(2))),Zones:['Boss','Blue'],Region:['Boss']},
	'Memo10':{Item:2159,Check:(and(blue2,party(2))),Zones:['Blue'],Region:['Blue']},'Memo10A':{Item:297,Check:(and(blue2,party(2))),Zones:['Blue'],Region:['Blue']},
	'Scatter1':{Item:230,Check:(and(party(2),blue6)),Zones:['Boss','Blue'],Region:['Boss']},'Scatter2':{Item:227,Check:(and(party(2),blue6)),Zones:['Boss','Blue'],Region:['Boss']},'Scatter3':{Item:210,Check:(and(party(2),blue6)),Zones:['Boss','Blue'],Region:['Boss']},
	
	'Swordmole1':{Item:28,Check:(and(party(2),purple)),Zones:['Boss','Purple'],Region:['Boss']},'Swordmole2':{Item:41,Check:(and(party(2),purple)),Zones:['Boss','Purple'],Region:['Boss']},'Swordmole3':{Item:58,Check:(and(party(2),purple)),Zones:['Boss','Purple'],Region:['Boss']},
	'Memo11':{Item:2160,Check:(and(party(2),purple)),Zones:['Purple'],Region:['Purple']},'Memo11A':{Item:38,Check:(and(party(2),purple)),Zones:['Purple'],Region:['Purple']},
	'Scaventure1':{Item:266,Check:(and(party(2),purple)),Zones:['Boss','Purple'],Region:['Boss']},'Scaventure2':{Item:114,Check:(and(party(2),purple)),Zones:['Boss','Purple'],Region:['Boss']},'Scaventure3':{Item:13,Check:(and(party(2),purple)),Zones:['Boss','Purple'],Region:['Boss']},'Memo12':{Item:2161,Check:(and(party(2),purple)),Zones:['Purple'],Region:['Purple']},'Memo12A':{Item:194,Check:(and(party(2),purple)),Zones:['Purple'],Region:['Purple']},
	'Enri1':{Item:292,Check:(and(party(2),purple)),Zones:['Boss','Purple'],Region:['Boss']},'Enri2':{Item:263,Check:(and(party(2),purple)),Zones:['Boss','Purple'],Region:['Boss']},'Enri3':{Item:282,Check:(and(party(2),purple)),Zones:['Boss','Purple'],Region:['Boss']},
	
	'Kisaiju1':{Item:322,Check:(and(black,party(2))),Zones:['Boss','Black'],Region:['Boss']},'Kisaiju2':{Item:241,Check:(and(black,party(2))),Zones:['Boss','Black'],Region:['Boss']},'Kisaiju3':{Item:119,Check:(and(black,party(2))),Zones:['Boss','Black'],Region:['Boss']},
	'Memo13':{Item:2162,Check:(and(black,party(2))),Zones:['Black'],Region:['Black']},'Memo13A':{Item:142,Check:(and(black,party(2))),Zones:['Black'],Region:['Black']},
	'GriffinBlack1':{Item:121,Check:(and(black,party(2))),Zones:['Boss','Black'],Region:['Boss']},'GriffinBlack2':{Item:135,Check:(and(black,party(2))),Zones:['Boss','Black'],Region:['Boss']},'GriffinBlack3':{Item:255,Check:(and(black,party(2))),Zones:['Boss','Black'],Region:['Boss']},
	'Memo14':{Item:2163,Check:(and(black,party(2))),Zones:['Black'],Region:['Black']},'Memo14A':{Item:92,Check:(and(black,party(2))),Zones:['Black'],Region:['Black']},
	'Rot1':{Item:345,Check:(and(black,party(2))),Zones:['Boss','Black'],Region:['Boss']},'Rot2':{Item:319,Check:(and(black,party(2))),Zones:['Boss','Black'],Region:['Boss']},'Rot3':{Item:343,Check:(and(black,party(2))),Zones:['Boss','Black'],Region:['Boss']},
	
	'GriffinFinal1':{Item:219,Check:(and(white,party(7))),Zones:['Boss','White'],Region:['Boss']},'GriffinFinal2':{Item:15,Check:(and(white,party(7))),Zones:['Boss','White'],Region:['Boss']},'GriffinFinal3':{Item:279,Check:(and(white,party(7))),Zones:['Boss','White'],Region:['Boss']},'GriffinFinal4':{Item:321,Check:(and(white,party(7))),Zones:['Boss','White'],Region:['Boss']},
	'PurpleHippo1':{Item:15,Check:(and(blue3, party(3))),Zones:['Boss','Blue'],Region:['Blue']},'PurpleHippo2':{Item:279,Check:(and(blue3, party(3))),Zones:['Boss','Blue'],Region:['Blue']},'PurpleHippo3':{Item:321,Check:(and(blue3, party(3))),Zones:['Boss','Blue'],Region:['Blue']},
	
	
	}
	
	Rando.chaosWardens = {
	'ChaosWink':{Item:2024,Check:(and(party(4),or(and(greenKey,green),and(orangeKey,orange)))),Zones:['Boss','Green'],Region:['Boss']},'ChaosWink1':{Item:148,Check:(and(party(4),or(and(greenKey,green2),and(orangeKey,orange)))),Zones:['Boss','Green'],Region:['Boss']},
	'ChaosWink2':{Item:134,Check:(and(party(4),or(and(greenKey,green2),and(orangeKey,orange)))),Zones:['Boss','Green'],Region:['Boss']},'ChaosWink3':{Item:126,Check:(and(party(4),or(and(greenKey,green2),and(orangeKey,orange)))),Zones:['Boss','Green'],Region:['Boss']},
	'ChaosRuda':{Item:2023,Check:(and(party(4),(or(and(purple,purpleKey),(blue4,yellowKey))))),Zones:['Boss','Purple'],Region:['Boss']},'ChaosRuda1':{Item:98,Check:(and(party(4),and(party(4),or(and(purple,purpleKey),(blue4,yellowKey))))),Zones:['Boss','Purple'],Region:['Boss']},
	'ChaosRuda2':{Item:83,Check:(and(party(4),(or(and(purple,purpleKey),(blue4,yellowKey))))),Zones:['Boss','Purple'],Region:['Boss']},'ChaosRuda3':{Item:60,Check:(and(party(4),(or(and(purple,purpleKey),(blue4,yellowKey))))),Zones:['Boss','Purple'],Region:['Boss']},
	'ChaosScatter':{Item:2026,Check:(and(party(4),(or(and(black,blackKey),and(blue3,redKey))))),Zones:['Boss','Black'],Region:['Boss']},'ChaosScatter1':{Item:248,Check:(and(party(4),(or(and(black,blackKey),and(blue3,redKey))))),Zones:['Boss','Black'],Region:['Boss']},
	'ChaosScatter2':{Item:234,Check:(and(party(4),(or(and(black,blackKey),and(blue3,redKey))))),Zones:['Boss','Black'],Region:['Boss']},'ChaosScatter3':{Item:211,Check:(and(party(4),(or(and(black,blackKey),and(blue3,redKey))))),Zones:['Boss','Black'],Region:['Boss']},
	'ChaosCyphon':{Item:2025,Check:(and(party(4),or(and(green,purpleKey),and(orange,orangeKey)))),Zones:['Boss','Orange'],Region:['Boss']},'ChaosCyphon1':{Item:198,Check:(and(party(4),or(and(green,purpleKey),and(orange,orangeKey)))),Zones:['Boss','Orange'],Region:['Boss']},
	'ChaosCyphon2':{Item:189,Check:(and(party(4),or(and(green,purpleKey),and(orange,orangeKey)))),Zones:['Boss','Orange'],Region:['Boss']},'ChaosCyphon3':{Item:167,Check:(and(party(4),or(and(green,purpleKey),and(orange,orangeKey)))),Zones:['Boss','Orange'],Region:['Boss']},
	'ChaosEnri':{Item:2027,Check:(and(party(4),(or(and(greenKey,red),yellow)))),Zones:['Boss','Yellow'],Region:['Boss']},'ChaosEnri1':{Item:298,Check:(and(party(4),(or(and(greenKey,red),yellow)))),Zones:['Boss','Yellow'],Region:['Boss']},
	'ChaosEnri2':{Item:291,Check:(and(party(4),(or(and(greenKey,red),yellow)))),Zones:['Boss','Yellow'],Region:['Boss']},'ChaosEnri3':{Item:266,Check:(and(party(4),(or(and(greenKey,red),yellow)))),Zones:['Boss','Yellow'],Region:['Boss']},
	'ChaosRot':{Item:2028,Check:(and(party(4),or(and(red,redKey),and(blue1,blueKey)))),Zones:['Boss','Red'],Region:['Boss']},'ChaosRot1':{Item:348,Check:(and(party(4),or(and(red,redKey),and(blue1,blueKey)))),Zones:['Boss','Red'],Region:['Boss']},
	'ChaosRot2':{Item:340,Check:(and(party(4),or(and(red,redKey),and(blue1,blueKey)))),Zones:['Boss','Red'],Region:['Boss']},'ChaosRot3':{Item:312,Check:(and(party(4),or(and(red,redKey),and(blue1,blueKey)))),Zones:['Boss','Red'],Region:['Boss']},
	'ChaosNyx':{Item:2022,Check:(and(party(4),or(and(blue3,blueKey),and(blackKey,yellow2)))),Zones:['Boss','Blue'],Region:['Boss']},'ChaosNyx1':{Item:48,Check:(and(party(4),or(and(blue3,blueKey),and(blackKey,yellow2)))),Zones:['Boss','Blue'],Region:['Boss']},
	'ChaosNyx2':{Item:40,Check:(and(party(4),or(and(blue3,blueKey),and(blackKey,yellow2)))),Zones:['Boss','Blue'],Region:['Boss']},'ChaosNyx3':{Item:17,Check:(and(party(4),or(and(blue3,blueKey),and(blackKey,yellow2)))),Zones:['Boss','Blue'],Region:['Boss']},
	}
	
	Rando.omni = {
	'Omni1':{Item:352,Check:(and(party(7),blackKey, dragon, kappa, cyclops, unicorn, phoenix, pulgasari,pixie)),Zones:['White'],Region:['White']},'Omni2':{Item:84,Check:(and(party(7),blackKey, dragon, kappa, cyclops, unicorn, phoenix, pulgasari,pixie)),Zones:['White'],Region:['White']},'Omni3':{Item:26,Check:(and(party(7),blackKey, dragon, kappa, cyclops, unicorn, phoenix, pulgasari,pixie)),Zones:['White'],Region:['White']},
	}
	//White Bomb
	//'WhiteBombMP3':{Item:1075,Check:(and(blackKey))},

	Rando.party = {
	//Party Members
	'PinnMP3':{Item:1042,Check:(none),Zones:['Grey'],Region:['Grey']},
	'GeoMP3':{Item:1062,Check:(party(1)),Zones:['Grey'],Region:['Grey']},'GeoWeapon1':{Item:304,Check:(party(1)),Zones:['Grey'],Region:['Grey']},
	'KaniMP3':{Item:1003,Check:(red2),Zones:['Red'],Region:['Red']},'KaniWeapon1':{Item:5,Check:(red2),Zones:['Red'],Region:['Red']},'KaniWeapon2':{Item:6,Check:(red2),Zones:['Red'],Region:['Red']},'KaniWeapon3':{Item:4,Check:(red2),Zones:['Red'],Region:['Red']},
	'ShaneMP3':{Item:1014,Check:(blue2),Zones:['Blue'],Region:['Blue']},'ShaneWeapon1':{Item:52,Check:(blue2),Zones:['Blue'],Region:['Blue']},'ShaneWeapon2':{Item:53,Check:(blue2),Zones:['Blue'],Region:['Blue']},
	'WinkMP3':{Item:1022,Check:(blue4),Zones:['Blue'],Region:['Blue']},'WinkWeapon1':{Item:105,Check:(blue4),Zones:['Blue'],Region:['Blue']},'WinkWeapon2':{Item:106,Check:(blue4),Zones:['Blue'],Region:['Blue']},
	'JeffMP3':{Item:1052,Check:(green),Zones:['Green'],Region:['Green']},'JeffWeapon1':{Item:253,Check:(green),Zones:['Green'],Region:['Green']},'JeffWeapon2':{Item:254,Check:(green),Zones:['Green'],Region:['Green']},'JeffWeapon3':{Item:656,Check:(green),Zones:['Green'],Region:['Green']},
	'LizaMP3':{Item:1037,Check:(purple),Zones:['Purple'],Region:['Purple']},'LizaWeapon1':{Item:188,Check:(purple),Zones:['Purple'],Region:['Purple']},'LizaWeapon2':{Item:178,Check:(purple),Zones:['Purple'],Region:['Purple']},'LizaWeapon3':{Item:157,Check:(purple),Zones:['Purple'],Region:['Purple']},
	}
	
	Rando.shop = {
	//Shop
	//Sawyer: Ctrl Q to comment
	'Shop1':{Item:4,Check:(yellowKey),Zones:['Shop'],Region:['Shop']},'Shop2':{Item:6,Check:(yellowKey),Zones:['Shop'],Region:['Shop']},'Shop3':{Item:7,Check:(yellowKey),Zones:['Shop'],Region:['Shop']},'Shop4':{Item:10,Check:(yellowKey),Zones:['Shop'],Region:['Shop']},
	'Shop5':{Item:102,Check:(yellowKey),Zones:['Shop'],Region:['Shop']},'Shop6':{Item:342,Check:(yellowKey),Zones:['Shop'],Region:['Shop']},'Shop7':{Item:334,Check:(yellowKey),Zones:['Shop'],Region:['Shop']},'Shop8':{Item:106,Check:(yellowKey),Zones:['Shop'],Region:['Shop']},
	'Shop9':{Item:185,Check:(yellowKey),Zones:['Shop'],Region:['Shop']},'Shop10':{Item:179,Check:(yellowKey),Zones:['Shop'],Region:['Shop']},'Shop11':{Item:206,Check:(yellowKey),Zones:['Shop'],Region:['Shop']},
	'Shop12':{Item:217,Check:(yellowKey),Zones:['Shop'],Region:['Shop']},'Shop13':{Item:237,Check:(yellowKey),Zones:['Shop'],Region:['Shop']},'Shop14':{Item:331,Check:(yellowKey),Zones:['Shop'],Region:['Shop']},
	'Shop15':{Item:304,Check:(yellowKey),Zones:['Shop'],Region:['Shop']},'Shop16':{Item:303,Check:(yellowKey),Zones:['Shop'],Region:['Shop']},'Shop17':{Item:333,Check:(yellowKey),Zones:['Shop'],Region:['Shop']},
	'Shop18':{Item:78,Check:(and(yellowKey,party(2))),Zones:['Shop'],Region:['Shop']},'Shop19':{Item:122,Check:(and(yellowKey,party(2))),Zones:['Shop'],Region:['Shop']},'Shop20':{Item:182,Check:(and(yellowKey,party(2))),Zones:['Shop'],Region:['Shop']},
	'Shop21':{Item:281,Check:(and(yellowKey,party(2))),Zones:['Shop'],Region:['Shop']},'Shop22':{Item:306,Check:(and(yellowKey,party(2))),Zones:['Shop'],Region:['Shop']},
	'Shop23':{Item:16,Check:(and(yellowKey,party(3))),Zones:['Shop'],Region:['Shop']},'Shop24':{Item:69,Check:(and(yellowKey,party(3))),Zones:['Shop'],Region:['Shop']},'Shop25':{Item:59,Check:(and(yellowKey,party(3))),Zones:['Shop'],Region:['Shop']},
	'Shop26':{Item:127,Check:(and(yellowKey,party(3))),Zones:['Shop'],Region:['Shop']},'Shop27':{Item:209,Check:(and(yellowKey,party(3))),Zones:['Shop'],Region:['Shop']},'Shop28':{Item:264,Check:(and(yellowKey,party(3))),Zones:['Shop'],Region:['Shop']},
	'Shop29':{Item:71,Check:(and(yellowKey,party(4))),Zones:['Shop'],Region:['Shop']},'Shop30':{Item:85,Check:(and(yellowKey,party(4))),Zones:['Shop'],Region:['Shop']},'Shop31':{Item:223,Check:(and(yellowKey,party(4))),Zones:['Shop'],Region:['Shop']},
	'Shop32':{Item:293,Check:(and(yellowKey,party(4))),Zones:['Shop'],Region:['Shop']},'Shop33':{Item:310,Check:(and(yellowKey,party(4))),Zones:['Shop'],Region:['Shop']},
	'Shop34':{Item:73,Check:(and(yellowKey,party(5))),Zones:['Shop'],Region:['Shop']},'Shop35':{Item:120,Check:(and(yellowKey,party(5))),Zones:['Shop'],Region:['Shop']},'Shop36':{Item:123,Check:(and(yellowKey,party(5))),Zones:['Shop'],Region:['Shop']},
	'Shop37':{Item:158,Check:(and(yellowKey,party(5))),Zones:['Shop'],Region:['Shop']},'Shop38':{Item:275,Check:(and(yellowKey,party(5))),Zones:['Shop'],Region:['Shop']},'Shop39':{Item:318,Check:(and(yellowKey,party(5))),Zones:['Shop'],Region:['Shop']},
	'Shop40':{Item:30,Check:(and(yellowKey,party(6))),Zones:['Shop'],Region:['Shop']},'Shop41':{Item:129,Check:(and(yellowKey,party(6))),Zones:['Shop'],Region:['Shop']},'Shop42':{Item:174,Check:(and(yellowKey,party(6))),Zones:['Shop'],Region:['Shop']},
	'Shop43':{Item:227,Check:(and(yellowKey,party(6))),Zones:['Shop'],Region:['Shop']},'Shop44':{Item:288,Check:(and(yellowKey,party(6))),Zones:['Shop'],Region:['Shop']},'Shop45':{Item:334,Check:(and(yellowKey,party(6))),Zones:['Shop'],Region:['Shop']},
	'Shop46':{Item:14,Check:(and(yellowKey,party(7))),Zones:['Shop'],Region:['Shop']},'Shop47':{Item:89,Check:(and(yellowKey,party(7))),Zones:['Shop'],Region:['Shop']},'Shop48':{Item:133,Check:(and(yellowKey,party(7))),Zones:['Shop'],Region:['Shop']},
	'Shop49':{Item:160,Check:(and(yellowKey,party(7))),Zones:['Shop'],Region:['Shop']},'Shop50':{Item:290,Check:(and(yellowKey,party(7))),Zones:['Shop'],Region:['Shop']},'Shop51':{Item:337,Check:(and(yellowKey,party(7))),Zones:['Shop'],Region:['Shop']},
	'Shop52':{Item:12,Check:(and(yellowKey,party(7))),Zones:['Shop'],Region:['Shop']},'Shop53':{Item:75,Check:(and(yellowKey,party(7))),Zones:['Shop'],Region:['Shop']},'Shop54':{Item:118,Check:(and(yellowKey,party(7))),Zones:['Shop'],Region:['Shop']},
	'Shop55':{Item:163,Check:(and(yellowKey,party(7))),Zones:['Shop'],Region:['Shop']},'Shop56':{Item:212,Check:(and(yellowKey,party(7))),Zones:['Shop'],Region:['Shop']},'Shop57':{Item:272,Check:(and(yellowKey,party(7))),Zones:['Shop'],Region:['Shop']},
	'Shop58':{Item:324,Check:(and(yellowKey,party(7))),Zones:['Shop'],Region:['Shop']},'Shop59':{Item:17,Check:(and(yellowKey,party(7))),Zones:['Shop'],Region:['Shop']},
	//END
	//'Archipelago':{Item:5001,Check:(Check.unavailable)},
	//'End':{Item:1600,Check:(Check.unavailable)}
	}
	
	//if (RandoSettings){
		// Sawyer.pickupArray = Object.assign(Sawyer.pickupArray,Rando.locations);
		// if (RandoSettings["Include ReCollections"] == true) Sawyer.pickupArray = Object.assign(Sawyer.pickupArray,Rando.reCo);
		// Sawyer.pickupArray = Object.assign(Sawyer.pickupArray,Rando.starStuds);
		// if (RandoSettings["Include Bosses"] == true) Sawyer.pickupArray = Object.assign(Sawyer.pickupArray,Rando.bosses);
		// if (RandoSettings["Include Chaos Wardens"] == true) Sawyer.pickupArray = Object.assign(Sawyer.pickupArray,Rando.chaosWardens);
		// if (RandoSettings["Include Omni"] == true) Sawyer.pickupArray = Object.assign(Sawyer.pickupArray,Rando.omni);
		// Sawyer.pickupArray = Object.assign(Sawyer.pickupArray,Rando.party);
		// if (RandoSettings["Include Shops"] == true) Sawyer.pickupArray = Object.assign(Sawyer.pickupArray,Rando.shop);
	// }else{
		Sawyer.pickupArray = Object.assign(Sawyer.pickupArray,Rando.locations);
		Sawyer.pickupArray = Object.assign(Sawyer.pickupArray,Rando.reCo);
		Sawyer.pickupArray = Object.assign(Sawyer.pickupArray,Rando.starStuds);
		Sawyer.pickupArray = Object.assign(Sawyer.pickupArray,Rando.bosses);
		Sawyer.pickupArray = Object.assign(Sawyer.pickupArray,Rando.chaosWardens);
		Sawyer.pickupArray = Object.assign(Sawyer.pickupArray,Rando.omni);
		Sawyer.pickupArray = Object.assign(Sawyer.pickupArray,Rando.party);
		Sawyer.pickupArray = Object.assign(Sawyer.pickupArray,Rando.shop);
	//}
};


Sawyer.enemyDrops = {
//Grey
2:{A:205,B:52,C:202}, 3:{A:203,B:205,C:52}, 4:{A:253,B:302,C:52}, 7:{A:205,B:52,C:202}, 8:{A:346,B:204,C:202}, 9:{A:154,B:155,C:256}, 
10:{A:207,B:203,C:205}, 
//Red
13:{A:155,B:206,C:5}, 14:{A:27,B:55,C:204}, 15:{A:309,B:203,C:63}, 16:{A:320,B:253,C:4}, 17:{A:206,B:207,C:52}, 18:{A:204,B:207,C:303}, 19:{A:311,B:72,C:18}, 20:{A:22,B:67,C:205}, 21:{A:307,B:256,C:320}, 
22:{A:309,B:18,C:27}, 23:{A:72,B:77,C:207}, 24:{A:258,B:77,C:253}, 25:{A:226,B:155,C:330}, 26:{A:333,B:307,C:6}, 27:{A:154,B:53,C:304}, 28:{A:9,B:208,C:55}, 29:{A:31,B:30,C:7}, 30:{A:31,B:30,C:7}, 
//Blue
32:{A:277,B:72,C:208}, 33:{A:54,B:333,C:53}, 34:{A:111,B:34,C:102}, 35:{A:84,B:179,C:206}, 36:{A:130,B:305,C:4}, 37:{A:107,B:152,C:335}, 39:{A:57,B:131,C:213}, 40:{A:153,B:9,C:307}, 
41:{A:286,B:226,C:77}, 42:{A:66,B:108,C:287}, 43:{A:311,B:131,C:152}, 44:{A:104,B:22,C:18}, 45:{A:230,B:227,C:210}, 46:{A:287,B:217,C:226}, 47:{A:230,B:227,C:210},
//Green
49:{A:257,B:154,C:256}, 50:{A:108,B:104,C:204}, 51:{A:167,B:153,C:155}, 52:{A:181,B:54,C:67}, 53:{A:259,B:109,C:302}, 54:{A:105,B:252,C:5}, 55:{A:105,B:252,C:5}, 56:{A:156,B:63,C:111}, 57:{A:231,B:164,C:228},
58:{A:20,B:107,C:154}, 59:{A:265,B:311,C:9}, 60:{A:57,B:277,C:305}, 61:{A:161,B:308,C:34}, 62:{A:113,B:254,C:153}, 63:{A:187,B:175,C:186}, 64:{A:187,B:175,C:186}, 65:{A:185,B:221,C:217},  
//Purple
71:{A:262,B:109,C:330}, 72:{A:213,B:285,C:72}, 73:{A:11,B:287,C:34}, 74:{A:36,B:152,C:185}, 75:{A:211,B:104,C:203}, 76:{A:110,B:107,C:208}, 77:{A:157,B:122,C:63}, 78:{A:66,B:54,C:55}, 79:{A:8,B:103,C:10},  
80:{A:159,B:209,C:252}, 81:{A:266,B:114,C:13}, 82:{A:28,B:41,C:58}, 83:{A:292,B:263,C:282}, 84:{A:292,B:263,C:282}, 85:{A:165,B:231,C:69},
//Grey Between 
91:{A:72,B:309,C:302}, 92:{A:22,B:27,C:304}, 93:{A:54,B:309,C:202}, 94:{A:208,B:307,C:320}, 95:{A:258,B:30,C:152}, 96:{A:333,B:153,C:4}, 97:{A:108,B:66,C:9}, 98:{A:67,B:311,C:256}, 99:{A:186,B:108,C:58}, 
100:{A:221,B:265,C:305}, 101:{A:8,B:157,C:258}, 102:{A:104,B:257,C:107},
//Orange
121:{A:44,B:162,C:182}, 122:{A:239,B:238,C:229}, 123:{A:13,B:58,C:110}, 124:{A:45,B:20,C:254}, 125:{A:41,B:213,C:209}, 126:{A:282,B:210,C:105}, 127:{A:278,B:180,C:285}, 128:{A:86,B:73,C:60}, 
129:{A:86,B:85,C:60}, 140:{A:4,B:4,C:56}, 141:{A:86,B:73,C:60}, 142:{A:21,B:117,C:223},
//Black
151:{A:313,B:113,C:103}, 152:{A:136,B:36,C:210}, 153:{A:117,B:58,C:258}, 154:{A:321,B:191,C:227}, 155:{A:345,B:319,C:343}, 156:{A:275,B:167,C:20}, 157:{A:159,B:57,C:330}, 158:{A:322,B:241,C:119}, 159:{A:114,B:265,C:221}, 
160:{A:121,B:135,C:255},  161:{A:85,B:45,C:180},  162:{A:345,B:319,C:343},  163:{A:345,B:319,C:343},  164:{A:74,B:335,C:156},  
//Yellow
171:{A:119,B:136,C:131}, 172:{A:43,B:308,C:191}, 173:{A:59,B:117,C:257}, 174:{A:229,B:211,C:66}, 175:{A:61,B:60,C:45}, 176:{A:286,B:279,C:261}, 177:{A:231,B:162,C:121}, 178:{A:183,B:178,C:113},
179:{A:135,B:262,C:213}, 180:{A:128,B:116,C:139}, 182:{A:137,B:124,C:133}, 183:{A:137,B:124,C:133}, 184:{A:62,B:175,C:255}, 185:{A:328,B:273,C:111}, 
//Misc
200:{A:311,B:72,C:18}, 201:{A:66,B:108,C:287}, 401:{A:4,B:4,C:224}, 403:{A:48,B:40,C:17}, 404:{A:248,B:234,C:211}, 405:{A:198,B:189,C:167}, 406:{A:298,B:291,C:266}, 407:{A:98,B:83,C:60}, 408:{A:348,B:340,C:312}, 
409:{A:148,B:134,C:126}, 
//Final
203:{A:4,B:4,C:219}, 204:{A:15,B:279,C:321}, 205:{A:312,B:319,C:290}, 206:{A:279,B:61,C:36}, 207:{A:15,B:130,C:273}, 208:{A:135,B:188,C:162}, 209:{A:267,B:62,C:263},
//White
242:{A:352,B:84,C:26},243:{A:44,B:183,C:61},244:{A:241,B:8,C:75},245:{A:288,B:212,C:130},246:{A:322,B:262,C:313},247:{A:322,B:262,C:313},
//WhiteBomb
241:{A:186,B:313,C:308},
//PurpleHippo
227:{A:93,B:169,C:223},
//ChaosOmni
250:{A:417,B:190,C:290},

};
 
};

Rando.Tracker = function(){
	Object.entries(Sawyer.pickupArray).forEach(item => {
		console.log(item[1].Check);
	})
};


//RealTime Checks

Sawyer.Check = Sawyer.Check || {};
//Do you own the key?
Sawyer.Check.key = function(key){
	if (!Check.none()) return false;
	var id = 1;
	if (key == 'Yellow') id = 10;
	if (key == 'Green') id = 11;
	if (key == 'Blue') id = 12;
	if (key == 'Purple') id = 13;
	if (key == 'Red') id = 14;
	if (key == 'Orange') id = 15;
	if (key == 'Black') id = 16;
	if (key == 'Mem') id = 9;
	if (key == 'BlueGlitch') id = 20;
	if (key == 'BlueGlitchRight') id = 19;
	if (key == 'BlueGlitchLeft') id = 18;
	if (key == 'RedFragment') id = 22;
	if (key == 'OrangeFragment') id = 23;
	if (key == 'YellowFragment') id = 24;
	if (key == 'GreenFragment') id = 25;
	if (key == 'BlueFragment') id = 26;
	if (key == 'PurpleFragment') id = 27;
	if (key == 'BlackFragment') id = 28;
		return ($gameParty.hasItem($dataItems[id])); 
};
Sawyer.Check.card = function(key){
	if (!Check.none()) return false;
	var id = 1;
	if (key == 'Dragon') id = 31;
	if (key == 'Phoenix') id = 86;
	if (key == 'Pixie') id = 137;
	if (key == 'Unicorn') id = 187;
	if (key == 'Kappa') id = 230;
	if (key == 'Cyclops') id = 292;
	if (key == 'Pulgasari') id = 345;
	return ($gameParty.hasItem($dataWeapons[id]));
};

Sawyer.Check.zone = function(zone) {
	return Sawyer.Check._zoneInner(zone, {}); 
};


Sawyer.Check.glitch = function() {
	return (Sawyer.Check.key('BlueGlitch') || (Sawyer.Check.key('BlueGlitchRight')&&Sawyer.Check.key('BlueGlitchLeft')))
};


Sawyer.Check.allWardens = function() {
	return (Sawyer.Check.card('Dragon') && Sawyer.Check.card('Phoenix') && Sawyer.Check.card('Pixie') && Sawyer.Check.card('Unicorn') && Sawyer.Check.card('Kappa') && Sawyer.Check.card('Cyclops') && Sawyer.Check.card('Pulgasari'))
};


Sawyer.Check.frag = function() {
	return (Sawyer.Check.key('RedFragment') && Sawyer.Check.key('OrangeFragment') && Sawyer.Check.key('YellowFragment') && Sawyer.Check.key('GreenFragment') && Sawyer.Check.key('BlueFragment') && 
	Sawyer.Check.key('PurpleFragment') && Sawyer.Check.key('BlackFragment'))
};


Sawyer.Check.depression = function(){
	return ($gameParty.hasItem($dataWeapons[228]))
};
Sawyer.Check.burn = function(){
	return (
		$gameParty.hasItem($dataWeapons[14])  || 
		$gameParty.hasItem($dataWeapons[79])  || 
		$gameParty.hasItem($dataWeapons[87])
	)
};
Sawyer.Check.sleep = function(){
	return (
		$gameParty.hasItem($dataWeapons[72])  || 
		$gameParty.hasItem($dataWeapons[337]) ||
		$gameParty.hasItem($dataWeapons[103])
	)
};
Sawyer.Check.stun = function(){
	return (
		$gameParty.hasItem($dataWeapons[104]) || 
		$gameParty.hasItem($dataWeapons[134]) ||
		$gameParty.hasItem($dataWeapons[248]) ||
		$gameParty.hasItem($dataWeapons[293]) ||
		$gameParty.hasItem($dataWeapons[311]) ||
		$gameParty.hasItem($dataWeapons[321]) ||
		$gameParty.hasItem($dataArmors[7])    ||
		$gameParty.hasItem($dataWeapons[230])
	)
};
Sawyer.Check.fatigue = function(){
	return (
		$gameParty.hasItem($dataWeapons[186]) || 
		$gameParty.hasItem($dataWeapons[191])
	)
};
Sawyer.Check.redCard = function(){
	//Check if you have a red card and a character with a damaging special.
	return (
		$gameParty.hasItem($dataWeapons[42]) || $gameParty.hasItem($dataWeapons[25]) || $gameParty.hasItem($dataWeapons[29]) || $gameParty.hasItem($dataWeapons[23]) || $gameParty.hasItem($dataWeapons[39]) ||
		$gameParty.hasItem($dataWeapons[29]) || $gameParty.hasItem($dataWeapons[28]) || $gameParty.hasItem($dataWeapons[24]) || $gameParty.hasItem($dataWeapons[11]) || $gameParty.hasItem($dataWeapons[8]) ||
		$gameParty.hasItem($dataWeapons[44]) || $gameParty.hasItem($dataWeapons[20]) || $gameParty.hasItem($dataWeapons[26]) || $gameParty.hasItem($dataWeapons[19]) ||
		$gameParty.hasItem($dataWeapons[35]) || $gameParty.hasItem($dataWeapons[18]) || $gameParty.hasItem($dataWeapons[31]) || $gameParty.hasItem($dataWeapons[30]) || $gameParty.hasItem($dataWeapons[7]) ||
		$gameParty.hasItem($dataWeapons[44]) || $gameParty.hasItem($dataWeapons[34]) || $gameParty.hasItem($dataWeapons[28]) || $gameParty.hasItem($dataWeapons[41]) || $gameParty.hasItem($dataWeapons[38]) ||
		$gameParty.hasItem($dataWeapons[13]) || $gameParty.hasItem($dataWeapons[48]) || $gameParty.hasItem($dataWeapons[40]) || $gameParty.hasItem($dataWeapons[17]) || $gameParty.hasItem($dataWeapons[15]) ||
		$gameParty.hasItem($dataWeapons[5]) || $gameParty.hasItem($dataWeapons[6]) || $gameParty.hasItem($dataWeapons[7]) || $gameParty.hasItem($dataWeapons[10]) || $gameParty.hasItem($dataWeapons[16]) ||
		$gameParty.hasItem($dataWeapons[30]) || $gameParty.hasItem($dataWeapons[14]) || $gameParty.hasItem($dataWeapons[12]) || $gameParty.hasItem($dataWeapons[17]))
		&&
		($gameParty.members().includes($gameActors.actor(1)) || $gameParty.members().includes($gameActors.actor(3)) || $gameParty.members().includes($gameActors.actor(5))
		)
};

Sawyer.Check.orangeCard = function(){
	return (
		$gameParty.hasItem($dataWeapons[65]) || $gameParty.hasItem($dataWeapons[76]) ||$gameParty.hasItem($dataWeapons[53]) ||$gameParty.hasItem($dataWeapons[68]) ||$gameParty.hasItem($dataWeapons[79]) ||
		$gameParty.hasItem($dataWeapons[90]) ||$gameParty.hasItem($dataWeapons[70]) ||$gameParty.hasItem($dataWeapons[69]) ||$gameParty.hasItem($dataWeapons[59]) ||$gameParty.hasItem($dataWeapons[87]) ||
		$gameParty.hasItem($dataWeapons[56]) ||$gameParty.hasItem($dataWeapons[64]) ||$gameParty.hasItem($dataWeapons[72]) ||$gameParty.hasItem($dataWeapons[91]) ||$gameParty.hasItem($dataWeapons[86]) ||
		$gameParty.hasItem($dataWeapons[73]) ||$gameParty.hasItem($dataWeapons[60]) ||$gameParty.hasItem($dataWeapons[57]) ||$gameParty.hasItem($dataWeapons[66]) ||$gameParty.hasItem($dataWeapons[58]) ||
		$gameParty.hasItem($dataWeapons[92]) ||$gameParty.hasItem($dataWeapons[98]) ||$gameParty.hasItem($dataWeapons[83]) ||$gameParty.hasItem($dataWeapons[60]) ||$gameParty.hasItem($dataWeapons[52]) ||
		$gameParty.hasItem($dataWeapons[53]) ||$gameParty.hasItem($dataWeapons[78]) ||$gameParty.hasItem($dataWeapons[69]) ||$gameParty.hasItem($dataWeapons[59]) ||$gameParty.hasItem($dataWeapons[71]) ||
		$gameParty.hasItem($dataWeapons[85]) ||$gameParty.hasItem($dataWeapons[73]) ||$gameParty.hasItem($dataWeapons[89]) ||$gameParty.hasItem($dataWeapons[75]))
		&&
		($gameParty.members().includes($gameActors.actor(1)) || $gameParty.members().includes($gameActors.actor(3)) || $gameParty.members().includes($gameActors.actor(5))
		)
};

Sawyer.Check.yellowCard = function(){
	return (
		$gameParty.hasItem($dataWeapons[140]) || $gameParty.hasItem($dataWeapons[112]) || $gameParty.hasItem($dataWeapons[125]) || $gameParty.hasItem($dataWeapons[121]) ||$gameParty.hasItem($dataWeapons[126]) || 
		$gameParty.hasItem($dataWeapons[114]) || $gameParty.hasItem($dataWeapons[103]) || $gameParty.hasItem($dataWeapons[139]) || $gameParty.hasItem($dataWeapons[115]) ||$gameParty.hasItem($dataWeapons[141]) || 
		$gameParty.hasItem($dataWeapons[128]) || $gameParty.hasItem($dataWeapons[116]) || $gameParty.hasItem($dataWeapons[139]) || $gameParty.hasItem($dataWeapons[137]) ||$gameParty.hasItem($dataWeapons[124]) || 
		$gameParty.hasItem($dataWeapons[133]) || $gameParty.hasItem($dataWeapons[131]) || $gameParty.hasItem($dataWeapons[108]) || $gameParty.hasItem($dataWeapons[114]) ||$gameParty.hasItem($dataWeapons[119]) || 
		$gameParty.hasItem($dataWeapons[142]) || $gameParty.hasItem($dataWeapons[121]) || $gameParty.hasItem($dataWeapons[135]) || $gameParty.hasItem($dataWeapons[148]) ||$gameParty.hasItem($dataWeapons[134]) || 
		$gameParty.hasItem($dataWeapons[126]) || $gameParty.hasItem($dataWeapons[105]) || $gameParty.hasItem($dataWeapons[106]) || $gameParty.hasItem($dataWeapons[102]) ||$gameParty.hasItem($dataWeapons[122]) || 
		$gameParty.hasItem($dataWeapons[127]) || $gameParty.hasItem($dataWeapons[120]) || $gameParty.hasItem($dataWeapons[123]) || $gameParty.hasItem($dataWeapons[129]) ||$gameParty.hasItem($dataWeapons[133]) || 
		$gameParty.hasItem($dataWeapons[118]))
		&&
		($gameParty.members().includes($gameActors.actor(1)) || $gameParty.members().includes($gameActors.actor(3)) || $gameParty.members().includes($gameActors.actor(5))
	)
};

Sawyer.Check.greenCard = function(){
	return (
		$gameParty.hasItem($dataWeapons[180]) ||$gameParty.hasItem($dataWeapons[177]) ||$gameParty.hasItem($dataWeapons[164]) ||$gameParty.hasItem($dataWeapons[170]) ||$gameParty.hasItem($dataWeapons[168]) ||
		$gameParty.hasItem($dataWeapons[169]) ||$gameParty.hasItem($dataWeapons[166]) ||$gameParty.hasItem($dataWeapons[192]) ||$gameParty.hasItem($dataWeapons[159]) ||$gameParty.hasItem($dataWeapons[173]) ||
		$gameParty.hasItem($dataWeapons[172]) ||$gameParty.hasItem($dataWeapons[154]) ||$gameParty.hasItem($dataWeapons[155]) ||$gameParty.hasItem($dataWeapons[162]) ||$gameParty.hasItem($dataWeapons[182]) ||
		$gameParty.hasItem($dataWeapons[164]) ||$gameParty.hasItem($dataWeapons[161]) ||$gameParty.hasItem($dataWeapons[187]) ||$gameParty.hasItem($dataWeapons[175]) ||$gameParty.hasItem($dataWeapons[186]) ||
		$gameParty.hasItem($dataWeapons[193]) ||$gameParty.hasItem($dataWeapons[194]) ||$gameParty.hasItem($dataWeapons[198]) ||$gameParty.hasItem($dataWeapons[189]) ||$gameParty.hasItem($dataWeapons[167]) ||
		$gameParty.hasItem($dataWeapons[188]) ||$gameParty.hasItem($dataWeapons[178]) ||$gameParty.hasItem($dataWeapons[157]) ||$gameParty.hasItem($dataWeapons[185]) ||$gameParty.hasItem($dataWeapons[179]) ||
		$gameParty.hasItem($dataWeapons[182]) ||$gameParty.hasItem($dataWeapons[158]) ||$gameParty.hasItem($dataWeapons[174]) ||$gameParty.hasItem($dataWeapons[160]) ||$gameParty.hasItem($dataWeapons[163]))
		&&
		($gameParty.members().includes($gameActors.actor(1)) || $gameParty.members().includes($gameActors.actor(3)) || $gameParty.members().includes($gameActors.actor(5))
	)
};

Sawyer.Check.blueCard = function(){
	return ((
		$gameParty.hasItem($dataWeapons[225]) || $gameParty.hasItem($dataWeapons[222]) ||$gameParty.hasItem($dataWeapons[241]) ||$gameParty.hasItem($dataWeapons[242]) ||$gameParty.hasItem($dataWeapons[216]) ||
		$gameParty.hasItem($dataWeapons[215]) ||$gameParty.hasItem($dataWeapons[219]) ||$gameParty.hasItem($dataWeapons[214]) ||$gameParty.hasItem($dataWeapons[239]) ||$gameParty.hasItem($dataWeapons[238]) ||
		$gameParty.hasItem($dataWeapons[229]) ||$gameParty.hasItem($dataWeapons[244]) ||$gameParty.hasItem($dataWeapons[231]) ||$gameParty.hasItem($dataWeapons[228]) ||$gameParty.hasItem($dataWeapons[243]) ||
		$gameParty.hasItem($dataWeapons[213]) ||$gameParty.hasItem($dataWeapons[230]) ||$gameParty.hasItem($dataWeapons[227]) ||$gameParty.hasItem($dataWeapons[210]) ||$gameParty.hasItem($dataWeapons[241]) ||
		$gameParty.hasItem($dataWeapons[248]) ||$gameParty.hasItem($dataWeapons[234]) ||$gameParty.hasItem($dataWeapons[211]) ||$gameParty.hasItem($dataWeapons[206]) ||$gameParty.hasItem($dataWeapons[217]) ||
		$gameParty.hasItem($dataWeapons[237]) ||$gameParty.hasItem($dataWeapons[209]) ||$gameParty.hasItem($dataWeapons[223]) ||$gameParty.hasItem($dataWeapons[227]) ||$gameParty.hasItem($dataWeapons[212]) ||
		$gameParty.hasItem($dataWeapons[219]))
		&&
		($gameParty.members().includes($gameActors.actor(1)) || $gameParty.members().includes($gameActors.actor(3)) || $gameParty.members().includes($gameActors.actor(5)))
	)
};

Sawyer.Check.purpleCard = function(){
	return ((
		$gameParty.hasItem($dataWeapons[284]) ||$gameParty.hasItem($dataWeapons[268]) ||$gameParty.hasItem($dataWeapons[271]) ||$gameParty.hasItem($dataWeapons[274]) ||$gameParty.hasItem($dataWeapons[286]) ||
		$gameParty.hasItem($dataWeapons[261]) ||$gameParty.hasItem($dataWeapons[279]) ||$gameParty.hasItem($dataWeapons[263]) ||$gameParty.hasItem($dataWeapons[278]) ||$gameParty.hasItem($dataWeapons[269]) ||
		$gameParty.hasItem($dataWeapons[259]) ||$gameParty.hasItem($dataWeapons[260]) ||$gameParty.hasItem($dataWeapons[256]) ||$gameParty.hasItem($dataWeapons[286]) ||$gameParty.hasItem($dataWeapons[279]) ||
		$gameParty.hasItem($dataWeapons[261]) ||$gameParty.hasItem($dataWeapons[296]) ||$gameParty.hasItem($dataWeapons[287]) ||$gameParty.hasItem($dataWeapons[297]) ||$gameParty.hasItem($dataWeapons[266]) ||
		$gameParty.hasItem($dataWeapons[292]) ||$gameParty.hasItem($dataWeapons[263]) ||$gameParty.hasItem($dataWeapons[282]) ||$gameParty.hasItem($dataWeapons[255]) ||$gameParty.hasItem($dataWeapons[298]) ||
		$gameParty.hasItem($dataWeapons[291]) ||$gameParty.hasItem($dataWeapons[266]) ||$gameParty.hasItem($dataWeapons[279]) ||$gameParty.hasItem($dataWeapons[253]) ||$gameParty.hasItem($dataWeapons[254]) ||
		$gameParty.hasItem($dataWeapons[281]) ||$gameParty.hasItem($dataWeapons[264]) ||$gameParty.hasItem($dataWeapons[293]) ||$gameParty.hasItem($dataWeapons[275]) ||$gameParty.hasItem($dataWeapons[288]) || 
		$gameParty.hasItem($dataWeapons[290]) || $gameParty.hasItem($dataWeapons[272]))
		&&
		($gameParty.members().includes($gameActors.actor(1)) || $gameParty.members().includes($gameActors.actor(3)) || $gameParty.members().includes($gameActors.actor(5)))
	)
};

Sawyer.Check.blackCard = function(){
	return ((
		$gameParty.hasItem($dataWeapons[329]) ||$gameParty.hasItem($dataWeapons[317]) ||$gameParty.hasItem($dataWeapons[344]) ||$gameParty.hasItem($dataWeapons[306]) ||$gameParty.hasItem($dataWeapons[322]) ||
		$gameParty.hasItem($dataWeapons[323]) ||$gameParty.hasItem($dataWeapons[343]) ||$gameParty.hasItem($dataWeapons[321]) ||$gameParty.hasItem($dataWeapons[315]) ||$gameParty.hasItem($dataWeapons[335]) ||
		$gameParty.hasItem($dataWeapons[314]) ||$gameParty.hasItem($dataWeapons[311]) ||$gameParty.hasItem($dataWeapons[339]) ||$gameParty.hasItem($dataWeapons[308]) ||$gameParty.hasItem($dataWeapons[347]) ||
		$gameParty.hasItem($dataWeapons[322]) ||$gameParty.hasItem($dataWeapons[345]) ||$gameParty.hasItem($dataWeapons[319]) ||$gameParty.hasItem($dataWeapons[343]) ||$gameParty.hasItem($dataWeapons[348]) ||
		$gameParty.hasItem($dataWeapons[340]) ||$gameParty.hasItem($dataWeapons[312]) ||$gameParty.hasItem($dataWeapons[321]) ||$gameParty.hasItem($dataWeapons[304]) ||$gameParty.hasItem($dataWeapons[303]) ||
		$gameParty.hasItem($dataWeapons[333]) ||$gameParty.hasItem($dataWeapons[306]) ||$gameParty.hasItem($dataWeapons[310]) ||$gameParty.hasItem($dataWeapons[318]) ||$gameParty.hasItem($dataWeapons[334]) ||
		$gameParty.hasItem($dataWeapons[337]) ||$gameParty.hasItem($dataWeapons[324]))
		&&
		($gameParty.members().includes($gameActors.actor(1)) || $gameParty.members().includes($gameActors.actor(3)) || $gameParty.members().includes($gameActors.actor(5)))
	)
};



Sawyer.Check._zoneInner = function(zone, visitedDict) {
	if (!Sawyer.Check.none()) return false;
	if (zone in visitedDict) return false;
	visitedDict = {...visitedDict}; 
	visitedDict[zone] = true;
	if (zone == 'Red'){
		if (BUILD_NAME[0] == "D"){
			return (
				(Sawyer.Check.key('Yellow'))
			);
		} else {
			return (
				((Sawyer.Check.key('Yellow')) && Sawyer.Check.party(2)) ||
				(Sawyer.Check.key('Green') && Sawyer.Check._zoneInner('Green',visitedDict)) ||
				(Sawyer.Check.key('Red') && Sawyer.Check.key('Blue') && Sawyer.Check._zoneInner('Blue1',visitedDict))
			);	
		}
	} else if (zone == 'Red2'){
				if (BUILD_NAME[0] == "D"){
			return (
				(Sawyer.Check.key('Yellow'))
			);
		} else {
			return (
				(Sawyer.Check.key('Yellow') && Sawyer.Check.party(2)) ||
				(Sawyer.Check.key('Blue') && Sawyer.Check._zoneInner('Blue2',visitedDict)) ||
				(Sawyer.Check.key('Green') && Sawyer.Check._zoneInner('Yellow',visitedDict)) ||
				(Sawyer.Check.key('Red') && Sawyer.Check.key('Mem'))
			);
		}
		

	} else if (zone == 'Blue1'){
		return (
			(Sawyer.Check.key('Red') && Sawyer.Check.key('Yellow')) ||
			(Sawyer.Check.key('Black') && Sawyer.Check.key('Blue') && Sawyer.Check._zoneInner('Yellow',visitedDict))
		);	

	} else if (zone == 'Blue2'){
		return (
			(Sawyer.Check._zoneInner('Blue1',visitedDict) && Sawyer.Check.party(2)) ||
			(Sawyer.Check._zoneInner('Blue3',visitedDict) && Sawyer.Check.party(2))
		);

	} else if (zone == 'Blue3'){
		return (
			(Sawyer.Check._zoneInner('Blue2', visitedDict) && Sawyer.Check.party(3)) ||
			(Sawyer.Check.key('Blue') && Sawyer.Check.key('Black') && Sawyer.Check._zoneInner('Yellow', visitedDict)) ||
			(Sawyer.Check._zoneInner('Blue4', visitedDict) && Sawyer.Check.party(4))
		);

	} else if (zone == 'Blue4'){
		return (
			(Sawyer.Check._zoneInner('Blue3', visitedDict) && Sawyer.Check.party(4)) ||
			(Sawyer.Check.key('Yellow')&&Sawyer.Check.key('Purple')&&Sawyer.Check._zoneInner('Purple', visitedDict))
		);

	} else if (zone == 'Blue5'){
		return (
			(Sawyer.Check._zoneInner('Blue3', visitedDict) && Sawyer.Check.party(4)) ||
			(Sawyer.Check._zoneInner('Blue6', visitedDict) && Sawyer.Check.glitch() && Sawyer.Check.party(2))
		);

	} else if (zone == 'Blue6'){
		return (
			(Sawyer.Check._zoneInner('Blue5', visitedDict) && Sawyer.Check.party(2)) && Sawyer.Check.glitch() ||
			(Sawyer.Check.key('Blue') && Sawyer.Check.key('Mem'))
		);


	} else if (zone == 'Green'){
		return (
			(Sawyer.Check.key('Blue')) ||
			(Sawyer.Check._zoneInner('Green2', visitedDict) && Sawyer.Check.party(2))
		);
		
	} else if (zone == 'Green2'){
		return (
			(Sawyer.Check._zoneInner('Green', visitedDict) && Sawyer.Check.party(2)) ||
			(Sawyer.Check.key('Green') && (Sawyer.Check._zoneInner('Red', visitedDict))) ||
			(Sawyer.Check.key('Orange') && Sawyer.Check._zoneInner('Orange', visitedDict) && Sawyer.Check.key('Green')) || 
			(Sawyer.Check.key('Green') && Sawyer.Check.key('Mem'))
		);

	} else if (zone == 'Purple'){
		return (
			(Sawyer.Check.key('Blue') && Sawyer.Check.key('Yellow')) ||
			(Sawyer.Check.key('Black') && (Sawyer.Check._zoneInner('Orange', visitedDict)))||
			(Sawyer.Check.key('Yellow') && Sawyer.Check._zoneInner('Blue4', visitedDict) && Sawyer.Check.key('Purple')) ||
			(Sawyer.Check._zoneInner('Purple2',visitedDict) && Sawyer.Check.party(2))
		);

	} else if (zone == 'Purple2'){
		return (
			(Sawyer.Check._zoneInner('Purple',visitedDict) && Sawyer.Check.party(2)) ||
			(Sawyer.Check.key('Red') && Sawyer.Check.key('Black') && Sawyer.Check._zoneInner('Black', visitedDict)) ||
			(Sawyer.Check.key('Purple') && Sawyer.Check.key('Mem'))
		);

	} else if (zone == 'Orange'){
		return (
			(Sawyer.Check.key('Black') && (Sawyer.Check._zoneInner('Black', visitedDict))) ||
			(Sawyer.Check.key('Green') && Sawyer.Check.key('Purple') && Sawyer.Check.key('Yellow') && Sawyer.Check.party(2)) ||
			(Sawyer.Check.key('Purple') && Sawyer.Check.key('Orange') && Sawyer.Check._zoneInner('Green', visitedDict)) ||
			(Sawyer.Check.key('Orange') && Sawyer.Check.key('Mem'))
		);	

	} else if (zone == 'Black'){
		return (
			(Sawyer.Check.key('Orange')) ||
			(Sawyer.Check.key('Red') && Sawyer.Check._zoneInner('Purple',visitedDict) && Sawyer.Check.key('Black')) ||
			(Sawyer.Check.party(2) && Sawyer.Check._zoneInner('Black2',visitedDict))
		);	

	} else if (zone == 'Black2'){
		return (
			(Sawyer.Check.party(2) && Sawyer.Check._zoneInner('Black',visitedDict)) ||
			(Sawyer.Check.key('Black') && Sawyer.Check._zoneInner('Purple2',visitedDict))||
			(Sawyer.Check.key('Black') && Sawyer.Check._zoneInner('Orange',visitedDict)) ||
			(Sawyer.Check.key('Black') && Sawyer.Check.key('Mem'))
		);

	} else if (zone == 'Yellow'){
		return (
			(Sawyer.Check.key('Black')) ||
			(Sawyer.Check.key('Green') && Sawyer.Check._zoneInner('Red2', visitedDict)) ||
			(Sawyer.Check._zoneInner('Yellow2',visitedDict) && Sawyer.Check.party(2))
		);

	} else if (zone == 'Yellow2'){
		return (
			(Sawyer.Check.key('Black') && Sawyer.Check._zoneInner('Blue5', visitedDict) && Sawyer.Check.key('Blue')) ||
			(Sawyer.Check.key('Yellow') && Sawyer.Check.key('Mem')) ||
			(Sawyer.Check._zoneInner('Yellow',visitedDict) && Sawyer.Check.party(2))
		);

	} else if (zone == 'Final' || zone == 'White'){
		return (
			(Sawyer.Check.key('Black') && (Sawyer.Check.party(7)))
		);
	}
};

Sawyer.Check.red = Sawyer.Check.zone.bind(Sawyer.Check, 'Red');
Sawyer.Check.red2 = Sawyer.Check.zone.bind(Sawyer.Check, 'Red2');
Sawyer.Check.blue1 = Sawyer.Check.zone.bind(Sawyer.Check, 'Blue1');
Sawyer.Check.blue2 = Sawyer.Check.zone.bind(Sawyer.Check, 'Blue2');
Sawyer.Check.blue3 = Sawyer.Check.zone.bind(Sawyer.Check, 'Blue3');
Sawyer.Check.blue4 = Sawyer.Check.zone.bind(Sawyer.Check, 'Blue4');
Sawyer.Check.blue5 = Sawyer.Check.zone.bind(Sawyer.Check, 'Blue5');
Sawyer.Check.blue6 = Sawyer.Check.zone.bind(Sawyer.Check, 'Blue6');
Sawyer.Check.green = Sawyer.Check.zone.bind(Sawyer.Check, 'Green');
Sawyer.Check.green2 = Sawyer.Check.zone.bind(Sawyer.Check, 'Green2');
Sawyer.Check.purple = Sawyer.Check.zone.bind(Sawyer.Check, 'Purple');
Sawyer.Check.purple2 = Sawyer.Check.zone.bind(Sawyer.Check, 'Purple2');
Sawyer.Check.orange = Sawyer.Check.zone.bind(Sawyer.Check, 'Orange');
Sawyer.Check.black = Sawyer.Check.zone.bind(Sawyer.Check, 'Black');
Sawyer.Check.black2 = Sawyer.Check.zone.bind(Sawyer.Check, 'Black2');
Sawyer.Check.yellow = Sawyer.Check.zone.bind(Sawyer.Check, 'Yellow');
Sawyer.Check.yellow2 = Sawyer.Check.zone.bind(Sawyer.Check, 'Yellow2');
Sawyer.Check.white = Sawyer.Check.zone.bind(Sawyer.Check, 'White');
Sawyer.Check.frag = Sawyer.Check.frag;
Sawyer.Check.reCo = Sawyer.Check.reCo;

//Sawyer: The following are special checks.

Sawyer.Check.starstudAmount = function(){
		var stars = 0;
	//1: Pinn's Room
	if ($gameParty.members().length >= (1) && $gameSelfSwitches.value([18, 6, 'A']) === false) stars +=1;
	//2: Kindahub2
	if ($gameParty.hasItem($dataItems[10]) && $gameSelfSwitches.value([33, 6, 'A']) === false) stars +=1;
	//3: Kindahub3
	if ($gameParty.hasItem($dataItems[10]) && $gameParty.hasItem($dataItems[11]) && $gameSelfSwitches.value([37, 13, 'A']) === false) stars +=1;
	//4: Red1
	if (Sawyer.Check.zone('Red') && $gameSelfSwitches.value([36, 37, 'A']) === false) stars +=1;
	//5: Red Bridge
	if (Sawyer.Check.zone('Red2') && $gameSelfSwitches.value([45, 26, 'A']) === false) stars +=1;
	//6: Red Tower
	if (Sawyer.Check.zone('Red2') && $gameSelfSwitches.value([53, 13, 'A']) === false) stars +=1;	
	//7: Orange Extra
	if (Sawyer.Check.zone('Orange') && $gameParty.hasItem($dataItems[15]) && $gameSelfSwitches.value([345, 8, 'A']) === false) stars +=1;
	//8: Orange1
	if (Sawyer.Check.zone('Orange') && $gameSelfSwitches.value([129, 65, 'A']) === false) stars +=1;
	//9: OrangeRight
	if (Sawyer.Check.zone('Orange') && $gameSelfSwitches.value([131, 30, 'A']) === false) stars +=1;
	//10: YellowBoss1
	if (Sawyer.Check.zone('Yellow2') && $gameSelfSwitches.value([235, 16, 'A']) === false) stars +=1;
	//11: YellowBulb
	if (Sawyer.Check.zone('Yellow2') && $gameSelfSwitches.value([241, 17, 'A']) === false) stars +=1;
	//12: YellowTower7
	if (Sawyer.Check.zone('Yellow2') && $gameSelfSwitches.value([257, 6, 'A']) === false) stars +=1;
	//13: Green4
	if (Sawyer.Check.zone('Green') && $gameSelfSwitches.value([79, 32, 'A']) === false) stars +=1;
	//14: Cyphon Hall 2
	if (Sawyer.Check.zone('Green') && $gameSelfSwitches.value([96, 8, 'A']) === false) stars +=1;
	//15: Green LeftDown
	if (Sawyer.Check.zone('Green') && $gameSelfSwitches.value([83, 26, 'A']) === false) stars +=1;
	//16: blue1
	if (Sawyer.Check.zone('Blue1') && $gameSelfSwitches.value([55, 26, 'A']) === false) stars +=1;
	//17: GeoTrap
	if (Sawyer.Check.zone('Blue4') && $gameSelfSwitches.value([66, 12, 'A']) === false) stars +=1;
	//18: BlueCave
	if (Sawyer.Check.zone('Blue5') && $gameSelfSwitches.value([71, 15, 'A']) === false) stars += 1;
	//19: PurpleSniper1
	if (Sawyer.Check.zone('Purple') && $gameSelfSwitches.value([102, 14, 'A']) === false) stars +=1;
	//20: PurpleSplitRight
	if (Sawyer.Check.zone('Purple2') && $gameSelfSwitches.value([114, 11, 'A']) === false) stars +=1;
	//21: PurpleTower5
	if (Sawyer.Check.zone('Purple2') && $gameSelfSwitches.value([119, 9, 'A']) === false) stars +=1;
	//22: BlackZone6
	if (Sawyer.Check.zone('Black') && $gameSelfSwitches.value([154, 32, 'A']) === false) stars += 1;
	//23: Black10
	if (Sawyer.Check.zone('Black2') && $gameSelfSwitches.value([162, 13, 'A']) === false) stars += 1;
	//24: Black DungeonRight up
	if (Sawyer.Check.zone('Black2') && $gameSelfSwitches.value([198, 9, 'A']) === false) stars += 1; 
	//25: WhiteZone 1
	if (Sawyer.Check.zone('White') && $gameSelfSwitches.value([380, 10, 'A']) === false) stars += 1; 
	return stars;
	
}

Sawyer.Check.stars = function(number){
	var stars = Sawyer.Check.starstudAmount();
	//console.log(stars + ' stars');
	return stars >= number;
};

Sawyer.Check.reCo = function(id){
	switch (id) {
		case 0: 
			return ($gameSwitches.value(178));
		case 1:
			return ($gameSwitches.value(175) && Sawyer.Check.zone('Black') && Sawyer.Check.redCard());
		case 2:
			return ($gameSwitches.value(166) && Sawyer.Check.zone('Red'));
		case 3:
			return ($gameSwitches.value(169) && Sawyer.Check.zone('Green'));
		case 4:
			return ($gameSwitches.value(173) && Sawyer.Check.zone('Purple'));
		case 5:
			return ($gameSwitches.value(168) && Sawyer.Check.zone('Blue4') && Sawyer.Check.blueCard());
		case 6:
			return ($gameSwitches.value(176) && Sawyer.Check.zone('Orange'));
		case 7:
			return ($gameSwitches.value(180) && $gameParty.hasItem($dataItems[10]) && Sawyer.Check.zone('Yellow'));
		case 8:
			return ($gameSwitches.value(182) && Sawyer.Check.zone('Green'));
		case 9:
			return ($gameSwitches.value(184) && Sawyer.Check.zone('Purple'));
		case 10:
			return ($gameSwitches.value(186) && Sawyer.Check.zone('White') && Sawyer.Check.redCard() && Sawyer.Check.orangeCard() && Sawyer.Check.yellowCard() && Sawyer.Check.greenCard() && Sawyer.Check.blueCard() && Sawyer.Check.purpleCard() &&
			Sawyer.Check.blackCard()) && $gameParty.members.length >= (3);
		case 11:
			return ($gameSwitches.value(188) && Sawyer.Check.zone('Blue1'));
		case 12:
			return ($gameSwitches.value(190) && Sawyer.Check.zone('Black'));
		case 13:
			return ($gameSwitches.value(192) && Sawyer.Check.zone('Red'));
		case 14:
			return ($gameSwitches.value(194) && Sawyer.Check.zone('Orange'));
		case 15:
			return ($gameSwitches.value(196) && Sawyer.Check.zone('Yellow'));
		case 16:
			return ($gameSwitches.value(198) && $gameParty.hasItem($dataItems[10]));
		default:
			return false;
	}
};

Sawyer.Check.none = function(){
		return true;
};

Sawyer.Check.party = function(size){
		return $gameParty.members().length >= size;
};

Sawyer.availChecks = function(){
	var yellowKey = $gameParty.hasItem($dataItems[10]);
	var greenKey = $gameParty.hasItem($dataItems[11]);
	var blueKey = $gameParty.hasItem($dataItems[12]);
	var purpleKey = $gameParty.hasItem($dataItems[13]);
	var redKey = $gameParty.hasItem($dataItems[14]);
	var orangeKey = $gameParty.hasItem($dataItems[15]);
	var blackKey = $gameParty.hasItem($dataItems[16]);

	var red = Sawyer.Check.red;
	var red2 = Sawyer.Check.red2;
	var orange = Sawyer.Check.orange;
	var yellow = Sawyer.Check.yellow;
	var yellow2 = Sawyer.Check.yellow2;
	var green = Sawyer.Check.green;
	var green2 = Sawyer.Check.green2;
	var blue1 = Sawyer.Check.blue1;
	var blue2 = Sawyer.Check.blue2;
	var blue3 = Sawyer.Check.blue3;
	var blue4 = Sawyer.Check.blue4;
	var blue5 = Sawyer.Check.blue5;
	var blue6 = Sawyer.Check.blue6;
	var purple = Sawyer.Check.purple;
	var purple2 = Sawyer.Check.purple2;
	var black = Sawyer.Check.black;
	var black2 = Sawyer.Check.black2;
	var white = Sawyer.Check.white;
	var none = Sawyer.Check.none;

	var frag = Sawyer.Check.frag;

	var dragon = Sawyer.Check.dragon;
	var phoenix = Sawyer.Check.phoenix;
	var pixie = Sawyer.Check.pixie;
	var unicorn = Sawyer.Check.unicorn;
	var kappa = Sawyer.Check.kappa;
	var cyclops = Sawyer.Check.cyclops;
	var pulgasari = Sawyer.Check.pulgasari;

	var depression = Sawyer.Check.depression;
	var burn = Sawyer.Check.burn;
	var sleep = Sawyer.Check.sleep;
	var stun = Sawyer.Check.stun;
	var fatigue = Sawyer.Check.fatigue;	
	
	var or = function(...args) {
    return () => { return [...args].reduce(function(accumulator, currentValue) {
        return (accumulator || currentValue.call());
    }, false)};
}
var and = function(...args) {
    return () => { return [...args].reduce(function(accumulator, currentValue) {
        return (accumulator && currentValue.call());
    }, true)};
}

var always = () => true;
var never = () => false;
};

Rando.createTrackerList = function(){
	var zoneList = ['Grey','Red','Blue','Green','Purple','Orange','Black','Yellow','White','ReCo','Boss','Shop','Starstud'];
	$gamePlayer.availChecks = {};
	$gamePlayer.availChecks['Total'] = 0;
			for (var i = 0; i < zoneList.length; i++){
					$gamePlayer.availChecks[zoneList[i]] = 0;
			}
	Object.entries(Sawyer.pickupArray).forEach(item => {
		if (item[1].Check() && !$gamePlayer.getRando[$gamePlayer.randomArray[item[0]]]) {
			$gamePlayer.availChecks['Total'] ++;
			
			for (var i = 0; i < zoneList.length; i++){
				if (item[1].Zones.includes(zoneList[i])) {
					$gamePlayer.availChecks[zoneList[i]] ++;
				}
			}
		}
	});
	$gamePlayer.availChecks['Starstud'] = Sawyer.Check.starstudAmount();
	$gameVariables.setValue(301,$gamePlayer.availChecks['Red']);
	$gameVariables.setValue(302,$gamePlayer.availChecks['Orange']);
	$gameVariables.setValue(303,$gamePlayer.availChecks['Yellow']);
	$gameVariables.setValue(304,$gamePlayer.availChecks['Green']);
	$gameVariables.setValue(305,$gamePlayer.availChecks['Blue']);
	$gameVariables.setValue(306,$gamePlayer.availChecks['Purple']);
	$gameVariables.setValue(307,$gamePlayer.availChecks['Black']);
	$gameVariables.setValue(308,$gamePlayer.availChecks['Grey']);
	$gameVariables.setValue(309,$gamePlayer.availChecks['White']);
	$gameVariables.setValue(313,$gamePlayer.availChecks['Shop']);
	$gameVariables.setValue(310,$gamePlayer.availChecks['Boss']);
	$gameVariables.setValue(312,$gamePlayer.availChecks['ReCo']);
	$gameVariables.setValue(311,$gamePlayer.availChecks['Starstud']);
	$gameVariables.setValue(314,$gamePlayer.availChecks['Total']);
};