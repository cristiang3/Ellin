/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc> 
					   Matthias Butz <matze@odinms.de>
					   Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation version 3 as published by
    the Free Software Foundation. You may not use, modify or distribute
    this program under any other version of the GNU Affero General Public
    License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.



 Rini (Orbis Boat Loader) 2012001
*/

function start() {
    if(cm.haveItem(4031047)){
        if (cm.getEventNotScriptOpen("Barcos"))
            cm.sendYesNo("Parece que est� cheio de lugares vazios para esta viagem. Por favor, tenha seu bilhete em m�os para embarcar. O trajeto ser� longo, mas chegar� bem a seu destino. O que voc� acha? Quer embarcar neste?");
        else{
            cm.sendOk("Sinto muito, mas barco j� est� CHEIO. N�o podemos aceitar mais nenhum passageiro. Por favor, embarque no pr�ximo.");
            cm.dispose();
        }
    } else {
        cm.sendOk("Ah, n�o... N�o creio que tenha seu bilhete consigo. N�o pode embarcar sem ele. Por favor, compre o bilhete no balc�o de bilhetes.");
        cm.dispose();
    }
}
function action(mode, type, selection) {
    cm.gainItem(4031047, -1);
    cm.warp(200000112, 0);
    cm.dispose();
}