// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {

  // console.log("hola");
  console.log(req.host);
  
  // if (req.method == "GET") {

  // }
  res.status(200).json({ name: 'John Doe' })
}
