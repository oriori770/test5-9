let militaryUnit = {
  name: "1st Infantry Division",

  location: "Fort Bragg, North Carolina, USA",

  establishmentDate: "1941-06-01",

  unitType: "Infantry Division",

  commandStructure: {
    commandingOfficer: {
      rank: "Major General",

      name: "John Doe",

      contact: {
        email: "john.doe@example.com",

        phone: "+1-555-123-4567",
      },
    },

    executiveOfficer: {
      rank: "Colonel",

      name: "Jane Smith",

      contact: {
        email: "jane.smith@example.com",

        phone: "+1-555-987-6543",
      },
    },

    chiefOfStaff: {
      rank: "Brigadier General",

      name: "Robert Brown",

      contact: {
        email: "robert.brown@example.com",

        phone: "+1-555-555-1234",
      },
    },
  },

  personnel: [
    {
      id: 1,

      name: "Private First Class Alice Johnson",

      rank: "Private First Class",

      role: "Rifleman",

      contact: {
        email: "alice.johnson@example.com",

        phone: "+1-555-000-1111",
      },
    },

    {
      id: 2,

      name: "Sergeant Michael White",

      rank: "Sergeant",

      role: "Squad Leader",

      contact: {
        email: "michael.white@example.com",

        phone: "+1-555-000-2222",
      },
    },
  ],

  equipment: {
    vehicles: [
      {
        type: "M1 Abrams Tank",

        quantity: 20,

        status: "Operational",
      },

      {
        type: "Humvee",

        quantity: 50,

        status: "Operational",
      },
    ],

    firearms: [
      {
        type: "M16 Rifle",

        quantity: 500,

        status: "Operational",
      },

      {
        type: "M249 SAW",

        quantity: 100,

        status: "Operational",
      },
    ],

    otherEquipment: [
      {
        type: "Night Vision Goggles",

        quantity: 150,

        status: "Operational",
      },

      {
        type: "Field Radios",

        quantity: 100,

        status: "Operational",
      },
    ],
  },

  missions: [
    {
      missionName: "Operation Desert Storm",

      startDate: "1991-01-17",

      endDate: "1991-02-28",

      description: "Combat operation to liberate Kuwait from Iraqi occupation.",
    },

    {
      missionName: "Operation Enduring Freedom",

      startDate: "2001-10-07",

      endDate: "2014-12-28",

      description:
        "Military operations aimed at dismantling al-Qaeda and removing the Taliban from power in Afghanistan.",
    },
  ],

  trainingPrograms: [
    {
      programName: "Basic Combat Training",

      duration: 10,

      focus:
        "Fundamentals of soldiering, physical conditioning, and basic combat skills.",
    },

    {
      programName: "Advanced Individual Training",

      duration: 12,

      focus:
        "Specialized training for specific military occupational specialties.",
    },
  ],

  history: [
    {
      eventDate: "1941-06-01",

      eventDescription: "Establishment of the 1st Infantry Division.",
    },

    {
      eventDate: "1944-06-06",

      eventDescription: "Participated in the D-Day landings in Normandy.",
    },
  ],

  currentDeployment: {
    location: "Middle East",

    mission: "Counter-terrorism operations",

    startDate: "2024-01-01",

    estimatedEndDate: "2024-12-31",
  },
};

function Mission1(myMilitaryUnit) 
{
    const chiefOfStaffDetails = myMilitaryUnit.commandStructure.chiefOfStaff
    const{rank, name, contact } = chiefOfStaffDetails
    return `rank: ${rank}, Name: ${name}, phone: ${contact.phone} `
}
function Mission2(myMilitaryUnit) 
{
  const totalNumberOfSoldiers = myMilitaryUnit.personnel.length
  return totalNumberOfSoldiers
}
function Mission3(myMilitaryUnit,NewDeployment) 
{
    myMilitaryUnit.history.push(myMilitaryUnit.currentDeployment)
    myMilitaryUnit.currentDeployment = NewDeployment;
    return myMilitaryUnit
}
function Mission4(myMilitaryUnit, FirearmObject) 
{
    let exists = false
    for (let i = 0; i < myMilitaryUnit.equipment.firearms.length; i++){
        if (myMilitaryUnit.equipment.firearms[i].type === FirearmObject.type && myMilitaryUnit.equipment.firearms[i].status ===FirearmObject.status) {
            myMilitaryUnit.equipment.firearms[i].quantity += FirearmObject.quantity
            exists = true
            break;
        }
    }
    if (!exists)  
        {
        myMilitaryUnit.equipment.firearms.push(FirearmObject)
    }
    return myMilitaryUnit;
}
function Mission5(myMilitaryUnit) 
{
    let totalWeeks = 0
    for (let i = 0; i < myMilitaryUnit.trainingPrograms.length; i++) 
        {
            totalWeeks += myMilitaryUnit.trainingPrograms[i].duration 
        }
    return totalWeeks
}
console.log(Mission1(militaryUnit),"chief Of Staff Details" ); // rank: Brigadier General, Name: Robert Brown, phone: +1-555 
console.log(`"${Mission2(militaryUnit)}" (str),Total Number of Soldiers` ); //Total number of Soldiers is 2
const NewDeployment = {
    location: "Holy Land",
    
    mission: "to bring the Messiah",
    
    startDate: "0000-01-01",
    
    estimatedEndDate: "2024-09-05",
};
console.log(Mission3(militaryUnit, NewDeployment),"Current Deployment Details" ); //location: Holy Land, mission..
const FirearmObject = {
    type: "Israeli Tabor",
    
    quantity: 770,
    
    status: "Operational writer",
}
console.log(Mission4(militaryUnit, FirearmObject),"Firearm Details" ); //type: Israeli
console.log(Mission5(militaryUnit),"The total number of weeks in training")// The total number of weeks in training is 22

console.log(module)

module.exports = {
  Mission1,
  Mission2,
  Mission3,
  Mission4,
  Mission5,
};
