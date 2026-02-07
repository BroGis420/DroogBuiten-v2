// Featured cities for homepage display (6 largest)
export const dutchCities = [
  { name: "Amsterdam", slug: "amsterdam", lat: 52.3676, lon: 4.9041 },
  { name: "Rotterdam", slug: "rotterdam", lat: 51.9225, lon: 4.4792 },
  { name: "Utrecht", slug: "utrecht", lat: 52.0907, lon: 5.1214 },
  { name: "Den Haag", slug: "den-haag", lat: 52.0705, lon: 4.3007 },
  { name: "Eindhoven", slug: "eindhoven", lat: 51.4416, lon: 5.4697 },
  { name: "Groningen", slug: "groningen", lat: 53.2194, lon: 6.5665 },
];

// Complete list of Dutch municipalities and places (150+)
export const allDutchPlaces = [
  // Featured cities
  { name: "Amsterdam", slug: "amsterdam", lat: 52.3676, lon: 4.9041, province: "Noord-Holland" },
  { name: "Rotterdam", slug: "rotterdam", lat: 51.9225, lon: 4.4792, province: "Zuid-Holland" },
  { name: "Utrecht", slug: "utrecht", lat: 52.0907, lon: 5.1214, province: "Utrecht" },
  { name: "Den Haag", slug: "den-haag", lat: 52.0705, lon: 4.3007, province: "Zuid-Holland" },
  { name: "Eindhoven", slug: "eindhoven", lat: 51.4416, lon: 5.4697, province: "Noord-Brabant" },
  { name: "Groningen", slug: "groningen", lat: 53.2194, lon: 6.5665, province: "Groningen" },

  // Noord-Holland
  { name: "Haarlem", slug: "haarlem", lat: 52.3874, lon: 4.6462, province: "Noord-Holland" },
  { name: "Zaanstad", slug: "zaanstad", lat: 52.4579, lon: 4.8125, province: "Noord-Holland" },
  { name: "Haarlemmermeer", slug: "haarlemmermeer", lat: 52.3025, lon: 4.6918, province: "Noord-Holland" },
  { name: "Almere", slug: "almere", lat: 52.3508, lon: 5.2647, province: "Flevoland" },
  { name: "Amstelveen", slug: "amstelveen", lat: 52.3114, lon: 4.8728, province: "Noord-Holland" },
  { name: "Purmerend", slug: "purmerend", lat: 52.5050, lon: 4.9597, province: "Noord-Holland" },
  { name: "Hoorn", slug: "hoorn", lat: 52.6424, lon: 5.0594, province: "Noord-Holland" },
  { name: "Alkmaar", slug: "alkmaar", lat: 52.6324, lon: 4.7534, province: "Noord-Holland" },
  { name: "Hilversum", slug: "hilversum", lat: 52.2292, lon: 5.1669, province: "Noord-Holland" },
  { name: "Den Helder", slug: "den-helder", lat: 52.9533, lon: 4.7608, province: "Noord-Holland" },
  { name: "Heerhugowaard", slug: "heerhugowaard", lat: 52.6657, lon: 4.8325, province: "Noord-Holland" },
  { name: "Enkhuizen", slug: "enkhuizen", lat: 52.7053, lon: 5.2928, province: "Noord-Holland" },
  { name: "Edam-Volendam", slug: "edam-volendam", lat: 52.5085, lon: 5.0477, province: "Noord-Holland" },
  { name: "Heemskerk", slug: "heemskerk", lat: 52.5112, lon: 4.6689, province: "Noord-Holland" },
  { name: "Beverwijk", slug: "beverwijk", lat: 52.4831, lon: 4.6567, province: "Noord-Holland" },
  { name: "Castricum", slug: "castricum", lat: 52.5457, lon: 4.6611, province: "Noord-Holland" },
  { name: "Bergen", slug: "bergen-nh", lat: 52.6697, lon: 4.7050, province: "Noord-Holland" },
  { name: "Schagen", slug: "schagen", lat: 52.7875, lon: 4.7978, province: "Noord-Holland" },
  { name: "Texel", slug: "texel", lat: 53.0548, lon: 4.7989, province: "Noord-Holland" },
  { name: "Medemblik", slug: "medemblik", lat: 52.7717, lon: 5.1067, province: "Noord-Holland" },
  { name: "Uithoorn", slug: "uithoorn", lat: 52.2383, lon: 4.8264, province: "Noord-Holland" },
  { name: "Diemen", slug: "diemen", lat: 52.3394, lon: 4.9600, province: "Noord-Holland" },
  { name: "Aalsmeer", slug: "aalsmeer", lat: 52.2594, lon: 4.7617, province: "Noord-Holland" },
  { name: "Velsen", slug: "velsen", lat: 52.4628, lon: 4.6225, province: "Noord-Holland" },
  { name: "Weesp", slug: "weesp", lat: 52.3072, lon: 5.0417, province: "Noord-Holland" },

  // Zuid-Holland
  { name: "Leiden", slug: "leiden", lat: 52.1601, lon: 4.4970, province: "Zuid-Holland" },
  { name: "Dordrecht", slug: "dordrecht", lat: 51.8133, lon: 4.6901, province: "Zuid-Holland" },
  { name: "Zoetermeer", slug: "zoetermeer", lat: 52.0575, lon: 4.4931, province: "Zuid-Holland" },
  { name: "Delft", slug: "delft", lat: 52.0116, lon: 4.3571, province: "Zuid-Holland" },
  { name: "Schiedam", slug: "schiedam", lat: 51.9225, lon: 4.3889, province: "Zuid-Holland" },
  { name: "Spijkenisse", slug: "spijkenisse", lat: 51.8450, lon: 4.3289, province: "Zuid-Holland" },
  { name: "Vlaardingen", slug: "vlaardingen", lat: 51.9125, lon: 4.3419, province: "Zuid-Holland" },
  { name: "Gouda", slug: "gouda", lat: 52.0115, lon: 4.7104, province: "Zuid-Holland" },
  { name: "Alphen aan den Rijn", slug: "alphen-aan-den-rijn", lat: 52.1292, lon: 4.6576, province: "Zuid-Holland" },
  { name: "Capelle aan den IJssel", slug: "capelle-aan-den-ijssel", lat: 51.9292, lon: 4.5778, province: "Zuid-Holland" },
  { name: "Ridderkerk", slug: "ridderkerk", lat: 51.8728, lon: 4.6008, province: "Zuid-Holland" },
  { name: "Katwijk", slug: "katwijk", lat: 52.2006, lon: 4.4178, province: "Zuid-Holland" },
  { name: "Leidschendam-Voorburg", slug: "leidschendam-voorburg", lat: 52.0794, lon: 4.3953, province: "Zuid-Holland" },
  { name: "Rijswijk", slug: "rijswijk", lat: 52.0358, lon: 4.3239, province: "Zuid-Holland" },
  { name: "Waddinxveen", slug: "waddinxveen", lat: 52.0436, lon: 4.6500, province: "Zuid-Holland" },
  { name: "Papendrecht", slug: "papendrecht", lat: 51.8311, lon: 4.6867, province: "Zuid-Holland" },
  { name: "Sliedrecht", slug: "sliedrecht", lat: 51.8233, lon: 4.7711, province: "Zuid-Holland" },
  { name: "Gorinchem", slug: "gorinchem", lat: 51.8353, lon: 4.9733, province: "Zuid-Holland" },
  { name: "Hellevoetsluis", slug: "hellevoetsluis", lat: 51.8333, lon: 4.1333, province: "Zuid-Holland" },
  { name: "Westland", slug: "westland", lat: 52.0250, lon: 4.2125, province: "Zuid-Holland" },
  { name: "Lisse", slug: "lisse", lat: 52.2583, lon: 4.5567, province: "Zuid-Holland" },
  { name: "Noordwijk", slug: "noordwijk", lat: 52.2392, lon: 4.4431, province: "Zuid-Holland" },
  { name: "Oegstgeest", slug: "oegstgeest", lat: 52.1800, lon: 4.4669, province: "Zuid-Holland" },
  { name: "Voorschoten", slug: "voorschoten", lat: 52.1275, lon: 4.4506, province: "Zuid-Holland" },
  { name: "Wassenaar", slug: "wassenaar", lat: 52.1450, lon: 4.4014, province: "Zuid-Holland" },
  { name: "Pijnacker-Nootdorp", slug: "pijnacker-nootdorp", lat: 52.0167, lon: 4.4167, province: "Zuid-Holland" },

  // Noord-Brabant
  { name: "Tilburg", slug: "tilburg", lat: 51.5555, lon: 5.0913, province: "Noord-Brabant" },
  { name: "Breda", slug: "breda", lat: 51.5719, lon: 4.7683, province: "Noord-Brabant" },
  { name: "'s-Hertogenbosch", slug: "s-hertogenbosch", lat: 51.6978, lon: 5.3037, province: "Noord-Brabant" },
  { name: "Helmond", slug: "helmond", lat: 51.4817, lon: 5.6613, province: "Noord-Brabant" },
  { name: "Oss", slug: "oss", lat: 51.7650, lon: 5.5183, province: "Noord-Brabant" },
  { name: "Roosendaal", slug: "roosendaal", lat: 51.5308, lon: 4.4653, province: "Noord-Brabant" },
  { name: "Bergen op Zoom", slug: "bergen-op-zoom", lat: 51.4950, lon: 4.2900, province: "Noord-Brabant" },
  { name: "Waalwijk", slug: "waalwijk", lat: 51.6847, lon: 5.0714, province: "Noord-Brabant" },
  { name: "Veghel", slug: "veghel", lat: 51.6167, lon: 5.5500, province: "Noord-Brabant" },
  { name: "Uden", slug: "uden", lat: 51.6600, lon: 5.6200, province: "Noord-Brabant" },
  { name: "Veldhoven", slug: "veldhoven", lat: 51.4211, lon: 5.4069, province: "Noord-Brabant" },
  { name: "Best", slug: "best", lat: 51.5094, lon: 5.3931, province: "Noord-Brabant" },
  { name: "Boxtel", slug: "boxtel", lat: 51.5906, lon: 5.3283, province: "Noord-Brabant" },
  { name: "Dongen", slug: "dongen", lat: 51.6275, lon: 4.9392, province: "Noord-Brabant" },
  { name: "Oosterhout", slug: "oosterhout", lat: 51.6433, lon: 4.8617, province: "Noord-Brabant" },
  { name: "Etten-Leur", slug: "etten-leur", lat: 51.5736, lon: 4.6364, province: "Noord-Brabant" },
  { name: "Cuijk", slug: "cuijk", lat: 51.7275, lon: 5.8789, province: "Noord-Brabant" },
  { name: "Valkenswaard", slug: "valkenswaard", lat: 51.3506, lon: 5.4600, province: "Noord-Brabant" },
  { name: "Geldrop-Mierlo", slug: "geldrop-mierlo", lat: 51.4211, lon: 5.5556, province: "Noord-Brabant" },
  { name: "Nuenen", slug: "nuenen", lat: 51.4731, lon: 5.5472, province: "Noord-Brabant" },

  // Gelderland
  { name: "Arnhem", slug: "arnhem", lat: 51.9851, lon: 5.8987, province: "Gelderland" },
  { name: "Nijmegen", slug: "nijmegen", lat: 51.8426, lon: 5.8545, province: "Gelderland" },
  { name: "Apeldoorn", slug: "apeldoorn", lat: 52.2112, lon: 5.9699, province: "Gelderland" },
  { name: "Ede", slug: "ede", lat: 52.0480, lon: 5.6687, province: "Gelderland" },
  { name: "Doetinchem", slug: "doetinchem", lat: 51.9650, lon: 6.2883, province: "Gelderland" },
  { name: "Harderwijk", slug: "harderwijk", lat: 52.3428, lon: 5.6197, province: "Gelderland" },
  { name: "Wageningen", slug: "wageningen", lat: 51.9692, lon: 5.6653, province: "Gelderland" },
  { name: "Tiel", slug: "tiel", lat: 51.8878, lon: 5.4317, province: "Gelderland" },
  { name: "Zutphen", slug: "zutphen", lat: 52.1383, lon: 6.2000, province: "Gelderland" },
  { name: "Zevenaar", slug: "zevenaar", lat: 51.9300, lon: 6.0736, province: "Gelderland" },
  { name: "Winterswijk", slug: "winterswijk", lat: 51.9708, lon: 6.7200, province: "Gelderland" },
  { name: "Barneveld", slug: "barneveld", lat: 52.1400, lon: 5.5842, province: "Gelderland" },
  { name: "Culemborg", slug: "culemborg", lat: 51.9556, lon: 5.2278, province: "Gelderland" },
  { name: "Nunspeet", slug: "nunspeet", lat: 52.3767, lon: 5.7850, province: "Gelderland" },
  { name: "Elburg", slug: "elburg", lat: 52.4467, lon: 5.8333, province: "Gelderland" },
  { name: "Ermelo", slug: "ermelo", lat: 52.2997, lon: 5.6211, province: "Gelderland" },
  { name: "Putten", slug: "putten", lat: 52.2578, lon: 5.6033, province: "Gelderland" },
  { name: "Rheden", slug: "rheden", lat: 52.0150, lon: 6.0392, province: "Gelderland" },
  { name: "Lochem", slug: "lochem", lat: 52.1617, lon: 6.4150, province: "Gelderland" },
  { name: "Berkelland", slug: "berkelland", lat: 52.1000, lon: 6.5833, province: "Gelderland" },

  // Overijssel
  { name: "Zwolle", slug: "zwolle", lat: 52.5168, lon: 6.0830, province: "Overijssel" },
  { name: "Enschede", slug: "enschede", lat: 52.2215, lon: 6.8937, province: "Overijssel" },
  { name: "Deventer", slug: "deventer", lat: 52.2549, lon: 6.1630, province: "Overijssel" },
  { name: "Almelo", slug: "almelo", lat: 52.3567, lon: 6.6625, province: "Overijssel" },
  { name: "Hengelo", slug: "hengelo", lat: 52.2656, lon: 6.7931, province: "Overijssel" },
  { name: "Kampen", slug: "kampen", lat: 52.5550, lon: 5.9117, province: "Overijssel" },
  { name: "Oldenzaal", slug: "oldenzaal", lat: 52.3133, lon: 6.9294, province: "Overijssel" },
  { name: "Raalte", slug: "raalte", lat: 52.3872, lon: 6.2750, province: "Overijssel" },
  { name: "Rijssen-Holten", slug: "rijssen-holten", lat: 52.3061, lon: 6.5178, province: "Overijssel" },
  { name: "Hardenberg", slug: "hardenberg", lat: 52.5750, lon: 6.6167, province: "Overijssel" },
  { name: "Staphorst", slug: "staphorst", lat: 52.6450, lon: 6.2083, province: "Overijssel" },
  { name: "Ommen", slug: "ommen", lat: 52.5242, lon: 6.4247, province: "Overijssel" },
  { name: "Dalfsen", slug: "dalfsen", lat: 52.5047, lon: 6.2542, province: "Overijssel" },
  { name: "Steenwijkerland", slug: "steenwijkerland", lat: 52.7833, lon: 6.0667, province: "Overijssel" },
  { name: "Wierden", slug: "wierden", lat: 52.3578, lon: 6.5939, province: "Overijssel" },
  { name: "Hellendoorn", slug: "hellendoorn", lat: 52.3942, lon: 6.4486, province: "Overijssel" },

  // Limburg
  { name: "Maastricht", slug: "maastricht", lat: 50.8514, lon: 5.6910, province: "Limburg" },
  { name: "Venlo", slug: "venlo", lat: 51.3704, lon: 6.1724, province: "Limburg" },
  { name: "Heerlen", slug: "heerlen", lat: 50.8882, lon: 5.9794, province: "Limburg" },
  { name: "Sittard-Geleen", slug: "sittard-geleen", lat: 51.0021, lon: 5.8658, province: "Limburg" },
  { name: "Roermond", slug: "roermond", lat: 51.1944, lon: 5.9872, province: "Limburg" },
  { name: "Weert", slug: "weert", lat: 51.2517, lon: 5.7067, province: "Limburg" },
  { name: "Kerkrade", slug: "kerkrade", lat: 50.8658, lon: 6.0625, province: "Limburg" },
  { name: "Landgraaf", slug: "landgraaf", lat: 50.8958, lon: 6.0250, province: "Limburg" },
  { name: "Brunssum", slug: "brunssum", lat: 50.9456, lon: 5.9711, province: "Limburg" },
  { name: "Valkenburg", slug: "valkenburg", lat: 50.8653, lon: 5.8317, province: "Limburg" },
  { name: "Venray", slug: "venray", lat: 51.5250, lon: 5.9750, province: "Limburg" },
  { name: "Echt-Susteren", slug: "echt-susteren", lat: 51.1042, lon: 5.8750, province: "Limburg" },
  { name: "Gulpen-Wittem", slug: "gulpen-wittem", lat: 50.8167, lon: 5.8833, province: "Limburg" },
  { name: "Vaals", slug: "vaals", lat: 50.7703, lon: 6.0175, province: "Limburg" },
  { name: "Beek", slug: "beek", lat: 50.9417, lon: 5.7958, province: "Limburg" },

  // Friesland
  { name: "Leeuwarden", slug: "leeuwarden", lat: 53.2014, lon: 5.8086, province: "Friesland" },
  { name: "Heerenveen", slug: "heerenveen", lat: 52.9597, lon: 5.9247, province: "Friesland" },
  { name: "Drachten", slug: "drachten", lat: 53.1117, lon: 6.0956, province: "Friesland" },
  { name: "Sneek", slug: "sneek", lat: 53.0325, lon: 5.6606, province: "Friesland" },
  { name: "Harlingen", slug: "harlingen", lat: 53.1742, lon: 5.4142, province: "Friesland" },
  { name: "Franeker", slug: "franeker", lat: 53.1867, lon: 5.5406, province: "Friesland" },
  { name: "Bolsward", slug: "bolsward", lat: 53.0608, lon: 5.5275, province: "Friesland" },
  { name: "Dokkum", slug: "dokkum", lat: 53.3267, lon: 5.9992, province: "Friesland" },
  { name: "Joure", slug: "joure", lat: 52.9639, lon: 5.8039, province: "Friesland" },
  { name: "Wolvega", slug: "wolvega", lat: 52.8750, lon: 5.9917, province: "Friesland" },
  { name: "Lemmer", slug: "lemmer", lat: 52.8444, lon: 5.7094, province: "Friesland" },
  { name: "Balk", slug: "balk", lat: 52.9000, lon: 5.5833, province: "Friesland" },

  // Drenthe
  { name: "Assen", slug: "assen", lat: 52.9925, lon: 6.5625, province: "Drenthe" },
  { name: "Emmen", slug: "emmen", lat: 52.7792, lon: 6.9011, province: "Drenthe" },
  { name: "Hoogeveen", slug: "hoogeveen", lat: 52.7239, lon: 6.4778, province: "Drenthe" },
  { name: "Meppel", slug: "meppel", lat: 52.6958, lon: 6.1944, province: "Drenthe" },
  { name: "Coevorden", slug: "coevorden", lat: 52.6617, lon: 6.7400, province: "Drenthe" },
  { name: "Beilen", slug: "beilen", lat: 52.8583, lon: 6.5167, province: "Drenthe" },
  { name: "Roden", slug: "roden", lat: 53.1375, lon: 6.4292, province: "Drenthe" },
  { name: "Borger", slug: "borger", lat: 52.9250, lon: 6.7917, province: "Drenthe" },
  { name: "Westerbork", slug: "westerbork", lat: 52.8500, lon: 6.6000, province: "Drenthe" },

  // Provincie Groningen
  { name: "Winschoten", slug: "winschoten", lat: 53.1444, lon: 7.0347, province: "Groningen" },
  { name: "Veendam", slug: "veendam", lat: 53.1064, lon: 6.8789, province: "Groningen" },
  { name: "Stadskanaal", slug: "stadskanaal", lat: 52.9892, lon: 6.9539, province: "Groningen" },
  { name: "Hoogezand", slug: "hoogezand", lat: 53.1617, lon: 6.7583, province: "Groningen" },
  { name: "Delfzijl", slug: "delfzijl", lat: 53.3294, lon: 6.9181, province: "Groningen" },
  { name: "Appingedam", slug: "appingedam", lat: 53.3208, lon: 6.8569, province: "Groningen" },
  { name: "Leek", slug: "leek", lat: 53.1617, lon: 6.3750, province: "Groningen" },

  // Zeeland
  { name: "Middelburg", slug: "middelburg", lat: 51.4988, lon: 3.6136, province: "Zeeland" },
  { name: "Vlissingen", slug: "vlissingen", lat: 51.4425, lon: 3.5708, province: "Zeeland" },
  { name: "Goes", slug: "goes", lat: 51.5033, lon: 3.8889, province: "Zeeland" },
  { name: "Terneuzen", slug: "terneuzen", lat: 51.3356, lon: 3.8275, province: "Zeeland" },
  { name: "Hulst", slug: "hulst", lat: 51.2792, lon: 4.0528, province: "Zeeland" },
  { name: "Zierikzee", slug: "zierikzee", lat: 51.6500, lon: 3.9167, province: "Zeeland" },
  { name: "Domburg", slug: "domburg", lat: 51.5636, lon: 3.4983, province: "Zeeland" },
  { name: "Renesse", slug: "renesse", lat: 51.7333, lon: 3.7833, province: "Zeeland" },

  // Flevoland
  { name: "Lelystad", slug: "lelystad", lat: 52.5185, lon: 5.4714, province: "Flevoland" },
  { name: "Dronten", slug: "dronten", lat: 52.5250, lon: 5.7167, province: "Flevoland" },
  { name: "Zeewolde", slug: "zeewolde", lat: 52.3306, lon: 5.5392, province: "Flevoland" },
  { name: "Emmeloord", slug: "emmeloord", lat: 52.7106, lon: 5.7489, province: "Flevoland" },
  { name: "Urk", slug: "urk", lat: 52.6628, lon: 5.6028, province: "Flevoland" },

  // Provincie Utrecht
  { name: "Amersfoort", slug: "amersfoort", lat: 52.1561, lon: 5.3878, province: "Utrecht" },
  { name: "Nieuwegein", slug: "nieuwegein", lat: 52.0300, lon: 5.0833, province: "Utrecht" },
  { name: "Veenendaal", slug: "veenendaal", lat: 52.0244, lon: 5.5583, province: "Utrecht" },
  { name: "Zeist", slug: "zeist", lat: 52.0897, lon: 5.2311, province: "Utrecht" },
  { name: "Houten", slug: "houten", lat: 52.0289, lon: 5.1681, province: "Utrecht" },
  { name: "Woerden", slug: "woerden", lat: 52.0853, lon: 4.8833, province: "Utrecht" },
  { name: "IJsselstein", slug: "ijsselstein", lat: 52.0197, lon: 5.0436, province: "Utrecht" },
  { name: "Bilthoven", slug: "bilthoven", lat: 52.1283, lon: 5.2000, province: "Utrecht" },
  { name: "De Bilt", slug: "de-bilt", lat: 52.1092, lon: 5.1806, province: "Utrecht" },
  { name: "Soest", slug: "soest", lat: 52.1742, lon: 5.2936, province: "Utrecht" },
  { name: "Baarn", slug: "baarn", lat: 52.2117, lon: 5.2875, province: "Utrecht" },
  { name: "Bunschoten-Spakenburg", slug: "bunschoten-spakenburg", lat: 52.2458, lon: 5.3722, province: "Utrecht" },
  { name: "Maarssen", slug: "maarssen", lat: 52.1375, lon: 5.0417, province: "Utrecht" },
  { name: "Leersum", slug: "leersum", lat: 52.0167, lon: 5.4333, province: "Utrecht" },
  { name: "Doorn", slug: "doorn", lat: 52.0333, lon: 5.3500, province: "Utrecht" },
  { name: "Wijk bij Duurstede", slug: "wijk-bij-duurstede", lat: 51.9750, lon: 5.3333, province: "Utrecht" },
  { name: "Breukelen", slug: "breukelen", lat: 52.1750, lon: 5.0000, province: "Utrecht" },
  { name: "Vianen", slug: "vianen", lat: 51.9917, lon: 5.0917, province: "Utrecht" },
];

