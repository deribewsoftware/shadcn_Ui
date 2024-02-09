
import Biology from '../public/bio9.jpg';
import BiologyFresh from '../public/bio9.jpg';
import Logic from '../public/logic.jpg';
import Chemistry from '../public/chemstry.jpg';
import Physics from '../public/physics.jpeg';
import Mathematics from '../public/maths.png';
import { reviews } from "./reviews";

export const courses = [
  {
    id: '1',
    subject: "Biology Grade 9 Course",
    category: "Highschool",
    cover: Biology,
    price: 100,
    users: [
      {
        id: "1",
        name: "Deribew Shimelis",
        avatar: "https://avatars.githubusercontent.com/u/739984?v=4",
        reviews: {
          comment: "Excellent course",
          rating: 5,
        },
      },
      {
        id: "4",
        name: "Charlie Brown",
        avatar: "https://avatars.githubusercontent.com/u/739984?v=4",
        reviews: {
          comment: "Great content",
          rating: 4,
        },
      },
    ],
    rating: 4.5,
    description: "Best quality courses for Biology",
    percent: 78,
    status: true,
    completion: false,
    createdDate: "22-01-2024",
  },
  {
    id: '2',
    subject: "Biology Common Course",
    category: "Freshman",
    cover: BiologyFresh,
    price: 200,
    users: [
      {
        id: "1",
        name: "Deribew Shimelis",
        avatar: "https://avatars.githubusercontent.com/u/739984?v=4",
        reviews: {
          comment: "Very informative",
          rating: 5,
        },
      },
      {
        id: "3",
        name: "Bob Smith",
        avatar: "https://avatars.githubusercontent.com/u/739984?v=4",
        reviews: {
          comment: "Helped a lot",
          rating: 4,
        },
      },
      {
        id: "7",
        name: "Frank Johnson",
        avatar: "https://avatars.githubusercontent.com/u/739984?v=4",
        reviews: {
          comment: "Good course",
          rating: 4,
        },
      },
      {
        id: "10",
        name: "Ivy Wilson",
        avatar: "https://avatars.githubusercontent.com/u/739984?v=4",
        reviews: {
          comment: "Enjoyed learning",
          rating: 5,
        },
      },
    ],
    rating: 2.5,
    description: "Best biology quality courses",
    percent: 90,
    status: false,
    completion: true,
    createdDate: "22-01-2024",
  },
  {
    id: '3',
    subject: "Logic and Critical Thinking Common Course",
    category: "Freshman",
    cover: Logic,
    price: 100,
    users: [
      {
        id: "2",
        name: "Alice Johnson",
        avatar: "https://avatars.githubusercontent.com/u/739984?v=4",
        reviews: {
          comment: "Challenging but rewarding",
          rating: 3.5,
        },
      },
      {
        id: "5",
        name: "Diana Miller",
        avatar: "https://avatars.githubusercontent.com/u/739984?v=4",
        reviews: {
          comment: "Interesting concepts",
          rating: 4,
        },
      },
      {
        id: "6",
        name: "Eva Wilson",
        avatar: "https://avatars.githubusercontent.com/u/739984?v=4",
        reviews: {
          comment: "Good introduction",
          rating: 4,
        },
      },
      {
        id: "8",
        name: "Grace Miller",
        avatar: "https://avatars.githubusercontent.com/u/739984?v=4",
        reviews: {
          comment: "Enhanced critical thinking",
          rating: 4.5,
        },
      },
    ],
    rating: 3,
    description: "Best logic quality courses",
    percent: 85,
    status: true,
    completion: false,
    createdDate: "22-01-2024",
  },
  {
    id: '4',
    subject: "Chemistry Grade 12 Course",
    category: "Highschool",
    cover: Chemistry,
    price: 100,
    users: [
      {
        id: "3",
        name: "Bob Smith",
        avatar: "https://avatars.githubusercontent.com/u/739984?v=4",
        reviews: {
          comment: "Highly recommended",
          rating: 5,
        },
      },
      {
        id: "8",
        name: "Grace Miller",
        avatar: "https://avatars.githubusercontent.com/u/739984?v=4",
        reviews: {
          comment: "Clear explanations",
          rating: 4.5,
        },
      },
      {
        id: "9",
        name: "Henry Brown",
        avatar: "https://avatars.githubusercontent.com/u/739984?v=4",
        reviews: {
          comment: "Thorough content",
          rating: 4,
        },
      },
      {
        id: "10",
        name: "Ivy Wilson",
        avatar: "https://avatars.githubusercontent.com/u/739984?v=4",
        reviews: {
          comment: "Excellent course",
          rating: 5,
        },
      },
    ],
    rating: 4.8,
    description: "Best chemistry quality courses",
    percent: 80,
    status: true,
    completion: true,
    createdDate: "22-01-2024",
  },
  {
    id: '5',
    subject: "Physics Advanced Course",
    category: "Undergraduate",
    cover: Physics,
    price: 150,
    users: [
      {
        id: "2",
        name: "Alice Johnson",
        avatar: "https://avatars.githubusercontent.com/u/739984?v=4",
        reviews: {
          comment: "Challenging concepts",
          rating: 4,
        },
      },
      {
        id: "4",
        name: "Charlie Brown",
        avatar: "https://avatars.githubusercontent.com/u/739984?v=4",
        reviews: {
          comment: "Great course",
          rating: 4.5,
        },
      },
      {
        id: "7",
        name: "Frank Johnson",
        avatar: "https://avatars.githubusercontent.com/u/739984?v=4",
        reviews: {
          comment: "Well-structured content",
          rating: 4,
        },
      },
    ],
    rating: 4.2,
    description: "Best physics quality courses",
    percent: 88,
    status: true,
    completion: false,
    createdDate: "22-01-2024",
  },
  {
    id: '6',
    subject: "Mathematics Fundamentals Course",
    category: "Highschool",
    cover: Mathematics,
    price: 120,
    users: [
      {
        id: "1",
        name: "Deribew Shimelis",
        avatar: "https://avatars.githubusercontent.com/u/739984?v=4",
        reviews: {
          comment: "Solid foundation",
          rating: 4.5,
        },
      },
      {
        id: "5",
        name: "Diana Miller",
        avatar: "https://avatars.githubusercontent.com/u/739984?v=4",
        reviews: {
          comment: "Clear explanations",
          rating: 4,
        },
      },
      {
        id: "6",
        name: "Eva Wilson",
        avatar:"https://avatars.githubusercontent.com/u/739984?v=4",
        reviews: {
          comment: "Helpful for beginners",
          rating: 3.5,
        },
      },
    ],
    rating: 3.8,
    description: "Best mathematics quality courses",
    percent: 95,
    status: false,
    completion: true,
    createdDate: "22-01-2024",
  },
  {
    id: '7',
    subject: "Data Science Essentials",
    category: "Undergraduate",
    cover: "https://avatars.githubusercontent.com/u/739984?v=4",
    price: 180,
    users: [
      {
        id: "3",
        name: "Bob Smith",
        avatar: "https://avatars.githubusercontent.com/u/739984?v=4",
        reviews: {
          comment: "Great introduction to data science",
          rating: 4,
        },
      },
      {
        id: "8",
        name: "Grace Miller",
        avatar: "https://avatars.githubusercontent.com/u/739984?v=4",
        reviews: {
          comment: "Practical applications explained well",
          rating: 4.5,
        },
      },
    ],
    rating: 4.4,
    description: "Best data science quality courses",
    percent: 75,
    status: true,
    completion: true,
    createdDate: "22-01-2024",
  },
  {
    id: '8',
    subject: "Artificial Intelligence Fundamentals",
    category: "Undergraduate",
    cover: "https://avatars.githubusercontent.com/u/739984?v=4",
    price: 200,
    users: [
      {
        id: "2",
        name: "Alice Johnson",
        avatar: "https://avatars.githubusercontent.com/u/739984?v=4",
        reviews: {
          comment: "Comprehensive AI course",
          rating: 4.5,
        },
      },
      {
        id: "9",
        name: "Henry Brown",
        avatar: "https://avatars.githubusercontent.com/u/739984?v=4",
        reviews: {
          comment: "In-depth coverage of AI concepts",
          rating: 4,
        },
      },
    ],
    rating: 4.6,
    description: "Best artificial intelligence quality courses",
    percent: 85,
    status: true,
    completion: false,
    createdDate: "22-01-2024",
  },
  {
    id: '9',
    subject: "Web Development Bootcamp",
    category: "Professional Development",
    cover: "https://avatars.githubusercontent.com/u/739984?v=4",
    price: 250,
    users: [
      {
        id: "4",
        name: "Charlie Brown",
        avatar:"https://avatars.githubusercontent.com/u/739984?v=4",
        reviews: {
          comment: "Excellent course for aspiring web developers",
          rating: 5,
        },
      },
      {
        id: "7",
        name: "Frank Johnson",
        avatar: "https://avatars.githubusercontent.com/u/739984?v=4",
        reviews: {
          comment: "Practical skills gained",
          rating: 4.5,
        },
      },
      {
        id: "10",
        name: "Ivy Wilson",
        avatar: "https://avatars.githubusercontent.com/u/739984?v=4",
        reviews: {
          comment: "Great instructor",
          rating: 4,
        },
      },
    ],
    rating: 4.8,
    description: "Best web development quality courses",
    percent: 80,
    status: true,
    completion: true,
    createdDate: "22-01-2024",
  },
  {
    id: '10',
    subject: "Machine Learning Masterclass",
    category: "Postgraduate",
    cover: "https://avatars.githubusercontent.com/u/739984?v=4",
    price: 300,
    users: [
      {
        id: "1",
        name: "Deribew Shimelis",
        avatar: "https://avatars.githubusercontent.com/u/739984?v=4",
        reviews: {
          comment: "In-depth coverage of ML concepts",
          rating: 4.5,
        },
      },
      {
        id: "5",
        name: "Diana Miller",
        avatar: "https://avatars.githubusercontent.com/u/739984?v=4",
        reviews: {
          comment: "Challenging but rewarding",
          rating: 4,
        },
      },
    ],
    rating: 4.5,
    description: "Best machine learning quality courses",
    percent: 70,
    status: true,
    completion: false,
    createdDate: "22-01-2024",
  },
  {
    id: '11',
    subject: "Cybersecurity Fundamentals",
    category: "Professional Development",
    cover: "https://avatars.githubusercontent.com/u/739984?v=4",
    price: 180,
    users: [
      {
        id: "3",
        name: "Bob Smith",
        avatar: "https://avatars.githubusercontent.com/u/739984?v=4",
        reviews: {
          comment: "Essential cybersecurity knowledge",
          rating: 4,
        },
      },
      {
        id: "6",
        name: "Eva Wilson",
        avatar: "https://avatars.githubusercontent.com/u/739984?v=4",
        reviews: {
          comment: "Practical skills gained",
          rating: 4.5,
        },
      },
      {
        id: "8",
        name: "Grace Miller",
        avatar: "https://avatars.githubusercontent.com/u/739984?v=4",
        reviews: {
          comment: "Great instructor",
          rating: 4,
        },
      },
    ],
    rating: 4.2,
    description: "Best cybersecurity quality courses",
    percent: 88,
    status: true,
    completion: true,
    createdDate: "22-01-2024",
  },
  {
    id: "12",
    subject: "Mobile App Development",
    category: "Professional Development",
    cover: "https://avatars.githubusercontent.com/u/739984?v=4",
    price: 200,
    users: [
      {
        id: "2",
        name: "Alice Johnson",
        avatar: "https://avatars.githubusercontent.com/u/739984?v=4",
        reviews: {
          comment: "Comprehensive course for app development",
          rating: 4.5,
        },
      },
      {
        id: "9",
        name: "Henry Brown",
        avatar: "https://avatars.githubusercontent.com/u/739984?v=4",
        reviews: {
          comment: "Hands-on experience gained",
          rating: 4,
        },
      },
    ],
    rating: 4.6,
    description: "Best mobile app development quality courses",
    percent: 85,
    status: true,
    completion: false,
    createdDate: "22-01-2024",
  },
  {
    id: '13',
    subject: "Art History: Ancient to Renaissance",
    category: "Undergraduate",
    cover: "https://avatars.githubusercontent.com/u/739984?v=4",
    price: 150,
    users: [
      {
        id: "4",
        name: "Charlie Brown",
        avatar: "https://avatars.githubusercontent.com/u/739984?v=4",
        reviews: {
          comment: "Insightful exploration of art history",
          rating: 4,
        },
      },
      {
        id: "7",
        name: "Frank Johnson",
        avatar: "https://avatars.githubusercontent.com/u/739984?v=4",
        reviews: {
          comment: "Great visual resources",
          rating: 4.5,
        },
      },
      {
        id: "10",
        name: "Ivy Wilson",
        avatar: "https://avatars.githubusercontent.com/u/739984?v=4",
        reviews: {
          comment: "Well-organized content",
          rating: 4,
        },
      },
    ],
    rating: 4.3,
    description: "Best art history quality courses",
    percent: 92,
    status: false,
    completion: true,
    createdDate: "22-01-2024",
  },
  {
    id: '14',
    subject: "Psychology: Understanding the Mind",
    category: "Undergraduate",
    cover: "https://avatars.githubusercontent.com/u/739984?v=4",
    price: 120,
    users: [
      {
        id: "1",
        name: "Deribew Shimelis",
        avatar: "https://avatars.githubusercontent.com/u/739984?v=4",
        reviews: {
          comment: "Fascinating insights into psychology",
          rating: 4.5,
        },
      },
      {
        id: "5",
        name: "Diana Miller",
        avatar: "https://avatars.githubusercontent.com/u/739984?v=4",
        reviews: {
          comment: "Well-explained concepts",
          rating: 4,
        },
      },
    ],
    rating: 4.5,
    description: "Best psychology quality courses",
    percent: 75,
    status: true,
    completion: false,
    createdDate: "22-01-2024",
  },
  {
    id: '15',
    subject: "Environmental Science: Impact and Solutions",
    category: "Undergraduate",
    cover: "https://avatars.githubusercontent.com/u/739984?v=4",
    price: 180,
    users: [
      {
        id: "3",
        name: "Bob Smith",
        avatar: "https://avatars.githubusercontent.com/u/739984?v=4",
        reviews: {
          comment: "Eye-opening course on environmental issues",
          rating: 4,
        },
      },
      {
        id: "6",
        name: "Eva Wilson",
        avatar: "https://avatars.githubusercontent.com/u/739984?v=4",
        reviews: {
          comment: "Practical solutions discussed",
          rating: 4.5,
        },
      },
      {
        id: "9",
        name: "Henry Brown",
        avatar: "https://avatars.githubusercontent.com/u/739984?v=4",
        reviews: {
          comment: "Highly recommended",
          rating: 4,
        },
      },
    ],
    rating: 4.3,
    description: "Best environmental science quality courses",
    percent: 80,
    status: true,
    completion: true,
    createdDate: "22-01-2024",
  },
  {
    id: '16',
    subject: "History of Civilization: Ancient to Modern",
    category: "Undergraduate",
    cover: "https://avatars.githubusercontent.com/u/739984?v=4",
    price: 150,
    users: [
      {
        id: "2",
        name: "Alice Johnson",
        avatar:"https://avatars.githubusercontent.com/u/739984?v=4",
        reviews: {
          comment: "Engaging exploration of historical events",
          rating: 4.5,
        },
      },
      {
        id: "7",
        name: "Frank Johnson",
        avatar: "https://avatars.githubusercontent.com/u/739984?v=4",
        reviews: {
          comment: "Comprehensive coverage",
          rating: 4,
        },
      },
    ],
    rating: 4.6,
    description: "Best history of civilization quality courses",
    percent: 85,
    status: true,
    completion: false,
    createdDate: "22-01-2024",
  },
  {
    id: '17',
    subject: "Literary Classics: Masterpieces of World Literature",
    category: "Undergraduate",
    cover: "https://avatars.githubusercontent.com/u/739984?v=4",
    price: 130,
    users: [
      {
        id: "4",
        name: "Charlie Brown",
        avatar: "https://avatars.githubusercontent.com/u/739984?v=4",
        reviews: {
          comment: "Insightful analysis of literary masterpieces",
          rating: 4,
        },
      },
      {
        id: "8",
        name: "Grace Miller",
        avatar: "https://avatars.githubusercontent.com/u/739984?v=4",
        reviews: {
          comment: "Excellent course for literature lovers",
          rating: 4.5,
        },
      },
    ],
    rating: 4.2,
    description: "Best literary classics quality courses",
    percent: 88,
    status: true,
    completion: true,
    createdDate: "22-01-2024",
  },
  {
    id: '18',
    subject: "Sociology: Understanding Society",
    category: "Undergraduate",
    cover: "https://avatars.githubusercontent.com/u/739984?v=4",
    price: 140,
    users: [
      {
        id: "1",
        name: "Deribew Shimelis",
        avatar: "https://avatars.githubusercontent.com/u/739984?v=4",
        reviews: {
          comment: "Thought-provoking insights into society",
          rating: 4.5,
        },
      },
      {
        id: "5",
        name: "Diana Miller",
        avatar: "https://avatars.githubusercontent.com/u/739984?v=4",
        reviews: {
          comment: "Well-structured course",
          rating: 4,
        },
      },
    ],
    rating: 4.5,
    description: "Best sociology quality courses",
    percent: 75,
    status: true,
    completion: false,
    createdDate: "22-01-2024",
  },
  {
    id: '19',
    subject: "Economics: Principles and Applications",
    category: "Undergraduate",
    cover: "https://avatars.githubusercontent.com/u/739984?v=4",
    price: 160,
    users: [
      {
        id: "3",
        name: "Bob Smith",
        avatar: "https://avatars.githubusercontent.com/u/739984?v=4",
        reviews: {
          comment: "Clear explanations of economic concepts",
          rating: 4,
        },
      },
      {
        id: "6",
        name: "Eva Wilson",
        avatar: "https://avatars.githubusercontent.com/u/739984?v=4",
        reviews: {
          comment: "Practical applications explained well",
          rating: 4.5,
        },
      },
      {
        id: "9",
        name: "Henry Brown",
        avatar: "https://avatars.githubusercontent.com/u/739984?v=4",
        reviews: {
          comment: "Highly recommended",
          rating: 4,
        },
      },
    ],
    rating: 4.3,
    description: "Best economics quality courses",
    percent: 80,
    status: true,
    completion: true,
    createdDate: "22-01-2024",
  },
  {
    id: '20',
    subject: "Political Science: Governance and Politics",
    category: "Undergraduate",
    cover: "https://avatars.githubusercontent.com/u/739984?v=4",
    price: 170,
    users: [
      {
        id: "2",
        name: "Alice Johnson",
        avatar: "https://avatars.githubusercontent.com/u/739984?v=4",
        reviews: {
          comment: "Insightful exploration of political concepts",
          rating: 4.5,
        },
      },
      {
        id: "7",
        name: "Frank Johnson",
        avatar: "https://avatars.githubusercontent.com/u/739984?v=4",
        reviews: {
          comment: "Comprehensive coverage",
          rating: 4,
        },
      },
    ],
    rating: 4.6,
    description: "Best political science quality courses",
    percent: 85,
    status: true,
    completion: false,
    createdDate: "22-01-2024",
  },
];
