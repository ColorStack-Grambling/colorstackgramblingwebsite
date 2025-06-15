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
  
export interface Leader {
  name: string;
  image: string;
  position: string;
  classification: string;
  major: string;
  linkedin: string;
}
  
// Mock Members Data
export const members: Member[] = [
  {
    id: 1,
    name: "Elikem Hamenoo",
    role: "Chapter President", 
    bio: "Computer Science sophomore at Grambling State University with a passion for AI and machine learning. Elikem leads the ColorStack chapter and has been instrumental in growing its membership.",
    image: "/images/elikem.png",
    achievements: ["Nvidia Ignite Internship", "CTC Discovery", "ColorStack Founder"],
    featured: true
  },
  {
    id: 2,
    name: "Joseph Oduyebo",
    role: "Amazon SDE Intern",
    bio: "Sophomore studying Engineering Technology with a focus on Artificial Intelligence and Robotics. Joseph helps coordinate events and mentorship programs within the chapter.",
    image: "/images/joseph.jpeg",
    achievements: ["Amazon SDE Internship", "Citi Foundation and TMCF Scholar"],
    featured: true
  },
  {
    id: 3,
    name: "David Nintang",
    role: "Robotics Champion and Entrepreneur",
    bio: "Sophomore in Engineering Technology with a strong knack for the Entrepreneurship field. Currently working on his startup.",
    image: "/images/nintang.jpeg",
    achievements: ["Sigma Squared Society Fellow", "Moonshot Young Leader", "AI4ALL Fellow"],
    featured: true
  },
  {
    id: 4,
    name: "King Igbozuruike",
    role: "Sponsorships and Partnerships Lead",
    bio: "Junior in Computer Science with a strong interest in the intersection of Finance and Technology. King manages sponsorships and partnerships for the chapter.",
    image: "https://media.licdn.com/dms/image/v2/D5603AQGenBzlNCI7Hg/profile-displayphoto-shrink_800_800/B56ZaJnlZAGkAg-/0/1746065578974?e=1753920000&v=beta&t=8JKsCaU2-qe8nyCXOZ5MiEi5SE6uvhWjN3aAIu7B5Mc",
    achievements: ["Meta SWE Intern", "Carnegie Mellon University BASS Fellow", "2x Hackathon Winner"],
    featured: true
  },
  {
    id: 5,
    name: "Ebenezer Acquah",
    role: "Chapter Vice President",
    bio: "Sophomore computer science student who is pserves as the vice president of the chapter",
    image: "/images/eben.jpeg",
    achievements: ["Meta University Internship", "TMCF Scholar", "Chapter Co-Founder"],
    featured: true
  }
];

// Mock Events Data
export const events: Event[] = [
  {
    id: 1,
    title: "General Body Interest Meeting",
    description: "Join us for our first general body meeting of the semester to learn about ColorStack, our mission, and how you can get involved.",
    date: "2025-03-14",
    time: "11:00 AM - 12:00 PM",
    location: "Carver Auditorium, Room 94",
    image: "/images/event1.jpeg",
    isPast: true
  },
  {
    id: 2,
    title: "Zero to Hero: A Grambling Success Story",
    description: "Come hear from Jahres Peters, incoming software engineer at OpenAi and previous intern at Microsoft, IMC Trading, and Splunk, as he shares his journey from starting with no coding experience to landing multiple internships at top tech companies.",
    date: "2025-04-10",
    time: "11:00 AM - 12:30 PM",
    location: "Charles P. Adams Room 200",
    image: "/images/event3.jpeg",
    isPast: true
  },
  // {
  //   id: 3,
  //   title: "Mock Technical Interviews",
  //   description: "Practice technical interviews with industry professionals and receive personalized feedback.",
  //   date: "2025-06-05",
  //   time: "3:00 PM - 7:00 PM",
  //   location: "Virtual (Zoom)",
  //   image: "/images/event3.jpeg",
  //   isPast: true
  // },
  // {
  //   id: 4,
  //   title: "Alumni Panel: Paths to Tech",
  //   description: "GSU alumni in tech share their career journeys and answer questions from current students.",
  //   date: "2025-04-01",
  //   time: "6:00 PM - 8:00 PM",
  //   location: "Student Union Theater",
  //   image: "/images/about1.jpeg",
  //   isPast: true
  // },
  // {
  //   id: 5,
  //   title: "Python Coding Challenge",
  //   description: "Test your Python skills in a friendly competition with prizes for top performers.",
  //   date: "2025-03-20",
  //   time: "4:00 PM - 7:00 PM",
  //   location: "Jacob T. Stewart Room 156",
  //   image: "/images/about2.jpeg",
  //   isPast: true
  // }
];

