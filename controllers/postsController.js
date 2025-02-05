//DataBase connection import:
const connection = require('../data/postsDB.js');

//Index (get)
const index = (req, res) => {

   const sql = 'SELECT * FROM posts';

   connection.query(sql, (err, results) => {
      if (err) return res.status(500).json({ error: 'Errore durante il caricamento dei post' });
      res.json(results);
   })

}

//Show (get)
const show = (req, res) => {
   const id = req.params.id;

   const sql = 'SELECT * FROM posts WHERE id = ?';

   connection.query(sql, [id], (err, results) => {
      if (err) return res.status(500).json({ error: 'Errore durante il caricamento del post' });
      if (results.length === 0) return res.status(404).json({ error: 'Post non trovato' });
      res.json(results[0]);
   })
}

//Store (post)
const store = (req, res) => {
   res.send('Aggiungo un post al blog')
}

//Update (put)
const update = (req, res) => {
   const id = req.params.id;
   res.send(`Modifico totalmente il post ${id} del blog`)
}

//Modify (patch)
const modify = (req, res) => {
   const id = req.params.id;
   res.send(`Modifico parzialmente il post ${id} del blog`)
}

//Destroy (delete)
const destroy = (req, res) => {
   const id = req.params.id;

   const sql = 'DELETE FROM posts WHERE id = ?';

   connection.query(sql, [id], (err, results) => {
      if (err) return res.status(204).json({ error: 'Errore durante l\'elliminazione del post' });
      res.sendStatus(204);
   })

}

module.exports = {
   index,
   show,
   store,
   update,
   modify,
   destroy
}