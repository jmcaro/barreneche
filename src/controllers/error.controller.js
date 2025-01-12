export const notFound = (req, res)=>{
    res.status(404).render('errors/404', {
        layout: false,
        title: 'Página no encontrada',
        message: 'Lo sentimos, no pudimos encontrar la pagina que estás buscando',
    });
};

export const internalServerError = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('errors/500', {
      title: 'Error Interno del Servidor',
      message: 'Algo salió mal. Estamos trabajando para solucionarlo.',
    });
  };
  
export const forbidden = (req, res) => {
    res.status(403).render('errors/403', {
      title: 'Acceso Prohibido',
      message: 'No tienes permiso para acceder a esta página.',
    });
  };