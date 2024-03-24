const user = {
  id: "1",
  name: "Caroll Carvalho",
  email: "xccaroll@survey.com",
  password: "123",
};

const questionOptions = [
  {
    id: "1",
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
];
const surveyQuestions = [
  {
    id: "1",
    question: "Question number one?",
    questionOptions,
  },
  {
    id: "2",
    question: "Question number two?",
    questionOptions,
  },
  {
    id: "3",
    question: "Question number three?",
    questionOptions,
  },
  {
    id: "4",
    question: "Question number four?",
    questionOptions,
  },
];
const survey = {
  id: "1",
  title: "Survey alone",
  description:
    "Alone Donec sagittis erat ligula, quis fringilla erat placerat a.",
  isClosed: false,
  surveyQuestions,
};

const surveysCardArr = [
  {
    id: "1",
    title: "First",
    description:
      "Fisrt Aenean consequat sit amet sem sed vestibulum. Phasellus maximus ante suscipit nibh pretium, nec varius magna volutpat. Donec sagittis erat ligula, quis fringilla erat placerat a. Praesent non nulla nec felis aliquam eleifend. Fusce eu viverra justo. Aliquam consectetur volutpat pharetra. Pellentesque ligula risus, eleifend in varius vel, auctor quis ipsum.",
    isClosed: false,
  },
  {
    id: "2",
    title: "Second",
    description:
      "Second Donec sagittis erat ligula, quis fringilla erat placerat a.",
    isClosed: false,
  },
  {
    id: "3",
    title: "Third",
    description:
      "Third Aenean consequat sit amet sem sed vestibulum. Phasellus maximus ante suscipit nibh pretium, nec varius magna volutpat. Donec sagittis erat ligula, quis fringilla erat placerat a. ",
    isClosed: false,
  },
  {
    id: "4",
    title: "Fourth",
    description:
      "Fourth Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ante risus, finibus ac tellus placerat, tincidunt eleifend lectus. Nulla ut placerat urna. Nam vestibulum odio id erat semper, nec finibus orci sagittis. Aliquam aliquet, est in blandit elementum, ipsum ligula lacinia nisl, et mollis urna tellus non nisi. Nulla ut luctus tellus. Phasellus id nibh ultricies, ornare lacus nec, gravida nisi. Vivamus tristique gravida augue non blandit. Nulla eu lobortis erat. Donec neque dui, accumsan vitae varius ac, suscipit ac nunc. Sed tempus dui vitae leo semper lobortis. Nam rhoncus suscipit sollicitudin. Aenean id sodales massa. Donec mattis volutpat enim, eget vulputate dui porttitor in. Mauris mattis nunc eget consectetur tincidunt. Sed quam mi, sodales ac pharetra a, pharetra nec mi. Suspendisse fringilla neque et urna dapibus lacinia.",
    isClosed: true,
  },
];

// const surveys = Array.from({ length: 13 }).map((_survey, index) => survey);

export const mocks = {
  user,
  questionOptions,
  surveyQuestions,
  survey,
  // surveys,
  surveysCardArr,
};
