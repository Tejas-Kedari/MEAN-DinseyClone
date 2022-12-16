const db = require('../databaseConnection');
const app = require('../app');

app.get('/', (req, res) => {
    db.query('select * from movies', (err, result) => {
        if (err) res.status(500).send({
            message: 'Something went wrong!',
            data: err,
        });
        else {
            if (result.length > 0) {
                res.status(200).send({
                    message: 'Data Available',
                    data: result,
                });
            }
            else {
                res.status(200).send({
                    message: 'Data not Available',
                });
            }
        }
    });
});

app.get('/:id', (req, res) => {
    let ids = req.params.id;
    db.query(`select * from movies where movieId = ${ids}`, (err, result) => {
        if (err) res.status(500).send({
            message: 'Something went wrong!',
            data: err,
        });
        else {
            if (result.length > 0) {
                res.status(200).send({
                    message: 'Single Data Available',
                    data: result,
                });
            }
            else {
                res.status(200).send({
                    message: 'Data is not Available',
                })
            }
        }
    });
});