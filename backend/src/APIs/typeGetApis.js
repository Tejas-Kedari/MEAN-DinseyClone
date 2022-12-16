const db = require('../databaseConnection');
const app = require('../app');

apiArr = ['recommend', 'new', 'trending', 'original']

apiArr.forEach(element => {
    app.get(`/type/${element}`, (req, res) => {
        db.query(`select * from movies where type = '${element}'`, (err, result) => {
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
});