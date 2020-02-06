const { Prisma } = require('../../src/generated/prisma-client')
const fs = require('fs')
const bcrypt = require('bcryptjs')


const db = new Prisma({
  endpoint: process.env.PRISMA_ENDPOINT
})


const users = [
  {
    email: "DorothyJAlfred@jourrapide.com",
    password: "testUser",
    first_name: "Dorothy",
    last_name: "Alfred",
    city: "Atlanta",
    state: "GA",
    image_url: "https://randomuser.me/api/portraits/lego/1.jpg"
  },

  {
    email: "MichaelMDewees@rhyta.com",
    password: "testUser",
    first_name: "Michael",
    last_name: "Dewees",
    city: "Venice",
    state: "FL",
    image_url: "https://randomuser.me/api/portraits/men/58.jpg"
  },
  {
    email: "NormanDAmes@teleworm.com",
    password: "testUser",
    first_name: "Norman",
    last_name: "Ames",
    city: "Camden",
    state: "NJ",
    image_url: "https://randomuser.me/api/portraits/men/18.jpg"
  },
  {
    email: "EuniceATodd@teleworm.us",
    password: "testUser",
    first_name: "Eunice ",
    last_name: "Todd",
    city: "Kingman",
    state: "AZ",
    image_url: "https://randomuser.me/api/portraits/men/28.jpg"
  },
  {
    email: "PatrickNWolverton@jourrapide.com",
    password: "testUser",
    first_name: "Wolverton",
    last_name: "Patrick",
    city: "Topeka",
    state: "KS",
    image_url: "https://randomuser.me/api/portraits/lego/2.jpg"
  },



  {
    email: "RenitaTSmith.com",
    password: "testUser",
    first_name: "Renita",
    last_name: "Smith",
    city: "Savannah",
    state: "GA",
    image_url: "https://randomuser.me/api/portraits/lego/10.jpg"
  },



  {
    email: "KellyEZabala@armyspy.com",
    password: "testUser",
    first_name: "Kelly",
    last_name: "Zabala",
    city: "Chico",
    state: "CA",
    image_url: "https://randomuser.me/api/portraits/lego/6.jpg"
  },



  {
    email: "QuincySMurray@rhyta.com",
    password: "testUser",
    first_name: "Quincy",
    last_name: "Murray",
    city: "Alma",
    state: "MO",
    image_url: "https://randomuser.me/api/portraits/lego/10.jpg"
  },



  {
    email: "MargaretJGarcia@rhyta.com",
    password: "testUser",
    first_name: "Margaret",
    last_name: "Garcia",
    city: "Lebanon",
    state: "TN",
    image_url: "https://randomuser.me/api/portraits/women/78.jpg"
  },



  {
    email: "RoertDevries@jourapide.com",
    password: "testUser",
    first_name: "Robert",
    last_name: "Devries",
    city: "New York",
    state: "NY",
    image_url: "https://randomuser.me/api/portraits/men/54.jpg"
  },


  {
    email: "SuzanneKEmory@armyspy.com",
    password: "testUser",
    first_name: "Suzanne",
    last_name: "Emory",
    city: "Rockford",
    state: "MI",
    image_url: "https://randomuser.me/api/portraits/women/22.jpg"
  },



  {
    email: "VictoriaWWilk@dayrep.com",
    password: "testUser",
    first_name: "Victoria",
    last_name: "Wilkinson",
    city: "Richmond",
    state: "VA",
    image_url: "https://randomuser.me/api/portraits/women/33.jpg"
  },



  {
    email: "LionelJPhillips@rhyta.com",
    password: "testUser",
    first_name: "Lionel",
    last_name: "Phillips",
    city: "Orlando",
    state: "FL",
    image_url: "https://randomuser.me/api/portraits/lego/4.jpg"
  },



  {
    email: "DarylBNorton@teleworm.us",
    password: "testUser",
    first_name: "Daryl",
    last_name: "Norton",
    city: "Florence",
    state: "SC",
    image_url: "https://randomuser.me/api/portraits/men/39.jpg"
  },



  {
    email: "CynthiaADysart@teleworm.us",
    password: "testUser",
    first_name: "Cynthia",
    last_name: "Dysart",
    city: "Seattle",
    state: "WA",
    image_url: "https://randomuser.me/api/portraits/lego/7.jpg"
  },


  {
    email: "CraigKPetti@rhyta.com",
    password: "testUser",
    first_name: "Craig",
    last_name: "Petti",
    city: "Louisville",
    state: "KY",
    image_url: "https://randomuser.me/api/portraits/men/8.jpg"
  },



  {
    email: "ChristianAHowell@teleworm.us",
    password: "testUser",
    first_name: "Christian",
    last_name: "Howell",
    city: "West Union",
    state: "WV",
    image_url: "https://randomuser.me/api/portraits/men/33.jpg"
  },



  {
    email: "EdwardAsimon@dayrep.com",
    password: "testUser",
    first_name: "Edward",
    last_name: "Simon",
    city: "Hickory Hills",
    state: "IL",
    image_url: "https://randomuser.me/api/portraits/men/11.jpg"
  },



  {
    email: "TiffanyAClatterbuck@jourrapide.com",
    password: "testUser",
    first_name: "Tiffany",
    last_name: "Clatterbuck",
    city: "Portland",
    state: "OR",
    image_url: "https://randomuser.me/api/portraits/women/23.jpg"
  },



  {
    email: "NormanMMarvin@armyspy.com",
    password: "testUser",
    first_name: "Norman",
    last_name: "Marvin",
    city: "Blanchardville",
    state: "WI",
    image_url: "https://randomuser.me/api/portraits/men/12.jpg"
  },



  {
    email: "TereasaMReina@dayrep.com",
    password: "testUser",
    first_name: "Teresa",
    last_name: "Reina",
    city: "Washington",
    state: "DC",
    image_url: "https://randomuser.me/api/portraits/women/43.jpg"
  },



  {
    email: "KellySHargrove@rhyta.com",
    password: "testUser",
    first_name: "Kelly",
    last_name: "Hargrove",
    city: "Austin",
    state: "TX",
    image_url: "https://randomuser.me/api/portraits/women/32.jpg"
  },



  {
    email: "EileenNAnderson@armyspy.com",
    password: "testUser",
    first_name: "Eileen",
    last_name: "Anderson",
    city: "Michigan City",
    state: "IN",
    image_url: "https://randomuser.me/api/portraits/lego/2.jpg"
  },


  {
    email: "TheresaDBobbitt@rhyta.com",
    password: "testUser",
    first_name: "Theresa",
    last_name: "Bobbit",
    city: "Cambridge",
    state: "MA",
    image_url: "https://randomuser.me/api/portraits/women/31.jpg"
  },



  {
    email: "MavisGotThis@dayrep.com",
    password: "testUser",
    first_name: "Mavis",
    last_name: "Lucius",
    city: "San Antonio",
    state: "TX",
    image_url: "https://randomuser.me/api/portraits/women/34.jpg"
  },


  {
    email: "GilbertIAnderson@dayrep.com",
    password: "testUser",
    first_name: "Gilbert",
    last_name: "Anderson",
    city: "Goleta",
    state: "GA",
    image_url: "https://randomuser.me/api/portraits/women/28.jpg"
  },


  {
    email: "KathyDBridges@teleworm.com",
    password: "testUser",
    first_name: "Kathy",
    last_name: "Bridges",
    city: "Johnson City",
    state: "TN",
    image_url: "https://randomuser.me/api/portraits/women/39.jpg"
  },



  {
    email: "ToddHannaIsMe@sweet.com",
    password: "testUser",
    first_name: "Todd",
    last_name: "Hanna",
    city: "Bremen",
    state: "GA",
    image_url: "https://randomuser.me/api/portraits/women/47.jpg"
  },

]



const addUser = async (user) => {
  user.password = bcrypt.hashSync(user.password, 10)
  console.log(`Adding ${user.first_name} ${user.last_name} to db`, user)

  return await db.createUser(user)
}


const submitUsers = (users) => {
  users.map(user => {
    addUser(user)
  })
}


submitUsers(users);