// Mock Companies Data
export const companies: Company[] = [
  {
    id: 1,
    name: "Microsoft",
    logo: "https://img.icons8.com/?size=100&id=22989&format=png&color=000000"
  },
  {
    id: 2,
    name: "Meta",
    logo: "https://img.icons8.com/?size=100&id=PvvcWRWxRKSR&format=png&color=000000"
  },
  {
    id: 3,
    name: "Google",
    logo: "https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
  },
  {
    id: 4,
    name: "Amazon",
    logo: "https://img.icons8.com/?size=100&id=21295&format=png&color=000000"
  },
  {
    id: 5,
    name: "Nvidia",
    logo: "https://img.icons8.com/?size=100&id=yqf95864UzeQ&format=png&color=000000"
  },
  {
    id: 6,
    name: "Salesforce",
    logo: "https://img.icons8.com/?size=100&id=38804&format=png&color=000000"
  },
  {
    id: 7,
    name: "AWS",
    logo: "https://img.icons8.com/?size=100&id=33039&format=png&color=000000"
  },
  {
    id: 8,
    name: "Open AI",
    logo: "https://img.icons8.com/?size=100&id=FBO05Dys9QCg&format=png&color=000000"
  },
  {
    id: 9,
    name: "Samsung",
    logo: "https://img.icons8.com/?size=100&id=wGYgIlqPWdC2&format=png&color=000000"
  },
  {
    id: 10,
    name: "Dell",
    logo: "https://img.icons8.com/?size=100&id=63790&format=png&color=000000"
  },
  {
    id:11,
    name: "Statefarm",
    logo: "https://1000logos.net/wp-content/uploads/2018/04/State-Farm-Logo.jpg"
  },
  {
    id: 12,
    name: "Nordstrom",
    logo: "https://logos-world.net/wp-content/uploads/2022/01/Nordstrom-Logo.png"
  }, 
  {
    id:13,
    name: "Oracle",
    logo: "https://img.icons8.com/?size=100&id=39913&format=png&color=000000"
  },
  {
    id:14,
    name: "ServiceNow",
    logo: "https://logowik.com/content/uploads/images/servicenow9653.jpg"
  },
  {
    id:15,
    name: "Intuit",
    logo: "https://logos-world.net/wp-content/uploads/2023/12/Intuit-Logo.png"
  },
  {
    id:16,
    name: "Deloitte",
    logo: "https://1000logos.net/wp-content/uploads/2019/08/Deloitte-Logo.png"
  },
  {
    id:17,
    name: "Netskope",
    logo: "https://logowik.com/content/uploads/images/netskope1307.logowik.com.webp"
  }
];

