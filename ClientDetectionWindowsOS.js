/**
 * Client detection
 * ----------------
 * Platform detection - identifying windows OS
 */ 
 
if (system.win){
	if(/Win(?:dows )?([^do]{2})\s?(\d+\.\d+)?/.test(ua){
		if(RegExp["$1"] == "NT"){
			switch(RegExp["$2"]){
				case "5.0":
					system.win = "2000";
					break;
				case "5.1": 
					system.win = "XP";
					break; 
				case "6.0":
					system.win = "Vista"; 
					break;
				case "6.1":
					system.win = "7"; 
					break;
				default:
					system.win = "NT"; 
					break;
			}
		} else if (RegExp["$1"] == "9x"){	
			system.win = "ME"; 
		} else { 
			system.win = RegEx]["$1"]; 
		}
	}
}

/**
 * Example usage
 * -------------
 * Windows OS detection
 */ 
 
if(client.system.win){
	if(client.system.win == "XP"){
		//report XP
	} else if (client.system.win == "Vista"){
		//rerpot Vista
	}
}