export interface HourlyForecast {
  time: string;
  temperature: number;
  humidity: number;
  windSpeed: number;
  precipitation: number;
  cloudCover: number;
  uvIndex: number;
  dryingScore: number;
  isDayTime: boolean;
}

export interface WeatherData {
  city: string;
  current: {
    temperature: number;
    humidity: number;
    windSpeed: number;
    precipitation: number;
    cloudCover: number;
    uvIndex: number;
    weatherCode: number;
    isDayTime: boolean;
  };
  hourly: HourlyForecast[];
  dryingScore: number;
  recommendation: string;
}

// Calculate drying score based on weather conditions (0-100)
function calculateDryingScore(
  temperature: number,
  humidity: number,
  windSpeed: number,
  precipitation: number,
  cloudCover: number,
  uvIndex: number
): number {
  let score = 50;

  // Temperature factor (ideal: 20-30°C)
  if (temperature >= 20 && temperature <= 30) {
    score += 15;
  } else if (temperature >= 15 && temperature < 20) {
    score += 10;
  } else if (temperature >= 10 && temperature < 15) {
    score += 5;
  } else if (temperature < 10) {
    score -= 10;
  }

  // Humidity factor (lower is better)
  if (humidity < 40) {
    score += 20;
  } else if (humidity < 50) {
    score += 15;
  } else if (humidity < 60) {
    score += 10;
  } else if (humidity < 70) {
    score += 5;
  } else if (humidity >= 80) {
    score -= 15;
  }

  // Wind factor (moderate wind is ideal)
  if (windSpeed >= 10 && windSpeed <= 25) {
    score += 15;
  } else if (windSpeed >= 5 && windSpeed < 10) {
    score += 10;
  } else if (windSpeed > 25) {
    score += 5;
  }

  // Precipitation factor
  if (precipitation > 0) {
    score -= 30;
  }

  // Cloud cover factor
  if (cloudCover < 20) {
    score += 10;
  } else if (cloudCover < 40) {
    score += 5;
  } else if (cloudCover > 80) {
    score -= 5;
  }

  // UV factor
  if (uvIndex >= 3 && uvIndex <= 6) {
    score += 10;
  } else if (uvIndex > 6) {
    score += 5;
  }

  return Math.max(0, Math.min(100, score));
}

