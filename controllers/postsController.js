//DataBase connection import:
const connection = require('../data/postsDB.js');

//Index (get)
const index = (req, res) => {

   const sql = 'SELECT * FROM posts';

   connection.query(sql, (err, results) => {
      if (err) return res.status(500).json({ error: 'Richiesta al db fallita' });
      res.json(results)
   })

}

//Show (get)
const show = (req, res) => {
   const id = req.params.id;
   res.send(`Visualizza il post ${id} del blog`)
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
   res.send(`Ellimino il post ${id} del blog`)
}

module.exports = {
   index,
   show,
   store,
   update,
   modify,
   destroy
}