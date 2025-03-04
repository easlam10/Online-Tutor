export const cardData = [
    {
      price: "Rs.1500/hour",
      userName: "Umaima Ahmed",
      degrees: "MSc, MSPH, CA Finalist",
      reviews: "7 Reviews",
      pera1: "I have over ",
      year: "12 years",
      pera2:
        " of professional and teaching experience which is varied between online and offline teaching.",
      studys: ["Ielts", "Tofel", "PTE"],
      status: "Available",
      src:"/images/Subjects_images/img2.svg"
    },
    {
      price: "Rs.1200/hour",
      userName: "Ali Raza",
      degrees: "BSc, MPhil Physics",
      reviews: "10 Reviews",
      pera1: "I have over ",
      year: "8 years",
      pera2: " of experience in physics tutoring and academic coaching.",
      studys: ["Physics", "Mathematics"],
      status: "Available",
      src:"/images/Subjects_images/img3.svg"
    },
    {
      price: "Rs.1000/hour",
      userName: "Zainab Khan",
      degrees: "MA English, TESOL",
      reviews: "5 Reviews",
      pera1: "I have over ",
      year: "6 years",
      pera2: " of experience in teaching English language and literature.",
      studys: ["English", "Creative Writing"],
      status: "Busy",
      src:"/images/Subjects_images/img4.svg.svg.svg"
    },
    {
      price: "Rs.2000/hour",
      userName: "Hamza Tariq",
      degrees: "PhD Mathematics",
      reviews: "15 Reviews",
      pera1: "I have over ",
      year: "10 years",
      pera2: " of experience in advanced mathematics and statistics.",
      studys: ["Calculus", "Statistics", "Algebra"],
      status: "Available",
      src:"/images/Subjects_images/img5.svg"
    },
    {
      price: "Rs.1800/hour",
      userName: "Sara Javed",
      degrees: "MSc Chemistry",
      reviews: "9 Reviews",
      pera1: "I have over ",
      year: "7 years",
      pera2: " of experience in chemistry and laboratory sciences.",
      studys: ["Organic Chemistry", "Analytical Chemistry"],
      status: "Available",
      src:"/images/Subjects_images/img6.svg"
    },
    {
      price: "Rs.1600/hour",
      userName: "Bilal Aslam",
      degrees: "MSc Computer Science",
      reviews: "12 Reviews",
      pera1: "I have over ",
      year: "9 years",
      pera2: " of experience in software development and programming.",
      studys: ["JavaScript", "Python", "Java"],
      status: "Busy",
      src:"/images/Subjects_images/img7.svg"
    },
    {
      price: "Rs.1400/hour",
      userName: "Ayesha Malik",
      degrees: "BA History, MPhil",
      reviews: "6 Reviews",
      pera1: "I have over ",
      year: "7 years",
      pera2: " of experience in historical studies and research.",
      studys: ["World History", "Political Science"],
      status: "Available",
      src:"/images/Subjects_images/img8.svg"
    },
    {
      price: "Rs.1900/hour",
      userName: "Tariq Mehmood",
      degrees: "MSc Economics",
      reviews: "14 Reviews",
      pera1: "I have over ",
      year: "11 years",
      pera2: " of experience in economic analysis and tutoring.",
      studys: ["Microeconomics", "Macroeconomics"],
      status: "Available",
      src:"/images/Subjects_images/img9.svg"
    },
    // 12 more complete entries
    ...Array.from({ length: 12 }, (_, i) => ({
      price: `Rs.${1300 + i * 100}/hour`,
      userName: `Tutor ${i + 10}`,
      degrees: `Degree ${i + 10}`,
      reviews: `${5 + i} Reviews`,
      pera1: "I have over ",
      year: `${6 + i} years`,
      pera2: " of experience in various subjects.",
      studys: ["Subject A", "Subject B"],
      status: i % 2 === 0 ? "Available" : "Busy",
      src: `/images/Subjects_images/img${i + 10}.svg`
    }))
  ];


  export const cardData2 = [
    {
      price: "Rs.1500/hour",
      userName: "Umaima Ahmed",
      degrees: "MSc, MSPH, CA Finalist",
      reviews: "7 Reviews",
      pera1: "I have over ",
      year: "12 years",
      pera2:
        " of professional and teaching experience which is varied between online and offline teaching.",
      studys: ["Ielts", "Tofel", "PTE"],
      status: "Available",
      src:"/images/Subjects_images/img2.svg"
    },
    {
      price: "Rs.1200/hour",
      userName: "Ali Raza",
      degrees: "BSc, MPhil Physics",
      reviews: "10 Reviews",
      pera1: "I have over ",
      year: "8 years",
      pera2: " of experience in physics tutoring and academic coaching.",
      studys: ["Physics", "Mathematics"],
      status: "Available",
      src:"/images/Subjects_images/img3.svg"
    },
    {
      price: "Rs.1000/hour",
      userName: "Zainab Khan",
      degrees: "MA English, TESOL",
      reviews: "5 Reviews",
      pera1: "I have over ",
      year: "6 years",
      pera2: " of experience in teaching English language and literature.",
      studys: ["English", "Creative Writing"],
      status: "Busy",
      src:"/images/Subjects_images/img4.svg.svg"
    },
    {
      price: "Rs.2000/hour",
      userName: "Hamza Tariq",
      degrees: "PhD Mathematics",
      reviews: "15 Reviews",
      pera1: "I have over ",
      year: "10 years",
      pera2: " of experience in advanced mathematics and statistics.",
      studys: ["Calculus", "Statistics", "Algebra"],
      status: "Available",
      src:"/images/Subjects_images/img5.svg"
    },
    {
      price: "Rs.1800/hour",
      userName: "Sara Javed",
      degrees: "MSc Chemistry",
      reviews: "9 Reviews",
      pera1: "I have over ",
      year: "7 years",
      pera2: " of experience in chemistry and laboratory sciences.",
      studys: ["Organic Chemistry", "Analytical Chemistry"],
      status: "Available",
      src:"/images/Subjects_images/img6.svg"
    },
    {
      price: "Rs.1600/hour",
      userName: "Bilal Aslam",
      degrees: "MSc Computer Science",
      reviews: "12 Reviews",
      pera1: "I have over ",
      year: "9 years",
      pera2: " of experience in software development and programming.",
      studys: ["JavaScript", "Python", "Java"],
      status: "Busy",
      src:"/images/Subjects_images/img7.svg"
    },
    {
      price: "Rs.1400/hour",
      userName: "Ayesha Malik",
      degrees: "BA History, MPhil",
      reviews: "6 Reviews",
      pera1: "I have over ",
      year: "7 years",
      pera2: " of experience in historical studies and research.",
      studys: ["World History", "Political Science"],
      status: "Available",
      src:"/images/Subjects_images/img8.svg"
    },
    {
      price: "Rs.1900/hour",
      userName: "Tariq Mehmood",
      degrees: "MSc Economics",
      reviews: "14 Reviews",
      pera1: "I have over ",
      year: "11 years",
      pera2: " of experience in economic analysis and tutoring.",
      studys: ["Microeconomics", "Macroeconomics"],
      status: "Available",
      src:"/images/Subjects_images/img9.svg"
    },
    // 12 more complete entries
    ...Array.from({ length: 12 }, (_, i) => ({
      price: `Rs.${1300 + i * 100}/hour`,
      userName: `Tutor ${i + 10}`,
      degrees: `Degree ${i + 10}`,
      reviews: `${5 + i} Reviews`,
      pera1: "I have over ",
      year: `${6 + i} years`,
      pera2: " of experience in various subjects.",
      studys: ["Subject A", "Subject B"],
      status: i % 2 === 0 ? "Available" : "Busy",
      src: `/images/Subjects_images/img${i + 10}.svg`
    }))
  ];


  export const BlogcardData = [
    {
      src: "/images/Blog_images/img1.svg",
      label: "The Top Technical Skills All Employees Need in 2022",
    },
    {
      src: "/images/Blog_images/img1.svg",
      label: "How AI is Transforming the Future of Work",
    },
    {
      src: "/images/Blog_images/img1.svg",
      label: "The Importance of Cybersecurity in the Digital Age",
    },
    {
      src: "/images/Blog_images/img1.svg",
      label: "Web Development Trends to Watch in 2024",
    },
    {
      src: "/images/Blog_images/img1.svg",
      label: "A Beginner's Guide to Cloud Computing",
    },
    {
      src: "/images/Blog_images/img1.svg",
      label: "The Rise of Remote Work: Challenges and Opportunities",
    },
    {
      src: "/images/Blog_images/img1.svg",
      label: "Essential Soft Skills for Tech Professionals",
    },
    {
      src: "/images/Blog_images/img1.svg",
      label: "The Role of Blockchain in Modern Businesses",
    },
    {
      src: "/images/Blog_images/img1.svg",
      label: "How to Get Started with Machine Learning",
    },
    {
      src: "/images/Blog_images/img1.svg",
      label: "The Future of 5G Technology and Its Impact",
    },
    {
      src: "/images/Blog_images/img1.svg",
      label: "Top Programming Languages to Learn in 2024",
    },
    {
      src: "/images/Blog_images/img1.svg",
      label: "Understanding UI/UX Design Principles",
    },
    {
      src: "/images/Blog_images/img1.svg",
      label: "Cyber Threats and How to Stay Protected Online",
    },
    {
      src: "/images/Blog_images/img1.svg",
      label: "The Benefits of Learning DevOps",
    },
    {
      src: "/images/Blog_images/img1.svg",
      label: "What is Full-Stack Development?",
    },
    {
      src: "/images/Blog_images/img1.svg",
      label: "Data Science vs Data Analytics: Key Differences",
    },
    {
      src: "/images/Blog_images/img1.svg",
      label: "How to Build a Personal Brand in Tech",
    },
    {
      src: "/images/Blog_images/img1.svg",
      label: "The Evolution of Artificial Intelligence",
    },
    {
      src: "/images/Blog_images/img1.svg",
      label: "The Basics of Ethical Hacking and Cybersecurity",
    },
    {
      src: "/images/Blog_images/img1.svg",
      label: "How to Become a Successful Freelancer in Tech",
    },
  ];
  