import Handlebars from "handlebars";
import { getColorForState } from "../utils/getColorForState.js";



Handlebars.registerHelper('getColorForState', function (estado) {
    return getColorForState(estado);
});


// Helper para formatear el número de ticket a 4 dígitos 0000
Handlebars.registerHelper("formatTicketNumber", function (ticketNumber) {
    return ticketNumber.toString().padStart(4, "0");
});