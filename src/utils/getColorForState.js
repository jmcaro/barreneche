export const getColorForState = (estado) => {
    switch (estado) {
        case "Pendiente de revisión":
            return "badge badge-warning";
          case "En proceso":
            return "badge badge-info";
          case "Esperando información adicional":
            return "badge badge-warning";
          case "En revisión":
            return "badge badge-primary";
          case "Resuelta":
            return "badge badge-success";
          case "Cerrada":
            return "badge badge-secondary";
          case "Rechazada":
            return "badge badge-error";
          case "Derivada":
            return "badge badge-accent";
          default:
            return "badge badge-secondary";
    }
  };