//
// Command: help
//
module.exports = function (controller) {

    controller.hears(["help", "who"], 'direct_message,direct_mention', function (bot, message) {
        var text = "Here are my skills:";
        text += "\n- " + bot.enrichCommand(message, ".commons") + ": shows metadata about myself";
        text += "\n- " + bot.enrichCommand(message, "help") + ": preguntame que puedo hacer";
        text += "\n- " + bot.enrichCommand(message, "espacio") + ": clonar espacio";
        text += "\n- " + bot.enrichCommand(message, "add") + ": añadir usuario al espacio";
        bot.reply(message, text);
    });
}
