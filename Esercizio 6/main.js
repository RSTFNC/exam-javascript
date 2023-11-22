const devTeam = {
    lead: {
    name: "Alice",
    skills: ["JavaScript", "React", "Node.js"]
    },
    testers: [
    { name: "Bob", skills: ["HTML", "CSS", "JavaScript"] },
    { name: "Charlie", skills: ["Python", "Django", "PostgreSQL"] }
    ],
    projectName: "WebApp"
   };

/* 1. L'espressione ha inserito in memoria 1 oggetto. 
   L'oggetto è:
    - devTeam (oggetto principale)*/

// 2. 
const teamLead = devTeam.lead;
teamLead.skills.push("GraphQL");

// 3. 
const devTeamCopy = { ...devTeam };
devTeamCopy.projectName = "MobileApp";

// 4. 
function createTester(name) {
  const skills = [];
  for (let i = 0; i < 3; i++) {
    const randomSkill = Math.floor(Math.random() * teamLead.skills.length);
    skills.push(teamLead.skills[randomSkill]);
  }
  const newTester = { name, skills };
  devTeamCopy.testers.push(newTester);
  return newTester;
}

// Nuovo tester
createTester("Hyur");

/*
5. Gli oggetti creati in memoria oltre a quelli iniziali sono questi 3:
   - teamLead (referenziato da teamLead)
   - devTeamCopy (copia di devTeam)
   - newTester (oggetto creato dalla funzione createTester)
*/