// Get recommendation based on drying score
function getRecommendation(score: number, precipitation: number): string {
  if (precipitation > 0) {
    return "Regen verwacht! Droog je was binnen vandaag.";
  }
  if (score >= 80) {
    return "Uitstekend droogweer! Perfect om je was buiten te drogen.";
  }
  if (score >= 60) {
    return "Goed droogweer. Je was zal buiten prima drogen.";
  }
  if (score >= 40) {
    return "Matig droogweer. Het kan wat langer duren.";
  }
  return "Niet ideaal voor buiten drogen. Overweeg binnen drogen.";
}

// Get weather description from WMO code
export function getWeatherDescription(code: number): string {
  const descriptions: Record<number, string> = {
    0: "Helder",
    1: "Overwegend helder",
    2: "Gedeeltelijk bewolkt",
    3: "Bewolkt",
    45: "Mist",
    48: "Rijpmist",
    51: "Lichte motregen",
    53: "Motregen",
    55: "Zware motregen",
    61: "Lichte regen",
    63: "Regen",
    65: "Zware regen",
    71: "Lichte sneeuw",
    73: "Sneeuw",
    75: "Zware sneeuw",
    80: "Lichte buien",
    81: "Buien",
    82: "Zware buien",
    95: "Onweer",
  };
  return descriptions[code] || "Onbekend";
}

