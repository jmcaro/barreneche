import Handlebars from "handlebars";
import { getColorForState } from "../utils/getColorForState.js";



Handlebars.registerHelper('getColorForState', function (estado) {
    return getColorForState(estado);
});


// Helper para formatear el número de ticket a 4 dígitos 0000
Handlebars.registerHelper("formatTicketNumber", function (ticketNumber) {
    return ticketNumber.toString().padStart(4, "0");
});

Handlebars.registerHelper('eq', function (v1, v2, options) {
    if (v1 === v2) {
        return options.fn(this);
    }
    return options.inverse(this);
});

Handlebars.registerHelper("index", function(array, index) {
    return array && array.length > index ? array[index] : null;
});

