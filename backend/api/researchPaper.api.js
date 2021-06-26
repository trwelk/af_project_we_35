const uuid = require('uuid');
const researchPaperSchema = require('../models/researchPaper.model')


/*Inserts a new resaerchPaper entity into the database and returns the object if successfull : else returns the error 
  Catch this error from where it's called and throw an error*/
  const addResearchPaper = async obj => {
    return new Promise((resolve, reject) => {
        var newResearchPaper = new researchPaperSchema({
            id: uuid.v4(),
            paperUploader: obj.paperUploader,
            paperTopic: obj.paperTopic,
            paperLink: obj.paperLink
        });

        newResearchPaper.save()
            .then(response => {
                resolve(response)
            })
            .catch(error => {
                reject(error)
            })
    })
}


/*Fetches all the resaerchPapers and returns a json array of resaerchPapers.model type objects  : else returns the error 
  Catch this error from where it's called and  throw an error*/
async function getResearchPapers() {
    return new Promise((resolve, reject) => {
        researchPaperSchema.find(null, function (err, response) {
            if (err)
                reject(err)
            else {
                resolve(response);
            }
        });
    })

}


/*Fetches all the resaerchPapers for a given category and returns a json array of resaerchPapers.model type objects  : else returns the error 
  Catch this error from where it's called and  throw an error*/
async function getResearchPapersByCategory(category) {
    const query = { categories: category }
    return new Promise((resolve, reject) => {
        researchPaperSchema.find(query,function(err, response){
            if(err)
                reject(err)
            else{
                resolve(response)
            }
         });
    })

}

async function deleteResearchPaper(resaerchPaperId) {
    return new Promise((resolve, reject) => {
        var query = { id: resaerchPaperId };
        researchPaperSchema.deleteOne(query,function(err, response) {
            if (err) {
                reject(err)
            }
            resolve(response)
          });
    })
   
}

module.exports = { addResearchPaper, getResearchPapersByCategory, getResearchPapers ,deleteResearchPaper };