type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Siddharth Upadhyay — Software Engineer Portfolio",
    fullName: "Siddharth Upadhyay",
    email: "sid.upadhyay.dev@mail.com",
  },
  hero: {
    name: "Siddharth Upadhyay",
    p: [
      "Crafting seamless digital experiences through",
      "scalable web applications, robust backend systems, and innovative solutions.",
    ],
  },
  contact: {
    p: "Let's Collaborate",
    h2: "Contact Me.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: {
        span: "Your Email",
        placeholder: "What's your email?",
      },
      message: {
        span: "Your Message",
        placeholder: "How can I assist you?",
      },
    },
  },
  sections: {
    about: {
      p: "About Me",
      h2: "Who I Am.",
      content: `I am a passionate software engineer with extensive experience in 
      building modern, high-performance applications. My expertise spans
      front-end frameworks like React and Angular, backend development with 
      Node.js, and cutting-edge cloud solutions using AWS and GCP. Beyond 
      solving technical challenges, I am deeply committed to delivering 
      scalable, secure, and maintainable code that drives exceptional user 
      experiences. Whether you're looking for a developer to bring a concept 
      to life or enhance an existing product, I’m ready to exceed expectations.`,
    },
    experience: {
      p: "My Journey",
      h2: "Professional Experience.",
    },
    feedbacks: {
      p: "What Clients Say",
      h2: "Testimonials.",
    },
    works: {
      p: "Portfolio",
      h2: "Selected Projects.",
      content: `Explore a curated collection of my work that demonstrates 
      my technical expertise and problem-solving abilities. Each project 
      reflects my commitment to quality, innovation, and delivering 
      exceptional value. Click through for live demos and code repositories.`,
    },
  },
};
