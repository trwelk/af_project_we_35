import { validateResearchPaper } from '../../../redux/actions/ResearchPaper.action';

test('Validating for error message',() => {
    let testObj = { paperTopic: "", paperLink: "", paperUploader: "", email: ""}
    expect(validateResearchPaper(testObj)).toBe("Topic Cannot be empty");
})

test('Validating for success scenario',() => {
    let testObj = { paperTopic: "This is the paper topic", paperLink: "https://firebase.com", paperUploader: "Ryan", email: "ryan@gmail.com"}
    expect(validateResearchPaper(testObj)).toBe(null);
})
