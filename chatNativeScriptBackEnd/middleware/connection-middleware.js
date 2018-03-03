module.exports = pool => (req, res, next) => {

    pool.getConnection((err, connection) => {
        /* passa o erro, quando houver, para o 
        middleware que centraliza o tratamento de erro */
        if(err) return next(err);
        console.log('pool => obteve conexão');
        // adicionou a conexão na requisição
        req.connection = connection;
        // passa a requisição o próximo middleware
        next();
        res.on('finish', () => {
            if(req.connection) req.connection.release();
        });
    });
};