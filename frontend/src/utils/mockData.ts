
// Mock data for development

export interface Member {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  achievements: string[];
  featured: boolean;
}

export interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image?: string;
  isPast: boolean;
}

export interface Company {
  id: number;
  name: string;
  logo: string;
}

// Mock Members Data
export const members: Member[] = [
  {
    id: 1,
    name: "Jordan Smith",
    role: "Chapter President",
    bio: "Computer Science senior at Grambling State University with a passion for AI and machine learning. Jordan leads the ColorStack chapter and has been instrumental in growing its membership.",
    image: "/placeholder.svg",
    achievements: ["Google STEP Internship", "AWS Certified Developer", "HackGSU 2023 Winner"],
    featured: true
  },
  {
    id: 2,
    name: "Maya Johnson",
    role: "Vice President",
    bio: "Junior studying Information Systems with a focus on cybersecurity. Maya helps coordinate events and mentorship programs within the chapter.",
    image: "/placeholder.svg",
    achievements: ["Microsoft Explore Internship", "NCWIT Award Recipient"],
    featured: false
  },
  {
    id: 3,
    name: "Darnell Washington",
    role: "Technical Lead",
    bio: "Senior in Computer Engineering who specializes in web development and has led several workshops for chapter members.",
    image: "/placeholder.svg",
    achievements: ["Meta Engineering Internship", "Full Stack Open Certification"],
    featured: false
  },
  {
    id: 4,
    name: "Aisha Patel",
    role: "Events Coordinator",
    bio: "Sophomore in Computer Science who organizes networking events and technical workshops for the chapter.",
    image: "/placeholder.svg",
    achievements: ["Palantir Early Talent Workshop", "Campus Hackathon Organizer"],
    featured: false
  },
  {
    id: 5,
    name: "Marcus Chen",
    role: "Treasurer",
    bio: "Junior studying Data Science who manages chapter finances and sponsorship relationships.",
    image: "/placeholder.svg",
    achievements: ["Bloomberg Financial Internship", "Data Science Bowl Finalist"],
    featured: false
  }
];

// Mock Events Data
export const events: Event[] = [
  {
    id: 1,
    title: "Technical Resume Workshop",
    description: "Learn how to craft a technical resume that stands out to recruiters from major tech companies.",
    date: "2025-05-15",
    time: "4:00 PM - 6:00 PM",
    location: "Jacob T. Stewart Room 234",
    image: "/placeholder.svg",
    isPast: false
  },
  {
    id: 2,
    title: "Intro to Web Development",
    description: "Hands-on workshop covering HTML, CSS, and JavaScript fundamentals for beginners.",
    date: "2025-05-22",
    time: "5:00 PM - 7:00 PM",
    location: "Digital Library Room 101",
    image: "/placeholder.svg",
    isPast: false
  },
  {
    id: 3,
    title: "Mock Technical Interviews",
    description: "Practice technical interviews with industry professionals and receive personalized feedback.",
    date: "2025-06-05",
    time: "3:00 PM - 7:00 PM",
    location: "Virtual (Zoom)",
    image: "/placeholder.svg",
    isPast: false
  },
  {
    id: 4,
    title: "Alumni Panel: Paths to Tech",
    description: "GSU alumni in tech share their career journeys and answer questions from current students.",
    date: "2025-04-01",
    time: "6:00 PM - 8:00 PM",
    location: "Student Union Theater",
    image: "/placeholder.svg",
    isPast: true
  },
  {
    id: 5,
    title: "Python Coding Challenge",
    description: "Test your Python skills in a friendly competition with prizes for top performers.",
    date: "2025-03-20",
    time: "4:00 PM - 7:00 PM",
    location: "Jacob T. Stewart Room 156",
    image: "/placeholder.svg",
    isPast: true
  }
];

// Mock Companies Data
export const companies: Company[] = [
  {
    id: 1,
    name: "Google",
    logo: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Microsoft",
    logo: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Amazon",
    logo: "/placeholder.svg"
  },
  {
    id: 4,
    name: "Meta",
    logo: "/placeholder.svg"
  },
  {
    id: 5,
    name: "Apple",
    logo: "/placeholder.svg"
  },
  {
    id: 6,
    name: "Netflix",
    logo: "/placeholder.svg"
  },
  {
    id: 7,
    name: "IBM",
    logo: "/placeholder.svg"
  },
  {
    id: 8,
    name: "Twitter",
    logo: "/placeholder.svg"
  }
];
