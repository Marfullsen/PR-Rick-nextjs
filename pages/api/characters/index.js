// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const API_URL = "https://rickandmortyapi.com/api/character";

export default function handler(req, res) {

  // console.log("hola");
  // console.log(req);
  
  if (req.method == "GET") {
    
  }

  if (req.method == "POST") {

  }

  if (req.method == "PUT") {

  }


  // console.log(res);

    fetch(API_URL)
      .then(res => res.json())
      .then( (data) => {
        // const results = data.results;
        res.status(200).json({ data })
      }).catch( (error) => {
        res.status(404).json({ error: "error" })
      })
  
}
