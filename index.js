let express = require( 'express' );
let app = express();
let server = require( 'http' ).Server( app );
let io = require( 'socket.io' )( server );
let stream = require( './stream' );
let path = require( 'path' );

//Define the folder which contains the CSS and JS for the fontend
app.use(express.static('public'))

//Define a route 
app.get("/", function(req, res){
	res.render("index.ejs");
});

//Implementing Socket.io
io.of( 'stream' ).on( 'connection', stream );

// START THE SERVER 
const port = process.env.PORT || 3000
server.listen(port, () => {
  console.log(`Express server listening on port ${port}`)
})