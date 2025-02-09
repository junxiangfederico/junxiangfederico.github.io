import daunBooksImage from "/IMG_1628.JPG";
import howManyParrots from "/IMG_1639.JPG";
import theMarriageBus from "/IMG_1637.JPG";
import theDucks from "/IMG_1641.JPG";
import pho from "/IMG_1690.JPG";
import carnaby from "/IMG_4737.JPG";
import food from "/IMG_4759.JPG";
import regent from "/regent.jpg";
import home from "/IMG_2752.JPG";
import bogAmy from "/IMG_2769.JPG";
import fhoone from "/IMG_2810.JPG";
import steak from "/IMG_2829.JPG";
import moku from "/IMG_2834.JPG";
import butWhy from "/IMG_2840.JPG";
import church from "/IMG_2849.JPG";
import museum from "/IMG_2852.JPG";
import doge from "/IMG_2858.JPG";
import politeGood from "/IMG_2862.JPG";
import gatto from "/IMG_2867.JPG";
import sneaky from "/IMG_2870.JPG";
import disaster from "/IMG_2872.JPG";
import together from "/IMG_8514.JPG";
import bogAmy2 from "/IMG_2759.JPG";
import cake from "/IMG_2755.JPG";
import tallinn from "/tallinn.jpg";
import florence from "/florence.jpg";

