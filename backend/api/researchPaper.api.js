const uuid = require('uuid');
const researchPaperSchema = require('../models/researchPaper.model')
const mailApi = require('../api/mail.api');


/*Inserts a new resaerchPaper entity into the database and returns the object if successfull : else returns the error 
  Catch this error from where it's called and throw an error*/
  const addResearchPaper = async obj => {
    return new Promise((resolve, reject) => {
        var newResearchPaper = new researchPaperSchema({
            id: uuid.v4(),
            paperUploader: obj.paperUploader,
            paperTopic: obj.paperTopic,
            paperLink: obj.paperLink,
            state: "requested",
            email: obj.email,
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


async function updateResearch(research) {
    var filter = {id: research.id};
    console.log(research)
    const approvedMessage = "Dear Applicant The research paper has been approved"
    const declinedMessage = "Dear Applicant We are sorry to inform you that your research paper has been declined"
    if(research.state == 'approved'){
        mailApi.sendMail("REQUEST APPROVED",approvedMessage,research.email)
    }else if (research.state == 'declined'){
        mailApi.sendMail("REQUEST DECLINED",declinedMessage,research.email)
    }
    let updatedResearch = await researchPaperSchema.findOneAndReplace(filter,research, {
        new: true
    });
    return updatedResearch;
}
module.exports = {updateResearch, addResearchPaper, getResearchPapersByCategory, getResearchPapers ,deleteResearchPaper };