const basicAuth = (req, res, next) => {
    const authHeader = req.headers.authorization
    const  identifiedSTR= "admin@gmail.com:qwerty@77QWERT"
  
    /*const b64a =  btoa.from(identifiedSTR)//encodes
    const b64 =  btoa.from(identifiedSTR)
    console.log(b64);
    res.send(b64)
    const authorization = "Basic " */
    
  
    const token = authorization.split(" ")[1]

    const [email, password] = atob(token).split(":")

    //const authHeader = req.headers.authorization

    if (email === "admin@gmail.com" && password === "qwerty@77QWERT") {
        next();

    } else {

        res.status(400).send('Non Autorisé !')
    }

} 

module.exports = basicAuth