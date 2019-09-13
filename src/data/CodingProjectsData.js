import * as Img from '../assets';

const CodingProjectsData = [
  {
    cover: [Img.ARWorld, Img.ARWorldWeb],
    title: 'AR World',
    tags: ['AR Core', 'Android Studio', 'Kotlin', 'AWS', 'React', 'NodeJS', 'MongoDB'],
    description: 'Android app that aims to make AR more accessible by augmenting static images with their corresponding videos; web app for media upload enabling user customization',
    description2: {
      award: true,
      text: 'PennApps XX Best AR/VR Hack'
    },
    links: {
      github: 'https://github.com/hannahwang12/classwatch-v2',
    }
  },
  {
    cover: [Img.Classwatch],
    title: 'UW ClassWatch',
    tags: ['React', 'TypeScript', 'NodeJS', 'Express', 'MongoDB'],
    description: 'Website with 1200+ users for UWaterloo students to view classes and receive email notifications when spots are available in sections they are "watching"',
    links: {
      github: 'https://github.com/hannahwang12/classwatch-v2',
      demo: 'http://www.uwclasswatch.com/',
    }
  },
  {
    cover: [Img.Textbookify, Img.TextbookifyDashboard],
    title: 'Textbookify',
    tags: ['Vue.js', 'NodeJS', 'Express', 'MongoDB', 'Twilio'],
    description: 'Platform for university students to exchange textbooks by matching buyers and sellers, and by providing market analytics to facilitate transactions',
    description2: {
      award: false,
      text: 'UofT Hacks 2019'
    },
    links: {
      github: 'https://github.com/hannahwang12/textbookify',
    }
  },
  {
    cover: [Img.Lift, Img.LiftHome, Img.LiftDashboard],
    title: 'lift',
    tags: ['Fitbit OS SDK', 'Vue.js', 'Firebase'],
    description: 'Fitbit app to automatically track and store workout data (e.g. reps of each exercise) using device\'s accelerometer sensor; displays user data on Vue webpage to visualize workout progress and trends',
    description2: {
      award: true,
      text: 'Hack the North 2018 Finalist'
    },
    links: {
      github: 'https://github.com/hannahwang12/lift',
    }
  },
  {
    cover: [Img.Claire, Img.ClaireLogin, Img.ClaireChatbot, Img.ClaireDashboard],
    title: 'claire',
    tags: ['React', 'NodeJS', 'Express', 'Firebase', 'Google Cloud'],
    description: 'AI chatbot for senior citizens to combat the growing issue of loneliness; provides analytics for family and caregivers to monitor the senior\'s wellbeing based on chat messages using natural language processing',
    description2: {
      award: true,
      text: 'Hack the 6ix 2018 Finalist'
    },
    links: {
      github: 'https://github.com/hannahwang12/hackthe6ix',
    }
  },
  {
    cover: [Img.Restarant, Img.RestarantApp],
    title: 'reSTARant',
    tags: ['React Native', 'Google Cloud', 'Google Places API'],
    description: 'Mobile app for Android and iOS where users can scan a restaurant sign and instantly view Google ratings and reviews',
    description2: {
      award: false,
      text: 'StarterHacks 2018'
    },
    links: {
      github: 'https://github.com/hannahwang12/reSTARant',
    }
  },
  {
    cover: [Img.Sudoku],
    title: 'Multiplayer Sudoku',
    tags: ['JavaScript', 'NodeJS', 'Express', 'Socket.io'],
    description: 'Web app where players collaborate with others to solve sudoku puzzles; all changes are displayed in realtime',
    links: {
      github: 'https://github.com/hannahwang12/MultiplayerSudoku',
      demo: 'http://twodoku.herokuapp.com/',
    }
  },
  {
    cover: [Img.AudioVisualizer, Img.AudioVisualizerLD],
    title: 'Audio Visualizer',
    tags: ['JavaScript', 'HTML', 'CSS'],
    description: 'Web app that produces visual representations of input audio files from audio frequency data using Web Audio API; features 3 different animation styles',
    links: {
      github: 'https://github.com/hannahwang12/AudioVisualizer',
      demo: 'http://hannahwang.me/AudioVisualizer',
    }
  },
  {
    cover: [Img.ColourClock],
    title: 'Colour Clock',
    tags: ['JavaScript', 'HTML', 'CSS'],
    description: 'Web app that displays an analog clock with the page\'s background colour code in rgb or hex corresponding to the current time',
    links: {
      github: 'https://github.com/hannahwang12/ColourClock',
      demo: 'http://hannahwang.me/ColourClock/',
    }
  },
  {
    cover: [Img.GradeCalculator, Img.GradeCalculatorApp],
    title: 'WATERL%: Grade Calculator',
    tags: ['Android Studio', 'Java', 'XML'],
    description: 'Mobile app that calculates the user\'s current overall grade in UWaterloo courses; saves user inputted grades and calculated grades',
    links: {
      github: 'https://github.com/hannahwang12/WaterlooGradeCalculator',
    }
  },
];

export default CodingProjectsData;