const faqArray = [
  {
    question: "Am I locked into working on a single project?",
    answer: "Not at all! You are welcome to contribute to any project that you feel like working on."
  },
  {
    question: "What commitment is required for me to work on a project?",
    answer: "We don't have any expectations about how much time or effort you should commit to the project. We have set these projects up so that you can contribute to them as much or as little as you wish."
  },
  {
    question: "How do I find out more about the projects?",
    answer: "We encourage you to reach out on our Discord server (link under the Socials item in the menu). You can also send us an email at hello@codenetwork.co for more information"
  },
  {
    question: "Is there a time when people come together to work on these projects?",
    answer: "There sure is! We run Project Nights every Monday night from 5 to 8pm at QUT Gardens Point. Please see our social media channels for more information."
  },
  {
    question: "I wasn't able to attend a Project Night. Can I still work on a project?",
    answer: "Absolutely! We have designed these projects to be accessible outside of the Project Nights, so you are most welcome to make any contributions when you feel like contributing!"
  },
  {
    question: "Do I need to know how to code?",
    answer: "Only if you plan on writing code for the projects. However, there are other ways you can contribute to a project, such as by editing the documentation, testing the project and writing bug reports, or coming up with feature ideas. You can also reach out to our community and ask how these projects were built."
  },
  {
    question: "I'm not studying Information Technology or Software Engineering. Can I work on a project?",
    answer: "Absolutely! In fact, we encourage students from non-IT or non-engineering backgrounds to contribute because of the diverse experience your study brings to our projects."
  },
  {
    question: "I want to contribute but I'm not sure how. What should I do?",
    answer: "Take a look at the contributing guidelines and the Issues page on each project's repository. We have written ideas for things that can be contributed to our projects. Otherwise, reach out on our Discord server and ask for more ideas."
  }
  // {
  //   question: "How do I sign up?",
  //   answer: "Buy yourself a ticket at the link above. We will handle the team building process at the start of the event."
  // },
  // {
  //   question: "Is there a theme for this Hackathon?",
  //   answer: "There is no set theme for this year’s Winter Hackathon! You can generally build anything you want, with some exceptions. Please see our rules list for more details."
  // },
  // {
  //   question: "How big can the teams be?",
  //   answer: "We will allow teams of any size to compete. You can also compete as an individual should you choose."
  // },
  // {
  //   question: "Do I need to be in a team before the weekend, or when I go to get my ticket?",
  //   answer: "Absolutely not! There will be a team forming opportunity on the first night of the Hackathon. Ticket purchases are also individual and are separate to team registrations."
  // },
  // {
  //   question: "Do I need to be a QUT or university student to be prize-eligible?",
  //   answer: "There is no requirement for participants to be a student at QUT or any other university to participate. All are welcome!"
  // },
  // {
  //   question: "How do I get to The Precinct?",
  //   answer: "There are several commercial parking spaces available around The Precinct over the weekend. Fortitude Valley train station is also a five-minute walk from the venue and there are several nearby bus stops, including for the 60 CityGlider service. We advise you to plan your journey using Translink if you are coming by public transport."
  // },
  // {
  //   question: "Do I need to come in-person? Can I participate online?",
  //   answer: "We strongly recommend attending the Hackathon in-person as this is a largely social event, and we do believe it is better to participate with others in the same room. That being said, if you wish to participate remotely, you can do so. However, if you wish to be eligible for prizes, you are required to attend in-person for the team and prize presentations on the final night."
  // },
  // {
  //   question: "Can I continue working on an existing project at the Hackathon?",
  //   answer: "Generally no. The idea of the Winter Hackathon is starting a new project and smashing this out over two-and-a-half days. If you were simply continuing a project you started previously and then showcasing that on the final night, it becomes difficult to differentiate what you built over the weekend from what you had built beforehand. As such, we require that all projects must begin no earlier than 6pm on the first night."
  // },
  // {
  //   question: "What are the prizes?",
  //   answer: "Our team is still deciding the prizes for this year’s Winter Hackathon. Check back later!"
  // },
  // {
  //   question: "Will there be food?",
  //   answer: "Yes, we will be providing food at multiple points during the event. We will have organised meals for lunch and dinner on each of the days, and will have refreshments available over the whole weekend. We will also do our best to cater to everyone’s dietary requirements, so please make sure you specify these on the ticket registration. We will confirm the catering plan soon!"
  // },
  // {
  //   question: "What do I need to bring?",
  //   answer: "We recommend bringing a device to code on and any other peripherals you find necessary. We also recommend bringing a charger for your devices, and an extension lead and powerboard. We will only have limited supplies available."
  // },
  // {
  //   question: "Will I be able to stay at the venue overnight?",
  //   answer: "No. Although we recognise that the Winter Hackathon is a high-intensity environment and that everyone wants to maximise their time, we also believe that everyone needs rest, including our Executive Team. As such, we will be closing the venue at about 9pm each night to allow teams a chance to rest and recover before the next day."
  // },
  // {
  //   question: "Can I showcase my project after the weekend?",
  //   answer: "Absolutely! You are free to do whatever you want with your project after the Hackathon! If you do showcase it on your portfolio on LinkedIn, we encourage you to mention you built it at the 2024 Code Network Winter Hackathon, but this is not a requirement."
  // },
  // {
  //   question: "Do I need to know how to code?",
  //   answer: "Absolutely not! While probably 80% of the work Hackathon teams do is in relation to coding, that is not a requirement to attend the Hackathon! In fact, we encourage those who don’t know how to code but have expertise in other areas, to attend, as everyone has their own unique skill sets that help make a more rounded team."
  // },
  // {
  //   question: "Do I need to know Git before the event?",
  //   answer: "We strongly recommend all participants to know how to use Git as a version control system for your code. This is an industry standard that you would come across a lot as a software developer and ensures that you are able to work on your code effectively with your teammates. If there is sufficient interest, we may run a Git workshop either before the event or on the first night."
  // },
  // {
  //   question: "What if I can't think of any project ideas beforehand?",
  //   answer: "That's absolutely normal! On the first night, you will have the opportunity to meet with other attendees who have their own project ideas, and if they are happy, you can join their team to build out a cool digital solution."
  // },
  // {
  //   question: "Do I need to provide my code to the organisers?",
  //   answer: "Yes. As part of making sure everyone is competing fairly and in line with the rules, we do require that all teams store their code in a shared codebase, such as on GitHub, and that a link to this is provided to the Executive Team when your team registers."
  // },
  // {
  //   question: "I still have questions! Where can I ask for answers?",
  //   answer: "If you have any questions at all, send us an email at hello@codenetwork.co. Alternatively, you can join our Discord server (link in the navigation bar) and pop your question in there. A friendly member of our team will then be happy to help!"
  // }
];
export default faqArray;
