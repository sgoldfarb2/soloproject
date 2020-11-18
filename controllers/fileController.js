const fs = require('fs')
const path = require('path')

const fileController = {}

fileController.getDogs = (req, res, next) => {
    
    const results = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../db.json')))

    if(!results) {
        return next({
            log: 'fileController.getDogs: ERROR: Error getting dog data from db.json file',
            message: {
                err: 'Error occurred in fileController.getDogs. Check server logs for more details'
            }
        })
    }
    // console.log(results.items)
    res.locals.dogs = results
    return next()
}

fileController.newDogEntry = (req, res, next) => {
    // console.log(req.body)
    const newDog = {name: req.body.name, age: req.body.age, breed: req.body.age, size: req.body.size, likes: req.body.likes, dislikes: req.body.dislikes}
    const results = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../db.json')))
    // console.log('results', results)
    // console.log('results.items', results.items)
    console.log('newDog', newDog)
    
    results.items.push(newDog)

    fs.writeFileSync(path.resolve(__dirname, '../db.json'), JSON.stringify(results), (err)=> {
        if(err) {
            console.log(err)
        }
    })
  
    return next()


}

fileController.deleteDog = (req, res, next) => {
    
}


module.exports = fileController;