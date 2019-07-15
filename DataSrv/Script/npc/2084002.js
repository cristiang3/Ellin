/*
* @autor Java
* JS-Maple MapleStory Private Server
*/

importPackage(Packages.client);
importPackage(Packages.server.maps);

/* Variaveis */
    var status = 0;
    var tempo = new Date();
    var dia = tempo.getDay();
    var ano = tempo.getFullYear();
    var mes = tempo.getMonth();
    var data = tempo.getDate();
    var hora = tempo.getHours();
    var min = tempo.getMinutes();
    var seg = tempo.getSeconds();

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 0 && mode == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if(cm.getPlayer().getMapId()== 390009999){
			if (status == 0) {
				cm.sendNext("Bem vindo a quest do Rico Dourado. Voc� trouxe algo para mim?");
			} else if (status == 1) {
				cm.sendSimple("O que voc� gostaria de fazer?\r\n#b#L1#Trocar Letras#l#k\r\n#b#L2#Trocar Ovos de EXP#l#k\r\n#b#L3#Entrar na miss�o#l#k\r\n#b#L4#Outras informa��es#l#k");
			} else if (selection == 1) {
                            if(cm.haveItem(3994102, 20) && cm.haveItem(3994103, 20) && cm.haveItem(3994104, 20) && cm.haveItem(3994105, 20)) {
                                 cm.gainItem(3994102, -20);
                                 cm.gainItem(3994103, -20);
                                 cm.gainItem(3994104, -20);
                                 cm.gainItem(3994105, -20);
                                 cm.gainItem(2430008, 1);
                                 cm.sendOk("Voc� acaba de receber a b�ssola!"); 
                                 cm.dispose();
                             } else {
                                 cm.sendOk("Para fazer a troca e necess�rio todas as letras.");
                                 cm.dispose();
                             }
                         } else if (selection == 2) {
                            ovosexp = cm.getPlayer().countItem(4001255);
                            if(ovosexp > 0) {
                                 cm.getPlayer().gainExpRiche();
                                 cm.gainItem(4001255, -1); 
                                 cm.dispose();
                             } else {
                                 cm.sendOk("Para fazer a troca e necess�rio ter o Ovo.");
                                 cm.dispose();
                             }
                        } else if (selection == 3) {
                               if (hora >= 08 && hora < 09 || hora >= 20 && hora < 21){ 
                                         if(!cm.haveItem(2430008, 1)) {
                                            cm.sendOk("Voc� precisa da b�ssola para entrar!"); 
                                            cm.dispose();
                                            return;
                                         }
                                         cm.RichieEnter(cm.getClient());
                                } else { 
				 cm.sendOk("Ainda n�o est� no hor�rio de funcionamento, verifique!");
                                 cm.dispose();
                        }
                    } else if (selection == 4) {
				 cm.sendOk("Os horarios de funcionamento s�o das 8:00 as 9:00 da manh� e 20:00 as 21:00. Para obter a b�ssola e necessario ter 20 pe�as de cada letra (N,E,W,S). A experi�ncia obtida atrav�s dos ovos e de acordo com o level do personagem.");
                                 cm.dispose();
                        }
		} if(cm.getPlayer().getMapId()== 100000000){
			if (status==0) {
				cm.sendNext("Voc� gostaria de participar da Miss�o do Rico Dourado?");				
			} else if (status == 1){
                                if(cm.getPlayer().getLevel() > 9) {
                                    cm.getPlayer().saveLocation(SavedLocationType.RICHIE);
                                    cm.warp(390009999, 0);
                                    cm.dispose();
                                } else {
                                    cm.sendOk("Voc� precisa ter no minino lv. 10.");
                                }
			}
		} 
	}
}	