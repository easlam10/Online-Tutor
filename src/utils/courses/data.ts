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
      src:"/images/Subjects_images/img4.svg"
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