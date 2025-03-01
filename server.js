import express from 'express'; // Ensure Express is imported
const app = express();

app.get('/',(req,res) =>{
    res.send("Your server is working");
})

app.get('/jokes',(req,res) => {
    const jokes = [
        {
            id : 1,
            title : ' A Joke',
            content : 'U are a joke'
        },
        {
            id : 2,
            title : ' Another  Joke',
            content : 'U are a joke'
        },{
            id : 3,
            title : ' 3rd Joke',
            content : 'U are a joke'
        },
        {
            id : 4,
            title : '4th Joke',
            content : 'Are you willing to listen a joke'
        },
         {
            id : 5,
            title : '5th Joke',
            content : 'Let us listen a  joke '
         }
    ];
    res.send(jokes);
});

const port = process.env.PORT || 3000;  // Define port properly

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);  // Make sure backticks (`) are used
}); 