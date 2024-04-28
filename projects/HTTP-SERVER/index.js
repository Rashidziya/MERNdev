const express=require("express");

const app = express();
const port=3000;
app.use(express.json());
function sumofNumber(n){
  let sum=0;
  for(let i=1;i<=n;i++){
    sum+=i;
  }
  return sum;
}

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/about',function(req,res){
  const n = req.query.n;
  const ans=sumofNumber(n);
  res.send("The sum of N natural number is : "+ans.toString());
})

app.listen(port,function(){
  console.log('Example app listenig on port: ${port}');
});


// homework .. create a todo app that lets users todos on the server
// tru