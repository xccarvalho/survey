const user = {
  id: "1",
  name: "Caroll Carvalho",
  email: "xccaroll@survey.com",
  password: "123",
};
const usersList = [user];

const survey = {
  id: "2",
  title: "Second survey",
  description: "Second description",
  questions: [
    {
      id: "1",
      question: "Question number one?",
      options: [
        {
          id: "1",
          option: "Yes",
        },
        {
          id: "2",
          option: "No",
        },
      ],
    },
    {
      id: "2",
      question: "Question number two?",
      options: [
        {
          id: "2",
          option: "Yes",
        },
        {
          id: "2",
          option: "No",
        },
        {
          id: "3",
          option: "Maybe",
        },
      ],
    },
  ],
};
const surveysList = [survey];

export const mocks = {
  user,
  usersList,
  survey,
  surveysList,
};