// Get weather icon based on WMO code
export function getWeatherIcon(code: number, isDay: boolean): string {
  if (code === 0 || code === 1) return isDay ? "sunny" : "clear-night";
  if (code === 2) return isDay ? "partly-cloudy" : "partly-cloudy-night";
  if (code === 3) return "cloudy";
  if (code >= 45 && code <= 48) return "foggy";
  if (code >= 51 && code <= 55) return "drizzle";
  if (code >= 61 && code <= 65) return "rainy";
  if (code >= 71 && code <= 75) return "snowy";
  if (code >= 80 && code <= 82) return "rainy";
  if (code === 95) return "stormy";
  return "cloudy";
}

// Fetch weather data from Open-Meteo API
export async function fetchWeatherData(citySlug: string): Promise<WeatherData | null> {
  // First check in allDutchPlaces (comprehensive list), fallback to dutchCities
  const city = allDutchPlaces.find((c) => c.slug === citySlug) || dutchCities.find((c) => c.slug === citySlug);
  if (!city) return null;

  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current=temperature_2m,relative_humidity_2m,precipitation,cloud_cover,wind_speed_10m,weather_code,is_day,uv_index&hourly=temperature_2m,relative_humidity_2m,precipitation,cloud_cover,wind_speed_10m,uv_index,is_day&timezone=Europe/Amsterdam&forecast_days=1`
    );

    if (!response.ok) throw new Error("Weather API error");

    const data = await response.json();

    const current = {
      temperature: Math.round(data.current.temperature_2m),
      humidity: data.current.relative_humidity_2m,
      windSpeed: Math.round(data.current.wind_speed_10m),
      precipitation: data.current.precipitation,
      cloudCover: data.current.cloud_cover,
      uvIndex: data.current.uv_index || 0,
      weatherCode: data.current.weather_code,
      isDayTime: data.current.is_day === 1,
    };

    const hourly: HourlyForecast[] = data.hourly.time.map((time: string, i: number) => {
      const temp = data.hourly.temperature_2m[i];
      const hum = data.hourly.relative_humidity_2m[i];
      const wind = data.hourly.wind_speed_10m[i];
      const precip = data.hourly.precipitation[i];
      const cloud = data.hourly.cloud_cover[i];
      const uv = data.hourly.uv_index[i] || 0;

      return {
        time,
        temperature: Math.round(temp),
        humidity: hum,
        windSpeed: Math.round(wind),
        precipitation: precip,
        cloudCover: cloud,
        uvIndex: uv,
        dryingScore: calculateDryingScore(temp, hum, wind, precip, cloud, uv),
        isDayTime: data.hourly.is_day[i] === 1,
      };
    });

    const dryingScore = calculateDryingScore(
      current.temperature,
      current.humidity,
      current.windSpeed,
      current.precipitation,
      current.cloudCover,
      current.uvIndex
    );

    return {
      city: city.name,
      current,
      hourly,
      dryingScore,
      recommendation: getRecommendation(dryingScore, current.precipitation),
    };
  } catch (error) {
    console.error("Error fetching weather:", error);
    return null;
  }
}

// Fetch simple weather for all cities (for home page)
export async function fetchAllCitiesWeather(): Promise<
  Array<{ slug: string; name: string; temperature: number; humidity: number; dryingScore: number; weatherCode: number; isDayTime: boolean }>
> {
  const results = await Promise.all(
    dutchCities.map(async (city) => {
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current=temperature_2m,relative_humidity_2m,precipitation,cloud_cover,wind_speed_10m,weather_code,is_day,uv_index&timezone=Europe/Amsterdam`
        );

        if (!response.ok) throw new Error("API error");

        const data = await response.json();
        const dryingScore = calculateDryingScore(
          data.current.temperature_2m,
          data.current.relative_humidity_2m,
          data.current.wind_speed_10m,
          data.current.precipitation,
          data.current.cloud_cover,
          data.current.uv_index || 0
        );

        return {
          slug: city.slug,
          name: city.name,
          temperature: Math.round(data.current.temperature_2m),
          humidity: data.current.relative_humidity_2m,
          dryingScore,
          weatherCode: data.current.weather_code,
          isDayTime: data.current.is_day === 1,
        };
      } catch {
        return {
          slug: city.slug,
          name: city.name,
          temperature: 0,
          humidity: 0,
          dryingScore: 0,
          weatherCode: 0,
          isDayTime: true,
        };
      }
    })
  );

  return results;
}
