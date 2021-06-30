const uuid = require('uuid');
newsMongo = require('../models/news.model')

const addNews = async obj => {
    return new Promise((resolve, reject) => {
        var newNews = newsMongo({
            id: uuid.v4(),
            name: obj.name,
            description: obj.description,
            image: obj.image,
            date: obj.date
        });

        newNews.save()
            .then(response => {
                resolve(response)
            })
            .catch(error => {
                reject(error)
            })
    })
}


async function getNews() {
    return new Promise((resolve, reject) => {
       newsMongo.find(null, function (err, response) {
            if (err)
                reject(err)
            else {
                resolve(response);
            }
        });
    })

}

async function getNewsById(news) {
    filter = { id:news }
    return new Promise((resolve, reject) => {
       newsMongo.findOne(filter, function (err, response) {
            if (err)
                reject(err);
            else {
                resolve(response);
            }
        });
    })
}


async function deleteNews(newsId) {
    var query = { id: newsId };
    let news = await newsMongo.deleteOne(query,function(err, obj) {
        if (err) {
            console.log("Error deleting")
        }
        console.log("1 document deleted");
      });
     return news;
}

async function updateNews(news) {
    var filter = {'id': news.id};
  
    let updatednews = await newsMongo.updateOne(filter, news, {new: true,},function(err, doc) {
        if (err) 
            console.log(err)
    });
     return news;
}



module.exports = { addNews, getNewsById, getNews,deleteNews,updateNews };