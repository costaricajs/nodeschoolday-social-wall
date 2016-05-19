'use strict';

const util = require('./util');

const routes = [
  {
    method: 'GET',
    path: '/',
    config: {
      handler(request, reply){
        
        reply.view('./app/templates/index.pug',
          {
            participants:
            {
              "gaboesquivel": {
                "name": "Gabo Esquivel",
                "bio": "Software Developer and Consultant. Community leader and open source contributor. Organizer of tech meetups and NodeSchool mentor.",
                "website": "http://gaboesquivel.com",
                "email": "contact@gaboesquivel.com",
                "twitter": "gaboesquivel",
                "github": "gaboesquivel",
                "linkedin": "gaboesquivel",
                "ama": "https://github.com/gaboesquivel/ama"
              },
              "yeco": {
                "name": "Jasson Cascante",
                "bio": "Software Architect. Co-founder of Edify.",
                "website": "http://edify.cr",
                "email": "jasson.cascante@edify.cr",
                "twitter": "yeco",
                "github": "yeco",
                "linkedin": "whoisyeco?"
              },
              "brolag": {
                "name": "Alfredo Bonilla",
                "bio": "Full Stack Web Developer. Member of @costaricajs and @drupalcr. Bass player with @zeptosegundo. #JavaScript #Drupal",
                "website": "http://brolag.com",
                "email": "josebonillav@gmail.com",
                "twitter": "brolag",
                "github": "brolag",
                "linkedin": "brolag"
              },
              "kevinblanco": {
                "name": "Kevin Blanco",
                "bio": "JavaScript Enthusiast, Drupal Activist and Entrepreneur",
                "website": "http://kevinblanco.io",
                "email": "mail@kevinblanco.io",
                "twitter": "KevinBlancoZ",
                "github": "kevinblanco",
                "linkedin": "kevinblanco"
              },
              "jeanlescure": {
                "name": "Jean Lescure",
                "bio": "Full Stack Ninja, Organizer of Costa Rica Ruby Group, Founder of ReactWebMedia. #ReactJS #FullStack #NodeJS #Ruby",
                "website": "http://jeanlescure.io",
                "email": "jean@ticowebmedia.com",
                "twitter": "jeanlescure",
                "github": "jeanlescure",
                "linkedin": "jeanlescure"
              },
              "laurensortiz": {
                "name": "Laurens OB",
                "bio": "Full Stack Developer. JS lover - Founder of @lobcode.",
                "website": "http://lobcode.com",
                "email": "laurens.ortiz@gmail.com",
                "twitter": "laurensortiz",
                "github": "laurensortiz",
                "linkedin": "laurensortiz"
              },
              "jarias": {
                "name": "Julio Arias Carrillo",
                "bio": "Software Architect. Co-founder of Edify.",
                "website": "http://edify.cr",
                "email": "julio.arias@edify.cr",
                "twitter": "jarias01",
                "github": "jarias"
              },
              "rubenabix": {
                "name": "Rubén Abarca Navarro",
                "bio": "Full Stack Web Developer.",
                "website": "https://www.rubenabix.com/",
                "email": "rubenabix@gmail.com",
                "twitter": "rubenabix",
                "github": "rubenabix",
                "linkedin": "https://cr.linkedin.com/in/rubenabix"
              },
              "dmunguia": {
                "name": "Diego Munguía",
                "bio": "Arquitecto de Software y co-fundador en Edify; profesor de Ingeniería en Computación en TEC-SIUA.",
                "website": "http://edify.cr",
                "email": "diego.munguia@edify.cr",
                "twitter": "diegomunguia",
                "github": "dmunguia",
                "linkedin": "dmunguia"
              },
              "credondocr": {
                "name": "Cesar Redondo Arrieta",
                "bio": "Intermediate Back End Software Engineer at Edify",
                "website": "http://www.redondocr.com",
                "email": "cesar.redondo@edify.cr",
                "twitter": "credondocr",
                "github": "credondocr",
                "linkedin": "credondocr"
              },
              "avenidanet": {
                "name": "Brian Salazar",
                "bio": "Developer. Founder La404 & Co-founder Minerva",
                "website": "http://la404.com",
                "email": "brian@la404.com",
                "twitter": "avenidanet",
                "github": "avenidanet",
                "linkedin": "avenidanet"
              },
              "gmmendezp": {
                "name": "Martin Mendez",
                "bio": "Intermediate Software Developer at Edify",
                "website": "http://edify.cr",
                "email": "martin.mendez@edify.cr",
                "github": "gmmendezp",
                "twitter": "gmmendezp"
              },
              "ledezman": {
                "name": "Luis Ledezma",
                "bio": "Software Architect at Edify.",
                "website": "http://edify.cr",
                "email": "luis.ledezma@edify.cr",
                "github": "ledezman",
                "linkedin": "ledezman"
              },
              "quiaro": {
                "name": "David Quirós",
                "bio": "Senior Front End Developer at Edify",
                "twitter": "kiaro",
                "github": "quiaro",
                "linkedin": "https://cr.linkedin.com/in/quirosdavid"
              },
              "cmonge": {
                "name": "Carlos Monge",
                "bio": "Software Architect at Edify.",
                "website": "http://edify.cr",
                "email": "carlos.monge@edify.cr",
                "twitter": "cmonge",
                "github": "cmonge",
                "linkedin": "carlosmongea"
              },
              "carlosv": {
                "name": "Carlos Villalta",
                "bio": "Software Developer.",
                "website": "http://edify.cr",
                "email": "carlos.villalta@edify.cr",
                "twitter": "CarlosV89Edify",
                "github": "CarlosV89",
                "linkedin": "carlos-villalta-01794a50"
              },
              "argosbass": {
                "name": "Danny Mora",
                "bio": "Drupal Activist, PHP - JavaScript Developer and Entrepreneur",
                "website": "http://www.dannymr.com",
                "email": "argosbass@gmail.com",
                "twitter": "argosbass",
                "github": "argosbass"
              },
              "gelopfalcon": {
                "name": "Gerardo López Falcón",
                "bio": "Software Developer, Profesor de Informática y Multimedia UCR",
                "email": "gelopfalcon@gmail.com",
                "twitter": "gelopfalcon",
                "github": "gelopfalcon",
                "linkedin": "gerardo-lopez-70686057"
              },
              "jasancheg": {
                "name": "Toni - Jose Antonio Sanchez",
                "bio": "Software Developer, Full Stack Web Developer at 18Techs",
                "website": "http://inideaweb.com/",
                "email": "jasancheg@gmail.com",
                "twitter": "jasancheg",
                "github": "jasancheg"
              },
              "jmonterroso": {
                "name": "Jayson Monterroso",
                "bio": "Full Stack Web Developer.",
                "website": "http://jaysonmonterroso.com",
                "email": "jayson.monterroso@gmail.com",
                "twitter": "jayMonterroso",
                "github": "jmonterroso",
                "linkedin": "jmonterroso"
              },
              "jperez": {
                "name": "Javier Perez",
                "bio": "Software Architect. Co-founder of Edify.",
                "website": "http://edify.cr",
                "email": "javier.perez@edify.cr",
                "github": "javier-perez"
              },
              "esramru": {
                "name": "Esteban Ramirez R",
                "bio": "Back End Software Developer at Edify",
                "website": "http://edify.cr",
                "email": "esteban.ramirez@edify.cr",
                "twitter": "esramru",
                "github": "eramirezedify",
                "linkedin": "esteban-ramirez-23354475"
              },
              "msolano00": {
                "name": "Marvin Solano",
                "bio": "Web Developer",
                "website": "http://marvinsolano.io",
                "email": "msolano00@gmail.com.com",
                "twitter": "msolano00",
                "github": "msolano00",
                "linkedin": "marvinsolano"
              },
              "agarcia": {
                "name": "Andrés García",
                "bio": "Fullstack Developer at Gorilla Logic",
                "website": "http://gorillalogic.com",
                "email": "andresd.garciag@gmail.com",
                "github": "andrsgarc",
                "linkedin": "andrés-david-garcía-guzmán-a9800363"
              },
              "jonobral": {
                "name": "Jonathan Obregón",
                "bio": "Full Stack Web Developer at Gorilla Logic.",
                "website": "http://www.gorillalogic.com/",
                "email": "jonobral@gmail.com",
                "twitter": "jonobral",
                "github": "jonobral",
                "linkedin": "jonobral"
              }
            }
          });
      },
      tags: ['web'],
      validate: {}
    }
  },
  {
    method: 'GET',
    path: '/features/{path*}',
    handler: {
      directory: {
        path: './app/features',
        redirectToSlash: true
      }
    },
    config: {
      tags: ['web'],
      auth: false,
      validate: {
        query: {}
      }
    }
  },
  {
    method: 'GET',
    path: '/app/{path*}',
    handler: {
      directory: {
        path: './app',
        redirectToSlash: true
      }
    },
    config: {
      tags: ['web'],
      auth: false,
      validate: {
        query: {}
      }
    }
  },
  {
    method: 'GET',
    path: '/assets/{path*}',
    handler: {
      directory: {
        path: './assets',
        redirectToSlash: true
      }
    },
    config: {
      tags: ['web'],
      auth: false,
      validate: {
        query: {}
      }
    }
  }
];

module.exports = routes;
