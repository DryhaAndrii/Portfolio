const iconPath = (file: string) => `/images/technologies/${file}`;
//Since I'm hosting the site on github pages there should be a path like this.
//If you run it locally, you need to change the link to this one
//const iconPath = (file: string) => `Portfolio/images/technologies/${file}`;

export const technologies = [
  { title: "CSS", svg: iconPath("css.svg") },
  { title: "Express.js", svg: iconPath("expressjs.svg") },
  { title: "GitHub", svg: iconPath("github.svg") },
  { title: "HTML", svg: iconPath("html.svg") },

  { title: "REST API", svg: iconPath("restapi.svg") },
  { title: "JavaScript", svg: iconPath("javasccript.svg") }, 
  { title: "Jotai", svg: iconPath("jotai.svg") },
  { title: "JWT", svg: iconPath("jwt.svg") },
  { title: "MongoDB", svg: iconPath("mongodb.svg") },
  { title: "Mongoose", svg: iconPath("mongoose.svg") },
  { title: "NestJS", svg: iconPath("nestjs.svg") },
  { title: "Next.js", svg: iconPath("nextJs.svg") },
  { title: "Node.js", svg: iconPath("nodejs.svg") },
  { title: "PostgreSQL", svg: iconPath("posgresql.svg") },
  { title: "React", svg: iconPath("react.svg") },
  { title: "Redux", svg: iconPath("redux.svg") },
  { title: "SCSS", svg: iconPath("scss.svg") },
  { title: "Tailwind", svg: iconPath("tailwind.svg") },
  { title: "TypeScript", svg: iconPath("typescript.svg") },
];
