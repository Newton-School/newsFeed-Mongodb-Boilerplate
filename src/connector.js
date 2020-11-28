const mongoURI = "mongodb://localhost:27017" + "/newsFeeds"

let mongoose = require('mongoose');
const { newsArticleSchema } = require('./schema')

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log("connection established with mongodb server online"); })
    .catch(err => {
        console.log("error while connection", err)
    });




newsArticleModel = mongoose.model('dailynews', newsArticleSchema)


exports.newsArticleModel = newsArticleModel;
