const currentDate = new Date();

const authentification = (req, res, next) => {
    var data =  currentDate.getDay()
    console.log(data);

    if(data != 1){
        res.status(400).send('Error')
    }else{
        next()
    } 
}

module.exports  = authentification