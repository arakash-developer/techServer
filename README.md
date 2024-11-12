# render-json-server

**Step 1** -   Create git repository

**Step 2** - Clone it on your device

**Step 3** - Add package.json by using this command `npm init -y`

**Step 4** - Install some dependency by using this command `npm i json-server cors json-serve` and add ` "start": "node index.js" ` in script 

**Step 6** - Create index.js file copy the code from my GitHub repository

```javaScript
const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080; //  chose port from here like 8080, 3001

server.use(middlewares);
server.use(router);

server.listen(port);

```

**Step 7** - Add db.json and add .gitignore file




['5AyMdTiXKAvYDOjT', 'TyFfTxYWm3TgBPFv', 'AaHpqb9l4W3C4cwE', '9ddLoLs1CGMMKvvv', 'WmJhbSG9hwFBYitU', 'lVNw5OJIyWG6AFg0', '01E1yk6HEIQCLvhd', 'BbXGT22dMWCPZyrl', 'LnGR89wDBvmElKPR', 'Fh7L2oGDjDFjQKXh', 'ZdU4pA7j67vGYNzu', 'NMt3WbdLZodxcsN4', '4I6lmrbKtZIfTG8d', 'gt2H8wqbqDYFoowC', 'LD7yE9h3H51TniJS', 'X6792UNVUDKtby0X', 'izzgqxYNIJv0AZQ0', 'db6FrGMHemlL0w1F', 'JRhJ98WMteyoyqZD', '0bRk5oXEZUgihoYG', 'AsveEQVZtuKqudJx', 'UuvYgJPTX9O7XZG7', '6RDUss7dX6IY6AIL', 'XvBYIMBMXw1lLmrO', 'DoUP02C1OdMIqz5K', 'Gvi8fOasJNFEem6e', 'xv1woRNgHQtfOzk4', '9N9pjhOCEy3c8gr6', 'xZW9mhIJstlp9mQO', 'RdrNRlBWUGNEK6q6', '3IqKlV0iqHG1fKF3', 'l2IvJOMpBZM58dlg', 'KmVehvhTgxHP1yh1', 'nBhC12uVDldzoOYe', 'bKxTIFrrI488tvVs', '1T8t4BJezcO7RahJ', 'DQw4TI8n9khnRdg4', '3pvaNpC5kTf0SFP6', 'guEgktNgSrvWXPUl', '0rnDK6sbMxjo3tXD', 'bIIYxF7KytkVE0qC', 'UGS1YlPOqygRCh3v', 'CffYuSkzs1XexIgO', 'dBbgUjvpKBSJxZEa', '5tRKdIntwo3yhtxh', 'Nro9NeH8DBDwdHfV', 'JQGbIi9g3klvHVHH', '72p1sADiS8CmtqW3', 'V0Uu4j2MRCkWUJiJ', 'olfcjIZgE6qOsClS', 'np4veu0aABhzxJ9V', 'XbbDNr770MtqMOiI', 'APP3mDSAG5MMouyg', '3Dn01B6hFxTIoYB2', 'X8dMvBg5WsDltf4U', 'wfiSemiVcmHN9iCc', 'g4TQFuOQzH8Imki5', 'muMSLJJsUKvnBAW7', 'jqW0oS3AgtwswKT1', 'rfGMhecQlHtAOcIN', '3pG2C1TcEeUYtGPo', 'JV7LvW7Puvvsmucr', 'ZSviEiOjzsl3uyiT', 'TfEvhIiC5ge9n7At', 'Z0t4daPZ4fcKwnoM', 'n3wfNnjuVPHCpJzb', 'jX4v3iditBPng3VR', 's6jzbOFdBTwqQhL9', 'KH3C7iZlepsEFO25', 'GHhyU6hY5oW9o8ri', 'rjCrUJeaOI2VXzJc', 'gQgJFq989K9Uv2gM', '1st3ftMo8dKDIZqO', 'bSbZsr6PB2qDFWnb', 'vvBwxqiWFYq8hg98', 'uryWZ0V5eif4mU5W', '1yDYVGueYt5FWIQa', 'T5EAfBBCgrVuRAjS', 'xBXXy7kpXChnL4TA', 'ypFOODTZ4H8mbeR6', 'kM6GvLo5BrWI68WI', 'HI8PGVpTQdOUVTPk', 'afBtgpwROCeinJlK', 'Ssc4IbEfRrknDvOC', '6SprQLzPzkzGl8NA', '2rcJfCVckPX2n3Rp', 'CqAnDTKIyAMkOEQN', '33SZqNYn3MRAsmLc', '0d0QwWiWaiYLCj4T', 'KP7GpTaLZbJhHAj1', 'n7YHKVQsAQPZpMz1', 'DN8SKdc0jPEWMRgG', 'TVOuxnlcJL0HZefA', 'YloXoZ6BzTvfeWPo', 'CqLfmGVflffVAWfA', 'eVxQb8RDXuvf18Jl', '45YNVVMIa76K3Wuy', 'MstTqEGOMovKTi8Z', '0OZFpXtR7WvIy62b', 'UlPyaW73LBGoakVM']
