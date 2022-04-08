const express = require('express');
const routes = express.Router();

//MOSTRAR DATOS
routes.get('/', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query('SELECT * FROM books', (err, rows) => {
            if (err) return res.send(err)

            res.json(rows)
        })
    })
})

//CARGAR DATOS
routes.post('/', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query('INSERT INTO books SET ?', [req.body], (err) => {
            if (err) return res.send(err)

            res.send('Libros registrados con exito')
        })
    })
})

//ACTUALIZAR DATOS
routes.put('/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query('UPDATE books SET ? WHERE id = ?', [req.body, req.params.id], (err) => {
            if (err) return res.send(err)

            res.send('Libro actualizado con exito')
        })
    })
})

//ELIMINAR DATOS
routes.delete('/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query('DELETE FROM books WHERE ID = ?', [req.params.id], (err) => {
            if (err) return res.send(err)

            res.send('Libro eliminado con exito')
        })
    })
})



module.exports = routes