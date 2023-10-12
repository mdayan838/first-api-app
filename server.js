import  express  from "express";
import axios from "axios";
const app = express();
const port = 3000; // You can choose any port you like

app.use(express.static('public'));

// Define a route that responds with "Hello, World!" when accessed in a web browser.
app.get('/',  async(req, res) => {
    try{
    const result= await axios.get(' https://secrets-api.appbrewery.com/random');
    res.render("index.ejs",{secrets:result.data.secret, user:result.data.username})}
    catch(error){
        console.log(error.response.data);
res.status(400)
    }
 
});

// Start the server and listen on the specified port.
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
