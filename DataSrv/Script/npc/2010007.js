/* NPC: Heracle
   Function: Guild Creation/Expasion/Disband (GMS-Like)
   Map: 200000301
   Author: Shedder
*/
   
var status = 0;
var sel;

function start() {
    partymembers = cm.getPartyMembers();
    if (cm.getPlayer().getGuildId() > 0) {
        cm.sendSimple( "Ent�o, como posso ajudar?\r\n#b#L0#Eu quero aumentar meu cl�#l\r\n#L1#Eu quero desfazer meu cl�#l" ); 
    } else {
        cm.sendNext( "Ei... Por acaso voc� se interessa por CL�s?"); 
    }
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 1 && sel == 1) {
                cm.sendNext( "Bem pensado. Eu n�o gostaria de desfazer meu cl� que j� est� t�o forte..." ); 
                cm.dispose();
                return;
        }
        if (mode == 0 && status == 0 || mode == 0 && status == 2 && sel == 2  || mode == 0 && status == 2 && sel == 0) {
                cm.dispose();
                return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 1) {
            if (cm.getPlayer().getGuildId() > 0) {
                sel = selection;
                if (selection == 0) {
                    if (cm.getPlayer().getGuild().getCapacity() > 95) {
                        cm.sendNext( "Seu cl� parece ter crescido um pouco. Eu n�o posso mais aumentar seu cl�." );
                        cm.dispose();		
                    } else {
                        if (cm.getPlayer().getGuildId() < 1 || cm.getPlayer().getGuildRank() != 1) {
                            cm.sendNext( "Ei, voc� n�o � o Mestre do Cl�!! Esta decis�o s� pode ser tomada pelo Mestre do Cl�." ); 
                            cm.dispose();
                        } else {
                            cm.sendNext( "Voc� est� aqui para aumentar seu cl�? Seu cl� deve ter crescido um pouco~ Para aumentar seu cl�, ele precisa ser recadastrado no nosso Quartel-General de Cl�s e isto vai exigir um pagamento pelo servi�o..." ); 
                        }
                    }
                } else if (selection == 1) {
                    if (cm.getPlayer().getGuildId() < 1 || cm.getPlayer().getGuildRank() != 1) {
                        cm.sendNext( "Ei, voc� n�o � o Mestre do Cl�!! Esta decis�o s� pode ser tomada pelo Mestre do Cl�." ); 
                    } else {
                        cm.sendYesNo( "Tem certeza de que deseja desfazer seu cl�? S�rio... lembre-se, se voc� desfizer o cl�, ele ser� eliminado para sempre. Ah, e mais uma coisa. Se voc� quiser desfazer seu cl�, vai precisar pagar 200.000 mesos pelo custo do servi�o. Ainda quer fazer isto?" ); 
                    }
                }
            } else {
                cm.sendSimple( "#b#L0#O que � um cl�?#l\r\n#L1#O que eu fa�o para criar um cl�??#l\r\n#L2# Eu quero criar um cl�#l" ); 
            }
        } else if (status == 2) {
            if (cm.getPlayer().getGuildId() > 0) {
                if (cm.getPlayer().getGuildId() > 0 && cm.getPlayer().getGuildRank() == 1) {
                    if (sel == 0) {
                        cm.sendYesNo("O custo do servi�o ser� apenas #r" + cm.getPlayer().getGuild().getIncreaseGuildCost(cm.getPlayer().getGuild().getCapacity()) + " mesos#k Voc� gostaria de aumentar seu cl�?");
                    } else if (sel == 1) {
                        if (cm.getPlayer().getMeso() < 200000) {
                            cm.sendNext( "Ei, voc� n�o tem o dinheiro para o servi�o... tem certeza de que tem dinheiro suficiente a�?" ); 
                            cm.dispose();
                        } else {
                            cm.getPlayer().disbandGuild();
                            cm.gainMeso(-200000);
                            cm.dispose();
                        }
                    }					
                } else {
                    cm.sendNext( "Ei, voc� n�o � o Mestre do Cl�!! Esta decis�o s� pode ser tomada pelo Mestre do Cl�." ); 
                    cm.dispose();
                }
            } else {
                sel = selection;
                if (selection == 0) { 
                    cm.sendNext( "Um cl� �... bem, voc� pode pensar nele como um pequeno grupo cheio de pessoas com interesses e objetivos parecidos. Al�m disto, ele ser� cadastrado no nosso Quartel-General de Cl�s para ser validado." ); 
                    cm.dispose();
                } else if (selection == 1) {
                    cm.sendNext( "Para fazer seu pr�prio cl�, voc� vai precisar estar, pelo menos, no n�vel 10. Voc� tamb�m vai precisar ter pelo menos 1.500.000 mesos com voc�. Este � o pre�o para registrar seu cl�." ); 
                } else if (selection == 2) {
                    cm.sendYesNo( "Certo, agora, voc� quer criar um cl�?" ); 
                }
            }
        } else if (status == 3) {
            if (cm.getPlayer().getGuildId() > 0) {
                if (sel == 0) {
                    cm.getPlayer().increaseGuildCapacity();
                    cm.dispose();
                }
            } else {
                if (sel == 1) {
                    cm.sendNext( "Para fazer um cl�, voc� vai precisar de 6 pessoas no total. Esses 6 devem estar no mesmo grupo e o l�der deve vir falar comigo. Fique ciente tamb�m de que o l�der do grupo tamb�m se torna o Mestre do Cl�. Uma vez designado o Mestre do Cl�, a posi��o permanece a mesma at� que o Cl� seja desfeito." ); 
                } else if (sel == 2) {
                    if (cm.getPlayer().getLevel() < 10) {
                        cm.sendNext( "Humm... Eu n�o acho que voc� possua as qualifica��es para ser um Mestre do Cl�. Por favor, treine mais para se tornar Mestre do Cl�." ); 
                    } else if (cm.getPlayer().getParty() == null) {
                        cm.sendNext( "Eu n�o me importo com o qu�o forte voc� acha que seja... Para formar um cl�, voc� precisa estar em um grupo de 6. Crie um grupo e ent�o traga todos os membros aqui se realmente quiser criar um cl�." ); 
                    } else if (!cm.isLeader()) {
                        cm.sendNext( "Voc� n�o � o l�der de um grupo." ); 
                    } else if (partymembers.size() < 6) {
                        cm.sendNext( "Parece que voc� n�o tem membros suficientes no seu grupo ou alguns dos membros n�o est�o presentes. Preciso de todos os 6 membros aqui para cadastrar seu cl�. Se seu grupo n�o consegue coordenar esta simples tarefa, voc� devia pensar duas vezes antes de formar um cl�." ); 
                    } else if (partymembers.get(1).getGuild() != null || partymembers.get(2).getGuild() != null || partymembers.get(3).getGuild() != null || partymembers.get(4).getGuild() != null|| partymembers.get(5).getGuild() != null) {
                        cm.sendNext( "Parece que h� um traidor entre n�s. Algu�m em seu grupo j� faz parte de outro cl�. Para formar um cl�, todos do seu grupo precisam estar sem cl�. Volte quando tiver resolvido o problema com o traidor." ); 
                    } else if (cm.isSendContractAvailable(cm.getPlayer().getParty())) {
                        cm.sendNext( "Por favor, aguarde os membros responderem a solicita��o para enviar novamente!" ); 
                    } else if (cm.getPlayer().getGuildId() <= 0) {
                        cm.getPlayer().genericGuildMessage(1);
                    } else {
                        cm.sendNext( "Desculpe, mas voc� n�o pode criar um cl�." ); 
                    }
                    cm.dispose();
                }
            }
        } else if (status == 4) {
            cm.sendNext( "Uma vez que 6 pessoas estejam reunidas, voc� vai precisar de 1.500.000 mesos. Esse � o pre�o para registrar seu cl�." ); 
        } else if (status == 5) {
            cm.sendNext( "Certo, para registrar seu cl�, traga pessoas aqui~ Voc� n�o pode criar um sem todos os 6.\r\nAh, � claro, os 6 n�o podem fazer parte de outro cl�!"); 
            cm.dispose();
        }
    }
}

