// import { workerData } from "worker_threads";

const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(str => {
    const splitStr = str.split(' ')
    const capitalized = splitStr.map(word => word.charAt(0).toUpperCase() + word.substr(1)).join(' ')
    
    return capitalized
    })
  }

