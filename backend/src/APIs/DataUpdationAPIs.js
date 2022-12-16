const db = require('../databaseConnection');
const app = require('../app');

app.post('/', (req, res) => {
    let backgroundImg = req.body.backgroundImg;
    let cardImg = req.body.cardImg;
    let description = req.body.description;
    let subTitle = req.body.subTitle;
    let title = req.body.title;
    let titleImg = req.body.titleImg;
    let type = req.body.type;

    let qry = `
    insert into movies
    (backgroundImg, cardImg, description, subTitle, title, titleImg, type) 
    values 
    (?, ?, ?, ?, ?, ?, ?)
    `;

    let parass = [backgroundImg, cardImg, description, subTitle, title, titleImg, type];

    db.query(qry, parass, (err, result) => {
        if (err) res.status(500).send({
            message: 'some error in database',
            data: err,
        });
        res.status(200).send({
            message: 'data inserted successfully...',
            data: result,
        });
    });
});





app.put('/:id', (req, res)=>{
    let uid = req.params.id;

    let backgroundImg = req.body.backgroundImg;
    let cardImg = req.body.cardImg;
    let description = req.body.description;
    let subTitle = req.body.subTitle;
    let title = req.body.title;
    let titleImg = req.body.titleImg;
    let type = req.body.type;


    let qry = `
    update movies
    set backgroundImg = '${backgroundImg}', 
    cardImg = '${cardImg}', description = '${description}', subTitle = '${subTitle}', 
    title = '${title}', titleImg = '${titleImg}', type = '${type}' where movieId = '${uid}'
    `;

    db.query(qry, (err, result)=>{
        if(err) res.status(500).send({
            message: 'Something went wrong!',
            data: err,
        });
        else{
            res.send({
                message: 'data updated successfully...',
                data: result,
            });
        }
    });
});


app.delete('/:id', (req, res) => {
    let uid = req.params.id;

    db.query(`delete from movies where movieId = '${uid}'`, (err, result) => {
        if (err) res.status(500).send({
            message: 'Something went wrong!',
            data: err,
        });
        else {
            if (result.affectedRows > 0) {
                res.status(200).send({
                    message: 'data deleted successfully...',
                    data: result,
                });
            }
            else {
                res.status(200).send({
                    message: 'data not deleted... Invalid movie id...',
                })
            }
        }
    });
});