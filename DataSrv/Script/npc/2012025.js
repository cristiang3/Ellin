function start() {
    if(cm.haveItem(4031576)){
        if (cm.getEventNotScriptOpen("Genio")) {
            cm.sendYesNo("Parece que est� cheio de lugares vazios para esta viagem. Por favor, tenha seu bilhete em m�os para embarcar. O trajeto ser� longo, mas chegar� bem a seu destino. O que voc� acha? Quer embarcar neste?");
        } else {
            cm.sendOk("Sinto muito, mas o G�nio j� est� CHEIO. N�o podemos aceitar mais nenhum passageiro. Por favor, embarque no pr�ximo.");
            cm.dispose();
        }
    } else {
        cm.sendOk("Ah, n�o... N�o creio que tenha seu bilhete consigo. N�o pode embarcar sem ele. Por favor, compre o bilhete no balc�o de bilhetes.");
        cm.dispose();
    }
}
function action(mode, type, selection) {
    if (mode <= 0) {
	cm.sendOk("Tudo bem, fale comigo quando quiser novamente!");
        cm.dispose();
	return;
    } 
    cm.gainItem(4031576, -1);
    cm.warp(200000152, 0);
    cm.dispose();
}