/*
 *  Cliff - Happy Ville NPC
 */
var status = -1;
function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status > 0) {
            status--;
        } else {
            cm.dispose();
            return;
        }
    }
    if (status == 0) {
        cm.sendNext("Ol� #e#h ##n, eu sou Cliff o auxiliar do #e#rNoel#n#k.\r\nEstou precisando de sua ajuda para #bcoletar#k alguns itens especiais, para que possamos fazer um natal bem legal, pode me ajudar a encontra-los? Tudo bem, os itens poder�o ser encontrados em todo mundo Maple, basta ter garra e voc� ir� conseguir. Os itens que preciso s�o:\r\n\r\n 1.000 (#ePe�as#n) - Part�culas de Neve #v4032176#\r\n 200 (#ePe�as#n) - Natal MapleLeaf #v4000314#.\r\n\r\nSe voc� j� #epossui#n estes items, clique em continuar, caso n�o tenha, volte novamente mais tarde.");
    } else if (status == 1) {
        cm.sendSimple("Os pr�mios dados para quem me trazer os itens pedidos:\r\n\r\nCadeira de Gelo - (1)\r\n\r\nVoc� tem os items requiridos?\r\n#L0#Sim#l\r\n#L1#N�o#l");
    } else if(selection == 0) {
        if(cm.haveItem(4032176, 1000) && cm.haveItem(4000314, 200)) {
            cm.gainItem(4032176, -1000); // particula
            cm.gainItem(4000314, -200)
            cm.gainItem(3010045, 1);
            cm.sendOk("Wooow, parab�ns #e#h ##n, voc� conseguiu sua Cadeira de Gelo, boas festas!");
            cm.dispose();
        } else {
        cm.sendOk("Que pena, voc� ainda nao tem os items suficientes para este tipo de troca.");
        cm.dispose();
    }
  } else if(selection == 1) {
      cm.dispose();
  } 
}
