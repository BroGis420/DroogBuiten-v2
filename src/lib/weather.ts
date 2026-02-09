// Featured cities for homepage display (6 largest)
export const dutchCities = [
  { name: "Amsterdam", slug: "amsterdam", lat: 52.3676, lon: 4.9041 },
  { name: "Rotterdam", slug: "rotterdam", lat: 51.9225, lon: 4.4792 },
  { name: "Utrecht", slug: "utrecht", lat: 52.0907, lon: 5.1214 },
  { name: "Den Haag", slug: "den-haag", lat: 52.0705, lon: 4.3007 },
  { name: "Eindhoven", slug: "eindhoven", lat: 51.4416, lon: 5.4697 },
  { name: "Groningen", slug: "groningen", lat: 53.2194, lon: 6.5665 },
];

// Complete list of Dutch municipalities (342 gemeenten)
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

  // Aanvullende gemeenten - Noord-Holland
  { name: "Blaricum", slug: "blaricum", lat: 52.2736, lon: 5.2450, province: "Noord-Holland" },
  { name: "Bloemendaal", slug: "bloemendaal", lat: 52.4019, lon: 4.6208, province: "Noord-Holland" },
  { name: "Gooise Meren", slug: "gooise-meren", lat: 52.2900, lon: 5.1600, province: "Noord-Holland" },
  { name: "Heiloo", slug: "heiloo", lat: 52.6003, lon: 4.7069, province: "Noord-Holland" },
  { name: "Huizen", slug: "huizen", lat: 52.2967, lon: 5.2394, province: "Noord-Holland" },
  { name: "Koggenland", slug: "koggenland", lat: 52.6667, lon: 5.0000, province: "Noord-Holland" },
  { name: "Landsmeer", slug: "landsmeer", lat: 52.4292, lon: 4.9139, province: "Noord-Holland" },
  { name: "Langedijk", slug: "langedijk", lat: 52.6833, lon: 4.7833, province: "Noord-Holland" },
  { name: "Laren", slug: "laren", lat: 52.2558, lon: 5.2281, province: "Noord-Holland" },
  { name: "Oostzaan", slug: "oostzaan", lat: 52.4383, lon: 4.8708, province: "Noord-Holland" },
  { name: "Opmeer", slug: "opmeer", lat: 52.7167, lon: 4.9500, province: "Noord-Holland" },
  { name: "Ouder-Amstel", slug: "ouder-amstel", lat: 52.2958, lon: 4.9125, province: "Noord-Holland" },
  { name: "Stede Broec", slug: "stede-broec", lat: 52.6917, lon: 5.2167, province: "Noord-Holland" },
  { name: "Waterland", slug: "waterland", lat: 52.4500, lon: 5.0167, province: "Noord-Holland" },
  { name: "Wormerland", slug: "wormerland", lat: 52.4917, lon: 4.8250, province: "Noord-Holland" },
  { name: "Zandvoort", slug: "zandvoort", lat: 52.3714, lon: 4.5331, province: "Noord-Holland" },
  { name: "Dijk en Waard", slug: "dijk-en-waard", lat: 52.6667, lon: 4.8333, province: "Noord-Holland" },

  // Aanvullende gemeenten - Zuid-Holland
  { name: "Albrandswaard", slug: "albrandswaard", lat: 51.8583, lon: 4.4083, province: "Zuid-Holland" },
  { name: "Alblasserdam", slug: "alblasserdam", lat: 51.8656, lon: 4.6611, province: "Zuid-Holland" },
  { name: "Barendrecht", slug: "barendrecht", lat: 51.8567, lon: 4.5342, province: "Zuid-Holland" },
  { name: "Bodegraven-Reeuwijk", slug: "bodegraven-reeuwijk", lat: 52.0833, lon: 4.7500, province: "Zuid-Holland" },
  { name: "Brielle", slug: "brielle", lat: 51.9014, lon: 4.1631, province: "Zuid-Holland" },
  { name: "Goeree-Overflakkee", slug: "goeree-overflakkee", lat: 51.7500, lon: 4.0833, province: "Zuid-Holland" },
  { name: "Hardinxveld-Giessendam", slug: "hardinxveld-giessendam", lat: 51.8250, lon: 4.8417, province: "Zuid-Holland" },
  { name: "Hendrik-Ido-Ambacht", slug: "hendrik-ido-ambacht", lat: 51.8442, lon: 4.6375, province: "Zuid-Holland" },
  { name: "Hillegom", slug: "hillegom", lat: 52.2917, lon: 4.5833, province: "Zuid-Holland" },
  { name: "Hoeksche Waard", slug: "hoeksche-waard", lat: 51.7833, lon: 4.4167, province: "Zuid-Holland" },
  { name: "Krimpen aan den IJssel", slug: "krimpen-aan-den-ijssel", lat: 51.9172, lon: 4.6003, province: "Zuid-Holland" },
  { name: "Krimpenerwaard", slug: "krimpenerwaard", lat: 51.9500, lon: 4.7500, province: "Zuid-Holland" },
  { name: "Lansingerland", slug: "lansingerland", lat: 52.0000, lon: 4.5333, province: "Zuid-Holland" },
  { name: "Maassluis", slug: "maassluis", lat: 51.9236, lon: 4.2503, province: "Zuid-Holland" },
  { name: "Midden-Delfland", slug: "midden-delfland", lat: 51.9667, lon: 4.2833, province: "Zuid-Holland" },
  { name: "Molenlanden", slug: "molenlanden", lat: 51.8833, lon: 4.8833, province: "Zuid-Holland" },
  { name: "Nissewaard", slug: "nissewaard", lat: 51.8500, lon: 4.3333, province: "Zuid-Holland" },
  { name: "Nieuwkoop", slug: "nieuwkoop", lat: 52.1500, lon: 4.7833, province: "Zuid-Holland" },
  { name: "Oudewater", slug: "oudewater", lat: 52.0250, lon: 4.8667, province: "Zuid-Holland" },
  { name: "Teylingen", slug: "teylingen", lat: 52.2167, lon: 4.5000, province: "Zuid-Holland" },
  { name: "Voorne aan Zee", slug: "voorne-aan-zee", lat: 51.8667, lon: 4.1333, province: "Zuid-Holland" },
  { name: "Zwijndrecht", slug: "zwijndrecht", lat: 51.8206, lon: 4.6331, province: "Zuid-Holland" },
  { name: "Zuid-Holland Zuid", slug: "zuid-holland-zuid", lat: 51.8000, lon: 4.7500, province: "Zuid-Holland" },

  // Aanvullende gemeenten - Noord-Brabant
  { name: "Alphen-Chaam", slug: "alphen-chaam", lat: 51.4917, lon: 4.9417, province: "Noord-Brabant" },
  { name: "Altena", slug: "altena", lat: 51.7667, lon: 4.9667, province: "Noord-Brabant" },
  { name: "Asten", slug: "asten", lat: 51.4039, lon: 5.7472, province: "Noord-Brabant" },
  { name: "Baarle-Nassau", slug: "baarle-nassau", lat: 51.4467, lon: 4.9308, province: "Noord-Brabant" },
  { name: "Bergeijk", slug: "bergeijk", lat: 51.3194, lon: 5.3597, province: "Noord-Brabant" },
  { name: "Bernheze", slug: "bernheze", lat: 51.7000, lon: 5.5167, province: "Noord-Brabant" },
  { name: "Bladel", slug: "bladel", lat: 51.3667, lon: 5.2167, province: "Noord-Brabant" },
  { name: "Boekel", slug: "boekel", lat: 51.6000, lon: 5.6833, province: "Noord-Brabant" },
  { name: "Boxmeer", slug: "boxmeer", lat: 51.6458, lon: 5.9461, province: "Noord-Brabant" },
  { name: "Cranendonck", slug: "cranendonck", lat: 51.3000, lon: 5.5500, province: "Noord-Brabant" },
  { name: "Deurne", slug: "deurne", lat: 51.4617, lon: 5.7900, province: "Noord-Brabant" },
  { name: "Drimmelen", slug: "drimmelen", lat: 51.7000, lon: 4.8000, province: "Noord-Brabant" },
  { name: "Eersel", slug: "eersel", lat: 51.3564, lon: 5.3186, province: "Noord-Brabant" },
  { name: "Geertruidenberg", slug: "geertruidenberg", lat: 51.7017, lon: 4.8567, province: "Noord-Brabant" },
  { name: "Gilze en Rijen", slug: "gilze-en-rijen", lat: 51.5417, lon: 4.9417, province: "Noord-Brabant" },
  { name: "Goirle", slug: "goirle", lat: 51.5208, lon: 5.0653, province: "Noord-Brabant" },
  { name: "Grave", slug: "grave", lat: 51.7583, lon: 5.7375, province: "Noord-Brabant" },
  { name: "Haaren", slug: "haaren", lat: 51.6017, lon: 5.2250, province: "Noord-Brabant" },
  { name: "Halderberge", slug: "halderberge", lat: 51.5833, lon: 4.5667, province: "Noord-Brabant" },
  { name: "Heeze-Leende", slug: "heeze-leende", lat: 51.3833, lon: 5.5667, province: "Noord-Brabant" },
  { name: "Heusden", slug: "heusden", lat: 51.7333, lon: 5.1333, province: "Noord-Brabant" },
  { name: "Hilvarenbeek", slug: "hilvarenbeek", lat: 51.4847, lon: 5.1375, province: "Noord-Brabant" },
  { name: "Laarbeek", slug: "laarbeek", lat: 51.5167, lon: 5.6167, province: "Noord-Brabant" },
  { name: "Land van Cuijk", slug: "land-van-cuijk", lat: 51.7167, lon: 5.8833, province: "Noord-Brabant" },
  { name: "Loon op Zand", slug: "loon-op-zand", lat: 51.6333, lon: 5.0833, province: "Noord-Brabant" },
  { name: "Maashorst", slug: "maashorst", lat: 51.6500, lon: 5.5833, province: "Noord-Brabant" },
  { name: "Meierijstad", slug: "meierijstad", lat: 51.6333, lon: 5.5500, province: "Noord-Brabant" },
  { name: "Mill en Sint Hubert", slug: "mill-en-sint-hubert", lat: 51.6917, lon: 5.7750, province: "Noord-Brabant" },
  { name: "Moerdijk", slug: "moerdijk", lat: 51.6500, lon: 4.6167, province: "Noord-Brabant" },
  { name: "Oirschot", slug: "oirschot", lat: 51.5042, lon: 5.3083, province: "Noord-Brabant" },
  { name: "Oisterwijk", slug: "oisterwijk", lat: 51.5817, lon: 5.1917, province: "Noord-Brabant" },
  { name: "Reusel-De Mierden", slug: "reusel-de-mierden", lat: 51.3667, lon: 5.1500, province: "Noord-Brabant" },
  { name: "Rucphen", slug: "rucphen", lat: 51.5250, lon: 4.5583, province: "Noord-Brabant" },
  { name: "Sint Anthonis", slug: "sint-anthonis", lat: 51.6333, lon: 5.8833, province: "Noord-Brabant" },
  { name: "Sint-Michielsgestel", slug: "sint-michielsgestel", lat: 51.6417, lon: 5.3500, province: "Noord-Brabant" },
  { name: "Someren", slug: "someren", lat: 51.3833, lon: 5.7167, province: "Noord-Brabant" },
  { name: "Son en Breugel", slug: "son-en-breugel", lat: 51.5167, lon: 5.4833, province: "Noord-Brabant" },
  { name: "Steenbergen", slug: "steenbergen", lat: 51.5833, lon: 4.3167, province: "Noord-Brabant" },
  { name: "Vught", slug: "vught", lat: 51.6583, lon: 5.2917, province: "Noord-Brabant" },
  { name: "Woensdrecht", slug: "woensdrecht", lat: 51.4333, lon: 4.3000, province: "Noord-Brabant" },
  { name: "Zundert", slug: "zundert", lat: 51.4708, lon: 4.6583, province: "Noord-Brabant" },

  // Aanvullende gemeenten - Gelderland
  { name: "Aalten", slug: "aalten", lat: 51.9250, lon: 6.5833, province: "Gelderland" },
  { name: "Berg en Dal", slug: "berg-en-dal", lat: 51.8167, lon: 5.9333, province: "Gelderland" },
  { name: "Beuningen", slug: "beuningen", lat: 51.8583, lon: 5.7667, province: "Gelderland" },
  { name: "Bronckhorst", slug: "bronckhorst", lat: 52.0667, lon: 6.3500, province: "Gelderland" },
  { name: "Brummen", slug: "brummen", lat: 52.0889, lon: 6.1556, province: "Gelderland" },
  { name: "Buren", slug: "buren", lat: 51.9167, lon: 5.3333, province: "Gelderland" },
  { name: "Druten", slug: "druten", lat: 51.8833, lon: 5.6000, province: "Gelderland" },
  { name: "Duiven", slug: "duiven", lat: 51.9500, lon: 6.0167, province: "Gelderland" },
  { name: "Epe", slug: "epe", lat: 52.3500, lon: 5.9833, province: "Gelderland" },
  { name: "Hattem", slug: "hattem", lat: 52.4750, lon: 6.0667, province: "Gelderland" },
  { name: "Heerde", slug: "heerde", lat: 52.3917, lon: 6.0417, province: "Gelderland" },
  { name: "Heumen", slug: "heumen", lat: 51.7833, lon: 5.8500, province: "Gelderland" },
  { name: "Lingewaard", slug: "lingewaard", lat: 51.9167, lon: 5.9333, province: "Gelderland" },
  { name: "Maasdriel", slug: "maasdriel", lat: 51.8000, lon: 5.2833, province: "Gelderland" },
  { name: "Montferland", slug: "montferland", lat: 51.9167, lon: 6.2000, province: "Gelderland" },
  { name: "Neder-Betuwe", slug: "neder-betuwe", lat: 51.9167, lon: 5.5667, province: "Gelderland" },
  { name: "Nijkerk", slug: "nijkerk", lat: 52.2167, lon: 5.4833, province: "Gelderland" },
  { name: "Oldebroek", slug: "oldebroek", lat: 52.4500, lon: 5.9167, province: "Gelderland" },
  { name: "Oost Gelre", slug: "oost-gelre", lat: 52.0000, lon: 6.6167, province: "Gelderland" },
  { name: "Overbetuwe", slug: "overbetuwe", lat: 51.9333, lon: 5.8000, province: "Gelderland" },
  { name: "Renkum", slug: "renkum", lat: 51.9833, lon: 5.7500, province: "Gelderland" },
  { name: "Rozendaal", slug: "rozendaal", lat: 52.0167, lon: 5.9500, province: "Gelderland" },
  { name: "Scherpenzeel", slug: "scherpenzeel", lat: 52.0833, lon: 5.4833, province: "Gelderland" },
  { name: "Voorst", slug: "voorst", lat: 52.1833, lon: 6.1333, province: "Gelderland" },
  { name: "Westervoort", slug: "westervoort", lat: 51.9583, lon: 5.9667, province: "Gelderland" },
  { name: "West Betuwe", slug: "west-betuwe", lat: 51.8833, lon: 5.1500, province: "Gelderland" },
  { name: "West Maas en Waal", slug: "west-maas-en-waal", lat: 51.8667, lon: 5.4833, province: "Gelderland" },
  { name: "Wijchen", slug: "wijchen", lat: 51.8083, lon: 5.7250, province: "Gelderland" },
  { name: "Zaltbommel", slug: "zaltbommel", lat: 51.8083, lon: 5.2417, province: "Gelderland" },

  // Aanvullende gemeenten - Overijssel
  { name: "Dinkelland", slug: "dinkelland", lat: 52.3833, lon: 7.0333, province: "Overijssel" },
  { name: "Haaksbergen", slug: "haaksbergen", lat: 52.1583, lon: 6.7417, province: "Overijssel" },
  { name: "Hof van Twente", slug: "hof-van-twente", lat: 52.2667, lon: 6.5833, province: "Overijssel" },
  { name: "Losser", slug: "losser", lat: 52.2667, lon: 7.0000, province: "Overijssel" },
  { name: "Olst-Wijhe", slug: "olst-wijhe", lat: 52.3333, lon: 6.1167, province: "Overijssel" },
  { name: "Twenterand", slug: "twenterand", lat: 52.4333, lon: 6.6000, province: "Overijssel" },
  { name: "Tubbergen", slug: "tubbergen", lat: 52.4167, lon: 6.8000, province: "Overijssel" },
  { name: "Zwartewaterland", slug: "zwartewaterland", lat: 52.5833, lon: 6.0667, province: "Overijssel" },
  { name: "Borne", slug: "borne", lat: 52.3000, lon: 6.7500, province: "Overijssel" },

  // Aanvullende gemeenten - Limburg
  { name: "Beesel", slug: "beesel", lat: 51.2667, lon: 6.0333, province: "Limburg" },
  { name: "Bergen (L)", slug: "bergen-limburg", lat: 51.6000, lon: 6.0333, province: "Limburg" },
  { name: "Beekdaelen", slug: "beekdaelen", lat: 50.9333, lon: 5.9167, province: "Limburg" },
  { name: "Eijsden-Margraten", slug: "eijsden-margraten", lat: 50.7833, lon: 5.7500, province: "Limburg" },
  { name: "Gennep", slug: "gennep", lat: 51.6983, lon: 5.9725, province: "Limburg" },
  { name: "Horst aan de Maas", slug: "horst-aan-de-maas", lat: 51.4500, lon: 6.0500, province: "Limburg" },
  { name: "Leudal", slug: "leudal", lat: 51.2500, lon: 5.9000, province: "Limburg" },
  { name: "Maasgouw", slug: "maasgouw", lat: 51.1667, lon: 5.8833, province: "Limburg" },
  { name: "Maastricht", slug: "maastricht", lat: 50.8514, lon: 5.6910, province: "Limburg" },
  { name: "Meerssen", slug: "meerssen", lat: 50.8833, lon: 5.7500, province: "Limburg" },
  { name: "Mook en Middelaar", slug: "mook-en-middelaar", lat: 51.7583, lon: 5.8833, province: "Limburg" },
  { name: "Nederweert", slug: "nederweert", lat: 51.2833, lon: 5.7500, province: "Limburg" },
  { name: "Peel en Maas", slug: "peel-en-maas", lat: 51.3500, lon: 6.0000, province: "Limburg" },
  { name: "Simpelveld", slug: "simpelveld", lat: 50.8333, lon: 5.9833, province: "Limburg" },
  { name: "Stein", slug: "stein", lat: 50.9667, lon: 5.7667, province: "Limburg" },
  { name: "Valkenburg aan de Geul", slug: "valkenburg-aan-de-geul", lat: 50.8653, lon: 5.8317, province: "Limburg" },
  { name: "Voerendaal", slug: "voerendaal", lat: 50.8833, lon: 5.9333, province: "Limburg" },

  // Aanvullende gemeenten - Friesland
  { name: "Achtkarspelen", slug: "achtkarspelen", lat: 53.2333, lon: 6.1500, province: "Friesland" },
  { name: "Ameland", slug: "ameland", lat: 53.4500, lon: 5.7333, province: "Friesland" },
  { name: "Dantumadiel", slug: "dantumadiel", lat: 53.3000, lon: 6.0833, province: "Friesland" },
  { name: "De Fryske Marren", slug: "de-fryske-marren", lat: 52.9333, lon: 5.7500, province: "Friesland" },
  { name: "Harlingen", slug: "harlingen-gem", lat: 53.1742, lon: 5.4142, province: "Friesland" },
  { name: "Heerenveen", slug: "heerenveen-gem", lat: 52.9597, lon: 5.9247, province: "Friesland" },
  { name: "Noardeast-Fryslân", slug: "noardeast-fryslan", lat: 53.3500, lon: 6.0000, province: "Friesland" },
  { name: "Ooststellingwerf", slug: "ooststellingwerf", lat: 52.9667, lon: 6.2833, province: "Friesland" },
  { name: "Opsterland", slug: "opsterland", lat: 53.0833, lon: 6.1667, province: "Friesland" },
  { name: "Schiermonnikoog", slug: "schiermonnikoog", lat: 53.4833, lon: 6.1667, province: "Friesland" },
  { name: "Smallingerland", slug: "smallingerland", lat: 53.1000, lon: 6.0667, province: "Friesland" },
  { name: "Súdwest-Fryslân", slug: "sudwest-fryslan", lat: 53.0167, lon: 5.6500, province: "Friesland" },
  { name: "Terschelling", slug: "terschelling", lat: 53.4000, lon: 5.3500, province: "Friesland" },
  { name: "Tytsjerksteradiel", slug: "tytsjerksteradiel", lat: 53.1833, lon: 5.9500, province: "Friesland" },
  { name: "Vlieland", slug: "vlieland", lat: 53.2500, lon: 5.0667, province: "Friesland" },
  { name: "Waadhoeke", slug: "waadhoeke", lat: 53.2000, lon: 5.5500, province: "Friesland" },
  { name: "Weststellingwerf", slug: "weststellingwerf", lat: 52.8833, lon: 6.0667, province: "Friesland" },

  // Aanvullende gemeenten - Drenthe
  { name: "Aa en Hunze", slug: "aa-en-hunze", lat: 52.9667, lon: 6.7833, province: "Drenthe" },
  { name: "De Wolden", slug: "de-wolden", lat: 52.7167, lon: 6.3667, province: "Drenthe" },
  { name: "Midden-Drenthe", slug: "midden-drenthe", lat: 52.8667, lon: 6.5833, province: "Drenthe" },
  { name: "Noordenveld", slug: "noordenveld", lat: 53.1167, lon: 6.4667, province: "Drenthe" },
  { name: "Tynaarlo", slug: "tynaarlo", lat: 53.0667, lon: 6.5833, province: "Drenthe" },
  { name: "Westerveld", slug: "westerveld", lat: 52.8500, lon: 6.2333, province: "Drenthe" },
  { name: "Borger-Odoorn", slug: "borger-odoorn", lat: 52.9083, lon: 6.8583, province: "Drenthe" },

  // Aanvullende gemeenten - Groningen
  { name: "Het Hogeland", slug: "het-hogeland", lat: 53.3833, lon: 6.5000, province: "Groningen" },
  { name: "Midden-Groningen", slug: "midden-groningen", lat: 53.1167, lon: 6.8167, province: "Groningen" },
  { name: "Oldambt", slug: "oldambt", lat: 53.1667, lon: 7.0333, province: "Groningen" },
  { name: "Pekela", slug: "pekela", lat: 53.0667, lon: 6.9500, province: "Groningen" },
  { name: "Westerkwartier", slug: "westerkwartier", lat: 53.2000, lon: 6.3333, province: "Groningen" },
  { name: "Westerwolde", slug: "westerwolde", lat: 53.0167, lon: 7.0833, province: "Groningen" },
  { name: "Eemsdelta", slug: "eemsdelta", lat: 53.3333, lon: 6.9167, province: "Groningen" },

  // Aanvullende gemeenten - Zeeland
  { name: "Borsele", slug: "borsele", lat: 51.4333, lon: 3.7500, province: "Zeeland" },
  { name: "Kapelle", slug: "kapelle", lat: 51.4833, lon: 3.9667, province: "Zeeland" },
  { name: "Noord-Beveland", slug: "noord-beveland", lat: 51.5667, lon: 3.7667, province: "Zeeland" },
  { name: "Reimerswaal", slug: "reimerswaal", lat: 51.4333, lon: 4.0333, province: "Zeeland" },
  { name: "Schouwen-Duiveland", slug: "schouwen-duiveland", lat: 51.7000, lon: 3.8500, province: "Zeeland" },
  { name: "Sluis", slug: "sluis", lat: 51.3083, lon: 3.3833, province: "Zeeland" },
  { name: "Tholen", slug: "tholen", lat: 51.5333, lon: 4.1500, province: "Zeeland" },
  { name: "Veere", slug: "veere", lat: 51.5500, lon: 3.6667, province: "Zeeland" },

  // Aanvullende gemeenten - Flevoland
  { name: "Noordoostpolder", slug: "noordoostpolder", lat: 52.7167, lon: 5.7500, province: "Flevoland" },

  // Aanvullende gemeenten - Utrecht
  { name: "Bunnik", slug: "bunnik", lat: 52.0667, lon: 5.2000, province: "Utrecht" },
  { name: "Leusden", slug: "leusden", lat: 52.1333, lon: 5.4333, province: "Utrecht" },
  { name: "Lopik", slug: "lopik", lat: 51.9833, lon: 4.9500, province: "Utrecht" },
  { name: "Montfoort", slug: "montfoort", lat: 52.0500, lon: 4.9500, province: "Utrecht" },
  { name: "Oudewater", slug: "oudewater-ut", lat: 52.0250, lon: 4.8667, province: "Utrecht" },
  { name: "Renswoude", slug: "renswoude", lat: 52.0833, lon: 5.5333, province: "Utrecht" },
  { name: "Rhenen", slug: "rhenen", lat: 51.9583, lon: 5.5667, province: "Utrecht" },
  { name: "Stichtse Vecht", slug: "stichtse-vecht", lat: 52.1667, lon: 5.0333, province: "Utrecht" },
  { name: "Utrechtse Heuvelrug", slug: "utrechtse-heuvelrug", lat: 52.0333, lon: 5.3833, province: "Utrecht" },
  { name: "Vijfheerenlanden", slug: "vijfheerenlanden", lat: 51.9667, lon: 5.0500, province: "Utrecht" },
  { name: "Woudenberg", slug: "woudenberg", lat: 52.0833, lon: 5.4167, province: "Utrecht" },
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
  weatherCode: number;
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

