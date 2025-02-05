//express import:
const express = require('express');
//express initialization:
const app = express();
//server port:
const port = 3000;

//middlewares import:
const notFound = require('./middlewares/notFound.js');
const errorsHandler = require('./middlewares/errorsHandler.js');

//postsRouter import:
const postsRouter = require('./routers/postsRouter.js');

//===========================================================

//server root:
app.get('/', (req, res) => {
   res.send('Server del blog')
});


//posts root:
app.use('/posts', postsRouter);

//===========================================================

//use errors handler middleware:
app.use(errorsHandler);
//use error 404 handler middleware:
app.use(notFound);

//express server listen:
app.listen(port, () => {
   console.log(`Sono in ascolto alla porta ${port}`)
});