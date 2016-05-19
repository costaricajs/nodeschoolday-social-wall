'use strict';

const carYearsFrom = 1960;

const constants = {
  brandsExpiration: 86400, // 1 day
  modelsExpiration: 86400, // 1 day
  vehiclesAPIBase: 'http://vpic.nhtsa.dot.gov/api/vehicles/',
  carYearsFrom: carYearsFrom,
  "brands": [
    {
      "id": 475,
      "name": "Acura",
      "value": "acura"
    },
    {
      "id": 493,
      "name": "Alfa Romeo",
      "value": "alfa romeo"
    },
    {
      "id": -1,
      "name": "ACM",
      "value": "acm"
    },
    {
      "id": -1,
      "name": "Aro",
      "value": "aro"
    },
    {
      "id": -1,
      "name": "Asia",
      "value": "asia"
    },
    {
      "id": 440,
      "name": "Aston Martin",
      "value": "aston martin"
    },
    {
      "id": 582,
      "name": "Audi",
      "value": "audi"
    },
    {
      "id": -1,
      "name": "Austin",
      "value": "austin"
    },
    {
      "id": 1488,
      "name": "Avanti",
      "value": "avanti"
    },
    {
      "id": 583,
      "name": "Bentley",
      "value": "bentley"
    },
    {
      "id": 505,
      "name": "Blue Bird",
      "value": "blue bird"
    },
    {
      "id": 452,
      "name": "BMW",
      "value": "bmw"
    },
    {
      "id": 468,
      "name": "Buick",
      "value": "buick"
    },
    {
      "id": 1104,
      "name": "BYD Auto",
      "value": "byd auto"
    },
    {
      "id": 469,
      "name": "Cadillac",
      "value": "cadillac"
    },
    {
      "id": -1,
      "name": "Chana",
      "value": "chana"
    },
    {
      "id": -1,
      "name": "Changan",
      "value": "changan"
    },
    {
      "id": -1,
      "name": "Chery",
      "value": "chery"
    },
    {
      "id": 467,
      "name": "Chevrolet",
      "value": "chevrolet"
    },
    {
      "id": 477,
      "name": "Chrysler",
      "value": "chrysler"
    },
    {
      "id": -1,
      "name": "Citroen",
      "value": "citroen"
    },
    {
      "id": -1,
      "name": "Dacia",
      "value": "dacia"
    },
    {
      "id": 1077,
      "name": "Daewoo",
      "value": "daewoo"
    },
    {
      "id": 847,
      "name": "Daihatsu",
      "value": "daihatsu"
    },
    {
      "id": -1,
      "name": "Datsun",
      "value": "datsun"
    },
    {
      "id": 476,
      "name": "Dodge/RAM",
      "value": "dodge/ram"
    },
    {
      "id": -1,
      "name": "Donfeng (ZNA)",
      "value": "donfeng (zna)"
    },
    {
      "id": 2408,
      "name": "Eagle",
      "value": "eagle"
    },
    {
      "id": -1,
      "name": "Faw",
      "value": "faw"
    },
    {
      "id": 603,
      "name": "Ferrari",
      "value": "ferrari"
    },
    {
      "id": 492,
      "name": "Fiat",
      "value": "fiat"
    },
    {
      "id": 460,
      "name": "Ford",
      "value": "ford"
    },
    {
      "id": -1,
      "name": "Foton",
      "value": "foton"
    },
    {
      "id": 450,
      "name": "Freightliner",
      "value": "freightliner"
    },
    {
      "id": 527,
      "name": "Geely",
      "value": "geely"
    },
    {
      "id": 1146,
      "name": "Geo",
      "value": "geo"
    },
    {
      "id": 472,
      "name": "GMC",
      "value": "gmc"
    },
    {
      "id": -1,
      "name": "Gonow",
      "value": "gonow"
    },
    {
      "id": -1,
      "name": "Great Wall",
      "value": "great wall"
    },
    {
      "id": -1,
      "name": "Hafei",
      "value": "hafei"
    },
    {
      "id": -1,
      "name": "Heibao",
      "value": "heibao"
    },
    {
      "id": -1,
      "name": "Higer",
      "value": "higer"
    },
    {
      "id": 514,
      "name": "Hino",
      "value": "hino"
    },
    {
      "id": 474,
      "name": "Honda",
      "value": "honda"
    },
    {
      "id": 951,
      "name": "Hummer ",
      "value": "hummer "
    },
    {
      "id": 498,
      "name": "Hyundai",
      "value": "hyundai"
    },
    {
      "id": -1,
      "name": "Infinity",
      "value": "infinity"
    },
    {
      "id": 526,
      "name": "International",
      "value": "international"
    },
    {
      "id": 542,
      "name": "Isuzu",
      "value": "isuzu"
    },
    {
      "id": -1,
      "name": "Iveco",
      "value": "iveco"
    },
    {
      "id": -1,
      "name": "JAC",
      "value": "jac"
    },
    {
      "id": 442,
      "name": "Jaguar",
      "value": "jaguar"
    },
    {
      "id": -1,
      "name": "Janbei",
      "value": "janbei"
    },
    {
      "id": 483,
      "name": "Jeep",
      "value": "jeep"
    },
    {
      "id": -1,
      "name": "JMC",
      "value": "jmc"
    },
    {
      "id": 532,
      "name": "Kenworth",
      "value": "kenworth"
    },
    {
      "id": 499,
      "name": "Kia",
      "value": "kia"
    },
    {
      "id": -1,
      "name": "Lada",
      "value": "lada"
    },
    {
      "id": 502,
      "name": "Lamborghini",
      "value": "lamborghini"
    },
    {
      "id": 497,
      "name": "Lancia",
      "value": "lancia"
    },
    {
      "id": 444,
      "name": "Land Rover",
      "value": "land rover"
    },
    {
      "id": 515,
      "name": "Lexus",
      "value": "lexus"
    },
    {
      "id": -1,
      "name": "Lifan",
      "value": "lifan"
    },
    {
      "id": 464,
      "name": "Lincoln",
      "value": "lincoln"
    },
    {
      "id": 466,
      "name": "Lotus",
      "value": "lotus"
    },
    {
      "id": 490,
      "name": "Mack",
      "value": "mack"
    },
    {
      "id": -1,
      "name": "Magiruz",
      "value": "magiruz"
    },
    {
      "id": -1,
      "name": "Mahindra",
      "value": "mahindra"
    },
    {
      "id": 443,
      "name": "Maserati",
      "value": "maserati"
    },
    {
      "id": 473,
      "name": "Mazda",
      "value": "mazda"
    },
    {
      "id": 449,
      "name": "Mercedes-Benz",
      "value": "mercedes-benz"
    },
    {
      "id": 465,
      "name": "Mercury",
      "value": "mercury"
    },
    {
      "id": -1,
      "name": "MG",
      "value": "mg"
    },
    {
      "id": -1,
      "name": "Mini",
      "value": "mini"
    },
    {
      "id": 481,
      "name": "Mitsubishi",
      "value": "mitsubishi"
    },
    {
      "id": 478,
      "name": "Nissan",
      "value": "nissan"
    },
    {
      "id": 4162,
      "name": "Oldsmobile",
      "value": "oldsmobile"
    },
    {
      "id": 471,
      "name": "Opel",
      "value": "opel"
    },
    {
      "id": 495,
      "name": "Peterbilt",
      "value": "peterbilt"
    },
    {
      "id": -1,
      "name": "Peugeot",
      "value": "peugeot"
    },
    {
      "id": 2409,
      "name": "Plymouth",
      "value": "plymouth"
    },
    {
      "id": -1,
      "name": "Polarsun",
      "value": "polarsun"
    },
    {
      "id": 536,
      "name": "Pontiac",
      "value": "pontiac"
    },
    {
      "id": 584,
      "name": "Porsche",
      "value": "porsche"
    },
    {
      "id": -1,
      "name": "Proton",
      "value": "proton"
    },
    {
      "id": -1,
      "name": "Rambler",
      "value": "rambler"
    },
    {
      "id": -1,
      "name": "Renault",
      "value": "renault"
    },
    {
      "id": -1,
      "name": "Rena",
      "value": "rena"
    },
    {
      "id": 445,
      "name": "Rolls Royce",
      "value": "rolls royce"
    },
    {
      "id": 444,
      "name": "Land Rover",
      "value": "land rover"
    },
    {
      "id": -1,
      "name": "Saab",
      "value": "saab"
    },
    {
      "id": -1,
      "name": "Samsung",
      "value": "samsung"
    },
    {
      "id": 1056,
      "name": "Saturn",
      "value": "saturn"
    },
    {
      "id": -1,
      "name": "Scania",
      "value": "scania"
    },
    {
      "id": -1,
      "name": "Scion",
      "value": "scion"
    },
    {
      "id": -1,
      "name": "Seat",
      "value": "seat"
    },
    {
      "id": -1,
      "name": "Skoda",
      "value": "skoda"
    },
    {
      "id": -1,
      "name": "Smart",
      "value": "smart"
    },
    {
      "id": -1,
      "name": "Smart",
      "value": "smart"
    },
    {
      "id": -1,
      "name": "Ssang Yong",
      "value": "ssang yong"
    },
    {
      "id": 523,
      "name": "Subaru",
      "value": "subaru"
    },
    {
      "id": 509,
      "name": "Suzuki",
      "value": "suzuki"
    },
    {
      "id": -1,
      "name": "Tianma",
      "value": "tianma"
    },
    {
      "id": 3492,
      "name": "Tiger Truck Manufacturing",
      "value": "tiger truck manufacturing"
    },
    {
      "id": 448,
      "name": "Toyota",
      "value": "toyota"
    },
    {
      "id": 482,
      "name": "Volkswagen",
      "value": "volkswagen"
    },
    {
      "id": 485,
      "name": "Volvo",
      "value": "volvo"
    },
    {
      "id": 4512,
      "name": "Western Star",
      "value": "western star"
    },
    {
      "id": -1,
      "name": "Yogo",
      "value": "yogo"
    }
  ]
};

module.exports = constants;
