function start() {
    if(cm.haveItem(4031045)){
        if (cm.getEventNotScriptOpen("Trens"))
            cm.sendYesNo("Parece que est� cheio de lugares vazios para esta viagem. Por favor, tenha seu bilhete em m�os para embarcar. O trajeto ser� longo, mas chegar� bem a seu destino. O que voc� acha? Quer embarcar neste?");
        else{
            cm.sendOk("Sinto muito, mas o trem j� est� CHEIO. N�o podemos aceitar mais nenhum passageiro. Por favor, embarque no pr�ximo.");
            cm.dispose();
        }
    }else{
        cm.sendOk("Ah, n�o... N�o creio que tenha seu bilhete consigo. N�o pode embarcar sem ele. Por favor, compre o bilhete no balc�o de bilhetes.");
        cm.dispose();
    }
}
function action(mode, type, selection) {
   if (mode <= 0) {
	cm.sendOk("Tudo bem, quando decidir falo comigo novamente!");
        cm.dispose();
	return;
    } 
    cm.gainItem(4031045, -1);
    cm.warp(220000111, 0);
    cm.dispose();
}