// Get weather icon based on WMO code (mapped to Bas Milius weather-icons names)
export function getWeatherIcon(code: number, isDay: boolean): string {
  if (code === 0 || code === 1) return isDay ? "clear-day" : "clear-night";
  if (code === 2) return isDay ? "partly-cloudy-day" : "partly-cloudy-night";
  if (code === 3) return "cloudy";
  if (code >= 45 && code <= 48) return "fog";
  if (code >= 51 && code <= 55) return "drizzle";
  if (code >= 61 && code <= 65) return "rain";
  if (code >= 71 && code <= 75) return "snow";
  if (code >= 80 && code <= 82) return "rain";
  if (code === 95) return "thunderstorms";
  return "cloudy";
}

// Fetch weather data from Open-Meteo API
export async function fetchWeatherData(citySlug: string): Promise<WeatherData | null> {
  // First check in allDutchPlaces (comprehensive list), fallback to dutchCities
  const city = allDutchPlaces.find((c) => c.slug === citySlug) || dutchCities.find((c) => c.slug === citySlug);
  if (!city) return null;

  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current=temperature_2m,relative_humidity_2m,precipitation,cloud_cover,wind_speed_10m,weather_code,is_day,uv_index&hourly=temperature_2m,relative_humidity_2m,precipitation,cloud_cover,wind_speed_10m,uv_index,is_day,weather_code&timezone=Europe/Amsterdam&forecast_days=2`
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
      const weatherCode = data.hourly.weather_code[i];

      return {
        time,
        temperature: Math.round(temp),
        humidity: hum,
        windSpeed: Math.round(wind),
        precipitation: precip,
        cloudCover: cloud,
        uvIndex: uv,
        dryingScore: calculateDryingScore(temp, hum, wind, precip, cloud, uv),
        weatherCode,
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

// Fetch weather for a single city by slug
export async function fetchCityWeather(slug: string): Promise<{
  slug: string;
  name: string;
  temperature: number;
  humidity: number;
  dryingScore: number;
  weatherCode: number;
  isDayTime: boolean;
} | null> {
  const city = allDutchPlaces.find((p) => p.slug === slug);
  if (!city) return null;

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
  } catch (error) {
    console.error(`Error fetching weather for ${slug}:`, error);
    return null;
  }
}

// Fetch simple weather for all cities (for home page)
export async function fetchAllCitiesWeather(): Promise<
  Array<{ slug: string; name: string; temperature: number; humidity: number; dryingScore: number; weatherCode: number; isDayTime: boolean }>
> {
  const results = await Promise.all(
    dutchCities.map(async (city) => {
      const weather = await fetchCityWeather(city.slug);
      if (weather) return weather;

      // Fallback
      return {
        slug: city.slug,
        name: city.name,
        temperature: 0,
        humidity: 0,
        dryingScore: 0,
        weatherCode: 0,
        isDayTime: true,
      };
    })
  );

  return results;
}