// Mock Leaders Data
export const leaders: Leader[] = [
  {
    name: "Elikem Hamenoo",
    image: "/images/elikem.png",
    position: "Chapter President",
    classification: "Sophomore",
    major: "Computer Science",
    linkedin: "https://linkedin.com/in/elikemhamenoo/"
  },
  {
    name: "Ebenezer Acquah",
    image: "/images/eben.jpeg",
    position: "Chapter Vice President",
    classification: "Sophomore",
    major: "Computer Science",
    linkedin: "https://linkedin.com/in/ebenezerkacquah"
  },
  {
    name: "Angel Antwi-Mensah",
    image: "https://media.licdn.com/dms/image/v2/D5603AQG0XMIjr6hwQg/profile-displayphoto-shrink_800_800/B56ZY_CSL_HoAc-/0/1744814285901?e=1753920000&v=beta&t=lpkmZnMHaegeYohyH7OwZZqDZ6Qs_fr-fvQl7ZwPQ6U",
    position: "Academic Co-Chair",
    classification: "Sophomore",
    major: "Computer Science",
    linkedin: "https://www.linkedin.com/in/angelantwi77/"
  },
  {
    name: "King Igbozuruike",
    image: "https://media.licdn.com/dms/image/v2/D5603AQGenBzlNCI7Hg/profile-displayphoto-shrink_800_800/B56ZaJnlZAGkAg-/0/1746065578974?e=1753920000&v=beta&t=8JKsCaU2-qe8nyCXOZ5MiEi5SE6uvhWjN3aAIu7B5Mc",
    position: "Partnerships and Sponsorship Co-Head",
    classification: "Junior",
    major: "Computer Science",
    linkedin: "https://linkedin.com/in/thetechking"
  },
  {
    name: "Joseph Oduyebo",
    image: "/images/joseph.jpeg",
    position: "Professional Development Co-Chair",
    classification: "Sophomore",
    major: "Engineering Technology",
    linkedin: "https://linkedin.com/in/joseph-oduyebo"
  },
  {
    name: "Ugochukwu Igweagu",
    image: "https://media.licdn.com/dms/image/v2/D5603AQH1k_APMlrqKg/profile-displayphoto-shrink_400_400/B56ZbINi.1HUAw-/0/1747115717175?e=1753920000&v=beta&t=7_GLY4n1c0bV0f_XiWPuurlzOmjHkMK0DiTy2jjHuH8",
    position: "Events and Opertions Co-Chair",
    classification: "Junior",
    major: "Computer Science",
    linkedin: "https://www.linkedin.com/in/ugochukwu-igweagu/"
  },
  {
    name: "Andrew Emeghebo",
    image: "https://media.licdn.com/dms/image/v2/D5622AQHUgdEMnbpovg/feedshare-shrink_1280/feedshare-shrink_1280/0/1732738689090?e=1751500800&v=beta&t=o2XUe0ZtXIR2Yuffcis_bFCa325y4APtjPlQlye5UrQ",
    position: "Partnerships and Sponsorship Co-Head",
    classification: "Junior",
    major: "Computer Science",
    linkedin: "https://www.linkedin.com/in/andrewemeghebo/"
  },
  {
    name: "Epaphras Akinola",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQED10sgKuhMZQ/profile-displayphoto-shrink_400_400/B4DZV1E55FHwAg-/0/1741425976762?e=1753920000&v=beta&t=S8T6jrHMk7ZIXUd0c8cC9yly2lUzD0i5v90PeA7p5O8",
    position: "Events and Opertions Co-Chair",
    classification: "Sophomore",
    major: "Computer Science",
    linkedin: "https://www.linkedin.com/in/epaphras-akinola/"
  },
  {
    name: "Francis Gyamfi",
    image: "https://media.licdn.com/dms/image/v2/D5603AQGyoEMyBaXxMw/profile-displayphoto-shrink_800_800/B56ZZEudWuGsAc-/0/1744909752789?e=1753920000&v=beta&t=2niC7go7YdovlKekOPMnsleS1jtQZmGSwvB8LTXoxb0",
    position: "Communications and Outreach Co-Chair",
    classification: "Sophomore",
    major: "Computer Science",
    linkedin: "https://www.linkedin.com/in/francisot/"
  },
  {
    name: "Iyanuoluwa Fagbamila",
    image: "https://media.licdn.com/dms/image/v2/D5603AQET69uRsGmcNg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1692058502954?e=1753920000&v=beta&t=lHiRjRBxssFN7vn4FcWVxuQV01RwIdRHUVGW8CynTh4",
    position: "Secretary",
    classification: "Senior",
    major: "Nursing % Computer Science",
    linkedin: "https://www.linkedin.com/in/iyanuoluwa-fagbamila/"
  },
  {
    name: "Mosopefoluwa John",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQGCXWR5t4kkwQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720952579380?e=1753920000&v=beta&t=tHkyEa769liGFMH8mSqfPr-y_Y41iyne8UnkbEq2fHo",
    position: "Treasurer",
    classification: "Junior",
    major: "Biology & Mathematics",
    linkedin: "https://www.linkedin.com/in/mosopefoluwajohn/"
  },
  {
    name: "Orator Murambiwa",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQGVX8IYUhJPFQ/profile-displayphoto-shrink_800_800/B4DZbz5jxdG8Ac-/0/1747848675322?e=1753920000&v=beta&t=3Tnmcq2LnzUABcBPpue03F6VpjfYFO_C9YA8fEyO9os",
    position: "Communications and Outreach Co-Chair",
    classification: "Sophomore",
    major: "Computer Science",
    linkedin: "https://www.linkedin.com/in/oratormurambiwa/"
  },
  {
    name: "Patrick Owusu Bofah",
    image: "/placeholder.svg",
    position: "Professional Development Co-Chair",
    classification: "Sophomore",
    major: "Computer Science & Mathematics",
    linkedin: "https://www.linkedin.com/in/patrick-owusu-bofah-7b2a761ab/"
  },
  {
    name: "Daniel Osuoha",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQGzL5bnfWR4lg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726302084296?e=1753920000&v=beta&t=4hwpeaqroUBpoYtTUEF5UzFpODQCEFb-CL_PA2LhE8s",
    position: "Academic Co-Chair",
    classification: "Sophomore",
    major: "Computer Science & Cloud Computing",
    linkedin: "https://www.linkedin.com/in/danielosuoha/"
  },
  {
    name: "Christopher Stills",
    image: "https://media.licdn.com/dms/image/v2/D5603AQG21DMy0aJ_9Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727135376218?e=1753920000&v=beta&t=EOLGjzPSr5FdIzkWF5DWAg04Dkh6gIp3-NfSZvijw1M",
    position: "Committee Advisor",
    classification: "Junior",
    major: "Cybersecurity",
    linkedin: "https://www.linkedin.com/in/christopher-stills-934389293/"
  },
  {
    name: "Rori Loche",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQG3qt2H2hR1AQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1700413753092?e=1753920000&v=beta&t=KHU4oFPeSe4dnl07CXZmTHzL1GjdzBEkvdoi9a07fsw",
    position: "Committee Advisor",
    classification: "Junior",
    major: "Cybersecurity",
    linkedin: "https://www.linkedin.com/in/rori-loche-7266b329a/"
  }
];