export const visitedPlaces = [
    // London
    { name: "London", description: "Forever special, the city where I met you", coords: [51.50736358874289, -0.1276290661808715]},
    { name: "Uniqloo", description: "Where it all started", coords: [51.516256126614934, -0.13059360304492956]},
    { name: "Byng Place", description: "Where we kissed for the first time", coords: [51.52310577370984, -0.13141023382323685]},
    { name: "Regent Street", description: "Where we held hands for the first time", coords: [51.51187852473925, -0.13958819990865665], image: regent},
    { name: "Carnaby Street", description: "My favourite picture subject", coords: [51.51330386018866, -0.13823420113364301], image: carnaby},
    { name: "Milksha", description: "Our first bubble tea together", coords: [51.51226604444523, -0.1319319438912628]},
    { name: "Hongdae Pocha", description: "You get so sleepy when you drink !", coords: [51.513215745513996, -0.13083905300070828]},
    { name: "Banh Mi Keu Deli", description: "Seeing you again made me so happy !", coords: [51.51436106262779, -0.13668189971052852], image: pho},
    { name: "Daun Books", description: "Beautiful location, beautiful company", coords: [51.52053189095526, -0.1519718718752596], image: daunBooksImage},
    { name: "Carlotta", description: "Thank god you like Italian food !", coords: [51.52099970033451, -0.15220681749148535], image: food},
    { name: "The marriage bus", description: "Hopefully one day it's going to be our turn", coords: [51.522467673268146, -0.15528201689608911], image: theMarriageBus},
    { name: "The parrots", description: "How many parrots in this picture ?", coords: [51.52750850360358, -0.1517586956821739], image: howManyParrots},
    { name: "Weird looking lamp posts", description: "Ducks and Fries, we love these lamp posts", coords: [51.521975063576136, -0.15758963432461853], image: theDucks},
    { name: "Hampton", description: "Where we became one for the first time", coords: [51.51683778900385, -0.06987066407763702]},

    // Milan
    { name: "Milan", description: "So little time, so many memories", coords: [45.46851227306399, 9.18231867514723] },
    { name: "Piadineria", description: "Such a late lunch! Too much napping !", coords: [45.46592661024468, 9.194916339321914] },
    { name: "An interesting dinner", description: "Presenting my beautiful girlfriend to my family", coords: [45.53067541354365, 9.193681618668291] },
    { name: "Dinner at mine", description: "Your first pizza and meeting my parents !", coords: [45.48562507412244, 9.23541177125278] },
    { name: "Chinese pop night", description: "Dancing and making out, you make me feel special", coords: [45.494560661087895, 9.181789643438304] },
    { name: "Mi casa es tu casa", description: "You and the bowl, inseparable !", coords: [45.501988067873945, 9.180837671253277] },
    { name: "At Gianluca's place", description: "Truck driving practice, ready for the test !", coords: [45.503328002650846, 9.181675140564263] },
    { name: "Wine and friends", description: "I hope your parents weren't too angry with you missing Christmas Eve!", coords: [45.48176794209704, 9.180858969906481] },
    { name: "Duomo di Milano", description: "First time seeing your friends !", coords: [45.4641834446994, 9.192067522063187] },
    { name: "Stazione", description: "Goodbyes are so hard with you", coords: [45.484657178277885, 9.202562314824482] },

    // Florence
    { name: "Florence", description: "Sunsets and sunrises, they don't compare to your smile",  coords: [43.769290967255344, 11.253670373799066], image: florence },
    { name: "Ponte vecchio", description: "I wonder if the guy is still playing on that bridge !", coords: [43.768041188027794, 11.25320787119915] },
    { name: "You are the best view", description: "The most beautiful view, also Florence in the background", coords: [43.76384722034888, 11.256406572611123] },
    { name: "You walk so much !", description: "but with you I'd go anywhere", coords: [43.762627541375856, 11.248311973383077] },
    { name: "Palazzo Pitti", description: "Should have gotten both tickets to begin with !", coords: [43.765290419601264, 11.250107374130806] },
    { name: "Syracuse University in Florence", description: "So many memories here for you, I'm glad I saw a glimpse", coords: [43.78119937807293, 11.267805151628181] },
    { name: "Four Seasons", description: "I had never sneaked into a hotel before !", coords: [43.77702652927333, 11.266542993597424] },

    { name: "A fateful encounter", description: "Where we met your parents ! I saw so worried !", coords: [43.7731195124688, 11.255878270630548] },
    { name: "Piazza della Repubblica", description: "Next time here, the carousel", coords: [43.77147565383915, 11.253942703768297] },
    { name: "Piazza della Signoria", description: "What a beautiful lightshow !", coords: [43.769586854788415, 11.255649064216614] },
    { name: "All'antico vinaio", description: "Even waiting in queue is fun with you", coords: [43.768562193275834, 11.257772641954448] },
    { name: "The best of lunches", description: "What a beautiful lunch, together with you", coords: [43.76727653318871, 11.257628314005407] }, // foto
    { name: "Sunrise and smiles", description: "A beautiful sunrise, the first of many !", coords: [43.763040356904995, 11.26397159941636] },
    { name: "An early breakfast ? Or a haze in the morning ?", description: "I was so sleepy, protect me !", coords: [43.77666017100845, 11.249995942640627] },
    { name: "Yab club", description: "Making out and dancing, with you", coords: [43.77093495043307, 11.252789015379884] },
    { name: "Giunti Libreria and Cinema", description: "Beautiful venue, but you are the best show", coords: [43.77100429077448, 11.252504415133426] },

    // Tallinn
    { name: "Tallinn", description: "Where it all just made sense", coords: [59.43693717805752, 24.756926457463138], image: tallinn },
    { name: "Home", description: "Tiramisu', napping, hugging and kissing, so many memories !", coords: [59.42545741058523, 24.73752022371597], image: home},
    { name: "Home", description: "Very demure, very mindful", coords: [59.42549741058523, 24.73732022371597], image: disaster},
    { name: "Möku", description: "Your first espresso martini !", coords: [59.44035875342937, 24.728765015923983], image: moku },
    { name: "F-Hoone", description: "", coords: [59.43957005140575, 24.729089782322166], image: fhoone },
    { name: "Tallinn Port", description: "Finland, but why !", coords: [59.44472012421977, 24.761987646695943] },
    { name: "Baltic sea", description: "Sneaky pics, lots of love", coords: [59.603915346469236, 24.683187345444104], image: sneaky },
    { name: "Pho lunch", description: "Polite good", coords: [59.431927262600446, 24.746391729415276] },
    { name: "Dumplings were... interesting", description: "At least the cake was good 🥹", coords: [59.42384846094173, 24.74277140253224], image: cake },
    { name: "Viru bog", description: "In the woods, with the best company", coords: [59.46502796416673, 25.63888110210818], image: bogAmy},
    { name: "Viru bog", description: "Sunset, snow, and the most beautiful smile", coords: [59.4687343982517, 25.655060187001272], image: bogAmy2},
    { name: "Viru bog", description: "My favourite picture of us !", coords: [59.47016580936945, 25.66044956459359], image: together },
    { name: "Steaks and smiles", description: "FOOOOOOOOOOD", coords: [59.442558820639704, 24.733699252171956], image: steak },
    { name: "Stephen", description: "Stephen", coords: [59.4425425391391, 24.777939874947908] },
    { name: ".... WHYYYYYy", description: "Really ? ...", coords: [59.42584387726853, 24.736639796201782], image: butWhy },
    { name: "Airport", description: "The hardest of goodbyes", coords: [59.416708762134675, 24.799166807425124] },

    // Finland

    { name: "Helsinki", description: "It's just churches !", coords: [60.16989258993078, 24.938581581131107] },
    { name: "Church !", description: "Looks badass", coords: [60.17069240414722, 24.952346885265012], image: church },
    { name: "Kiasma", description: "Architecture students !", coords: [60.171591075033184, 24.937239908019286], image: museum },
    { name: "Doge", description: "Best thing out of Finland", coords: [60.17174906326815, 24.936739869164633], image: doge},
    { name: "Ramen!", description: "Politely good", coords: [60.166514196709194, 24.93324884246111], image: politeGood },
    { name: "Gattos", description: "My cat looks better 😎", coords: [60.163126516547365, 24.946726471771054], image: gatto},
    { name: "St. John's Church", description: "Intimidating looking church", coords: [60.16177778734054, 24.945196159558023] },
    { name: "Reaktor", description: "Sneaking into places...", coords: [60.16976663290294, 24.948969409469917] },
    { name: "Port", description: "The best thing about Finland, the ride back to Tallinn", coords: [60.15039512968832, 24.91477031261563] },

    // Syracuse
    { name: "Can't wait too see you here, Darling", description: "❤️", coords: [43.041448415145, -76.1314511885353] },
    // { name: "", description: "", coords: [] },
    // { name: "", description: "", coords: [] },
    // { name: "", description: "", coords: [] },
    // { name: "", description: "", coords: [] },

];