import { v4 as uuidv4 } from 'uuid';
import YourHomeImg from '../images/yourhome.jpeg';
import NationalParkImg from '../images/nationalpark.jpeg';
import BestBuyImg from '../images/bestbuy.jpeg';


const projects = [
  {
    id: uuidv4(),
    name: 'Home Finder',
    desc:
      'Your Home is a web application that allows users to sign up or log in with an enabled third party authentication system. Once you login you are able to view other listings, create listings, and create companies. Made with Ruby On Rails',
    img: YourHomeImg,
  },
  {
    id: uuidv4(),
    name: 'National Parks',
    desc:
      'Web application that shows users each national park. Made with React and Ruby On Rails.',
    img: NationalParkImg,
  },
  {
    id: uuidv4(),
    name: 'GPU Bot',
    desc:
      'This script is used to purchase a GPU from Bestbuy',
    img: BestBuyImg,
  },
  
];

export default projects;