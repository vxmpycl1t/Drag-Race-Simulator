"use strict";
//mini-challenge stuff:
class MiniChallenge {
    generateDescription() {
        let description = document.querySelector("b#Description");
        let desc1;
        (function (desc1) {
            desc1[desc1["wigs with "] = 0] = "wigs with ";
            desc1[desc1["a quiz about "] = 1] = "a quiz about ";
            desc1[desc1["nails with "] = 2] = "nails with ";
            desc1[desc1["a competition about "] = 3] = "a competition about ";
            desc1[desc1["a song about "] = 4] = "a song about ";
            desc1[desc1["make-up tutorials with "] = 5] = "make-up tutorials with ";
            desc1[desc1["make a quick look about "] = 6] = "make a quick look about ";
            desc1[desc1["a photoshoot about "] = 7] = "a photoshoot about ";
        })(desc1 || (desc1 = {}));
        let desc2;
        (function (desc2) {
            desc2[desc2["the pitcrew."] = 0] = "the pitcrew.";
            desc2[desc2["a partner."] = 1] = "a partner.";
            desc2[desc2["noodles."] = 2] = "noodles.";
            desc2[desc2["hip pads."] = 3] = "hip pads.";
            desc2[desc2["balls."] = 4] = "balls.";
            desc2[desc2["past Drag Race contestants"] = 5] = "past Drag Race contestants";
            desc2[desc2["a celebrity."] = 6] = "a celebrity.";
        })(desc2 || (desc2 = {}));
        //reading and puppet challenges:
        if (totalCastSize >= 10 && currentCast.length == 7 && !all_stars && episodeCount > 3 || currentCast.length == totalCastSize && (all_stars || lipsync_assassin)) {
            description.innerHTML = "The library is open! In today's mini-challenge, the queens will read eachother!";
            readingChallenge();
        }
        else if (totalCastSize != 5 && currentCast.length == 5) {
            description.innerHTML = "Bring in the puppets! The queens will parody eachother using puppets!";
        }
        else {
            description.innerHTML = "In today's mini-challenge, the queens will do " + desc1[randomNumber(0, 7)] + desc2[randomNumber(0, 6)];
        }
    }
    rankPerformances() {
        let screen = new Scene();
        if (team) {
            let winner = currentCast[randomNumber(0, currentCast.length - 1)];
            screen.createImage(winner.QueenA.image, "royalblue");
            screen.createImage(winner.QueenB.image, "royalblue");
            screen.createBold(`${winner.getName()} won the mini-challenge!`);
            winner.miniEpisode.push(episodeCount);
            winner.QueenA.miniEpisode.push(episodeCount);
            winner.QueenB.miniEpisode.push(episodeCount);
        } else {
            if (randomNumber(0, 100) <= 90) {
                let winner = currentCast[randomNumber(0, currentCast.length - 1)];
                screen.createImage(winner.image, "royalblue");
                screen.createBold(`${winner.getName()} won the mini-challenge!`);
                winner.miniEpisode.push(episodeCount);
            }else {
                let winner = randomNumber(0, currentCast.length - 1);
                let second;
                do{
                    second = randomNumber(0, currentCast.length - 1);
                }while (second == winner);
                screen.createImage(currentCast[winner].image, "royalblue");
                screen.createImage(currentCast[second].image, "royalblue");
                screen.createBold(`${currentCast[winner].getName()} and ${currentCast[second].getName()} won the mini-challenge!`);
                currentCast[winner].miniEpisode.push(episodeCount);
                currentCast[second].miniEpisode.push(episodeCount);
            }
        }
    }
}
//challenge modifiers:
let actingChallengeCounter = 0;
let comedyChallengeCounter = 0;
let marketingChallengeCounter = 0;
let danceChallengeCounter = 0;
let designChallengeCounter = 0;
let improvChallengeCounter = 0;
var isDesignChallenge = false;
let rusicalCounter = false;
let ballCounter = false;
let talentShowCounter = false;
let girlGroupCounter = false;
let makeoverCounter = false;
let snatchCounter = false;
let rumixCounter = false;
let lastChallenge = '';
function miniChallenge() {
    let miniChallengeScreen = new Scene();
    miniChallengeScreen.clean();
    miniChallengeScreen.createHeader("Mini-challenge!");
    miniChallengeScreen.createBold("", "Description");
    miniChallengeScreen.createHorizontalLine();
    document.body.style.backgroundImage = "url('image/werkroom.webp')";
    let challenge = new MiniChallenge();
    challenge.generateDescription();
    challenge.rankPerformances();
    //deal with maxi chalenges:
    let challenges = ["actingChallenge()", "comedyChallenge()", "danceChallenge()", "designChallenge()", "improvChallenge()", "marketingChallenge()"];
    //remove from possible challenges list:
    if (actingChallengeCounter == 3)
        challenges.splice(challenges.indexOf("actingChallenge()"), 1);
    if (comedyChallengeCounter == 3)
        challenges.splice(challenges.indexOf("comedyChallenge()"), 1);
    if (marketingChallengeCounter == 3)
        challenges.splice(challenges.indexOf("marketingChallenge()"), 1);
    if (danceChallengeCounter == 2)
        challenges.splice(challenges.indexOf("danceChallenge()"), 1);
    if (designChallengeCounter == 3)
        challenges.splice(challenges.indexOf("designChallenge()"), 1);
    if (improvChallengeCounter == 3)
        challenges.splice(challenges.indexOf("improvChallenge()"), 1);
    createChallenge(challenges, miniChallengeScreen);
}
//GENERAL CHALLENGES:
let team1 = [];
let team2 = [];
let team3 = [];
let isTeamChallenge = false;
class ActingChallenge {
    generateDescription() {
        let description = document.querySelector("b#Description");
        let desc1;
        (function (desc1) {
            desc1[desc1["theather piece about "] = 0] = "theather piece about ";
            desc1[desc1["parody film about "] = 1] = "parody film about ";
            desc1[desc1["commercial about "] = 2] = "commercial about ";
            desc1[desc1["60's inspired film about "] = 3] = "60's inspired film about ";
            desc1[desc1["80's inspired film about "] = 4] = "80's inspired film about ";
        })(desc1 || (desc1 = {}));
        let desc2;
        (function (desc2) {
            desc2[desc2["crime."] = 0] = "crime.";
            desc2[desc2["phone apps."] = 1] = "phone apps.";
            desc2[desc2["social media."] = 2] = "social media.";
            desc2[desc2["cancel culture."] = 3] = "cancel culture.";
            desc2[desc2["gayness."] = 4] = "gayness.";
            desc2[desc2["celebrities."] = 5] = "celebrities.";
            desc2[desc2["the future."] = 6] = "the future.";
            desc2[desc2["the rainbow."] = 7] = "the rainbow.";
        })(desc2 || (desc2 = {}));
        description.innerHTML = "The queens will act in a " + desc1[randomNumber(0, 4)] + desc2[randomNumber(0, 6)];
    }
    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++) {
            currentCast[i].getActing();
        }
        sortPerformances(currentCast);
    }
}
function actingChallenge() {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createBold("", "Description");
    let challenge = new ActingChallenge();
    challenge.generateDescription();
    if (randomNumber(0, 100) >= 50 && currentCast.length > 6 && currentCast.length <= 15 && !isTeamChallenge && (top3 || top4)){
        isTeamChallenge = true;
        teamMaking();
        challenge.rankPerformances();
    } else {
        challenge.rankPerformances();
    }
    actingChallengeCounter++;
    isDesignChallenge = false;
    episodeChallenges.push("Acting");
    queensPerformances();
}
class ComedyChallenge {
    generateDescription() {
        let description = document.querySelector("b#Description");
        let desc1;
        let whatChallengeIs = randomNumber(0, 1);
        (function (desc1) {
            desc1[desc1["a comedy routine about "] = 0] = "a comedy routine about ";
            desc1[desc1["a roast about "] = 1] = "a roast about ";
        })(desc1 || (desc1 = {}));
        let desc2;
        (function (desc2) {
            desc2[desc2["love."] = 0] = "love.";
            desc2[desc2["sex."] = 1] = "sex.";
            desc2[desc2["crime."] = 2] = "crime.";
            desc2[desc2["school."] = 3] = "school.";
            desc2[desc2["a popular TV series."] = 4] = "a popular TV series.";
            desc2[desc2["Drag Race."] = 5] = "Drag Race.";
            desc2[desc2["Past Drag Race Contestants."] = 6] = "Past Drag Race Contestants.";
            desc2[desc2["comedy."] = 7] = "comedy.";
        })(desc2 || (desc2 = {}));
        description.innerHTML = "The queens will participate in " + desc1[whatChallengeIs] + desc2[randomNumber(0, 7)];
        if (whatChallengeIs == 0) {
            episodeChallenges.push("Stand Up");
        } else {
            episodeChallenges.push("Roast");
        }
    }
    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getComedy();
        sortPerformances(currentCast);
    }
}
function comedyChallenge() {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createBold("", "Description");
    let challenge = new ComedyChallenge();
    challenge.generateDescription();
    challenge.rankPerformances();
    comedyChallengeCounter++;
    isDesignChallenge = false;
    queensPerformances();
}
class MarketingChallenge {
    generateDescription() {
        let description = document.querySelector("b#Description");
        let desc1;
        let whatChallengeIs = randomNumber(0, 1);
        (function (desc1) {
            desc1[desc1["a parody commercial about "] = 0] = "a parody commercial about ";
            desc1[desc1["a parody trailer about "] = 1] = "a parody trailer about ";
        })(desc1 || (desc1 = {}));
        let desc2;
        (function (desc2) {
            desc2[desc2["love."] = 0] = "love.";
            desc2[desc2["sex."] = 1] = "sex.";
            desc2[desc2["crime."] = 2] = "crime.";
            desc2[desc2["school."] = 3] = "school.";
            desc2[desc2["a popular TV series."] = 4] = "a popular TV series.";
            desc2[desc2["Drag Race."] = 5] = "Drag Race.";
            desc2[desc2["Past Drag Race Contestants."] = 6] = "Past Drag Race Contestants.";
            desc2[desc2["comedy."] = 7] = "comedy.";
        })(desc2 || (desc2 = {}));
        description.innerHTML = "The queens will participate in " + desc1[whatChallengeIs] + desc2[randomNumber(0, 7)];
        if (whatChallengeIs == 0) {
            episodeChallenges.push("Commercial");
        } else {
            episodeChallenges.push("Marketing");
        }
    }
    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getMarketing();
        sortPerformances(currentCast);
    }
}
function marketingChallenge() {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createBold("", "Description");
    let challenge = new MarketingChallenge();
    challenge.generateDescription();
    if (randomNumber(0, 100) >= 60 && currentCast.length > 6 && currentCast.length <= 15 && !isTeamChallenge && (top3 || top4)){
        isTeamChallenge = true;
        teamMaking();
        challenge.rankPerformances();
    } else {
        challenge.rankPerformances();
    }
    marketingChallengeCounter++;
    isDesignChallenge = false;
    queensPerformances();
}
class DanceChallenge {
    generateDescription() {
        let description = document.querySelector("b#Description");
        let desc1;
        (function (desc1) {
            desc1[desc1["the history of disco."] = 0] = "the history of disco.";
            desc1[desc1["RuPaul's biography."] = 1] = "RuPaul's biography.";
            desc1[desc1["rival dance clubs."] = 2] = "rival dance clubs.";
            desc1[desc1["Drag Race."] = 3] = "Drag Race.";
        })(desc1 || (desc1 = {}));
        description.innerHTML = "The queens will participate in a dance number about " + desc1[randomNumber(0, 3)];
        if (randomNumber(0, 100) >= 50) {
            episodeChallenges.push("Dance");
        } else {
            episodeChallenges.push("Choreo");
        }
    }
    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getDance();
        sortPerformances(currentCast);
    }
}
function danceChallenge() {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createBold("", "Description");
    let challenge = new DanceChallenge();
    challenge.generateDescription();
    if (randomNumber(0, 100) >= 70 && currentCast.length > 6 && currentCast.length <= 15 && !isTeamChallenge && (top3 || top4)){
        isTeamChallenge = true;
        teamMaking();
        challenge.rankPerformances();
    } else {
        challenge.rankPerformances();
    }
    danceChallengeCounter++;
    isDesignChallenge = false;
    queensPerformances();
}
class DesignChallenge {
    generateDescription() {
        let description = document.querySelector("b#Description");
        let desc1;
        (function (desc1) {
            desc1[desc1["trash."] = 0] = "trash.";
            desc1[desc1["random items."] = 1] = "random items.";
            desc1[desc1["dollar store items."] = 2] = "dollar store items.";
            desc1[desc1["a specific color scheme."] = 3] = "a specific color scheme.";
            desc1[desc1["items inspired by past Drag Race contestants."] = 4] = "items inspired by past Drag Race contestants.";
            desc1[desc1["bags."] = 5] = "bags.";
            desc1[desc1["wigs."] = 6] = "wigs.";
            desc1[desc1["winter items."] = 7] = "winter items.";
            desc1[desc1["summer items."] = 8] = "summer items.";
        })(desc1 || (desc1 = {}));
        if (currentCast.length == 6 && makeoverCounter == false && team == false && currentCast != firstCast && currentCast != secondCast && !uk3Premiere && !s9Premiere && !conjoinedQueens) {
            description.innerHTML = "It's the makeover challenge! The queens will make everyday people their drag sisters!";
        }
        else if (currentCast.length == totalCastSize && (uk3Premiere || s9Premiere) && !s9PremiereCheck && !uk3PremiereCheck) {
            description.innerHTML = "The queens will bring it to the runway and serve not one but two looks!";
        }
        else
            description.innerHTML = "The queens will do outfits with " + desc1[randomNumber(0, 8)];
    }
    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getDesign();
        sortPerformances(currentCast);
    }
}
function designChallenge() {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createBold("", "Description");
    let challenge = new DesignChallenge();
    challenge.generateDescription();
    challenge.rankPerformances();
    isDesignChallenge = true;
    queensPerformances();
    designChallengeCounter++;
    if (currentCast.length == 6 && makeoverCounter == false && team == false && currentCast != firstCast && currentCast != secondCast && !uk3Premiere && !s9Premiere && !conjoinedQueens) {
        episodeChallenges.push("Makeover");
        makeoverCounter = true;
    }
    else if (currentCast.length == totalCastSize && (uk3Premiere || s9Premiere) && !s9PremiereCheck && !uk3PremiereCheck){
        episodeChallenges.push("Runway");
    }
    else if (currentCast.length == totalCastSize - 1 && s9Premiere && !s9PremiereCheck)
        episodeChallenges.push("Runway");
    else
        episodeChallenges.push("Design");
}
class RunwayChallenge {
    generateDescription() {
        let description = document.querySelector("b#Description");
        let desc;
        (function (desc) {
            desc[desc["Feathers."] = 0] = "Feathers.";
            desc[desc["Fascinator."] = 1] = "Fascinator.";
            desc[desc["Pink."] = 2] = "Pink.";
            desc[desc["purple."] = 3] = "Purple.";
            desc[desc["Caftan."] = 4] = "Caftan.";
            desc[desc["Trains."] = 5] = "Trains.";
            desc[desc["Yellow."] = 6] = "Yellow.";
            desc[desc["White."] = 7] = "White.";
            desc[desc["Black."] = 8] = "Black.";
            desc[desc["Ugly Dress."] = 9] = "Ugly Dress.";
            desc[desc["Naughty."] = 10] = "Naughty.";
            desc[desc["Crazy Sexy Cool."] = 11] = "Crazy Sexy Cool.";
            desc[desc["Country."] = 12] = "Country.";
            desc[desc["Phoenix."] = 13] = "Phoenix.";
            desc[desc["Silver."] = 14] = "Silver.";
            desc[desc["2 in 1."] = 15] = "2 in 1.";
            desc[desc["Surprise!"] = 16] = "Surprise!";
            desc[desc["Gold."] = 17] = "Gold.";
            desc[desc["Blue."] = 18] = "Blue.";
            desc[desc["Fish"] = 19] = "Fish";
            desc[desc["Butch."] = 20] = "Butch.";
            desc[desc["Amazon."] = 21] = "Amazon.";
            desc[desc["All That Glitters."] = 22] = "All That Glitters.";
            desc[desc["Facekini."] = 23] = "Facekini.";
            desc[desc["Zodiac Sign."] = 24] = "Zodiac Sign.";
            desc[desc["Spring."] = 25] = "Spring.";
            desc[desc["Fall."] = 26] = "Fall.";
            desc[desc["Caftan."] = 27] = "Caftan.";
            desc[desc["Plastique Fantastique."] = 28] = "Plastique Fantastique.";
            desc[desc["Goddess."] = 29] = "Goddess.";
            desc[desc["Club Kid."] = 30] = "Club Kid.";
            desc[desc["Retro."] = 31] = "Retro.";
            desc[desc["Rollergirls."] = 32] = "Rollergirls.";
            desc[desc["Country."] = 33] = "Country.";
            desc[desc["Candy."] = 34] = "Candy.";
            desc[desc["Chaps."] = 35] = "Chaps.";
            desc[desc["Mirror, Mirror."] = 36] = "Mirror, Mirror.";
            desc[desc["Circus."] = 37] = "Circus.";
            desc[desc["Latex."] = 38] = "Latex.";
            desc[desc["Denim & Diamonds."] = 39] = "Denim & Diamonds.";
            desc[desc["Rebellion."] = 40] = "Rebellion.";
            desc[desc["Divalicious."] = 41] = "Divalicious.";
            desc[desc["Trains."] = 42] = "Trains.";
            desc[desc["Flower."] = 43] = "Flower.";
            desc[desc["Pageant."] = 44] = "Pageant.";
            desc[desc["Futurism."] = 45] = "Futurism.";
        })(desc || (desc = {}));
        description.innerHTML = "The queens will bring it to the runway! The category is: " + desc[randomNumber(0, 45)];
    }
    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getRunwayChallenge();
        sortPerformances(currentCast);
    }
}
function runwayChallenge() {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Runway-challenge!");
    challengeScreen.createBold("", "Description");
    let challenge = new RunwayChallenge();
    challenge.generateDescription();
    challenge.rankPerformances();
    let slay = currentCast.filter(function (queen) { return queen.performanceScore < 6; });
    let great = currentCast.filter(function (queen) { return queen.performanceScore >= 6 && queen.performanceScore < 16; });
    let good = currentCast.filter(function (queen) { return queen.performanceScore >= 16 && queen.performanceScore < 26; });
    let bad = currentCast.filter(function (queen) { return queen.performanceScore >= 26; });
    createRunwayDesc(slay, great, good, bad);
    challengeScreen.createButton("Proceed", "judging()");
}
class ImprovChallenge {
    generateDescription() {
        let description = document.querySelector("b#Description");
        let desc1;
        let whatChallengeIs = randomNumber(0, 12);
        (function (desc1) {
            desc1[desc1["political debate."] = 0] = "political debate.";
            desc1[desc1["celebrity interview."] = 1] = "celebrity interview.";
            desc1[desc1["modern morning TV show."] = 2] = "modern morning TV show.";
            desc1[desc1["late-night TV show."] = 3] = "late-night TV show.";
            desc1[desc1["new Bossy Rossy episode."] = 4] = "new Bossy Rossy episode.";
            desc1[desc1["suggestive kids TV show."] = 5] = "suggestive kids TV show.";
            desc1[desc1["Bitchelor show."] = 6] = "Bitchelor show.";
            desc1[desc1["Jersey Justice show."] = 7] = "Jersey Justice show.";
            desc1[desc1["diva worship talk show."] = 8] = "diva worship talk show.";
            desc1[desc1["talent show for people with little talent."] = 9] = "talent show for people with little talent.";
            desc1[desc1["drag queen spoof of the celebrity gossip and drama television show."] = 10] = "drag queen spoof of the celebrity gossip and drama television show.";
            desc1[desc1["pageant, the Miss Loose Jaw Pageant."] = 11] = "pageant, the Miss Loose Jaw Pageant.";
            desc1[desc1["intimate chat show called Pink Table Talk."] = 12] = "intimate chat show called Pink Table Talk.";
        })(desc1 || (desc1 = {}));
        description.innerHTML = "The queens will improvise in a " + desc1[whatChallengeIs];
        if (whatChallengeIs == 0) {
            episodeChallenges.push("Political Debate");
        } else if (whatChallengeIs == 4) {
            episodeChallenges.push("The Bossy Rossy Show");
        } else if (whatChallengeIs == 6) {
            episodeChallenges.push("The Bitchelor");
        } else {
            episodeChallenges.push("Improv");
        }
    }
    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getImprov();
        sortPerformances(currentCast);
    }
}
function improvChallenge() {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createBold("", "Description");
    let challenge = new ImprovChallenge();
    challenge.generateDescription();
    if (randomNumber(0, 100) >= 50 && currentCast.length > 6 && currentCast.length <= 15 && !isTeamChallenge && (top3 || top4)){
        isTeamChallenge = true;
        teamMaking();
        challenge.rankPerformances();
    } else {
        challenge.rankPerformances();
    }
    improvChallengeCounter++;
    isDesignChallenge = false;
    queensPerformances();
}
//SPECIAL CHALLENGES:
class SnatchGame {
    generateDescription() {
        let description = document.querySelector("b#Description");
        description.innerHTML = "Today's challenge is... SNATCH GAME!! The queens will do funny celebrity impersonations!";
        if (randomNumber(0, 100) >= 95) {
            episodeChallenges.push("Snatch Game of Love");
        } else {
            episodeChallenges.push("Snatch Game");
        }
    }
    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getSnatch();
        sortPerformances(currentCast);
    }
}
function snatchGame() {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createBold("", "Description");
    let challenge = new SnatchGame();
    challenge.generateDescription();
    challenge.rankPerformances();
    isDesignChallenge = false;
    snatchCounter = true;
    queensPerformances();
}
class Rusical {
    generateDescription() {
        let description = document.querySelector("b#Description");
        let desc;
        (function (desc) {
            desc[desc["Social Media: The Unverified Rusical."] = 0] = "Social Media: The Unverified Rusical.";
            desc[desc["Halftime Headliners."] = 1] = "Halftime Headliners.";
            desc[desc["CindeRulla: The Rusical."] = 2] = "CindeRulla: The Rusical.";
            desc[desc["Under the Big Top."] = 3] = "Under the Big Top.";
            desc[desc["West End Wendys - The Rusical."] = 4] = "West End Wendys - The Rusical.";
            desc[desc["RuPaul's music carreer."] = 5] = "RuPaul's music carreer.";
            desc[desc["Shade: The Rusical."] = 6] = "Shade: The Rusical.";
            desc[desc["Glamazonian Airways."] = 7] = "Glamazonian Airways.";
            desc[desc["Bitch Perfect."] = 8] = "Bitch Perfect.";
            desc[desc["HERstory of the World'."] = 9] = "HERstory of the World'.";
            desc[desc["Kardashians: The Rusical."] = 10] = "Kardashians: The Rusical.";
            desc[desc["VH1 Divas Live."] = 11] = "VH1 Divas Live.";
            desc[desc["PharmaRusical."] = 12] = "PharmaRusical.";
            desc[desc["Cher: The Unauthorized Rusical."] = 13] = "Cher: The Unauthorized Rusical.";
            desc[desc["Trump: The Rusical."] = 14] = "Trump: The Rusical.";
            desc[desc["Madonna: The Unauthorized Rusical."] = 15] = "Madonna: The Unauthorized Rusical.";
            desc[desc["Máxima - The Rusical."] = 16] = "Máxima - The Rusical.";
            desc[desc["Rats: The Rusical."] = 17] = "Rats: The Rusical.";
        })(desc || (desc = {}));
        description.innerHTML = "Today's challenge is... THE RUSICAL!! The queens were tasked to take part in " + desc[randomNumber(0, 17)];
    }
    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getRusical();
        sortPerformances(currentCast);
    }
}
function rusical() {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createBold("", "Description");
    let challenge = new Rusical();
    challenge.generateDescription();
    challenge.rankPerformances();
    isDesignChallenge = false;
    rusicalCounter = true;
    queensPerformances();
    episodeChallenges.push("Rusical");
}
class Ball {
    generateDescription() {
        let description = document.querySelector("b#Description");
        let desc1;
        (function (desc1) {
            desc1[desc1["Executive realness, "] = 0] = "Executive realness, ";
            desc1[desc1["Party night, "] = 1] = "Party night, ";
            desc1[desc1["Summer, "] = 2] = "Summer, ";
            desc1[desc1["Elegant, "] = 3] = "Elegant, ";
            desc1[desc1["Sweet 16, "] = 4] = "Sweet 16, ";
            desc1[desc1["Black and white, "] = 5] = "Black and white, ";
            desc1[desc1["Winter, "] = 6] = "Winter, ";
        })(desc1 || (desc1 = {}));
        let desc2;
        (function (desc2) {
            desc2[desc2["Antique, "] = 0] = "Antique, ";
            desc2[desc2["Rainbow, "] = 1] = "Rainbow, ";
            desc2[desc2["Rich, "] = 2] = "Rich, ";
            desc2[desc2["Space, "] = 3] = "Space, ";
            desc2[desc2["Wild, "] = 4] = "Wild, ";
            desc2[desc2["Water, "] = 5] = "Water, ";
            desc2[desc2["Swimsuit, "] = 6] = "Swimsuit, ";
        })(desc2 || (desc2 = {}));
        let desc3;
        (function (desc3) {
            desc3[desc3["Ice queen."] = 0] = "Ice queen.";
            desc3[desc3["Futuristic."] = 1] = "Futuristic.";
            desc3[desc3["Fire."] = 2] = "Fire.";
            desc3[desc3["Princess."] = 3] = "Princess.";
            desc3[desc3["Jewels."] = 4] = "Jewels.";
            desc3[desc3["Flowers."] = 5] = "Flowers.";
            desc3[desc3["Evening Gown Extravaganza."] = 6] = "Evening Gown Extravaganza.";
        })(desc3 || (desc3 = {}));
        description.innerHTML = "Today's challenge is... THE BALL! The queens will bring three looks to the runway! The themes are: " + desc1[randomNumber(0, 6)] + desc2[randomNumber(0, 6)] + desc3[randomNumber(0, 6)];
    }
    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getBall();
        sortPerformances(currentCast);
    }
}
function ball() {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createBold("", "Description");
    let challenge = new Ball();
    challenge.generateDescription();
    challenge.rankPerformances();
    isDesignChallenge = true;
    queensPerformances();
    ballCounter = true;
    episodeChallenges.push("Ball");
}
class Rumix {
    generateDescription() {
        let description = document.querySelector("b#Description");
        let desc1;
        (function (desc1) {
            desc1[desc1["Read U Wrote U."] = 0] = "Read U Wrote U.";
            desc1[desc1["Category Is."] = 1] = "Category Is.";
            desc1[desc1["Kitty Girl."] = 2] = "Kitty Girl.";
            desc1[desc1["American."] = 3] = "American.";
            desc1[desc1["Super Queen."] = 4] = "Super Queen.";
            desc1[desc1["Queens Everywhere."] = 5] = "Queens Everywhere.";
            desc1[desc1["Rock It (To The Moon)."] = 6] = "Rock It (To The Moon).";
            desc1[desc1[" I Made It / Mirror Song / Losing is the New Winning."] = 7] = " I Made It / Mirror Song / Losing is the New Winning.";
            desc1[desc1["Clap Back."] = 8] = "Clap Back.";
            desc1[desc1["U Wear It Well."] = 9] = "U Wear It Well.";
            desc1[desc1["A Little Bit of Love."] = 10] = "A Little Bit of Love.";
            desc1[desc1["Lucky."] = 11] = "Lucky.";
            desc1[desc1["I'm a Winner, Baby."] = 12] = "I'm a Winner, Baby.";
            desc1[desc1["This Is Our Country."] = 13] = "This Is Our Country.";
            desc1[desc1["Hey Sis, It's Christmas."] = 14] = "Hey Sis, It's Christmas.";
            desc1[desc1["Queen of the North."] = 15] = "Queen of the North.";
        })(desc1 || (desc1 = {}));
        description.innerHTML = "Today's challenge is... the rumix! The queens will make a verse and a choreography for " + desc1[randomNumber(0, 15)];
    }
    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getRumix();
        sortPerformances(currentCast);
    }
}
function rumix() {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createBold("", "Description");
    let challenge = new Rumix();
    challenge.generateDescription();
    challenge.rankPerformances();
    isDesignChallenge = false;
    episodeChallenges.push("Rumix");
    rumixCounter = true;
    queensPerformances();
}
class GirlGroup {
    generateDescription() {
        let description = document.querySelector("b#Description");
        let desc1;
        (function (desc1) {
            desc1[desc1["Break Up (Bye Bye)"] = 0] = "Break Up (Bye Bye)";
            desc1[desc1["Drag Up Your Life"] = 1] = "Drag Up Your Life";
            desc1[desc1["Sitting on a Secret"] = 2] = "Sitting on a Secret";
            desc1[desc1["Don't Funk it Up"] = 3] = "Don't Funk it Up";
            desc1[desc1["Everybody Say Love"] = 4] = "Everybody Say Love";
            desc1[desc1["You Don't Know Me"] = 5] = "You Don't Know Me";
            desc1[desc1["I'm That Bitch"] = 6] = "I'm That Bitch";
            desc1[desc1["I'm in Love!"] = 7] = "I'm in Love!";
            desc1[desc1["Not Sorry Aboot It"] = 8] = "Not Sorry Aboot It";
            desc1[desc1["Condragulations "] = 9] = "Condragulations";
            desc1[desc1["Phenomenon"] = 10] = "Phenomenon";
            desc1[desc1["UK Hun?"] = 11] = "UK Hun?";
            desc1[desc1["Queens Down Under"] = 12] = "Queens Down Under";
            desc1[desc1["Divas"] = 13] = "Divas";
            desc1[desc1["Show Up Queen"] = 14] = "Show Up Queen";
            desc1[desc1["B.D.E (Big Drag Energy)"] = 15] = "B.D.E (Big Drag Energy)";
            desc1[desc1["Bye Flop"] = 16] = "Bye Flop";
            desc1[desc1["Superstar"] = 17] = "Superstar";
            desc1[desc1["So Much Better Than You"] = 18] = "So Much Better Than You";
            desc1[desc1["Can I Get An Amen?"] = 19] = "Can I Get An Amen?";
            desc1[desc1["Oh No She Betta Don't!"] = 20] = "Oh No She Betta Don't!";
        })(desc1 || (desc1 = {}));
        description.innerHTML = "The remaining queens will record vocals and perform in a Girl Group number for the original song " + desc1[randomNumber(0, 20)] + ".";
    }
    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getRumix();
        sortPerformances(currentCast);
    }
}
function girlgroup() {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createBold("", "Description");
    let challenge = new GirlGroup();
    challenge.generateDescription();
    if (randomNumber(0, 100) >= 50 && currentCast.length > 6 && currentCast.length <= 15 && !isTeamChallenge && (top3 || top4) && episodeCount > 3) {
        isTeamChallenge = true;
        teamMaking();
        challenge.rankPerformances();
    } else {
        challenge.rankPerformances();
    }
    isDesignChallenge = false;
    episodeChallenges.push("Girl Group");
    if (((s12Premiere || porkchopPremiere) && episodeCount <= 2)) {
        girlGroupCounter = false;
    } else {
        girlGroupCounter = true;
    }
    queensPerformances();
}
class TalentShow {
    generateDescription() {
        let description = document.querySelector("b#Description");
        description.innerHTML = "In this first challenge, the queens will prove themselves in a talent show, where they bring all they've got!";
    }
    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getTalentShow();
        sortPerformances(currentCast);
    }
}
function talentshow() {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createBold("", "Description");
    let challenge = new TalentShow();
    challenge.generateDescription();
    queenTalents();
    challenge.rankPerformances();
    isDesignChallenge = true;
    episodeChallenges.push("Talent Show");
    if (s14Premiere && episodeCount == 2 || (lipsync_assassin || all_stars)) {
        talentShowCounter = true;
    }
    queensPerformances();
}
//performance:
function queensPerformances() {
    let performanceScreen = new Scene();
    performanceScreen.createHorizontalLine();
    performanceScreen.createBigText("Queens' performances...");
    let slay = currentCast.filter(function (queen) { return queen.performanceScore < 6; });
    let great = currentCast.filter(function (queen) { return queen.performanceScore >= 6 && queen.performanceScore < 16; });
    let good = currentCast.filter(function (queen) { return queen.performanceScore >= 16 && queen.performanceScore < 26; });
    let bad = currentCast.filter(function (queen) { return queen.performanceScore >= 26 && queen.performanceScore < 31; });
    let flop = currentCast.filter(function (queen) { return queen.performanceScore >= 31 && queen.performanceScore < 50; });
    createPerformanceDesc(slay, great, good, bad, flop);
    if (isDesignChallenge == true || episodeChallenges[episodeChallenges.length - 1] == "Design") {
        performanceScreen.createButton("Proceed", "judging()");
    } else if (thailandFormat && isDesignChallenge == false) {
        if (s12Premiere && episodeCount < 3 || porkchopPremiere && episodeCount < 4) {
            performanceScreen.createButton("Proceed", "runway()", "button2");
        } else {
            performanceScreen.createButton("Proceed", "maxiWin()");
        }
    } else if (thailandFormat && isDesignChallenge == true) {
            performanceScreen.createButton("Proceed", "judgingThailand()");
    } else {
        performanceScreen.createButton("Proceed", "runway()", "button2");
    }
}
function maxiWin() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("Maxi Challenge Winner!");
    screen.createBold("Based on tonight's performances...");
    document.body.style.backgroundImage = "url('image/werkroom.webp')";
    currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
    if (currentCast[0].performanceScore == currentCast[1].performanceScore && randomNumber(0, 100) < 60) {
        currentCast[0].addToTrackRecord("WIN");
        currentCast[1].addToTrackRecord("WIN");
        currentCast[0].favoritism += 4;
        currentCast[1].favoritism += 4;
        currentCast[0].maxiT = true;
        currentCast[1].maxiT = true;
        screen.createImage(currentCast[0].image, "darkblue");
        screen.createImage(currentCast[1].image, "darkblue");
        screen.createBold(currentCast[0].getName() + ", " + currentCast[1].getName() + ", condragulations, You are the winners of this weeks Maxi Challenge!");
    } else {
        screen.createImage(currentCast[0].image, "cyan");
        screen.createBold(currentCast[0].getName() + ", condragulations! You are the winner of this weeks Maxi Challenge!");
        currentCast[0].addToTrackRecord("WIN");
        currentCast[0].favoritism += 4;
        currentCast[0].maxiT = true;
    }
    screen.createHorizontalLine();
    screen.createButton("Proceed", "runwayChallenge()");
}
function teamMaking() {
    let screen = new Scene();
    team1 = [];
    team2 = [];
    team3 = [];
    let twoOrThree = false;
    let castTeams = currentCast.slice(); 
    shuffle(castTeams);
    if (castTeams.length <= 8) {
        team1 = castTeams.splice(0, Math.floor(castTeams.length / 2));
        team2 = [...castTeams];
    }
    else if (castTeams.length >= 9) {
        team1 = castTeams.splice(0, Math.floor(castTeams.length / 3));
        team2 = castTeams.splice(0, Math.floor(castTeams.length / 2));
        team3 = [...castTeams];
        twoOrThree = true;
    }
    let names = "";
    screen.createBigText("Team 1");
    for (let i = 0; i < team1.length; i++) {
        screen.createImage(team1[i].image, "blue");
        if (i == team1.length - 1) {
            names += team1[i].getName() + ".";
        } else {
            names += team1[i].getName() + ", ";
        }
    }
    screen.createBold(names +" You are team 1!");
    names = "";
    screen.createBigText("Team 2");
    for (let i = 0; i < team2.length; i++) {
        screen.createImage(team2[i].image, "pink");
        if (i == team2.length - 1) {
            names += team2[i].getName() + ".";
        } else {
            names += team2[i].getName() + ", ";
        }
    }
    screen.createBold(names +" You are team 2!");
    names = "";
    if (twoOrThree) {
        screen.createBigText("Team 3");
        for (let i = 0; i < team3.length; i++) {
            screen.createImage(team3[i].image, "green");
            if (i == team3.length - 1) {
                names += team3[i].getName() + ".";
            } else {
                names += team3[i].getName() + ", ";
            }
        }
        screen.createBold(names +" You are team 3!");
    }
}
//runway:
function runway() {
    let runwayScreen = new Scene();
    runwayScreen.createHorizontalLine();
    let button2 = document.querySelector("button#button2");
    button2.remove();
    runwayScreen.createBigText("Runway!");
    let desc;
    (function (desc) {
        desc[desc["Feathers."] = 0] = "Feathers.";
        desc[desc["Fascinator."] = 1] = "Fascinator.";
        desc[desc["Pink."] = 2] = "Pink.";
        desc[desc["purple."] = 3] = "Purple.";
        desc[desc["Caftan."] = 4] = "Caftan.";
        desc[desc["Trains."] = 5] = "Trains.";
        desc[desc["Yellow."] = 6] = "Yellow.";
        desc[desc["White."] = 7] = "White.";
        desc[desc["Black."] = 8] = "Black.";
        desc[desc["Ugly Dress."] = 9] = "Ugly Dress.";
        desc[desc["Naughty."] = 10] = "Naughty.";
        desc[desc["Crazy Sexy Cool."] = 11] = "Crazy Sexy Cool.";
        desc[desc["Country."] = 12] = "Country.";
        desc[desc["Phoenix."] = 13] = "Phoenix.";
        desc[desc["Silver."] = 14] = "Silver.";
        desc[desc["2 in 1."] = 15] = "2 in 1.";
        desc[desc["Surprise!"] = 16] = "Surprise!";
        desc[desc["Gold."] = 17] = "Gold.";
        desc[desc["Blue."] = 18] = "Blue.";
        desc[desc["Fish"] = 19] = "Fish";
        desc[desc["Butch."] = 20] = "Butch.";
        desc[desc["Amazon."] = 21] = "Amazon.";
        desc[desc["All That Glitters."] = 22] = "All That Glitters.";
        desc[desc["Facekini."] = 23] = "Facekini.";
        desc[desc["Zodiac Sign."] = 24] = "Zodiac Sign.";
        desc[desc["Spring."] = 25] = "Spring.";
        desc[desc["Fall."] = 26] = "Fall.";
        desc[desc["Caftan."] = 27] = "Caftan.";
        desc[desc["Plastique Fantastique."] = 28] = "Plastique Fantastique.";
        desc[desc["Goddess."] = 29] = "Goddess.";
        desc[desc["Club Kid."] = 30] = "Club Kid.";
        desc[desc["Retro."] = 31] = "Retro.";
        desc[desc["Rollergirls."] = 32] = "Rollergirls.";
        desc[desc["Country."] = 33] = "Country.";
        desc[desc["Candy."] = 34] = "Candy.";
        desc[desc["Chaps."] = 35] = "Chaps.";
        desc[desc["Mirror, Mirror."] = 36] = "Mirror, Mirror.";
        desc[desc["Circus."] = 37] = "Circus.";
        desc[desc["Latex."] = 38] = "Latex.";
        desc[desc["Denim & Diamonds."] = 39] = "Denim & Diamonds.";
        desc[desc["Rebellion."] = 40] = "Rebellion.";
        desc[desc["Divalicious."] = 41] = "Divalicious.";
        desc[desc["Trains."] = 42] = "Trains.";
        desc[desc["Flower."] = 43] = "Flower.";
        desc[desc["Pageant."] = 44] = "Pageant.";
        desc[desc["Futurism."] = 45] = "Futurism.";
    })(desc || (desc = {}));
    runwayScreen.createParagraph("The queens will bring it to the runway!");
    if (currentCast.length > 4)
        runwayScreen.createParagraph("The theme is: " + desc[randomNumber(0, 45)]);
    else if (currentCast.length == 3 && top3 || currentCast.length == 5 && top4 || currentCast.length == 4 && (all_stars || lipsync_assassin) || currentCast.length == 2 && team)
        runwayScreen.createParagraph("The theme is... best drag!");
    for (let i = 0; i < currentCast.length; i++)
        currentCast[i].getRunway();
    let slay = currentCast.filter(function (queen) { return queen.runwayScore < 6; });
    let great = currentCast.filter(function (queen) { return queen.runwayScore >= 6 && queen.runwayScore < 16; });
    let good = currentCast.filter(function (queen) { return queen.runwayScore >= 16 && queen.runwayScore < 26; });
    let bad = currentCast.filter(function (queen) { return queen.runwayScore >= 26; });
    createRunwayDesc(slay, great, good, bad);
    if (currentCast.length > 4)
        runwayScreen.createButton("Proceed", "judging()");
    else if (currentCast.length == 4 && porkchopPremiere && premiereCounter < 3)
        runwayScreen.createButton("Proceed", "judging()");
    else if (currentCast.length == 4 && (top3 || team))
        runwayScreen.createButton("Proceed", "judging()");
    else if (currentCast.length == 3 && team)
        runwayScreen.createButton("Proceed", "judging()");
    else if (currentCast.length == 3 && (top3 || thailandFormat))
        runwayScreen.createButton("Proceed", "finaleJudging()");
    else if (currentCast.length == 2 && (top3 || thailandFormat))
        runwayScreen.createButton("Proceed", "finaleJudging()");
    else if (currentCast.length == 4 && (allstars3Finale))
        runwayScreen.createButton("Proceed", "finaleJuryAS()");
    else if (currentCast.length == 4 && (all_stars || lipsync_assassin))
        runwayScreen.createButton("Proceed", "finaleASJudging()");
    else if (currentCast.length == 2 && team)
        runwayScreen.createButton("Proceed", "finaleTeamJudging()");
}
//helper functions
////create next challenge
function createChallenge(challenges, miniChallengeScreen) {
    for (let i = 0; i < currentCast.length; i++){
        currentCast[i].episodesOn++;
    }
    //first design challenge for regular seasons
    if (currentCast.length == totalCastSize && top3 && episodeCount == 1 && s6Premiere == false || currentCast.length == totalCastSize && top4 && episodeCount == 1 && s6Premiere == false || currentCast.length == totalCastSize && thailandFormat && episodeCount == 1 && s6Premiere == false || currentCast.length == totalCastSize && team || sweatshop || currentCast == firstCast && s6Premiere || currentCast == secondCast && s6Premiere)
        miniChallengeScreen.createButton("Proceed", "designChallenge()");
    //girl group challenge for s12 or porkchop premiere
    else if (premiereCounter <= 2 && (s12Premiere || porkchopPremiere) || all_winners && episodeCount == 6)
        miniChallengeScreen.createButton("Proceed", "girlgroup()");
    //uk3 premiere
    else if (currentCast.length == totalCastSize && uk3Premiere && !uk3PremiereCheck)
        miniChallengeScreen.createButton("Proceed", "designChallenge()");
    //s9 premiere
    else if (currentCast.length == totalCastSize - 1 && s9Premiere && !s9PremiereCheck)
        miniChallengeScreen.createButton("Proceed", "designChallenge()");
    //talent show for all stars and s14 premiere
    else if (currentCast.length == totalCastSize && !talentShowCounter && (all_stars || lipsync_assassin) || currentCast == firstCast && s14Premiere || currentCast == secondCast && s14Premiere || all_winners && currentCast.length <= 10 && episodeCount == 11 || all_winners && currentCast.length > 10 && episodeCount == 14)
        miniChallengeScreen.createButton("Proceed", "talentshow()");
    //snatch game for +10 cast
    else if (totalCastSize >= 10 && currentCast.length == 9 && !team && snatchCounter == false || totalCastSize >= 6 && currentCast.length == 5 && team || all_winners && currentCast.length > 10 && episodeCount == 2)
        miniChallengeScreen.createButton("Proceed", "snatchGame()");
    //snatch game for -10 cast
    else if (totalCastSize < 10 && currentCast.length == (totalCastSize - 1) && !team && snatchCounter == false || all_winners && currentCast.length <= 10 && episodeCount == 2)
        miniChallengeScreen.createButton("Proceed", "snatchGame()");
    //the ball for the third competitive episode for lsftc or all winners
    else if (currentCast.length == totalCastSize - 3 && top4 && !ballCounter || all_winners && episodeCount == 3)
        miniChallengeScreen.createButton("Proceed", "ball()");
    //same but if above condition doesn't apply (example: snatch game needs to happen before the ball)
    else if (currentCast.length == totalCastSize - 4 && (top4 || (all_stars || lipsync_assassin) && randomNumber(0, 100) < 30) && !ballCounter || currentCast.length == 3 && team)
        miniChallengeScreen.createButton("Proceed", "ball()");
    //Girl Group
    else if (currentCast.length == 8 && !girlGroupCounter && (top3 || top4 || thailandFormat || lipsync_assassin))
        miniChallengeScreen.createButton("Proceed", "girlgroup()");
    //rusical
    else if (currentCast.length > 6 && randomNumber(0, 20) >= 19 && !rusicalCounter || currentCast.length > 5 && randomNumber(0, 20) >= 19 && team && !rusicalCounter)
        miniChallengeScreen.createButton("Proceed", "rusical()");
    //makeover
    else if (currentCast.length == 6 && (top3 || thailandFormat || top4) && makeoverCounter == false || currentCast.length == 6 && randomNumber(0, 15) >= 12 && (all_stars || lipsync_assassin) && makeoverCounter == false)
        miniChallengeScreen.createButton("Proceed", "designChallenge()");
    //rumix
    else if (currentCast.length == 5 && !rumixCounter && (top4 || thailandFormat) && (!smackdown || returningQueen == true || chocolateBarTwistCheck)  || all_winners && episodeCount == 1)
        miniChallengeScreen.createButton("Proceed", "rumix()");
    //ball for top3 seasons
    else if (currentCast.length == 4 && top3 && !ballCounter)
        miniChallengeScreen.createButton("Proceed", "ball()");
    //if no conditions apply, create random challenge
    else {
        let currentChallenge = challenges[randomNumber(0, challenges.length - 1)];
        if (currentChallenge == lastChallenge && currentCast.length != totalCastSize) {
            while (currentChallenge == lastChallenge) {
                currentChallenge = challenges[randomNumber(0, challenges.length - 1)];
            }
            lastChallenge = currentChallenge;
            miniChallengeScreen.createButton("Proceed", currentChallenge);
        }
        else {
            lastChallenge = currentChallenge;
            miniChallengeScreen.createButton("Proceed", currentChallenge);
        }
    }
}
////create performance descriptions CREATE NEW DESCRIPTIONS FOR THIS
function createPerformanceDesc(slay, great, good, bad, flop) {
    let screen = new Scene();
    if (slay.length !== 0) {
        for (let i = 0; i < slay.length; i++)
            screen.createImage(slay[i].image, "darkblue");
        screen.createBold("", "slay");
        let slayText = document.getElementById("slay");
        for (let i = 0; i < slay.length; i++)
            slayText.innerHTML += `${slay[i].getName()}, `;
        slayText.innerHTML += "slayed the challenge!";
    }
    if (great.length !== 0) {
        for (let i = 0; i < great.length; i++)
            screen.createImage(great[i].image, "royalblue");
        screen.createBold("", "great");
        let greatText = document.getElementById("great");
        for (let i = 0; i < great.length; i++)
            greatText.innerHTML += `${great[i].getName()}, `;
        greatText.innerHTML += "had a great performance!";
    }
    if (good.length !== 0) {
        for (let i = 0; i < good.length; i++)
            screen.createImage(good[i].image);
        screen.createBold("", "good");
        let goodText = document.getElementById("good");
        for (let i = 0; i < good.length; i++)
            goodText.innerHTML += `${good[i].getName()}, `;
        goodText.innerHTML += "had a good performance.";
    }
    if (bad.length !== 0) {
        for (let i = 0; i < bad.length; i++)
            screen.createImage(bad[i].image, "pink");
        screen.createBold("", "bad");
        let badText = document.getElementById("bad");
        for (let i = 0; i < bad.length; i++)
            badText.innerHTML += `${bad[i].getName()}, `;
        badText.innerHTML += "had a bad performance...";
    }
    if (flop.length !== 0) {
        for (let i = 0; i < flop.length; i++)
            screen.createImage(flop[i].image, "tomato");
        screen.createBold("", "flop");
        let flopText = document.getElementById("flop");
        for (let i = 0; i < flop.length; i++)
            flopText.innerHTML += `${flop[i].getName()}, `;
        flopText.innerHTML += "flopped the challenge...";
    }
    CheckForSpecialEvents(slay, great, good, bad, flop);
}
let floppers = false;
let floppersCheck = false;
let slayers = false;
let slayersCheck = false;
let bottom6WayLipsync = false;
let bottom6WayLipsyncCheck = false;
let s14LaLaPaRUZa = false;
let s14LaLaPaRUZaCheck = false;

function CheckForSpecialEvents(slay, great, good, bad, flop) {
    if (slay.length === 0 && great.length === 0 && currentCast.length >= 8 && !floppersCheck && randomNumber(0, 100) >= 80 && !conjoinedCheck)
        floppers = true;
    if (slay.length == currentCast.length && !slayersCheck && !conjoinedCheck)
        slayers = true;
    else if (slay.length + great.length == currentCast.length && !slayersCheck && randomNumber(0, 100) >= 70 && !conjoinedCheck)
        slayers = true;
    if (flop.length + bad.length >= 5 && flop.length + bad.length < 7 && currentCast.length >= 9 && !bottom6WayLipsyncCheck && randomNumber(0, 100) >= 70 && !conjoinedCheck)
        bottom6WayLipsync = true;
    if (flop.length + bad.length >= 7 && great.length + slay.length + good.length > 0 && currentCast.length > 7 && currentCast.length < 10 &&!s14LaLaPaRUZaCheck && randomNumber(0, 100) >= 70 && !conjoinedCheck)
        s14LaLaPaRUZa = true;
}
function createRunwayDesc(slay, great, good, bad) {
    let screen = new Scene();
    if (slay.length !== 0) {
        for (let i = 0; i < slay.length; i++) {
            screen.createImage(slay[i].image, "darkblue");
            slay[i].runwayScore = 10;
        }
        screen.createBold("", "slayR");
        let slayText = document.getElementById("slayR");
        for (let i = 0; i < slay.length; i++)
            slayText.innerHTML += `${slay[i].getName()}, `;
        slayText.innerHTML += "slayed the runway!";
    }
    if (great.length !== 0) {
        for (let i = 0; i < great.length; i++) {
            screen.createImage(great[i].image, "royalblue");
            great[i].runwayScore = 5;
        }
        screen.createBold("", "greatR");
        let greatText = document.getElementById("greatR");
        for (let i = 0; i < great.length; i++)
            greatText.innerHTML += `${great[i].getName()}, `;
        greatText.innerHTML += "had a great runway!";
    }
    if (good.length !== 0) {
        for (let i = 0; i < good.length; i++) {
            screen.createImage(good[i].image);
            good[i].runwayScore = 0;
        }
        screen.createBold("", "goodR");
        let goodText = document.getElementById("goodR");
        for (let i = 0; i < good.length; i++)
            goodText.innerHTML += `${good[i].getName()}, `;
        goodText.innerHTML += "had a good runway.";
    }
    if (bad.length !== 0) {
        for (let i = 0; i < bad.length; i++) {
            screen.createImage(bad[i].image, "pink");
            bad[i].runwayScore = -3;
        }
        screen.createBold("", "badR");
        let badText = document.getElementById("badR");
        for (let i = 0; i < bad.length; i++)
            badText.innerHTML += `${bad[i].getName()}, `;
        badText.innerHTML += "had a bad runway...";
    }
}
function addQueen() {
    let name = document.getElementById("queenName").value.trim();
    let acting = document.getElementById("actingStat").valueAsNumber;
    let comedy = document.getElementById("comedyStat").valueAsNumber;
    let dance = document.getElementById("danceStat").valueAsNumber;
    let design = document.getElementById("designStat").valueAsNumber;
    let improv = document.getElementById("improvStat").valueAsNumber;
    let runway = document.getElementById("runwayStat").valueAsNumber;
    let lipsync = document.getElementById("lipsyncStat").valueAsNumber;
    let image = document.getElementById("url").value.trim();
    if (acting < 0 || comedy < 0 || dance < 0 || design < 0 || improv < 0 || runway < 0 || lipsync < 0 || acting > 15 || comedy > 15 || dance > 15 || design > 15 || improv > 15 || runway > 15 || lipsync > 15) {
        window.alert("Queens' stats must be between 0 and 15!");
        return;
    }
    if (name == "" || isNaN((acting || comedy || dance || design || improv || runway || lipsync))) {
        window.alert("One of the boxes is empty!");
        return;
    }
    let extension = image.substring(image.lastIndexOf(".") + 1).toLowerCase();
    let noimagemaybe = false;
    if (extension == "png" || extension == "jpg" || extension == ""){
        console.log("Good file");
        if (image == ""){
            image = "noimage";
            noimagemaybe = false;
        }else {
            noimagemaybe = true;
        }
    } else {
        window.alert("Invalid image extension! Use jpg or png instead!");
        document.getElementById("url").value = "";
        return;
    }
    let customQueen = new Queen(name, acting, comedy, dance, design, improv, runway, lipsync, image, noimagemaybe);
    let sameName = false;
    for (let i = 0; i < allCustomQueens.length; i++)
        if (allCustomQueens[i].getName() == customQueen.getName()) {
            window.alert(`There's already a queen with the name ${customQueen.getName()}! Please use another name.`);
            sameName = true;
            break;
        }
    if (sameName == false) {
        allCustomQueens.push(customQueen);
        customQueen.customqueen = true;
        let announce = document.getElementById("announce-new");
        announce.innerHTML = `${customQueen.getName()} added to the queen list!`;
        localStorage.setItem("customQueens", JSON.stringify(allCustomQueens));
        setTimeout(() => {
            document.location.reload();
        }, 1500);
    }
}
function customQueenSelectList() {
    let select = document.getElementById("custom-remove");
    for (let i = 0; i < allCustomQueens.length; i++) {
        let option = document.createElement("option");
        option.innerHTML = allCustomQueens[i].getName();
        option.value = i.toString();
        select.appendChild(option);
    }
}
function removeCustomQueen() {
    let select = document.getElementById("custom-remove");
    let index = parseInt(select.options[select.selectedIndex].value);
    let announce = document.getElementById("announce-remove");
    announce.innerHTML = `${allCustomQueens[index].getName()} removed from the queen list!`;
    allCustomQueens.splice(index, 1);
    localStorage.setItem("customQueens", JSON.stringify(allCustomQueens));
    setTimeout(() => {
        document.location.reload();
    }, 1500);
}
function editCustomQueen(){
    let editButton = document.getElementById("edit");
    let addButton = document.getElementById("add");
    let select = document.getElementById("custom-remove");
    let index = parseInt(select.options[select.selectedIndex].value);
    addButton.setAttribute("hidden", "hidden");
    editButton.removeAttribute("hidden");
    document.getElementById("queenName").value = allCustomQueens[index].getName();
    document.getElementById("actingStat").value = allCustomQueens[index]._actingStat;
    document.getElementById("comedyStat").value = allCustomQueens[index]._comedyStat;
    document.getElementById("danceStat").value = allCustomQueens[index]._danceStat;
    document.getElementById("designStat").value = allCustomQueens[index]._designStat;
    document.getElementById("improvStat").value = allCustomQueens[index]._improvStat;
    document.getElementById("runwayStat").value = allCustomQueens[index]._runwayStat;
    document.getElementById("lipsyncStat").value = allCustomQueens[index]._lipsyncStat;
    document.getElementById("url").value = allCustomQueens[index].image;
}
function updateCustomQueen(){
    let select = document.getElementById("custom-remove");
    let index = parseInt(select.options[select.selectedIndex].value);
    let name = document.getElementById("queenName").value.trim();
    let acting = document.getElementById("actingStat").valueAsNumber;
    let comedy = document.getElementById("comedyStat").valueAsNumber;
    let dance = document.getElementById("danceStat").valueAsNumber;
    let design = document.getElementById("designStat").valueAsNumber;
    let improv = document.getElementById("improvStat").valueAsNumber;
    let runway = document.getElementById("runwayStat").valueAsNumber;
    let lipsync = document.getElementById("lipsyncStat").valueAsNumber;
    let image = document.getElementById("url").value.trim();
    if ((acting || comedy || dance || design || improv || runway || lipsync) < 0 || (acting || comedy || dance || design || improv || runway || lipsync) > 15) {
        window.alert("Queens' stats must be between 0 and 15!");
        return;
    }
    if (name == "" || isNaN((acting || comedy || dance || design || improv || runway || lipsync))) {
        window.alert("One of the boxes is empty!");
        return;
    }
    let extension = image.substring(image.lastIndexOf(".") + 1).toLowerCase();
    let noimagemaybe = false;
    if (extension == "png" || extension == "jpg" || extension == ""){
        console.log("Good file");
        if (image == ""){
            image = "noimage";
            noimagemaybe = false;
        }else {
            noimagemaybe = true;
        }
    } else {
        window.alert("Invalid image extension! Use jpg or png instead!");
        document.getElementById("url").value = "";
        return;
    }
    let customQueen = new Queen(name, acting, comedy, dance, design, improv, runway, lipsync, image, noimagemaybe);
    allCustomQueens.splice(index, 1);
    allCustomQueens.push(customQueen);
    customQueen.customqueen = true;
    customQueen.custom = true;
    let announce = document.getElementById("announce-new");
    announce.innerHTML = `${customQueen.getName()} updated!`;
    localStorage.setItem("customQueens", JSON.stringify(allCustomQueens));
    setTimeout(() => {
        document.location.reload();
    }, 1500);
}
function randomizeStats() {
    let stats = document.getElementsByClassName("stats");
    for (let i = 0; i < stats.length; i++) {
        stats[i].value = randomNumber(0, 15).toString();
    }
}
let premiereCounter = 0;
let firstCast = [];
let secondCast = [];
function doublePremiere() {
    if (episodeCount == 0 && !porkchopPremiere) {
        currentCast.forEach((queen) => {
            for (let i = 0; i < currentCast.length; i++) {
                if (queen.getName() != currentCast[i].getName()) {
                    queen.sisters.push({queen: currentCast[i], relation: 0});
                }
            }
        });
    }
    if (premiereCounter == 0)
        if (s6Premiere || s12Premiere || s14Premiere) {
            shuffle(currentCast);
            firstCast = currentCast.splice(0, Math.floor(currentCast.length / 2));
            secondCast = [...currentCast];
            slayersCheck = true;
        }
    if (premiereCounter == 0) {
        currentCast = firstCast;
        for (let i = 0; i < secondCast.length; i++)
            secondCast[i].addToTrackRecord("");
        premiereCounter++;
        slayersCheck = true;
        newEpisode();
    }
    else if (premiereCounter == 1) {
        currentCast = secondCast;
        for (let i = 0; i < firstCast.length; i++)
            firstCast[i].addToTrackRecord("");
        premiereCounter++;
        slayersCheck = true;
        newEpisode();
    }
    else if (premiereCounter == 2 && s14Premiere) {
        currentCast = [...firstCast, ...secondCast];
        for (let i = 0; i < eliminatedCast.length; i++){
            let queen = eliminatedCast[i];
            if (disqOrDept) {
                if (queen.QueenDisqOrDept){
                    //do nothing
                }else{
                    queen.trackRecord.splice(queen.trackRecord.indexOf("ELIM" || " ELIM "), 1, " ELIM");
                    currentCast.push(queen);
                    eliminatedCast.splice(eliminatedCast.indexOf(queen), 1);
                    i--;
                }
            }
            else{
                queen.trackRecord.splice(queen.trackRecord.indexOf("ELIM" || " ELIM "), 1, " ELIM");
                currentCast.push(queen);
                eliminatedCast.splice(eliminatedCast.indexOf(queen), 1);
                i--;
            }
        }
        premiereCounter++;
        chocolateBarTwistCheck = false;
        slayersCheck = false;
        newEpisode();
    }
    else if (premiereCounter == 2) {
        currentCast = [...firstCast, ...secondCast];
        premiereCounter++;
        slayersCheck = false;
        newEpisode();
    }
}
function porkchopLipsyncs() {
    currentCast.forEach((queen) => {
        for (let i = 0; i < currentCast.length; i++) {
            if (queen.getName() != currentCast[i].getName()) {
                queen.sisters.push({queen: currentCast[i], relation: 0});
            }
        }
    });
    let screen = new Scene();
    screen.clean();
    screen.createHeader("It's time...");
    screen.createParagraph("After the queens enter the workroom, it's time for them to lip-sync... for their lives!");
    for (let i = 0; i < Math.floor(totalCastSize / 2); i++) {
        screen.createHorizontalLine();
        let queen1 = currentCast[randomNumber(0, currentCast.length - 1)];
        currentCast.splice(currentCast.indexOf(queen1), 1);
        let queen2 = currentCast[randomNumber(0, currentCast.length - 1)];
        currentCast.splice(currentCast.indexOf(queen2), 1);
        if (currentCast.length == 1) {
            let queen3 = currentCast[randomNumber(0, currentCast.length - 1)];
            currentCast.splice(currentCast.indexOf(queen3), 1);
            screen.createImage(queen1.image, "royalblue");
            screen.createImage(queen2.image, "royalblue");
            screen.createImage(queen3.image, "royalblue");
            screen.createBold(`${queen1.getName()}, ${queen2.getName()} and ${queen3.getName()} will lipsync...`);
            lsSong();
            let lipSync = [queen1, queen2, queen3];
            for (let i = 0; i < lipSync.length; i++) {
                lipSync[i].getASLipsync();
            }
            lipSync.sort((a, b) => (b.lipsyncScore - a.lipsyncScore));
            queen1 = lipSync[0];
            queen2 = lipSync[1];
            queen3 = lipSync[2];
            screen.createImage(queen1.image, "green");
            screen.createBold(`${queen1.getName()}, shantay you stay!`);
            screen.createImage(queen2.image, "orange");
            screen.createImage(queen3.image, "orange");
            screen.createBold(`${queen2.getName()} and ${queen3.getName()}, you're getting the porkchop...`);
            queen1.addToTrackRecord(" WIN ");
            queen2.addToTrackRecord("LOSS");
            queen3.addToTrackRecord("LOSS");
            firstCast.push(queen1);
            secondCast.push(queen2, queen3);
        }
        else {
            screen.createImage(queen1.image, "royalblue");
            screen.createImage(queen2.image, "royalblue");
            screen.createBold(`${queen1.getName()} and ${queen2.getName()} will lipsync...`);
            lsSong();
            let lipSync = [queen1, queen2];
            for (let i = 0; i < lipSync.length; i++) {
                lipSync[i].getASLipsync();
            }
            lipSync.sort((a, b) => (b.lipsyncScore - a.lipsyncScore));
            queen1 = lipSync[0];
            queen2 = lipSync[1];
            screen.createImage(queen1.image, "green");
            screen.createBold(`${queen1.getName()}, shantay you stay!`);
            screen.createImage(queen2.image, "orange");
            screen.createBold(`${queen2.getName()}, you're getting the porkchop...`);
            queen1.addToTrackRecord(" WIN ");
            queen2.addToTrackRecord("LOSS");
            firstCast.push(queen1);
            secondCast.push(queen2);
        }
    }
    screen.createHorizontalLine();
    screen.createBigText("The porkchop queens will vote out one of their group...");
    screen.createBold("The queens vote...");
    for (let i = 0; i < secondCast.length; i++) {
        secondCast[i].lipstick = secondCast[randomNumber(0, secondCast.length - 1)];
        while (secondCast[i].lipstick.getName() == secondCast[i].getName()) {
            secondCast[i].lipstick = secondCast[randomNumber(0, secondCast.length - 1)];
        }
        secondCast[i].lipstick.votes++;
        screen.createParagraph(`${secondCast[i].getName()} voted for ${secondCast[i].lipstick.getName()}!`);
    }
    screen.createHorizontalLine();
    screen.createBold("The results are in..!");
    for (let i = 0; i < secondCast.length; i++) {
        screen.createBold(`${secondCast[i].getName()}: ${secondCast[i].votes.toString()} votes`);
    }
    screen.createHorizontalLine();
    let queen = secondCast.sort((a, b) => b.votes - a.votes)[0];

    if (secondCast[0].votes == secondCast[1].votes) {
        screen.createBold("It is a tie, the queens must revote between " + secondCast[0].getName() + " and " + secondCast[1].getName() + "!!");
        secondCast[0].votes = 0;
        secondCast[1].votes = 0;
        for (let i = 0; i < secondCast.length; i++) {
            secondCast[i].lipstick = secondCast[randomNumber(0, 1)];
            while (secondCast[i].lipstick.getName() == secondCast[i].getName()) {
                secondCast[i].lipstick = secondCast[randomNumber(0, 1)];
            }
            secondCast[i].lipstick.votes++;
            screen.createParagraph(`${secondCast[i].getName()} voted for ${secondCast[i].lipstick.getName()}!`);
        }
        screen.createHorizontalLine();
        screen.createBold("The results are in..!");
        screen.createBold(`${secondCast[0].getName()}: ${secondCast[0].votes.toString()} votes`);
        screen.createBold(`${secondCast[1].getName()}: ${secondCast[1].votes.toString()} votes`);
        let tiebreaker = secondCast.sort((a, b) => b.votes - a.votes)[0];
        queen = tiebreaker;
        screen.createHorizontalLine();
    }
    screen.createBold(`The queen that's getting the porkchop is... ${queen.getName()}!`);
    firstCast.push(queen);
    secondCast.splice(secondCast.indexOf(queen), 1);
    queen.trackRecord.pop();
    queen.addToTrackRecord("LOSS ")
    episodeChallenges.push("Porkchop Lipsyncs");
    for (let i = 0; i < secondCast.length; i++) {
        secondCast[i].votes = 0;
    }
    screen.createButton("Proceed", "doublePremiere()");
    episodeCount++;
}
function doublePremiereJudging() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("Bring back my girls!");
    screen.createBold("Ladies, I've made some decisions...");
    document.body.style.backgroundImage = "url('image/stage.webp')";
    screen.createImage(topQueens[0].image, "cyan");
    screen.createImage(topQueens[1].image, "cyan");
    screen.createBold(`${topQueens[0].getName()}, ${topQueens[1].getName()}, condragulations, you're the Top 2 of the week!`);
    screen.createParagraph("Nobody is going home tonight!");
    screen.createHorizontalLine();
    screen.createBold("The Top 2 will now lip-sync... for the win!");
    lsSong();
    for (let i = 0; i < topQueens.length; i++) {
        topQueens[i].getASLipsync();
    }
    topQueens.sort((a, b) => (b.lipsyncScore - a.lipsyncScore));
    screen.createImage(topQueens[0].image, "royalblue");
    screen.createBold(`${topQueens[0].getName()}, you're a winner baby!`);
    topQueens[0].addToTrackRecord("WIN");
    topQueens[0].favoritism += 5;
    topQueens[0].ppe += 2;
    topQueens[1].addToTrackRecord("TOP2");
    topQueens[1].favoritism += 2;
    topQueens[1].ppe += 1.5;
    screen.createButton("Proceed", "doublePremiere()");
}
function uk3PremiereJudging() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("Bring back my girls!");
    screen.createBold("Ladies, I've made some decisions...");
    document.body.style.backgroundImage = "url('image/stage.webp')";
    screen.createImage(topQueens[2].image, "lightblue");
    topQueens[2].addToTrackRecord("HIGH");
    topQueens[2].favoritism += 1;
    topQueens[2].ppe += 4;
    screen.createParagraph("", "highs");
    let highs = document.getElementById("highs");
    highs.innerHTML += `${topQueens[2].getName()}, `;
    highs.innerHTML += "good job this week, you're safe.";
    topQueens.splice(2, 1);
    screen.createImage(topQueens[0].image, "cyan");
    screen.createImage(topQueens[1].image, "cyan");
    screen.createBold(`${topQueens[0].getName()}, ${topQueens[1].getName()}, condragulations, you're the Top 2 of the week!`);
    screen.createHorizontalLine();
    screen.createBold("The Top 2 will now lip-sync... for the win!");
    lsSong();
    for (let i = 0; i < topQueens.length; i++) {
        topQueens[i].getASLipsync();
    }
    topQueens.sort((a, b) => (b.lipsyncScore - a.lipsyncScore));
    screen.createImage(topQueens[0].image, "royalblue");
    screen.createBold(`${topQueens[0].getName()}, you're a winner baby!`);
    topQueens[0].addToTrackRecord("WIN");
    topQueens[0].favoritism += 5;
    topQueens[0].ppe += 5;
    topQueens[1].addToTrackRecord("TOP2");
    topQueens[1].favoritism += 2;
    topQueens[1].ppe += 4.5;
    topQueens.splice(0, 2);
    screen.createHorizontalLine();
    screen.createBold("Now...");
    if (bottomQueens.length >= 3) {
        for (let i = 0; i < bottomQueens.length; i++)
            screen.createImage(bottomQueens[i].image, "tomato");
        screen.createParagraph("", "bottom3");
        let bottom3 = document.getElementById("bottom3");
        for (let i = 0; i < bottomQueens.length; i++)
            bottom3.innerHTML += bottomQueens[i].getName() + ", ";
        bottom3.innerHTML += "you're the bottoms of the week...";
    }
    //do the same, but for the bottom queens:
    if (bottomQueens.length == 3) {
        for (let i = 0; i < topQueens.length; i++)
            bottomQueens[i].performanceScore -= (bottomQueens[i].runwayScore);
        bottomQueens.sort((a, b) => (a.performanceScore - b.performanceScore));
        bottomQueens[0].addToTrackRecord("LOW");
        screen.createImage(bottomQueens[0].image, "pink");
        screen.createBold(bottomQueens[0].getName() + "... you are safe.");
        bottomQueens[0].unfavoritism += 1;
        bottomQueens[0].ppe += 2;
        bottomQueens.splice(0, 1);
    }
    for (let i = 0; i < bottomQueens.length; i++)
        screen.createImage(bottomQueens[i].image, "tomato");
    screen.createBold("", "btm2");
    let btm2 = document.getElementById("btm2");
    for (let i = 0; i < bottomQueens.length; i++) {
        btm2.innerHTML += bottomQueens[i].getName() + ", ";
    }
    btm2.innerHTML += "I'm sorry my dears but you are up for elimination.";
    screen.createButton("Proceed", "lipsyncDesc()");
}
let currentCast = [];
let eliminatedCast = [];
let fullCast = [];
let safeQueens = [];
let topQueens = [];
let bottomQueens = [];
let top2 = [];
let up2Block = [];
let doubleShantay = false;
let doubleSashay = false;
let episodeChallenges = [];
let episodeCount = 0;
let returningQueen = false;
let noDouble = false;
let riggory = false;
let chocolateBarTwist = false;
let chocolateBarTwistCheck = false;
let chocolateBarTwistChoosable = false;
let s6Premiere = false;
let s12Premiere = false;
let s14Premiere = false;
let porkchopPremiere = false;
let firstPremiere = false;
let secondPremiere = false;
let uk3Premiere = false;
let s9Premiere = false;
//challenge seasons
let sweatshop = false;
let chaos = false;
function newEpisode() {
    if (episodeCount == 0) {
        currentCast.forEach((queen) => {
            for (let i = 0; i < currentCast.length; i++) {
                if (queen.getName() != currentCast[i].getName()) {
                    queen.sisters.push({queen: currentCast[i], relation: 0});
                }
            }
        });
    }
    safeQueens = [];
    topQueens = [];
    bottomQueens = [];
    top2 = [];
    up2Block = [];
    episodeCount++;
    let queensRemainingScreen = new Scene();
    if (s9Premiere && episodeCount == 1) {
        lateQueen = currentCast[randomNumber(0, currentCast.length - 1)];
        currentCast.splice(currentCast.indexOf(lateQueen), 1);
        lateQueen.addToTrackRecord('');
    }
    if (episodeCount == 1 || premiereCounter <= 2 && (s12Premiere || porkchopPremiere || s6Premiere || s14Premiere ) || episodeCount == 1 && (uk3Premiere || s9Premiere)) {
        queensRemainingScreen.clean();
        queensRemainingScreen.createHeader("Full cast");
        for (let i = 0; i < currentCast.length; i++) {
            queensRemainingScreen.createImage(currentCast[i].image);
            queensRemainingScreen.createBold(currentCast[i].getName());
        }
    }
    else {
        contestantProgress();
        queensRemainingScreen.createHorizontalLine();
        queensRemainingScreen.createButton("Download", "downloadTR()");
    }
    if (currentCast.length == totalCastSize && team == true)
        queensRemainingScreen.createButton("Proceed", "teamsScreen()");
    else if (all_winners && currentCast.length <= 10 && episodeCount == 12)
        queensRemainingScreen.createButton("Proceed", "awFinale()");
    else if (all_winners && currentCast.length >= 10 && episodeCount == 15)
        queensRemainingScreen.createButton("Proceed", "awFinale()");
    else if (currentCast.length > 4)
        queensRemainingScreen.createButton("Proceed", "miniChallenge()");
    else if (currentCast.length == 4 && porkchopPremiere && premiereCounter < 3)
        queensRemainingScreen.createButton("Proceed", "miniChallenge()");
    else if (currentCast.length == 4 && canFinale)
        queensRemainingScreen.createButton("Proceed", "reunion()");
    else if (currentCast.length == 4 && (top3 || team || thailandFormat))
        queensRemainingScreen.createButton("Proceed", "miniChallenge()");
    else if (currentCast.length == 4 && top4 || ukvstwFinale)
        queensRemainingScreen.createButton("Proceed", "reunion()");
    else if (currentCast.length == 4 && (all_stars || lipsync_assassin))
        queensRemainingScreen.createButton("Proceed", "reunion()");
    else if (currentCast.length == 3 && team)
        queensRemainingScreen.createButton("Proceed", "miniChallenge()");
    else if (currentCast.length == 2 && team)
        queensRemainingScreen.createButton("Proceed", "finaleTeam()()");
    else
        queensRemainingScreen.createButton("Proceed", "reunion()");
    //add an empty placement on eliminated queen's track records
    for (let i = 0; i < eliminatedCast.length; i++)
        eliminatedCast[i].addToTrackRecord('');
}
function reSimulate() {
    //add eliminated queens again to cast and clean it
    for (let i = 0; i < eliminatedCast.length; i++) {
        currentCast.push(eliminatedCast[i]);
    }
    if (top4) {
        finalLS = [];
        firstLS = [];
        secondLS = [];
    }else if (canFinale){
        finalLS = [];
        firstLS = [];
        secondLS = [];
    }else if(ukvstwFinale){
        finalLS = [];
        firstLS = [];
        secondLS = [];
    } else if (all_winners) {
        finalLS = [];
        firstLS = [];
        secondLS = [];
    }
    currentCast.sort((a, b) => a.getName().toLowerCase().localeCompare(b.getName().toLowerCase()));
    eliminatedCast = [];
    firstCast = [];
    secondCast = [];
    fullCast = [];
    premiereCounter = 0;
    episodeCount = 0;
    onFinale = false;
    onTop4Finale = false;
    totalCastSize = currentCast.length;
    disqOrDept = false;
    gsFlag = false;
    threestars = false;
    flagThree = false;
    wht = [];
    teamList = [];
    qonfi = 0;
    homeTrigger = 0;
    //clean track records
    for (let i = 0; i < currentCast.length; i++) {
        currentCast[i].trackRecord = [];
        currentCast[i].sisters = [];
        currentCast[i].enemies = [];
        currentCast[i].friends = [];
        currentCast[i].miniEpisode = [];
        currentCast[i].favoritism = 0;
        currentCast[i].unfavoritism = 0;
        currentCast[i].finaleScore = 0;
        currentCast[i].votes = 0;
        currentCast[i].ppe = 0;
        currentCast[i].episodesOn = 0;
        currentCast[i].stars = 0;
        currentCast[i].winCount = 0;
        currentCast[i].rankP = 0;
        currentCast[i].QueenDisqOrDept = false;
        currentCast[i].chocolate = false;
        currentCast[i].blocked = false;
    }
    //clean challenges
    episodeChallenges = [];
    actingChallengeCounter = 0;
    comedyChallengeCounter = 0;
    marketingChallengeCounter = 0;
    danceChallengeCounter = 0;
    designChallengeCounter = 0;
    improvChallengeCounter = 0;
    rusicalCounter = false;
    ballCounter = false;
    talentShowCounter = false;
    girlGroupCounter = false;
    rumixCounter = false;
    makeoverCounter = false;
    snatchCounter = false;
    doubleShantay = false;
    doubleSashay = false;
    returningQueen = false;
    floppers = false;
    floppersCheck = false;
    slayers = false;
    slayersCheck = false;
    bottom6WayLipsync = false;
    bottom6WayLipsyncCheck = false;
    s14LaLaPaRUZa = false;
    s14LaLaPaRUZaCheck = false;
    assasintable = [];
    assasinlipstick = [];
    twinsMakeover = [];
    conjoinedCheck = false;
    s9PremiereCheck = false;
    uk3PremiereCheck = false;
    chocolateBarTwistCheck = false;
    lateQueen = '';
    //refill lip-sync songs and lsa
    lsSongs = allLsSongs;
    allQueens = allQueensCopy;
    if (chocolateBarTwist) {
        if (chocolateBarTwistChoosable){
            chooseGoldenBar();
        }else {
            giveChocolate();
        }
    }
    else if (s6Premiere || s12Premiere || s14Premiere)
        doublePremiere();
    else if (porkchopPremiere)
        porkchopLipsyncs();
    else
        newEpisode();
}
let firstLS = [];
let secondLS = [];
let finalLS = [];
let onFinale = false;
let onTop4Finale = false;

function finaleLS() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("The grand finale!");
    screen.createImage(currentCast[0].image, "royalblue");
    screen.createImage(currentCast[1].image, "royalblue");
    screen.createImage(currentCast[2].image, "royalblue");
    screen.createImage(currentCast[3].image, "royalblue");
    screen.createParagraph("Our Top 4 will participate in a lip-sync smackdown for the crown! The preliminaries will now be decided...");
    screen.createHorizontalLine();
    for (let i = 0; i < 2; i++) {
        let q1 = currentCast[randomNumber(0, currentCast.length - 1)];
        firstLS.push(q1);
        currentCast.splice(currentCast.indexOf(q1), 1);
        let q2 = currentCast[randomNumber(0, currentCast.length - 1)];
        secondLS.push(q2);
        currentCast.splice(currentCast.indexOf(q2), 1);
    }
    screen.createBigText("The preliminaries will be: ");
    screen.createImage(firstLS[0].image, "darkblue");
    screen.createImage(firstLS[1].image, "darkblue");
    screen.createBold(firstLS[0].getName() + " vs. " + firstLS[1].getName());
    screen.createParagraph("and");
    screen.createImage(secondLS[0].image, "darkred");
    screen.createImage(secondLS[1].image, "darkred");
    screen.createBold(secondLS[0].getName() + " vs. " + secondLS[1].getName());
    episodeChallenges.push("Finale");
    screen.createButton("Proceed", "finaleLipSyncsDesc1()");
}
let finaleof4gurl = false;
function finaleLipSyncs() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("I've made my decision...");
    firstLS.sort((a, b) => (b.lipsyncScore - a.lipsyncScore));
    if (firstLS[0].lipsyncScore == firstLS[1].lipsyncScore && firstLS[0].lipsyncScore > 6 && firstLS[1].lipsyncScore > 6) {
        screen.createImage(firstLS[0].image, "silver");
        screen.createImage(firstLS[1].image, "silver");
        screen.createBold(firstLS[0].getName() + ", " + firstLS[1].getName() + ", shantay you both stay.");
        finalLS.push(firstLS[0]);
        finalLS.push(firstLS[1]);
        isThisA3Way = true;
    } else if (chocolateBarTwist  && !chocolateBarTwistCheck) {
        screen.createImage(firstLS[0].image, "silver");
        screen.createBold(firstLS[0].getName() + ", shantay you stay.");
        screen.createBold(firstLS[1].getName() + ", now your fate rests in the hands of the drag gods.");
        screen.createBold("If you have the golden chocolate bar, you will be safe.");
        finalLS.push(firstLS[0]);
        if (chocolateBarCheck(firstLS[1]) == true) {
            screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
            screen.createImage(firstLS[1].image, "gold");
            screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
            screen.createBold(firstLS[1].getName() + "!! Condragtulations, you are safe to slay another day and you move on into the final lipsync!!");
            firstLS[1].unfavoritism += 3;
            finalLS.push(firstLS[1]);
            chocolateBarTwistCheck = true;
            isThisA3Way = true;
        } else {
            screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
            screen.createBold("It's chocolate.");
            firstLS[1].addToTrackRecord("LOST 1ST ROUND");
            firstLS[1].rankP = 34;
            eliminatedCast.unshift(firstLS[1]);
            screen.createImage(firstLS[1].image, "sienna");
            screen.createBold(firstLS[1].getName() + ", sashay away...");
        }
    } 
    else {
        finalLS.push(firstLS[0]);
        firstLS[1].addToTrackRecord("LOST 1ST ROUND");
        firstLS[1].rankP = 34;
        eliminatedCast.unshift(firstLS[1]);
        screen.createImage(firstLS[0].image, "silver");
        screen.createBold(firstLS[0].getName() + ", shantay you stay.");
        screen.createImage(firstLS[1].image, "sienna");
        screen.createBold(firstLS[1].getName() + ", sashay away...");
    }
    screen.createHorizontalLine();
    screen.createButton("Proceed", "finaleLipSyncsDesc2()");
}
function finaleLipSyncs2() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("I've made my decision...");
    secondLS.sort((a, b) => (b.lipsyncScore - a.lipsyncScore));
    if (secondLS[0].lipsyncScore == secondLS[1].lipsyncScore && secondLS[0].lipsyncScore > 6 && secondLS[1].lipsyncScore > 6) {
        screen.createImage(secondLS[0].image, "silver");
        screen.createImage(secondLS[1].image, "silver");
        screen.createBold(secondLS[0].getName() + ", " + secondLS[1].getName() + ", shantay you both stay.");
        finalLS.push(secondLS[0]);
        finalLS.push(secondLS[1]);
        if (!isThisA3Way) {
            isThisA3Way = true;
        } else {
            finaleof4gurl = true;
        }
    } else if (chocolateBarTwist  && !chocolateBarTwistCheck) {
        screen.createImage(secondLS[0].image, "silver");
        screen.createBold(secondLS[0].getName() + ", shantay you stay.");
        screen.createBold(secondLS[1].getName() + ", now your fate rests in the hands of the drag gods.");
        screen.createBold("If you have the golden chocolate bar, you will be safe.");
        finalLS.push(secondLS[0]);
        if (chocolateBarCheck(secondLS[1]) == true) {
            screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
            screen.createImage(secondLS[1].image, "gold");
            screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
            screen.createBold(secondLS[1].getName() + "!! Condragtulations, you are safe to slay another day and you move on into the final lipsync!!");
            secondLS[1].unfavoritism += 3;
            chocolateBarTwistCheck = true;
            finalLS.push(secondLS[1]);
            if (!isThisA3Way) {
                isThisA3Way = true;
            } else {
                finaleof4gurl = true;
            }
        } else {
            screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
            screen.createBold("It's chocolate.");
            secondLS[1].addToTrackRecord("LOST 2ND ROUND");
            if (!isThisA3Way) {
                secondLS[1].rankP = 34;
            }
            eliminatedCast.unshift(secondLS[1]);
            screen.createImage(secondLS[1].image, "sienna");
            screen.createBold(secondLS[1].getName() + ", sashay away...");
        }
    }  
    else {
        finalLS.push(secondLS[0]);
        secondLS[1].addToTrackRecord("LOST 2ND ROUND");
        if (!isThisA3Way) {
            secondLS[1].rankP = 34;
        }
        eliminatedCast.unshift(secondLS[1]);
        screen.createImage(secondLS[0].image, "silver");
        screen.createBold(secondLS[0].getName() + ", shantay you stay.");
        screen.createImage(secondLS[1].image, "sienna");
        screen.createBold(secondLS[1].getName() + ", sashay away...");
    }
    screen.createButton("Proceed", "finaleLipSyncsDesc3()");
}
function finalLipSync() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("Ladies, I've made my decision. The Next Drag Superstar is...");
    finalLS.sort((a, b) => b.finaleScore - a.finaleScore);
    let winner = 0;
    if (finaleof4gurl) {
        if (randomNumber(0, 100) >= 95) {
            winner = randomNumber(1, 3);
        }
        screen.createImage(finalLS[winner].image, "yellow");
        screen.createBigText(finalLS[winner].getName() + "!!");
        screen.createBold("Now prance, my queen!");
        finalLS[winner].addToTrackRecord("WINNER");
        for (let i = 0; i < finalLS.length; i++) {
            if (!(finalLS.indexOf(finalLS[i]) == winner)) {
                finalLS[i].addToTrackRecord("LOST 3RD ROUND");
                finalLS[i].rankP = 234;
                eliminatedCast.unshift(finalLS[i]);
                
            }
        }
        if (winner == 0) {
            finalLS.splice(1, 3);
        } else if (winner == 1) {
            finalLS.splice(2, 2);
            finalLS.splice(0, 1);
        } else if (winner == 2) {
            finalLS.splice(0, 2);
            finalLS.splice(1, 1);
        } else if (winner == 3) {
            finalLS.splice(0, 3);
        }
    }
    else if (isThisA3Way) {
        if (randomNumber(0, 100) >= 95) {
            winner = randomNumber(1, 2);
        }
        screen.createImage(finalLS[winner].image, "yellow");
        screen.createBigText(finalLS[winner].getName() + "!!");
        screen.createBold("Now prance, my queen!");
        finalLS[winner].addToTrackRecord("WINNER");
        for (let i = 0; i < finalLS.length; i++) {
            if (!(finalLS.indexOf(finalLS[i]) == winner)) {
                finalLS[i].addToTrackRecord("LOST 3RD ROUND");
                finalLS[i].rankP = 23;
                eliminatedCast.unshift(finalLS[i]);
            }
        }
        if (winner == 0) {
            finalLS.splice(1, 2);
        } else if (winner == 1) {
            finalLS.splice(2, 1);
            finalLS.splice(0, 1);
        } else if (winner == 2) {
            finalLS.splice(0, 2);
        }
    } else {
        if (finalLS[0].finaleScore == finalLS[1].finaleScore && randomNumber(0, 100) >= 50) {
            screen.createBold("For the FIRST TIME in Drag Race herstory, you are both winners, baby");
            screen.createImage(finalLS[0].image, "yellow");
            screen.createImage(finalLS[1].image, "yellow");
            screen.createBigText(finalLS[0].getName() + " and " + finalLS[1].getName() + "!!");
            screen.createBold("Now prance, my queens!");
            finalLS[0].addToTrackRecord("WINNER");
            finalLS[1].addToTrackRecord("WINNER");
            finalLS[1].rankP = 1;
            eliminatedCast.unshift(finalLS[1]);
            finalLS.splice(1, 1);
        }else{
            if (randomNumber(0, 100) >= 95) {
                winner = 1;
            }
            screen.createImage(finalLS[winner].image, "yellow");
            screen.createBigText(finalLS[winner].getName() + "!!");
            screen.createBold("Now prance, my queen!");
            finalLS[winner].addToTrackRecord("WINNER");
            for (let i = 0; i < finalLS.length; i++) {
                if (!(finalLS.indexOf(finalLS[i]) == winner)) {
                    finalLS[i].addToTrackRecord("LOST 3RD ROUND");
                    finalLS[i].rankP = 2;
                    eliminatedCast.unshift(finalLS[i]);
                    finalLS.splice(i, 1);
                }
            }
        }
    }
    isThisA3Way = false;
    finaleof4gurl = false;
    currentCast.push(finalLS[0]);
    screen.createButton("Proceed", "contestantProgress()");
}
function finale() {
    //sort queens by finale score:
    for (let i = 0; i < currentCast.length; i++) {
        currentCast[i].getFinale();
    }
    let screen = new Scene();
    screen.clean();
    screen.createHeader("The grand finale!");
    for (let i = 0; i < currentCast.length; i++)
        screen.createImage(currentCast[i].image);
    currentCast.sort((a, b) => (b.finaleScore - a.finaleScore));
    screen.createParagraph("Our Top 3 will participate in a music video for RuPaul's newest single!");
    screen.createButton("Proceed", "runway()", "button2");
}
function finaleTeam() {
    //sort queens by finale score:
    for (let i = 0; i < currentCast.length; i++) {
        currentCast[i].getFinale();
    }
    currentCast.sort((a, b) => (b.finaleScore - a.finaleScore));
    let screen = new Scene();
    screen.clean();
    screen.createHeader("The grand finale!");
    screen.createImage(currentCast[0].QueenB.image, "black");
    screen.createImage(currentCast[1].QueenB.image, "black");
    screen.createImage(currentCast[0].QueenA.image, "black");
    screen.createImage(currentCast[1].QueenA.image, "black");
    screen.createParagraph("Our Top 4 will participate in a music video for RuPaul's newest single!");
    screen.createButton("Proceed", "runway()", "button2");
}
let isThisA3Way = false;
function finaleJudging() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("The final minutes...");
    screen.createBold("Ladies, it's time to decide The Next Drag Superstar, and...");
    if (canFinale) {
        for (let i = 0; i < eliminatedCast.length; i++) {
            eliminatedCast[i].trackRecord[eliminatedCast[i].trackRecord.length - 1] = "GUEST";
        }
    }
    if (randomNumber(0, 100) <= 90){
        screen.createImage(currentCast[2].image, "sienna");
        screen.createBold(currentCast[2].getName() + ", I'm sorry my dear but it's not your time. I must ask you to sashay away...");
        currentCast[2].addToTrackRecord("ELIMINATED");
        eliminatedCast.unshift(currentCast[2]);
        currentCast.splice(2, 1);
        screen.createHorizontalLine();
        screen.createImage(currentCast[0].image, "silver");
        screen.createImage(currentCast[1].image, "silver");
        screen.createBold(currentCast[0].getName() + " and " + currentCast[1].getName() + ", this is your last chance to prove yourself. It's time for you to lipsync.. for the CROWN!!");
        lsSong();
    } else {
        screen.createBold("For the first time in Drag Race herstory, we are breaking all the rules!");
        screen.createHorizontalLine();
        screen.createImage(currentCast[0].image, "silver");
        screen.createImage(currentCast[1].image, "silver");
        screen.createImage(currentCast[2].image, "silver");
        screen.createBold(currentCast[0].getName() + ", " + currentCast[1].getName() + " and " + currentCast[2].getName() + ", the three of you will lipsync for your lives!!");
        lsSong();
        isThisA3Way = true;
    }
    screen.createButton("Proceed", "finaleFinale()");
}
function finaleTeamJudging() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("The final minutes...");
    screen.createBold("Ladies, it's time to decide The Next Drag Superstar, and...");
    screen.createImage(currentCast[1].QueenB.image, "sienna");
    screen.createImage(currentCast[1].QueenA.image, "sienna");
    screen.createBold(currentCast[1].getName() + ", I'm sorry my dears but it's not your time. I must ask you both to sashay away...");
    screen.createHorizontalLine();
    currentCast[1].QueenA.addToTrackRecord("ELIMINATED");
    currentCast[1].QueenB.addToTrackRecord("ELIMINATED");
    eliminatedCast.unshift(currentCast[1].QueenA);
    eliminatedCast.unshift(currentCast[1].QueenB);
    screen.createImage(currentCast[0].QueenB.image, "silver");
    screen.createImage(currentCast[0].QueenA.image, "silver");
    currentCast.splice(1, 1);
    if (randomNumber(0, 100) <= 50) {
        currentCast.push(currentCast[0].QueenA);
        currentCast.push(currentCast[0].QueenB);
    }
    else {
        currentCast.push(currentCast[0].QueenB);
        currentCast.push(currentCast[0].QueenA);
    }
    if (randomNumber(0, 100) <= 80) {
        currentCast[0].QueenB.finaleScore += 1;
    }
    currentCast.splice(0, 1);
    screen.createBold(currentCast[0].getName() + " and " + currentCast[1].getName() + ", this is your last chance to prove yourself. It's time for you to lipsync.. for the CROWN!!");
    lsSong();
    screen.createButton("Proceed", "finaleFinale()");
}
function finaleFinale() {
    onFinale = true;
    let screen = new Scene();
    screen.clean();
    screen.createHeader("The end.");
    screen.createBold("Ladies, I've made my decision. The Next Drag Superstar is...");
    chocolateBarTwistCheck = true;
    if (currentCast[0].finaleScore == currentCast[1].finaleScore && randomNumber(0, 100) >= 90) {
        screen.createBold("For the FIRST TIME in Drag Race herstory, you are both winners, baby");
        screen.createImage(currentCast[0].image, "yellow");
        screen.createImage(currentCast[1].image, "yellow");
        currentCast[1].rankP = 1;
        screen.createBigText(currentCast[0].getName() + " and " + currentCast[1].getName() + "!!");
        screen.createBold("Now prance, my queens!");
        if (!allstars3Finale && !ukvstwFinale && !top2finaleAS && (all_stars || lipsync_assassin) || isThisA3Way) {
            currentCast[2].addToTrackRecord("RUNNER UP");
            currentCast[2].rankP = 32;
            eliminatedCast.unshift(currentCast[2]);
            currentCast.splice(2, 1);
        }
        currentCast[0].addToTrackRecord("WINNER");
        currentCast[1].addToTrackRecord("WINNER");
        eliminatedCast.unshift(currentCast[1]);
        currentCast.splice(1, 1);
    }else{
        screen.createImage(currentCast[0].image, "yellow");
        screen.createBigText(currentCast[0].getName() + "!!");
        screen.createBold("Now prance, my queen!");
        currentCast[0].addToTrackRecord("WINNER");
        currentCast[1].addToTrackRecord("RUNNER UP");
        if (currentCast[2] != null) {
            currentCast[1].rankP = 23;
        } else {
            currentCast[1].rankP = 2;
        }
        eliminatedCast.unshift(currentCast[1]);
        currentCast.splice(1, 1);
        if (!allstars3Finale && !ukvstwFinale && !top2finaleAS && (all_stars || lipsync_assassin) || isThisA3Way) {
            currentCast[1].addToTrackRecord("RUNNER UP");
            currentCast[1].rankP = 23;
            eliminatedCast.unshift(currentCast[1]);
            currentCast.splice(1, 1);
        }
    }
    isThisA3Way = false;
    top2finaleAS = false;
    episodeChallenges.push("Finale");
    screen.createButton("Proceed", "contestantProgress()");
}
function finaleAS() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("The grand finale!");
    for (let i = 0; i < currentCast.length; i++)
        screen.createImage(currentCast[i].image);
    //sort queens by finale score:
    for (let i = 0; i < currentCast.length; i++) {
        currentCast[i].getFinale();
    }
    currentCast.sort((a, b) => (b.finaleScore - a.finaleScore));
    screen.createParagraph("Our Top 4 will create verses and choreography for a new original song!");
    screen.createButton("Proceed", "runway()", "button2");
}
let top2finaleAS = false;
function finaleASJudging() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("The final minutes...");
    screen.createBold("Ladies, it's time to decide The Next Drag Superstar, and...");
    if (randomNumber(0, 100) <= 90) {
        screen.createImage(currentCast[3].image, "sienna");
        screen.createBold(currentCast[3].getName() + ", I'm sorry my dear but it's not your time. I must ask you to sashay away...");
        currentCast[3].addToTrackRecord("ELIMINATED");
        eliminatedCast.unshift(currentCast[3]);
        currentCast.splice(3, 1);
        screen.createHorizontalLine();
        for (let i = 0; i < currentCast.length; i++)
            screen.createImage(currentCast[i].image, "silver");
        screen.createBold(currentCast[0].getName() + ", " + currentCast[1].getName() + ", " + currentCast[2].getName() + ", this is your last chance to prove yourself. It's time for you to lipsync.. for the CROWN!!");
        lsSong();
    } else {
        screen.createImage(currentCast[2].image, "sienna");
        screen.createImage(currentCast[3].image, "sienna");
        screen.createBold(currentCast[2].getName() + ", " + currentCast[3].getName() + ", I'm sorry my dears but it's not your time. I must ask you both to sashay away...");
        currentCast[2].addToTrackRecord("ELIMINATED");
        currentCast[3].addToTrackRecord("ELIMINATED");
        currentCast[2].rankP = 34;
        currentCast[3].rankP = 34;
        eliminatedCast.unshift(currentCast[3]);
        eliminatedCast.unshift(currentCast[2]);
        currentCast.splice(2, 2);
        for (let i = 0; i < currentCast.length; i++)
            screen.createImage(currentCast[i].image, "silver");
        screen.createBold(currentCast[0].getName() + ", " + currentCast[1].getName() + ", this is your last chance to prove yourself. It's time for you to lipsync.. for the CROWN!!");
        lsSong();
        top2finaleAS = true;
    }
    screen.createButton("Proceed", "finaleFinale()");
}
function finaleJuryAS() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("The jury!");
    screen.createParagraph("The eliminated queens are coming back, back, back again!");
    screen.createHorizontalLine();
    let voting = [];
    for (let i = 0; i < currentCast.length; i++){
        screen.createImage(currentCast[i].image);
        currentCast[i].votes = 0;
    }
    screen.createBold("After the Top 4 All Stars had their meetings with the eliminated queens... The eliminated queens vote!!");
    for (let i = 0; i < eliminatedCast.length; i++) {
        voting = [...currentCast];
        eliminatedCast[i].lipstick = voting[randomNumber(0, voting.length - 1)];
        eliminatedCast[i].lipstick.votes += 2;
        voting.splice(voting.indexOf(eliminatedCast[i].lipstick), 1);
        screen.createImage(eliminatedCast[i].image , "black");
        screen.createImage(eliminatedCast[i].lipstick.image , "yellow");
        screen.createParagraph(`${eliminatedCast[i].getName()} voted for ${eliminatedCast[i].lipstick.getName()}! As their first option.`);
        eliminatedCast[i].lipstick = voting[randomNumber(0, voting.length - 1)];
        eliminatedCast[i].lipstick.votes += 1;
        screen.createImage(eliminatedCast[i].image , "black");
        screen.createImage(eliminatedCast[i].lipstick.image , "silver");
        screen.createParagraph(`${eliminatedCast[i].getName()} voted for ${eliminatedCast[i].lipstick.getName()}! As their second option.`);
    }
    screen.createHorizontalLine();
    screen.createBold("The results are in..!!");
    for (let i = 0; i < currentCast.length; i++) {
        screen.createBold(`${currentCast[i].getName()}: ${currentCast[i].votes.toString()} points`);
    }
    screen.createHorizontalLine();
    let queen = currentCast.sort((a, b) => b.votes - a.votes)[0];
    let queen1 = currentCast.sort((a, b) => b.votes - a.votes)[1];
    if (currentCast[1].votes == currentCast[2].votes) {
        screen.createBold("It is a tie, the queens must revote between " + currentCast[1].getName() + " and " + currentCast[2].getName() + "!!");
        let ogvote = currentCast[1].votes;
        currentCast[1].votes = 0;
        currentCast[2].votes = 0;
        for (let i = 0; i < eliminatedCast.length; i++) {
            voting = [currentCast[1], currentCast[2]];
            eliminatedCast[i].lipstick = voting[randomNumber(0, voting.length - 1)];
            eliminatedCast[i].lipstick.votes += 1;
            screen.createImage(eliminatedCast[i].image , "black");
            screen.createImage(eliminatedCast[i].lipstick.image , "yellow");
            screen.createParagraph(`${eliminatedCast[i].getName()} voted for ${eliminatedCast[i].lipstick.getName()}! to be in the finale!`);
        }
        screen.createHorizontalLine();
        screen.createBold("The results are in..!");
        for (let i = 0; i < voting.length; i++) {
            screen.createBold(`${voting[i].getName()}: ${voting[i].votes.toString()} points`);
        }
        let tiebreaker = voting.sort((a, b) => b.votes - a.votes)[0];
        screen.createBold(`${tiebreaker.getName()} moves into the finale!!`);
        tiebreaker.votes = ogvote;
        voting[1] = ogvote;
        queen1 = tiebreaker;
    }
    screen.createBold(`${queen.getName()} and ${queen1.getName()} are the Top 2 of the season!!`);
    if (queen1 == currentCast[1]) {
        currentCast[2].addToTrackRecord("ELIMINATED");
        currentCast[2].rankP = 34;
        currentCast[3].rankP = 34;
        eliminatedCast.unshift(currentCast[2]);
        currentCast[3].addToTrackRecord("ELIMINATED");
        eliminatedCast.unshift(currentCast[3]);
        currentCast.splice(2, 2);
    } else {
        currentCast[1].addToTrackRecord("ELIMINATED");
        currentCast[1].rankP = 34;
        currentCast[3].rankP = 34;
        eliminatedCast.unshift(currentCast[1]);
        currentCast[3].addToTrackRecord("ELIMINATED");
        eliminatedCast.unshift(currentCast[3]);
        currentCast.splice(1, 3);
        currentCast.push(queen1);
    }
    currentCast.sort((a, b) => (b.finaleScore - a.finaleScore));
    screen.createButton("Proceed", "finaleFinale()");
}
function awFinale() {
    onTop4Finale = true;
    onFinale = true;
    chocolateBarTwistCheck = true;
    let screen = new Scene();
    screen.clean();
    screen.createHeader("The end...");
    screen.createBold("The 4 queens with the most stars will advance to the grand finale!");
    screen.createHorizontalLine();
    currentCast.sort((a, b) => (b.stars - a.stars));
    let abcd = tiesInFinale();
    switch (abcd) {
        case 1:
            screen.createBold("As we have a tie... The queens I chose to go to the grand finale are...");
            break;
        case 2:
            screen.createBold(currentCast[0].getName() + ", you must choose which of your sisters you'd like to invite to the Grand Finale!");
            let queensTied = "";
            for (let i = 0; i < wht.length; i++) {
                if (i != wht.length - 1) { 
                    queensTied += wht[i].getName() + ", ";
                } else {
                    queensTied += " or " + wht[i].getName();
                }
            }
            screen.createBold("Will it be... " + queensTied);
            for (let i = qonfi; i < 4; i++) {
                if (wht.length == 4) {currentCast[0].lipstick = betterSister4(currentCast[0], wht[0], wht[1], wht[2], wht[3]);}
                if (wht.length == 3) {currentCast[0].lipstick = betterSister3(currentCast[0], wht[0], wht[1], wht[2]);}
                if (wht.length == 2) {currentCast[0].lipstick = betterSister2(currentCast[0], wht[0], wht[1]);}
                if (wht.length > 4 || currentCast[0].lipstick == false) {
                    if (randomNumber(0, 100) <= 45) {
                        currentCast[0].lipstick = wht.sort((a, b) => b.ppe - a.ppe)[0];
                    } else {
                        currentCast[0].lipstick = wht[randomNumber(0, wht.length - 1)];
                    }
                }
                screen.createImage(currentCast[0].image, "black");
                screen.createImage(currentCast[0].lipstick.image, "black");
                screen.createBold(currentCast[0].getName() + " chose " + currentCast[0].lipstick.getName());
                wht.splice(wht.indexOf(currentCast[0].lipstick), 1);
                currentCast.splice(qonfi, 0, currentCast.splice(currentCast.indexOf(currentCast[0].lipstick), 1)[0]);
            }
            screen.createHorizontalLine();
            screen.createBold("The queens advancing to the grand finale are...");
            break;
        case 3:
            screen.createBold("The queens advancing to the grand finale are...");
            break;
        default:
            break;
    }
    for (let i = 0; i < 4; i++) {
        screen.createImage(currentCast[i].image, "gold");
        screen.createBold(currentCast[i].getName() + " with " + currentCast[i].stars + " stars!");
    }
    screen.createHorizontalLine();
    let p = currentCast.length - 1
    while(currentCast.length != 4) {
        eliminatedCast.push(currentCast[p]);
        screen.createImage(currentCast[p].image, "sienna");
        screen.createBold(currentCast[p].getName() + ", sashay away...");
        currentCast[p].addToTrackRecord("ELIMINATED");
        currentCast.splice(currentCast.indexOf(currentCast[p], 1));
        p--;
    }
    eliminatedCast.sort((a, b) => (b.stars - a.stars));
    screen.createButton("Proceed", "finaleLS()");
}
let wht = [];
let qonfi = 0;
function tiesInFinale() {
    let theOnes = [];
    let comparing = [];
    let pivot = 0;
    let tied = false;
    while (theOnes.length < 4 && tied == false) {
        comparing = [];
        comparing = currentCast.filter((queen) => {
            return queen.stars == (currentCast[0].stars - pivot);
        });
        if (comparing.length == 4 && theOnes.length == 0) {
            for (let i = 0; i < comparing.length; i++) {
                theOnes.push(comparing[i]);
            }
        } else if (comparing.length > 4 && theOnes.length == 0) {
            for (let i = 0; i < comparing.length; i++) {
                theOnes.push(comparing[i]);
            }
        } else if(4 - theOnes.length >= comparing.length) {
                    for (let i = 0; i < comparing.length; i++) {
                        theOnes.push(comparing[i]);
                    }
                    pivot++;
        } else {
            tied = true;
        }
    }
    if (theOnes.length > 4) { return 1}
    if (theOnes.length < 4) { wht = comparing; qonfi = theOnes.length; return 2}
    if (theOnes.length == 4) { return 3}
}
function canadaS2Finale() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("Our Top 4 is about to become a Top 3...");
    screen.createImage(currentCast[0].image, "royalblue");
    screen.createImage(currentCast[1].image, "royalblue");
    screen.createImage(currentCast[2].image, "royalblue");
    screen.createImage(currentCast[3].image, "royalblue");
    screen.createBold(currentCast[0].getName() + ", " + currentCast[1].getName() + ", " + currentCast[2].getName() + ", " + currentCast[3].getName() + ", you will all be competing in a lipsync batte royale!!");
    screen.createHorizontalLine();
    for (let i = 0; i < 2; i++) {
        let q1 = currentCast[randomNumber(0, currentCast.length - 1)];
        firstLS.push(q1);
        currentCast.splice(currentCast.indexOf(q1), 1);
        let q2 = currentCast[randomNumber(0, currentCast.length - 1)];
        secondLS.push(q2);
        currentCast.splice(currentCast.indexOf(q2), 1);
    }
    screen.createBigText("The lipsyncs will be: ");
    screen.createImage(firstLS[0].image, "darkblue");
    screen.createImage(firstLS[1].image, "darkblue");
    screen.createBold(firstLS[0].getName() + " vs. " + firstLS[1].getName());
    screen.createParagraph("and");
    screen.createImage(secondLS[0].image, "darkred");
    screen.createImage(secondLS[1].image, "darkred");
    screen.createBold(secondLS[0].getName() + " vs. " + secondLS[1].getName());
    episodeChallenges.push("Lipsync For The Finale");
    screen.createButton("Proceed", "canadaS2LipSyncs()");
}
function canadaS2LipSyncs() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("Let the battle begin!!");
    screen.createBold(firstLS[0].getName() + " and " + firstLS[1].getName() + " will lip-sync for the finale...!");
    lsSong();
    for (let i = 0; i < firstLS.length; i++) {
        firstLS[i].getLipsync();
    }
    firstLS.sort((a, b) => (b.lipsyncScore - a.lipsyncScore));
    finalLS.push(firstLS[1]);
    firstLS[0].addToTrackRecord("TOP 3<br><small>Win round 1</small>");
    screen.createImage(firstLS[0].image, "silver");
    screen.createBold(firstLS[0].getName() + ", shantay you stay. We will see you at the finale!!");
    currentCast.unshift(firstLS[0]);
    screen.createImage(firstLS[1].image, "sienna");
    screen.createBold(firstLS[1].getName() + ", you will have one more chance to redeem yourself...");
    screen.createHorizontalLine();
    screen.createParagraph(secondLS[0].getName() + " and " + secondLS[1].getName() + " lip-sync...");
    lsSong();
    for (let i = 0; i < secondLS.length; i++) {
        secondLS[i].getASLipsync();
    }
    secondLS.sort((a, b) => (b.lipsyncScore - a.lipsyncScore));
    finalLS.push(secondLS[1]);
    secondLS[0].addToTrackRecord("TOP 3<br><small>Win round 2</small>");
    screen.createImage(secondLS[0].image, "silver");
    screen.createBold(secondLS[0].getName() + ", shantay you stay. We will see you at the finale!!");
    currentCast.unshift(secondLS[0]);
    screen.createImage(secondLS[1].image, "sienna");
    screen.createBold(secondLS[1].getName() + ", you will have one more chance to redeem yourself...");
    screen.createHorizontalLine();
    screen.createParagraph(finalLS[0].getName() + " and " + finalLS[1].getName() + " lip-sync...");
    lsSong();
    for (let i = 0; i < finalLS.length; i++) {
        finalLS[i].getASLipsync();
    }
    finalLS.sort((a, b) => (b.lipsyncScore - a.lipsyncScore));
    if (finalLS[1].chocolate) {
        if (chocolateBarTwist  && !chocolateBarTwistCheck) {
            finalLS[1].addToTrackRecord("TOP 3<br><small>Win round 3</small>");
            screen.createImage(finalLS[1].image, "silver");
            screen.createBold(finalLS[1].getName() + ", shantay you stay. We will see you at the finale!!");
            currentCast.unshift(finalLS[1]);
            screen.createBold(finalLS[0].getName() + ", now your fate rests in the hands of the drag gods.");
            screen.createBold("If you have the golden chocolate bar, you will be safe.");
            screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
            screen.createBold("It's chocolate.");
            screen.createBold(finalLS[0].getName() + ", sashay away...");
            finalLS[0].addToTrackRecord("ELIM");
            finalLS[0].unfavoritism += 5;
            eliminatedCast.unshift(finalLS[0]);
        } else {
            finalLS[1].addToTrackRecord("TOP 3<br><small>Win round 3</small>");
            screen.createImage(finalLS[1].image, "silver");
            screen.createBold(finalLS[1].getName() + ", shantay you stay. We will see you at the finale!!");
            currentCast.unshift(finalLS[1]);
            eliminatedCast.unshift(finalLS[0]);
            screen.createImage(finalLS[0].image, "sienna");
            screen.createBold(finalLS[0].getName() + ", sashay away...");
            finalLS[0].addToTrackRecord("ELIM");
        }
    } else {
        if (chocolateBarTwist  && !chocolateBarTwistCheck) {
            finalLS[0].addToTrackRecord("TOP 3<br><small>Win round 3</small>");
            screen.createImage(finalLS[0].image, "silver");
            screen.createBold(finalLS[0].getName() + ", shantay you stay. We will see you at the finale!!");
            currentCast.unshift(finalLS[0]);
            screen.createBold(finalLS[1].getName() + ", now your fate rests in the hands of the drag gods.");
            screen.createBold("If you have the golden chocolate bar, you will be safe.");
            screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
            screen.createBold("It's chocolate.");
            eliminatedCast.unshift(finalLS[1]);
            screen.createImage(finalLS[1].image, "sienna");
            screen.createBold(finalLS[1].getName() + ", sashay away...");
            finalLS[1].addToTrackRecord("ELIM");
        } else {
        finalLS[0].addToTrackRecord("TOP 3<br><small>Win round 3</small>");
        screen.createImage(finalLS[0].image, "silver");
        screen.createBold(finalLS[0].getName() + ", shantay you stay. We will see you at the finale!!");
        currentCast.unshift(finalLS[0]);
        eliminatedCast.unshift(finalLS[1]);
        screen.createImage(finalLS[1].image, "sienna");
        screen.createBold(finalLS[1].getName() + ", sashay away...");
        finalLS[1].addToTrackRecord("ELIM");
        }
    }
    episodeCount++;
    for (let i = 0; i < eliminatedCast.length; i++)
        eliminatedCast[i].addToTrackRecord('');
    screen.createButton("Proceed", "finale()");
}
function contestantProgress() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("Contestant Progress");
    document.body.style.backgroundImage = "url('image/bg.png')";
    let main = document.querySelector("div#MainBlock");
    let centering = document.createElement("center");
    let trackRecords = document.createElement("table");
    trackRecords.setAttribute("id", "trackRecord");
    trackRecords.setAttribute("class", "trtable");
    trackRecords.setAttribute("border", "2");
    if (totalCastSize >= 12 && totalCastSize < 15)
        trackRecords.setAttribute("style", "font-size: 85%; text-align: center;");
    if (totalCastSize >= 15)
        trackRecords.setAttribute("style", "font-size: 75%; text-align: center;");
    let header = document.createElement("tr");
    trackRecords.appendChild(header);
    let thr = document.createElement("th");
    thr.innerHTML = "Rank";
    thr.setAttribute("style", "font-weight: bold;");
    thr.setAttribute("rowspan", "2");
    header.appendChild(thr);
    let th = document.createElement("th");
    th.innerHTML = "Contestant";
    th.setAttribute("style", "font-weight: bold; width: 100px;");
    th.setAttribute("rowspan", "2");
    header.appendChild(th);
    let th_i = document.createElement("th");
    th_i.innerHTML = "Photo";
    th_i.setAttribute("style", "font-weight: bold;");
    th_i.setAttribute("rowspan", "2");
    header.appendChild(th_i);
    for (let i = 0; i < episodeChallenges.length; i++) {
        let th = document.createElement("th");
        th.innerHTML = "Ep. " + (i+1);
        th.setAttribute("style", "font-weight: bold;");
        header.appendChild(th);
    }
    let header1 = document.createElement("tr");
    for (let i = 0; i < episodeChallenges.length; i++) {
        let th = document.createElement("th");
        th.innerHTML = "<small>" + episodeChallenges[i] + "</small>";
        th.setAttribute("style", "background-color: #e9dfe9; font-weight: bold; width: 75px;");
        header1.appendChild(th);
    }
    trackRecords.appendChild(header1);
    if (all_winners) {
        let th_2 = document.createElement("th");
        th_2.innerHTML = "PPE - Stars";
        th_2.setAttribute("style", "background-color: #e9dfe9; font-weight: bold; width: 150x;");
        th_2.setAttribute("rowspan", "2");
        header.appendChild(th_2);
    } else {
        let th_2 = document.createElement("th");
        th_2.innerHTML = "PPE";
        th_2.setAttribute("style", "background-color: #e9dfe9; font-weight: bold; width: 35px;");
        th_2.setAttribute("rowspan", "2");
        header.appendChild(th_2);
    }
    let winner = document.createElement("tr");
    let rank = document.createElement("td");
    rank.setAttribute("style", "background-color: #f5ebf5; font-weight: bold; 50px;");
    rank.innerHTML = "1st<br><small>(Winner)</small>"
    winner.appendChild(rank);
    let name = document.createElement("td");
    name.setAttribute("style", "background-color: #f5ebf5; font-weight: bold; 50px;");
    if (onFinale) {
        let winnerQueen;
        if (!top4) {
            if (ukvstwFinale){
                winnerQueen = finalLS[0];
            }else{
                winnerQueen = currentCast[0];
            }
        }
        else if (onTop4Finale)
            winnerQueen = finalLS[0];
        else
            winnerQueen = currentCast[0];
        name.innerHTML = winnerQueen.getName();
        winner.appendChild(name);
        let photo = document.createElement("td");
        photo.setAttribute("style", "background: url("+ winnerQueen.image +"); background-size: cover; background-position: center; background-repeat: no-repeat;");
        photo.setAttribute("width", "80");
        photo.setAttribute("height", "80");
        winner.appendChild(photo);
        for (let i = 0; i < winnerQueen.trackRecord.length + 1; i++) {
            let placement = document.createElement("td");
            placement.innerHTML = winnerQueen.trackRecord[i];
            if (placement.innerHTML == "WIN") {
                placement.setAttribute("style", "font-weight: bold; background-color: royalblue; color: white;");
            }
            else if (placement.innerHTML == "TOP2") {
                placement.setAttribute("style", "background-color: deepskyblue;");
            }
            else if (placement.innerHTML == "TOP 3<br><small>Win round 1</small>") {
                placement.setAttribute("style", "font-weight: bold; background-color: #ffd100; color: #000;");
            }
            else if (placement.innerHTML == "TOP 3<br><small>Win round 2</small>") {
                placement.setAttribute("style", "font-weight: bold; background-color: #ffae00; color: #000;");
            }
            else if (placement.innerHTML == "TOP 3<br><small>Win round 3</small>") {
                placement.setAttribute("style", "font-weight: bold; background-color: #ff7c00; color: #000;");
            }
            else if (placement.innerHTML == "LOW") {
                placement.setAttribute("style", "background-color: pink;");
            }
            else if (placement.innerHTML == "HIGH") {
                placement.setAttribute("style", "background-color: lightblue;");
            }
            else if (placement.innerHTML == "HIGH TEAM") {
                placement.setAttribute("style", "background-color: aquamarine;");
            }
            else if (placement.innerHTML == "HIGH+BLOCKED" || placement.innerHTML == "HIGH+BLOCKED+BLOCKED") {
                placement.setAttribute("style", "background-color: #D66D73;");
                placement.innerHTML = "HIGH<br>+<br><b>BLOCK</b>"
            }
            else if (placement.innerHTML == "BTM2 ") {
                placement.setAttribute("style", "background-color: #FA8072;");
            }
            else if (placement.innerHTML == "BTM2" || placement.innerHTML == "BTM3" || placement.innerHTML == "BTM4" || placement.innerHTML == "BTM5" || placement.innerHTML == "BTM6" || placement.innerHTML == "BTM") {
                placement.setAttribute("style", "background-color: tomato;");
            }
            else if (placement.innerHTML == " BTM2") {
                placement.setAttribute("style", "background-color: hotpink;");
            }
            else if (placement.innerHTML == "CHOC") {
                placement.setAttribute("style", "font-weight: bold; background-color: #fcea7c;");
            }
            else if (placement.innerHTML == "ELIM") {
                placement.setAttribute("style", "font-weight: bold; background-color: red;");
            }
            else if (placement.innerHTML == "ELIM ") {
                placement.setAttribute("style", "font-weight: bold; background-color: #FC4545;");
            }
            else if (placement.innerHTML == " ELIM") {
                placement.setAttribute("style", "font-weight: bold; background-color: deeppink;");
            }
            else if (placement.innerHTML == " ELIM ") {
                placement.setAttribute("style", "font-weight: bold; background-color: darkred; color:white");
            }
            else if (placement.innerHTML == "WINNER") {
                placement.setAttribute("style", "font-weight: bold; background-color: yellow;");
                if (allstars3Finale)
                    placement.innerHTML += " <br><small> (" + winnerQueen.votes + " points) </small>";
            }
            else if (placement.innerHTML == "RUNNER UP") {
                placement.setAttribute("style", "font-weight: bold; background-color: silver;");
            }
            else if (placement.innerHTML == "ELIMINATED") {
                placement.setAttribute("style", "font-weight: bold; background-color: sienna;");
            }
            else if (placement.innerHTML == "LOST 1ST ROUND") {
                placement.setAttribute("style", "font-weight: bold; background-color: #FF7C00;");
            }
            else if (placement.innerHTML == "LOST 2ND ROUND") {
                placement.setAttribute("style", "font-weight: bold; background-color: #FFAE00;");
            }
            else if (placement.innerHTML == "LOST 3RD ROUND") {
                placement.setAttribute("style", "font-weight: bold; background-color: #FFD100;");
            }
            else if (placement.innerHTML == "") {
                placement.setAttribute("style", "background-color: gray");
            }
            else if (placement.innerHTML == "WIN ") {
                placement.setAttribute("style", "font-weight: bold; background-color: deepskyblue;");
            }
            else if (placement.innerHTML == "WIN TIE") {
                placement.setAttribute("style", "font-weight: bold; background-color: steelblue; color: #fff;");
                placement.innerHTML = "WIN";
            }
            else if (placement.innerHTML == "  WIN") {
                placement.setAttribute("style", "font-weight: bold; background-color: #2238B4; color: white;");
            }
            else if (placement.innerHTML == "WIN+RTRN") {
                placement.setAttribute("style", "font-weight: bold; background-color: forestgreen; color: white;");
            }
            else if (placement.innerHTML == "SAFE") {
                placement.setAttribute("style", "background-color: white;");
            }
            else if (placement.innerHTML == "SAFE ") {
                    placement.setAttribute("style", "background-color: palegreen; color:#000;");
            }
            else if (placement.innerHTML == " SAFE ") {
                    placement.setAttribute("style", "background-color: #7D1935; color:#000;");
            }
            else if (placement.innerHTML == " SAFE") {
                placement.setAttribute("style", "background-color: magenta; color:white;");
            }
            else if (placement.innerHTML == "SAFE<br><small>Round 1</small>") {
                placement.setAttribute("style", "background-color: lightcoral; color: white;");
            }
            else if (placement.innerHTML == "SAFE<br><small>Round 2</small>") {
                placement.setAttribute("style", "background-color: indianred; color: white;");
            }
            else if (placement.innerHTML == "SAFE<br><small>Round 3</small>") {
                placement.setAttribute("style", "background-color: crimson; color: white;");
            }
            else if (placement.innerHTML == "SAFE+BLOCKED" || placement.innerHTML == "SAFE+BLOCKED+BLOCKED") {
                placement.setAttribute("style", "background-color: red; font-weight: bold;");
                placement.innerHTML = "BLOCK";
            }
            else if (placement.innerHTML == "RUN") {
                    placement.setAttribute("style", "background-color: magenta; color:white;");
            }
            else if (placement.innerHTML == "RUN ") {
                    placement.setAttribute("style", "background-color: #D3FFB5; color:#000; font-weight: bold;");
            }
            else if (placement.innerHTML == "OUT") {
                placement.setAttribute("style", "background-color: forestgreen; color:white;");
            }
            else if (placement.innerHTML == "OUT ") {
                    placement.setAttribute("style", "background-color: purple; color:white;");
            }
            else if (placement.innerHTML == " WIN") {
                placement.setAttribute("style", "font-weight: bold; background-color: darkblue; color: white;");
            }
            else if (placement.innerHTML == "DISQ") {
                placement.setAttribute("style", "font-weight: bold; background-color: black; color: white;");
            }
            else if (placement.innerHTML == "DEPT") {
                placement.setAttribute("style", "font-weight: bold; background-color: plum;");
            }
            else if (placement.innerHTML == "QUIT") {
                placement.setAttribute("style", "font-weight: bold; background-color: palevioletred;");
            }
            else if (placement.innerHTML == "WIN+QUIT") {
                placement.setAttribute("style", "font-weight: bold; background-color:#5920d4;");
            }
            else if (placement.innerHTML == "WINWIN") {
                placement.setAttribute("style", "font-weight: bold; background-color:mediumblue; color:white;");
                placement.innerHTML = "WIN";
            }
            else if (placement.innerHTML == "WINHIGH") {
                placement.setAttribute("style", "background-color:cornflowerblue;");
                placement.innerHTML = "<b>WIN</b><br>+<br> HIGH";
            }
            else if (placement.innerHTML == "WINLOW") {
                placement.setAttribute("style", "background-color:#ee82ee;");
                placement.innerHTML = "<b>WIN</b><br>+<br> LOW";
            }
            else if (placement.innerHTML == "WINBTM2") {
                placement.setAttribute("style", "background-color:mediumorchid;");
                placement.innerHTML = "<b>WIN</b><br>+<br> BTM2";
            }
            else if (placement.innerHTML == "WINELIM") {
                placement.setAttribute("style", "font-weight: bold; background-color:#9400d3; color:white;");
                placement.innerHTML = "WIN <br>+<br> ELIM";
            }
            else if (placement.innerHTML == "WIN BTM2") {
                placement.setAttribute("style", "background-color: hotpink;");
                placement.innerHTML = "WIN <br>+<br> BTM2";
            }
            else if (placement.innerHTML == "WINCHOC") {
                placement.setAttribute("style", "font-weight: bold; background-color: #fcea7c;");
                placement.innerHTML = "WIN <br>+<br> CHOC";
            }
            else if (placement.innerHTML == "WINDISQ") {
                placement.setAttribute("style", "font-weight: bold; background-color: black; color: white;");
                placement.innerHTML = "WIN <br>+<br> DISQ";
            }
            else if (placement.innerHTML == "WINDEPT") {
                placement.setAttribute("style", "font-weight: bold; background-color: plum;");
                placement.innerHTML = "WIN <br>+<br> DEPT";
            }
            else if (placement.innerHTML == "WINQUIT") {
                placement.setAttribute("style", "font-weight: bold; background-color: palevioletred;");
                placement.innerHTML = "WIN <br>+<br> QUIT";
            }
            else if (placement.innerHTML == "RTRN") {
                placement.setAttribute("style", "font-weight: bold; background-color: magenta;");
            }
            else if (placement.innerHTML == "RTRN ") {
                placement.setAttribute("style", "font-weight: bold; background-color: orange;");
            }
            else if (placement.innerHTML == " WIN ") {
                placement.setAttribute("style", "background-color: lightskyblue;");
            }
            else if (placement.innerHTML == "LOSS") {
                placement.setAttribute("style", "background-color: #ff9e9e;");
            }
            else if (placement.innerHTML == "LOSS ") {
                placement.setAttribute("style", "background-color: orange;");
            }
            else if (placement.innerHTML == "GUEST") {
                placement.setAttribute("style", "background-color: lightgrey;");
            }
            else if (placement.innerHTML == "MISS CON") {
                placement.setAttribute("style", "background-color: aqua; font-weight: bold;");
            }
            else if (placement.innerHTML == "undefined" && all_winners) {
                placement.setAttribute("style", "font-weight: bold; background-color: lightgray;");
                placement.innerHTML = (winnerQueen.ppe / (winnerQueen.episodesOn)).toFixed(2) + " - " + winnerQueen.stars;
            }
            else if (placement.innerHTML == "undefined") {
                placement.setAttribute("style", "font-weight: bold; background-color: lightgray;");
                placement.innerHTML = (winnerQueen.ppe / (winnerQueen.episodesOn)).toFixed(2);
            }
            if (winnerQueen.miniEpisode.indexOf((i+1)) != -1) {
                placement.innerHTML += "<br> <small> <i> Mini Chall. Winner </i> </small>";
            }
            winner.appendChild(placement);
        }
        trackRecords.appendChild(winner);
    }
    if (!onFinale) {
        for (let i = 0; i < currentCast.length; i++) {
            let contestant = document.createElement("tr");
            let rank = document.createElement("td");
            rank.setAttribute("style", "background-color: #f5ebf5; font-weight: bold; 50px;");
            rank.innerHTML = "TBA"
            contestant.appendChild(rank);
            let name = document.createElement("td");
            name.setAttribute("style", "font-weight: bold;");
            name.innerHTML = currentCast[i].getName();
            name.setAttribute("style", "background-color: #f5ebf5; font-weight: bold; 50px;");
            contestant.appendChild(name);
            let photo = document.createElement("td");
            photo.setAttribute("style", "background: url("+ currentCast[i].image +"); background-size: cover; background-position: center; background-repeat: no-repeat;");
            photo.setAttribute("width", "80");
            photo.setAttribute("height", "80");
            contestant.appendChild(photo);
            for (let k = 0; k < currentCast[i].trackRecord.length + 1; k++) {
                let placement = document.createElement("td");
                placement.innerHTML = currentCast[i].trackRecord[k];
                if (placement.innerHTML == "WIN") {
                    placement.setAttribute("style", "font-weight: bold; background-color: royalblue; color: white;");
                }
                else if (placement.innerHTML == "TOP2") {
                    placement.setAttribute("style", "background-color: deepskyblue;");
                }
                else if (placement.innerHTML == "TOP 3<br><small>Win round 1</small>") {
                    placement.setAttribute("style", "font-weight: bold; background-color: #ffd100; color: #000;");
                }
                else if (placement.innerHTML == "TOP 3<br><small>Win round 2</small>") {
                    placement.setAttribute("style", "font-weight: bold; background-color: #ffae00; color: #000;");
                }
                else if (placement.innerHTML == "TOP 3<br><small>Win round 3</small>") {
                    placement.setAttribute("style", "font-weight: bold; background-color: #ff7c00; color: #000;");
                }
                else if (placement.innerHTML == "LOW") {
                    placement.setAttribute("style", "background-color: pink;");
                }
                else if (placement.innerHTML == "HIGH") {
                    placement.setAttribute("style", "background-color: lightblue;");
                }
                else if (placement.innerHTML == "HIGH TEAM") {
                    placement.setAttribute("style", "background-color: aquamarine;");
                }
                else if (placement.innerHTML == "HIGH+BLOCKED" || placement.innerHTML == "HIGH+BLOCKED+BLOCKED") {
                    placement.setAttribute("style", "background-color: #D66D73;");
                    placement.innerHTML = "HIGH<br>+<br><b>BLOCK</b>"
                }
                else if (placement.innerHTML == "BTM2 ") {
                    placement.setAttribute("style", "background-color: #FA8072;");
                }
                else if (placement.innerHTML == "BTM2" || placement.innerHTML == "BTM3" || placement.innerHTML == "BTM4" || placement.innerHTML == "BTM5" || placement.innerHTML == "BTM6" || placement.innerHTML == "BTM") {
                    placement.setAttribute("style", "background-color: tomato;");
                }
                else if (placement.innerHTML == " BTM2") {
                    placement.setAttribute("style", "background-color: hotpink;");
                }
                else if (placement.innerHTML == "CHOC") {
                    placement.setAttribute("style", "font-weight: bold; background-color: #fcea7c;");
                }
                else if (placement.innerHTML == "ELIM") {
                    placement.setAttribute("style", "font-weight: bold; background-color: red;");
                }
                else if (placement.innerHTML == "ELIM ") {
                    placement.setAttribute("style", "font-weight: bold; background-color: #FC4545;");
                }
                else if (placement.innerHTML == " ELIM") {
                    placement.setAttribute("style", "font-weight: bold; background-color: deeppink;");
                }
                else if (placement.innerHTML == " ELIM ") {
                    placement.setAttribute("style", "font-weight: bold; background-color: darkred; color:white");
                }
                else if (placement.innerHTML == "WINNER") {
                    placement.setAttribute("style", "font-weight: bold; background-color: yellow;");
                }
                else if (placement.innerHTML == "RUNNER UP") {
                    placement.setAttribute("style", "font-weight: bold; background-color: silver;");
                }
                else if (placement.innerHTML == "ELIMINATED") {
                    placement.setAttribute("style", "font-weight: bold; background-color: sienna;");
                }
                else if (placement.innerHTML == "LOST 1ST ROUND") {
                    placement.setAttribute("style", "font-weight: bold; background-color: #FF7C00;");
                }
                else if (placement.innerHTML == "LOST 2ND ROUND") {
                    placement.setAttribute("style", "font-weight: bold; background-color: #FFAE00;");
                }
                else if (placement.innerHTML == "LOST 3RD ROUND") {
                    placement.setAttribute("style", "font-weight: bold; background-color: #FFD100;");
                }
                else if (placement.innerHTML == "") {
                    placement.setAttribute("style", "background-color: gray");
                }
                else if (placement.innerHTML == "WIN ") {
                    placement.setAttribute("style", "font-weight: bold; background-color: deepskyblue;");
                }
                else if (placement.innerHTML == "WIN TIE") {
                    placement.setAttribute("style", "font-weight: bold; background-color: steelblue; color: #fff;");
                    placement.innerHTML = "WIN";
                }
                else if (placement.innerHTML == "  WIN") {
                    placement.setAttribute("style", "font-weight: bold; background-color: #2238B4; color: white;");
                }
                else if (placement.innerHTML == "WIN+RTRN") {
                    placement.setAttribute("style", "font-weight: bold; background-color: forestgreen; color:white;");
                }
                else if (placement.innerHTML == "SAFE") {
                    placement.setAttribute("style", "background-color: white;");
                }
                else if (placement.innerHTML == "SAFE ") {
                        placement.setAttribute("style", "background-color: palegreen; color:#000;");
                }
                else if (placement.innerHTML == " SAFE ") {
                        placement.setAttribute("style", "background-color: #7D1935; color:#000;");
                }
                else if (placement.innerHTML == " SAFE") {
                    placement.setAttribute("style", "background-color: magenta; color:white;");
                }
                else if (placement.innerHTML == "SAFE<br><small>Round 1</small>") {
                    placement.setAttribute("style", "background-color: lightcoral; color: white;");
                }
                else if (placement.innerHTML == "SAFE<br><small>Round 2</small>") {
                    placement.setAttribute("style", "background-color: indianred; color: white;");
                }
                else if (placement.innerHTML == "SAFE<br><small>Round 3</small>") {
                    placement.setAttribute("style", "background-color: crimson; color: white;");
                }
                else if (placement.innerHTML == "SAFE+BLOCKED" || placement.innerHTML == "SAFE+BLOCKED+BLOCKED") {
                    placement.setAttribute("style", "background-color: red; font-weight: bold;");
                    placement.innerHTML = "BLOCK"
                }
                else if (placement.innerHTML == "RUN") {
                        placement.setAttribute("style", "background-color: magenta; color:white;");
                }
                else if (placement.innerHTML == "RUN ") {
                        placement.setAttribute("style", "background-color: #D3FFB5; color:#000; font-weight: bold;");
                }
                else if (placement.innerHTML == "OUT") {
                    placement.setAttribute("style", "background-color: forestgreen; color:white;");
                }
                else if (placement.innerHTML == "OUT ") {
                        placement.setAttribute("style", "background-color: purple; color:white;");
                }
                else if (placement.innerHTML == " WIN") {
                    placement.setAttribute("style", "font-weight: bold; background-color: darkblue; color: white;");
                }
                else if (placement.innerHTML == "DISQ") {
                    placement.setAttribute("style", "font-weight: bold; background-color: black; color: white;");
                }
                else if (placement.innerHTML == "DEPT") {
                    placement.setAttribute("style", "font-weight: bold; background-color: plum;");
                }
                else if (placement.innerHTML == "QUIT") {
                    placement.setAttribute("style", "font-weight: bold; background-color: palevioletred;");
                }
                else if (placement.innerHTML == "WIN+QUIT") {
                    placement.setAttribute("style", "font-weight: bold; background-color:#5920d4;");
                }
                else if (placement.innerHTML == "WINWIN") {
                    placement.setAttribute("style", "font-weight: bold; background-color:mediumblue; color:white;");
                    placement.innerHTML = "WIN";
                }
                else if (placement.innerHTML == "WINHIGH") {
                    placement.setAttribute("style", "background-color:cornflowerblue;");
                    placement.innerHTML = "<b>WIN</b><br>+<br> HIGH";
                }
                else if (placement.innerHTML == "WINLOW") {
                    placement.setAttribute("style", "background-color:#ee82ee;");
                    placement.innerHTML = "<b>WIN</b><br>+<br> LOW";
                }
                else if (placement.innerHTML == "WINBTM2") {
                    placement.setAttribute("style", "background-color:mediumorchid;");
                    placement.innerHTML = "<b>WIN</b><br>+<br> BTM2";
                }
                else if (placement.innerHTML == "WINELIM") {
                    placement.setAttribute("style", "font-weight: bold; background-color:#9400d3; color:white;");
                    placement.innerHTML = "WIN <br>+<br> ELIM";
                }
                else if (placement.innerHTML == "WIN BTM2") {
                    placement.setAttribute("style", "background-color: hotpink;");
                    placement.innerHTML = "WIN <br>+<br> BTM2";
                }
                else if (placement.innerHTML == "WINCHOC") {
                    placement.setAttribute("style", "font-weight: bold; background-color: #fcea7c;");
                    placement.innerHTML = "WIN <br>+<br> CHOC";
                }
                else if (placement.innerHTML == "WINDISQ") {
                    placement.setAttribute("style", "font-weight: bold; background-color: black; color: white;");
                    placement.innerHTML = "WIN <br>+<br> DISQ";
                }
                else if (placement.innerHTML == "WINDEPT") {
                    placement.setAttribute("style", "font-weight: bold; background-color: plum;");
                    placement.innerHTML = "WIN <br>+<br> DEPT";
                }
                else if (placement.innerHTML == "WINQUIT") {
                    placement.setAttribute("style", "font-weight: bold; background-color: palevioletred;");
                    placement.innerHTML = "WIN <br>+<br> QUIT";
                }
                else if (placement.innerHTML == "RTRN") {
                    placement.setAttribute("style", "font-weight: bold; background-color: magenta;");
                }
                else if (placement.innerHTML == "RTRN ") {
                    placement.setAttribute("style", "font-weight: bold; background-color: orange;");
                }
                else if (placement.innerHTML == " WIN ") {
                    placement.setAttribute("style", "background-color: lightskyblue;");
                }
                else if (placement.innerHTML == "LOSS") {
                    placement.setAttribute("style", "background-color: #ff9e9e;");
                }
                else if (placement.innerHTML == "LOSS ") {
                    placement.setAttribute("style", "background-color: orange;");
                }
                else if (placement.innerHTML == "GUEST") {
                    placement.setAttribute("style", "background-color: lightgrey;");
                }
                else if (placement.innerHTML == "MISS CON") {
                    placement.setAttribute("style", "background-color: aqua; font-weight: bold;");
                }
                else if (placement.innerHTML == "undefined" && all_winners) {
                    placement.setAttribute("style", "font-weight: bold; background-color: lightgray;");
                    placement.innerHTML = (currentCast[i].ppe / (currentCast[i].episodesOn)).toFixed(2) + " - " + currentCast[i].stars;
                }
                else if (placement.innerHTML == "undefined") {
                    placement.setAttribute("style", "font-weight: bold; background-color: lightgray;");
                    placement.innerHTML = (currentCast[i].ppe / (currentCast[i].episodesOn)).toFixed(2);
                }
                if (currentCast[i].miniEpisode.indexOf(k+1) != -1) {
                    placement.innerHTML += "<br> <small> <i> Mini Chall. Winner </i> </small>";
                }
                contestant.appendChild(placement);
            }
            trackRecords.appendChild(contestant);
        }
    }
    let rankNumber = currentCast.length;
    for (let i = 0; i < eliminatedCast.length; i++) {
        let contestant = document.createElement("tr");
        let rank = document.createElement("td");
        rank.setAttribute("style", "background-color: #f5ebf5; font-weight: bold; 50px;");
        if (eliminatedCast[i].rankP == 0) {
            rank.innerHTML = (rankNumber+1+i);
            if (rank.innerHTML == 3) {
                rank.innerHTML += "rd"
            } else {
                rank.innerHTML += "th";
            }
        } else if (eliminatedCast[i].rankP == 1) {
            rank.innerHTML += "1st<br><small>(Winner)</small>";
        } else if (eliminatedCast[i].rankP == 2) {
            rank.innerHTML += "2nd<br><small>(Runner-Up)</small>";
        } else if (eliminatedCast[i].rankP == 3) {
            rank.innerHTML += "3rd<br><small>(Runner-Up)</small>";
        } else if (eliminatedCast[i].rankP == 234) {
            rank.innerHTML += "2nd/3rd/4th<br><small>(Runner-Up)</small>";
        } else if (eliminatedCast[i].rankP == 23) {
            rank.innerHTML += "2nd/3rd<br><small>(Runner-Up)</small>";
        } else if (eliminatedCast[i].rankP == 34) {
            rank.innerHTML += "3rd/4th";
        } else if (eliminatedCast[i].rankP == 32) {
            rank.innerHTML += "3rd<br><small>(Runner-Up)</small>";
        }
        contestant.appendChild(rank);
        let name = document.createElement("td");
        name.setAttribute("style", "font-weight: bold;");
        name.innerHTML = eliminatedCast[i].getName();
        name.setAttribute("style", "background-color: #f5ebf5; font-weight: bold; 50px;");
        contestant.appendChild(name);
        let photo = document.createElement("td");
        photo.setAttribute("style", "background: url("+ eliminatedCast[i].image +"); background-size: cover; background-position: center; background-repeat: no-repeat;");
        photo.setAttribute("width", "80");
        photo.setAttribute("height", "80");
        contestant.appendChild(photo);
        for (let k = 0; k < eliminatedCast[i].trackRecord.length + 1; k++) {
            let placement = document.createElement("td");
            placement.innerHTML = eliminatedCast[i].trackRecord[k];
            if (placement.innerHTML == "WIN") {
                placement.setAttribute("style", "font-weight: bold; background-color: royalblue; color: white;");
            }
            else if (placement.innerHTML == "TOP2") {
                placement.setAttribute("style", "background-color: deepskyblue;");
            }
            else if (placement.innerHTML == "TOP 3<br><small>Win round 1</small>") {
                placement.setAttribute("style", "font-weight: bold; background-color: #ffd100; color: #000;");
            }
            else if (placement.innerHTML == "TOP 3<br><small>Win round 2</small>") {
                placement.setAttribute("style", "font-weight: bold; background-color: #ffae00; color: #000;");
            }
            else if (placement.innerHTML == "TOP 3<br><small>Win round 3</small>") {
                placement.setAttribute("style", "font-weight: bold; background-color: #ff7c00; color: #000;");
            }
            else if (placement.innerHTML == "LOW") {
                placement.setAttribute("style", "background-color: pink;");
            }
            else if (placement.innerHTML == "HIGH") {
                placement.setAttribute("style", "background-color: lightblue;");
            }
            else if (placement.innerHTML == "HIGH TEAM") {
                placement.setAttribute("style", "background-color: aquamarine;");
            }
            else if (placement.innerHTML == "HIGH+BLOCKED" || placement.innerHTML == "HIGH+BLOCKED+BLOCKED") {
                placement.setAttribute("style", "background-color: #D66D73;");
                placement.innerHTML = "HIGH<br>+<br><b>BLOCK</b>"
            }
            else if (placement.innerHTML == "BTM2 ") {
                placement.setAttribute("style", "background-color: #FA8072;");
            }
            else if (placement.innerHTML == "BTM2" || placement.innerHTML == "BTM3" || placement.innerHTML == "BTM4" || placement.innerHTML == "BTM5" || placement.innerHTML == "BTM6" || placement.innerHTML == "BTM") {
                placement.setAttribute("style", "background-color: tomato;");
            }
            else if (placement.innerHTML == " BTM2") {
                placement.setAttribute("style", "background-color: hotpink;");
            }
            else if (placement.innerHTML == "CHOC") {
                placement.setAttribute("style", "font-weight: bold; background-color: #fcea7c;");
            }
            else if (placement.innerHTML == "ELIM") {
                placement.setAttribute("style", "font-weight: bold; background-color: red;");
            }
            else if (placement.innerHTML == "ELIM ") {
                placement.setAttribute("style", "font-weight: bold; background-color: #FC4545;");
            }
            else if (placement.innerHTML == " ELIM") {
                placement.setAttribute("style", "font-weight: bold; background-color: deeppink;");
            }
            else if (placement.innerHTML == " ELIM ") {
                placement.setAttribute("style", "font-weight: bold; background-color: darkred; color:white");
            }
            else if (placement.innerHTML == "WINNER") {
                placement.setAttribute("style", "font-weight: bold; background-color: yellow;");
            }
            else if (placement.innerHTML == "RUNNER UP") {
                placement.setAttribute("style", "font-weight: bold; background-color: silver;");
                if (allstars3Finale)
                    placement.innerHTML += " <br><small> (" + eliminatedCast[i].votes + " points) </small>";
            }
            else if (placement.innerHTML == "ELIMINATED") {
                placement.setAttribute("style", "font-weight: bold; background-color: sienna;");
                if (allstars3Finale)
                    placement.innerHTML += " <br><small> (" + eliminatedCast[i].votes + " points) </small>";
            }
            else if (placement.innerHTML == "LOST 1ST ROUND") {
                placement.setAttribute("style", "font-weight: bold; background-color: #FF7C00;");
            }
            else if (placement.innerHTML == "LOST 2ND ROUND") {
                placement.setAttribute("style", "font-weight: bold; background-color: #FFAE00;");
            }
            else if (placement.innerHTML == "LOST 3RD ROUND") {
                placement.setAttribute("style", "font-weight: bold; background-color: #FFD100;");
            }
            else if (placement.innerHTML == "") {
                placement.setAttribute("style", "background-color: gray");
            }
            else if (placement.innerHTML == "WIN ") {
                placement.setAttribute("style", "font-weight: bold; background-color: deepskyblue;");
            }
            else if (placement.innerHTML == "WIN TIE") {
                placement.setAttribute("style", "font-weight: bold; background-color: steelblue; color: #fff;");
                placement.innerHTML = "WIN";
            }
            else if (placement.innerHTML == "  WIN") {
                placement.setAttribute("style", "font-weight: bold; background-color: #2238B4; color: white;");
            }
            else if (placement.innerHTML == "WIN+RTRN") {
                placement.setAttribute("style", "font-weight: bold; background-color: forestgreen; color:white;");
            }
            else if (placement.innerHTML == "SAFE") {
                placement.setAttribute("style", "background-color: white;");
            }
            else if (placement.innerHTML == "SAFE ") {
                    placement.setAttribute("style", "background-color: palegreen; color:#000;");
            }
            else if (placement.innerHTML == " SAFE ") {
                    placement.setAttribute("style", "background-color: #7D1935; color:#000;");
            }
            else if (placement.innerHTML == " SAFE") {
                placement.setAttribute("style", "background-color: magenta; color: white;");
            }
            else if (placement.innerHTML == "SAFE<br><small>Round 1</small>") {
                placement.setAttribute("style", "background-color: lightcoral; color: white;");
            }
            else if (placement.innerHTML == "SAFE<br><small>Round 2</small>") {
                placement.setAttribute("style", "background-color: indianred; color: white;");
            }
            else if (placement.innerHTML == "SAFE<br><small>Round 3</small>") {
                placement.setAttribute("style", "background-color: crimson; color: white;");
            }
            else if (placement.innerHTML == "SAFE+BLOCKED" || placement.innerHTML == "SAFE+BLOCKED+BLOCKED") {
                placement.setAttribute("style", "background-color: red; font-weight: bold;");
                placement.innerHTML = "BLOCK"
            }
            else if (placement.innerHTML == "RUN") {
                    placement.setAttribute("style", "background-color: magenta; color:white;");
            }
            else if (placement.innerHTML == "RUN ") {
                    placement.setAttribute("style", "background-color: #D3FFB5; color:#000; font-weight: bold;");
            }
            else if (placement.innerHTML == "OUT") {
                placement.setAttribute("style", "background-color: forestgreen; color:white;");
            }
            else if (placement.innerHTML == "OUT ") {
                    placement.setAttribute("style", "background-color: purple; color:white;");
            }
            else if (placement.innerHTML == " WIN") {
                placement.setAttribute("style", "font-weight: bold; background-color: darkblue; color: white;");
            }
            else if (placement.innerHTML == "DISQ") {
                placement.setAttribute("style", "font-weight: bold; background-color: black; color: white;");
            }
            else if (placement.innerHTML == "DEPT") {
                placement.setAttribute("style", "font-weight: bold; background-color: plum;");
            }
            else if (placement.innerHTML == "QUIT") {
                placement.setAttribute("style", "font-weight: bold; background-color: palevioletred;");
            }
            else if (placement.innerHTML == "WIN+QUIT") {
                placement.setAttribute("style", "font-weight: bold; background-color:#5920d4;");
            }
            else if (placement.innerHTML == "WINWIN") {
                placement.setAttribute("style", "font-weight: bold; background-color:mediumblue; color:white;");
                placement.innerHTML = "WIN";
            }
            else if (placement.innerHTML == "WINHIGH") {
                placement.setAttribute("style", "background-color:cornflowerblue;");
                placement.innerHTML = "<b>WIN</b><br>+<br> HIGH";
            }
            else if (placement.innerHTML == "WINLOW") {
                placement.setAttribute("style", "background-color:#ee82ee;");
                placement.innerHTML = "<b>WIN</b><br>+<br> LOW";
            }
            else if (placement.innerHTML == "WINBTM2") {
                placement.setAttribute("style", "background-color:mediumorchid;");
                placement.innerHTML = "<b>WIN</b><br>+<br> BTM2";
            }
            else if (placement.innerHTML == "WINELIM") {
                placement.setAttribute("style", "font-weight: bold; background-color:#9400d3; color:white;");
                placement.innerHTML = "WIN <br>+<br> ELIM";
            }
            else if (placement.innerHTML == "WIN BTM2") {
                placement.setAttribute("style", "background-color: hotpink;");
                placement.innerHTML = "WIN <br>+<br> BTM2";
            }
            else if (placement.innerHTML == "WINCHOC") {
                placement.setAttribute("style", "font-weight: bold; background-color: #fcea7c;");
                placement.innerHTML = "WIN <br>+<br> CHOC";
            }
            else if (placement.innerHTML == "WINDISQ") {
                placement.setAttribute("style", "font-weight: bold; background-color: black; color: white;");
                placement.innerHTML = "WIN <br>+<br> DISQ";
            }
            else if (placement.innerHTML == "WINDEPT") {
                placement.setAttribute("style", "font-weight: bold; background-color: plum;");
                placement.innerHTML = "WIN <br>+<br> DEPT";
            }
            else if (placement.innerHTML == "WINQUIT") {
                placement.setAttribute("style", "font-weight: bold; background-color: palevioletred;");
                placement.innerHTML = "WIN <br>+<br> QUIT";
            }
            else if (placement.innerHTML == "RTRN") {
                placement.setAttribute("style", "font-weight: bold; background-color: magenta;");
            }
            else if (placement.innerHTML == "RTRN ") {
                placement.setAttribute("style", "font-weight: bold; background-color: orange;");
            }
            else if (placement.innerHTML == " WIN ") {
                placement.setAttribute("style", "background-color: lightskyblue;");
            }
            else if (placement.innerHTML == "LOSS") {
                placement.setAttribute("style", "background-color: #ff9e9e;");
            }
            else if (placement.innerHTML == "LOSS ") {
                placement.setAttribute("style", "background-color: orange;");
            }
            else if (placement.innerHTML == "GUEST") {
                placement.setAttribute("style", "background-color: lightgrey;");
            }
            else if (placement.innerHTML == "MISS CON") {
                placement.setAttribute("style", "background-color: aqua; font-weight: bold;");
            }
            else if (placement.innerHTML == "undefined" && all_winners) {
                placement.setAttribute("style", "font-weight: bold; background-color: lightgray;");
                placement.innerHTML = (eliminatedCast[i].ppe / (eliminatedCast[i].episodesOn)).toFixed(2) + " - " + eliminatedCast[i].stars;
            }
            else if (placement.innerHTML == "undefined") {
                placement.setAttribute("style", "font-weight: bold; background-color: lightgray;");
                placement.innerHTML = (eliminatedCast[i].ppe / (eliminatedCast[i].episodesOn)).toFixed(2);
            }
            if (eliminatedCast[i].miniEpisode.indexOf((k+1)) != -1) {
                placement.innerHTML += "<br> <small> <i> Mini Chall. Winner </i> </small>";
            }
            contestant.appendChild(placement);
        }
        trackRecords.appendChild(contestant);
    }
    centering.appendChild(trackRecords);
    let br = document.createElement("br");
    centering.appendChild(br);

    if (chocolateBarTwist) {
        let titlec = document.createElement("big");
        titlec.innerHTML = "Chocolate Bar Twist";
        let chocolateTable = document.createElement("table");
        if (totalCastSize >= 12 && totalCastSize < 15)
            chocolateTable.setAttribute("style", "font-size: 85%;");
        if (totalCastSize >= 15)
            chocolateTable.setAttribute("style", "font-size: 75%");
        let headerc = document.createElement("tr");
        chocolateTable.appendChild(headerc);
        let number = Math.round((fullCast.length / 2));
        for (let i = 0; i < number ; i++) {
            let thc = document.createElement("th");
            thc.setAttribute("style", "background-color: #f5ebf5; font-weight: bold; height: 50px; padding: 0px;");
            let img = document.createElement("img");
            img.setAttribute("style", `width: 75px; height: 75px; border-radius: 0px; border: 0px;`);
            img.src = fullCast[i].image;
            thc.appendChild(img);
            headerc.appendChild(thc);
        }
        let row1 = document.createElement("tr");
        chocolateTable.appendChild(row1);
        for (let i = 0; i < number ; i++) {
            let tdc = document.createElement("td");
            tdc.setAttribute("style", "background-color: #f5ebf5; font-weight: bold; height: 50px; padding: 0px;");
            let img = document.createElement("img");
            for (let o = 0; o < eliminatedCast.length; o++) {
                if (fullCast[i].getName() == eliminatedCast[o].getName()) {
                    if (fullCast[i].chocolate == true) {
                        img.src = "image/ChocolateBarWithTicket.webp";
                    } else {
                        img.src = "image/ChocolateBarWithNoTicket.webp";
                    }
                }
            }
            for (let o = 0; o < currentCast.length; o++) {
                if (fullCast[i].getName() == currentCast[o].getName()) {
                    if (chocolateBarTwistCheck){
                        if (fullCast[i].chocolate == true) {
                            img.src = "image/ChocolateBarWithTicket.webp";
                        } else {
                            img.src = "image/ChocolateBarWithNoTicket.webp";
                        }
                    } else {
                        img.src = "image/ChocolateBarTBA.webp";
                    }
                }
            }
            img.setAttribute("style", `width: 75px; height: 75px; border-radius: 0px; border: 0px;`);
            tdc.appendChild(img);
            row1.appendChild(tdc);
        }
        let row2 = document.createElement("tr");
        chocolateTable.appendChild(row2);
        for (let i = number ; i < fullCast.length ; i++) {
            let tdc = document.createElement("td");
            tdc.setAttribute("style", "background-color: #f5ebf5; font-weight: bold; height: 50px; padding: 0px;");
            let img = document.createElement("img");
            img.setAttribute("style", `width: 75px; height: 75px; border-radius: 0px; border: 0px;`);
            img.src = fullCast[i].image;
            tdc.appendChild(img);
            row2.appendChild(tdc);
        }
        let row3 = document.createElement("tr");
        chocolateTable.appendChild(row3);
        for (let i = number ; i < fullCast.length ; i++) {
            let tdc1 = document.createElement("td");
            tdc1.setAttribute("style", "background-color: #f5ebf5; font-weight: bold; height: 50px; padding: 0px;");
            let img1 = document.createElement("img");
            for (let o = 0; o < eliminatedCast.length; o++) {
                if (fullCast[i].getName() == eliminatedCast[o].getName()) {
                    if (fullCast[i].chocolate == true) {
                        img1.src = "image/ChocolateBarWithTicket.webp";
                    } else {
                        img1.src = "image/ChocolateBarWithNoTicket.webp";
                    }
                }
            }
            for (let o = 0; o < currentCast.length; o++) {
                if (fullCast[i].getName() == currentCast[o].getName()) {
                    if (chocolateBarTwistCheck){
                        if (fullCast[i].chocolate == true) {
                            img1.src = "image/ChocolateBarWithTicket.webp";
                        } else {
                            img1.src = "image/ChocolateBarWithNoTicket.webp";
                        }
                    } else {
                        img1.src = "image/ChocolateBarTBA.webp";
                    }
                }
            }
            img1.setAttribute("style", `width: 75px; height: 75px; border-radius: 0px; border: 0px;`);
            tdc1.appendChild(img1);
            row3.appendChild(tdc1);
        }
        centering.appendChild(titlec);
        centering.appendChild(chocolateTable);
    }

    if (lipsync_assassin || all_stars) {
        var titlea = document.createElement("big");
        titlea.innerHTML = "Lipstick Choices";
        var lipassa = document.createElement("table");
        if (totalCastSize >= 12 && totalCastSize < 15)
            lipassa.setAttribute("style", "font-size: 85%;");
        if (totalCastSize >= 15)
            lipassa.setAttribute("style", "font-size: 75%");
        var headera = document.createElement("tr");
        lipassa.appendChild(headera);
        var tha = document.createElement("th");
        tha.innerHTML = "Winner";
        tha.setAttribute("style", "background-color: #e9dfe9; font-weight: bold; width: 170px;");
        headera.appendChild(tha);
        var tha1 = document.createElement("th");
        tha1.innerHTML = "Lipstick";
        tha1.setAttribute("style", "background-color: #e9dfe9; font-weight: bold; width: 170px;");
        headera.appendChild(tha1);
        var tha2 = document.createElement("th");
        tha2.innerHTML = "Loser";
        tha2.setAttribute("style", "background-color: #e9dfe9; font-weight: bold; width: 170px;");
        headera.appendChild(tha2);
        var tha3 = document.createElement("th");
        tha3.innerHTML = "Lipstick";
        tha3.setAttribute("style", "background-color: #e9dfe9; font-weight: bold; width: 170px;");
        headera.appendChild(tha3);
        for (var i = 0; i < assasintable.length; i++) {
            var contestanta = document.createElement("tr");
            var namea = document.createElement("td");
            var namea1 = document.createElement("td");
            var lipstickk = document.createElement("td");
            var lipstickkk = document.createElement("td");
            namea.setAttribute("style", "background-color: #f5ebf5; font-weight: bold;");
            namea1.setAttribute("style", "background-color: #f5ebf5;");
            lipstickk.setAttribute("style", "background-color: #f5ebf5; font-weight: bold;");
            lipstickkk.setAttribute("style", "background-color: #f5ebf5;");
            namea.innerHTML = assasintable[i];
            lipstickk.innerHTML = assasinlipstick[i];
            namea1.innerHTML = assasintable[i+1];
            lipstickkk.innerHTML = assasinlipstick[i+1];
            i++;
            if (namea1.innerHTML == " "){
                namea1.setAttribute("style", "background-color: gray;");
                lipstickkk.setAttribute("style", "background-color: gray;");
            }
            contestanta.appendChild(namea);
            contestanta.appendChild(lipstickk);
            contestanta.appendChild(namea1);
            contestanta.appendChild(lipstickkk);
            lipassa.appendChild(contestanta);

        }
        centering.appendChild(titlea);
        centering.appendChild(lipassa);
        }
    main.appendChild(centering);
    if (onFinale) {
        screen.createButton("Simulate again!", "reSimulate()");
        screen.createButton("Download!", "downloadTR()");
        screen.createHorizontalLine();
        screen.createButton("Back to main page", "location.reload()");
        
    }
}
let totalCastSize;
function randomNumber(min, max) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}
function sortPerformances(cast) {
    cast.sort((a, b) => (a.performanceScore - b.performanceScore));
}
//generate spaces to insert cast:
function generateSpace() {
    let castSize = document.querySelector("input#castSize").valueAsNumber;
    totalCastSize = castSize;
    let castSelection = document.querySelector("p#castSelection");
    castSelection.innerHTML = '';
    if (totalCastSize < 3)
        window.alert("Please, use at least 3 queens on your cast!");
    else if (totalCastSize > 20)
        window.alert("Please, use less than 20 queens in your cast!");
    else
        for (let i = 0; i < castSize; i++) {
            let select = document.createElement("select");
            select.setAttribute("class", "queenList");
            select.setAttribute("id", i.toString());
            select.setAttribute("onchange", "setImage()");
            let img = document.createElement("img");
            img.setAttribute("class", "images");
            img.setAttribute("id", "image" + i.toString());
            img.setAttribute("style", "width: 105px; height: 105px;")
            let p = document.createElement("p");
            p.appendChild(img);
            if (document.getElementById("onlyCustomQueens").checked == true){
                let customy = allQueens.filter(function (queen) { return queen.customqueen == true; });
                for (let k = 0; k < customy.length; k++) {
                    let option = document.createElement("option");
                    option.innerHTML = customy[k].getName();
                    option.value = customy[k].image;
                    select.add(option);
                }
                select.selectedIndex = randomNumber(0, customy.length - 1);
            }
            else{
                for (let k = 0; k < allQueens.length; k++) {
                    let option = document.createElement("option");
                    option.innerHTML = allQueens[k].getName();
                    option.value = allQueens[k].image;
                    select.add(option);
                }
                select.selectedIndex = randomNumber(0, allQueens.length - 1);
            }
            let br = document.createElement("br");
            castSelection.appendChild(p);
            castSelection.appendChild(select);
            castSelection.appendChild(br);
        }
    setImage();
}
function setImage() {
    let images = document.getElementsByClassName("images");
    for (let i = 0; i < images.length; i++) {
        let img = document.getElementById("image" + i.toString());
        let select = document.getElementById(i.toString());
        img.src = select.options[select.selectedIndex].value;
    }
}
let top3 = false;
let top4 = false;
let canFinale = false;
let all_stars = false;
let allstars3Finale = false;
let ukvstwFinale = false;
let lipsync_assassin = false;
let all_winners = false;
let thailandFormat = false;
let team = false;
function predefCast(cast, format, premiere = '', returning = '') {
    currentCast = cast;
    totalCastSize = cast.length;
    if (format == "top3")
        top3 = true;
    else if (format == "top4")
        top4 = true;
    else if (format == "canS2"){
        top3 = true;
        canFinale = true;
    }
    else if (format == "thailandFormat")
        thailandFormat = true;
    else if (format == "all-stars")
        all_stars = true;
    else if (format == "jury-allstars"){ 
        all_stars = true;
        allstars3Finale = true;
    }
    else if (format == "international-allstars"){ 
        all_stars = true;
        ukvstwFinale = true;
    }
    else if (format == "all-winners"){ 
        all_winners = true;
    }
    else if (format == "team")
        team = true;
    else if (format == "lipsync-assassin") {
        lipsync_assassin = true;
        allQueensCopy2 = [...allQueens];
        allQueens = allQueens.filter(function (queen) { return queen.getLipSyncStat() >= 9; });
        allQueens = allQueens.filter(function (queen) { return currentCast.indexOf(queen) == -1; });
        allQueensCopy = [...allQueens];
    }
    if (premiere == "s6-premiere")
        s6Premiere = true;
    else if (premiere == "s9-premiere")
        s9Premiere = true;
    else if (premiere == "s12-premiere")
        s12Premiere = true;
    else if (premiere == "s14-premiere")
        s14Premiere = true;
    else if (premiere == "porkchop")
        porkchopPremiere = true;
    else if (premiere == "uk3-premiere")
        uk3Premiere = true;
    if (returning == "return")
        randomReturn = true;
    else if (returning == "vote")
        voteReturn = true;
    else if (returning == "conjoined-queens")
        conjoinedQueens = true;
    else if (returning == "smackdown"){
        smackdown = true;
        slayersCheck = true;
    }
    else if (returning == "lalaparuza")
        lalaparuza = true;
    else if (returning == "queensofcomedy")
        queensOfComedy = true;
    else if (returning == "kittygirlgroup")
        kittyGirlGroup = true;
    if (document.getElementById("disableDouble").checked == true)
        noDouble = true;
    if (document.getElementById("riggory").checked == true)
            riggory = true;
    if (document.getElementById("chocolateBar").checked == true)
        chocolateBarTwist = true;
    else if (document.getElementById("chocolateBarChoosable").checked == true){
        chocolateBarTwist = true;
        chocolateBarTwistChoosable = true;
    }
    if (smackdown && chocolateBarTwist) {
        window.alert("The Lipsync Smackdown format isn't supported with the golden chocolate bar twist, sorry!");
        s14Premiere = false;
        s12Premiere = false;
        s9Premiere = false;
        s6Premiere = false;
        porkchopPremiere = false;
        uk3Premiere = false;
        top4 = false;
        top3 = false;
        thailandFormat = false;
        canFinale = false;
        lipsync_assassin = false;
        smackdown = false;
        all_stars = false;
        all_winners = false;
        allstars3Finale = false;
        ukvstwFinale = false;
        smackdown = false;
        voteReturn = false;
        conjoinedQueens = false;
        queensOfComedy = false;
        kittyGirlGroup = false;
        randomReturn = false;
        lalaparuza = false;
        allQueens = [...allQueensCopy2];
        chocolateBarTwist = false;
        chocolateBarTwistChoosable = false;
    }
    else if (smackdown && !noDouble) {
        window.alert("The Lipsync Smackdown format isn't supported with double shantays or sashays, sorry!");
        s14Premiere = false;
        s12Premiere = false;
        s9Premiere = false;
        s6Premiere = false;
        porkchopPremiere = false;
        uk3Premiere = false;
        top4 = false;
        top3 = false;
        thailandFormat = false;
        canFinale = false;
        lipsync_assassin = false;
        smackdown = false;
        all_stars = false;
        all_winners = false;
        allstars3Finale = false;
        ukvstwFinale = false;
        smackdown = false;
        voteReturn = false;
        conjoinedQueens = false;
        queensOfComedy = false;
        kittyGirlGroup = false;
        randomReturn = false;
        lalaparuza = false;
        allQueens = [...allQueensCopy2];
        chocolateBarTwist = false;
        chocolateBarTwistChoosable = false;
    }
    else if (team && chocolateBarTwist) {
        window.alert("The team format isn't supported with the chocolate bar twist, sorry!");
        team = false;
        smackdown = false;
        voteReturn = false;
        randomReturn = false;
        lalaparuza = false;
        queensOfComedy = false;
        conjoinedQueens = false;
        kittyGirlGroup = false;
        s6Premiere = false;
        s9Premiere = false;
        s12Premiere = false;
        s14Premiere = false;
        porkchopPremiere = false;
        uk3Premiere = false;
        chocolateBarTwist = false;
        chocolateBarTwistChoosable = false;
    }
    else if(all_winners && (smackdown || s14Premiere || s12Premiere || s9Premiere || s6Premiere || porkchopPremiere || uk3Premiere || voteReturn || conjoinedQueens || queensOfComedy || kittyGirlGroup || randomReturn || lalaparuza || chocolateBarTwist)) {
        window.alert("The All Winners Format isn't avaliable with any combination of premiere, returning challenge or Chocolate Bar Twist, at this moment.");
        s14Premiere = false;
        s12Premiere = false;
        s9Premiere = false;
        s6Premiere = false;
        porkchopPremiere = false;
        uk3Premiere = false;
        top4 = false;
        top3 = false;
        thailandFormat = false;
        canFinale = false;
        lipsync_assassin = false;
        smackdown = false;
        all_stars = false;
        all_winners = false;
        allstars3Finale = false;
        ukvstwFinale = false;
        smackdown = false;
        voteReturn = false;
        conjoinedQueens = false;
        queensOfComedy = false;
        kittyGirlGroup = false;
        randomReturn = false;
        lalaparuza = false;
        chocolateBarTwist = false;
        chocolateBarTwistChoosable = false;
    }
    else if (chocolateBarTwist) {
        if (chocolateBarTwistChoosable){
            chooseGoldenBar();
        }else {
            giveChocolate();
        }
    }
    else if (s6Premiere || s12Premiere || s14Premiere)
        doublePremiere();
    else if (porkchopPremiere)
        porkchopLipsyncs();
    else{
        newEpisode();
    }
}
function startSimulation(challenge = "") {
    //get selected names and compare them to the all queens list:
    for (let i = 0; i < document.getElementsByClassName("queenList").length; i++) {
        let select = document.getElementById(i.toString());
        let value = select.options[select.selectedIndex].text;
        for (let k = 0; k < allQueens.length; k++) {
            if (value == allQueens[k].getName()) {
                currentCast.push(allQueens[k]);
                break;
            }
        }
    }
    if (currentCast.length == 0)
        window.alert("Your cast is empty!");
    else if (duplicateQueens(currentCast))
        window.alert("Please, only use one of each queen on your cast!");
    else {
        let select = document.getElementById("format");
        let select2 = document.getElementById("premiere-format");
        let select3 = document.getElementById("returning");
        if (select.options[select.selectedIndex].value == "top3")
            top3 = true;
        else if (select.options[select.selectedIndex].value == "top4")
            top4 = true;
        else if (select.options[select.selectedIndex].value == "thailand")
            thailandFormat = true;
        else if (select.options[select.selectedIndex].value == "canS2"){
            canFinale = true;
            top3 = true;
        }
        else if (select.options[select.selectedIndex].value == "all-stars")
            all_stars = true;
        else if (select.options[select.selectedIndex].value == "jury-allstars") {
            all_stars = true;
            allstars3Finale = true;
        }
        else if (select.options[select.selectedIndex].value == "international-allstars") {
            all_stars = true;
            ukvstwFinale = true;
        }
        else if (select.options[select.selectedIndex].value == "all-winners") {
            all_winners = true;
        }
        else if (select.options[select.selectedIndex].value == "team")
            team = true;
        else if (select.options[select.selectedIndex].value == "lipsync-assassin") {
            lipsync_assassin = true;
            allQueensCopy2 = [...allQueens];
            allQueens = allQueens.filter(function (queen) { return queen.getLipSyncStat() >= 9; });
            allQueens = allQueens.filter(function (queen) { return currentCast.indexOf(queen) == -1; });
            allQueensCopy = [...allQueens];
        }
        if (select2.options[select2.selectedIndex].value == "s6-premiere")
            s6Premiere = true;
        else if (select2.options[select2.selectedIndex].value == "s9-premiere")
            s9Premiere = true;
        else if (select2.options[select2.selectedIndex].value == "s12-premiere")
            s12Premiere = true;
        else if (select2.options[select2.selectedIndex].value == "s14-premiere")
            s14Premiere = true;
        else if (select2.options[select2.selectedIndex].value == "porkchop")
            porkchopPremiere = true;
        else if (select2.options[select2.selectedIndex].value == "uk3-premiere")
            uk3Premiere = true;
        if (select3.options[select3.selectedIndex].value == "random")
            randomReturn = true;
        else if (select3.options[select3.selectedIndex].value == "votes")
            voteReturn = true;
        else if (select3.options[select3.selectedIndex].value == "conjoined-queens")
            conjoinedQueens = true;
        else if (select3.options[select3.selectedIndex].value == "queensofcomedy")
            queensOfComedy = true;
        else if (select3.options[select3.selectedIndex].value == "kittygirlgroup")
            kittyGirlGroup = true;
        else if (select3.options[select3.selectedIndex].value == "lalaparuza")
            lalaparuza = true;
        else if (select3.options[select3.selectedIndex].value == "smackdown")
            smackdown = true;
            slayersCheck = true;
        if (document.getElementById("disableDouble").checked == true)
            noDouble = true;
        if (document.getElementById("riggory").checked == true)
            riggory = true;
        if (document.getElementById("chocolateBar").checked == true)
            chocolateBarTwist = true;
        else if (document.getElementById("chocolateBarChoosable").checked == true){
                chocolateBarTwist = true;
                chocolateBarTwistChoosable = true;
        }
        if (currentCast.length == 3 && top4 || currentCast.length == 3 && (all_stars || all_winners)) {
            window.alert("Lip-Sync For The Crown and All Star formats needs at least 4 queens!");
            top4 = false;
            all_stars = false;
            all_winners = false;
            allstars3Finale = false;
            ukvstwFinale = false;
            currentCast = [];
        }
        else if (team == true && currentCast.length % 2 !== 0) {
            window.alert("The team format needs an even amout of queens!");
            currentCast = [];
            team = false;
        }
        else if ((s6Premiere || s12Premiere || porkchopPremiere || s14Premiere) && currentCast.length < 10) {
            window.alert("Double Premiere formats needs at least 10 queens!");
            s6Premiere = false;
            s12Premiere = false;
            s14Premiere = false;
            porkchopPremiere = false;
            top4 = false;
            top3 = false;
            thailandFormat = false;
            canFinale = false;
            lipsync_assassin = false;
            all_stars = false;
            all_winners = false;
            allstars3Finale = false;
            ukvstwFinale = false;
            currentCast = [];
        }
        else if (uk3Premiere && currentCast.length < 6) {
            window.alert("Uk3 Premiere needs at least 6 queens!");
            uk3Premiere = false;
            top4 = false;
            top3 = false;
            thailandFormat = false;
            canFinale = false;
            lipsync_assassin = false;
            all_stars = false;
            all_winners = false;
            allstars3Finale = false;
            ukvstwFinale = false;
            smackdown = false;
            voteReturn = false;
            conjoinedQueens = false;
            queensOfComedy = false;
            kittyGirlGroup = false;
            randomReturn = false;
            lalaparuza = false;
            currentCast = [];
        }
        else if (s9Premiere && currentCast.length < 6) {
            window.alert("Normal Premiere (No Elimination) needs at least 6 queens!");
            uk3Premiere = false;
            top4 = false;
            top3 = false;
            thailandFormat = false;
            canFinale = false;
            lipsync_assassin = false;
            all_stars = false;
            all_winners = false;
            allstars3Finale = false;
            ukvstwFinale = false;
            smackdown = false;
            voteReturn = false;
            conjoinedQueens = false;
            queensOfComedy = false;
            kittyGirlGroup = false;
            randomReturn = false;
            lalaparuza = false;
            currentCast = [];
        }
        else if ((queensOfComedy || conjoinedQueens || kittyGirlGroup) && currentCast.length < 10) {
            window.alert("Queens of comedy, Kitty Girl Group and Conjoined Queens return challenges need at least 10 queens!");
            uk3Premiere = false;
            s6Premiere = false;
            s9Premiere = false;
            s12Premiere = false;
            s14Premiere = false;
            porkchopPremiere = false;
            top4 = false;
            top3 = false;
            thailandFormat = false;
            canFinale = false;
            lipsync_assassin = false;
            all_stars = false;
            all_winners = false;
            allstars3Finale = false;
            ukvstwFinale = false;
            smackdown = false;
            voteReturn = false;
            conjoinedQueens = false;
            queensOfComedy = false;
            kittyGirlGroup = false;
            randomReturn = false;
            lalaparuza = false;
            currentCast = [];
        }
        else if (team && (smackdown || voteReturn || randomReturn || chocolateBarTwist || s9Premiere || s6Premiere || lalaparuza || queensOfComedy || kittyGirlGroup || conjoinedQueens || s12Premiere || porkchopPremiere || s14Premiere || uk3Premiere)) {
            window.alert("The team format isn't supported with any special premiere or returning formats, sorry!");
            team = false;
            smackdown = false;
            voteReturn = false;
            randomReturn = false;
            lalaparuza = false;
            queensOfComedy = false;
            conjoinedQueens = false;
            kittyGirlGroup = false;
            s6Premiere = false;
            s9Premiere = false;
            s12Premiere = false;
            s14Premiere = false;
            porkchopPremiere = false;
            uk3Premiere = false;
            chocolateBarTwist = false;
            chocolateBarTwistChoosable = false;
        }
        else if (lalaparuza && !all_stars) {
            window.alert("The LaLaPaRUZa returning challenge is only supported with the Lipsync for your legacy, Jury All Stars and UK vs The World Formats, sorry!");
            s14Premiere = false;
            s12Premiere = false;
            s9Premiere = false;
            s6Premiere = false;
            porkchopPremiere = false;
            uk3Premiere = false;
            top4 = false;
            top3 = false;
            thailandFormat = false;
            canFinale = false;
            lipsync_assassin = false;
            smackdown = false;
            all_stars = false;
            all_winners = false;
            allstars3Finale = false;
            ukvstwFinale = false;
            voteReturn = false;
            conjoinedQueens = false;
            queensOfComedy = false;
            kittyGirlGroup = false;
            randomReturn = false;
            lalaparuza = false;
            allQueens = [...allQueensCopy2];
            chocolateBarTwist = false;
            chocolateBarTwistChoosable = false;
        }
        else if (smackdown && chocolateBarTwist) {
            window.alert("The Lipsync Smackdown format isn't supported with the golden chocolate bar twist, sorry!");
            s14Premiere = false;
            s12Premiere = false;
            s9Premiere = false;
            s6Premiere = false;
            porkchopPremiere = false;
            uk3Premiere = false;
            top4 = false;
            top3 = false;
            thailandFormat = false;
            canFinale = false;
            lipsync_assassin = false;
            smackdown = false;
            all_stars = false;
            all_winners = false;
            allstars3Finale = false;
            ukvstwFinale = false;
            smackdown = false;
            voteReturn = false;
            conjoinedQueens = false;
            queensOfComedy = false;
            kittyGirlGroup = false;
            randomReturn = false;
            lalaparuza = false;
            allQueens = [...allQueensCopy2];
            chocolateBarTwist = false;
            chocolateBarTwistChoosable = false;
        }
        else if (smackdown && !noDouble) {
            window.alert("The Lipsync Smackdown format isn't supported with double shantays or sashays, sorry!");
            s14Premiere = false;
            s12Premiere = false;
            s9Premiere = false;
            s6Premiere = false;
            porkchopPremiere = false;
            uk3Premiere = false;
            top4 = false;
            top3 = false;
            thailandFormat = false;
            canFinale = false;
            lipsync_assassin = false;
            smackdown = false;
            all_stars = false;
            all_winners = false;
            allstars3Finale = false;
            ukvstwFinale = false;
            smackdown = false;
            voteReturn = false;
            conjoinedQueens = false;
            queensOfComedy = false;
            kittyGirlGroup = false;
            randomReturn = false;
            lalaparuza = false;
            allQueens = [...allQueensCopy2];
            chocolateBarTwist = false;
            chocolateBarTwistChoosable = false;
        }
        else if(all_winners && (smackdown || s14Premiere || s12Premiere || s9Premiere || s6Premiere || porkchopPremiere || uk3Premiere || voteReturn || conjoinedQueens || queensOfComedy || kittyGirlGroup || randomReturn || lalaparuza || chocolateBarTwist)) {
            window.alert("The All Winners Format isn't avaliable with any combination of premiere, returning challenge or Chocolate Bar Twist, at this moment.");
            s14Premiere = false;
            s12Premiere = false;
            s9Premiere = false;
            s6Premiere = false;
            porkchopPremiere = false;
            uk3Premiere = false;
            top4 = false;
            top3 = false;
            thailandFormat = false;
            canFinale = false;
            lipsync_assassin = false;
            smackdown = false;
            all_stars = false;
            all_winners = false;
            allstars3Finale = false;
            ukvstwFinale = false;
            smackdown = false;
            voteReturn = false;
            conjoinedQueens = false;
            queensOfComedy = false;
            kittyGirlGroup = false;
            randomReturn = false;
            lalaparuza = false;
            chocolateBarTwist = false;
            chocolateBarTwistChoosable = false;
        }
        else if (chocolateBarTwist) {
            if (chocolateBarTwistChoosable){
                chooseGoldenBar();
            }else {
                giveChocolate();
            }
        }
        else if (s6Premiere || s12Premiere || s14Premiere) {
            doublePremiere();
        }
        else if (porkchopPremiere) {
            porkchopLipsyncs();
        }
        else {
            newEpisode();
        }
    }
}
//see if there is two of the same queens:
function duplicateQueens(cast) {
    let valuesAlreadySeen = [];
    for (let i = 0; i < cast.length; i++) {
        let value = cast[i];
        if (valuesAlreadySeen.indexOf(value) !== -1) {
            currentCast = [];
            return true;
        }
        valuesAlreadySeen.push(value);
    }
    return false;
}
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }
    return array;
}
let s9PremiereCheck = false;
let uk3PremiereCheck = false;
function judging() {
    if ((s12Premiere || porkchopPremiere) && premiereCounter <= 2) {
        //add 2 queens to the top and the rest is safe
        currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
        topQueens.push(currentCast[0]);
        topQueens.push(currentCast[1]);
        if (currentCast.length == 6) {
            currentCast[2].addToTrackRecord("HIGH");
            currentCast[3].addToTrackRecord("HIGH");
            currentCast[4].addToTrackRecord("LOW");
            currentCast[5].addToTrackRecord("LOW");
            currentCast[0].ppe += 3;
            currentCast[1].ppe += 3;
            currentCast[2].ppe += 4;
            currentCast[3].ppe += 4;
            currentCast[4].ppe += 2;
            currentCast[5].ppe += 2;
        } else if (currentCast.length > 6) {
            currentCast[2].addToTrackRecord("HIGH");
            currentCast[3].addToTrackRecord("HIGH");
            currentCast[currentCast.length - 2].addToTrackRecord("LOW");
            currentCast[currentCast.length - 1].addToTrackRecord("LOW");
            currentCast[0].ppe += 3;
            currentCast[1].ppe += 3;
            currentCast[2].ppe += 4;
            currentCast[3].ppe += 4;
            currentCast[currentCast.length - 2].ppe += 2;
            currentCast[currentCast.length - 1].ppe += 2;
            for (let i = 4; i < currentCast.length - 2; i++) {
                currentCast[i].addToTrackRecord("SAFE");
                currentCast[i].ppe += 3;
            }
        } else {
            for (let i = 0; i < currentCast.length; i++) {
                if (topQueens.indexOf(currentCast[i]) == -1)
                    currentCast[i].addToTrackRecord("SAFE");
                    currentCast[i].ppe += 3;
            }
        }
        doublePremiereJudging();
    }
    else if (currentCast.length <= 10 && all_winners) {
        //add 4 queens to the top and the others safe
        currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
        for (let i = 0; i < 4; i++) {
            topQueens.push(currentCast[i]);
        }
        winnersJudging();
    }
    else if (currentCast.length > 10 && all_winners) {
        //add 5 queens to the top and the others safe
        currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
        for (let i = 0; i < 5; i++) {
            topQueens.push(currentCast[i]);
        }
        winnersJudging();
    }
    else if (currentCast.length == totalCastSize && uk3Premiere && !uk3PremiereCheck) {
        //add 3 queens to the top and 3 to the bottom
        currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
        for (let i = 0; i < 3; i++) {
            topQueens.push(currentCast[i]);
            bottomQueens.push(currentCast[currentCast.length - (i + 1)]);
        }
        uk3PremiereCheck = true;
        judgingScreen();
    }
    else if (currentCast.length == totalCastSize - 1 && s9Premiere && !s9PremiereCheck) {
        //add 3 queens to the top and 0 to the bottom
        currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
        for (let i = 0; i < 3; i++) {
            topQueens.push(currentCast[i]);
        }
        s9PremiereCheck = true;
        s9judgingScreen();
    }
    else if (currentCast.length > 5 && team) {
        //add 2 teams to the top and 3 teams to the bottom
        currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
        for (let i = 0; i < currentCast.length; i++) {
            currentCast[i].QueenB.episodesOn++;
            currentCast[i].QueenA.episodesOn++;
        }
        topQueens.push(currentCast[0]);
        topQueens.push(currentCast[1]);
        bottomQueens.push(currentCast[currentCast.length - 1]);
        bottomQueens.push(currentCast[currentCast.length - 2]);
        bottomQueens.push(currentCast[currentCast.length - 3]);
        judgingScreen();
    }
    else if (currentCast.length == 5 && team) {
        //add 2 teams to the top and 3 teams to the bottom
        currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
        for (let i = 0; i < currentCast.length; i++) {
            currentCast[i].QueenB.episodesOn++;
            currentCast[i].QueenA.episodesOn++;
        }
        topQueens.push(currentCast[0]);
        topQueens.push(currentCast[1]);
        bottomQueens.push(currentCast[currentCast.length - 1]);
        bottomQueens.push(currentCast[currentCast.length - 2]);
        bottomQueens.push(currentCast[currentCast.length - 3]);
        teamWinAndBtm2();
    }
    else if (currentCast.length == 4 && team) {
        //add 2 teams to the top and 2 teams to the bottom
        currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
        for (let i = 0; i < currentCast.length; i++) {
            currentCast[i].QueenB.episodesOn++;
            currentCast[i].QueenA.episodesOn++;
        }
        topQueens.push(currentCast[0]);
        topQueens.push(currentCast[1]);
        bottomQueens.push(currentCast[currentCast.length - 1]);
        bottomQueens.push(currentCast[currentCast.length - 2]);
        teamWinAndBtm2();
    }
    else if (currentCast.length == 3 && team) {
        //add 1 team to the top and 2 teams to the bottom
        currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
        for (let i = 0; i < currentCast.length; i++) {
            currentCast[i].QueenB.episodesOn++;
            currentCast[i].QueenA.episodesOn++;
        }
        topQueens.push(currentCast[0]);
        bottomQueens.push(currentCast[currentCast.length - 1]);
        bottomQueens.push(currentCast[currentCast.length - 2]);
        teamWinAndBtm2();
    }
    else if (currentCast.length >= 9 && isTeamChallenge) {
        //add winning team to the top and bottom team to the bottom
        let team1Team = new TeamsForChallenges(team1);
        let team2Team = new TeamsForChallenges(team2);
        let team3Team = new TeamsForChallenges(team3);
        let teamArray = [team1Team, team2Team, team3Team];
        for (let i = 0; i < team1.length; i++) {
            team1Team.performanceScore += team1[i].performanceScore;
        }
        team1Team.performanceScore = team1Team.performanceScore / team1Team.queens.length;
        for (let i = 0; i < team2.length; i++) {
            team2Team.performanceScore += team2[i].performanceScore;
        }
        team2Team.performanceScore = team2Team.performanceScore / team2Team.queens.length;
        for (let i = 0; i < team3.length; i++) {
            team3Team.performanceScore += team3[i].performanceScore;
        }
        team3Team.performanceScore = team3Team.performanceScore / team3Team.queens.length;
        teamArray.sort((a, b) => (a.performanceScore - b.performanceScore));
        let topTeam = teamArray[0];
        let bottomTeam = teamArray[2];
        for (let i = 0; i < topTeam.queens.length; i++) {
            topQueens.push(topTeam.queens[i]);
        }
        for (let i = 0; i < bottomTeam.queens.length; i++) {
            bottomQueens.push(bottomTeam.queens[i]);
        }
        currentCast = [...team1, ...team2, ...team3];
        sortPerformances(currentCast);
        judgingScreen();
    }
    else if (currentCast.length > 6 && isTeamChallenge) {
        //add winning team to the top and bottom team to the bottom
        let team1Team = new TeamsForChallenges(team1);
        let team2Team = new TeamsForChallenges(team2);
        let teamArray = [team1Team, team2Team];
        for (let i = 0; i < team1.length; i++) {
            team1Team.performanceScore += team1[i].performanceScore;
        }
        team1Team.performanceScore = team1Team.performanceScore / team1Team.queens.length;
        for (let i = 0; i < team2.length; i++) {
            team2Team.performanceScore += team2[i].performanceScore;
        }
        team2Team.performanceScore = team2Team.performanceScore / team2Team.queens.length;
        teamArray.sort((a, b) => (a.performanceScore - b.performanceScore));
        let topTeam = teamArray[0];
        let bottomTeam = teamArray[1];
        for (let i = 0; i < topTeam.queens.length; i++) {
            topQueens.push(topTeam.queens[i]);
        }
        for (let i = 0; i < bottomTeam.queens.length; i++) {
            bottomQueens.push(bottomTeam.queens[i]);
        }
        currentCast = [...team1, ...team2];
        sortPerformances(currentCast);
        judgingScreen();
    }
    else if (currentCast.length >= 10 && bottom6WayLipsync && (top3 || top4) && !bottom6WayLipsyncCheck) {
        //add 3 queens to the top and 6 queens to the bottom
        currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
        for (let i = 0; i < 3; i++) {
            topQueens.push(currentCast[i]);
        }
        for (let i = 0; i < 6; i++) {
            bottomQueens.push(currentCast[currentCast.length - (i + 1)]);
        }
        bottom6WayLipsync = false;
        judging6WayScreen();
    }
    else if (currentCast.length >= 8 && floppers && (top3 || top4) && !floppersCheck) {
        //add 0 queens to the top and 3 queens to the bottom
        currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
        for (let i = 0; i < 3; i++) {
            bottomQueens.push(currentCast[currentCast.length - (i + 1)]);
        }
        floppers = false;
        judgingFloppersScreen();
    }
    else if (currentCast.length >= 6 && slayers && (top3 || top4) && !slayersCheck) {
        //add all the queens to the top and 0 queens to the bottom
        currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
        for (let i = 0; i < currentCast.length ; i++) {
            topQueens.push(currentCast[i]);
        }
        slayers = false;
        judgingSlayersScreen();
    }
    else if (currentCast.length >= 8 && currentCast.length < 10 && s14LaLaPaRUZa && (top3 || top4) && !s14LaLaPaRUZaCheck && !smackdown) {
        //add all the queens to the top and 0 queens to the bottom
        currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
        topQueens.push(currentCast[0]);
        for (let i = 1; i < currentCast.length ; i++) {
            bottomQueens.push(currentCast[i]);
        }
        s14LaLaPaRUZa = false;
        judgingS14LaLaPaRUZaScreen();
    }
    else if (currentCast.length > 13 && thailandFormat) {
        //add 4 queens to the top and 4 queens to the bottom
        currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
        for (let i = 0; i < 4; i++) {
            topQueens.push(currentCast[i]);
            bottomQueens.push(currentCast[currentCast.length - (i + 1)]);
        }
        judgingThailand();
    }
    else if (currentCast.length > 13) {
        //add 4 queens to the top and 4 queens to the bottom
        currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
        for (let i = 0; i < 4; i++) {
            topQueens.push(currentCast[i]);
            bottomQueens.push(currentCast[currentCast.length - (i + 1)]);
        }
        judgingScreen();
    }
    else if (currentCast.length > 6 && thailandFormat) {
        //add first 3 queens to the top and last 3 queens to the bottom:
        currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
        for (let i = 0; i < 3; i++) {
            topQueens.push(currentCast[i]);
            bottomQueens.push(currentCast[currentCast.length - (i + 1)]);
        }
        judgingThailand();
    }
    else if (currentCast.length > 6) {
        //add first 3 queens to the top and last 3 queens to the bottom:
        currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
        for (let i = 0; i < 3; i++) {
            topQueens.push(currentCast[i]);
            bottomQueens.push(currentCast[currentCast.length - (i + 1)]);
        }
        judgingScreen();
    }
    else if (currentCast.length <= 5 && lipsync_assassin) {
        //add 1 queen to the top and the rest to the btm
        currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
        topQueens.push(currentCast[0]);
        for (let i = 0; i < currentCast.length; i++) {
            if (topQueens.indexOf(currentCast[i]) == -1) {
                bottomQueens.push(currentCast[i]);
            }
        }
        topAndBtm();
    }
    else if (currentCast.length == 6) {
        currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
        for (let i = 0; i < 3; i++) {
            topQueens.push(currentCast[i]);
            bottomQueens.push(currentCast[currentCast.length - (i + 1)]);
        }
        if (top3 || top4)
            winAndBtm2();
        else if (thailandFormat) 
            thaiWinBottom2();
        else if (all_stars)
            top2AndBtm();
        else if (lipsync_assassin)
            topAndBtm();
    }
    else if (currentCast.length == 5) {
        //add first 2 queens to the top and last 3 queens to the bottom:
        currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
        topQueens.push(currentCast[0]);
        topQueens.push(currentCast[1]);
        if (currentCast[2].performanceScore >= 6 && currentCast[2].performanceScore < 16 && !all_stars)
            topQueens.push(currentCast[2]);
        else
            bottomQueens.push(currentCast[2]);
        bottomQueens.push(currentCast[3]);
        bottomQueens.push(currentCast[4]);
        if (top3 || top4)
            winAndBtm2();
        else if (thailandFormat) 
            thaiWinBottom2();
        else if (all_stars)
            top2AndBtm();
        else if (lipsync_assassin)
            topAndBtm();
    }
    else if (currentCast.length == 4) {
        //add first 2 queens to the top and last 2 queens to the bottom:
        currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
        topQueens.push(currentCast[0]);
        topQueens.push(currentCast[1]);
        bottomQueens.push(currentCast[2]);
        bottomQueens.push(currentCast[3]);
        if (top3 || top4)
            winAndBtm2();
        else if (thailandFormat) 
            thaiWinBottom2();
        else if (all_stars)
            top2AndBtm();
        else if (lipsync_assassin)
            topAndBtm();
    }
}
function judgingThailand() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("Judging!");
    screen.createBold("Based on tonight's runway...");
    document.body.style.backgroundImage = "url('image/stage.webp')";
    if (topQueens.length > bottomQueens.length) {
        for (let i = 0; i < bottomQueens.length; i++) {
            screen.createImage(topQueens[i].image, "cyan");
            screen.createImage(bottomQueens[i].image, "cyan");
        }
        if (bottomQueens.length < topQueens.length) {
            screen.createImage(topQueens[bottomQueens.length].image, "cyan");
        }
    } else { 
        for (let i = 0; i < topQueens.length; i++) {
            screen.createImage(topQueens[i].image, "cyan");
            screen.createImage(bottomQueens[i].image, "cyan");
        }
        if (bottomQueens.length > topQueens.length) {
            screen.createImage(bottomQueens[topQueens.length].image, "cyan");
        }
    }
    screen.createBold("", "judged");
    let judged = document.getElementById("judged");
    if (topQueens.length > bottomQueens.length) {
        for (let i = 0; i < bottomQueens.length; i++) {
            judged.innerHTML += `${topQueens[i].getName()}, `;
            judged.innerHTML += `${bottomQueens[i].getName()}, `;
        }
        if (bottomQueens.length < topQueens.length) {
            judged.innerHTML += `${topQueens[bottomQueens.length].getName()}, `;
        }
    } else {
        for (let i = 0; i < topQueens.length; i++) {
            judged.innerHTML += `${topQueens[i].getName()}, `;
            judged.innerHTML += `${bottomQueens[i].getName()}, `;
        }
        if (bottomQueens.length > topQueens.length) {
            judged.innerHTML += `${bottomQueens[topQueens.length].getName()}, `;
        }
    }
    judged.innerHTML += "you represent the tops and bottoms of the week.";
    screen.createHorizontalLine();
    screen.createParagraph("", "safeQueens");
    let safeQueens = document.querySelector("p#safeQueens");
    //check if the queen is in the top or in the bottom, and if not put her as safe:
    for (let i = 0; i < currentCast.length; i++)
        if (topQueens.indexOf(currentCast[i]) == -1 && bottomQueens.indexOf(currentCast[i]) == -1) {
            safeQueens.innerHTML += currentCast[i].getName() + ", ";
            if (currentCast[i].maxiT == true) {
                currentCast[i].maxiT = false;
            } else {
                currentCast[i].addToTrackRecord("SAFE");
            }
            currentCast[i].ppe += 3;
        }
    safeQueens.innerHTML += "you are safe.";
    screen.createButton("Proceed", "thaiWinBottom2()");
}
function thaiWinBottom2() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("Bring back my girls!");
    screen.createBold("Ladies, I've made some decisions...");
    document.body.style.backgroundImage = "url('image/stage.webp')";
    if (topQueens[0].performanceScore == topQueens[1].performanceScore && randomNumber(0, 100) < 60) {
        if (topQueens[0].maxiT == true) {
            topQueens[0].editTrackRecord("WIN");
            topQueens[0].maxiT = false;
        } else {
            topQueens[0].addToTrackRecord("WIN ");
        }
        if (topQueens[1].maxiT == true) {
            topQueens[1].editTrackRecord("WIN");
            topQueens[1].maxiT = false;
        } else {
            topQueens[1].addToTrackRecord("WIN ");
        }
        topQueens[0].favoritism += 5;
        topQueens[0].ppe += 5;
        topQueens[1].favoritism += 5;
        topQueens[1].ppe += 5;
        screen.createImage(topQueens[0].image, "darkblue");
        screen.createImage(topQueens[1].image, "darkblue");
        screen.createBold(topQueens[0].getName() + ", " + topQueens[1].getName() + ", condragulations, you're the winners of today's runway!");
        if (conjoinedQueens && conjoinedCheck){
            conjoinedReturn(topQueens[0], topQueens[1]);
            conjoinedCheck = false;
        }
        topQueens.splice(0, 2);
    } else {
        if (topQueens[0].maxiT == true) {
            topQueens[0].editTrackRecord("WIN");
            topQueens[0].maxiT = false;
        } else {
            topQueens[0].addToTrackRecord("WIN ");
        }
        topQueens[0].favoritism += 5;
        topQueens[0].ppe += 5;
        screen.createImage(topQueens[0].image, "royalblue");
        screen.createBold(topQueens[0].getName() + ", condragulations, you're the winner of today's runway!");
        if (conjoinedQueens && conjoinedCheck){
            conjoinedReturn(topQueens[0]);
            conjoinedCheck = false;
        }
        topQueens.splice(0, 1);
    }
    if (topQueens.length > 0) {
        for (let i = 0; i < topQueens.length; i++) {
            screen.createImage(topQueens[i].image, "lightblue");
            if (topQueens[i].maxiT == true) {
                topQueens[i].editTrackRecord("HIGH");
                topQueens[i].maxiT = false;
            } else {
                topQueens[i].addToTrackRecord("HIGH");
            }
            topQueens[i].favoritism += 1;
            topQueens[i].ppe += 4;
        }
        screen.createParagraph("", "highs");
        let highs = document.getElementById("highs");
        for (let i = 0; i < topQueens.length; i++)
            highs.innerHTML += `${topQueens[i].getName()}, `;
            highs.innerHTML += "good job this week, you're safe.";
    }
    screen.createHorizontalLine();
    if (bottomQueens.length >= 3) {
        for (let i = 0; i < bottomQueens.length; i++)
            screen.createImage(bottomQueens[i].image, "tomato");
        screen.createParagraph("", "bottom3");
        let bottom3 = document.getElementById("bottom3");
        for (let i = 0; i < bottomQueens.length; i++)
            bottom3.innerHTML += bottomQueens[i].getName() + ", ";
        bottom3.innerHTML += "you're the bottoms of the week...";
    }
    if (bottomQueens.length == 4) {
        if (bottomQueens[0].maxiT == true) {
            bottomQueens[0].editTrackRecord("LOW");
            bottomQueens[0].maxiT = false;
        } else {
            bottomQueens[0].addToTrackRecord("LOW");
        }
        if (bottomQueens[1].maxiT == true) {
            bottomQueens[1].editTrackRecord("LOW");
            bottomQueens[1].maxiT = false;
        } else {
            bottomQueens[1].addToTrackRecord("LOW");
        }
        screen.createImage(bottomQueens[0].image, "pink");
        screen.createImage(bottomQueens[1].image, "pink");
        screen.createBold(bottomQueens[0].getName() + ", " + bottomQueens[1].getName() + "... you are safe.");
        bottomQueens[0].unfavoritism += 1;
        bottomQueens[0].ppe += 2;
        bottomQueens[1].unfavoritism += 1;
        bottomQueens[1].ppe += 2;
        bottomQueens.splice(0, 2);
    } else if (bottomQueens.length == 3 && bottomQueens[0].performanceScore >= 35 && currentCast.length > 5) {
        thirdqueen = true;
        screen.createBold("... no one is safe.");
    }
    else if (bottomQueens.length == 3) {
        if (bottomQueens[0].maxiT == true) {
            bottomQueens[0].editTrackRecord("LOW");
            bottomQueens[0].maxiT = false;
        } else {
            bottomQueens[0].addToTrackRecord("LOW");
        }
        screen.createImage(bottomQueens[0].image, "pink");
        screen.createBold(bottomQueens[0].getName() + "... you are safe.");
        bottomQueens[0].unfavoritism += 1;
        bottomQueens[0].ppe += 2;
        bottomQueens.splice(0, 1);
    }
    for (let i = 0; i < bottomQueens.length; i++)
        screen.createImage(bottomQueens[i].image, "tomato");
    screen.createBold("", "btm2");
    let btm2 = document.getElementById("btm2");
    for (let i = 0; i < bottomQueens.length; i++) {
        btm2.innerHTML += bottomQueens[i].getName() + ", ";
    }
    btm2.innerHTML += "I'm sorry my dears but you are up for elimination.";
    screen.createButton("Proceed", "lipsyncDesc()");
}
function judgingS14LaLaPaRUZaScreen() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("Judging!");
    screen.createBold("Based on tonight's performances...");
    document.body.style.backgroundImage = "url('image/stage.webp')";
    screen.createHorizontalLine();
    topQueens[0].addToTrackRecord("WIN");
    topQueens[0].favoritism += 5;
    topQueens[0].ppe += 5;
    screen.createImage(topQueens[0].image, "royalblue");
    screen.createBold(topQueens[0].getName() + ", condragulations, you're the winner of today's challenge!");
    screen.createHorizontalLine();
    if (bottomQueens.length >= 7) {
        for (let i = 0; i < bottomQueens.length; i++)
            screen.createImage(bottomQueens[i].image, "tomato");
        screen.createParagraph("", "bottom3");
        let bottom3 = document.getElementById("bottom3");
        for (let i = 0; i < bottomQueens.length; i++)
            bottom3.innerHTML += bottomQueens[i].getName() + ", ";
        bottom3.innerHTML += "I really expected more from you...";
        screen.createBold("I'm sorry my dears, but you are all up for elimination. I need to see you all lipsync...");
    }
    screen.createButton("Proceed", "lipsyncs14()");
    for (let i = 0; i < bottomQueens.length; i++) {
        bottomQueens[i].addToTrackRecord("BTM");
        bottomQueens[i].unfavoritism += 3;
        bottomQueens[i].ppe += 1;
    }
    for (let i = 0; i < eliminatedCast.length; i++) {
        eliminatedCast[i].addToTrackRecord("");
    }
}
function lipsyncs14() {
    s14LaLaPaRUZaCheck = true;
    let screen = new Scene();
    screen.clean();
    screen.createHeader("Lipsync LaLaPaRUza Smackdown!!");
    screen.createBold("If you win your lipsync, you will be safe from elimination... If you lose, you'll continue to face off until two queens remain... In the end, one of them will sashay away.");
    document.body.style.backgroundImage = "url('image/lalaparuzasmackdown.webp')";
    screen.createImage(topQueens[0].image);
    screen.createBold(topQueens[0].getName() + ", you are the exception. You are safe from elimination tonight!!");
    topQueens[0].addToTrackRecord(" SAFE");
    let notpair = false;
    if (bottomQueens.length % 2 != 0) {
        notpair = true;
    }
    screen.createBold("Now, let the Lipsync LaLaPaRUza Smackdown BEGIN!!");
    let lipsyncorder = bottomQueens.slice();
    shuffle(lipsyncorder);
    screen.createHorizontalLine();
    //Round 1
    for (let i = 0; i < bottomQueens.length; i++) {
        let queen1 = lipsyncorder[i];
        let queen2 = lipsyncorder[i+1];
        screen.createImage(queen1.image);
        screen.createImage(queen2.image);
        if (notpair && lipsyncorder[i+3] == undefined) {
            let queen3 = lipsyncorder[lipsyncorder.length - 1];
            screen.createImage(queen3.image);
            screen.createBold(queen1.getName() + ", " + queen2.getName() + " and " + queen3.getName() + " will lipsync...");
            screen.createBold("The time has come for you to lip-sync... for your life! Good luck, and don't fuck it up.");
            lsSong();
            screen.createBold("I've made my decision.");
            var lipSync = [queen1, queen2, queen3];
            for (var i_1 = 0; i_1 < lipSync.length; i_1++) {
                lipSync[i_1].getASLipsync();
            }
            lipSync.sort(function (a, b) { return (b.lipsyncScore - a.lipsyncScore); });
            screen.createImage(lipSync[0].image, "royalblue");
            screen.createBold(lipSync[0].getName() + ", shantay you stay! ");
            screen.createBold(lipSync[1].getName() + ", " + lipSync[2].getName() + ", you are still up for eliminaton!!");
            lipSync[0].addToTrackRecord("SAFE<br><small>Round 1</small>");
            lipsyncorder.splice(lipsyncorder.indexOf(lipSync[0]), 1);
            i = bottomQueens.length;
        } else {
            screen.createBold(queen1.getName() + " and " + queen2.getName() + " will lipsync...");
            screen.createBold("The time has come for you to lip-sync... for your life! Good luck, and don't fuck it up.");
            lsSong();
            screen.createBold("I've made my decision.");
            var lipSync = [queen1, queen2];
            for (var i_1 = 0; i_1 < lipSync.length; i_1++) {
                lipSync[i_1].getASLipsync();
            }
            lipSync.sort(function (a, b) { return (b.lipsyncScore - a.lipsyncScore); });
            screen.createImage(lipSync[0].image, "royalblue");
            screen.createBold(lipSync[0].getName() + ", shantay you stay! ");
            screen.createBold(lipSync[1].getName() + ", you are still up for eliminaton!! ");
            lipSync[0].addToTrackRecord("SAFE<br><small>Round 1</small>");
            lipsyncorder.splice(lipsyncorder.indexOf(lipSync[0]), 1);
            if (lipsyncorder[i+1] == undefined) {
                i = bottomQueens.length;
            }
        }
    }
    //Round 2
    shuffle(lipsyncorder);
    screen.createHorizontalLine();
    screen.createBold("Next round..!");
    for (let i = 0; i < bottomQueens.length; i++) {
        let queen1 = lipsyncorder[i];
        let queen2 = lipsyncorder[i+1];
        screen.createImage(queen1.image);
        screen.createImage(queen2.image);
        screen.createBold(queen1.getName() + " and " + queen2.getName() + " will lipsync...");
        screen.createBold("The time has come for you to lip-sync... for your life! Good luck, and don't fuck it up.");
        lsSong();
        screen.createBold("I've made my decision.");
        var lipSync = [queen1, queen2];
        for (var i_1 = 0; i_1 < lipSync.length; i_1++) {
            lipSync[i_1].getASLipsync();
        }
        lipSync.sort(function (a, b) { return (b.lipsyncScore - a.lipsyncScore); });
        screen.createImage(lipSync[0].image, "royalblue");
        screen.createBold(lipSync[0].getName() + ", shantay you stay! ");
        screen.createBold(lipSync[1].getName() + ", you are still up for eliminaton!! ");
        lipSync[0].addToTrackRecord("SAFE<br><small>Round 2</small>");
        lipsyncorder.splice(lipsyncorder.indexOf(lipSync[0]), 1);
        if (lipsyncorder[i+1] == undefined) {
            i = bottomQueens.length;
        }
    }
    //Round 3
    shuffle(lipsyncorder);
    screen.createHorizontalLine();
    screen.createBold("Final round..!");
    for (let i = 0; i < bottomQueens.length; i++) {
        let queen1 = lipsyncorder[i];
        let queen2 = lipsyncorder[i+1];
        screen.createImage(queen1.image);
        screen.createImage(queen2.image);
        screen.createBold(queen1.getName() + " and " + queen2.getName() + " will lipsync...");
        screen.createBold("The time has come for you to lip-sync... for your life! Good luck, and don't fuck it up.");
        lsSong();
        screen.createBold("I've made my decision.");
        var lipSync = [queen1, queen2];
        for (var i_1 = 0; i_1 < lipSync.length; i_1++) {
            lipSync[i_1].getASLipsync();
        }
        lipSync.sort(function (a, b) { return (b.lipsyncScore - a.lipsyncScore); });
        if (lipSync[0].lipsyncScore >= lipSync[1].lipsyncScore && lipSync[0].lipsyncScore > 7 && lipSync[1].lipsyncScore > 7) {
            screen.createImage(lipSync[0].image, "darkblue");
            screen.createImage(lipSync[1].image, "darkblue");
            screen.createBold("Shantay, you both stay baby!");
            queen1.addToTrackRecord("SAFE<br><small>Round 3</small>");
            queen2.addToTrackRecord("SAFE<br><small>Round 3</small>");
            lipsyncorder.splice(lipsyncorder.indexOf(queen1), 1);
            lipsyncorder.splice(lipsyncorder.indexOf(queen2), 1);
        } else {
            screen.createImage(lipSync[0].image, "royalblue");
            screen.createBold(lipSync[0].getName() + ", shantay you stay! ");
            lipSync[0].addToTrackRecord("SAFE<br><small>Round 3</small>");
            lipsyncorder.splice(lipsyncorder.indexOf(lipSync[0]), 1);
            if (chocolateBarTwist  && !chocolateBarTwistCheck) {
                screen.createBold(lipSync[1].getName() + ", now your fate rests in the hands of the drag gods.");
                screen.createBold("If you have the golden chocolate bar, you will be safe.");
                if (chocolateBarCheck(lipSync[1]) == true) {
                    screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
                    screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
                    screen.createBold(lipSync[1].getName() + "!! Condragtulations, you are safe to slay another day!");
                    lipSync[1].addToTrackRecord("CHOC");
                    chocolateBarTwistCheck = true;
                } else {
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    screen.createBold(lipSync[1].getName() + ", sashay away...");
                    lipSync[1].addToTrackRecord(" ELIM ");
                    lipSync[1].unfavoritism += 2;
                    eliminatedCast.unshift(lipSync[1]);
                    currentCast.splice(currentCast.indexOf(lipSync[1]), 1);
                }
            } else {
                screen.createBold(lipSync[1].getName() + ", sashay away. ");
                lipSync[1].addToTrackRecord(" ELIM ");
                lipSync[1].unfavoritism += 2;
                eliminatedCast.unshift(lipSync[1]);
                currentCast.splice(currentCast.indexOf(lipSync[1]), 1);
            }
        }
        if (lipsyncorder[i+1] == undefined) {
            i = bottomQueens.length;
        }
    }
    episodeChallenges.push("LaLaPaRUZa Smackdown");
    episodeCount++;
    if (CheckForReturning() == true)
        screen.createButton("Proceed", "returningQueenScreen()");
    else
        screen.createButton("Proceed", "newEpisode()");
}
let lateQueen = '';
function s9judgingScreen() { 
    let screen = new Scene();
    screen.clean();
    screen.createHeader("Judging!");
    screen.createParagraph("In this premiere, for the first time in Drag Race herstory.. nobody is going home tonight!");
    screen.createBold("Now, based on tonight's performances...");
    document.body.style.backgroundImage = "url('image/stage.webp')";
    screen.createHorizontalLine();
    
    for (let i = 0; i < topQueens.length; i++) {
        screen.createImage(topQueens[i].image, "cyan");
    }
    screen.createBold("", "judged");
    let judged = document.getElementById("judged");
    for (let i = 0; i < topQueens.length; i++) {
        judged.innerHTML += `${topQueens[i].getName()}, `;
    }
    judged.innerHTML += "you represent the tops of the week.";
    screen.createHorizontalLine();
    screen.createBold("", "safeQueens");
    let safeQueens = document.querySelector("b#safeQueens");
    for (let i = 2; i < currentCast.length; i++) {
        if (topQueens.indexOf(currentCast[i]) == -1) {
            safeQueens.innerHTML += currentCast[i].getName() + ", ";
            currentCast[i].addToTrackRecord("SAFE");
            currentCast[i].ppe += 3;
        }
    }
    safeQueens.innerHTML += "you are safe..";
    screen.createHorizontalLine();
    if (riggory) {
        for (let i = 0; i < topQueens.length; i++) {
            topQueens[i].performanceScore -= (topQueens[i].runwayScore);
        }
    } else {
        for (let i = 0; i < topQueens.length; i++)
            topQueens[i].performanceScore -= (topQueens[i].runwayScore - topQueens[i].favoritism);
    }
    topQueens.sort((a, b) => (a.performanceScore - b.performanceScore));
    if (topQueens[0].performanceScore == topQueens[1].performanceScore && randomNumber(0, 100) < 60) {
        topQueens[0].addToTrackRecord(" WIN");
        topQueens[0].favoritism += 5;
        topQueens[0].ppe += 5;
        topQueens[1].addToTrackRecord(" WIN");
        topQueens[1].favoritism += 5;
        topQueens[1].ppe += 5;
        screen.createImage(topQueens[0].image, "darkblue");
        screen.createImage(topQueens[1].image, "darkblue");
        screen.createBold(topQueens[0].getName() + ", " + topQueens[1].getName() + ", condragulations, you're the winners of today's challenge!");
        topQueens.splice(0, 2);
    }
    else {
        topQueens[0].addToTrackRecord("WIN");
        topQueens[0].favoritism += 5;
        topQueens[0].ppe += 5;
        screen.createImage(topQueens[0].image, "royalblue");
        screen.createBold(topQueens[0].getName() + ", condragulations, you're the winner of today's challenge!");
        topQueens.splice(0, 1);
    }
    if (topQueens.length > 0) {
        for (let i = 0; i < topQueens.length; i++) {
            screen.createImage(topQueens[i].image, "lightblue");
            topQueens[i].addToTrackRecord("HIGH");
            topQueens[i].favoritism += 1;
            topQueens[i].ppe += 4;
        }
        screen.createParagraph("", "highs");
        let highs = document.getElementById("highs");
        for (let i = 0; i < topQueens.length; i++)
            highs.innerHTML += `${topQueens[i].getName()}, `;
        highs.innerHTML += "good job this week, you're safe.";
    }
    screen.createHorizontalLine();
    screen.createBigText("Oh, wait a minute, wait a minute! I have one last announcement!");
    screen.createBold("The real competition is just about to begin. I'm introducing a new queen into the race!");
    screen.createBold('Please welcome to the race... ' + lateQueen.getName() + "!!");
    screen.createImage(lateQueen.image, "royalblue");
    currentCast.push(lateQueen);
    if (CheckForReturning() == true)
        screen.createButton("Proceed", "returningQueenScreen()");
    else
        screen.createButton("Proceed", "newEpisode()");

}
function judging6WayScreen() {
    bottom6WayLipsyncCheck = true;
    let judgingScreen = new Scene();
    judgingScreen.clean();
    judgingScreen.createHeader("Judging!");
    judgingScreen.createBold("Based on tonight's performances...");
    document.body.style.backgroundImage = "url('image/stage.webp')";
    let o = 0;
    for (let i = 0; i < topQueens.length; i++) {
        judgingScreen.createImage(topQueens[i].image, "cyan");
        judgingScreen.createImage(bottomQueens[o].image, "cyan");
        judgingScreen.createImage(bottomQueens[o+1].image, "cyan");
        o = o + 2;
    }
    o = 0;
    judgingScreen.createBold("", "judged");
    let judged = document.getElementById("judged");
    for (let i = 0; i < topQueens.length; i++) {
        judged.innerHTML += `${topQueens[i].getName()}, `;
        judged.innerHTML += `${bottomQueens[o].getName()}, `;
        judged.innerHTML += `${bottomQueens[o+1].getName()}, `;
        o = o + 2;
    }
    judged.innerHTML += "you represent the tops and bottoms of the week.";
    judgingScreen.createHorizontalLine();
    judgingScreen.createParagraph("", "safeQueens");
    let safeQueens = document.querySelector("p#safeQueens");
    for (let i = 0; i < currentCast.length; i++) {
        if (topQueens.indexOf(currentCast[i]) == -1 && bottomQueens.indexOf(currentCast[i]) == -1) {
            safeQueens.innerHTML += currentCast[i].getName() + ", ";
            currentCast[i].addToTrackRecord("SAFE");
            currentCast[i].ppe += 3;
        }
    }
    safeQueens.innerHTML += "you are safe.";
    judgingScreen.createButton("Proceed", "winAndBtm6()");
}
function winAndBtm6() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("Bring back my girls!");
    screen.createBold("Ladies, I've made some decisions...");
    document.body.style.backgroundImage = "url('image/stage.webp')";
    //sort the top queens now taking runway and favoritism in consideration:
    if (riggory) {
        for (let i = 0; i < topQueens.length; i++)
            topQueens[i].performanceScore -= (topQueens[i].runwayScore);
    } else {
        for (let i = 0; i < topQueens.length; i++)
            topQueens[i].performanceScore -= (topQueens[i].runwayScore - topQueens[i].favoritism);
    }
    topQueens.sort((a, b) => (a.performanceScore - b.performanceScore));
    if (isTeamChallenge) {
        topQueens[0].addToTrackRecord("WIN");
        topQueens[0].favoritism += 5;
        topQueens[0].ppe += 5;
        screen.createImage(topQueens[0].image, "royalblue");
        screen.createBold(topQueens[0].getName() + ", condragulations, you're the winner of today's challenge!");
        topQueens.splice(0, 1);
    }
    //double win:
    else if (topQueens[0].performanceScore == topQueens[1].performanceScore && randomNumber(0, 100) < 60) {
        topQueens[0].addToTrackRecord(" WIN");
        topQueens[0].favoritism += 5;
        topQueens[0].ppe += 5;
        topQueens[1].addToTrackRecord(" WIN");
        topQueens[1].favoritism += 5;
        topQueens[1].ppe += 5;
        screen.createImage(topQueens[0].image, "darkblue");
        screen.createImage(topQueens[1].image, "darkblue");
        screen.createBold(topQueens[0].getName() + ", " + topQueens[1].getName() + ", condragulations, you're the winners of today's challenge!");
        topQueens.splice(0, 2);
    }
    else {
        topQueens[0].addToTrackRecord("WIN");
        topQueens[0].favoritism += 5;
        topQueens[0].ppe += 5;
        screen.createImage(topQueens[0].image, "royalblue");
        screen.createBold(topQueens[0].getName() + ", condragulations, you're the winner of today's challenge!");
        topQueens.splice(0, 1);
    }
    if (topQueens.length > 0) {
        for (let i = 0; i < topQueens.length; i++) {
            screen.createImage(topQueens[i].image, "lightblue");
            topQueens[i].addToTrackRecord("HIGH");
            topQueens[i].favoritism += 1;
            topQueens[i].ppe += 4;
        }
        screen.createParagraph("", "highs");
        let highs = document.getElementById("highs");
        for (let i = 0; i < topQueens.length; i++)
            highs.innerHTML += `${topQueens[i].getName()}, `;
            highs.innerHTML += "good job this week, you're safe.";
    }
    screen.createHorizontalLine();
    if (bottomQueens.length >= 3) {
        for (let i = 0; i < bottomQueens.length; i++)
            screen.createImage(bottomQueens[i].image, "tomato");
        screen.createParagraph("", "bottom3");
        let bottom3 = document.getElementById("bottom3");
        for (let i = 0; i < bottomQueens.length; i++)
            bottom3.innerHTML += bottomQueens[i].getName() + ", ";
        bottom3.innerHTML += "Y'all need to step your pussy up...";
    }
    screen.createBold("For the first time in Drag Race Herstory, all of you will be lipsyncing for your life.");
    screen.createButton("Proceed", "bottom6()");
}
function bottom6() {
    for (let i = 0; i < bottomQueens.length; i++) {
        bottomQueens[i].getLipsync();
    }
    bottomQueens.sort((a, b) => (b.lipsyncScore - a.lipsyncScore));
    let screen = new Scene();
    screen.clean();
    screen.createHeader("It's time...");
    screen.createBold("For you to lip-sync... for your lives! Good luck, and don't fuck it up.");
    lsSong();
    screen.createHorizontalLine();
    screen.createBold("I've made my decision.");
    let score1 = bottomQueens[4].lipsyncScore - bottomQueens[4].favoritism + bottomQueens[4].unfavoritism;
    let score2 = bottomQueens[5].lipsyncScore - bottomQueens[5].favoritism + bottomQueens[5].unfavoritism;
    for (let i = 0; i <bottomQueens.length - 2; i++){
        screen.createImage(bottomQueens[i].image, "tomato");
        screen.createBold(bottomQueens[i].getName() + ", shantay you stay.");
        bottomQueens[i].addToTrackRecord("BTM6");
        bottomQueens[i].unfavoritism += 3;
        bottomQueens[i].ppe += 1;
    }
    if (score1 < 4 && score2 < 4 && randomNumber(0, 100) <= 10 && !doubleSashay && currentCast.length > 5 && noDouble == false) {
        screen.createImage(bottomQueens[4].image, "darkred");
        screen.createImage(bottomQueens[5].image, "darkred");
        if (chocolateBarTwist  && !chocolateBarTwistCheck) {
            screen.createBold("Neither one of you survived that lipsync..." + bottomQueens[4].getName() + ", " + bottomQueens[5].getName() + ", now your fates rests in the hands of the drag gods.");
            screen.createBold("If one of you have the golden chocolate bar, that queen will be safe.");
            if (chocolateBarCheck(bottomQueens[4], bottomQueens[5]) == 1) {
                screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                screen.createBold("It's chocolate.");
                screen.createBold(bottomQueens[5].getName() + ", sashay away...");
                bottomQueens[5].addToTrackRecord("ELIM");
                bottomQueens[5].unfavoritism += 5;
                eliminatedCast.unshift(bottomQueens[5]);
                currentCast.splice(currentCast.indexOf(bottomQueens[5]), 1);
                screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
                screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
                screen.createBold(bottomQueens[4].getName() + "!! Condragtulations, you are safe to slay another day!");
                bottomQueens[4].addToTrackRecord("CHOC");
                bottomQueens[4].unfavoritism += 3;
                bottomQueens[4].ppe += 1;
                chocolateBarTwistCheck = true;
                
            } else if (chocolateBarCheck(bottomQueens[4], bottomQueens[5]) == 2) {
                screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                screen.createBold("It's chocolate.");
                screen.createBold(bottomQueens[4].getName() + ", sashay away...");
                bottomQueens[4].addToTrackRecord("ELIM");
                bottomQueens[4].unfavoritism += 5;
                eliminatedCast.unshift(bottomQueens[4]);
                currentCast.splice(currentCast.indexOf(bottomQueens[4]), 1);
                screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
                screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
                screen.createBold(bottomQueens[5].getName() + "!! Condragtulations, you are safe to slay another day!");
                bottomQueens[5].addToTrackRecord("CHOC");
                bottomQueens[5].unfavoritism += 3;
                bottomQueens[5].ppe += 1;
                chocolateBarTwistCheck = true;
                
            } else {
                screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                screen.createBold("It's chocolate.");
                screen.createBold(bottomQueens[4].getName() + ", sashay away...");
                bottomQueens[4].addToTrackRecord(" ELIM ");
                bottomQueens[4].unfavoritism += 5;
                eliminatedCast.unshift(bottomQueens[4]);
                currentCast.splice(currentCast.indexOf(bottomQueens[4]), 1);
                screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                screen.createBold("It's chocolate.");
                screen.createBold(bottomQueens[5].getName() + ", sashay away...");
                bottomQueens[5].addToTrackRecord(" ELIM ");
                bottomQueens[5].unfavoritism += 5;
                eliminatedCast.unshift(bottomQueens[5]);
                currentCast.splice(currentCast.indexOf(bottomQueens[5]), 1);
                
            }
        } else {
            screen.createBold("I'm sorry but none of you showed the fire it takes to stay. You must both... sashay away.");
            doubleSashay = true;
            bottomQueens[4].addToTrackRecord(" ELIM ");
            bottomQueens[4].unfavoritism += 5;
            eliminatedCast.unshift(bottomQueens[4]);
            currentCast.splice(currentCast.indexOf(bottomQueens[4]), 1);
            bottomQueens[5].addToTrackRecord(" ELIM ");
            bottomQueens[5].unfavoritism += 5;
            eliminatedCast.unshift(bottomQueens[5]);
            currentCast.splice(currentCast.indexOf(bottomQueens[5]), 1);
        }
    }else{
        screen.createImage(bottomQueens[4].image, "tomato");
        screen.createBold(bottomQueens[4].getName() + ", shantay you stay.");
        bottomQueens[4].addToTrackRecord("BTM6");
        bottomQueens[4].unfavoritism += 3;
        bottomQueens[4].ppe += 1;
        screen.createImage(bottomQueens[5].image, "red");
        if (chocolateBarTwist  && !chocolateBarTwistCheck) {
            screen.createBold(bottomQueens[5].getName() + ", now your fate rests in the hands of the drag gods.");
            screen.createBold("If you have the golden chocolate bar, you will be safe.");
            if (chocolateBarCheck(bottomQueens[5]) == true) {
                screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
                screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
                screen.createBold(bottomQueens[5].getName() + "!! Condragtulations, you are safe to slay another day!");
                bottomQueens[5].addToTrackRecord("CHOC");
                bottomQueens[5].unfavoritism += 3;
                bottomQueens[5].ppe += 1;
                chocolateBarTwistCheck = true;
                
            } else {
                screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                screen.createBold("It's chocolate.");
                screen.createBold(bottomQueens[5].getName() + ", sashay away...");
                bottomQueens[5].addToTrackRecord("ELIM");
                bottomQueens[5].unfavoritism += 5;
                eliminatedCast.unshift(bottomQueens[5]);
                currentCast.splice(currentCast.indexOf(bottomQueens[5]), 1);
                
            }
        } else {
            screen.createBold(bottomQueens[5].getName() + ", sashay away...");
            bottomQueens[5].addToTrackRecord("ELIM");
            bottomQueens[5].unfavoritism += 5;
            eliminatedCast.unshift(bottomQueens[5]);
            currentCast.splice(currentCast.indexOf(bottomQueens[5]), 1);
        }  
    }
    if ((s6Premiere || s12Premiere || porkchopPremiere || s14Premiere) == true && premiereCounter < 3)
        screen.createButton("Proceed", "doublePremiere()");
    else if (CheckForReturning() == true)
        screen.createButton("Proceed", "returningQueenScreen()");
    else
        screen.createButton("Proceed", "newEpisode()");
}
function judgingSlayersScreen() {
    slayersCheck = true;
    let screen = new Scene();
    screen.clean();
    screen.createHeader("Judging!");
    screen.createBold("Based on tonight's performances...");
    document.body.style.backgroundImage = "url('image/stage.webp')";
    for (let i = 0; i < topQueens.length; i++) {
        screen.createImage(topQueens[i].image, "black");
    }
    screen.createHorizontalLine();
    if (currentCast.length > 8){
        screen.createBold("", "safeQueens");
        let safeQueens = document.querySelector("b#safeQueens");
        for (let i = 0; i < 3; i++) {
            safeQueens.innerHTML += topQueens[topQueens.length - (i + 1)].getName() + ", ";
            topQueens[topQueens.length - (i + 1)].addToTrackRecord("SAFE");
            topQueens[topQueens.length - (i + 1)].ppe += 3;
        }
        topQueens.splice(topQueens.length - 3, 3);
        safeQueens.innerHTML += "you are safe..";
        screen.createHorizontalLine();
    }
    for (let i = 0; i < topQueens.length; i++) {
        screen.createImage(topQueens[i].image, "cyan");
    }
    screen.createBold("", "judged");
    let judged = document.getElementById("judged");
    for (let i = 0; i < topQueens.length; i++) {
        judged.innerHTML += `${topQueens[i].getName()}, `;
    }
    judged.innerHTML += "you represent the tops of the week.";
    screen.createParagraph("Nobody is going home tonight!");
    screen.createHorizontalLine();

    for (let i = 0; i < topQueens.length; i++)
        topQueens[i].performanceScore -= (topQueens[i].runwayScore);
    topQueens.sort((a, b) => (a.performanceScore - b.performanceScore));
    top2.push(topQueens[0]);
    top2.push(topQueens[1]);
    topQueens.splice(0, 2);
    screen.createImage(top2[0].image, "cyan");
    screen.createImage(top2[1].image, "cyan");
    screen.createBold(top2[0].getName() + ", " + top2[1].getName() + ", condragulations, you're the Top 2 of the week!");
    if (topQueens.length > 0) {
        for (let i = 0; i < topQueens.length; i++) {
            screen.createImage(topQueens[i].image, "lightblue");
            topQueens[i].addToTrackRecord("HIGH");
            topQueens[i].favoritism += 1;
            topQueens[i].ppe += 4;
        }
    }
    screen.createParagraph("", "highs");
    let highs = document.getElementById("highs");
    for (let i = 0; i < topQueens.length; i++) {
        highs.innerHTML += `${topQueens[i].getName()}, `;
    }
    highs.innerHTML += "good job this week, you're all safe.";
    screen.createHorizontalLine();
    screen.createBold("The Top 2 will now lip-sync... for the win!");
    lsSong();
    for (let i = 0; i < top2.length; i++) {
        top2[i].getASLipsync();
    }
    top2.sort((a, b) => (b.lipsyncScore - a.lipsyncScore));
    screen.createImage(top2[0].image, "royalblue");
    screen.createBold(`${top2[0].getName()}, you're a winner baby!`);
    top2[0].addToTrackRecord("WIN");
    top2[0].favoritism += 5;
    top2[0].ppe += 5;
    top2[1].addToTrackRecord("TOP2");
    top2[1].favoritism += 2;
    top2[1].ppe += 4.5;
    if (CheckForReturning() == true)
        screen.createButton("Proceed", "returningQueenScreen()");
    else
        screen.createButton("Proceed", "newEpisode()");
}
function judgingFloppersScreen() {
    floppersCheck = true;
    let screen = new Scene();
    screen.clean();
    screen.createHeader("Judging!");
    screen.createBold("Brace yourselves, cause Drag Race is about to get real..");
    screen.createBold("Based on tonight's performances... This week there will be no winners.");
    document.body.style.backgroundImage = "url('image/stage.webp')";
    for (let i = 0; i < currentCast.length; i++) {
        screen.createImage(currentCast[i].image, "black");
    }
    screen.createBold("I'm really, really disappointed. No one is safe and two of you will lipsync for your life..", "judged");
    screen.createHorizontalLine();
    screen.createBold("", "safeQueens");
    let safeQueens = document.querySelector("b#safeQueens");
    for (let i = 0; i < currentCast.length; i++) {
        if (bottomQueens.indexOf(currentCast[i]) == -1) {
            safeQueens.innerHTML += currentCast[i].getName() + ", ";
            currentCast[i].addToTrackRecord("SAFE");
            currentCast[i].ppe += 3;
        }
    }
    safeQueens.innerHTML += "you are all safe. And as you step to the back of the stage, keep one thing on mind. STEP YOUR PUSSIES UP.";
    screen.createHorizontalLine();
    for (let i = 0; i < bottomQueens.length; i++)
        bottomQueens[i].performanceScore -= (bottomQueens[i].runwayScore);
    bottomQueens.sort((a, b) => (a.performanceScore - b.performanceScore));
    bottomQueens[0].addToTrackRecord("LOW");
    screen.createImage(bottomQueens[0].image, "pink");
    screen.createBold(bottomQueens[0].getName() + "... you are safe.");
    bottomQueens[0].unfavoritism += 1;
    bottomQueens[0].ppe += 2;
    bottomQueens.splice(0, 1);
    for (let i = 0; i < bottomQueens.length; i++)
        screen.createImage(bottomQueens[i].image, "tomato");
    screen.createBold("", "btm2");
    let btm2 = document.getElementById("btm2");
    for (let i = 0; i < bottomQueens.length; i++) {
        btm2.innerHTML += bottomQueens[i].getName() + ", ";
    }
    btm2.innerHTML += "I'm sorry my dears but you are up for elimination.";
    screen.createButton("Proceed", "lipsyncDesc()");
}
function winnersJudging() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("Judging!");
    screen.createBold("Based on tonight's performances...");
    document.body.style.backgroundImage = "url('image/stage.webp')";
    for (let i = 0; i < topQueens.length; i++) {
        screen.createImage(topQueens[i].image, "cyan");
    }
    screen.createBold("", "judged");
    let judged = document.getElementById("judged");
    for (let i = 0; i < topQueens.length; i++) {
        judged.innerHTML += `${topQueens[i].getName()}, `;
    }
    judged.innerHTML += "you represent the tops of the week.";
    screen.createHorizontalLine();
    for (let i = 0; i < currentCast.length; i++) {
        if (topQueens.indexOf(currentCast[i]) == -1) {
            currentCast[i].addToTrackRecord("SAFE");
            currentCast[i].ppe += 3;
        }
    }
    screen.createButton("Proceed", "top2AndBlocked()");
}
let homeTrigger = 0;
function judgingScreen() {
    let judgingScreen = new Scene();
    judgingScreen.clean();
    judgingScreen.createHeader("Judging!");
    judgingScreen.createBold("Based on tonight's performances...");
    document.body.style.backgroundImage = "url('image/stage.webp')";
    if (team == true) {
        judgingScreen.createImage(topQueens[0].QueenA.image, "cyan");
        judgingScreen.createImage(topQueens[1].QueenA.image, "cyan");
        judgingScreen.createImage(topQueens[0].QueenB.image, "cyan");
        judgingScreen.createImage(topQueens[1].QueenB.image, "cyan");
        judgingScreen.createImage(bottomQueens[0].QueenB.image, "cyan");
        judgingScreen.createImage(bottomQueens[1].QueenB.image, "cyan");
        judgingScreen.createImage(bottomQueens[2].QueenB.image, "cyan");
        judgingScreen.createImage(bottomQueens[0].QueenA.image, "cyan");
        judgingScreen.createImage(bottomQueens[1].QueenA.image, "cyan");
        judgingScreen.createImage(bottomQueens[2].QueenA.image, "cyan");
        judgingScreen.createBold(`${topQueens[0].getName()}, ${topQueens[1].getName()}, ${bottomQueens[0].getName()}, ${bottomQueens[1].getName()}, ${bottomQueens[2].getName()}, you represent the tops and bottoms of the week.`);
    }
    else {
        if (topQueens.length > bottomQueens.length) {
            for (let i = 0; i < bottomQueens.length; i++) {
                judgingScreen.createImage(topQueens[i].image, "cyan");
                judgingScreen.createImage(bottomQueens[i].image, "cyan");
            }
            if (bottomQueens.length < topQueens.length) {
                judgingScreen.createImage(topQueens[bottomQueens.length].image, "cyan");
            }
        } else { 
            for (let i = 0; i < topQueens.length; i++) {
                judgingScreen.createImage(topQueens[i].image, "cyan");
                judgingScreen.createImage(bottomQueens[i].image, "cyan");
            }
            if (bottomQueens.length > topQueens.length) {
                judgingScreen.createImage(bottomQueens[topQueens.length].image, "cyan");
            }
        }
        judgingScreen.createBold("", "judged");
        let judged = document.getElementById("judged");
        if (topQueens.length > bottomQueens.length) {
            for (let i = 0; i < bottomQueens.length; i++) {
                judged.innerHTML += `${topQueens[i].getName()}, `;
                judged.innerHTML += `${bottomQueens[i].getName()}, `;
            }
            if (bottomQueens.length < topQueens.length) {
                judged.innerHTML += `${topQueens[bottomQueens.length].getName()}, `;
            }
        } else {
            for (let i = 0; i < topQueens.length; i++) {
                judged.innerHTML += `${topQueens[i].getName()}, `;
                judged.innerHTML += `${bottomQueens[i].getName()}, `;
            }
            if (bottomQueens.length > topQueens.length) {
                judged.innerHTML += `${bottomQueens[topQueens.length].getName()}, `;
            }
        }
        judged.innerHTML += "you represent the tops and bottoms of the week.";
    }
    judgingScreen.createHorizontalLine();
    judgingScreen.createParagraph("", "safeQueens");
    let safeQueens = document.querySelector("p#safeQueens");
    //check if the queen is in the top or in the bottom, and if not put her as safe:
    for (let i = 0; i < currentCast.length; i++)
        if (topQueens.indexOf(currentCast[i]) == -1 && bottomQueens.indexOf(currentCast[i]) == -1) {
            safeQueens.innerHTML += currentCast[i].getName() + ", ";
            if (team == false)
                currentCast[i].addToTrackRecord("SAFE");
                currentCast[i].ppe += 3;
            if (team == true) {
                currentCast[i].addToTrackRecord("SAFE");
                currentCast[i].QueenA.addToTrackRecord("SAFE");
                currentCast[i].QueenA.ppe += 3;
                currentCast[i].QueenB.addToTrackRecord("SAFE");
                currentCast[i].QueenB.ppe += 3;
            }
        }
    if (isTeamChallenge && currentCast.length <= 8) {
        safeQueens.innerHTML += "";
    } else {
        safeQueens.innerHTML += "you are safe.";
    }
    if (currentCast.length <= 10 && episodeCount > 3&& (top3 || top4 || thailandFormat) || currentCast.length <= 10 && (all_stars || lipsync_assassin)) {
        if (currentCast.length <= 10 && randomNumber(0, 10) == 7 && homeTrigger < 2 && !team || homeTrigger == 0) {
            homeTrigger++;
            whoShouldGoHomeTonight();
        }
    }
    if (uk3Premiere && episodeCount == 1)
        judgingScreen.createButton("Proceed", "uk3PremiereJudging()");
    else if (top3 || top4)
        judgingScreen.createButton("Proceed", "winAndBtm2()");
    else if (all_stars)
        judgingScreen.createButton("Proceed", "top2AndBtm()");
    else if (lipsync_assassin)
        judgingScreen.createButton("Proceed", "topAndBtm()");
    else if (team)
        judgingScreen.createButton("Proceed", "teamWinAndBtm2()");
}
function whoShouldGoHomeTonight() {
    let screen = new Scene();
    screen.createHorizontalLine();
    screen.createBold("All right. I wanna hear from you. Who should go home tonight? And why?", "txt");
    let txt = document.getElementById("txt");
    txt.setAttribute("style", "font-size: 20px");
    let whoAll = [...topQueens, ...bottomQueens];
    shuffle(whoAll);
    if (team) {

    } else {
        for (let i = 0; i < whoAll.length; i++) {
            if (bottomQueens.length == 4) {whoAll[i].lipstick = betterSister4(whoAll[i], bottomQueens[0], bottomQueens[1], bottomQueens[2], bottomQueens[3]);}
            if (bottomQueens.length == 3) {whoAll[i].lipstick = betterSister3(whoAll[i], bottomQueens[0], bottomQueens[1], bottomQueens[2]);}
            if (bottomQueens.length == 2) {whoAll[i].lipstick = betterSister2(whoAll[i], bottomQueens[0], bottomQueens[1]);}
            if (whoAll[i].lipstick == false) {
                if (randomNumber(0, 100) <= 45 && currentCast.length <= totalCastSize - 2) {
                    whoAll[i].lipstick = bottomQueens.sort((a, b) => b.unfavoritism - a.unfavoritism)[0];
                } else {
                    whoAll[i].lipstick = bottomQueens[randomNumber(0, bottomQueens.length - 1)];
                }
            }
            screen.createImage(whoAll[i].image, "black");
            screen.createImage(whoAll[i].lipstick.image, "red");
            screen.createBold(whoAll[i].getName() + " said " + whoAll[i].lipstick.getName() + " because ", whoAll[i].getName(), "whoHomeVP");
            let reason = document.getElementById(whoAll[i].getName());
            if (isEnemy(whoAll[i], whoAll[i].lipstick)) {
                reason.innerHTML += whoWhyRelation[randomNumber(0, whoWhyRelation.length - 1)] + ".";
            } else if (randomNumber(0, 100) >= 95) {
                reason.innerHTML += whoWhyRelation[randomNumber(0, whoWhyRelation.length - 1)] + ".";
            } else {
                reason.innerHTML += whoWhyCompetition[randomNumber(0, whoWhyCompetition.length - 1)] + ".";
            }
            if (whoAll[i].lipstick.getName() != whoAll[i].getName()) {
                if (randomNumber(0, 100) >= 80) {
                    modRelation(2, 4, whoAll[i], whoAll[i].lipstick);
                    screen.createParagraph("<i>" + whoAll[i].lipstick.getName() + " felt very upset. </i>");
                } else {
                    modRelation(2, 3, whoAll[i], whoAll[i].lipstick);
                    screen.createParagraph("<i>" + whoAll[i].lipstick.getName() + " took it great, they weren't too mad.</i>");
                }
            }
        }
    }
}
let thirdqueen = false;
function winAndBtm2() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("Bring back my girls!");
    screen.createBold("Ladies, I've made some decisions...");
    document.body.style.backgroundImage = "url('image/stage.webp')";
    //sort the top queens now taking runway and favoritism in consideration:
    if (riggory) {
        for (let i = 0; i < topQueens.length; i++) {
            topQueens[i].performanceScore -= (topQueens[i].runwayScore);
        }
    } else {
        for (let i = 0; i < topQueens.length; i++)
            topQueens[i].performanceScore -= (topQueens[i].runwayScore - topQueens[i].favoritism);
    }
    topQueens.sort((a, b) => (a.performanceScore - b.performanceScore));
    if (isTeamChallenge) {
        if (episodeChallenges[episodeChallenges.length - 1] == "Girl Group" && randomNumber(0, 100) >= 60) {
            let names = "";
            for (let i = 0; i < topQueens.length; i++) {
                topQueens[i].addToTrackRecord(" WIN");
                topQueens[i].favoritism += 5;
                topQueens[i].ppe += 5;
                screen.createImage(topQueens[i].image, "royalblue");
                if (i == topQueens.length - 1) {
                    names += topQueens[i].getName() + ".";
                } else {
                    names += topQueens[i].getName() + ", ";
                }
            }
            screen.createBold(names +" Condragulations, you're the winning team of today's challenge!");
            topQueens.splice(0);
            isTeamChallenge = false;
        } else if (topQueens[0].performanceScore == topQueens[1].performanceScore && randomNumber(0, 100) < 60) {
            topQueens[0].addToTrackRecord(" WIN");
            topQueens[0].favoritism += 5;
            topQueens[0].ppe += 5;
            topQueens[1].addToTrackRecord(" WIN");
            topQueens[1].favoritism += 5;
            topQueens[1].ppe += 5;
            screen.createImage(topQueens[0].image, "darkblue");
            screen.createImage(topQueens[1].image, "darkblue");
            screen.createBold(topQueens[0].getName() + ", " + topQueens[1].getName() + ", condragulations, you're the winners of today's challenge!");
            topQueens.splice(0, 2);
        }else {
            topQueens[0].addToTrackRecord("WIN");
            topQueens[0].favoritism += 5;
            topQueens[0].ppe += 5;
            screen.createImage(topQueens[0].image, "royalblue");
            screen.createBold(topQueens[0].getName() + ", condragulations, you're the winner of today's challenge!");
            topQueens.splice(0, 1);
        }
    }//double win:
    else if (topQueens[0].performanceScore == topQueens[1].performanceScore && randomNumber(0, 100) < 60) {
        topQueens[0].addToTrackRecord(" WIN");
        topQueens[0].favoritism += 5;
        topQueens[0].ppe += 5;
        topQueens[1].addToTrackRecord(" WIN");
        topQueens[1].favoritism += 5;
        topQueens[1].ppe += 5;
        screen.createImage(topQueens[0].image, "darkblue");
        screen.createImage(topQueens[1].image, "darkblue");
        screen.createBold(topQueens[0].getName() + ", " + topQueens[1].getName() + ", condragulations, you're the winners of today's challenge!");
        if (conjoinedQueens && conjoinedCheck){
            conjoinedReturn(topQueens[0], topQueens[1]);
            conjoinedCheck = false;
        }
        topQueens.splice(0, 2);
    }
    else {
        topQueens[0].addToTrackRecord("WIN");
        topQueens[0].favoritism += 5;
        topQueens[0].ppe += 5;
        screen.createImage(topQueens[0].image, "royalblue");
        screen.createBold(topQueens[0].getName() + ", condragulations, you're the winner of today's challenge!");
        if (conjoinedQueens && conjoinedCheck){
            conjoinedReturn(topQueens[0]);
            conjoinedCheck = false;
        }
        topQueens.splice(0, 1);
    }
    if (topQueens.length > 0) {
        if (isTeamChallenge){
            isTeamChallenge = false;
            for (let i = 0; i < topQueens.length; i++) {
                screen.createImage(topQueens[i].image, "aquamarine");
                topQueens[i].addToTrackRecord("HIGH TEAM");
                topQueens[i].favoritism += 1;
                topQueens[i].ppe += 4;
            }
        }else{
            for (let i = 0; i < topQueens.length; i++) {
                screen.createImage(topQueens[i].image, "lightblue");
                topQueens[i].addToTrackRecord("HIGH");
                topQueens[i].favoritism += 1;
                topQueens[i].ppe += 4;
            }
        }
        screen.createParagraph("", "highs");
        let highs = document.getElementById("highs");
        for (let i = 0; i < topQueens.length; i++)
            highs.innerHTML += `${topQueens[i].getName()}, `;
            highs.innerHTML += "good job this week, you're safe.";
    }
    screen.createHorizontalLine();
    if (bottomQueens.length >= 3) {
        for (let i = 0; i < bottomQueens.length; i++)
            screen.createImage(bottomQueens[i].image, "tomato");
        screen.createParagraph("", "bottom3");
        let bottom3 = document.getElementById("bottom3");
        for (let i = 0; i < bottomQueens.length; i++)
            bottom3.innerHTML += bottomQueens[i].getName() + ", ";
        bottom3.innerHTML += "you're the bottoms of the week...";
    }
    //do the same, but for the bottom queens:
    for (let i = 0; i < bottomQueens.length; i++)
        bottomQueens[i].performanceScore -= (bottomQueens[i].runwayScore);
    bottomQueens.sort((a, b) => (a.performanceScore - b.performanceScore));
    if (bottomQueens.length == 5) {
        bottomQueens[0].addToTrackRecord("LOW");
        bottomQueens[1].addToTrackRecord("LOW");
        bottomQueens[2].addToTrackRecord("LOW");
        screen.createImage(bottomQueens[0].image, "pink");
        screen.createImage(bottomQueens[1].image, "pink");
        screen.createImage(bottomQueens[2].image, "pink");
        screen.createBold(bottomQueens[0].getName() + ", " + bottomQueens[1].getName() + ", " + bottomQueens[2].getName() + "... you are safe.");
        bottomQueens[0].unfavoritism += 1;
        bottomQueens[0].ppe += 2;
        bottomQueens[1].unfavoritism += 1;
        bottomQueens[1].ppe += 2;
        bottomQueens[2].unfavoritism += 1;
        bottomQueens[2].ppe += 2;
        bottomQueens.splice(0, 3);
    }
    else if (bottomQueens.length == 4) {
        bottomQueens[0].addToTrackRecord("LOW");
        bottomQueens[1].addToTrackRecord("LOW");
        screen.createImage(bottomQueens[0].image, "pink");
        screen.createImage(bottomQueens[1].image, "pink");
        screen.createBold(bottomQueens[0].getName() + ", " + bottomQueens[1].getName() + "... you are safe.");
        bottomQueens[0].unfavoritism += 1;
        bottomQueens[0].ppe += 2;
        bottomQueens[1].unfavoritism += 1;
        bottomQueens[1].ppe += 2;
        bottomQueens.splice(0, 2);
    } else if (bottomQueens.length == 3 && bottomQueens[0].performanceScore >= 35 && currentCast.length > 5) {
        thirdqueen = true;
        screen.createBold("... no one is safe.");
    }
    else if (bottomQueens.length == 3) {
        bottomQueens[0].addToTrackRecord("LOW");
        screen.createImage(bottomQueens[0].image, "pink");
        screen.createBold(bottomQueens[0].getName() + "... you are safe.");
        bottomQueens[0].unfavoritism += 1;
        bottomQueens[0].ppe += 2;
        bottomQueens.splice(0, 1);
    }
    for (let i = 0; i < bottomQueens.length; i++)
        screen.createImage(bottomQueens[i].image, "tomato");
    screen.createBold("", "btm2");
    let btm2 = document.getElementById("btm2");
    for (let i = 0; i < bottomQueens.length; i++) {
        btm2.innerHTML += bottomQueens[i].getName() + ", ";
    }
    btm2.innerHTML += "I'm sorry my dears but you are up for elimination.";
    screen.createButton("Proceed", "lipsyncDesc()");
}
function teamWinAndBtm2() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("Bring back my All Stars!");
    screen.createBold("Ladies, I've made some decisions...");
    document.body.style.backgroundImage = "url('image/stage.webp')";
    //sort the top queens now taking runway and favoritism in consideration:
    if (riggory) {
        for (let i = 0; i < topQueens.length; i++) {
            topQueens[i].performanceScore -= (topQueens[i].runwayScore);
        }
    } else {
        for (let i = 0; i < topQueens.length; i++)
            topQueens[i].performanceScore -= (topQueens[i].runwayScore - topQueens[i].favoritism);
    }
    topQueens.sort((a, b) => (a.performanceScore - b.performanceScore));
    topQueens[0].QueenA.addToTrackRecord("WIN");
    topQueens[0].QueenB.addToTrackRecord("WIN");
    topQueens[0].addToTrackRecord("WIN");
    topQueens[0].favoritism += 5;
    topQueens[0].QueenA.favoritism += 5;
    topQueens[0].QueenB.favoritism += 5;
    topQueens[0].QueenA.ppe += 5;
    topQueens[0].QueenB.ppe += 5;
    topQueens[0].ppe += 5;
    screen.createImage(topQueens[0].QueenB.image, "royalblue");
    screen.createImage(topQueens[0].QueenA.image, "royalblue");
    screen.createBold(topQueens[0].getName() + ", condragulations you're the winners of this week's challenge!");
    if (topQueens.length > 1) {
        topQueens[1].QueenA.addToTrackRecord("HIGH");
        topQueens[1].QueenB.addToTrackRecord("HIGH");
        topQueens[1].addToTrackRecord("HIGH");
        topQueens[1].favoritism += 1;
        topQueens[1].ppe += 4;
        topQueens[1].QueenA.favoritism += 1;
        topQueens[1].QueenA.ppe += 4;
        topQueens[1].QueenB.favoritism += 1;
        topQueens[1].QueenB.ppe += 4;
        screen.createImage(topQueens[1].QueenB.image, "cyan");
        screen.createImage(topQueens[1].QueenA.image, "cyan");
        screen.createParagraph(topQueens[1].getName() + ", good work this week, you're safe.");
    }
    screen.createHorizontalLine();
    if (bottomQueens.length > 2) {
        screen.createParagraph(`${bottomQueens[0].getName()}, ${bottomQueens[1].getName()}, ${bottomQueens[2].getName()}, you're the bottoms of the week...`);
        for (let i = 0; i < topQueens.length; i++)
            bottomQueens[i].performanceScore -= (bottomQueens[i].runwayScore);
        bottomQueens.sort((a, b) => (a.performanceScore - b.performanceScore));
        bottomQueens[0].QueenA.addToTrackRecord("LOW");
        bottomQueens[0].QueenB.addToTrackRecord("LOW");
        bottomQueens[0].addToTrackRecord("LOW");
        bottomQueens[0].unfavoritism += 1;
        bottomQueens[0].ppe += 2;
        bottomQueens[0].QueenA.unfavoritism += 1;
        bottomQueens[0].QueenA.ppe += 2;
        bottomQueens[0].QueenB.unfavoritism += 1;
        bottomQueens[0].QueenB.ppe += 2;
        screen.createImage(bottomQueens[0].QueenB.image, "pink");
        screen.createImage(bottomQueens[0].QueenA.image, "pink");
        screen.createBold(bottomQueens[0].getName() + ", you are safe.");
        bottomQueens.splice(0, 1);
    }
    screen.createImage(bottomQueens[0].QueenB.image, "tomato");
    screen.createImage(bottomQueens[0].QueenA.image, "tomato");
    screen.createImage(bottomQueens[1].QueenB.image, "tomato");
    screen.createImage(bottomQueens[1].QueenA.image, "tomato");
    screen.createBold(`${bottomQueens[0].getName()}, ${bottomQueens[1].getName()}, I'm sorry my dears but you are up for elimination.`);
    screen.createButton("Proceed", "teamLipSync()");
}
function top2AndBtm() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("Bring back my All Stars!");
    screen.createBold("Ladies, I've made some decisions...");
    document.body.style.backgroundImage = "url('image/stage.webp')";
    //sort the top queens now taking runway and favoritism in consideration:
    if (riggory) {
        for (let i = 0; i < topQueens.length; i++) {
            topQueens[i].performanceScore -= (topQueens[i].runwayScore);
        }
    } else {
        for (let i = 0; i < topQueens.length; i++)
            topQueens[i].performanceScore -= (topQueens[i].runwayScore - topQueens[i].favoritism);
    }
    topQueens.sort((a, b) => (a.performanceScore - b.performanceScore));
    top2.push(topQueens[0]);
    top2.push(topQueens[1]);
    topQueens.splice(0, 2);
    screen.createImage(top2[0].image, "cyan");
    screen.createImage(top2[1].image, "cyan");
    screen.createBold(top2[0].getName() + ", " + top2[1].getName() + ", condragulations, you're the Top 2 of the week!");
    for (let i = 0; i < topQueens.length; i++)
        screen.createImage(topQueens[i].image, "lightblue");
    screen.createParagraph("", "highs");
    let highs = document.querySelector("p#highs");
    for (let i = 0; i < topQueens.length; i++) {
        highs.innerHTML += topQueens[i].getName() + ", ";
        topQueens[i].addToTrackRecord("HIGH");
        topQueens[i].favoritism += 1;
        topQueens[i].ppe += 4;
    }
    if (topQueens.length > 0)
        highs.innerHTML += "good work this week, you're safe.";
    screen.createHorizontalLine();
    for (let i = 0; i < bottomQueens.length; i++)
        screen.createImage(bottomQueens[i].image, "tomato");
    screen.createBold("", "bottoms");
    let bottoms = document.querySelector("b#bottoms");
    for (let i = 0; i < bottomQueens.length; i++) {
        bottoms.innerHTML += bottomQueens[i].getName() + ", ";
    }
    bottoms.innerHTML += "I'm sorry my dears but you're the bottoms of the week.";
    bottomQueens.sort((a, b) => (a.performanceScore - b.performanceScore));
    if (ukvstwFinale) {
        if (bottomQueens.length >= 3 && currentCast.length > 6){
            bottomQueens[0].addToTrackRecord("LOW");
            screen.createImage(bottomQueens[0].image, "pink");
            screen.createParagraph(bottomQueens[0].getName() + "... you are safe.");
            bottomQueens[0].unfavoritism += 1;
            bottomQueens[0].ppe += 2;
            bottomQueens.splice(0, 1);
        }
    } else if (allstars3Finale) {
        if (bottomQueens.length >= 3 && currentCast.length > 5){
            bottomQueens[0].addToTrackRecord("LOW");
            screen.createImage(bottomQueens[0].image, "pink");
            screen.createParagraph(bottomQueens[0].getName() + "... you are safe.");
            bottomQueens[0].unfavoritism += 1;
            bottomQueens[0].ppe += 2;
            bottomQueens.splice(0, 1);
        }
    } else {
        for (let i = 0; i < bottomQueens.length; i++) {
            if (bottomQueens[i].performanceScore >= 0 && bottomQueens[i].performanceScore < 16) {
                screen.createImage(bottomQueens[i].image, "pink");
                screen.createParagraph(bottomQueens[i].getName() + ", you are safe.");
                bottomQueens[i].addToTrackRecord("LOW");
                bottomQueens[i].unfavoritism += 1;
                bottomQueens[i].ppe += 2;
                bottomQueens.splice(bottomQueens.indexOf(bottomQueens[i]), 1);
                break;
            }
        }
    }
   /* if (bottomQueens.length >= 3 && currentCast.length > 5){
        bottomQueens[0].addToTrackRecord("LOW");
        screen.createImage(bottomQueens[0].image, "pink");
        screen.createBold(bottomQueens[0].getName() + "... you are safe.");
        bottomQueens[0].unfavoritism += 1;
        bottomQueens[0].ppe += 2;
        bottomQueens.splice(0, 1);
    } */
    screen.createHorizontalLine();
    screen.createBigText("After deliberation...");
    for (let i = 0; i < top2.length; i++) {
        if (bottomQueens.length == 4) {top2[i].lipstick = betterSister4(top2[i], bottomQueens[0], bottomQueens[1], bottomQueens[2], bottomQueens[3]);}
        if (bottomQueens.length == 3) {top2[i].lipstick = betterSister3(top2[i], bottomQueens[0], bottomQueens[1], bottomQueens[2]);}
        if (bottomQueens.length == 2) {top2[i].lipstick = betterSister2(top2[i], bottomQueens[0], bottomQueens[1]);}
        if (top2[i].lipstick == false) {
            if (randomNumber(0, 100) <= 45 && currentCast.length <= totalCastSize - 2) {
                top2[i].lipstick = bottomQueens.sort((a, b) => b.unfavoritism - a.unfavoritism)[0];
            } else {
                top2[i].lipstick = bottomQueens[randomNumber(0, bottomQueens.length - 1)];
            }
        }
        for (let o = 0; o < bottomQueens.length; o++) {
            if (top2[i].lipstick != bottomQueens[o]) {
                modRelation(2, 1, top2[i], bottomQueens[o]);
            }
        }
        screen.createImage(top2[i].image, "cyan");
        screen.createImage(top2[i].lipstick.image, "red");
        screen.createBold(top2[i].getName() + " chose " + top2[i].lipstick.getName() + "'s lipstick!", "winV", "winVP");
        if (randomNumber(0, 100) >= 80) {
            modRelation(2, 4, top2[i], top2[i].lipstick);
            screen.createBold( top2[i].lipstick.getName() + " felt very upset.", "winV", "winVP");
        } else {
            modRelation(2, 3, top2[i], top2[i].lipstick);
            screen.createBold( top2[i].lipstick.getName() + " took it great, they weren't too mad.","winV", "winVP");
        }
    }
    if (top2[0].lipstick == top2[1].lipstick){
        let imageVoted = document.querySelectorAll("img[src='" + top2[0].lipstick.image +"']")[1];
        imageVoted.setAttribute("hidden", "hidden");
        let imageVotedd = document.querySelectorAll("img[src='" + top2[1].lipstick.image +"']")[2];
        imageVotedd.setAttribute("hidden", "hidden");
        mismovoto = true;
    }else{
        let imageVoted = document.querySelectorAll("img[src='" + top2[0].lipstick.image +"']")[1];
        imageVoted.setAttribute("hidden", "hidden");
        let imageVotedd = document.querySelectorAll("img[src='" + top2[1].lipstick.image +"']")[1];
        imageVotedd.setAttribute("hidden", "hidden");
        mismovoto = false;
    }
    let winV = document.querySelectorAll("p#winVP");
    winV[0].setAttribute("hidden", "hidden");
    winV[1].setAttribute("hidden", "hidden");
    let main = document.querySelector("div#MainBlock");
    let div = document.createElement("div");
    div.setAttribute("id", "votes");
    div.setAttribute("hidden", "hidden");
    for (let i = 0; i < winV.length; i++){
        div.appendChild(winV[i]);
    }
    main.appendChild(div);
    let br = document.createElement("br");
    main.appendChild(br);
    screen.createButton("Show lipsticks", "showvotes()", "showvotes");
    screen.createButton("Proceed", "asLipsyncDesc()");
}
function topAndBtm() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("Bring back my All Stars!");
    screen.createBold("Ladies, I've made some decisions...");
    document.body.style.backgroundImage = "url('image/stage.webp')";
    //sort the top queens now taking runway and favoritism in consideration:
    if (riggory) {
        for (let i = 0; i < topQueens.length; i++) {
            topQueens[i].performanceScore -= (topQueens[i].runwayScore);
        }
    } else {
        for (let i = 0; i < topQueens.length; i++)
            topQueens[i].performanceScore -= (topQueens[i].runwayScore - topQueens[i].favoritism);
    }
    topQueens.sort((a, b) => (a.performanceScore - b.performanceScore));
    top2.push(topQueens[0]);
    topQueens.splice(0, 1);
    screen.createImage(top2[0].image, "royalblue");
    screen.createBold(top2[0].getName() + ", condragulations, you're the Top All Star of the week!");
    if (conjoinedQueens && conjoinedCheck){
        conjoinedReturn(top2[0]);
        conjoinedCheck = false;
    }
    for (let i = 0; i < topQueens.length; i++)
        screen.createImage(topQueens[i].image, "lightblue");
    screen.createParagraph("", "highs");
    let highs = document.querySelector("p#highs");
    for (let i = 0; i < topQueens.length; i++) {
        highs.innerHTML += topQueens[i].getName() + ", ";
        topQueens[i].addToTrackRecord("HIGH");
        topQueens[i].favoritism += 1;
        topQueens[i].ppe += 4;
    }
    if (topQueens.length > 0)
        highs.innerHTML += "good work this week, you're safe.";
    screen.createHorizontalLine();
    if (currentCast.length > 5) {
        for (let i = 0; i < bottomQueens.length; i++)
            screen.createImage(bottomQueens[i].image, "tomato");
        screen.createBold("", "bottoms");
        let bottoms = document.querySelector("b#bottoms");
        for (let i = 0; i < bottomQueens.length; i++) {
            bottoms.innerHTML += bottomQueens[i].getName() + ", ";
        }
        bottoms.innerHTML += "I'm sorry my dears but you're the bottoms of the week.";
        bottomQueens.sort((a, b) => (a.performanceScore - b.performanceScore));
        if (bottomQueens.length >= 3 && currentCast.length > 4){
            bottomQueens[0].addToTrackRecord("LOW");
            screen.createImage(bottomQueens[0].image, "pink");
            screen.createBold(bottomQueens[0].getName() + "... you are safe.");
            bottomQueens[0].unfavoritism += 1;
            bottomQueens[0].ppe += 2;
            bottomQueens.splice(0, 1);
        }
    }
    for (let i = 0; i < bottomQueens.length; i++)
        screen.createImage(bottomQueens[i].image, "tomato");
    screen.createParagraph("", "btms");
    let btms = document.getElementById("btms");
    for (let i = 0; i < bottomQueens.length; i++)
        btms.innerHTML += `${bottomQueens[i].getName()}, `;
    btms.innerHTML += " you're up for elimination.";
    screen.createHorizontalLine();
    screen.createBigText("After deliberation...");
    if (bottomQueens.length == 4) {top2[0].lipstick = betterSister4(top2[0], bottomQueens[0], bottomQueens[1], bottomQueens[2], bottomQueens[3]);}
    if (bottomQueens.length == 3) {top2[0].lipstick = betterSister3(top2[0], bottomQueens[0], bottomQueens[1], bottomQueens[2]);}
    if (bottomQueens.length == 2) {top2[0].lipstick = betterSister2(top2[0], bottomQueens[0], bottomQueens[1]);}
    if (top2[0].lipstick == false || bottomQueens.length > 4) {
        if (randomNumber(0, 100) <= 45 && currentCast.length <= totalCastSize - 2) {
            top2[0].lipstick = bottomQueens.sort((a, b) => b.unfavoritism - a.unfavoritism)[0];
        } else {
            top2[0].lipstick = bottomQueens[randomNumber(0, bottomQueens.length - 1)];
        }
    }
    for (let o = 0; o < bottomQueens.length; o++) {
        if (top2[0].lipstick != bottomQueens[o]) {
            modRelation(2, 1, top2[0], bottomQueens[o]);
        }
    }
    screen.createImage(top2[0].image, "cyan");
    screen.createImage(top2[0].lipstick.image, "red");
    screen.createBold(top2[0].getName() + " chose " + top2[0].lipstick.getName() + "'s lipstick!", "winV", "winVP");
    if (randomNumber(0, 100) <= 80) {
        modRelation(2, 4, top2[0], top2[0].lipstick);
        screen.createBold(top2[0].lipstick.getName() + " felt very upset.", "winV", "winVP");
    } else {
        modRelation(2, 3, top2[0], top2[0].lipstick);
        screen.createBold( top2[0].lipstick.getName() + " took it great, they weren't too mad.","winV", "winVP");
    }
    if (currentCast.length <= 5){
        let imageVoted = document.querySelectorAll("img[src='" + top2[0].lipstick.image +"']")[1];
        imageVoted.setAttribute("hidden", "hidden");
    }else{
        let imageVoted = document.querySelectorAll("img[src='" + top2[0].lipstick.image +"']")[2];
        imageVoted.setAttribute("hidden", "hidden");
    }
    let winV = document.querySelectorAll("p#winVP");
    for (let i = 0; i < winV.length; i++) {
        winV[i].setAttribute("hidden", "hidden");
    }
    screen.createHorizontalLine();
    let main = document.querySelector("div#MainBlock");
    let div = document.createElement("div");
    div.setAttribute("id", "votes");
    div.setAttribute("hidden", "hidden");
    screen.createBigText("The queens pick a lipstick...");
    for (let i = 0; i < currentCast.length; i++) {
        if (top2.indexOf(currentCast[i]) == -1) {
            let flag = 0;
            if (bottomQueens.length == 4) {
                currentCast[i].lipstick = betterSister4(currentCast[i], bottomQueens[0], bottomQueens[1], bottomQueens[2], bottomQueens[3]);
                if (currentCast[i].lipstick == false) {
                    //nada
                } else {
                    while (currentCast[i].lipstick.getName() == currentCast[i].getName()) {
                        flag++;
                        currentCast[i].lipstick = betterSister4(currentCast[i], bottomQueens[0], bottomQueens[1], bottomQueens[2], bottomQueens[3]);
                        if (flag >= 10) {
                            currentCast[i].lipstick = bottomQueens[randomNumber(0, bottomQueens.length - 1)];
                        }
                    }
                }
            }
            if (bottomQueens.length == 3) {
                currentCast[i].lipstick = betterSister3(currentCast[i], bottomQueens[0], bottomQueens[1], bottomQueens[2]);
                if (currentCast[i].lipstick == false) {
                    //nada
                } else {
                    while (currentCast[i].lipstick.getName() == currentCast[i].getName()) {
                        flag++;
                        currentCast[i].lipstick = betterSister3(currentCast[i], bottomQueens[0], bottomQueens[1], bottomQueens[2]);
                        if (flag >= 10) {
                            currentCast[i].lipstick = bottomQueens[randomNumber(0, bottomQueens.length - 1)];
                        }
                    }
                }
            }
            if (bottomQueens.length == 2) {
                currentCast[i].lipstick = betterSister2(currentCast[i], bottomQueens[0], bottomQueens[1]);
                if (currentCast[i].lipstick == false) {
                    //nada
                } else {
                    while (currentCast[i].lipstick.getName() == currentCast[i].getName()) {
                        flag++;
                        currentCast[i].lipstick = betterSister2(currentCast[i], bottomQueens[0], bottomQueens[1]);
                        if (flag >= 10) {
                            currentCast[i].lipstick = bottomQueens[randomNumber(0, bottomQueens.length - 1)];
                        }
                    }
                }
            }
            if (currentCast[i].lipstick == false || bottomQueens.length > 4) {
                if (randomNumber(0, 100) <= 15 && currentCast.length > 6 && bottomQueens.sort((a, b) => b.unfavoritism - a.unfavoritism)[0] != currentCast[i] && currentCast.length <= totalCastSize - 2) {
                    currentCast[i].lipstick = bottomQueens.sort((a, b) => b.unfavoritism - a.unfavoritism)[0];
                    while (currentCast[i].lipstick.getName() == currentCast[i].getName()) {
                        currentCast[i].lipstick = bottomQueens[randomNumber(0, bottomQueens.length - 1)];
                    }
                }
                else {
                    currentCast[i].lipstick = bottomQueens[randomNumber(0, bottomQueens.length - 1)];
                    while (currentCast[i].lipstick.getName() == currentCast[i].getName()) {
                        currentCast[i].lipstick = bottomQueens[randomNumber(0, bottomQueens.length - 1)];
                    }
                }
            }
            for (let o = 0; o < bottomQueens.length; o++) {
                if (randomNumber(0, 100) <= 60 && currentCast[i].lipstick.getName() != bottomQueens[o].getName()) {
                    modRelation(2, 1, currentCast[i], bottomQueens[o]);
                }
            }


            /** **************************************************  
            if (randomNumber(0, 100) <= 15 && currentCast.length > 6 && bottomQueens.sort((a, b) => b.unfavoritism - a.unfavoritism)[0] != currentCast[i] && currentCast.length <= totalCastSize - 2) {
                currentCast[i].lipstick = bottomQueens.sort((a, b) => b.unfavoritism - a.unfavoritism)[0];
                while (currentCast[i].lipstick.getName() == currentCast[i].getName()) {
                    currentCast[i].lipstick = bottomQueens[randomNumber(0, bottomQueens.length - 1)];
                }
            }
            else {
                currentCast[i].lipstick = bottomQueens[randomNumber(0, bottomQueens.length - 1)];
                while (currentCast[i].lipstick.getName() == currentCast[i].getName()) {
                    currentCast[i].lipstick = bottomQueens[randomNumber(0, bottomQueens.length - 1)];
                }
            }

            ******************************************************* */
            screen.createBold(currentCast[i].getName() + " voted for " + currentCast[i].lipstick.getName() + "!", "votes", "votesP");
            currentCast[i].lipstick.votes++; 
        } 
    }
    let votesToDiv = document.querySelectorAll("p#votesP");
    for (let i = 0; i < votesToDiv.length; i++){
        div.appendChild(votesToDiv[i]);
    }
    main.appendChild(div);
    screen.createButton("Show lipsticks", "showvotes()", "showvotes");
    screen.createHorizontalLine();
    for (let i = 0; i < bottomQueens.length; i++) {
        screen.createImage(bottomQueens[i].image, "red");
        screen.createBold(bottomQueens[i].getName() + ": " + bottomQueens[i].votes.toString() + " votes", "total", "totalP");
    }
    let resultVotes = document.querySelectorAll("p#totalP");
    for (let i = 0; i < resultVotes.length; i++){
        resultVotes[i].setAttribute("hidden", "hidden");
    }
    bottomQueens.sort((a, b) => b.votes - a.votes);
    let br = document.createElement("br");
    main.appendChild(br);
    screen.createButton("Proceed", "lsaLipsyncDesc()");
}
let mismovoto = false;
function showvotes() {
    let button = document.querySelector("button#showvotes");
    let div = document.querySelector("div#votes");
    button.remove();
    if (lipsync_assassin){
        let winV = document.querySelectorAll("p#winVP");
        if (currentCast.length <= 5){
            let imageVoted = document.querySelectorAll("img[src='" + top2[0].lipstick.image +"']")[1];
            imageVoted.removeAttribute("hidden");
        }else{
            let imageVoted = document.querySelectorAll("img[src='" + top2[0].lipstick.image +"']")[2];
            imageVoted.removeAttribute("hidden");
        }
        for (let i = 0; i < winV.length; i++) {
            winV[i].removeAttribute("hidden");
        }
        div.removeAttribute("hidden");
        let resultVotes = document.querySelectorAll("p#totalP");
        for (let i = 0; i < resultVotes.length; i++){
            resultVotes[i].removeAttribute("hidden");
        }
    }else if (all_stars){
        let winV = document.querySelectorAll("p#winVP");
        for (let i = 0; i < winV.length; i++){
            winV[i].removeAttribute("hidden");
        }
        div.removeAttribute("hidden");
        if (mismovoto == true){
            let imageVoted = document.querySelectorAll("img[src='" + top2[0].lipstick.image +"']")[1];
            imageVoted.removeAttribute("hidden");
            let imageVotedd = document.querySelectorAll("img[src='" + top2[1].lipstick.image +"']")[2];
            imageVotedd.removeAttribute("hidden");
        }else{
            let imageVoted = document.querySelectorAll("img[src='" + top2[0].lipstick.image +"']")[1];
            imageVoted.removeAttribute("hidden");
            let imageVotedd = document.querySelectorAll("img[src='" + top2[1].lipstick.image +"']")[1];
            imageVotedd.removeAttribute("hidden");
        }
    }
    
}
let threestars = false;
let flagThree = false;
let gs = false;
let gsFlag = false;
function top2AndBlocked() {
    gs = false;
    let screen = new Scene();
    screen.clean();
    screen.createHeader("Bring back my winners!");
    screen.createBold("Ladies, I've made some decisions...");
    document.body.style.backgroundImage = "url('image/stage.webp')";
    if (randomNumber(0, 100) >= 98) {gs = true;}
    if (gs || (episodeCount == 5 && !gsFlag)) {
        gs = true;
        gsFlag = true;
        screen.createImage("image/star.webp", "gold");
        screen.createBold("This week the top 2 will give away a star to one of them fellow contestants...");
    }
    if ((episodeCount == 11 && episodeChallenges[10] == "Talent Show") || (episodeCount == 14 && episodeChallenges[13] == "Talent Show") && !flagThree) {
        screen.createImage("image/star.webp", "gold");
        screen.createBold("This week the top 2 will get 3 stars instead of 1...");
        threestars = true;
    }
    //sort the top queens now taking runway and favoritism in consideration:
    if (riggory) {
        for (let i = 0; i < topQueens.length; i++) {
            topQueens[i].performanceScore -= (topQueens[i].runwayScore);
        }
    } else {
        for (let i = 0; i < topQueens.length; i++)
            topQueens[i].performanceScore -= (topQueens[i].runwayScore - topQueens[i].favoritism);
    }
    topQueens.sort((a, b) => (a.performanceScore - b.performanceScore));
    top2.push(topQueens[0]);
    top2.push(topQueens[1]);
    topQueens.splice(0, 2);
    screen.createImage(top2[0].image, "cyan");
    screen.createImage(top2[1].image, "cyan");
    screen.createBold(top2[0].getName() + ", " + top2[1].getName() + ", condragulations, you're the Top 2 of the week!");
    for (let i = 0; i < topQueens.length; i++)
        screen.createImage(topQueens[i].image, "lightblue");
    screen.createParagraph("", "highs");
    let highs = document.querySelector("p#highs");
    for (let i = 0; i < topQueens.length; i++) {
        highs.innerHTML += topQueens[i].getName() + ", ";
        topQueens[i].addToTrackRecord("HIGH");
        topQueens[i].favoritism += 1;
        topQueens[i].ppe += 4;
    }
    if (topQueens.length > 0)
        highs.innerHTML += "good work this week, you're safe.";
    screen.createHorizontalLine();
    if (top2[0].blocked == true && top2[1].blocked == true) {
        screen.createImage(top2[0].image, "red");
        screen.createImage(top2[1].image, "red");
        screen.createBold(top2[0].getName() + " and " + top2[1].getName() + " will not recieve a star because they are blocked.");
    }
    if (top2[0].blocked == true && top2[1].blocked == false) {
        screen.createImage(top2[0].image, "red");
        screen.createImage(top2[1].image, "pink");
        screen.createBold(top2[0].getName() + " will not recieve a star because they are blocked. While " + top2[1].getName() + " does get a star!");
        if (threestars && !flagThree) {
            top2[1].stars += 3;
            flagThree = true;
        } else {
            top2[1].stars++;
        }
    }
    if (top2[0].blocked == false && top2[1].blocked == true) {
        screen.createImage(top2[1].image, "red");
        screen.createImage(top2[0].image, "pink");
        screen.createBold(top2[1].getName() + " will not recieve a star because they are blocked. While " + top2[0].getName() + " does get a star!");
        if (threestars && !flagThree) {
            top2[0].stars += 3;
            flagThree = true;
        } else {
            top2[0].stars++;
        }
    }
    if (top2[0].blocked == false && top2[1].blocked == false) {
        screen.createImage(top2[0].image, "pink");
        screen.createImage(top2[1].image, "pink");
        screen.createBold(top2[0].getName() + " and " + top2[1].getName() +" will recieve a star!");
        if (threestars && !flagThree) {
            top2[0].stars += 3;
            top2[1].stars += 3;
            flagThree = true;
        } else {
            top2[0].stars++;
            top2[1].stars++;
        }
    }
    screen.createHorizontalLine();
    for (let i = 0; i < currentCast.length; i++) {
        currentCast[i].blocked = false;
        if (top2.indexOf(currentCast[i]) == -1)
            up2Block.push(currentCast[i]);
    }
    screen.createButton("Proceed", "awLipsync(gs)");
}
let disqOrDept = false;
function lipSync() {
    let screen = new Scene();
    screen.clean();
    bottomQueens.sort((a, b) => (b.lipsyncScore - a.lipsyncScore));
    screen.createHeader("I've made my decision.");
    let score1 = bottomQueens[0].lipsyncScore - bottomQueens[0].favoritism + bottomQueens[0].unfavoritism;
    let score2 = bottomQueens[1].lipsyncScore - bottomQueens[1].favoritism + bottomQueens[1].unfavoritism;
    if (thirdqueen && currentCast.length > 5) {
        thirdqueen = false;
        if (score1 > 7 && score2 > 7 && randomNumber(0, 100) <= 50 && noDouble == false && currentCast.length > 5) {
            screen.createImage(bottomQueens[0].image, "tomato");
            screen.createBold(bottomQueens[0].getName() + ", shantay you stay.");
            screen.createImage(bottomQueens[1].image, "tomato");
            screen.createBold(bottomQueens[1].getName() + ", shantay you stay.");
            bottomQueens[0].addToTrackRecord("BTM3");
            bottomQueens[0].unfavoritism += 3;
            bottomQueens[0].ppe += 1;
            bottomQueens[1].addToTrackRecord("BTM3");
            bottomQueens[1].unfavoritism += 3;
            bottomQueens[1].ppe += 1;
            if (chocolateBarTwist  && !chocolateBarTwistCheck) {
                screen.createBold(bottomQueens[2].getName() + ", now your fate rests in the hands of the drag gods.");
                screen.createBold("If you have the golden chocolate bar, you will be safe.");
                if (chocolateBarCheck(bottomQueens[2]) == true) {
                    screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
                    screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
                    screen.createBold(bottomQueens[2].getName() + "!! Condragtulations, you are safe to slay another day!");
                    bottomQueens[2].addToTrackRecord("CHOC");
                    bottomQueens[2].unfavoritism += 3;
                    bottomQueens[2].ppe += 1;
                    chocolateBarTwistCheck = true;
                } else {
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    screen.createBold(bottomQueens[2].getName() + ", sashay away...");
                    bottomQueens[2].addToTrackRecord("ELIM");
                    bottomQueens[2].unfavoritism += 5;
                    eliminatedCast.unshift(bottomQueens[2]);
                    currentCast.splice(currentCast.indexOf(bottomQueens[2]), 1);
                }
            } else {
                screen.createImage(bottomQueens[2].image, "red");
                screen.createBold(bottomQueens[2].getName() + ", sashay away...");
                bottomQueens[2].addToTrackRecord("ELIM");
                bottomQueens[2].unfavoritism += 5;
                eliminatedCast.unshift(bottomQueens[2]);
                currentCast.splice(currentCast.indexOf(bottomQueens[2]), 1);
            }
        } else {
            screen.createImage(bottomQueens[0].image, "tomato");
            screen.createBold(bottomQueens[0].getName() + ", shantay you stay.");
            bottomQueens[0].addToTrackRecord("BTM3");
            bottomQueens[0].unfavoritism += 3;
            bottomQueens[0].ppe += 1;
            if (chocolateBarTwist  && !chocolateBarTwistCheck) {
                screen.createBold("Neither one of you survived that lipsync..." + bottomQueens[1].getName() + ", " + bottomQueens[2].getName() + ", now your fates rests in the hands of the drag gods.");
                screen.createBold("If one of you have the golden chocolate bar, that queen will be safe.");
                if (chocolateBarCheck(bottomQueens[1], bottomQueens[2]) == 1) {
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    screen.createBold(bottomQueens[2].getName() + ", sashay away...");
                    bottomQueens[2].addToTrackRecord("ELIM");
                    bottomQueens[2].unfavoritism += 5;
                    eliminatedCast.unshift(bottomQueens[2]);
                    currentCast.splice(currentCast.indexOf(bottomQueens[2]), 1);
                    screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
                    screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
                    screen.createBold(bottomQueens[1].getName() + "!! Condragtulations, you are safe to slay another day!");
                    bottomQueens[1].addToTrackRecord("CHOC");
                    bottomQueens[1].unfavoritism += 3;
                    bottomQueens[1].ppe += 1;
                    chocolateBarTwistCheck = true;
                } else if (chocolateBarCheck(bottomQueens[1], bottomQueens[2]) == 2) {
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    screen.createBold(bottomQueens[1].getName() + ", sashay away...");
                    bottomQueens[1].addToTrackRecord("ELIM");
                    bottomQueens[1].unfavoritism += 5;
                    eliminatedCast.unshift(bottomQueens[1]);
                    currentCast.splice(currentCast.indexOf(bottomQueens[1]), 1);
                    screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
                    screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
                    screen.createBold(bottomQueens[2].getName() + "!! Condragtulations, you are safe to slay another day!");
                    bottomQueens[2].addToTrackRecord("CHOC");
                    bottomQueens[2].unfavoritism += 3;
                    bottomQueens[2].ppe += 1;
                    chocolateBarTwistCheck = true;
                } else {
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    screen.createBold(bottomQueens[1].getName() + ", sashay away...");
                    bottomQueens[1].addToTrackRecord(" ELIM ");
                    bottomQueens[1].unfavoritism += 5;
                    eliminatedCast.unshift(bottomQueens[1]);
                    currentCast.splice(currentCast.indexOf(bottomQueens[1]), 1);
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    screen.createBold(bottomQueens[2].getName() + ", sashay away...");
                    bottomQueens[2].addToTrackRecord(" ELIM ");
                    bottomQueens[2].unfavoritism += 5;
                    eliminatedCast.unshift(bottomQueens[2]);
                    currentCast.splice(currentCast.indexOf(bottomQueens[2]), 1);
                    doubleSashay = true;
                }
            } else {
                screen.createImage(bottomQueens[1].image, "red");
                screen.createBold(bottomQueens[1].getName() + ", sashay away...");
                screen.createImage(bottomQueens[2].image, "red");
                screen.createBold(bottomQueens[2].getName() + ", sashay away...");
                bottomQueens[1].addToTrackRecord("ELIM");
                bottomQueens[1].unfavoritism += 5;
                bottomQueens[2].addToTrackRecord("ELIM");
                bottomQueens[2].unfavoritism += 5;
                eliminatedCast.unshift(bottomQueens[1]);
                currentCast.splice(currentCast.indexOf(bottomQueens[1]), 1);
                eliminatedCast.unshift(bottomQueens[2]);
                currentCast.splice(currentCast.indexOf(bottomQueens[2]), 1);
            }
        }
    } else {
        if (score1 > 7 && score2 > 7 && randomNumber(0, 100) <= 50 && !doubleShantay && noDouble == false && currentCast.length > 5) {
            if (randomNumber(0, 100) >= 95) {
                screen.createImage(bottomQueens[0].image, "tomato");
                screen.createBold(bottomQueens[0].getName() + ", shantay you stay.");
                screen.createImage(bottomQueens[1].image, "red");
                screen.createBold(bottomQueens[1].getName() + ", sashay away...");
                screen.createImage(bottomQueens[1].image, "pink");
                screen.createBold("WAIT!!, wait, " + bottomQueens[1].getName() + ", I'm not ready for you to go home... shantay you stay.");
                bottomQueens[0].addToTrackRecord(" BTM2");
                bottomQueens[0].unfavoritism += 3;
                bottomQueens[0].ppe += 1;
                bottomQueens[1].addToTrackRecord(" BTM2");
                bottomQueens[1].unfavoritism += 3;
                bottomQueens[1].ppe += 1;
            } else {
                screen.createImage(bottomQueens[0].image, "magenta");
                screen.createImage(bottomQueens[1].image, "magenta");
                screen.createBold("Condragulations, shantay you both stay!!");
                bottomQueens[0].addToTrackRecord(" BTM2");
                bottomQueens[0].unfavoritism += 3;
                bottomQueens[0].ppe += 1;
                bottomQueens[1].addToTrackRecord(" BTM2");
                bottomQueens[1].unfavoritism += 3;
                bottomQueens[1].ppe += 1;
                doubleShantay = true;
            }
        }
        else if (score1 < 4 && score2 < 4 && randomNumber(0, 100) <= 10 && !doubleSashay && currentCast.length > 5 && noDouble == false) {
            screen.createImage(bottomQueens[0].image, "darkred");
            screen.createImage(bottomQueens[1].image, "darkred");
            if (chocolateBarTwist  && !chocolateBarTwistCheck) {
                screen.createBold("Neither one of you survived that lipsync..." + bottomQueens[0].getName() + ", " + bottomQueens[1].getName() + ", now your fates rests in the hands of the drag gods.");
                screen.createBold("If one of you have the golden chocolate bar, that queen will be safe.");
                if (chocolateBarCheck(bottomQueens[0], bottomQueens[1]) == 1) {
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    screen.createBold(bottomQueens[1].getName() + ", sashay away...");
                    bottomQueens[1].addToTrackRecord("ELIM");
                    bottomQueens[1].unfavoritism += 5;
                    eliminatedCast.unshift(bottomQueens[1]);
                    currentCast.splice(currentCast.indexOf(bottomQueens[1]), 1);
                    screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
                    screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
                    screen.createBold(bottomQueens[0].getName() + "!! Condragtulations, you are safe to slay another day!");
                    bottomQueens[0].addToTrackRecord("CHOC");
                    bottomQueens[0].unfavoritism += 3;
                    bottomQueens[0].ppe += 1;
                    chocolateBarTwistCheck = true;
                    
                } else if (chocolateBarCheck(bottomQueens[0], bottomQueens[1]) == 2) {
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    screen.createBold(bottomQueens[0].getName() + ", sashay away...");
                    bottomQueens[0].addToTrackRecord("ELIM");
                    bottomQueens[0].unfavoritism += 5;
                    eliminatedCast.unshift(bottomQueens[0]);
                    currentCast.splice(currentCast.indexOf(bottomQueens[0]), 1);
                    screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
                    screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
                    screen.createBold(bottomQueens[1].getName() + "!! Condragtulations, you are safe to slay another day!");
                    bottomQueens[1].addToTrackRecord("CHOC");
                    bottomQueens[1].unfavoritism += 3;
                    bottomQueens[1].ppe += 1;
                    chocolateBarTwistCheck = true;
                    
                } else {
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    screen.createBold(bottomQueens[0].getName() + ", sashay away...");
                    bottomQueens[0].addToTrackRecord(" ELIM ");
                    bottomQueens[0].unfavoritism += 5;
                    eliminatedCast.unshift(bottomQueens[0]);
                    currentCast.splice(currentCast.indexOf(bottomQueens[0]), 1);
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    screen.createBold(bottomQueens[1].getName() + ", sashay away...");
                    bottomQueens[1].addToTrackRecord(" ELIM ");
                    bottomQueens[1].unfavoritism += 5;
                    eliminatedCast.unshift(bottomQueens[1]);
                    currentCast.splice(currentCast.indexOf(bottomQueens[1]), 1);
                    doubleSashay = true;
                }
            } else {
                screen.createBold("I'm sorry but none of you showed the fire it takes to stay. You must both... sashay away.");
                doubleSashay = true;
                bottomQueens[0].addToTrackRecord(" ELIM ");
                bottomQueens[0].unfavoritism += 5;
                eliminatedCast.unshift(bottomQueens[0]);
                currentCast.splice(currentCast.indexOf(bottomQueens[0]), 1);
                bottomQueens[1].addToTrackRecord(" ELIM ");
                bottomQueens[1].unfavoritism += 5;
                eliminatedCast.unshift(bottomQueens[1]);
                currentCast.splice(currentCast.indexOf(bottomQueens[1]), 1);
            }
        }
        else if (randomNumber(0, 1000) >= 998 && disqOrDept == false) {
            let quitterQueen = bottomQueens[randomNumber(0, bottomQueens.length - 1)];
            screen.createImage(quitterQueen.image, "red");
            screen.createBold(quitterQueen.getName() + ", shockingly has left the runway, they decided that they won't lipsync.");
            if (quitterQueen.getName() == bottomQueens[0].getName()) {
                bottomQueens[0].addToTrackRecord("QUIT");
                bottomQueens[0].unfavoritism += 5;
                bottomQueens[0].QueenDisqOrDept = true;
                bottomQueens[1].addToTrackRecord("BTM2");
                bottomQueens[1].unfavoritism += 3;
                bottomQueens[1].ppe += 1;
            } else {
                bottomQueens[0].addToTrackRecord("BTM2");
                bottomQueens[0].unfavoritism += 3;
                bottomQueens[0].ppe += 1;
                bottomQueens[1].addToTrackRecord("QUIT");
                bottomQueens[1].unfavoritism += 5;
                bottomQueens[1].QueenDisqOrDept = true;
            }
            eliminatedCast.unshift(quitterQueen);
            currentCast.splice(currentCast.indexOf(quitterQueen), 1);
            disqOrDept = true;
            if (chocolateBarTwist  && !chocolateBarTwistCheck) {
                if (chocolateBarCheck(quitterQueen) == true) {
                    chocolateBarTwistCheck = true;
                }
            }
        }
        else if (randomNumber(0, 1000) >= 999 && disqOrDept == false) {
            let disqualifiedQueen = currentCast[randomNumber(0, currentCast.length - 1)];
            screen.createImage(disqualifiedQueen.image, "red");
            screen.createBold(disqualifiedQueen.getName() + ", it has come to my attention that you have broken the rules of this competition. I must ask you to sashay away.");
            if (disqualifiedQueen.getName() == bottomQueens[0].getName()) {
                bottomQueens[1].addToTrackRecord("BTM2");
            } else if (disqualifiedQueen.getName() == bottomQueens[1].getName()) {
                bottomQueens[0].addToTrackRecord("BTM2");
            }else {
                bottomQueens[0].addToTrackRecord(" BTM2");
                bottomQueens[1].addToTrackRecord(" BTM2");
                disqualifiedQueen.trackRecord.pop();
            }
            bottomQueens[0].unfavoritism += 3;
            bottomQueens[0].ppe += 1;
            bottomQueens[1].unfavoritism += 3;
            bottomQueens[1].ppe += 1;
            disqualifiedQueen.addToTrackRecord("DISQ");
            disqualifiedQueen.QueenDisqOrDept = true;
            eliminatedCast.unshift(disqualifiedQueen);
            currentCast.splice(currentCast.indexOf(disqualifiedQueen), 1);
            disqOrDept = true;
            if (chocolateBarTwist  && !chocolateBarTwistCheck) {
                if (chocolateBarCheck(disqualifiedQueen) == true) {
                    chocolateBarTwistCheck = true;
                }
            }
        }
        else if (randomNumber(0, 1000) >= 999 && disqOrDept == false) {
            let injuredQueen = currentCast[randomNumber(0, currentCast.length - 1)];
            screen.createImage(injuredQueen.image, "red");
            screen.createBold(injuredQueen.getName() + ", would you please step forward.");
            screen.createBold("We've been in touch with the doctor. You need time to heal. I cannot allow you to continue in the competition.");
            screen.createBold("I must ask you to sashay away.");
            if (injuredQueen.getName() == bottomQueens[0].getName()) {
                bottomQueens[1].addToTrackRecord("BTM2");
            } else if (injuredQueen.getName() == bottomQueens[1].getName()) {
                bottomQueens[0].addToTrackRecord("BTM2");
            }else {
                bottomQueens[0].addToTrackRecord(" BTM2");
                bottomQueens[1].addToTrackRecord(" BTM2");
                injuredQueen.trackRecord.pop();
            }
            bottomQueens[0].unfavoritism += 3;
            bottomQueens[0].ppe += 1;
            bottomQueens[1].unfavoritism += 3;
            bottomQueens[1].ppe += 1;
            injuredQueen.addToTrackRecord("DEPT");
            injuredQueen.QueenDisqOrDept = true;
            eliminatedCast.unshift(injuredQueen);
            currentCast.splice(currentCast.indexOf(injuredQueen), 1);
            disqOrDept = true;
            if (chocolateBarTwist  && !chocolateBarTwistCheck) {
                if (chocolateBarCheck(injuredQueen) == true) {
                    chocolateBarTwistCheck = true;
                }
            }
        } else {
            screen.createImage(bottomQueens[0].image, "tomato");
            screen.createBold(bottomQueens[0].getName() + ", shantay you stay.");
            bottomQueens[0].addToTrackRecord("BTM2");
            bottomQueens[0].unfavoritism += 3;
            bottomQueens[0].ppe += 1;
            screen.createImage(bottomQueens[1].image, "red");
            if (chocolateBarTwist  && !chocolateBarTwistCheck) {
                screen.createBold(bottomQueens[1].getName() + ", now your fate rests in the hands of the drag gods.");
                screen.createBold("If you have the golden chocolate bar, you will be safe.");
                if (chocolateBarCheck(bottomQueens[1]) == true) {
                    screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
                    screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
                    screen.createBold(bottomQueens[1].getName() + "!! Condragtulations, you are safe to slay another day!");
                    bottomQueens[1].addToTrackRecord("CHOC");
                    bottomQueens[1].unfavoritism += 3;
                    bottomQueens[1].ppe += 1;
                    chocolateBarTwistCheck = true;
                    
                } else {
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    screen.createBold(bottomQueens[1].getName() + ", sashay away...");
                    bottomQueens[1].addToTrackRecord("ELIM");
                    bottomQueens[1].unfavoritism += 5;
                    eliminatedCast.unshift(bottomQueens[1]);
                    currentCast.splice(currentCast.indexOf(bottomQueens[1]), 1);
                    
                }
            } else {
                screen.createBold(bottomQueens[1].getName() + ", sashay away...");
                bottomQueens[1].addToTrackRecord("ELIM");
                bottomQueens[1].unfavoritism += 5;
                eliminatedCast.unshift(bottomQueens[1]);
                currentCast.splice(currentCast.indexOf(bottomQueens[1]), 1);
            }
        }
    }
    for (let i = 0; i < bottomQueens.length; i++) {
        if (bottomQueens[i].maxiT == true) {
            bottomQueens[i].trackRecord[bottomQueens[i].trackRecord.length - 2] += bottomQueens[i].trackRecord[bottomQueens[i].trackRecord.length - 1];
            bottomQueens[i].trackRecord.splice([bottomQueens[i].trackRecord.length - 1], 1);
            bottomQueens[i].maxiT = false;
        }
    }
    if ((s6Premiere || s12Premiere || porkchopPremiere || s14Premiere) == true && premiereCounter < 3)
        screen.createButton("Proceed", "doublePremiere()");
    else if (CheckForReturning() == true)
        screen.createButton("Proceed", "returningQueenScreen()");
    else
        screen.createButton("Proceed", "untucked()");
}
function teamLipSync() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("It's time...");
    screen.createBold("For you to lip-sync... for your lives! Good luck and don't fuck it up.");
    let wholipsyncs;
    let wholipsyncs1;
    if (randomNumber(0, 100) <= 50) {
        bottomQueens[0].lipsyncQueen = bottomQueens[0].QueenA;
        wholipsyncs = true;
    }
    else {
        bottomQueens[0].lipsyncQueen = bottomQueens[0].QueenB;
        wholipsyncs = false;
    }
    if (randomNumber(0, 100) <= 50) {
        bottomQueens[1].lipsyncQueen = bottomQueens[1].QueenA;
        wholipsyncs1 = true;
    } else {
        bottomQueens[1].lipsyncQueen = bottomQueens[1].QueenB;
        wholipsyncs1 = false;
    }
    screen.createImage(bottomQueens[0].lipsyncQueen.image);
    screen.createImage(bottomQueens[1].lipsyncQueen.image);
    screen.createBold(`${bottomQueens[0].lipsyncQueen.getName()} and ${bottomQueens[1].lipsyncQueen.getName()} will be lip-syncing`);
    lsSong();
    bottomQueens[0].lipsyncQueen.getLipsync();
    bottomQueens[1].lipsyncQueen.getLipsync();
    bottomQueens[0].lipsyncScore = bottomQueens[0].lipsyncQueen.lipsyncScore
    bottomQueens[1].lipsyncScore = bottomQueens[1].lipsyncQueen.lipsyncScore
    bottomQueens[0].lipsyncScore -= (bottomQueens[0].favoritism + bottomQueens[0].unfavoritism);
    bottomQueens[1].lipsyncScore -= (bottomQueens[1].favoritism + bottomQueens[1].unfavoritism);
    bottomQueens.sort((a, b) => (b.lipsyncScore - a.lipsyncScore));
    screen.createHorizontalLine();
    if (randomNumber(0, 100) >= 98 && wholipsyncs) {
        screen.createBold("OMG!! " + bottomQueens[0].QueenB.getName() + " hits the she-mergency button and now she is going to lipsync!!");
    } else if (randomNumber(0, 100) >= 98 && !wholipsyncs) {
        screen.createBold("OMG!! " + bottomQueens[0].QueenA.getName() + " hits the she-mergency button and now she is going to lipsync!!");
    } else if (randomNumber(0, 100) >= 98 && !wholipsyncs1) {
        screen.createBold("OMG!! " + bottomQueens[1].QueenA.getName() + " hits the she-mergency button and now she is going to lipsync!!");
    } else if (randomNumber(0, 100) >= 98 && wholipsyncs1) {
        screen.createBold("OMG!! " + bottomQueens[1].QueenB.getName() + " hits the she-mergency button and now she is going to lipsync!!");
    }
    screen.createImage(bottomQueens[0].lipsyncQueen.image, "pink");
    screen.createBold(bottomQueens[0].lipsyncQueen.getName() + ", shantay you stay.");
    screen.createImage(bottomQueens[1].lipsyncQueen.image, "red");
    screen.createBold(bottomQueens[1].lipsyncQueen.getName() + ", you will always be an All Star, now, sashay away...");
    if (bottomQueens[0].lipsyncQueen.getName() == bottomQueens[0].QueenA.getName()) {
        bottomQueens[0].QueenA.addToTrackRecord("BTM2 ");
        bottomQueens[0].QueenB.addToTrackRecord("BTM2");
    } else {
        bottomQueens[0].QueenA.addToTrackRecord("BTM2");
        bottomQueens[0].QueenB.addToTrackRecord("BTM2 ");
    }
    bottomQueens[0].addToTrackRecord("BTM2");
    bottomQueens[0].unfavoritism += 3;
    bottomQueens[0].ppe += 1;
    bottomQueens[0].QueenA.unfavoritism += 3;
    bottomQueens[0].QueenB.unfavoritism += 3;
    bottomQueens[0].QueenA.ppe += 1;
    bottomQueens[0].QueenB.ppe += 1;
    if (bottomQueens[1].lipsyncQueen.getName() == bottomQueens[1].QueenA.getName()) {
        bottomQueens[1].QueenA.addToTrackRecord("ELIM");
        bottomQueens[1].QueenB.addToTrackRecord("ELIM ");
    } else {
        bottomQueens[1].QueenA.addToTrackRecord("ELIM ");
        bottomQueens[1].QueenB.addToTrackRecord("ELIM");
    }
    bottomQueens[1].unfavoritism += 5;
    bottomQueens[1].QueenA.unfavoritism += 5;
    bottomQueens[1].QueenB.unfavoritism += 5;
    eliminatedCast.unshift(bottomQueens[1].QueenA);
    eliminatedCast.unshift(bottomQueens[1].QueenB);
    currentCast.splice(currentCast.indexOf(bottomQueens[1]), 1);
    if (CheckForReturning() == true)
        screen.createButton("Proceed", "returningQueenScreen()");
    else
        screen.createButton("Proceed", "newEpisode()");
}
function asLipSync() {
    let screen = new Scene();
    screen.clean();
    top2.sort((a, b) => (b.lipsyncScore - a.lipsyncScore));
    screen.createHeader("Ladies, I've made my decision...");
    if (top2[0].lipsyncScore == top2[1].lipsyncScore && top2[0].lipsyncScore > 6 && top2[1].lipsyncScore > 6 && currentCast.length > 5 && !noDouble) {
        screen.createImage(top2[0].image, "darkblue");
        screen.createImage(top2[1].image, "darkblue");
        screen.createBold("Condragulations, you're both winners baby!");
        top2[0].favoritism += 5;
        top2[0].ppe += 5;
        top2[1].favoritism += 5;
        top2[1].ppe += 5;
        top2[0].addToTrackRecord(" WIN");
        top2[1].addToTrackRecord(" WIN");
        screen.createHorizontalLine();
        assasintable.push(top2[0].getName() + " & " + top2[1].getName());
        assasintable.push(" ");
        if (conjoinedQueens && conjoinedCheck){
            conjoinedReturn(top2[0], top2[1]);
            conjoinedCheck = false;
        }
        if (top2[0].lipstick == top2[1].lipstick) {
            assasinlipstick.push(top2[0].lipstick.getName());
            assasinlipstick.push(" ");
            screen.createImage(top2[0].lipstick.image, "red");
            if (chocolateBarTwist  && !chocolateBarTwistCheck) {
                screen.createBold(top2[0].lipstick.getName() + ", now your fate rests in the hands of the drag gods.");
                screen.createBold("If you have the golden chocolate bar, you will be safe.");
                if (chocolateBarCheck(top2[0].lipstick) == true) {
                    screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
                    screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
                    screen.createBold(top2[0].lipstick.getName() + "!! Condragulations, you are safe to slay another day!");
                    top2[0].lipstick.addToTrackRecord("CHOC");
                    top2[0].lipstick.unfavoritism += 3;
                    top2[0].lipstick.ppe += 1;
                    chocolateBarTwistCheck = true;
                    bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                } else {
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    screen.createBold(`${top2[0].lipstick.getName()}, you will always be an All Star, now, sashay away...`);
                    top2[0].lipstick.addToTrackRecord("ELIM");
                    top2[0].lipstick.unfavoritism += 5;
                    eliminatedCast.unshift(top2[0].lipstick);
                    bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                    currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
                    
                }
            } else {
                screen.createBold(`${top2[0].lipstick.getName()}, you will always be an All Star, now, sashay away...`);
                top2[0].lipstick.addToTrackRecord("ELIM");
                top2[0].lipstick.unfavoritism += 5;
                eliminatedCast.unshift(top2[0].lipstick);
                bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
            }
        }
        else {
            screen.createImage(top2[0].lipstick.image, "red");
            screen.createImage(top2[1].lipstick.image, "red");
            assasinlipstick.push(top2[0].lipstick.getName() + " & " + top2[1].lipstick.getName());
            assasinlipstick.push(" ");
            if (chocolateBarTwist  && !chocolateBarTwistCheck) {
                screen.createBold(top2[0].lipstick.getName() + ", " + top2[1].lipstick.getName() + ", now your fates rests in the hands of the drag gods.");
                screen.createBold("If one of you have the golden chocolate bar, that queen will be safe.");
                if (chocolateBarCheck(top2[0].lipstick, top2[1].lipstick) == 1) {
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    top2[1].lipstick.addToTrackRecord("ELIM");
                    top2[1].lipstick.unfavoritism += 5;
                    eliminatedCast.unshift(top2[1].lipstick);
                    bottomQueens.splice(bottomQueens.indexOf(top2[1].lipstick), 1);
                    currentCast.splice(currentCast.indexOf(top2[1].lipstick), 1);
                    screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
                    screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
                    screen.createBold(top2[0].lipstick.getName() + "!! Condragulations, you are safe to slay another day!");
                    top2[0].lipstick.addToTrackRecord("CHOC");
                    top2[0].lipstick.unfavoritism += 3;
                    top2[0].lipstick.ppe += 1;
                    bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                    chocolateBarTwistCheck = true;
                    
                } else if (chocolateBarCheck(top2[0].lipstick, top2[1].lipstick) == 2) {
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    top2[0].lipstick.addToTrackRecord("ELIM");
                    top2[0].lipstick.unfavoritism += 5;
                    eliminatedCast.unshift(top2[0].lipstick);
                    bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                    currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
                    screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
                    screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
                    screen.createBold(top2[1].lipstick.getName() + "!! Condragulations, you are safe to slay another day!");
                    top2[1].lipstick.addToTrackRecord("CHOC");
                    top2[1].lipstick.unfavoritism += 3;
                    top2[1].lipstick.ppe += 1;
                    bottomQueens.splice(bottomQueens.indexOf(top2[1].lipstick), 1);
                    chocolateBarTwistCheck = true;
                    
                } else {
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    top2[0].lipstick.addToTrackRecord(" ELIM ");
                    top2[0].lipstick.unfavoritism += 5;
                    eliminatedCast.unshift(top2[0].lipstick);
                    bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                    currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    top2[1].lipstick.addToTrackRecord(" ELIM ");
                    top2[1].lipstick.unfavoritism += 5;
                    eliminatedCast.unshift(top2[1].lipstick);
                    bottomQueens.splice(bottomQueens.indexOf(top2[1].lipstick), 1);
                    currentCast.splice(currentCast.indexOf(top2[1].lipstick), 1);
                    doubleSashay = true;
                }
            } else {
                screen.createBold(`${top2[0].lipstick.getName()}, ${top2[1].lipstick.getName()}, you will always be an All Star, now, sashay away...`);
                top2[0].lipstick.addToTrackRecord(" ELIM ");
                top2[0].lipstick.unfavoritism += 5;
                eliminatedCast.unshift(top2[0].lipstick);
                bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
                top2[1].lipstick.addToTrackRecord(" ELIM ");
                top2[1].lipstick.unfavoritism += 5;
                eliminatedCast.unshift(top2[1].lipstick);
                bottomQueens.splice(bottomQueens.indexOf(top2[1].lipstick), 1);
                currentCast.splice(currentCast.indexOf(top2[1].lipstick), 1);
                doubleSashay = true;
            }
        }
    }
    else if (randomNumber(0, 1000) >= 995 && disqOrDept == false && currentCast.length > 5 && !smackdown) {
        screen.createImage(top2[0].image, "royalblue");
        screen.createBold(top2[0].getName() + ", you're a winner, baby!");
        if (conjoinedQueens && conjoinedCheck){
            conjoinedReturn(top2[0]);
            conjoinedCheck = false;
        }
        screen.createImage(top2[1].image, "cyan");
        screen.createParagraph(top2[1].getName() + ", you are safe.");
        screen.createHorizontalLine();
        screen.createBold("Ru, I'm going home.");
        screen.createImage(top2[0].image, "#5920d4");
        screen.createBold(top2[0].getName() + ", you will always be an All Star, now, sashay away...");
        top2[0].addToTrackRecord("WIN+QUIT");
        top2[0].QueenDisqOrDept = true;
        top2[0].favoritism += 5;
        top2[0].ppe += 5;
        top2[1].addToTrackRecord("WIN ");
        top2[1].favoritism += 4;
        top2[1].ppe += 5;
        eliminatedCast.unshift(top2[0]);
        currentCast.splice(currentCast.indexOf(top2[0]), 1);
        disqOrDept = true;
        if (chocolateBarTwist  && !chocolateBarTwistCheck) {
            if (chocolateBarCheck(top2[0]) == true) {
                chocolateBarTwistCheck = true;
            }
        }
        assasintable.push(top2[0].getName());
        assasinlipstick.push(top2[0].getName());
        assasintable.push(top2[1].getName());
        assasinlipstick.push(top2[1].lipstick.getName());
    }
    else {
        top2[0].favoritism += 5;
        top2[0].ppe += 5;
        top2[0].addToTrackRecord("WIN");
        screen.createImage(top2[0].image, "royalblue");
        screen.createBold(top2[0].getName() + ", you're a winner, baby!");
        if (conjoinedQueens && conjoinedCheck){
            conjoinedReturn(top2[0]);
            conjoinedCheck = false;
        }
        top2[1].addToTrackRecord("WIN ");
        top2[1].favoritism += 4;
        top2[1].ppe += 5;
        assasintable.push(top2[0].getName());
        assasinlipstick.push(top2[0].lipstick.getName());
        assasintable.push(top2[1].getName());
        assasinlipstick.push(top2[1].lipstick.getName());
        screen.createImage(top2[1].image, "cyan");
        screen.createParagraph(top2[1].getName() + ", you are safe.");
        screen.createHorizontalLine();
        screen.createImage(top2[0].lipstick.image, "red");
        if (chocolateBarTwist  && !chocolateBarTwistCheck) {
            screen.createBold(top2[0].lipstick.getName() + ", now your fate rests in the hands of the drag gods.");
            screen.createBold("If you have the golden chocolate bar, you will be safe.");
            if (chocolateBarCheck(top2[0].lipstick) == true) {
                screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
                screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
                screen.createBold(top2[0].lipstick.getName() + "!! Condragtulations, you are safe to slay another day!");
                top2[0].lipstick.addToTrackRecord("CHOC");
                top2[0].lipstick.unfavoritism += 3;
                top2[0].lipstick.ppe += 1;
                chocolateBarTwistCheck = true;
                bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
            } else {
                screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                screen.createBold("It's chocolate.");
                screen.createBold(`${top2[0].lipstick.getName()}, you will always be an All Star, now, sashay away...`);
                top2[0].lipstick.addToTrackRecord("ELIM");
                top2[0].lipstick.unfavoritism += 5;
                eliminatedCast.unshift(top2[0].lipstick);
                bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
                
            }
        } else {
            screen.createBold(top2[0].lipstick.getName() + ", you will always be an All Star, now, sashay away...");
            top2[0].lipstick.addToTrackRecord("ELIM");
            top2[0].lipstick.unfavoritism += 5;
            eliminatedCast.unshift(top2[0].lipstick);
            bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
            currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
        }
    }
    for (let i = 0; i < bottomQueens.length; i++) {
        if (bottomQueens.length == 3 && !disqOrDept)
            bottomQueens[i].addToTrackRecord("BTM4");
        else if (bottomQueens.length == 2 && !disqOrDept || bottomQueens.length == 2 && currentCast.length == 4)
            bottomQueens[i].addToTrackRecord("BTM3");
        else
            bottomQueens[i].addToTrackRecord("BTM2");
        bottomQueens[i].unfavoritism += 3;
        bottomQueens[i].ppe += 1;
    }
    if ((s6Premiere || s12Premiere || porkchopPremiere || s14Premiere) == true && premiereCounter < 3)
        screen.createButton("Proceed", "doublePremiere()");
    else if (CheckForReturning() == true)
        screen.createButton("Proceed", "returningQueenScreen()");
    else
        screen.createButton("Proceed", "untucked()");
}
let assasintable = [];
let assasinlipstick = [];
function lsaLipSync() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("Ladies, I've made my decision...");
    let backToWinner = false;
    if (bottomQueens[0].votes == bottomQueens[1].votes) {
        backToWinner = true;
        for (let i = 0; i < bottomQueens.length; i++) {
            if (top2[0].lipstick.getName() == bottomQueens[i].getName()) {
                assassin.lipstick = bottomQueens[i];
            }
        }
    } else {
        assassin.lipstick = bottomQueens[0];
    }
    top2.sort((a, b) => (b.lipsyncScore - a.lipsyncScore));
    if (top2[0].lipsyncScore == top2[1].lipsyncScore && top2[0].lipsyncScore > 6 && top2[1].lipsyncScore > 6 && currentCast.length > 5 && !noDouble) {
        backToWinner = false;
        screen.createImage(top2[0].image, "darkblue");
        screen.createImage(top2[1].image, "darkblue");
        screen.createBold("Condragulations, you're both winners baby!");
        top2[0].favoritism += 5;
        top2[0].ppe += 5;
        top2[1].favoritism += 5;
        top2[1].ppe += 5;
        top2[0].addToTrackRecord(" WIN");
        top2[1].addToTrackRecord(" WIN");
        screen.createHorizontalLine();
        assasintable.push(top2[0].getName() + " & " + top2[1].getName());
        assasintable.push(" ");
        if (conjoinedQueens && conjoinedCheck){
            conjoinedReturn(top2[0], top2[1]);
            conjoinedCheck = false;
        }
        if (top2[0].lipstick == top2[1].lipstick) {
            assasinlipstick.push(top2[0].lipstick.getName());
            assasinlipstick.push(" ");
            screen.createImage(top2[0].lipstick.image, "red");
            if (chocolateBarTwist  && !chocolateBarTwistCheck) {
                screen.createBold(top2[0].lipstick.getName() + ", now your fate rests in the hands of the drag gods.");
                screen.createBold("If you have the golden chocolate bar, you will be safe.");
                if (chocolateBarCheck(top2[0].lipstick) == true) {
                    screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
                    screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
                    screen.createBold(top2[0].lipstick.getName() + "!! Condragulations, you are safe to slay another day!");
                    top2[0].lipstick.addToTrackRecord("CHOC");
                    top2[0].lipstick.unfavoritism += 3;
                    top2[0].lipstick.ppe += 1;
                    chocolateBarTwistCheck = true;
                    bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                } else {
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    screen.createBold(`${top2[0].lipstick.getName()}, you will always be an All Star, now, sashay away...`);
                    top2[0].lipstick.addToTrackRecord("ELIM");
                    top2[0].lipstick.unfavoritism += 5;
                    eliminatedCast.unshift(top2[0].lipstick);
                    bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                    currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
                }
            } else {
                screen.createBold(`${top2[0].lipstick.getName()}, you will always be an All Star, now, sashay away...`);
                top2[0].lipstick.addToTrackRecord("ELIM");
                top2[0].lipstick.unfavoritism += 5;
                eliminatedCast.unshift(top2[0].lipstick);
                bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
            }
        } else {
            screen.createImage(top2[0].lipstick.image, "red");
            screen.createImage(top2[1].lipstick.image, "red");
            assasinlipstick.push(top2[0].lipstick.getName() + " & " + top2[1].lipstick.getName());
            assasinlipstick.push(" ");
            if (chocolateBarTwist  && !chocolateBarTwistCheck) {
                screen.createBold(top2[0].lipstick.getName() + ", " + top2[1].lipstick.getName() + ", now your fates rests in the hands of the drag gods.");
                screen.createBold("If one of you have the golden chocolate bar, that queen will be safe.");
                if (chocolateBarCheck(top2[0].lipstick, top2[1].lipstick) == 1) {
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    top2[1].lipstick.addToTrackRecord("ELIM");
                    top2[1].lipstick.unfavoritism += 5;
                    eliminatedCast.unshift(top2[1].lipstick);
                    bottomQueens.splice(bottomQueens.indexOf(top2[1].lipstick), 1);
                    currentCast.splice(currentCast.indexOf(top2[1].lipstick), 1);
                    screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
                    screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
                    screen.createBold(top2[0].lipstick.getName() + "!! Condragulations, you are safe to slay another day!");
                    top2[0].lipstick.addToTrackRecord("CHOC");
                    top2[0].lipstick.unfavoritism += 3;
                    top2[0].lipstick.ppe += 1;
                    bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                    chocolateBarTwistCheck = true;
                } else if (chocolateBarCheck(top2[0].lipstick, top2[1].lipstick) == 2) {
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    top2[0].lipstick.addToTrackRecord("ELIM");
                    top2[0].lipstick.unfavoritism += 5;
                    eliminatedCast.unshift(top2[0].lipstick);
                    bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                    currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
                    screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
                    screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
                    screen.createBold(top2[1].lipstick.getName() + "!! Condragulations, you are safe to slay another day!");
                    top2[1].lipstick.addToTrackRecord("CHOC");
                    top2[1].lipstick.unfavoritism += 3;
                    top2[1].lipstick.ppe += 1;
                    bottomQueens.splice(bottomQueens.indexOf(top2[1].lipstick), 1);
                    chocolateBarTwistCheck = true;
                } else {
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    top2[0].lipstick.addToTrackRecord(" ELIM ");
                    top2[0].lipstick.unfavoritism += 5;
                    eliminatedCast.unshift(top2[0].lipstick);
                    bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                    currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    top2[1].lipstick.addToTrackRecord(" ELIM ");
                    top2[1].lipstick.unfavoritism += 5;
                    eliminatedCast.unshift(top2[1].lipstick);
                    bottomQueens.splice(bottomQueens.indexOf(top2[1].lipstick), 1);
                    currentCast.splice(currentCast.indexOf(top2[1].lipstick), 1);
                    doubleSashay = true;
                }
            } else {
                screen.createBold(`${top2[0].lipstick.getName()}, ${top2[1].lipstick.getName()}, you will always be an All Star, now, sashay away...`);
                top2[0].lipstick.addToTrackRecord(" ELIM ");
                top2[0].lipstick.unfavoritism += 5;
                eliminatedCast.unshift(top2[0].lipstick);
                bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
                top2[1].lipstick.addToTrackRecord(" ELIM ");
                top2[1].lipstick.unfavoritism += 5;
                eliminatedCast.unshift(top2[1].lipstick);
                bottomQueens.splice(bottomQueens.indexOf(top2[1].lipstick), 1);
                currentCast.splice(currentCast.indexOf(top2[1].lipstick), 1);
                doubleSashay = true;
            }
        }
    } else {
        screen.createImage(top2[0].image, "darkblue");
        screen.createBold(top2[0].getName() + ", you're a winner baby!");
        if (top2[0] == assassin) {
            screen.createImage(top2[1].image, "cyan");
            screen.createParagraph(top2[1].getName() + ", you're safe.");
            top2[1].addToTrackRecord("WIN ");
            top2[1].favoritism += 5;
            top2[1].ppe += 5;
            assasintable.push(top2[0].getName());
            assasinlipstick.push(top2[0].lipstick.getName());
            assasintable.push(top2[1].getName());
            assasinlipstick.push(top2[1].lipstick.getName());
        }
        else {
            screen.createImage(top2[1].image, "cyan");
            screen.createParagraph(top2[1].getName() + ", thanks for participating.");
            top2[0].addToTrackRecord("WIN");
            top2[0].favoritism += 5;
            top2[0].ppe += 5;
            assasintable.push(top2[0].getName());
            assasinlipstick.push(top2[0].lipstick.getName());
            assasintable.push(top2[1].getName());
            assasinlipstick.push(top2[1].lipstick.getName());
        }
        if (backToWinner && top2[0].getName() == assassin.getName()) {
            screen.createBold("As there was a tie in the voting, the power returns to the challenge winner!");
            top2[1].editTrackRecord("TIE");
        }
        allQueens.splice(allQueens.indexOf(assassin), 1);
        screen.createHorizontalLine();
        screen.createImage(top2[0].lipstick.image, "red");
        if (chocolateBarTwist  && !chocolateBarTwistCheck) {
            screen.createBold(top2[0].lipstick.getName() + ", now your fate rests in the hands of the drag gods.");
            screen.createBold("If you have the golden chocolate bar, you will be safe.");
            if (chocolateBarCheck(top2[0].lipstick) == true) {
                screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
                screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
                screen.createBold(top2[0].lipstick.getName() + "!! Condragtulations, you are safe to slay another day!");
                top2[0].lipstick.addToTrackRecord("CHOC");
                top2[0].lipstick.unfavoritism += 3;
                top2[0].lipstick.ppe += 1;
                top2[0].lipstick.votes = 0;
                chocolateBarTwistCheck = true;
                bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                
            } else {
                screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                screen.createBold("It's chocolate.");
                screen.createBold(`${top2[0].lipstick.getName()}, you will always be an All Star, now, sashay away...`);
                top2[0].lipstick.addToTrackRecord("ELIM");
                top2[0].lipstick.unfavoritism += 5;
                top2[0].lipstick.votes = 0;
                eliminatedCast.unshift(top2[0].lipstick);
                bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
                
            }
        } else {
            screen.createBold(top2[0].lipstick.getName() + ", you will always be an All Star, now, sashay away...");
            top2[0].lipstick.addToTrackRecord("ELIM");
            top2[0].lipstick.unfavoritism += 5;
            top2[0].lipstick.votes = 0;
            eliminatedCast.unshift(top2[0].lipstick);
            bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
            currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1); 
        }
    }
    for (let i = 0; i < bottomQueens.length; i++) {
        if (bottomQueens.length == 4)
            bottomQueens[i].addToTrackRecord("BTM5");
        else if (bottomQueens.length == 3)
            bottomQueens[i].addToTrackRecord("BTM4");
        else if (bottomQueens.length == 2)
            bottomQueens[i].addToTrackRecord("BTM3");
        else
            bottomQueens[i].addToTrackRecord("BTM2");
        bottomQueens[i].unfavoritism += 2;
        bottomQueens[i].ppe += 1;
        bottomQueens[i].votes = 0;
    }
    if ((s6Premiere || s12Premiere || porkchopPremiere || s14Premiere) == true && premiereCounter < 3)
        screen.createButton("Proceed", "doublePremiere()");
    else if (CheckForReturning() == true)
        screen.createButton("Proceed", "returningQueenScreen()");
    else
        screen.createButton("Proceed", "untucked()");
}
let dragBlocked;
let dragGive;
function awLipsync(giveAway) {
    for (let i = 0; i < top2.length; i++) {
        top2[i].getASLipsync();
    }
    top2.sort((a, b) => (b.lipsyncScore - a.lipsyncScore));
    let screen = new Scene();
    screen.clean();
    screen.createHeader("It's time...");
    screen.createBold("For you to lip-sync... for your legacy! Good luck, and don't fuck it up.");
    lsSong();
    screen.createHorizontalLine();
    screen.createBold("Ladies, I've made my decision...");
    if (top2[0].lipsyncScore == top2[1].lipsyncScore && top2[0].lipsyncScore > 6 && top2[1].lipsyncScore > 6 && currentCast.length > 5) {
        dragBlocked = who2Block(top2[0], top2[1]);
        screen.createImage(top2[0].image, "darkblue");
        screen.createImage(top2[1].image, "darkblue");
        screen.createBold("Condragulations, you're both winners baby!");
        top2[0].favoritism += 5;
        top2[0].ppe += 5;
        top2[1].favoritism += 5;
        top2[1].ppe += 5;
        top2[0].addToTrackRecord(" WIN");
        top2[1].addToTrackRecord(" WIN");
        screen.createHorizontalLine();
        if (episodeCount == 10 && currentCast.length <= 10 || episodeCount == 11 && currentCast.length <= 10 || episodeCount == 13 && currentCast.length > 10 || episodeCount == 14 && currentCast.length > 10) {
            screen.createBold("No one is getting blocked tonight!");
        } else {
            screen.createImage(top2[0].image, "darkblue");
            screen.createImage(dragBlocked.image, "red");
            screen.createBold(top2[0].getName() + " has given the platinum plunger to... " + dragBlocked.getName());
            dragBlocked.blocked = true;
            dragBlocked.editTrackRecord("+BLOCKED");
            if (randomNumber(0, 100) >= 80) {
                modRelation(2, 4, top2[0], dragBlocked);
                screen.createBold(dragBlocked.getName() + " felt very upset.");
            } else {
                modRelation(2, 3, top2[0], dragBlocked);
                screen.createBold(dragBlocked.getName() + " took it great, they weren't too mad.");
            }
            dragBlocked = who2Block(top2[1], top2[0]);
            screen.createImage(top2[1].image, "darkblue");
            screen.createImage(dragBlocked.image, "red");
            screen.createBold(top2[1].getName() + " has given the platinum plunger to... " + dragBlocked.getName());
            dragBlocked.blocked = true;
            dragBlocked.editTrackRecord("+BLOCKED");
            if (randomNumber(0, 100) >= 80) {
                modRelation(2, 4, top2[1], dragBlocked);
                screen.createBold(dragBlocked.getName() + " felt very upset.");
            } else {
                modRelation(2, 3, top2[1], dragBlocked);
                screen.createBold(dragBlocked.getName() + " took it great, they weren't too mad.");
            }
        }
    } else {
        dragBlocked = who2Block(top2[0], top2[1]);
        top2[0].favoritism += 5;
        top2[0].ppe += 5;
        top2[0].addToTrackRecord("WIN");
        screen.createImage(top2[0].image, "royalblue");
        screen.createBold(top2[0].getName() + ", you're a winner, baby!");
        top2[1].addToTrackRecord("WIN ");
        top2[1].favoritism += 4;
        top2[1].ppe += 5;
        screen.createImage(top2[1].image, "cyan");
        screen.createParagraph(top2[1].getName() + ", you are safe.");
        screen.createHorizontalLine();
        if (episodeCount == 10 && currentCast.length <= 10 || episodeCount == 11 && currentCast.length <= 10 || episodeCount == 13 && currentCast.length > 10 || episodeCount == 14 && currentCast.length > 10) {
            screen.createBold("No one is getting blocked tonight!");
        } else {
            screen.createImage(top2[0].image, "darkblue");
            screen.createImage(dragBlocked.image, "red");
            screen.createBold(top2[0].getName() + " has given the platinum plunger to... " + dragBlocked.getName());
            dragBlocked.blocked = true;
            dragBlocked.editTrackRecord("+BLOCKED");
            if (randomNumber(0, 100) >= 80) {
                modRelation(2, 4, top2[0], dragBlocked);
                screen.createBold(dragBlocked.getName() + " felt very upset.");
            } else {
                modRelation(2, 3, top2[0], dragBlocked);
                screen.createBold(dragBlocked.getName() + " took it great, they weren't too mad.");
            }
        }
    }
    if (giveAway) {
        dragGive = who2Give(top2[0], top2[1]);
        screen.createHorizontalLine();
        screen.createImage(top2[0].image, "deepskyblue");
        screen.createImage(dragGive.image, "gold");
        screen.createBold(top2[0].getName() + " has given the star to... " + dragGive.getName());
        dragGive.stars++;
        if (randomNumber(0, 100) >= 80) {
            modRelation(2, 2, top2[0], dragBlocked);
            screen.createBold(dragGive.getName() + " felt very grateful.");
        } else {
            modRelation(2, 1, top2[0], dragBlocked);
            screen.createBold(dragGive.getName() + " said thank you.");
        }
        dragGive = who2Give(top2[1], top2[0]);
        screen.createImage(top2[1].image, "deepskyblue");
        screen.createImage(dragGive.image, "gold");
        screen.createBold(top2[1].getName() + " has given the star to... " + dragGive.getName());
        dragGive.stars++
        if (randomNumber(0, 100) >= 80) {
            modRelation(2, 2, top2[1], dragBlocked);
            screen.createBold(dragGive.getName() + " felt very grateful.");
        } else {
            modRelation(2, 1, top2[1], dragBlocked);
            screen.createBold(dragGive.getName() + " said thank you.");
        }
    }
    screen.createButton("Proceed", "untucked()");
}
class Queen {
    constructor(name, acting, comedy, dance, design, improv, runway, lipsync, image = "noimage", custom = false) {
        this.trackRecord = [];
        this.friends = [];
        this.enemies = [];
        this.sisters = [];
        this.miniEpisode = [];
        this.runwayScore = 0;
        this.lipsyncScore = 0;
        this.performanceScore = 0;
        this.finaleScore = 0;
        this.favoritism = 0;
        this.unfavoritism = 0;
        this.ppe = 0;
        this.stars = 0;
        this.episodesOn = 0;
        this.votes = 0;
        this.rankP = 0;
        this.blocked = false;
        this.QueenDisqOrDept = false;
        this.customqueen = false;
        this.chocolate = false;
        this.maxiT = false;
        this._name = name;
        this._actingStat = acting;
        this._comedyStat = comedy;
        this._danceStat = dance;
        this._designStat = design;
        this._improvStat = improv;
        this._runwayStat = runway;
        this._lipsyncStat = lipsync;
        if (image == "noimage")
            this.image = "image/queens/noimage.jpg";
        else if (custom == true)
            this.image = image;
        else
            this.image = "image/queens/" + image + ".webp";
    }
    _calculateScores(min, max, stat = 0) {
        let score = randomNumber(min, max);
        return score - stat;
    }
    getName() {
        return this._name;
    }
    getLipSyncStat() {
        return this._lipsyncStat;
    }
    getActing() {
        this.performanceScore = this._calculateScores(15, 35, this._actingStat);
    }
    getComedy() {
        this.performanceScore = this._calculateScores(15, 35, this._comedyStat);
    }
    getMarketing() {
        this.performanceScore = this._calculateScores(25, 45, this._comedyStat + this._actingStat);
    }
    getDance() {
        this.performanceScore = this._calculateScores(15, 35, this._danceStat);
    }
    getDesign() {
        this.performanceScore = this._calculateScores(15, 35, this._designStat);
    }
    getRunwayChallenge() {
        this.performanceScore = this._calculateScores(15, 35, this._runwayStat);
    }
    getImprov() {
        this.performanceScore = this._calculateScores(15, 35, this._improvStat);
    }
    //special 'gets':
    getSnatch() {
        this.performanceScore = this._calculateScores(25, 45, this._improvStat + this._comedyStat);
    }
    getRusical() {
        this.performanceScore = this._calculateScores(25, 45, this._danceStat + this._lipsyncStat);
    }
    getBall() {
        this.performanceScore = this._calculateScores(25, 45, this._designStat + this._runwayStat);
    }
    getRumix() {
        this.performanceScore = this._calculateScores(25, 45, this._danceStat + this._improvStat);
    }
    getTalentShow() {
        this.performanceScore = this._calculateScores(15, 35, randomNumber(15, 35));
    }
    getFinale() {
        this.finaleScore = this.favoritism - this.unfavoritism;
    }
    getRunway() {
        this.runwayScore = this._calculateScores(12, 35, this._runwayStat);
    }
    getLipsync() {
        this.lipsyncScore = this._calculateScores(0, this._lipsyncStat, this.unfavoritism) + this.favoritism;
    }
    getASLipsync() {
        this.lipsyncScore = this._calculateScores(0, this._lipsyncStat);
    }
    addToTrackRecord(placement) {
        this.trackRecord.push(placement);
    }
    editTrackRecord(added) {
        this.trackRecord[this.trackRecord.length - 1] += added;
    }
}
//QUEENS:
//SEASON 1: 
let akashia = new Queen("Akashia", 3, 2, 7, 3, 2, 7, 11, "Akashia");
let bebe = new Queen("BeBe Zahara Benet", 6, 7, 8, 12, 6, 10, 9, "BeBe");
let jade = new Queen("Jade Sotomayor", 3, 3, 8, 7, 3, 7, 7, "Jade");
let ninaf = new Queen("Nina Flowers", 7, 5, 5, 11, 6, 10, 6, "NinaFlowers");
let ongina = new Queen("Ongina", 9, 8, 7, 9, 10, 9, 8, "Ongina");
let rebecca = new Queen("Rebecca Glasscock", 3, 3, 6, 4, 2, 6, 5, "Rebecca");
let shannel = new Queen("Shannel", 5, 5, 5, 9, 4, 11, 7, "Shannel");
let tammie = new Queen("Tammie Brown", 6, 7, 5, 7, 6, 7, 6, "Tammie");
let victoria = new Queen("Victoria 'Porkchop' Parker", 3, 6, 4, 3, 6, 5, 4, "Victoria");
let us_season1 = [akashia, bebe, jade, ninaf, ongina, rebecca, shannel, tammie, victoria];
//SEASON 2:       acting, comedy, dance, design, improv, runway, lipsync
let jessica = new Queen("Jessica Wild", 8, 6, 9, 7, 8, 8, 10, "Jessica");
let jujubee = new Queen("Jujubee", 9, 11, 7, 8, 12, 6, 12, "Jujubee");
let morgan = new Queen("Morgan McMichaels", 6, 6, 10, 9, 5, 10, 10, "Morgan");
let mystique = new Queen("Mystique Summers Madison", 4, 5, 3, 3, 3, 5, 6, "Mystique");
let nicole = new Queen("Nicole Paige Brooks", 4, 4, 4, 6, 4, 7, 6, "Nicole");
let pandora = new Queen("Pandora Boxx", 12, 11, 6, 8, 10, 8, 7, "Pandora");
let raven = new Queen("Raven", 5, 8, 9, 10, 5, 8, 11, "Raven");
let sahara = new Queen("Sahara Davenport", 6, 6, 10, 4, 6, 7, 10, "Sahara");
let shangela = new Queen("Shangela", 14, 13, 10, 3, 9, 9, 12, "Shangela");
let sonique = new Queen("Kylie Sonique Love", 11, 9, 10, 9, 8, 11, 11, "Kylie");
let tatianna = new Queen("Tatianna", 8, 11, 8, 8, 10, 8, 10, "Tatianna");
let tyra = new Queen("King Tyra", 11, 7, 8, 11, 8, 9, 10, "Tyra");
let us_season2 = [jessica, jujubee, morgan, mystique, nicole, pandora, raven, sahara, shangela, sonique, tatianna, tyra];
//SEASON 3:
let alexis = new Queen("Alexis Mateo", 14, 12, 9, 7, 10, 8, 12, "Alexis");
let carmen = new Queen("Carmen Carrera", 3, 8, 6, 4, 3, 7, 7, "Carmen");
let delta = new Queen("Delta Work", 4, 6, 5, 5, 5, 7, 7, "Delta");
let india = new Queen("India Ferrah", 6, 4, 8, 6, 3, 10, 9, "India");
let manila = new Queen("Manila Luzon", 12, 11, 7, 14, 10, 13, 11, "Manila");
let mariah = new Queen("Mariah Paris Balenciaga", 6, 4, 7, 8, 4, 9, 8, "Mariah");
let mimi = new Queen("Mimi Imfurst", 11, 6, 6, 10, 7, 8, 6, "Mimi");
let phoenix = new Queen("Phoenix", 3, 3, 6, 5, 3, 5, 4, "Phoenix");
let raja = new Queen("Raja", 11, 13, 6, 14, 12, 14, 9, "Raja");
let stacey = new Queen("Stacy Layne Matthews", 6, 7, 5, 4, 10, 5, 6, "Stacy");
let venus = new Queen("Venus D-Lite", 4, 5, 8, 2, 3, 5, 2, "Venus");
let yara = new Queen("Yara Sofia", 11, 9, 9, 13, 7, 10, 8, "Yara");
let us_season3 = [alexis, carmen, delta, india, manila, mariah, mimi, phoenix, raja, shangela, stacey, venus, yara];
//SEASON 4:
let alisa = new Queen("Alisa Summers", 4, 4, 5, 2, 3, 5, 4, "Alisa");
let chad = new Queen("Chad Michaels", 11, 10, 8, 9, 12, 10, 8, "Chad");
let dida = new Queen("Dida Ritz", 8, 7, 8, 5, 7, 7, 12, "Dida");
let jiggly = new Queen("Jiggly Caliente", 4, 6, 9, 4, 4, 7, 10, "Jiggly");
let kenya = new Queen("Kenya Olivera", 9, 6, 6, 6, 8, 7, 8, "Kenya");
let leshauwn = new Queen("Lashauwn Beyond", 4, 4, 6, 11, 5, 7, 7, "Lashauwn");
let latrice = new Queen("Latrice Royale", 11, 8, 9, 8, 7, 9, 13, "Latrice");
let madame = new Queen("Madame LaQueer", 4, 7, 6, 5, 9, 7, 6, "Madame");
let milan = new Queen("Milan", 4, 5, 9, 7, 5, 8, 10, "Milan");
let phiphi = new Queen("Jaremi Carey", 13, 9, 8, 10, 10, 10, 8, "PhiPhi");
let princess = new Queen("The Princess", 4, 4, 5, 7, 4, 7, 7, "Princess");
let willam = new Queen("Willam", 10, 8, 7, 10, 10, 9, 8, "Willam");
let us_season4 = [alisa, chad, dida, jiggly, kenya, leshauwn, latrice, madame, milan, phiphi, princess, willam];
//ALL STARS 1:
let allstars_1 = [alexis, chad, jujubee, latrice, manila, mimi, ninaf, pandora, raven, shannel, tammie, yara];
//SEASON 5:   acting, comedy, dance, design, improv, runway, lipsync
let alaska = new Queen("Alaska", 15, 14, 7, 8, 14, 10, 11, "Alaska");
let alyssa = new Queen("Alyssa Edwards", 4, 6, 15, 6, 10, 9, 12, "Alyssa");
let coco = new Queen("Coco Montrese", 10, 10, 11, 9, 7, 9, 15, "Coco");
let detox = new Queen("Detox", 10, 9, 9, 9, 8, 12, 11, "Detox");
let honey = new Queen("Honey Mahogany", 10, 3, 3, 6, 6, 8, 4, "Honey");
let ivy = new Queen("Ivy Winters", 11, 4, 8, 12, 7, 10, 7, "Ivy");
let jadejolie = new Queen("Jade Jolie", 5, 7, 8, 7, 8, 7, 8, "JadeJ");
let jinkx = new Queen("Jinkx Monsoon", 15, 15, 9, 8, 15, 9, 8, "Jinkx");
let lineysha = new Queen("Lineysha Sparx", 10, 4, 7, 11, 5, 9, 8, "Lineysha");
let monica = new Queen("Monica Beverly Hillz", 4, 4, 6, 6, 3, 8, 8, "Monica");
let penny = new Queen("Penny Tration", 4, 5, 4, 5, 5, 5, 4, "Penny");
let roxxxy = new Queen("Roxxxy Andrews", 7, 4, 7, 11, 8, 10, 12, "Roxxxy");
let serena = new Queen("Serena ChaCha", 3, 3, 7, 4, 5, 5, 8, "Serena");
let vivienne = new Queen("Vivienne Pinay", 7, 3, 4, 5, 3, 6, 4, "Vivienne");
let us_season5 = [alaska, alyssa, coco, detox, honey, ivy, jadejolie, jinkx, lineysha, monica, penny, roxxxy, serena, vivienne];
//SEASON 6:
let adore = new Queen("Adore Delano", 9, 11, 9, 6, 9, 8, 11, "Adore");
let april = new Queen("April Carrión", 5, 5, 6, 9, 5, 9, 8, "April");
let bendelacreme = new Queen("BenDeLaCreme", 12, 12, 11, 10, 15, 10, 9, "Bendelacreme");
let bianca = new Queen("Bianca Del Rio", 11, 15, 7, 13, 15, 10, 5, "Bianca");
let courtney = new Queen("Courtney Act", 11, 8, 10, 10, 10, 12, 9, "Courtney");
let darienne = new Queen("Darienne Lake", 11, 8, 7, 4, 9, 8, 13, "Darienne");
let gia = new Queen("Gia Gunn", 10, 4, 8, 8, 4, 8, 9, "Gia");
let joslyn = new Queen("Joslyn Fox", 6, 7, 8, 6, 8, 8, 11, "Joslyn");
let kelly = new Queen("Kelly Mantle", 6, 6, 5, 5, 4, 7, 4, "Kellu");
let laganja = new Queen("Laganja Estranja", 9, 5, 14, 8, 6, 10, 15, "Laganja");
let magnolia = new Queen("Magnolia Crawford", 4, 5, 6, 4, 5, 7, 4, "Magnolia");
let milk = new Queen("Milk", 6, 6, 7, 8, 8, 7, 7, "Milk");
let trinityk = new Queen("Trinity K. Bonet", 9, 9, 13, 12, 4, 10, 15, "TrinityKB");
let vivacious = new Queen("Vivacious", 4, 5, 5, 4, 4, 7, 7, "Vivacious");
let us_season6 = [adore, april, bendelacreme, bianca, courtney, darienne, gia, joslyn, kelly, laganja, magnolia, milk, trinityk, vivacious];
//SEASON 7: 
let ginger = new Queen("Ginger Minj", 14, 12, 8, 9, 15, 7, 12, "Ginger");
let jaidynn = new Queen("Jaidynn Diore Fierce", 9, 7, 8, 6, 6, 7, 11, "Jaidynn");
let jasmine = new Queen("Jasmine Masters", 3, 4, 6, 5, 2, 7, 6, "Jasmine");
let kandy = new Queen("Kandy Ho", 4, 4, 7, 5, 4, 7, 10, "KandyH");
let katya = new Queen("Katya", 9, 12, 9, 7, 12, 10, 10, "Katya");
let kennedy = new Queen("Kennedy Davenport", 9, 8, 10, 8, 11, 10, 14, "Kennedy");
let max = new Queen("Max", 10, 7, 5, 8, 4, 8, 5, "Max");
let fame = new Queen("Miss Fame", 8, 4, 5, 11, 3, 10, 5, "MissFame");
let kasha = new Queen("Mrs. Kasha Davis", 11, 8, 9, 8, 6, 8, 7, "Kasha");
let pearl = new Queen("Pearl", 7, 10, 8, 9, 10, 9, 5, "Pearl");
let sashab = new Queen("Frisbee Jenkins", 6, 6, 4, 4, 6, 6, 4, "SashaB");
let tempest = new Queen("Tempest DuJour", 6, 6, 5, 3, 6, 7, 4, "Tempest");
let trixie = new Queen("Trixie Mattel", 13, 10, 6, 10, 11, 10, 5, "Trixie");
let violet = new Queen("Violet Chachki", 6, 7, 8, 15, 8, 13, 8, "Violet");
let us_season7 = [ginger, jaidynn, jasmine, kandy, katya, kennedy, max, fame, kasha, pearl, sashab, tempest, trixie, violet];
//SEASON 8:  acting, comedy, dance, design, improv, runway, lipsync
let acid = new Queen("Acid Betty", 9, 4, 7, 10, 5, 11, 7, "Acid");
let bob = new Queen("Bob The Drag Queen", 15, 15, 8, 9, 15, 8, 12, "Bob");
let chichi = new Queen("Chi Chi DeVayne", 8, 4, 13, 8, 6, 8, 13, "ChiChi");
let cynthia = new Queen("Cynthia Lee Fontaine", 4, 4, 7, 6, 4, 7, 6, "Cynthia");
let dax = new Queen("Dax ExclamationPoint", 5, 6, 6, 5, 6, 5, 4, "Dax");
let derrick = new Queen("Derrick Barry", 7, 7, 8, 8, 9, 7, 8, "Derrick");
let kim = new Queen("Kim Chi", 10, 7, 4, 15, 8, 13, 4, "Kim");
let laila = new Queen("Laila McQueen", 6, 6, 4, 7, 6, 8, 7, "Laila");
let naomi = new Queen("Naomi Smalls", 9, 7, 10, 14, 10, 12, 11, "Naomi");
let naysha = new Queen("Naysha Lopez", 6, 4, 4, 4, 3, 6, 7, "Naysga");
let robbie = new Queen("Robbie Turner", 4, 5, 6, 4, 3, 6, 6, "Robbie");
let thorgy = new Queen("Thorgy Thor", 14, 9, 6, 9, 13, 9, 8, "Thorgy");
let us_season8 = [acid, bob, chichi, cynthia, dax, derrick, kim, laila, naomi, naysha, robbie, thorgy];
//ALL STARS 2:
let allstars_2 = [adore, alaska, alyssa, coco, detox, ginger, katya, phiphi, roxxxy, tatianna];
//SEASON 9: 
let aja = new Queen("Aja LaBeija", 4, 8, 12, 11, 9, 10, 11, "Aja");
let alexism = new Queen("Alexis Michelle", 8, 7, 9, 7, 13, 6, 10, "AlexisM");
let charlie = new Queen("Charlie Hides", 10, 6, 5, 7, 4, 9, 2, "Charlie");
let eureka = new Queen("Eureka!", 9, 11, 8, 10, 13, 10, 12, "Eureka");
let farrah = new Queen("Farrah Moan", 9, 4, 7, 3, 6, 8, 7, "Farrah");
let jaymes = new Queen("Jaymes Mansfield", 6, 6, 3, 6, 5, 7, 6, "Jaymes");
let kimora = new Queen("Kimora Blac", 5, 5, 4, 6, 5, 8, 7, "Kimora");
let ninab = new Queen("Nina Bo'Nina Brown", 4, 8, 10, 9, 10, 10, 11, "NinaBB");
let peppermint = new Queen("Peppermint", 11, 9, 10, 9, 4, 7, 13, "Peppermint");
let sasha = new Queen("Sasha Velour", 9, 10, 8, 10, 11, 13, 11, "Sasha");
let shea = new Queen("Shea Couleé", 13, 12, 15, 13, 11, 15, 15, "Shea");
let trinity = new Queen("Trinity The Tuck", 13, 11, 9, 15, 10, 13, 11, "TrinityTT");
let valentina = new Queen("Valentina", 11, 7, 10, 9, 9, 9, 10, "Valentina");
let us_season9 = [aja, alexism, charlie, cynthia, eureka, farrah, jaymes, kimora, ninab, peppermint, sasha, shea, trinity, valentina];
//ALL STARS 3:
let allstars_3 = [aja, bebe, bendelacreme, chichi, kennedy, milk, morgan, shangela, thorgy, trixie];
//SEASON 10: 
let aquaria = new Queen("Aquaria", 6, 11, 8, 15, 12, 14, 11, "Aquaria");
let asia = new Queen("Asia O'Hara", 11, 9, 6, 6, 7, 9, 9, "Asia");
let blair = new Queen("Blair St. Clair", 9, 8, 6, 10, 8, 8, 7, "Blair");
let dusty = new Queen("Dusty Ray Bottoms", 8, 8, 6, 7, 6, 7, 6, "Dusty");
let kalorie = new Queen("Kalorie K. Williams", 6, 6, 6, 5, 7, 7, 8, "Kalorie");
let kameron = new Queen("Kameron Michaels", 5, 8, 14, 10, 8, 8, 15, "Kameron");
let mayhem = new Queen("Mayhem Miller", 4, 8, 9, 13, 7, 9, 10, "Mayhem");
let miz = new Queen("Miz Cracker", 13, 11, 5, 12, 15, 9, 8, "Miz");
let monet = new Queen("Monét X Change", 11, 11, 14, 9, 10, 10, 15, "Monet");
let monique = new Queen("Mo Heart", 12, 9, 8, 11, 15, 13, 10, "Monique");
let vanessa = new Queen("Vanessa 'Vanjie' Mateo", 9, 6, 8, 6, 9, 7, 11, "Vanjie");
let vixen = new Queen("The Vixen", 5, 4, 12, 9, 3, 8, 12, "Vixen");
let yuhua = new Queen("Yuhua Hamasaki", 4, 4, 6, 9, 6, 7, 7, "Yuhua");
let us_season10 = [aquaria, asia, blair, dusty, eureka, kalorie, kameron, mayhem, miz, monet, monique, vanessa, vixen, yuhua];
//ALL STARS 4:
let allstars_4 = [farrah, gia, jasmine, latrice, manila, monet, monique, naomi, trinity, valentina];
//SEASON 11:  acting, comedy, dance, design, improv, runway, lipsync
let akeria = new Queen("A'keria C. Davenport", 11, 9, 11, 8, 10, 13, 10, "Akeria");
let ariel = new Queen("Ariel Versace", 8, 6, 8, 5, 8, 8, 8, "Ariel");
let brooke = new Queen("Brooke Lynn Hytes", 8, 8, 13, 12, 8, 10, 13, "Brooke");
let honeyd = new Queen("Honey Davenport", 4, 6, 5, 7, 4, 9, 4, "HoneyD");
let kahanna = new Queen("Kahanna Montrese", 4, 5, 5, 4, 5, 6, 8, "Kahanna");
let mercedes = new Queen("Mercedes Iman Diamond", 4, 6, 4, 6, 6, 8, 8, "Mercedes");
let ninaw = new Queen("Nina West", 12, 11, 6, 8, 11, 8, 6, "NinaW");
let plastique = new Queen("Plastique Tiara", 10, 7, 8, 11, 8, 10, 9, "Plastique");
let rajah = new Queen("Ra'Jah O'Hara", 6, 8, 11, 13, 8, 11, 13, "Rajah");
let scarlet = new Queen("Scarlet Envy", 13, 7, 6, 13, 8, 10, 7, "Scarlet");
let shuga = new Queen("Shuga Cain", 10, 9, 7, 6, 7, 10, 7, "Shuga");
let silky = new Queen("Silky Nutmeg Ganache", 10, 8, 9, 6, 10, 8, 11, "Silky");
let yvie = new Queen("Yvie Oddly", 12, 7, 13, 12, 9, 12, 15, "Yvie");
let us_season11 = [akeria, ariel, brooke, honeyd, kahanna, mercedes, ninaw, plastique, rajah, scarlet, shuga, silky, vanessa, yvie];
//SEASON 12: 
let aiden = new Queen("Aiden Zhane", 9, 3, 6, 4, 3, 6, 6, "Aiden");
let brita = new Queen("Brita", 7, 8, 7, 4, 6, 8, 11, "Brita");
let crystal = new Queen("Crystal Methyd", 6, 8, 8, 9, 8, 12, 6, "CrystalM");
let dahlia = new Queen("Dahlia Sin", 4, 4, 6, 5, 5, 10, 4, "Dahlia");
let gigi = new Queen("Gigi Goode", 10, 11, 11, 13, 9, 12, 8, "Gigi");
let heidi = new Queen("Heidi N Closet", 6, 9, 11, 6, 12, 7, 13, "Heidi");
let jackie = new Queen("Jackie Cox", 11, 12, 6, 6, 13, 9, 11, "Jackie");
let jaida = new Queen("Jaida Essence Hall", 8, 5, 10, 15, 8, 13, 12, "Jaida");
let jan = new Queen("Jan", 8, 4, 12, 9, 5, 10, 9, "Jan");
let nicky = new Queen("Nicky Doll", 4, 4, 5, 12, 3, 11, 5, "Nicky");
let rock = new Queen("Rock M. Sakura", 6, 6, 6, 4, 8, 8, 7, "Rock");
let widow = new Queen("Widow Von'Du", 11, 7, 13, 8, 11, 10, 15, "Widow");
let us_season12 = [aiden, brita, crystal, dahlia, gigi, heidi, jackie, jaida, jan, nicky, rock, widow];
//ALL STARS 5
let allstars_5 = [alexis, blair, derrick, india, jujubee, mariah, mayhem, miz, ongina, shea];
//SEASON 13
let denali = new Queen("Denali", 4, 8, 14, 9, 10, 11, 13, "Denali");
let elliott = new Queen("Elliott With 2 Ts", 5, 5, 12, 9, 3, 8, 11, "Elliott");
let mik = new Queen("Gottmik", 8, 11, 6, 13, 12, 13, 6, "Gottmik");
let joey = new Queen("Joey Jay", 6, 7, 6, 5, 5, 7, 7, "Joey");
let kahmora = new Queen("Kahmora Hall", 3, 4, 3, 5, 4, 12, 4, "Kahmora");
let kandym = new Queen("Kandy Muse", 9, 10, 5, 6, 7, 8, 14, "KandyM");
let lala = new Queen("LaLa Ri", 5, 7, 10, 2, 6, 9, 14, "Lala");
let olivia = new Queen("Liv Lux Miyake-Mugler", 11, 5, 11, 10, 8, 11, 8, "Olivia");
let rose = new Queen("Rosé", 12, 11, 13, 8, 10, 10, 6, "Rose");
let symone = new Queen("Symone", 14, 7, 7, 9, 12, 9, 13, "Symone");
let tamisha = new Queen("Tamisha Iman", 7, 6, 7, 5, 6, 7, 7, "Tamisha");
let tina = new Queen("Tina Burner", 6, 6, 10, 5, 6, 8, 9, "TinaB");
let utica = new Queen("Utica Queen", 7, 4, 6, 15, 5, 12, 11, "Utica");
let us_season13 = [denali, elliott, mik, joey, kahmora, kandym, lala, olivia, rose, symone, tamisha, tina, utica];
//ALL STARS 6
let allstars_6 = [akeria, eureka, ginger, jan, jiggly, pandora, rajah, scarlet, serena, silky, sonique, trinityk, yara];
//SEASON 14:  acting, comedy, dance, design, improv, runway, lipsync
let alyssaH = new Queen("Alyssa Hunter", 5, 6, 7, 10, 7, 13, 8, "AlyssaH");
let angeria = new Queen("Angeria Paris VanMicheals", 11, 6, 9, 12, 8, 11, 8, "Angeria");
let bosco = new Queen("Bosco", 11, 12, 6, 7, 12, 11, 6, "Bosco");
let daya = new Queen("Daya Betty", 9, 8, 9, 9, 10, 10, 8, "DayaBetty");
let deja = new Queen("DeJa Skye", 9, 7, 9, 8, 13, 8, 8, "DeJa");
let jasmineK = new Queen("Jasmine Kennedie", 7, 6, 13, 7, 6, 10, 14, "JasmineK");
let jorgeous = new Queen("Jorgeous", 5, 5, 13, 10, 5, 10, 15, "Jorgeous");
let june = new Queen("June Jambalaya", 5, 6, 6, 4, 5, 6, 6, "June");
let kerri = new Queen("Kerri Colby", 6, 6, 5, 5, 6, 9, 6, "Kerri");
let kornbread = new Queen("Kornbread Jeté", 6, 7, 6, 6, 7, 8, 7, "Kornbread");
let cadmen = new Queen("Lady Camden", 12, 11, 12, 11, 7, 10, 11, "LadyCamden");
let maddy = new Queen("Maddy Morphosis", 8, 7, 6, 5, 6, 9, 7, "Maddy");
let orion = new Queen("Orion Story", 4, 6, 6, 5, 6, 6, 5, "Orion");
let willow = new Queen("Willow Pill", 11, 8, 7, 10, 10, 12, 8, "Willow");
let us_season14 = [alyssaH, angeria, bosco, daya, deja, jasmineK, jorgeous, june, kerri, kornbread, cadmen, maddy, orion, willow];
//DRUK SEASON 1 
let baga = new Queen("Baga Chipz", 13, 12, 5, 5, 13, 8, 7, "Baga");
let blu = new Queen("Blu Hydrangea", 5, 9, 8, 10, 10, 12, 9, "Blu");
let cheryl = new Queen("Cheryl Hole", 5, 5, 9, 5, 7, 7, 9, "Cheryl");
let crystaluk = new Queen("Crystal", 6, 5, 6, 9, 4, 8, 6, "Crystal");
let divina = new Queen("Divina De Campo", 11, 6, 9, 12, 9, 9, 9, "Divina");
let gothy = new Queen("Gothy Kendoll", 4, 5, 4, 3, 5, 6, 4, "Gothy");
let scaredy = new Queen("Scaredy Kat", 3, 5, 6, 4, 4, 7, 4, "Scaredy");
let sumting = new Queen("Sum Ting Wong", 8, 6, 6, 7, 6, 9, 8, "Sum");
let viv = new Queen("The Vivienne", 12, 13, 8, 10, 14, 11, 12, "TVivienne");
let vinegar = new Queen("Vinegar Strokes", 7, 6, 6, 4, 4, 6, 6, "Vinegar");
let uk_season1 = [baga, blu, cheryl, crystaluk, divina, gothy, scaredy, sumting, viv, vinegar];
// ALL STARS 7
let allstars_7 = [raja, jinkx, yvie, jaida, trinity, monet, shea, viv];
//DRUK SEASON 2
let awhora = new Queen("A'Whora", 7, 5, 8, 15, 10, 10, 8, "Awhora");
let asttina = new Queen("Asttina Mandella", 6, 6, 13, 8, 6, 10, 12, "Asttina");
let bimini = new Queen("Bimini", 11, 14, 10, 7, 11, 11, 11, "Bimini");
let cherry = new Queen("Cherry Valentine", 5, 6, 5, 7, 6, 11, 4, "Cherry");
let ellie = new Queen("Ellie Diamond", 10, 6, 7, 11, 8, 9, 8, "Ellie");
let ginny = new Queen("Ginny Lemon", 6, 6, 5, 5, 5, 8, 4, "Ginny");
let joe = new Queen("Joe Black", 5, 5, 4, 5, 4, 8, 5, "Joe");
let lawrence = new Queen("Lawrence Chaney", 13, 12, 5, 12, 9, 11, 10, "Lawrence");
let sister = new Queen("Sister Sister", 6, 8, 6, 4, 7, 8, 9, "Sister");
let tayce = new Queen("Tayce", 10, 9, 10, 5, 9, 12, 14, "Tayce");
let tia = new Queen("Tia Kofi", 7, 9, 9, 5, 8, 5, 10, "Tia");
let veronica = new Queen("Veronica Green", 6, 6, 10, 6, 5, 7, 8, "Veronica");
let uk_season2 = [awhora, asttina, bimini, cherry, ellie, ginny, joe, lawrence, sister, tayce, tia, veronica];
//DRUK SEASON 3    acting, comedy, dance, design, improv, runway, lipsync
let anubis = new Queen("Anubis", 5, 5, 5, 4, 5, 4, 4, "Anubis");
let charity = new Queen("Charity Kase", 8, 7, 4, 10, 6, 13, 8, "Charity");
let choriza = new Queen("Choriza May", 9, 9, 6, 7, 7, 8, 7, "Choriza");
let elektraF = new Queen("Elektra Fence", 5, 6, 11, 4, 5, 8, 13, "ElektraF");
let ella = new Queen("Ella Vaday", 9, 14, 8, 10, 12, 9, 8, "Ella");
let kitty = new Queen("Kitty Scott-Claus", 12, 11, 7, 8, 9, 9, 7, "Kitty");
let krystal = new Queen("Krystal Versace", 8, 8, 11, 12, 8, 14, 12, "Krystal");
let river = new Queen("River Medway", 8, 6, 5, 9, 5, 7, 6, "River");
let scarlett = new Queen("Scarlett Harlett", 7, 7, 8, 8, 6, 8, 7, "ScarlettH");
let vanity = new Queen("Vanity Milan", 8, 7, 11, 5, 8, 8, 12, "Vanity");
let victoriaS = new Queen("Victoria Scone", 8, 10, 8, 7, 9, 9, 8, "VictoriaS");
let uk_season3 = [anubis, charity, choriza, elektraF, ella, kitty, krystal, river, scarlett, vanity, victoriaS, veronica];
//DRUK SEASON 4
let baby = new Queen("Baby", 7, 7, 7, 7, 7, 7, 7, "Baby");
let black = new Queen("Black Peppa", 7, 7, 7, 7, 7, 7, 7, "BlackPeppa");
let cheddar = new Queen("Cheddar Gorgeous", 7, 7, 7, 7, 7, 7, 7, "Cheddar");
let copper = new Queen("Copper Topp", 7, 7, 7, 7, 7, 7, 7, "Copper");
let dakota = new Queen("Dakota Schiffer", 7, 7, 7, 7, 7, 7, 7, "Dakota");
let danny = new Queen("Danny Beard", 7, 7, 7, 7, 7, 7, 7, "Danny");
let jonbers = new Queen("Jonbers Blonde", 7, 7, 7, 7, 7, 7, 7, "Jonbers");
let just = new Queen("Just May", 7, 7, 7, 7, 7, 7, 7, "JustMay");
let leFil = new Queen("Le Fil", 7, 7, 7, 7, 7, 7, 7, "LeFil");
let pixie = new Queen("Pixie Polite", 7, 7, 7, 7, 7, 7, 7, "PixiePolite");
let sminty = new Queen("Sminty Drop", 7, 7, 7, 7, 7, 7, 7, "Sminty");
let starlet = new Queen("Starlet", 7, 7, 7, 7, 7, 7, 7, "Starlet");
let uk_season4 = [baby, black, cheddar, copper, dakota, danny, jonbers, just, leFil, pixie, sminty, starlet];
//CAN SEASON 1 
let anastarzia = new Queen("Anastarzia Anaquway", 7, 6, 4, 12, 6, 8, 7, "Starzy");
let boa = new Queen("BOA", 6, 6, 5, 5, 6, 7, 7, "BOA");
let ilona = new Queen("Ilona Verley", 5, 8, 5, 8, 9, 10, 10, "Ilona");
let jimbo = new Queen("Jimbo", 10, 13, 2, 13, 15, 11, 2, "Jimbo");
let juice = new Queen("Juice Boxx", 6, 6, 6, 4, 6, 6, 7, "Juice");
let kiara = new Queen("Kiara", 10, 6, 8, 11, 6, 9, 11, "Kiara");
let kyne = new Queen("Kyne", 8, 6, 6, 7, 6, 6, 7, "Kyne");
let lemon = new Queen("Lemon", 10, 11, 12, 6, 11, 13, 11, "Lemon");
let priyanka = new Queen("Priyanka", 14, 9, 12, 8, 6, 10, 13, "Priyanka");
let rita = new Queen("Rita Baga", 10, 11, 7, 10, 9, 10, 12, "Rita");
let bobo = new Queen("Scarlett BoBo", 6, 8, 9, 9, 9, 10, 9, "Scarlett");
let tynomi = new Queen("Tynomi Banks", 5, 6, 5, 7, 5, 7, 10, "Tynomi");
let can_season1 = [anastarzia, boa, ilona, jimbo, juice, kiara, kyne, lemon, priyanka, rita, bobo, tynomi];
//CAN SEASON 2
let adriana = new Queen("Adriana", 9, 6, 7, 6, 6, 8, 5, "Adriana");
let beth = new Queen("Beth", 5, 5, 6, 3, 6, 5, 4, "Beth");
let eve = new Queen("Eve 6000", 10, 5, 5, 6, 6, 8, 8, "Eve");
let giametric = new Queen("Gia Metric", 9, 6, 10, 6, 6, 9, 10, "Giametric");
let icesis = new Queen("Icesis Couture", 7, 8, 8, 11, 7, 10, 10, "Icesis");
let kendall = new Queen("Kendall Gender", 7, 9, 9, 6, 7, 8, 10, "Kendall");
let kimoraA = new Queen("Kimora Amour", 6, 5, 5, 6, 7, 7, 5, "KimoraA");
let oceane = new Queen("Océane Aqua-Black", 6, 7, 4, 7, 7, 7, 5, "Oceane");
let pythia = new Queen("Pythia", 8, 7, 8, 12, 9, 12, 7, "Pythia");
let stephanie = new Queen("Stephanie Prince", 6, 6, 7, 10, 6, 9, 6, "Stephanie");
let suki = new Queen("Suki Doll", 8, 7, 6, 9, 5, 9, 5, "Suki");
let synthia = new Queen("Synthia Kiss", 6, 8, 10, 7, 9, 7, 9, "Synthia");
let can_season2 = [adriana, beth, eve, giametric, icesis, kendall, kimoraA, oceane, pythia, stephanie, suki, synthia];
//CAN SEASON 2
let bombae = new Queen("Bombae", 5, 7, 6, 8, 6, 7, 7, "Bombae");
let chelazon = new Queen("Chelazon Leroux", 4, 9, 4, 7, 5, 7, 6, "Chelazon");
let gisele = new Queen("Gisèle Lullaby", 6, 10, 8, 11, 10, 12, 9, "Gisele");
let halal = new Queen("Halal Bae", 4, 4, 3, 3, 4, 7, 5, "Halal");
let irma = new Queen("Irma Gerd", 5, 7, 7, 8, 10, 9, 7, "Irma");
let jadashada = new Queen("Jada Shada Hudson", 15, 15, 15, 15, 15, 15, 15, "JadaShada");
let kaos = new Queen("Kaos", 5, 7, 5, 5, 5, 9, 9, "Kaos");
let kimmy = new Queen("Kimmy Couture", 7, 7, 12, 9, 6, 11, 12, "Kimmy");
let boomboom = new Queen("Lady Boom Boom", 5, 8, 9, 9, 6, 10, 9, "BoomBoom");
let fiercalicious = new Queen("Miss Fiercalicious", 9, 9, 8, 7, 7, 11, 9, "Fiercalicious");
let moco = new Queen("Miss Moço", 5, 4, 6, 4, 4, 7, 9, "Moco");
let vanderpuss = new Queen("Vivian Vanderpuss", 9, 9, 9, 7, 8, 9, 8, "Vanderpuss");
let can_season3 = [bombae, chelazon, gisele, halal, irma, jadashada, kaos, kimmy, boomboom, fiercalicious, moco, vanderpuss];
//DRAG RACE HOLLAND SEASON 1
let chelsea = new Queen("Chelsea Boy", 9, 10, 7, 7, 10, 12, 6, "Chelsea");
let envy = new Queen("Envy Peru", 11, 11, 11, 8, 11, 13, 11, "Envy");
let janey = new Queen("Janey Jacké", 7, 6, 13, 11, 6, 11, 12, "Janey");
let madamem = new Queen("Madame Madness", 8, 6, 5, 6, 5, 8, 7, "MadameM");
let mama = new Queen("Ma'Ma Queen", 9, 6, 5, 6, 6, 10, 7, "Mama");
let megan = new Queen("Megan Schoonbrood", 7, 6, 6, 5, 6, 9, 8, "Megan");
let abby = new Queen("Miss Abby OMG", 5, 6, 11, 6, 5, 8, 10, "Abby");
let patty = new Queen("Patty Pam-Pam", 5, 6, 6, 6, 5, 9, 7, "Patty");
let roem = new Queen("Roem", 6, 6, 5, 5, 5, 6, 5, "Roem");
let sederginne = new Queen("Sederginne", 7, 6, 6, 7, 5, 13, 5, "Sederginne");
let hol_season1 = [chelsea, envy, janey, madamem, mama, megan, abby, patty, roem, sederginne];
//DRAG RACE HOLLAND SEASON 2
let ivyelise = new Queen("Ivy-Elyse", 6, 8, 5, 4, 8, 5, 10, "IvyE");
let juicy = new Queen("Juicy Kouture", 5, 6, 5, 5, 4, 4, 5, "Juicy");
let keta = new Queen("Keta Minaj", 9, 12, 9, 7, 12, 11, 9, "Keta");
let love = new Queen("Pierre Alexandre", 6, 5, 6, 8, 5, 10, 7, "Love");
let mlp = new Queen("My Little Puny", 10, 10, 10, 7, 9, 10, 10, "MLP");
let reggy = new Queen("Reggy B", 6, 6, 6, 5, 6, 8, 8, "Reggy");
let tabitha = new Queen("Tabitha", 6, 7, 8, 6, 5, 7, 8, "Tabitha");
let countess = new Queen("The Countess", 7, 5, 4, 10, 6, 12, 5, "Countess");
let vanessaC = new Queen("Vanessa Van Cartier", 7, 5, 6, 8, 5, 12, 8, "VanessaC");
let vivaldi = new Queen("Vivaldi", 8, 8, 8, 7, 8, 12, 8, "Vivaldi");
let hol_season2 = [ivyelise, juicy, keta, love, mlp, reggy, tabitha, countess, vanessaC, vivaldi];
//DRT SEASON 1
let amadiva = new Queen("Amadiva", 7, 6, 7, 9, 4, 9, 8, "Amadiva");
let annee = new Queen("Anneé Maywong", 10, 9, 7, 12, 8, 11, 9, "Annee");
let b = new Queen("B Ella", 11, 7, 6, 7, 7, 7, 7, "B");
let bunny = new Queen("Bunny Be Fly", 6, 5, 5, 7, 5, 6, 5, "Bunny");
let dearis = new Queen("Dearis Doll", 8, 11, 7, 8, 10, 10, 10, "Dearis");
let jaja = new Queen("JAJA", 7, 5, 7, 6, 5, 9, 9, "Jaja");
let meannie = new Queen("Meannie Minaj", 5, 5, 5, 4, 5, 5, 4, "Meannie");
let morrigan = new Queen("Morrigan", 5, 4, 6, 4, 6, 7, 6, "Morrigan");
let natalia = new Queen("Natalia Pliacam", 8, 12, 7, 9, 12, 10, 9, "Natalia");
let petchra = new Queen("Petchra", 6, 5, 6, 8, 6, 7, 8, "Petchra");
let drt_season1 = [amadiva, annee, b, bunny, dearis, jaja, meannie, morrigan, natalia, petchra];
//DRT SEASON 2
let angele = new Queen("Angele Anang", 8, 8, 9, 11, 9, 9, 12, "Angele");
let bandit = new Queen("Bandit", 7, 8, 7, 8, 7, 8, 7, "Bandit");
let genie = new Queen("Genie", 10, 7, 7, 7, 8, 8, 7, "Genie");
let kana = new Queen("Kana Warrior", 9, 7, 8, 6, 8, 7, 12, "Kana");
let kandyz = new Queen("Kandy Zyanide", 7, 7, 10, 8, 9, 10, 8, "KandyZ");
let katy = new Queen("Katy Killer", 6, 6, 7, 6, 7, 9, 6, "Katy");
let m = new Queen("M Stranger Fox", 5, 6, 5, 6, 6, 5, 5, "M");
let maya = new Queen("Maya B'Haro", 5, 6, 6, 8, 7, 8, 7, "Maya");
let mocha = new Queen("Mocha Diva", 9, 9, 6, 8, 9, 7, 9, "Mocha");
let gimhuay = new Queen("Miss Gimhuay", 8, 7, 7, 9, 8, 11, 8, "Gimhuay");
let silver = new Queen("Silver Sonic", 5, 5, 6, 6, 5, 7, 6, "Silver");
let srimala = new Queen("Srimala", 7, 10, 8, 8, 7, 7, 8, "Srimala");
let tormai = new Queen("Tormai", 6, 5, 5, 6, 5, 7, 7, "Tormai");
let vanda = new Queen("Vanda Miss Joaquim", 11, 10, 8, 8, 9, 9, 9, "Vanda");
let drt_season2 = [angele, bandit, genie, kana, kandyz, katy, m, maya, mocha, gimhuay, silver, srimala, tormai, vanda];
//DRAG RACE DOWN UNDER SEASON 1
let anita = new Queen("Anita Wigl'it", 6, 10, 8, 6, 10, 8, 5, "Anita");
let art = new Queen("Art Simone", 6, 4, 5, 8, 4, 10, 4, "Art");
let cocoj = new Queen("Coco Jumbo", 6, 5, 6, 6, 5, 8, 10, "CocoJ");
let elektra = new Queen("Elektra Shock", 10, 6, 12, 8, 4, 7, 11, "Elektra");
let etc = new Queen("Etcetera Etcetera", 5, 8, 8, 7, 8, 8, 8, "Etc");
let jojo = new Queen("Jojo Zaho", 5, 5, 5, 5, 5, 6, 6, "Jojo");
let karen = new Queen("Karen From Finance", 5, 6, 5, 5, 7, 7, 5, "Karen");
let kita = new Queen("Kita Mean", 9, 9, 7, 7, 9, 9, 8, "Kita");
let maxi = new Queen("Maxi Shield", 6, 6, 5, 9, 7, 8, 8, "Maxi");
let drdu_season1 = [anita, art, cocoj, elektra, etc, jojo, karen, kita, maxi];
//DRAG RACE DOWN UNDER SEASON 2
let aubrey = new Queen("Aubrey Haive", 5, 4, 5, 7, 4, 8, 7, "Aubrey");
let beverly = new Queen("Beverly Kills", 8, 4, 10, 9, 5, 9, 10, "Beverly");
let faux = new Queen("Faúx Fúr", 4, 5, 4, 5, 4, 5, 6, "Faux");
let hannah = new Queen("Hannah Conda", 11, 10, 8, 9, 9, 11, 8, "Hannah");
let kweenKong = new Queen("Kween Kong", 5, 9, 10, 5, 8, 10, 11, "Kween");
let minnie = new Queen("Minnie Cooper", 9, 8, 5, 6, 6, 9, 7, "Minnie");
let molly = new Queen("Molly Poppinz", 8, 7, 6, 9, 7, 10, 9, "Molly");
let pomara = new Queen("Pomara Fifth", 8, 5, 5, 7, 5, 9, 8, "Pomara");
let spankie = new Queen("Spankie Jackzon", 11, 11, 8, 5, 8, 7, 9, "Spankie");
let yuri = new Queen("Yuri Guaii", 6, 11, 6, 12, 9, 13, 7, "Yuri");
let drdu_season2 = [aubrey, beverly, faux, hannah, kweenKong, minnie, molly, pomara, spankie, yuri];
//DRAG RACE ESPAÑA 1
let arantxa = new Queen("Arantxa Castilla La Mancha", 6, 8, 6, 7, 8, 9, 7, "Arantxa");
let carmenf = new Queen("Carmen Farala", 10, 10, 10, 14, 8, 13, 10, "CarmenF");
let dovima = new Queen("Dovima Nurmi", 8, 7, 5, 7, 8, 10, 6, "Dovima");
let drag = new Queen("Drag Vulcano", 6, 6, 5, 7, 6, 9, 6, "Drag");
let hugaceo = new Queen("Hugáceo Crujiente", 5, 5, 5, 12, 6, 12, 8, "Hugaceo");
let inti = new Queen("Inti", 6, 6, 6, 7, 5, 11, 6, "Inti");
let killer = new Queen("Killer Queen", 6, 10, 8, 9, 11, 9, 8, "Killer");
let pupi = new Queen("Pupi Poisson", 10, 11, 7, 5, 11, 6, 7, "Puppy");
let sagittaria = new Queen("Sagittaria", 7, 8, 8, 9, 7, 10, 8, "Sagittaria");
let macarena = new Queen("The Macarena", 5, 5, 6, 4, 5, 5, 5, "Macarena");
let dres_season1 = [arantxa, carmenf, dovima, drag, hugaceo, inti, killer, pupi, sagittaria, macarena];
// DRAG RACE ESPAÑA 2
let arielRec = new Queen("Ariel Rec", 5, 5, 7, 4, 5, 9, 5, "ArielRec");
let diamante = new Queen("Diamante Merybrown", 7, 6, 10, 5, 5, 8, 11, "Diamante");
let sethlas = new Queen("Drag Sethlas", 7, 5, 9, 10, 5, 11, 7, "DragSethlas");
let estrella = new Queen("Estrella Xtravaganza", 10, 7, 7, 5, 9, 8, 8, "Estrella");
let jota = new Queen("Jota Carajota", 4, 5, 6, 4, 4, 8, 7, "Jota");
let juriji = new Queen("Juriji Der Klee", 8, 9, 7, 9, 10, 10, 9, "Juriji");
let marina = new Queen("Marina", 6, 10, 8, 7, 7, 8, 11, "Marina");
let marisa = new Queen("Marisa Prisa", 4, 4, 3, 2, 4, 4, 4, "Marisa");
let onyx = new Queen("Onyx", 6, 6, 7, 7, 6, 13, 7, "Onyx");
let samantha = new Queen("Samantha Ballentines", 4, 4, 5, 5, 5, 5, 3, "Samantha");
let sharonne = new Queen("Sharonne", 12, 10, 8, 8, 12, 10, 9, "Sharonne");
let venedita = new Queen("Venedita Von Däsh", 9, 9, 9, 9, 9, 10, 9, "Venedita");
let dres_season2 = [arielRec, diamante, sethlas, estrella, jota, juriji, marina, marisa, onyx, samantha, sharonne, venedita];
//DRAG RACE ITALIA 1
let ava = new Queen("Ava Hangar", 8, 7, 5, 5, 6, 6, 6, "Ava");
let divinity = new Queen("Divinity", 9, 6, 8, 7, 6, 8, 7, "Divinity");
let elecktra = new Queen("Elecktra Bionic", 7, 8, 8, 8, 9, 9, 8, "Elecktra");
let enorma = new Queen("Enorma Jean", 8, 8, 6, 6, 8, 7, 6, "Enorma");
let farida = new Queen("Farida Kant", 7, 6, 8, 11, 5, 11, 8, "Farida");
let ivana = new Queen("Ivana Vamp", 6, 5, 6, 6, 6, 6, 5, "Ivana");
let riche = new Queen("Le Riche", 6, 8, 6, 8, 9, 8, 7, "Riche");
let luquisha = new Queen("Luquisha Lubamba", 7, 6, 6, 5, 7, 6, 7, "Luquisha");
let drita = [ava, divinity, elecktra, enorma, farida, ivana, riche, luquisha];
//DRAG RACE ITALIA 2
let aura = new Queen("Aura Eternal", 7, 7, 7, 7, 7, 7, 7, "Aura");
let gioffre = new Queen("Gioffré", 7, 7, 7, 7, 7, 7, 7, "Gioffre");
let diamond = new Queen("La Diamond", 7, 7, 7, 7, 7, 7, 7, "LaDiamond");
let petite = new Queen("La Petite Noire", 7, 7, 7, 7, 7, 7, 7, "Petite");
let narciso = new Queen("Narciso", 7, 7, 7, 7, 7, 7, 7, "Narciso");
let nehellenia = new Queen("Nehellenia", 7, 7, 7, 7, 7, 7, 7, "Nehellenia");
let obama = new Queen("Obama", 7, 7, 7, 7, 7, 7, 7, "Obama");
let panthera = new Queen("Panthera Virus", 7, 7, 7, 7, 7, 7, 7, "Panthera");
let skandalove = new Queen("Skandalove", 7, 7, 7, 7, 7, 7, 7, "Skandalove");
let tanissa = new Queen("Tanissa Yoncè", 7, 7, 7, 7, 7, 7, 7, "Tanissa");
let drita_season2 = [aura, gioffre, diamond, petite, narciso, nehellenia, obama, panthera, skandalove, tanissa];
//DRAG RACE FRANCE
let elips = new Queen("Elips", 7, 9, 8, 8, 8, 8, 7, "Elips");
let kam = new Queen("Kam Hugh", 7, 5, 6, 9, 4, 13, 7, "Kam");
let bigbertha = new Queen("La Big Bertha", 7, 6, 7, 6, 6, 8, 9, "BigBertha");
let briochee = new Queen("La Briochée", 6, 6, 6, 5, 6, 8, 5, "LaBriochee");
let grandedame = new Queen("La Grande Dame", 11, 10, 8, 12, 8, 11, 8, "GrandeDame");
let kahena = new Queen("La Kahena", 5, 6, 5, 3, 5, 6, 5, "Kahena");
let lolita = new Queen("Lolita Banana", 9, 7, 13, 11, 6, 9, 12, "LolitaBanana");
let lova = new Queen("Lova Ladiva", 5, 5, 6, 4, 6, 6, 5, "Lova");
let paloma = new Queen("Paloma", 11, 11, 6, 7, 9, 9, 8, "Paloma");
let soa = new Queen("Soa de Muse", 9, 10, 10, 8, 8, 9, 10, "Soa");
let drfr = [elips, kam, bigbertha, briochee, grandedame, kahena, lolita, lova, paloma, soa];
//DRAG RACE PHILIPPINES
let brigiding = new Queen("Brigiding", 6, 5, 8, 8, 4, 9, 10, "Brigiding");
let corazon = new Queen("Corazon", 4, 5, 4, 3, 4, 7, 5, "Corazon");
let eva = new Queen("Eva Le Queen", 6, 9, 8, 7, 8, 10, 8, "EvaLeQueen");
let gigiEra = new Queen("Gigi Era", 5, 5, 4, 5, 5, 6, 7, "GigiEra");
let morgana = new Queen("Lady Morgana", 6, 6, 7, 7, 5, 8, 11, "LadyMorgana");
let marinaSummers = new Queen("Marina Summers", 6, 9, 12, 9, 10, 12, 10, "MarinaSummers");
let minty = new Queen("Minty Fresh", 6, 5, 4, 12, 4, 11, 9, "MintyFresh");
let precious = new Queen("Precious Paula Nicole", 7, 7, 9, 7, 9, 8, 9, "PreciousPaulaNicole");
let prince = new Queen("Prince", 4, 4, 4, 4, 4, 7, 4, "Prince");
let turing = new Queen("Turing", 6, 6, 9, 6, 6, 7, 9, "Turing");
let vinas = new Queen("Viñas DeLuxe", 6, 8, 8, 10, 8, 11, 7, "VinasDeLuxe");
let xilhouete = new Queen("Xilhouete", 6, 10, 6, 8, 11, 10, 8, "Xilhouete");
let drph = [brigiding, corazon, eva, gigiEra, morgana, marinaSummers, minty, precious, prince, turing, vinas, xilhouete];
//SPECIAL 
let pangina = new Queen("Pangina Heals", 9, 7, 14, 11, 8, 13, 14, "Pangina");
let international_as = [baga, blu, cheryl, janey, jimbo, jujubee, lemon, monique, pangina];
//all possible queens:
let allCustomQueens = [];
if (localStorage.getItem("customQueens") != null)
    allCustomQueens = JSON.parse(localStorage.getItem("customQueens") || "{}");
let customLength = allCustomQueens.length;
for (let i = 0; i < customLength; i++) {
    let queen = new Queen('', 0, 0, 0, 0, 0, 0, 0, '');
    Object.assign(queen, allCustomQueens[i]);
    allCustomQueens.push(queen);
}
allCustomQueens.splice(0, customLength);
let allQueens = [
    akashia, bebe, jade, ninaf, ongina, rebecca, shannel, tammie, victoria,
    jessica, jujubee, morgan, mystique, nicole, pandora, raven, sahara, shangela, sonique, tatianna, tyra,
    alexis, carmen, delta, india, manila, mariah, mimi, phoenix, raja, stacey, venus, yara,
    alisa, chad, dida, jiggly, kenya, leshauwn, latrice, madame, milan, phiphi, princess, willam,
    alaska, alyssa, coco, detox, honey, ivy, jadejolie, jinkx, lineysha, monica, penny, roxxxy, serena, vivienne,
    adore, april, bendelacreme, bianca, courtney, darienne, gia, joslyn, kelly, laganja, magnolia, milk, trinityk, vivacious,
    ginger, jaidynn, jasmine, kandy, katya, kennedy, max, fame, kasha, pearl, sashab, tempest, trixie, violet,
    acid, bob, chichi, cynthia, dax, derrick, kim, laila, naomi, naysha, robbie, thorgy,
    aja, alexism, charlie, eureka, farrah, jaymes, kimora, ninab, peppermint, sasha, shea, trinity, valentina,
    aquaria, asia, blair, dusty, kalorie, kameron, mayhem, miz, monet, monique, vanessa, vixen, yuhua,
    akeria, ariel, brooke, honeyd, kahanna, mercedes, ninaw, plastique, rajah, scarlet, shuga, silky, yvie,
    aiden, brita, crystal, dahlia, gigi, heidi, jackie, jaida, jan, nicky, rock, widow,
    denali, elliott, mik, joey, kahmora, kandym, lala, olivia, rose, symone, tamisha, tina, utica,
    alyssaH, angeria, bosco, daya, deja, jasmineK, jorgeous, june, kerri, kornbread, cadmen, maddy, orion, willow,
    baga, blu, cheryl, crystaluk, divina, gothy, scaredy, sumting, viv, vinegar,
    awhora, asttina, bimini, cherry, ellie, ginny, joe, lawrence, sister, tayce, tia, veronica,
    anubis, charity, choriza, elektraF, ella, kitty, krystal, river, scarlett, vanity, victoriaS,
    baby, black, cheddar, copper, dakota, danny, jonbers, just, leFil, pixie, sminty, starlet,
    anastarzia, boa, ilona, jimbo, juice, kiara, kyne, lemon, priyanka, rita, bobo, tynomi,
    adriana, beth, eve, giametric, icesis, kendall, kimoraA, oceane, pythia, stephanie, suki, synthia,
    bombae, chelazon, gisele, halal, irma, jadashada, kaos, kimmy, boomboom, fiercalicious, moco, vanderpuss,
    chelsea, envy, janey, madamem, mama, megan, abby, patty, roem, sederginne,
    ivyelise, juicy, keta, love, mlp, reggy, tabitha, countess, vanessaC, vivaldi,
    amadiva, annee, b, bunny, dearis, jaja, meannie, morrigan, natalia, petchra,
    angele, bandit, genie, kana, kandyz, katy, m, maya, mocha, gimhuay, silver, srimala, tormai, vanda,
    anita, art, cocoj, elektra, etc, jojo, karen, kita, maxi,
    aubrey, beverly, faux, hannah, kweenKong, minnie, molly, pomara, spankie, yuri,
    arantxa, carmenf, dovima, drag, hugaceo, inti, killer, pupi, sagittaria, macarena,
    arielRec, diamante, sethlas, estrella, jota, juriji, marina, marisa, onyx, samantha, sharonne, venedita,
    ava, divinity, elecktra, enorma, farida, ivana, riche, luquisha,
    aura, gioffre, diamond, petite, narciso, nehellenia, obama, panthera, skandalove, tanissa,
    elips, kam, bigbertha, briochee, grandedame, kahena, lolita, lova, paloma, soa,
    brigiding, corazon, eva, gigiEra, morgana, marinaSummers, minty, precious, prince, turing, vinas, xilhouete,
    pangina
].concat(allCustomQueens).sort((a, b) => a.getName().toLowerCase().localeCompare(b.getName().toLowerCase()));
let allQueensCopy = [];
let allQueensCopy2 = [];
let randomReturn = false;
let voteReturn = false;
let conjoinedQueens = false;
let queensOfComedy = false;
let kittyGirlGroup = false;
let lalaparuza = false;
let smackdown = false;
function CheckForReturning() {
    if ((randomReturn || voteReturn) == true && currentCast.length < totalCastSize - 3 && returningQueen == false && eliminatedCast.length > 0) {
        if (randomNumber(0, 100) < 5 * episodeCount || currentCast.length == 4) {
            returningQueen = true;
            return true;
        }
        return false;
    }
    if (smackdown && currentCast.length == 4 && (all_stars || top4 || lipsync_assassin || canFinale) && returningQueen == false || smackdown && currentCast.length == 3 && returningQueen == false) {
        returningQueen = true;
        return true;
    }
    if (lalaparuza && (currentCast.length - eliminatedCast.length) >= 1 && (currentCast.length - eliminatedCast.length) < 3 && returningQueen == false && all_stars) {
        returningQueen = true;
        return true;
    }
    if (queensOfComedy && currentCast.length == Math.round((totalCastSize / 2)) && returningQueen == false && totalCastSize > 8){
        returningQueen = true;
        return true;
    }
    if (kittyGirlGroup && currentCast.length == Math.round((totalCastSize / 2)) && returningQueen == false && totalCastSize > 8){
        returningQueen = true;
        return true;
    }
    if (conjoinedQueens && currentCast.length == Math.round((totalCastSize / 2)) && returningQueen == false && totalCastSize > 8){
        returningQueen = true;
        return true;
    }
    return false;
}
function returningQueenScreen() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("A lovely surprise...");
    if (randomReturn)
        queenReturns();
    if (voteReturn)
        queenReturnsVote();
    if (conjoinedQueens)
        queensConjoined();
    if (smackdown)
        lipsyncSmackdown();
    if (lalaparuza)
        LaLaPaRUza();
    if (queensOfComedy)
        queensofComedy();
    if (kittyGirlGroup)
        kittygirlGroup();
    screen.createButton("Proceed", "newEpisode()");
    if (randomReturn && document.querySelector("button[onclick='fijarReturningQueen()']")){
        let button = document.querySelector("button[onclick='newEpisode()']");
        button.setAttribute("hidden", "hidden");
    }
}
function queenReturns() {
    contestantProgress();
    let screen = new Scene();
    screen.createBold("I've decided that one of my queens have gone a bit too soon... I'd like to welcome back...");
    if (randomNumber(0, 100) <= 20) {
        let queen = eliminatedCast[(randomNumber(0, eliminatedCast.length - 1))];
        while (queen.QueenDisqOrDept != false){
            queen = eliminatedCast[(randomNumber(0, eliminatedCast.length - 1))];
        }
        currentCast.push(queen);
        eliminatedCast.splice(eliminatedCast.indexOf(queen), 1);
        screen.createImage(queen.image, "aquamarine");
        screen.createBold(queen.getName());
    } else {
        let main = document.querySelector("div#MainBlock");
        let castSelection = document.createElement("p");
        castSelection.setAttribute("id", "castSelection");
        castSelection.innerHTML = '';
        let select = document.createElement("select");
        select.setAttribute("id", "queenList");
        select.setAttribute("onchange", "returnImg()");
        let img = document.createElement("img");
        img.setAttribute("id", "images");
        img.setAttribute("style", "width: 105px; height: 105px;");
        let p = document.createElement("p");
        p.appendChild(img);
        for (let k = 0; k < eliminatedCast.length; k++) {
            let option = document.createElement("option");
            option.innerHTML = eliminatedCast[k].getName();
            option.value = eliminatedCast[k].image;
            select.add(option);
        }
        select.selectedIndex = randomNumber(0, eliminatedCast.length - 1);
        let br = document.createElement("br");
        castSelection.appendChild(p);
        castSelection.appendChild(select);
        castSelection.appendChild(br);
        main.appendChild(castSelection);
        returnImg();
        screen.createButton("Lock Queen", "fijarReturningQueen()", "fijar");
    }
}
function fijarReturningQueen() {
    let screen = new Scene();
    let select = document.getElementById("queenList");
    let value = select.options[select.selectedIndex].text;
    let button = document.getElementById("fijar");
    let newEpisodeB = document.querySelector("button[onclick='newEpisode()']");
    let queen;
    for (let k = 0; k < eliminatedCast.length; k++) {
        if (value == eliminatedCast[k].getName()){
            queen = eliminatedCast[k];
        }
    }
    button.remove();
    select.remove();
    screen.createBold(queen.getName());
    newEpisodeB.removeAttribute("hidden");
    currentCast.push(queen);
    eliminatedCast.splice(eliminatedCast.indexOf(queen), 1);
}
function returnImg() {
    let images = document.getElementById("images");
    //let img = document.getElementById("image" + i.toString());
    let select = document.getElementById("queenList");
    images.src = select.options[select.selectedIndex].value;
}
function queenReturnsVote() {
    let screen = new Scene();
    screen.createParagraph("I've decided that one of my queens deserve a second chance... you'll vote for which of the eliminated queens will come back!");
    screen.createHorizontalLine();
    screen.createBold("The queens vote...");
    for (let i = 0; i < currentCast.length; i++) {
        currentCast[i].lipstick = eliminatedCast[randomNumber(0, eliminatedCast.length - 1)];
        while (currentCast[i].lipstick.QueenDisqOrDept != false){
            currentCast[i].lipstick = eliminatedCast[randomNumber(0, eliminatedCast.length - 1)];
        }
        currentCast[i].lipstick.votes++;
        screen.createParagraph(`${currentCast[i].getName()} voted for ${currentCast[i].lipstick.getName()}!`);
    }
    for (let i = 0; i < eliminatedCast.length; i++) {
        screen.createBold(`${eliminatedCast[i].getName()}: ${eliminatedCast[i].votes.toString()} votes`);
    }
    screen.createHorizontalLine();
    let queen = [...eliminatedCast].sort((a, b) => b.votes - a.votes)[0];
    screen.createBold(`${queen.getName()} returns to the competition!`);
    currentCast.push(queen);
    eliminatedCast.splice(eliminatedCast.indexOf(queen), 1);
}
function lipsyncSmackdown() {
    var screen = new Scene();
    screen.clean();
    document.body.style.backgroundImage = "url('image/smackdown.webp')";
    screen.createHeader("Let the Lipsync Smackdown begin!!");
    screen.createParagraph("The eliminated queens are back to compete in an epic Lipsync Smackdown and a chance to return to the competition.");
    var smack = eliminatedCast.slice();
    var capitulo = 2;
    let caps9 = 3;
    var cappork = 5;
    var caps6 = 4;
    let done = false;
    let double = false;
    for (var i = 0; i < eliminatedCast.length - 1; i++) {
        screen.createHorizontalLine();
        if (smack.length == 2) {
            var queen1 = smack[0];
            var queen2 = smack[1];
        }else{
            var queen1 = smack[smack.length - 1];
            var queen2 = smack[smack.length - 2];
        }
        screen.createImage(queen1.image);
        screen.createImage(queen2.image);
        screen.createBold(queen1.getName() + " and " + queen2.getName() + " will lipsync...");
        screen.createBold("The time has come for you to lip-sync... for your rudemption! Good luck, and don't fuck it up.");
        lsSong();
        screen.createBold("I've made my decision.");
        var lipSync = [queen1, queen2];
        for (var i_1 = 0; i_1 < lipSync.length; i_1++) {
            lipSync[i_1].getASLipsync();
        }
        lipSync.sort(function (a, b) { return (b.lipsyncScore - a.lipsyncScore); });
        if (lipSync[0].lipsyncScore >= lipSync[1].lipsyncScore && lipSync[0].lipsyncScore > 7 && lipSync[1].lipsyncScore > 7 && smack.length <= 2) {
            screen.createImage(lipSync[0].image, "darkblue");
            screen.createImage(lipSync[1].image, "darkblue");
            screen.createBold("Shantay, you both stay baby!");
            double = true;
        } else {
            screen.createImage(lipSync[0].image, "royalblue");
            screen.createBold(lipSync[0].getName() + ", shantay you stay! ");
            if (eliminatedCast.length - i != 2) {
                if (porkchopPremiere) {
                    lipSync[0].trackRecord[cappork] = " WIN ";
                    lipSync[1].trackRecord[cappork] = "LOSS";
                }else if(s12Premiere || s14Premiere){
                    lipSync[0].trackRecord[caps6] = " WIN ";
                    lipSync[1].trackRecord[caps6] = "LOSS";
                }else if (s9Premiere) {
                    lipSync[0].trackRecord[caps9] = " WIN ";
                    lipSync[1].trackRecord[caps9] = "LOSS";
                }else{
                lipSync[0].trackRecord[capitulo] = " WIN ";
                lipSync[1].trackRecord[capitulo] = "LOSS";
                }
            }
            screen.createBold(lipSync[1].getName() + ", sashay away. ");
        }
        capitulo++;
        cappork++;
        caps6++;
        caps9++;
        /* if (slayersCheck && !done){
            capitulo++;
            cappork++;
            caps6++;
            caps9++;
            done = true;
        } */
        if (lipSync[0] == queen1) {
            smack.splice(smack.indexOf(queen2), 1);
        }else{
            smack.splice(smack.indexOf(queen1), 1);
        }
    }
    for (var o = 0; o <= currentCast.length - 1; o++) {
        currentCast[o].addToTrackRecord("RUN ");
    }
    if (double) {
        currentCast.push(lipSync[0]);
        currentCast.push(lipSync[1]);
        lipSync[0].addToTrackRecord("RTRN");
        lipSync[1].addToTrackRecord("RTRN");
        eliminatedCast.splice(eliminatedCast.indexOf(lipSync[0]), 1);
        eliminatedCast.splice(eliminatedCast.indexOf(lipSync[1]), 1);
        for (var i = 0; i <= eliminatedCast.length - 1; i++) {
            eliminatedCast[i].addToTrackRecord("OUT ");
        }
    } else {
        lipSync[0].addToTrackRecord("RTRN");
        currentCast.push(lipSync[0]);
        eliminatedCast.splice(eliminatedCast.indexOf(lipSync[0]), 1);
        for (var i = 0; i <= eliminatedCast.length - 1; i++) {
            eliminatedCast[i].addToTrackRecord("OUT ");
        }
    }
    episodeChallenges.push("Lipsync Smackdown");
    episodeCount++;
}
function LaLaPaRUza(){
    var screen = new Scene();
    screen.clean();
    document.body.style.backgroundImage = "url('image/lalaparuza.webp')";
    screen.createHeader("LaLaPaRUza!!");
    screen.createParagraph("All of the eliminated All Stars get a chance to return to the competition. But first they have to send home a competing All Star in a shocking mid season lip sync smackdown.");
    var smack = eliminatedCast.slice();
    var smack1 = currentCast.slice();
    for (var i = 0; i < smack1.length; i++){
        var trds = smack1[i].trackRecord.length - 1;
        if (smack1[i].trackRecord[trds] == "WIN") {
            smack1[i].addToTrackRecord("RUN");
            smack1.splice(i, 1);
            i--;
        }else if (smack1[i].trackRecord[trds] == "WIN ") {
            smack1[i].addToTrackRecord("RUN");
            smack1.splice(i, 1);
            i--;
        }else if (smack1[i].trackRecord[trds] == " WIN"){
            smack1[i].addToTrackRecord("RUN");
            smack1.splice(i, 1);
            i--;
        }
    }
    if (disqOrDept && smack[0].trackRecord[smack[0].trackRecord.length - 1] == "WIN+QUIT") {
        for (var i = 0; i < smack1.length; i++){
            let trds = smack1[i].trackRecord.length - 1;
            if (smack1[i].trackRecord[trds] == "HIGH") {
                smack1[i].addToTrackRecord("RUN");
                smack1.splice(i, 1);
                i--;
            }
        }
    }
    for (var i = 0; i < smack.length; i++) {
        screen.createHorizontalLine();
        var queen1 = smack[i];
        var queen2 = smack1[randomNumber(0,smack1.length-1)];
        screen.createImage(queen1.image);
        screen.createImage(queen2.image);
        smack1.splice(smack1.indexOf(queen2), 1);
        if (smack.length == 2) {
            i++;
        }
        if (smack1.length == 0 && totalCastSize%2 == 1) {
            var queen3 = smack[i+1];
            screen.createImage(queen3.image);
            screen.createBold(queen1.getName() + ", " + queen2.getName() + " and " + queen3.getName() + " will lipsync...");
            lsSong();
            var lipSync_1 = [queen1, queen2, queen3];
            for (var i_1 = 0; i_1 < lipSync_1.length; i_1++) {
                lipSync_1[i_1].getASLipsync();
            }
            queen1.lipsyncScore -= 4;
            queen3.lipsyncScore -= 4;
            lipSync_1.sort(function (a, b) { return (b.lipsyncScore - a.lipsyncScore); });
            screen.createImage(lipSync_1[0].image, "royalblue");
            screen.createBold(lipSync_1[0].getName() + ", shantay you stay!");
            screen.createBold(lipSync_1[1].getName() + " and " + lipSync_1[2].getName() + ", sashay away...");
            if (queen1 == lipSync_1[0]) {
                currentCast.push(lipSync_1[0]);
                lipSync_1[0].addToTrackRecord("RTRN ");
                eliminatedCast.splice(eliminatedCast.indexOf(lipSync_1[0]), 1);
                queen2.addToTrackRecord("ELIM");
                eliminatedCast.unshift(queen2);
                currentCast.splice(currentCast.indexOf(queen2), 1);
                queen2.unfavoritism += 5;
                queen3.addToTrackRecord("OUT ");
            }else if(queen3 == lipSync_1[0]){
                currentCast.push(lipSync_1[0]);
                lipSync_1[0].addToTrackRecord("RTRN ");
                eliminatedCast.splice(eliminatedCast.indexOf(lipSync_1[0]), 1);
                queen2.addToTrackRecord("ELIM");
                eliminatedCast.unshift(queen2);
                currentCast.splice(currentCast.indexOf(queen2), 1);
                queen2.unfavoritism += 5;
                queen1.addToTrackRecord("OUT ");
            }else{
                lipSync_1[0].addToTrackRecord("SAFE ");
                queen1.addToTrackRecord("OUT ");
                queen3.addToTrackRecord("OUT ");
            }
            i++;
        }else{
            screen.createBold(queen1.getName() + " and " + queen2.getName() + " will lipsync...");
            screen.createBold("The time has come for you to lip-sync... for your lives! Good luck, and don't fuck it up.");
            lsSong();
            screen.createBold("I've made my decision.");
            var lipSync = [queen1, queen2];
            for (var i_1 = 0; i_1 < lipSync.length; i_1++) {
                lipSync[i_1].getASLipsync();
            }
            queen1.lipsyncScore -= 4;
            lipSync.sort(function (a, b) { return (b.lipsyncScore - a.lipsyncScore); });
            if (lipSync[0].lipsyncScore == lipSync[1].lipsyncScore && lipSync[0].lipsyncScore > 6 && lipSync[1].lipsyncScore > 6) {
                screen.createImage(queen1.image, "darkblue");
                screen.createImage(queen2.image, "darkblue");
                screen.createBold("Shantay, you both stay baby!");
                currentCast.push(queen1);
                queen1.addToTrackRecord("RTRN ");
                eliminatedCast.splice(eliminatedCast.indexOf(queen1), 1);
                queen2.addToTrackRecord("SAFE ");
            } else {
                screen.createImage(lipSync[0].image, "royalblue");
                screen.createBold(lipSync[0].getName() + ", shantay you stay! ");
                if (queen1 == lipSync[0]) {
                    if (chocolateBarTwist  && !chocolateBarTwistCheck) {
                        screen.createBold(lipSync[1].getName() + ", now your fate rests in the hands of the drag gods.");
                        screen.createBold("If you have the golden chocolate bar, you will be safe.");
                        if (chocolateBarCheck(lipSync[1]) == true) {
                            currentCast.push(lipSync[0]);
                            lipSync[0].addToTrackRecord("RTRN ");
                            eliminatedCast.splice(eliminatedCast.indexOf(lipSync[0]), 1);
                            screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
                            screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
                            screen.createBold(lipSync[1].getName() + "!! Condragtulations, you are safe to slay another day!");
                            lipSync[1].addToTrackRecord("CHOC");
                            lipSync[1].unfavoritism += 3;
                            chocolateBarTwistCheck = true;
                        } else {
                            screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                            screen.createBold("It's chocolate.");
                            screen.createBold(lipSync[1].getName() + ", sashay away. ");
                            currentCast.push(lipSync[0]);
                            lipSync[0].addToTrackRecord("RTRN ");
                            eliminatedCast.splice(eliminatedCast.indexOf(lipSync[0]), 1);
                            lipSync[1].addToTrackRecord("ELIM");
                            eliminatedCast.unshift(lipSync[1]);
                            currentCast.splice(currentCast.indexOf(lipSync[1]), 1);
                            lipSync[1].unfavoritism += 5;
                            
                        }
                    } else {
                        screen.createBold(lipSync[1].getName() + ", sashay away. ");
                        currentCast.push(lipSync[0]);
                        lipSync[0].addToTrackRecord("RTRN ");
                        eliminatedCast.splice(eliminatedCast.indexOf(lipSync[0]), 1);
                        lipSync[1].addToTrackRecord("ELIM");
                        eliminatedCast.unshift(lipSync[1]);
                        currentCast.splice(currentCast.indexOf(lipSync[1]), 1);
                        lipSync[1].unfavoritism += 5;
                    }
                }else{
                    screen.createBold(lipSync[1].getName() + ", sashay away. ");
                    lipSync[0].addToTrackRecord("SAFE ");
                    lipSync[1].addToTrackRecord("OUT ");
                }
            }
        }
    }
    episodeChallenges.push("LaLaPaRUza");
    episodeCount++;
}
function queensofComedy() {
    episodeCount++;
    for (var i = 0; i < currentCast.length; i++){
        currentCast[i].episodesOn++;
    }
    episodeChallenges.push("Queens of Comedy");
    top2 = [];
    bottomQueens = [];
    let screen = new Scene();
    screen.clean();
    document.body.style.backgroundImage = "url('image/queensofcomedy.webp')";
    let qofcomedy = currentCast.slice();
    let pairs = [];
    let allofthem = [...currentCast, ...eliminatedCast];
    screen.createHeader("Queens of Comedy!!");
    screen.createParagraph("All of the eliminated All Stars get a chance to return to the competition. The queens must perform a live stand-up comedy act in front of an audience of judgmental drag queens!!");
    screen.createHorizontalLine();
    screen.createBold("The returning queens get to choose their partner... Starting with the last queen eliminated...");
    for (let i = 0; i < eliminatedCast.length; i++){
        if (eliminatedCast[i].QueenDisqOrDept == true){
            eliminatedCast[i].addToTrackRecord("");
        } else { 
            screen.createImage(eliminatedCast[i].image);
            let queen = qofcomedy[randomNumber(0, qofcomedy.length - 1)]
            screen.createImage(queen.image);
            screen.createBold(eliminatedCast[i].getName() + " chose " + queen.getName());
            eliminatedCast[i].getComedy();
            queen.getComedy();
            let sumComedy = eliminatedCast[i].performanceScore + queen.performanceScore;
            qofcomedy.splice(qofcomedy.indexOf(queen), 1);
            let team = new Team(eliminatedCast[i], queen);
            team.performanceScore = sumComedy;
            pairs.push(team);
        }
    }
    if (qofcomedy.length == 1) {
        screen.createImage(qofcomedy[0].image);
        screen.createBold("That means " + qofcomedy[0].getName() + " will work solo as the emcee of the show.");
        qofcomedy[0].getComedy();
    }
    screen.createHorizontalLine();
    sortPerformances(pairs);
    screen.createBigText("Queens' performances...");
    let slay = allofthem.filter(function (queen) { return queen.performanceScore < 6; });
    let great = allofthem.filter(function (queen) { return queen.performanceScore >= 6 && queen.performanceScore < 16; });
    let good = allofthem.filter(function (queen) { return queen.performanceScore >= 16 && queen.performanceScore < 26; });
    let bad = allofthem.filter(function (queen) { return queen.performanceScore >= 26 && queen.performanceScore < 31; });
    let flop = allofthem.filter(function (queen) { return queen.performanceScore >= 31 && queen.performanceScore < 50; });
    createPerformanceDesc(slay, great, good, bad, flop);
    comedyChallengeCounter++;
    screen.createHorizontalLine();
    screen.createImage(pairs[0].QueenA.image, "aquamarine");
    screen.createImage(pairs[0].QueenB.image, "aquamarine");
    screen.createImage(pairs[1].QueenA.image, "aquamarine");
    screen.createImage(pairs[1].QueenB.image, "aquamarine");
    screen.createBold(pairs[0].QueenA.getName() + ", " + pairs[0].QueenB.getName() + " and " + pairs[1].QueenA.getName() + ", " + pairs[1].QueenB.getName() + ". You are the top All Stars of the week.");
    top2.push(pairs[0].QueenA);
    top2.push(pairs[1].QueenA);
    pairs[0].QueenB.addToTrackRecord("  WIN");
    pairs[0].QueenB.favoritism += 5;
    pairs[0].QueenB.ppe += 5;
    pairs[1].QueenB.addToTrackRecord("  WIN");
    pairs[1].QueenB.favoritism += 5;
    pairs[1].QueenB.ppe += 5;
    // comparar solo queen to the worst duos.
    if (qofcomedy.length == 1 && qofcomedy[0].performanceScore > pairs[pairs.length - 2].QueenB.performanceScore){
        let asecond = pairs[pairs.length - 2].QueenB;
        pairs[pairs.length - 2].QueenB = qofcomedy[0];
        qofcomedy[0] = asecond;
    }
    for (let i = 2; i < pairs.length - 2; i++){
        screen.createImage(pairs[i].QueenB.image, "black");
        pairs[i].QueenB.addToTrackRecord("SAFE");
        pairs[i].QueenA.addToTrackRecord("OUT ");
        pairs[i].QueenB.ppe += 3;
    }
    if (qofcomedy.length == 1) {
        screen.createImage(qofcomedy[0].image, "black");
        qofcomedy[0].addToTrackRecord("SAFE");
        qofcomedy[0].ppe += 3;
    }
    screen.createBold("", "safe");
    let safe = document.querySelector("b#safe");
    for (let i = 2; i < pairs.length - 2; i++){
        safe.innerHTML += pairs[i].QueenB.getName() + ", ";
    }
    if (qofcomedy.length == 1) {
        safe.innerHTML +=  qofcomedy[0].getName() + ", you are safe.";
    }else{
        safe.innerHTML +=  "you are safe.";
    }
    screen.createImage(pairs[pairs.length - 1].QueenB.image, "red");
    screen.createImage(pairs[pairs.length - 2].QueenB.image, "red");
    screen.createBold(pairs[pairs.length - 1].QueenB.getName() + ", " + pairs[pairs.length - 2].QueenB.getName() + "...", "bottom");
    pairs[pairs.length - 1].QueenA.addToTrackRecord("OUT ");
    pairs[pairs.length - 2].QueenA.addToTrackRecord("OUT ");
    bottomQueens.push(pairs[pairs.length - 1].QueenB);
    bottomQueens.push(pairs[pairs.length - 2].QueenB);
    let bottom = document.querySelector("b#bottom");
    bottom.innerHTML += " I'm sorry my dears but you are up for elimination.";
    screen.createHorizontalLine();
    screen.createBigText("After deliberation...");
    for (let i = 0; i < 2; i++) {
        if (randomNumber(0, 100) <= 45)
            pairs[i].QueenA.lipstick = pairs[pairs.length - 1].QueenB;
        else
            pairs[i].QueenA.lipstick = pairs[randomNumber(pairs.length - 2, pairs.length - 1)].QueenB;
        screen.createImage(pairs[i].QueenA.image, "cyan");
        screen.createImage(pairs[i].QueenA.lipstick.image, "red");
        screen.createBold(pairs[i].QueenA.getName() + " chose " + pairs[i].QueenA.lipstick.getName() + "'s lipstick!", "winV", "winVP");
    }
    screen.createHorizontalLine();
    queensOfComedyLipsyn();
}
function queensOfComedyLipsyn() {
    for (let i = 0; i < top2.length; i++) {
        top2[i].getASLipsync();
    }
    top2.sort((a, b) => (b.lipsyncScore - a.lipsyncScore));
    let screen = new Scene();
    screen.createBold("It's time... For you to lip-sync... for your LIFE!!! Good luck, and don't fuck it up.");
    lsSong();
    screen.createHorizontalLine();
    screen.createBold("Ladies, I've made my decision...");
    if (top2[0].lipsyncScore == top2[1].lipsyncScore && top2[0].lipsyncScore > 6 && top2[1].lipsyncScore > 6 && currentCast.length > 5) {
        screen.createImage(top2[0].image, "darkblue");
        screen.createImage(top2[1].image, "darkblue");
        screen.createBold("Condragulations, you're both winners baby!");
        top2[0].favoritism += 5;
        top2[0].ppe += 5;
        top2[0].episodesOn++;
        top2[1].favoritism += 5;
        top2[1].ppe += 5;
        top2[1].episodesOn++;
        top2[0].addToTrackRecord("WIN+RTRN");
        currentCast.unshift(top2[0]);
        eliminatedCast.splice(eliminatedCast.indexOf(top2[0]), 1);
        top2[1].addToTrackRecord("WIN+RTRN");
        currentCast.unshift(top2[1]);
        eliminatedCast.splice(eliminatedCast.indexOf(top2[1]), 1);
        screen.createHorizontalLine();
        assasintable.push(top2[0].getName() + " & " + top2[1].getName());
        assasintable.push(" ");
        if (top2[0].lipstick == top2[1].lipstick) {
            assasinlipstick.push(top2[0].lipstick.getName());
            assasinlipstick.push(" ");
            screen.createImage(top2[0].lipstick.image, "red");
            if (chocolateBarTwist  && !chocolateBarTwistCheck) {
                screen.createBold(top2[0].lipstick.getName() + ", now your fate rests in the hands of the drag gods.");
                screen.createBold("If you have the golden chocolate bar, you will be safe.");
                if (chocolateBarCheck(top2[0].lipstick) == true) {
                    screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
                    screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
                    screen.createBold(top2[0].lipstick.getName() + "!! Condragtulations, you are safe to slay another day!");
                    top2[0].lipstick.addToTrackRecord("CHOC");
                    top2[0].lipstick.unfavoritism += 3;
                    top2[0].lipstick.ppe += 1;
                    chocolateBarTwistCheck = true;
                    bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                    
                } else {
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    screen.createBold(`${top2[0].lipstick.getName()}, you will always be an All Star, now, sashay away...`);
                    top2[0].lipstick.addToTrackRecord("ELIM");
                    top2[0].lipstick.unfavoritism += 5;
                    eliminatedCast.unshift(top2[0].lipstick);
                    bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                    currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
                    
                }
            } else {
                screen.createBold(`${top2[0].lipstick.getName()}, you will always be an All Star, now, sashay away...`);
                top2[0].lipstick.addToTrackRecord("ELIM");
                top2[0].lipstick.unfavoritism += 5;
                eliminatedCast.unshift(top2[0].lipstick);
                bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
            }
        }
        else {
            screen.createImage(top2[0].lipstick.image, "red");
            screen.createImage(top2[1].lipstick.image, "red");
            assasinlipstick.push(top2[0].lipstick.getName() + " & " + top2[1].lipstick.getName());
            assasinlipstick.push(" ");
            if (chocolateBarTwist  && !chocolateBarTwistCheck) {
                screen.createBold(top2[0].lipstick.getName() + ", " + top2[1].lipstick.getName() + ", now your fates rests in the hands of the drag gods.");
                screen.createBold("If one of you have the golden chocolate bar, that queen will be safe.");
                if (chocolateBarCheck(top2[0].lipstick, top2[1].lipstick) == 1) {
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    top2[1].lipstick.addToTrackRecord("ELIM");
                    top2[1].lipstick.unfavoritism += 5;
                    eliminatedCast.unshift(top2[1].lipstick);
                    bottomQueens.splice(bottomQueens.indexOf(top2[1].lipstick), 1);
                    currentCast.splice(currentCast.indexOf(top2[1].lipstick), 1);
                    screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
                    screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
                    screen.createBold(top2[0].lipstick.getName() + "!! Condragtulations, you are safe to slay another day!");
                    top2[0].lipstick.addToTrackRecord("CHOC");
                    top2[0].lipstick.unfavoritism += 3;
                    top2[0].lipstick.ppe += 1;
                    chocolateBarTwistCheck = true;
                    
                } else if (chocolateBarCheck(bottomQueens[0], bottomQueens[1]) == 2) {
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    top2[0].lipstick.addToTrackRecord("ELIM");
                    top2[0].lipstick.unfavoritism += 5;
                    eliminatedCast.unshift(top2[0].lipstick);
                    bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                    currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
                    screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
                    screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
                    screen.createBold(top2[1].lipstick.getName() + "!! Condragtulations, you are safe to slay another day!");
                    top2[1].lipstick.addToTrackRecord("CHOC");
                    top2[1].lipstick.unfavoritism += 3;
                    top2[1].lipstick.ppe += 1;
                    chocolateBarTwistCheck = true;
                    
                } else {
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    top2[0].lipstick.addToTrackRecord("ELIM");
                    top2[0].lipstick.unfavoritism += 5;
                    eliminatedCast.unshift(top2[0].lipstick);
                    bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                    currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    top2[1].lipstick.addToTrackRecord("ELIM");
                    top2[1].lipstick.unfavoritism += 5;
                    eliminatedCast.unshift(top2[1].lipstick);
                    bottomQueens.splice(bottomQueens.indexOf(top2[1].lipstick), 1);
                    currentCast.splice(currentCast.indexOf(top2[1].lipstick), 1);
                    
                }
            } else {
                screen.createBold(`${top2[0].lipstick.getName()}, ${top2[1].lipstick.getName()}, you will always be an All Star, now, sashay away...`);
                top2[0].lipstick.addToTrackRecord("ELIM");
                top2[0].lipstick.unfavoritism += 5;
                eliminatedCast.unshift(top2[0].lipstick);
                bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
                top2[1].lipstick.addToTrackRecord("ELIM");
                top2[1].lipstick.unfavoritism += 5;
                eliminatedCast.unshift(top2[1].lipstick);
                bottomQueens.splice(bottomQueens.indexOf(top2[1].lipstick), 1);
                currentCast.splice(currentCast.indexOf(top2[1].lipstick), 1);
            }
        }
    }
    else {
        top2[0].favoritism += 5;
        top2[0].ppe += 5;
        top2[0].episodesOn++;
        top2[0].addToTrackRecord("WIN+RTRN");
        currentCast.unshift(top2[0]);
        eliminatedCast.splice(eliminatedCast.indexOf(top2[0]), 1);
        screen.createImage(top2[0].image, "royalblue");
        screen.createBold(top2[0].getName() + ", you're a winner, baby!");
        top2[1].addToTrackRecord("OUT");
        top2[1].ppe += 5;
        top2[1].episodesOn++;
        assasintable.push(top2[0].getName());
        assasinlipstick.push(top2[0].lipstick.getName());
        assasintable.push(top2[1].getName());
        assasinlipstick.push(top2[1].lipstick.getName());
        screen.createImage(top2[1].image, "red");
        screen.createParagraph(top2[1].getName() + ", sashay away.");
        screen.createHorizontalLine();
        screen.createImage(top2[0].lipstick.image, "red");
        if (chocolateBarTwist  && !chocolateBarTwistCheck) {
            screen.createBold(top2[0].lipstick.getName() + ", now your fate rests in the hands of the drag gods.");
            screen.createBold("If you have the golden chocolate bar, you will be safe.");
            if (chocolateBarCheck(top2[0].lipstick) == true) {
                screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
                screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
                screen.createBold(top2[0].lipstick.getName() + "!! Condragtulations, you are safe to slay another day!");
                top2[0].lipstick.addToTrackRecord("CHOC");
                top2[0].lipstick.unfavoritism += 3;
                top2[0].lipstick.ppe += 1;
                chocolateBarTwistCheck = true;
                bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                
            } else {
                screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                screen.createBold("It's chocolate.");
                screen.createBold(`${top2[0].lipstick.getName()}, you will always be an All Star, now, sashay away...`);
                top2[0].lipstick.addToTrackRecord("ELIM");
                top2[0].lipstick.unfavoritism += 5;
                eliminatedCast.unshift(top2[0].lipstick);
                bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
                
            }
        } else {
            screen.createBold(top2[0].lipstick.getName() + ", you will always be an All Star, now, sashay away...");
            top2[0].lipstick.addToTrackRecord("ELIM");
            top2[0].lipstick.unfavoritism += 5;
            eliminatedCast.unshift(top2[0].lipstick);
            bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
            currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
        }
    }
    for (let i = 0; i < bottomQueens.length; i++) {
        if (bottomQueens.length >= 6)
            bottomQueens[i].addToTrackRecord("BTM");
        else if (bottomQueens.length == 5)
            bottomQueens[i].addToTrackRecord("BTM6");
        else if (bottomQueens.length == 4)
            bottomQueens[i].addToTrackRecord("BTM5");
        else if (bottomQueens.length == 3)
            bottomQueens[i].addToTrackRecord("BTM4");
        else if (bottomQueens.length == 2)
            bottomQueens[i].addToTrackRecord("BTM3");
        else
            bottomQueens[i].addToTrackRecord("BTM2");
        bottomQueens[i].unfavoritism += 3;
        bottomQueens[i].ppe += 1;
    }
}
function kittygirlGroup() {
    episodeCount++;
    for (var i = 0; i < currentCast.length; i++){
        currentCast[i].episodesOn++;
    }
    episodeChallenges.push("Kitty Girl Group");
    top2 = [];
    bottomQueens = [];
    let screen = new Scene();
    screen.clean();
    document.body.style.backgroundImage = "url('image/mainstage.webp')";
    let dragUpYourLife = currentCast.slice();
    let sittingOnASecret = eliminatedCast.slice();
    let allofthem = [...currentCast, ...eliminatedCast];
    screen.createHeader("Handmaids to Kitty Girls!!");
    screen.createParagraph("The eliminated queens return to the competition for revenge. But first the queens must audition for RuPaul's new girl group, the Kitty Girls!!");
    screen.createBold("Group 1: Top " + dragUpYourLife.length);
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < dragUpYourLife.length; i++) {
        dragUpYourLife[i].getRumix();
        screen.createImage(dragUpYourLife[i].image, "black");
        sum1 += dragUpYourLife[i].performanceScore;
    }
    screen.createBold("Group 2: Eliminated Queens");
    for (let i = 0; i < sittingOnASecret.length; i++) {
        if (sittingOnASecret[i].QueenDisqOrDept == true){
            sittingOnASecret[i].addToTrackRecord("");
            sittingOnASecret.splice(i, 1);
            i--;
        } else {
            sittingOnASecret[i].getRumix();
            screen.createImage(sittingOnASecret[i].image, "black");
            sum2 += sittingOnASecret[i].performanceScore;
        }
    }
    screen.createHorizontalLine();
    sortPerformances(dragUpYourLife);
    sortPerformances(sittingOnASecret);
    screen.createBigText("Queens' performances...");
    let slay = allofthem.filter(function (queen) { return queen.performanceScore < 6; });
    let great = allofthem.filter(function (queen) { return queen.performanceScore >= 6 && queen.performanceScore < 16; });
    let good = allofthem.filter(function (queen) { return queen.performanceScore >= 16 && queen.performanceScore < 26; });
    let bad = allofthem.filter(function (queen) { return queen.performanceScore >= 26 && queen.performanceScore < 31; });
    let flop = allofthem.filter(function (queen) { return queen.performanceScore >= 31 && queen.performanceScore < 50; });
    createPerformanceDesc(slay, great, good, bad, flop);
    screen.createHorizontalLine();
    screen.createBold("Ladies, I've made my decision...");
    if (sum1 <= sum2) { 
        screen.createBold("My Top " + dragUpYourLife.length + " queens, condragulations, you're the winning team");
        screen.createImage(dragUpYourLife[0].image, "cyan");
        screen.createImage(dragUpYourLife[1].image, "cyan");
        screen.createBold(dragUpYourLife[0].getName() + " and " + dragUpYourLife[1].getName()+ ", you are the Top 2 All Stars of the week.");
        top2.push(dragUpYourLife[0]);
        top2.push(dragUpYourLife[1]);
        for (let i = 2; i < dragUpYourLife.length - 2; i++){
            screen.createImage(dragUpYourLife[i].image, "black");
            dragUpYourLife[i].addToTrackRecord("SAFE");
            dragUpYourLife[i].ppe += 3;
        }
        screen.createBold("", "safe");
        let safe = document.querySelector("b#safe");
        for (let i = 2; i < dragUpYourLife.length - 2; i++){
            safe.innerHTML += dragUpYourLife[i].getName() + ", ";
        }
        safe.innerHTML +=  "you are safe.";
        screen.createImage(dragUpYourLife[dragUpYourLife.length - 1].image, "red");
        screen.createImage(dragUpYourLife[dragUpYourLife.length - 2].image, "red");
        screen.createBold(dragUpYourLife[dragUpYourLife.length - 1].getName() + ", " + dragUpYourLife[dragUpYourLife.length - 2].getName() + "...", "bottom");
        bottomQueens.push(dragUpYourLife[dragUpYourLife.length - 1]);
        bottomQueens.push(dragUpYourLife[dragUpYourLife.length - 2]);
        let bottom = document.querySelector("b#bottom");
        bottom.innerHTML += " I'm sorry my dears but you are up for elimination.";
        screen.createHorizontalLine();
        screen.createBigText("After deliberation...");
        for (let i = 0; i < 2; i++) {
            if (randomNumber(0, 100) <= 45)
                dragUpYourLife[i].lipstick = dragUpYourLife[dragUpYourLife.length - 1];
            else
                dragUpYourLife[i].lipstick = dragUpYourLife[randomNumber(dragUpYourLife.length - 2, dragUpYourLife.length - 1)];
            screen.createImage(dragUpYourLife[i].image, "cyan");
            screen.createImage(dragUpYourLife[i].lipstick.image, "red");
            screen.createBold(dragUpYourLife[i].getName() + " chose " + dragUpYourLife[i].lipstick.getName() + "'s lipstick!", "winV", "winVP");
        }
        screen.createHorizontalLine();
        topKittyWinLipsync(sittingOnASecret);
    } else {
        screen.createBold("My Eliminated queens, condragulations, you're the winning team");
        screen.createImage(sittingOnASecret[0].image, "cyan");
        screen.createImage(sittingOnASecret[1].image, "cyan");
        screen.createBold(sittingOnASecret[0].getName() + " and " + sittingOnASecret[1].getName()+ ", you are the Top 2 All Stars of the week.");
        top2.push(sittingOnASecret[0]);
        top2.push(sittingOnASecret[1]);
        for (let i = 2; i < sittingOnASecret.length; i++){
            sittingOnASecret[i].addToTrackRecord("OUT ");
        }
        for (let i = 0; i < dragUpYourLife.length; i++) {
            screen.createImage(dragUpYourLife[i].image, "red");
            bottomQueens.push(dragUpYourLife[i]);
        }
        screen.createBold("You are all up for elimination.");
        screen.createHorizontalLine();
        screen.createBigText("After deliberation...");
        for (let i = 0; i < 2; i++) {
            if (randomNumber(0, 100) <= 45)
                sittingOnASecret[i].lipstick = dragUpYourLife[dragUpYourLife.length - 1];
            else
                sittingOnASecret[i].lipstick = dragUpYourLife[randomNumber(0, dragUpYourLife.length - 1)];
            screen.createImage(sittingOnASecret[i].image, "cyan");
            screen.createImage(sittingOnASecret[i].lipstick.image, "red");
            screen.createBold(sittingOnASecret[i].getName() + " chose " + sittingOnASecret[i].lipstick.getName() + "'s lipstick!", "winV", "winVP");
        }
        screen.createHorizontalLine();
        eliminatedKittyWinLipsync();
    }
}
function topKittyWinLipsync(sittingOnASecret) {
    for (let i = 0; i < top2.length; i++) {
        top2[i].getASLipsync();
    }
    top2.sort((a, b) => (b.lipsyncScore - a.lipsyncScore));
    let screen = new Scene();
    screen.createBold("It's time... For you to lip-sync... for your legacy!!! Good luck, and don't fuck it up.");
    lsSong();
    screen.createHorizontalLine();
    screen.createBold("Ladies, I've made my decision...");
    if (top2[0].lipsyncScore == top2[1].lipsyncScore && top2[0].lipsyncScore > 6 && top2[1].lipsyncScore > 6) {
        screen.createImage(top2[0].image, "darkblue");
        screen.createImage(top2[1].image, "darkblue");
        screen.createBold("Condragulations, you're both winners baby!");
        top2[0].favoritism += 5;
        top2[0].ppe += 5;
        top2[1].favoritism += 5;
        top2[1].ppe += 5;
        top2[0].addToTrackRecord(" WIN");
        top2[1].addToTrackRecord(" WIN");
        screen.createHorizontalLine();
        assasintable.push(top2[0].getName() + " & " + top2[1].getName());
        assasintable.push(" ");
        if (top2[0].lipstick == top2[1].lipstick) {
            assasinlipstick.push(top2[0].lipstick.getName());
            assasinlipstick.push(" ");
            screen.createImage(top2[0].lipstick.image, "red");
            if (chocolateBarTwist  && !chocolateBarTwistCheck) {
                screen.createBold(top2[0].lipstick.getName() + ", now your fate rests in the hands of the drag gods.");
                screen.createBold("If you have the golden chocolate bar, you will be safe.");
                if (chocolateBarCheck(top2[0].lipstick) == true) {
                    screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
                    screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
                    screen.createBold(top2[0].lipstick.getName() + "!! Condragtulations, you are safe to slay another day!");
                    top2[0].lipstick.addToTrackRecord("CHOC");
                    top2[0].lipstick.unfavoritism += 3;
                    top2[0].lipstick.ppe += 1;
                    chocolateBarTwistCheck = true;
                    bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                    
                } else {
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    screen.createBold(`${top2[0].lipstick.getName()}, you will always be an All Star, now, sashay away...`);
                    top2[0].lipstick.addToTrackRecord("ELIM");
                    top2[0].lipstick.unfavoritism += 5;
                    eliminatedCast.unshift(top2[0].lipstick);
                    bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                    currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
                    
                }
            } else {
                screen.createBold(`${top2[0].lipstick.getName()}, you will always be an All Star, now, sashay away...`);
                top2[0].lipstick.addToTrackRecord("ELIM");
                top2[0].lipstick.unfavoritism += 5;
                eliminatedCast.unshift(top2[0].lipstick);
                bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
            }
        }
        else {
            screen.createImage(top2[0].lipstick.image, "red");
            screen.createImage(top2[1].lipstick.image, "red");
            assasinlipstick.push(top2[0].lipstick.getName() + " & " + top2[1].lipstick.getName());
            assasinlipstick.push(" ");
            if (chocolateBarTwist  && !chocolateBarTwistCheck) {
                screen.createBold(top2[0].lipstick.getName() + ", " + top2[1].lipstick.getName() + ", now your fates rests in the hands of the drag gods.");
                screen.createBold("If one of you have the golden chocolate bar, that queen will be safe.");
                if (chocolateBarCheck(top2[0].lipstick, top2[1].lipstick) == 1) {
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    top2[1].lipstick.addToTrackRecord("ELIM");
                    top2[1].lipstick.unfavoritism += 5;
                    eliminatedCast.unshift(top2[1].lipstick);
                    bottomQueens.splice(bottomQueens.indexOf(top2[1].lipstick), 1);
                    currentCast.splice(currentCast.indexOf(top2[1].lipstick), 1);
                    screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
                    screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
                    screen.createBold(top2[0].lipstick.getName() + "!! Condragtulations, you are safe to slay another day!");
                    top2[0].lipstick.addToTrackRecord("CHOC");
                    top2[0].lipstick.unfavoritism += 3;
                    top2[0].lipstick.ppe += 1;
                    chocolateBarTwistCheck = true;
                    
                } else if (chocolateBarCheck(bottomQueens[0], bottomQueens[1]) == 2) {
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    top2[0].lipstick.addToTrackRecord("ELIM");
                    top2[0].lipstick.unfavoritism += 5;
                    eliminatedCast.unshift(top2[0].lipstick);
                    bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                    currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
                    screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
                    screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
                    screen.createBold(top2[1].lipstick.getName() + "!! Condragtulations, you are safe to slay another day!");
                    top2[1].lipstick.addToTrackRecord("CHOC");
                    top2[1].lipstick.unfavoritism += 3;
                    top2[1].lipstick.ppe += 1;
                    chocolateBarTwistCheck = true;
                    
                } else {
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    top2[0].lipstick.addToTrackRecord("ELIM");
                    top2[0].lipstick.unfavoritism += 5;
                    eliminatedCast.unshift(top2[0].lipstick);
                    bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                    currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    top2[1].lipstick.addToTrackRecord("ELIM");
                    top2[1].lipstick.unfavoritism += 5;
                    eliminatedCast.unshift(top2[1].lipstick);
                    bottomQueens.splice(bottomQueens.indexOf(top2[1].lipstick), 1);
                    currentCast.splice(currentCast.indexOf(top2[1].lipstick), 1);
                    
                }
            } else {
                screen.createBold(`${top2[0].lipstick.getName()}, ${top2[1].lipstick.getName()}, you will always be an All Star, now, sashay away...`);
                top2[0].lipstick.addToTrackRecord("ELIM");
                top2[0].lipstick.unfavoritism += 5;
                eliminatedCast.unshift(top2[0].lipstick);
                bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
                top2[1].lipstick.addToTrackRecord("ELIM");
                top2[1].lipstick.unfavoritism += 5;
                eliminatedCast.unshift(top2[1].lipstick);
                bottomQueens.splice(bottomQueens.indexOf(top2[1].lipstick), 1);
                currentCast.splice(currentCast.indexOf(top2[1].lipstick), 1);
            }
        }
        screen.createHorizontalLine();
        screen.createBold("Now... Which queen have you both chosen to bring back to the competition?");
        for (let i = 0; i < 2; i++) {
            if (randomNumber(0, 100) <= 45)
                top2[i].lipstick = sittingOnASecret[0];
            else
                top2[i].lipstick = sittingOnASecret[randomNumber(0, sittingOnASecret.length - 1)];
            screen.createImage(top2[i].image, "cyan");
            screen.createImage(top2[i].lipstick.image, "green");
            screen.createBold(top2[i].getName() + " chose " + top2[i].lipstick.getName() + " to return to the competition!!");
        }
        if (top2[0].lipstick == top2[1].lipstick) {
            top2[0].lipstick.addToTrackRecord("RTRN ");
            currentCast.unshift(top2[0].lipstick);
            eliminatedCast.splice(eliminatedCast.indexOf(top2[0].lipstick), 1);
            sittingOnASecret.splice(sittingOnASecret.indexOf(top2[0].lipstick), 1);
            for (let i = 0; i < sittingOnASecret.length; i++){
                sittingOnASecret[i].addToTrackRecord("OUT ");
            }
        } else {
            top2[0].lipstick.addToTrackRecord("RTRN ");
            top2[1].lipstick.addToTrackRecord("RTRN ");
            currentCast.unshift(top2[0].lipstick);
            currentCast.unshift(top2[1].lipstick);
            eliminatedCast.splice(eliminatedCast.indexOf(top2[0].lipstick), 1);
            eliminatedCast.splice(eliminatedCast.indexOf(top2[1].lipstick), 1);
            sittingOnASecret.splice(sittingOnASecret.indexOf(top2[0].lipstick), 1);
            sittingOnASecret.splice(sittingOnASecret.indexOf(top2[1].lipstick), 1);
            for (let i = 0; i < sittingOnASecret.length; i++){
                sittingOnASecret[i].addToTrackRecord("OUT ");
            }
        }
    }
    else {
        top2[0].favoritism += 5;
        top2[0].ppe += 5;
        top2[0].addToTrackRecord("WIN");
        screen.createImage(top2[0].image, "royalblue");
        screen.createBold(top2[0].getName() + ", you're a winner, baby!");
        top2[1].addToTrackRecord("WIN ");
        top2[1].ppe += 5;
        assasintable.push(top2[0].getName());
        assasinlipstick.push(top2[0].lipstick.getName());
        assasintable.push(top2[1].getName());
        assasinlipstick.push(top2[1].lipstick.getName());
        screen.createHorizontalLine();
        screen.createImage(top2[0].lipstick.image, "red");
        if (chocolateBarTwist  && !chocolateBarTwistCheck) {
            screen.createBold(top2[0].lipstick.getName() + ", now your fate rests in the hands of the drag gods.");
            screen.createBold("If you have the golden chocolate bar, you will be safe.");
            if (chocolateBarCheck(top2[0].lipstick) == true) {
                screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
                screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
                screen.createBold(top2[0].lipstick.getName() + "!! Condragtulations, you are safe to slay another day!");
                top2[0].lipstick.addToTrackRecord("CHOC");
                top2[0].lipstick.unfavoritism += 3;
                top2[0].lipstick.ppe += 1;
                chocolateBarTwistCheck = true;
                bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                
            } else {
                screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                screen.createBold("It's chocolate.");
                screen.createBold(`${top2[0].lipstick.getName()}, you will always be an All Star, now, sashay away...`);
                top2[0].lipstick.addToTrackRecord("ELIM");
                top2[0].lipstick.unfavoritism += 5;
                eliminatedCast.unshift(top2[0].lipstick);
                bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
                
            }
        } else {
            screen.createBold(top2[0].lipstick.getName() + ", you will always be an All Star, now, sashay away...");
            top2[0].lipstick.addToTrackRecord("ELIM");
            top2[0].lipstick.unfavoritism += 5;
            eliminatedCast.unshift(top2[0].lipstick);
            bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
            currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
        } 
        screen.createHorizontalLine();
        screen.createBold("Now... Which queen have you chosen to bring back to the competition?");
        if (randomNumber(0, 100) <= 45)
            top2[0].lipstick = sittingOnASecret[0];
        else
            top2[0].lipstick = sittingOnASecret[randomNumber(0, sittingOnASecret.length - 1)];
        screen.createImage(top2[0].image, "cyan");
        screen.createImage(top2[0].lipstick.image, "green");
        screen.createBold(top2[0].getName() + " chose " + top2[0].lipstick.getName() + " to return to the competition!!");
        top2[0].lipstick.addToTrackRecord("RTRN ");
        currentCast.unshift(top2[0].lipstick);
        eliminatedCast.splice(eliminatedCast.indexOf(top2[0].lipstick), 1);
        sittingOnASecret.splice(sittingOnASecret.indexOf(top2[0].lipstick), 1);
        for (let i = 0; i < sittingOnASecret.length; i++){
            sittingOnASecret[i].addToTrackRecord("OUT ");
        }
    }
    for (let i = 0; i < bottomQueens.length; i++) {
        if (bottomQueens.length >= 6)
            bottomQueens[i].addToTrackRecord("BTM");
        else if (bottomQueens.length == 5)
            bottomQueens[i].addToTrackRecord("BTM6");
        else if (bottomQueens.length == 4)
            bottomQueens[i].addToTrackRecord("BTM5");
        else if (bottomQueens.length == 3)
            bottomQueens[i].addToTrackRecord("BTM4");
        else if (bottomQueens.length == 2)
            bottomQueens[i].addToTrackRecord("BTM3");
        else
            bottomQueens[i].addToTrackRecord("BTM2");
        bottomQueens[i].unfavoritism += 3;
        bottomQueens[i].ppe += 1;
    }
}
function eliminatedKittyWinLipsync() {
    for (let i = 0; i < top2.length; i++) {
        top2[i].getASLipsync();
    }
    top2.sort((a, b) => (b.lipsyncScore - a.lipsyncScore));
    let screen = new Scene();
    screen.createBold("It's time... For you to lip-sync... for your LIFE!!! Good luck, and don't fuck it up.");
    lsSong();
    screen.createHorizontalLine();
    screen.createBold("Ladies, I've made my decision...");
    if (top2[0].lipsyncScore == top2[1].lipsyncScore && top2[0].lipsyncScore > 6 && top2[1].lipsyncScore > 6) {
        screen.createImage(top2[0].image, "darkblue");
        screen.createImage(top2[1].image, "darkblue");
        screen.createBold("Condragulations, you're both winners baby!");
        top2[0].favoritism += 5;
        top2[0].ppe += 5;
        top2[0].episodesOn++;
        top2[1].favoritism += 5;
        top2[1].ppe += 5;
        top2[1].episodesOn++;
        top2[0].addToTrackRecord("WIN+RTRN");
        currentCast.unshift(top2[0]);
        eliminatedCast.splice(eliminatedCast.indexOf(top2[0]), 1);
        top2[1].addToTrackRecord("WIN+RTRN");
        currentCast.unshift(top2[1]);
        eliminatedCast.splice(eliminatedCast.indexOf(top2[1]), 1);
        screen.createHorizontalLine();
        assasintable.push(top2[0].getName() + " & " + top2[1].getName());
        assasintable.push(" ");
        if (top2[0].lipstick == top2[1].lipstick) {
            assasinlipstick.push(top2[0].lipstick.getName());
            assasinlipstick.push(" ");
            screen.createImage(top2[0].lipstick.image, "red");
            if (chocolateBarTwist  && !chocolateBarTwistCheck) {
                screen.createBold(top2[0].lipstick.getName() + ", now your fate rests in the hands of the drag gods.");
                screen.createBold("If you have the golden chocolate bar, you will be safe.");
                if (chocolateBarCheck(top2[0].lipstick) == true) {
                    screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
                    screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
                    screen.createBold(top2[0].lipstick.getName() + "!! Condragtulations, you are safe to slay another day!");
                    top2[0].lipstick.addToTrackRecord("CHOC");
                    top2[0].lipstick.unfavoritism += 3;
                    top2[0].lipstick.ppe += 1;
                    chocolateBarTwistCheck = true;
                    bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                    
                } else {
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    screen.createBold(`${top2[0].lipstick.getName()}, you will always be an All Star, now, sashay away...`);
                    top2[0].lipstick.addToTrackRecord("ELIM");
                    top2[0].lipstick.unfavoritism += 5;
                    eliminatedCast.unshift(top2[0].lipstick);
                    bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                    currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
                    
                }
            } else {
                screen.createBold(`${top2[0].lipstick.getName()}, you will always be an All Star, now, sashay away...`);
                top2[0].lipstick.addToTrackRecord("ELIM");
                top2[0].lipstick.unfavoritism += 5;
                eliminatedCast.unshift(top2[0].lipstick);
                bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
            }
        }
        else {
            screen.createImage(top2[0].lipstick.image, "red");
            screen.createImage(top2[1].lipstick.image, "red");
            assasinlipstick.push(top2[0].lipstick.getName() + " & " + top2[1].lipstick.getName());
            assasinlipstick.push(" ");
            if (chocolateBarTwist  && !chocolateBarTwistCheck) {
                screen.createBold(top2[0].lipstick.getName() + ", " + top2[1].lipstick.getName() + ", now your fates rests in the hands of the drag gods.");
                screen.createBold("If one of you have the golden chocolate bar, that queen will be safe.");
                if (chocolateBarCheck(top2[0].lipstick, top2[1].lipstick) == 1) {
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    top2[1].lipstick.addToTrackRecord("ELIM");
                    top2[1].lipstick.unfavoritism += 5;
                    eliminatedCast.unshift(top2[1].lipstick);
                    bottomQueens.splice(bottomQueens.indexOf(top2[1].lipstick), 1);
                    currentCast.splice(currentCast.indexOf(top2[1].lipstick), 1);
                    screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
                    screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
                    screen.createBold(top2[0].lipstick.getName() + "!! Condragtulations, you are safe to slay another day!");
                    top2[0].lipstick.addToTrackRecord("CHOC");
                    top2[0].lipstick.unfavoritism += 3;
                    top2[0].lipstick.ppe += 1;
                    chocolateBarTwistCheck = true;
                    
                } else if (chocolateBarCheck(bottomQueens[0], bottomQueens[1]) == 2) {
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    top2[0].lipstick.addToTrackRecord("ELIM");
                    top2[0].lipstick.unfavoritism += 5;
                    eliminatedCast.unshift(top2[0].lipstick);
                    bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                    currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
                    screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
                    screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
                    screen.createBold(top2[1].lipstick.getName() + "!! Condragtulations, you are safe to slay another day!");
                    top2[1].lipstick.addToTrackRecord("CHOC");
                    top2[1].lipstick.unfavoritism += 3;
                    top2[1].lipstick.ppe += 1;
                    chocolateBarTwistCheck = true;
                    
                } else {
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    top2[0].lipstick.addToTrackRecord("ELIM");
                    top2[0].lipstick.unfavoritism += 5;
                    eliminatedCast.unshift(top2[0].lipstick);
                    bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                    currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
                    screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                    screen.createBold("It's chocolate.");
                    top2[1].lipstick.addToTrackRecord("ELIM");
                    top2[1].lipstick.unfavoritism += 5;
                    eliminatedCast.unshift(top2[1].lipstick);
                    bottomQueens.splice(bottomQueens.indexOf(top2[1].lipstick), 1);
                    currentCast.splice(currentCast.indexOf(top2[1].lipstick), 1);
                    
                }
            } else { 
                screen.createBold(`${top2[0].lipstick.getName()}, ${top2[1].lipstick.getName()}, you will always be an All Star, now, sashay away...`);
                top2[0].lipstick.addToTrackRecord("ELIM");
                top2[0].lipstick.unfavoritism += 5;
                eliminatedCast.unshift(top2[0].lipstick);
                bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
                top2[1].lipstick.addToTrackRecord("ELIM");
                top2[1].lipstick.unfavoritism += 5;
                eliminatedCast.unshift(top2[1].lipstick);
                bottomQueens.splice(bottomQueens.indexOf(top2[1].lipstick), 1);
                currentCast.splice(currentCast.indexOf(top2[1].lipstick), 1);
            }
        }
    }
    else {
        top2[0].favoritism += 5;
        top2[0].ppe += 5;
        top2[0].episodesOn++;
        top2[0].addToTrackRecord("WIN+RTRN");
        currentCast.unshift(top2[0]);
        eliminatedCast.splice(eliminatedCast.indexOf(top2[0]), 1);
        screen.createImage(top2[0].image, "royalblue");
        screen.createBold(top2[0].getName() + ", you're a winner, baby!");
        top2[1].addToTrackRecord("OUT");
        top2[1].ppe += 5;
        top2[1].episodesOn++;
        assasintable.push(top2[0].getName());
        assasinlipstick.push(top2[0].lipstick.getName());
        assasintable.push(top2[1].getName());
        assasinlipstick.push(top2[1].lipstick.getName());
        screen.createImage(top2[1].image, "red");
        screen.createParagraph(top2[1].getName() + ", sashay away.");
        screen.createHorizontalLine();
        screen.createImage(top2[0].lipstick.image, "red");
        if (chocolateBarTwist  && !chocolateBarTwistCheck) {
            screen.createBold(top2[0].lipstick.getName() + ", now your fate rests in the hands of the drag gods.");
            screen.createBold("If you have the golden chocolate bar, you will be safe.");
            if (chocolateBarCheck(top2[0].lipstick) == true) {
                screen.createImage("image/ChocolateBarWithTicket.webp", "gold");
                screen.createBold("You've got the GOLD BAR!!!! The gods have spoken!");
                screen.createBold(top2[0].lipstick.getName() + "!! Condragtulations, you are safe to slay another day!");
                top2[0].lipstick.addToTrackRecord("CHOC");
                top2[0].lipstick.unfavoritism += 3;
                top2[0].lipstick.ppe += 1;
                chocolateBarTwistCheck = true;
                bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                
            } else {
                screen.createImage("image/ChocolateBarWithNoTicket.webp", "brown");
                screen.createBold("It's chocolate.");
                screen.createBold(`${top2[0].lipstick.getName()}, you will always be an All Star, now, sashay away...`);
                top2[0].lipstick.addToTrackRecord("ELIM");
                top2[0].lipstick.unfavoritism += 5;
                eliminatedCast.unshift(top2[0].lipstick);
                bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
                currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
                
            }
        } else {
            screen.createBold(top2[0].lipstick.getName() + ", you will always be an All Star, now, sashay away...");
            top2[0].lipstick.addToTrackRecord("ELIM");
            top2[0].lipstick.unfavoritism += 5;
            eliminatedCast.unshift(top2[0].lipstick);
            bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
            currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
        }
    }
    for (let i = 0; i < bottomQueens.length; i++) {
        if (bottomQueens.length >= 6)
            bottomQueens[i].addToTrackRecord("BTM");
        else if (bottomQueens.length == 5)
            bottomQueens[i].addToTrackRecord("BTM6");
        else if (bottomQueens.length == 4)
            bottomQueens[i].addToTrackRecord("BTM5");
        else if (bottomQueens.length == 3)
            bottomQueens[i].addToTrackRecord("BTM4");
        else if (bottomQueens.length == 2)
            bottomQueens[i].addToTrackRecord("BTM3");
        else
            bottomQueens[i].addToTrackRecord("BTM2");
        bottomQueens[i].unfavoritism += 3;
        bottomQueens[i].ppe += 1;
    }
}
let twinsMakeover = [];
let conjoinedCheck = false;
function queensConjoined() { 
    episodeCount++;
    for (var i = 0; i < currentCast.length; i++){
        currentCast[i].episodesOn++;
    }
    episodeChallenges.push("Conjoined Makeover");
    safeQueens = [];
    topQueens = [];
    bottomQueens = [];
    top2 = [];
    let screen = new Scene();
    screen.clean();
    conjoinedCheck = true;
    document.body.style.backgroundImage = "url('image/mainstage.webp')";
    let conjoined = eliminatedCast.slice();
    screen.createHeader("Conjoined Queens!!");
    screen.createParagraph("The eliminated queens will pair up with current contestants in a conjoined drag twin challenge, fighting for a chance to get back in the game.!!");
    screen.createHorizontalLine();
    screen.createBold("The current contestants get to choose their partner...");
    for (let i = 0; i < conjoined.length; i++) {
        if (conjoined[i].QueenDisqOrDept == true){
            conjoined[i].addToTrackRecord("");
            conjoined.splice(i, 1);
        }
    }
    for (let i = 0; i < currentCast.length; i++){
        if (conjoined.length == 0) {
            screen.createImage(currentCast[i].image);
            screen.createBold("That means " + currentCast[i].getName() + " will makeover one of the pitcrew member.");
            currentCast[i].getDesign();
            twinsMakeover.push(currentCast[i]);
        } else { 
            screen.createImage(currentCast[i].image);
            let queen = conjoined[randomNumber(0, conjoined.length - 1)]
            screen.createImage(queen.image);
            screen.createBold(currentCast[i].getName() + " chose " + queen.getName());
            conjoined.splice(conjoined.indexOf(queen), 1);
            currentCast[i].getDesign();
            twinsMakeover.push(currentCast[i], queen);
        }
    }
    if (conjoined.length >= 1) {
        for (let i = 0; i < conjoined.length; i++)
            conjoined[i].addToTrackRecord("");
    }
    screen.createHorizontalLine();
    sortPerformances(currentCast);
    screen.createBigText("Queens' performances...");
    let slay = currentCast.filter(function (queen) { return queen.performanceScore < 6; });
    let great = currentCast.filter(function (queen) { return queen.performanceScore >= 6 && queen.performanceScore < 16; });
    let good = currentCast.filter(function (queen) { return queen.performanceScore >= 16 && queen.performanceScore < 26; });
    let bad = currentCast.filter(function (queen) { return queen.performanceScore >= 26 && queen.performanceScore < 31; });
    let flop = currentCast.filter(function (queen) { return queen.performanceScore >= 31 && queen.performanceScore < 50; });
    createPerformanceDesc(slay, great, good, bad, flop);
    makeoverCounter = true;
    screen.createHorizontalLine();
    screen.createButton("Proceed", "judging()");
    let button = document.querySelector("button[onclick='newEpisode()']");
    button.remove();
}
function conjoinedReturn(winner, secondWinner = "") {
    let screen = new Scene();
    if (secondWinner == "") {
        for (let i = 0; i < twinsMakeover.length - 1; i++) {
            if (winner == twinsMakeover[i]){
                screen.createImage(twinsMakeover[i+1].image, "orange");
                screen.createBold(twinsMakeover[i+1].getName() + ", you are back in the competition");
                twinsMakeover[i+1].addToTrackRecord("RTRN ");
                currentCast.push(twinsMakeover[i+1])
                eliminatedCast.splice(eliminatedCast.indexOf(twinsMakeover[i+1]), 1);
            }
        }
    } else { 
        for (let i = 0; i < twinsMakeover.length - 1; i++) {
            if (winner == twinsMakeover[i]){
                screen.createImage(twinsMakeover[i+1].image, "orange");
                screen.createBold(twinsMakeover[i+1].getName() + ", you are back in the competition");
                twinsMakeover[i+1].addToTrackRecord("RTRN ");
                currentCast.push(twinsMakeover[i+1])
                eliminatedCast.splice(eliminatedCast.indexOf(twinsMakeover[i+1]), 1);
            }
            if (secondWinner == twinsMakeover[i]){
                screen.createImage(twinsMakeover[i+1].image, "orange");
                screen.createBold(twinsMakeover[i+1].getName() + ", you are back in the competition");
                twinsMakeover[i+1].addToTrackRecord("RTRN ");
                currentCast.push(twinsMakeover[i+1])
                eliminatedCast.splice(eliminatedCast.indexOf(twinsMakeover[i+1]), 1);
            }
        }
    }
    
    for (let i = 0; i < eliminatedCast.length; i++) {
        if (eliminatedCast[i].QueenDisqOrDept == true){
            //do nothing
        } else {
            eliminatedCast[i].addToTrackRecord("OUT ");
        }
    }
}
function giveChocolate() {
    let screen = new Scene();
    screen.clean();
    document.body.style.backgroundImage = "url('image/chocolate.webp')";
    let title = document.querySelector("h1#MainTitle");
    let goldenChecker = false;
    title.innerHTML = "Chocolate Bar Selection";
    screen.createBold("For this season, we're doing things a little differently, and when it comes to saving queens, I'm leaving it up to the Drag Gods.")
    screen.createBold("Now, you all may pick a bar one at a time.");
    for (let i = 0; i < currentCast.length; i++) {
        screen.createImage(currentCast[i].image , "gold");
        screen.createImage("image/ChocolateBarTBA.webp", "grey")
        screen.createBold(currentCast[i].getName() + " picks their Chocolate bar...");
        fullCast.push(currentCast[i]);
        if (randomNumber(0, 100) >= 90) {
            if (!goldenChecker) {
                currentCast[i].chocolate = true;
                goldenChecker = true;
            } else {
                currentCast[i].chocolate = false;
            }
        } else {
            currentCast[i].chocolate = false;
        }
    }
    if (!goldenChecker) {
        let number = randomNumber(0, currentCast.length - 1);
        currentCast[number].chocolate = true;
        goldenChecker = true;
    }
    if (s14Premiere) {
        chocolateBarTwistCheck = true;
    }
    if (s6Premiere || s12Premiere || s14Premiere) {
        screen.createButton("Proceed", "doublePremiere()");
    }
    else if (porkchopPremiere) {
        screen.createButton("Proceed", "porkchopLipsyncs()");
    }
    else {
        screen.createButton("Proceed", "newEpisode()");
    }
}
function chooseGoldenBar() {
    let screen = new Scene();
    screen.clean();
    document.body.style.backgroundImage = "url('image/chocolate.webp')";
    let title = document.querySelector("h1#MainTitle");
    title.innerHTML = "Chocolate Bar Selection";
    screen.createBold("For this season, we're doing things a little differently, and when it comes to saving queens, I'm leaving it up to the Drag Gods.")
    screen.createBold("Select which queen will recieve the Golden Chocolate Bar.");
    let main = document.querySelector("div#MainBlock");
    let castSelection = document.createElement("p");
    castSelection.setAttribute("id", "castSelection");
    castSelection.innerHTML = '';
    let select = document.createElement("select");
    select.setAttribute("id", "queenList");
    select.setAttribute("onchange", "returnImg()");
    let img = document.createElement("img");
    img.setAttribute("id", "images");
    img.setAttribute("style", "width: 105px; height: 105px;");
    let p = document.createElement("p");
    p.appendChild(img);
    for (let k = 0; k < currentCast.length; k++) {
        let option = document.createElement("option");
        option.innerHTML = currentCast[k].getName();
        option.value = currentCast[k].image;
        select.add(option);
    }
    select.selectedIndex = randomNumber(0, currentCast.length - 1);
    let br = document.createElement("br");
    castSelection.appendChild(p);
    castSelection.appendChild(select);
    castSelection.appendChild(br);
    main.appendChild(castSelection);
    returnImg();
    screen.createButton("Choose Queen", "fijarGoldenQueen()", "fijar");
    for (let i = 0; i < currentCast.length; i++) {
        fullCast.push(currentCast[i]);
    }
}
function fijarGoldenQueen() {
    let screen = new Scene();
    let select = document.getElementById("queenList");
    let value = select.options[select.selectedIndex].text;
    let button = document.getElementById("fijar");
    let queen;
    for (let k = 0; k < currentCast.length; k++) {
        if (value == currentCast[k].getName()){
            queen = currentCast[k];
        }
    }
    button.remove();
    select.remove();
    screen.createBold(queen.getName());
    queen.chocolate = true;
    if (s14Premiere) {
        chocolateBarTwistCheck = true;
    }
    if (s6Premiere || s12Premiere || s14Premiere) {
        screen.createButton("Proceed", "doublePremiere()");
    }
    else if (porkchopPremiere) {
        screen.createButton("Proceed", "porkchopLipsyncs()");
    }
    else {
        screen.createButton("Proceed", "newEpisode()");
    }
}
function chocolateBarCheck(queen, queen2 = "") {
    if (queen2 == "") {
        if (queen.chocolate == true) {
            return true;
        } else { 
            return false;
        }
    } else {
        if (queen.chocolate == true) {
            return 1;
        } else if (queen2.chocolate == true) { 
            return 2;
        } else {
            return false;
        }
    }
}
class Scene {
    constructor() {
        this._MainBlock = document.querySelector("div#MainBlock");
    }
    clean() {
        this._MainBlock.innerHTML = '';
    }
    createHeader(text) {
        let title = document.getElementById("MainTitle");
        title.innerHTML = text;
    }
    createBigText(text) {
        let big = document.createElement("big");
        let p = document.createElement("p");
        big.innerHTML = text;
        p.appendChild(big);
        this._MainBlock.appendChild(p);
    }
    createParagraph(text, id = '') {
        let p = document.createElement("p");
        p.innerHTML = text;
        p.setAttribute("id", id);
        this._MainBlock.appendChild(p);
    }
    createBold(text, id = '', id1 = '') {
        let p = document.createElement("p");
        let bold = document.createElement("b");
        bold.innerHTML = text;
        bold.setAttribute("id", id);
        p.setAttribute("id", id1);
        p.appendChild(bold);
        this._MainBlock.appendChild(p);
    }
    createButton(text, method, id = '') {
        let button = document.createElement("button");
        button.innerHTML = text;
        button.setAttribute("onclick", method);
        button.setAttribute("id", id);
        this._MainBlock.appendChild(button);
    }
    createHorizontalLine() {
        let hr = document.createElement("hr");
        this._MainBlock.appendChild(hr);
    }
    createImage(source, color = "black") {
        let image = document.createElement("img");
        image.src = source;
        image.setAttribute("style", `border-color: ${color}; width: 105px; height: 105px;`);
        this._MainBlock.appendChild(image);
    }
}
function lsSong() {
    let screen = new Scene();
    let song = randomNumber(0, lsSongs.length - 1);
    screen.createBold(`The lip-sync song is... ${lsSongs[song]}!`);
    lsSongs.splice(song, 1);
}
let allLsSongs = [
    "Supermodel by RuPaul",
    "We Break The Dawn by Michelle Williams",
    "The Greatest Love Of All by Whitney Houston",
    "Would I Lie To You by Eurythmics",
    "Stronger by Britney Spears",
    "Shackles (Praise You) by Mary Mary",
    "Cover Girl by RuPaul",
    "My Lovin' (You're Never Gonna Get It) by En Vogue",
    "I Hear You Knocking by Wynnona Judd",
    "Two of Hearts by Stacey Q",
    "Carry On by Martha Wash",
    "Black Velvet by Alannah Myles",
    "He's The Greatest Dancer by Sister Sledge",
    "Shake Your Love by Debbie Gibson",
    "Something He Can Feel by Aretha Franklin",
    "Jealous of My Boogie by RuPaul",
    "The Right Stuff by Vanessa Williams",
    "Bad Romance by Lady Gaga",
    "Don't Leave Me This Way by Thelma Houston",
    "Meeting in the Ladies Room by Klymaxx",
    "Looking For A New Love by Jody Watley",
    "Knock On Wood by Amii Stewart",
    "MacArthur Park by Donna Summer",
    "Hey Mickey by Toni Basil",
    "Believe by Cher",
    "Even Angels by Fantasia",
    "Straight Up by Paula Abdul",
    "I Think About You by Patti LaBelle",
    "Champion by RuPaul",
    "Toxic by Britney Spears",
    "Bad Girls by Donna Summer",
    "This Will Be (An Everlasting Love) by Natalie Cole",
    "Trouble by P!nk",
    "Vogue by Madonna",
    "Born This Way by Lady Gaga",
    "Mi Vida Loca by Pam Tillis",
    "It's Raining Men (The Sequel) by Martha Wash and RuPaul",
    "I've Got To Use My Imagination by Gladys Knight",
    "(You Make Me Feel Like) A Natural Woman by Aretha Franklin",
    "No One Else On Earth by Wynnona Judd",
    "Glamazon by RuPaul",
    "Party in the U.S.A by Miley Cyrus",
    "Only Girl (In The World) by Rihanna",
    "When I Grow Up by Pussycat Dolls",
    "Oops!...I Did It Again by Britney Spears",
    "Take Me Home by Cher",
    "I'm So Excited by The Pointer Sisters",
    "Whip My Hair by Willow Smith",
    "Ain't Nothin' Going on but the Rent by Gwen Guthrie",
    "Cold Hearted by Paula Abdul",
    "(It Takes) Two To Make It Right by Seduction",
    "Malambo No. 1 by Yma Sumac",
    "The Beginning by RuPaul",
    "Express Yourself by Madonna",
    "Turn The Beat Around by Vicky Sue Robinson",
    "Shake it Up by Selena Gomez",
    "I'm Every Woman by Chaka Khan",
    "Head to Toe by Lisa Lisa & Cult Jam",
    "Whatta Man by Salt-n-Pepa feat. En Vogue",
    "Point of No Return by Exposé",
    "Stupid Girls by P!nk",
    "Vibeology by Paula Abdul",
    "Think by Aretha Franklin",
    "Stronger (What Doesn't Kill You) by Kelly Clarkson",
    "Sissy That Walk by RuPaul",
    "Geronimo by RuPaul",
    "Twist of Fate by Olivia Newton-John",
    "I Was Gonna Cancel by Kylie Minogue",
    "Dreaming by Blondie",
    "Lovergirl by Teena Marie",
    "Break Free by Ariana Grande",
    "No More Lies by Michel'le",
    "I Think We're Alone Now by Tiffany",
    "Really Don't Care by Demi Lovato",
    "Show Me Love by Robin S.",
    "Roar by Katy Perry",
    "Born Naked by RuPaul",
    "Applause by Lady Gaga",
    "I Will Survive by Gloria Gaynor",
    "Mesmerized by Faith Evans",
    "Call Me by Blondie",
    "Causing A Commotion by Madonna",
    "I Don't Care by Icona Pop",
    "And I Am Telling You I'm Not Going by Jennifer Holliday",
    "You Make Me Feel (Mighty Real) by Sylvester",
    "The Realness by RuPaul",
    "Love Shack by The B-52's",
    "Holding Out For A Hero by Bonnie Tyler",
    "I Wanna Go by Britney Spears",
    "Woman Up by Meghan Trainor",
    "Music by Madonna",
    "Finally by Cece Peniston",
    "Baby I'm Burnin' by Dolly Parton",
    "Greedy by Ariana Grande",
    "Cool For The Summer by Demi Lovato",
    "Macho Man by The Village People",
    "U Wear It Well by RuPaul",
    "So Emotional by Whitney Houston",
    "It's Not Right But It's Okay by Whitney Houston",
    "Ain't No Other Man by Christina Aguilera",
    "Best Of My Love by The Emotions",
    "Celebrity Skin by Hole",
    "Pound The Alarm by Nicki Minaj",
    "Man! I Feel Like A Woman by Shania Twain",
    "I'm Coming Out by Diana Ross",
    "Cut To The Feeling by Carly Rae Jepsen",
    "Groove Is In The Heart by Deee-Lite",
    "New Attitude by Patti LaBelle",
    "Good As Hell by Lizzo",
    "Nasty Girl by Vanity 6",
    "Call Me Mother by RuPaul",
    "Nasty by Janet Jackson",
    "If by Janet Jackson",
    "Bang Bang by Jessie J, Ariana Grande and Nicki Minaj",
    "Best of Both Worlds by Hannah Montana",
    "Work Bitch by Britney Spears",
    "Waiting For Tonight by Jennifer Lopez",
    "Living in America by James Brown",
    "I'm Your Baby Tonight by Whitney Houston",
    "Last Dance by Donna Summer",
    "Strut by Sheena Easton",
    "Sorry Not Sorry by Demi Lovato",
    "Hood Boy by Fantasia",
    "No More Drama by Mary J. Blige",
    "No Scrubs by TLC",
    "Pride: A Deeper Love by Aretha Franklin",
    "Bootylicious by Destiny's Child",
    "SOS by Rihanna",
    "The Edge of Glory by Lady Gaga",
    "Starships by Nicki Minaj",
    "Call Your Girlfriend by Robyn",
    "Problem by Ariana Grande and Iggy Azalea",
    "S&M by Rihanna",
    "Heart to Break by Kim Petras",
    "Let It Go by Caissie Levy",
    "Burning Up by Madonna",
    "This Is My Night by Chaka Khan",
    "Firework by Katy Perry",
    "Kill The Lights by Alex Newell",
    "1999 by Prince",
    "On The Floor by Jennifer Lopez and Pitbull",
    "Bring Back My Girls by RuPaul",
    "Survivor by Destiny's Child",
    "Call Me Maybe by Carly Rae Jepsen",
    "The Pleasure Principle by Janet Jackson",
    "Rumors by Lindsay Lohan",
    "Ex's & Oh's by Elle King",
    "Lady Marmalade by Christina Aguilera, Lil' Kim, Mya & Pink",
    "Break My Heart by Dua Lipa",
    "If U Seek Amy by Britney Spears",
    "100% Pure Love by Crystal Waters",
    "Fancy by Iggy Azalea and Charli XCX",
    "Hit 'Em Up Style (Oops!) by Blue Cantrell",
    "Whole Lotta Woman by Kelly Clarkson",
    "BO$$ by Fifth Harmony",
    "Fascinated by Company B",
    "My Humps by Black Eyed Peas",
    "No Tears Left To Cry by Ariana Grande",
    "Strong Enough by Cher",
    "I Learned from the Best by Whitney Houston",
    "Gimme More by Britney Spears",
    "Till the World Ends by Britney Spears",
    "Turn Me On by David Guetta and Nicki Minaj",
    "Ignorance by Paramore",
    "Tightrope by Janelle Monae",
    "In The Next Life by Kim Petras",
    "Dancing Queen by ABBA",
    "Bring Me To Life by Evanescence",
    "Sk8er Boi by Avril Lavigne",
    "Kiss by Prince",
    "Hung Up by Madonna",
    "Cannibal by Kesha",
    "Candyman by Christina Aguilera",
    "Bohemian Rhapsody by Queen",
    "Venus by Lady Gaga",
    "Hair by Lady Gaga",
    "Dancing Queen by ABBA",
    "STFU by Rina Sawayama",
    "HOT HOT by Bree Runway",
    "I Can Love You by Mary J. Blige and Lil Kim",
    "Superbass by Nicki Minaj",
    "Can't Get You Out of My Head by Kylie Minogue",
    "Misery Business by Paramore",
    "The Promise by Girls Aloud",
    "Star Love by Cheryl Lynn",
    "Freeway of Love by Aretha Franklin",
    "Tell It To My Heart by Taylor Dayne",
    "Don't Rush Me by Taylor Dayne",
    "Dirrty by Christina Aguilera",
    "34+35 by Ariana Grande",
    "Barbie Girl by Aqua",
    "Va Va Voom by Nicki Minaj",
    "Hallucinate by Dua Lipa",
    "Bubblegum Bitch by MARINA",
    "Boss Bitch by Doja Cat",
    "Hopelessly Devote to You by Olivia Newton John",
    "Your Disco Needs You by Kylie Minogue",
    "Froot by MARINA",
    "She Works Hard For The Money by Donna Summer",
    "Supernova by Carly Rae Jepsen",
    "Detention by Melanie Martinez",
    "Complicated by Avril Lavigne",
    "So What by P!nk",
    "Good 4 U by Olivia Rodrigo",
    "Take A Chance On Me by ABBA",
    "Casanova by Allie X",
    "TIk Tok by Kesha",
    "Heart of Glass by Blondie",
    "When I Think of You by Janet Jackson",
    "Prisoner by Miley Cyrus (ft. Dua Lipa)",
    "Homemade Dynamite by Lorde",
    "claws by Charli XCX",
    "NASA by Ariana Grande",
    "Say So by Doja Cat",
    "Captain Hook by Megan Thee Stallion",
    "Pynk by Janelle Monaé (ft. Grimes)",
    "Into the Groove by Madonna",
    "Cool Girl by Tove Lo",
    "Break The Ice by Britney Spears",
    "Still Into You by Paramore",
    "Vroom Vroom by Charli XCX",
    "XS by Rina Sawayama",
    "Teenage Dream by Katy Perry",
    "Unwritten by Natasha Bedingfield",
    "Hollaback Girl by Gwen Stefani",
    "Miss You Much by Janet Jackson",
    "I Feel Love by Donna Summer",
    "Don't Stop The Music by Rihanna",
    "Love On The Brain by Rihanna",
    "Valerie by Amy Winehouse",
    "Killer Queen by Queen",
    "Ribs by Lorde",
    "Solar Power by Lorde",
    "Jerome by Lizzo",
    "Kinky by Kesha",
    "G.U.Y by Lady Gaga",
    "Waka Waka (This Time For Africa) by Shakira",
    "Dangerous Woman by Ariana Grande",
    "Whenever, Wherever by Shakira",
    "Lowlife by Poppy",
    "Conqueror by Estelle",
    "Dynasty by Rina Sawayama",
    "Fergalicious by Fergie",
    "Meet Me Halfway by Black Eyed Peas",
    "I Say A Little Prayer by Aretha Franklin",
    "Aura by Lady Gaga",
    "Now That You Got It by Gwen Stefani",
    "Skyfall by Adele",
    "Back To Black by Amy Winehouse",
    "Tears Dry On Their Own by Amy Winehouse",
    "Seven Wonders by Fleetwood Mac",
    "Baby One More Time by Britney Spears",
    "Naked by Ava Max",
    "A Little Party Never Killed Nobody by Fergie",
    "Tears by Clean Bandit",
    "Work by Kelly Rowland",
    "Say My Name by Tove Styrke",
    "Do It by Chloe X Halle",
    "Like A Virgin by Madonna",
    "Chun Li by Nicki Minaj",
    "ATM by Bree Runway",
    "Star Love by Cheryl Lynn",
    "Express by Christina Aguillera",
    "Kill V. Main by Grimes",
    "Taki Taki by DJ Snake (ft. Selena Gomez, Cardi B)",
    "Black Cat by Janet Jackson",
    "Tainted Love by Gloria Jones",
    "Private Dancer by Tina Turner",
    "Sweet Dreams by Beyoncé",
    "Kiss Me More by Doja Cat (ft. SZA)",
    "Take A Chance On Me by ABBA",
    "Mine by Slayyyter",
    "Baby One More Time by Britney Spears",
    "Troubled Paradise by Slayyyter",
    "Swine by Lady Gaga",
    "Vacation by GRL",
    "Alive by SIA",
    "Now That I Found You by Carly Rae Jepsen",
    "IDGAF by Dua Lipa",
    "In My Bed by Amy Winehouse",
    "Get Outta My Way by Kylie Minogue",
    "I Drove All Night by Celine Dion",
    "Bad Bitch Tip by LaLa Ri",
    "Run The World (Girls) by Beyoncé",
    "Focus by Charli XCX",
    "Judas by Lady Gaga",
    "Circus by Britney Spears",
    "Buttons by The Pussycat Dolls",
    "Venom by Slayyyter",
    "Shut Up And Drive by Rihanna",
    "Dollhouse by Melanie Martinez",
    "Brick By Boring Brick by Paramore",
    "About You Now by Miranda Cosgrove",
    "Real Love by Clean Bandit & Jess Glyne",
    "Queen Of The Night by Whitney Houston",
    "Lucky Star by Madonna",
    "Good Girl by Carrie Underwood",
    "WTF Do I Know by Miley Cyrus",
    "Say So by Doja Cat",
    "Soulmate by Lizzo",
    "Bitch I'm Madonna by Madonna",
    "Hold My Hand by Jess Glyne",
    "Not Myself Tonight by Christina Aguillera",
    "Boys by Lizzo",
    "Same Old Fool by Dolly Parton",
    "Fantasy by Mariah Carey",
    "What You Get Is What You See by Tina Turner",
    "All About That Bass by Meghan Trainor",
    "Edge Of Seventeen by Stevie Nicks",
    "Chandelier by SIA",
    "Comme Des Garçon by Rina Sawayama",
    "See You Again by Miley Cyrus",
    "Spice Up Your Life by Spice Girls",
    "Tears Dry On Their Own by Amy Winehouse",
    "Power by Little Mix",
    "Miss You Much by Janet Jackson",
    "Rain On Me By Lady Gaga ft. Ariana Grande",
    "Stupid Love by Lady Gaga",
    "Levitating by Dua Lipa",
    "Vagina by CupcakKe",
    "Wildest Dreams by Taylor Swift",
    "good 4 u by Olivia Rodrigo",
    "Telephone by Lady Gaga ft. Beyoncé",
    "Physical by Dua Lipa",
    "Conqueror by Estelle",
    "Triste com T by Pabllo Vittar",
    "Dance Again by Jenifer Lopez",
    "Brutal by Olivia Rodrigo",
    "Oh No! by MARINA",
    "How You Like That by BLACKPINK",
    "Focus by Ariana Grande",
    "Stronger by Christina Aguillera",
    "Domino by Jessie J",
    "Salute by Little Mix",
    "Scandalous by Mis-Teeq",
    "Friday by Rebecca Black",
    "Fantasy by Mariah Carey",
    "All I Want For Christmas Is You by Mariah Carey",
    "Raspberry Beret by Prince",
    "Why Worry by Set It Off",
    "Sweet Melody by Little Mix",
    "Bittersweet by Fantasia",
    "She Wolf by Shakira",
    "Blame It On The Edit by RuPaul",
    "Big Spender by Shirley Bassey",
    "Turning Tables by Adele",
    "How I Feel About You by Miranda Cosgrove"
];
let lsSongs = [...allLsSongs];
class Team extends Queen {
    constructor(QueenA, QueenB) {
        let Name;
        if (QueenA == kasha)
            Name = "Team Mrs. " + QueenB._name.split(" ")[0] + " Davis";
        else if (QueenB == kasha)
            Name = "Team Mrs. " + QueenA._name.split(" ")[0] + " Davis";
        else if ((QueenA || QueenB) == latrice && ((QueenA && QueenB) == manila))
            Name = "Team Latrila";
        else if ((QueenA || QueenB) == yara && ((QueenA && QueenB) == alexis))
            Name = "Team Yarlexis";
        else if ((QueenA || QueenB) == chad && ((QueenA && QueenB) == shannel))
            Name = "Team Shad";
        else if ((QueenA || QueenB) == ninaf && ((QueenA && QueenB) == tammie))
            Name = "Team Brown Flowers";
        else if ((QueenA || QueenB) == raven && ((QueenA && QueenB) == jujubee))
            Name = "Team Rujubee";
        else if ((QueenA || QueenB) == mimi && ((QueenA && QueenB) == pandora))
            Name = "Team Mandora";
        else if (QueenA._name.split(' ')[0].length == 3 && QueenB._name.split(' ')[0].length > 3)
            Name = "Team " + QueenA._name.split(' ')[0] + QueenB._name.split(' ')[0].slice(QueenB._name.split(' ')[0].length - 4, QueenB._name.split(' ')[0].length);
        else if (QueenA._name.split(' ')[0].length > 3 && QueenB._name.split(' ')[0].length == 3)
            Name = "Team " + QueenA._name.split(' ')[0].slice(0, 4) + QueenB._name.split(' ')[0];
        else if (QueenA._name.split(' ')[0].length == 3 && QueenB._name.split(' ')[0].length == 3)
            Name = "Team " + QueenA._name.split(' ')[0] + QueenB._name.split(' ')[0];
        else
            Name = "Team " + QueenA._name.split(' ')[0].slice(0, 4) + QueenB._name.split(' ')[0].slice(QueenB._name.split(' ')[0].length - 4, QueenB._name.split(' ')[0].length);
        super(Name, ((QueenA._actingStat + QueenB._actingStat) / 2), ((QueenA._comedyStat + QueenB._comedyStat) / 2), ((QueenA._danceStat + QueenB._danceStat) / 2), ((QueenA._designStat + QueenB._designStat) / 2), ((QueenA._improvStat + QueenB._improvStat) / 2), ((QueenA._runwayStat + QueenB._runwayStat) / 2), 0);
        this.QueenA = QueenA;
        this.QueenB = QueenB;
    }
}
let teamList = [];
function teamsScreen() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("Pair time!");
    screen.createParagraph("After all the queens enter the werkroom, they now have to choose their pairs!");
    screen.createHorizontalLine();
    let main = document.querySelector("div#MainBlock");
    let centering = document.createElement("center");
    let select = document.createElement("select");
    select.setAttribute("class", "queenList");
    select.setAttribute("id", "0");
    select.setAttribute("onchange", "setImage()");
    let img = document.createElement("img");
    img.setAttribute("class", "images");
    img.setAttribute("id", "image0");
    img.setAttribute("style", "width: 105px; height: 105px;")
    let p = document.createElement("p");
    p.appendChild(img);
    for (let k = 0; k < currentCast.length; k++) {
        let option = document.createElement("option");
        option.innerHTML = currentCast[k].getName();
        option.value = currentCast[k].image;
        select.add(option);
    }
    select.selectedIndex = randomNumber(0, currentCast.length - 1);
    let br = document.createElement("br");
    centering.appendChild(p);
    centering.appendChild(select);

    let select1 = document.createElement("select");
    select1.setAttribute("class", "queenList");
    select1.setAttribute("id", "1");
    select1.setAttribute("onchange", "setImage()");
    let img1 = document.createElement("img");
    img1.setAttribute("class", "images");
    img1.setAttribute("id", "image1");
    img1.setAttribute("style", "width: 105px; height: 105px;")
    let p1 = document.createElement("p");
    p1.appendChild(img1);
    for (let k = 0; k < currentCast.length; k++) {
        let option1 = document.createElement("option");
        option1.innerHTML = currentCast[k].getName();
        option1.value = currentCast[k].image;
        select1.add(option1);
    }
    select1.selectedIndex = randomNumber(0, currentCast.length - 1);
    centering.appendChild(p1);
    centering.appendChild(select1);
    centering.appendChild(br);
    centering.appendChild(br);
    main.appendChild(centering);
    main.appendChild(br);
    setImage();
    if (currentCast.length != 2) {
        screen.createButton("Team Up","", "createTeam");
        let createTeam = document.getElementById("createTeam");
        createTeam.addEventListener("click", () => {
        let value = select.options[select.selectedIndex].text;
        let value1 = select1.options[select1.selectedIndex].text;
        let QueenA;
        let QueenB;
        for (let k = 0; k < currentCast.length; k++) {
            if (value == currentCast[k].getName()) {
                QueenA = currentCast[k];
            }
            if (value1 == currentCast[k].getName()) {
                QueenB = currentCast[k];
            }
        }
        if (QueenA.getName() == QueenB.getName()) {
            window.alert("Choose different contestants.");
        } else {
            let team = new Team(QueenA, QueenB);
            teamList.push(team);
            currentCast.splice(currentCast.indexOf(QueenA), 1);
            currentCast.splice(currentCast.indexOf(QueenB), 1);
            teamsScreen()
        }
    });
    } else if (currentCast.length == 2) {
        screen.createButton("Proceed", "", "createTeam");
        let createTeam = document.getElementById("createTeam");
        createTeam.addEventListener("click", () => {
        let value = select.options[select.selectedIndex].text;
        let value1 = select1.options[select1.selectedIndex].text;
        let QueenA;
        let QueenB;
        for (let k = 0; k < currentCast.length; k++) {
            if (value == currentCast[k].getName()) {
                QueenA = currentCast[k];
            }
            if (value1 == currentCast[k].getName()) {
                QueenB = currentCast[k];
            }
        }
        if (QueenA.getName() == QueenB.getName()) {
            window.alert("Choose different contestants.");
        } else {
            let team = new Team(QueenA, QueenB);
            teamList.push(team);
            currentCast.splice(currentCast.indexOf(QueenA), 1);
            currentCast.splice(currentCast.indexOf(QueenB), 1);
            currentCast = [...teamList];
            totalCastSize = currentCast.length;
            miniChallenge()
        }
    });
    }
}
class TeamsForChallenges extends Queen {
    constructor (Queens){
        super(Queens[0].getName(), Queens[0]._actingStat, Queens[0]._comedyStat, Queens[0]._danceStat, Queens[0]._designStat, Queens[0]._improvStat, Queens[0]._runwayStat, 0);
        this.queens = Queens;
    }
}
let talentsToDo = [
    "Singing",
    "Variety",
    "Dancing",
    "Gymnastics",
    "Acapella",
    "Burlesque",
    "Spoken Word",
    "Lipsyncing",
    "Violin",
    "Lipsyncing/Dancing",
    "Majorette",
    "Autoharp/Singing",
    "Velcro",
    "Tucking",
    "Painting",
    "Stand Up",
    "Color Guard",
    "Pole Dancing",
    "Vocal Impersonations",
    "Speed-Sewing",
    "Bubble Burlesque",
    "Piano",
    "Jump Rope",
    "Comedy Skit",
    "Original Song",
    "Self-Care in Quarantine",
    "Ballet Number",
    "Cheerleading Comedy Routine",
    "Electric Guitar",
    "Contemporary Mouth Art",
    "Ballooning",
    "Quick Change Magic",
    "Modern Dance",
    "Magic Show",
    "Art",
    "Salsa Dancing",
    "Rapping",
    "Posing",
    "Fire Show",
    "Rhytmic Gymnastic",
    "Monologue",
    "Waacking",
    "Comedy",
    "Runway",
    "Opera Singing",
    "Standing There"
];
function queenTalents() {
    let screen = new Scene();
    screen.createHorizontalLine();
    screen.createBigText("The queens will perform...");
    for (let i = 0; i < currentCast.length; i++) {
        let talent = randomNumber(0, talentsToDo.length - 1);
        screen.createImage(currentCast[i].image);
        screen.createBold(`${currentCast[i].getName()} will do a ${talentsToDo[talent]} performance!!`);
    }
}
let reasoningQueens = [
    "they put themselves in RuPaul's shoes and tried to be fair.",
    "they based their decision with the judges critiques.",
    "they saw that the other queen wanted to stay more.",
    "they wanted to save their friend.",
    "they wanted to eliminate them.",
    "the other queen lend them a shirt.",
    "they couldn't send home their friend.",
    "they think that it's better for the group if they are not there.",
    "they were annoyed by the other queen.",
    "they were in the bottom several times.",
    "they tried to be fair.",
    "they were competition.",
    "they don't like them.",
    "they wanted to shake the things up.",
    "they feel they could send them home later.",
    "they saw the fishnets and they were ripped.",
    "they'll never be glamour.",
    "they were the weakest in the challenge.",
    "they were persuaded by other contestants.",
    "they are a liar.",
    "no tea, no shade no pink lemonade… they done fucked up drag.",
    "they had given up on the competition."
];
function chooseReasoning(winQueen, elimQueen) {
    let screen = new Scene();
    let reasoning = randomNumber(0, reasoningQueens.length - 1);
    screen.createBold(`${winQueen} chose ${elimQueen} because ${reasoningQueens[reasoning]}`);
}
//2 queens events
let twoQueensRelation1 = [
    "talked about their families and they bond.",
    "agreed that the person who won didn't deserved the win.",
    "are betting on who will eat a dragonfly for 100$.",
    "are sharing wigs.",
    "kiss eachother.",
    "are talking about how someone tried to drown her in the ocean.",
    "want to save eachother.",
    "smoke some cigarettes together.",
    "learnt their lip sync words together."
];
let twoQueensRelation2 = [
    "are talking a lot and the others think that they are dating.",
    "shared personal memories to each other.",
    "has a heartfelt moment about their families.",
    "started to cry after talking about their families and similarities in life.",
    "have an emotional heart to heart.",
    "can't be in the finale without eachother.",
    "are hooking up.",
    "are sharing a deep secret to the other."
];
let twoQueensRelation3 = [
    "are not feeling each other vibe.",
    "are comparing track records because they want to see who is better.",
    "think that their runways were underwhelming."
];
let twoQueensRelation3_2 = [
    "is saying that they have a better track record than",
    "lashes out irrationally at",
    "says that one person doesn't deserve to be there, and that person is",
    "is saying what a fake, fake, fake b*tch is",
    "says that the person being favoured by the judges is",
    "thinks she should've won the challenge but is called delusional by",
    "stole the cocktail of",
    "thinks that the person that should've been sent home was",
    "hates the makeup and style of",
    "says that some queens have a questionable fashion choices while looking at",
    "screams *I'M FROM CHICAGO!* to",
    "tells all the others Queens that they are on the same level... Except for",
    "is sick of hearing the whining of",
    "thinks that the one who needs to get ready to lipsync because they did badly this week is",
    "is intimidated by",
    "farted next to",
    "does a mean impression of",
    "is getting annoyed by the way of how is drinking",
    "had had it officially! with",
    "complains that she should’ve been Blac Chyna instead of"
];
let twoQueensRelation4 = [
    "wanted to slap each other but they didn't want to get ugly.",
    "had an argument and they cried."
];
let twoQueensRelation4_2 = [
    "made cry",
    "ripped the tights of",
    "does a reveal showing that if she had to lipsync for her life, she was ready to do so. *What does that HAVE TO DO WITH ANYTHING BITCH?!* says",
    "wants to scarp",
    "is violently threatening",
    "tries to start a physical fight with",
    "nearly had an physical altercation with",
    "walks out of Untucked after a heated argument with",
    "slaps",
    "spits on",
    "says *go back to party city where they belong* to",
    "threw a glass of water at",
    "is getting into a fist fight with"
];
let twoQueensRelation5 = [
    "are talking about who is the trade of the season.",
    "think that they are being overlooked.",
    "drank a few too many cocktails.",
    "hooked up prior to the show"
];
//3 queens events
let threeQueensRelation1 = [
    "have formed a clique.",
    "think that they are being overlooked.",
    "are shadying the other contestants makeup skills.",
    "go outside for a kiki, when a bee starts to chase them.",
    "perform a karaoke number of a RuPaul song to pass the time.",
    "drank a few too many cocktails."
];
let threeQueensRelation2 = [
    "are talking a lot and they are bonding a lot.",
    "shared personal memories to each other."
];
let threeQueensRelation3 = [
    "get into a heated debate about Pringles.",
    "decided to campaign to send the eliminated queen home."
];
let threeQueensRelation4 = [
    "get into a huge fight.",
    "are yelling at eachother."
];
//4 queens events
let fourQueensRelation1 = [
    "are beggin production to have another cocktail.",
    "are saying who they think should go home tonight.",
    "perform a karaoke number of a RuPaul song to pass the time.",
    "drank a few too many cocktails."
];
let fourQueensRelation2 = [
    "are talking a lot and the others think that they are in this together.",
    "shared personal memories to each other."
];
let fourQueensRelation3 = [
    "think that they are the best one in here.",
    "are reading eachother to filth."
];
let fourQueensRelation4 = [
    "get into a huge fight.",
    "yelled at eachother"
];
//Multiple queens events
let multipleQueensRelation = [
    "are talking a lot and the others think that they are dating.",
    "shared personal memories to each other."
];
//UNTUCKED
function untucked() {
    let screen = new Scene();
    screen.clean();
    document.body.style.backgroundImage = "url('image/untucked.webp')";
    screen.createHeader("Untucked!!");
    screen.createBold("At the end of the episode the queens go to sit and talk about their feelings in this episode.");
    screen.createHorizontalLine();
    let howManyInteractions = 0;
    if (currentCast.length < 21) {howManyInteractions = randomNumber(3, 7);}
    if (currentCast.length < 12) {howManyInteractions = randomNumber(2, 5);}
    if (currentCast.length < 6) {howManyInteractions = randomNumber(2, 3);}
    for (let i = 0; i < howManyInteractions; i++) {
        let howManyQueens = randomNumber(0, 100);
        if (howManyQueens <= 65) {
            howManyQueens = 2;
        }
        if (howManyQueens > 65 && howManyQueens <= 95) {
            howManyQueens = 3;
        }
        if (howManyQueens > 95) {
            howManyQueens = 4;
        }
        if (currentCast.length < 6) {howManyQueens = randomNumber(2, 3);}
        let flag = false;
        if (howManyQueens == 2){
            let queen1 = currentCast[randomNumber(0, currentCast.length-1)];
            let queen2 = currentCast[randomNumber(0, currentCast.length-1)];
            while(queen1 == queen2){
                queen2 = currentCast[randomNumber(0, currentCast.length-1)];
            }
            interactions(2, queen1, queen2);
        }
        if (howManyQueens == 3){
            let queen1 = currentCast[randomNumber(0, currentCast.length-1)];
            let queen2 = currentCast[randomNumber(0, currentCast.length-1)];
            while(queen1 == queen2){
                queen2 = currentCast[randomNumber(0, currentCast.length-1)];
            }
            let queen3 = currentCast[randomNumber(0, currentCast.length-1)];
            while(!flag) {
                if (queen3 != queen1) {
                    if (queen3 != queen2) {
                        flag = true;
                    } else {
                        queen3 = currentCast[randomNumber(0, currentCast.length-1)];
                    }
                } else {
                    queen3 = currentCast[randomNumber(0, currentCast.length-1)];
                }
            }
            interactions(3, queen1, queen2, queen3);
        }
        if (howManyQueens == 4){
            let queen1 = currentCast[randomNumber(0, currentCast.length-1)];
            let queen2 = currentCast[randomNumber(0, currentCast.length-1)];
            while(queen1 == queen2){
                queen2 = currentCast[randomNumber(0, currentCast.length-1)];
            }
            let queen3 = currentCast[randomNumber(0, currentCast.length-1)];
            while(!flag) {
                if (queen3 != queen1) {
                    if (queen3 != queen2) {
                        flag = true;
                    } else {
                        queen3 = currentCast[randomNumber(0, currentCast.length-1)];
                    }
                } else {
                    queen3 = currentCast[randomNumber(0, currentCast.length-1)];
                }
            }
            flag = false;
            let queen4 = currentCast[randomNumber(0, currentCast.length-1)];
            while(!flag) {
                if (queen4 != queen1) {
                    if (queen4 != queen2) {
                        if (queen4 != queen3) {
                            flag = true;
                        } else {
                            queen4 = currentCast[randomNumber(0, currentCast.length-1)];
                        }
                    } else {
                        queen4 = currentCast[randomNumber(0, currentCast.length-1)];
                    }
                } else {
                    queen4 = currentCast[randomNumber(0, currentCast.length-1)];
                }
            }
            interactions(4, queen1, queen2, queen3, queen4);
        }
    }
    areRelations()
    screen.createButton("Proceed", "newEpisode()");


}
function interactions(howmany, queen1, queen2, queen3 = '', queen4 = '') {
    switch(howmany) {
        case 2:
            twoQueensUntucked(queen1, queen2);
            break;
        case 3:
            threeQueensUntucked(queen1, queen2, queen3);
            break;
        case 4:
            fourQueensUntucked(queen1, queen2, queen3, queen4);
            break;
        case 5:
            allVOneUntucked();
            break;
        default:
            break;
    }
}

function twoQueensUntucked(queen1, queen2) {
    let screen = new Scene();
    let eventType = randomNumber(1, 5);
    let typeEvent = randomNumber(0, 1);
    screen.createImage(queen1.image);
    screen.createImage(queen2.image);
    if (eventType == 1) {
        screen.createBold(`${queen1.getName()} and ${queen2.getName()} ${twoQueensRelation1[randomNumber(0, twoQueensRelation1.length - 1)]}`);
        modRelation(2, 1, queen1, queen2);
        queenRelations(queen1);
        queenRelations(queen2);
    }
    if (eventType == 2) {
        screen.createBold(`${queen1.getName()} and ${queen2.getName()} ${twoQueensRelation2[randomNumber(0, twoQueensRelation2.length - 1)]}`);
        modRelation(2, 2, queen1, queen2);
        queenRelations(queen1);
        queenRelations(queen2);
    }
    if (eventType == 3) {
        if (typeEvent == 0) {
            screen.createBold(`${queen1.getName()} and ${queen2.getName()} ${twoQueensRelation3[randomNumber(0, twoQueensRelation3.length - 1)]}`);
        }
        if (typeEvent == 1) {
            screen.createBold(`${queen1.getName()} ${twoQueensRelation3_2[randomNumber(0, twoQueensRelation3_2.length - 1)]} ${queen2.getName()} `);
        }
        modRelation(2, 3, queen1, queen2);
        queenRelations(queen1);
        queenRelations(queen2);
    }
    if (eventType == 4) {
        if (typeEvent == 0) {
            screen.createBold(`${queen1.getName()} and ${queen2.getName()} ${twoQueensRelation4[randomNumber(0, twoQueensRelation4.length - 1)]}`);
        }
        if (typeEvent == 1) {
            screen.createBold(`${queen1.getName()} ${twoQueensRelation4_2[randomNumber(0, twoQueensRelation4_2.length - 1)]} ${queen2.getName()} `);
        }
        modRelation(2, 4, queen1, queen2);
        queenRelations(queen1);
        queenRelations(queen2);
    }
    if (eventType == 5) {
        screen.createBold(`${queen1.getName()} and ${queen2.getName()} ${twoQueensRelation5[randomNumber(0, twoQueensRelation5.length - 1)]}`);
        modRelation(2, 5, queen1, queen2);
        queenRelations(queen1);
        queenRelations(queen2);
    }
}
function threeQueensUntucked(queen1, queen2, queen3) {
    let screen = new Scene();
    let eventType = randomNumber(1, 4);
    let event = randomNumber(0, 1);
    screen.createImage(queen1.image);
    screen.createImage(queen2.image);
    screen.createImage(queen3.image);
    if (eventType == 1) {
        screen.createBold(`${queen1.getName()}, ${queen2.getName()} and ${queen3.getName()} ${threeQueensRelation1[event]}`);
        modRelation(3, 1, queen1, queen2, queen3);
    }
    if (eventType == 2) {
        screen.createBold(`${queen1.getName()}, ${queen2.getName()} and ${queen3.getName()} ${threeQueensRelation2[event]}`);
        modRelation(3, 2, queen1, queen2, queen3);
    }
    if (eventType == 3) {
        screen.createBold(`${queen1.getName()}, ${queen2.getName()} and ${queen3.getName()} ${threeQueensRelation3[event]}`);
        modRelation(3, 3, queen1, queen2, queen3);
    }
    if (eventType == 4) {
        screen.createBold(`${queen1.getName()}, ${queen2.getName()} and ${queen3.getName()} ${threeQueensRelation4[event]}`);
        modRelation(3, 4, queen1, queen2, queen3);
    }
}
function fourQueensUntucked(queen1, queen2, queen3, queen4) {
    let screen = new Scene();
    let eventType = randomNumber(1, 4);
    let event = randomNumber(0, 1);
    screen.createImage(queen1.image);
    screen.createImage(queen2.image);
    screen.createImage(queen3.image);
    screen.createImage(queen4.image);
    if (eventType == 1) {
        screen.createBold(`${queen1.getName()}, ${queen2.getName()}, ${queen3.getName()} and ${queen4.getName()} ${fourQueensRelation1[event]}`);
        modRelation(4, 1, queen1, queen2, queen3, queen4);
    }
    if (eventType == 2) {
        screen.createBold(`${queen1.getName()}, ${queen2.getName()}, ${queen3.getName()} and ${queen4.getName()} ${fourQueensRelation2[event]}`);
        modRelation(4, 2, queen1, queen2, queen3, queen4);
    }
    if (eventType == 3) {
        screen.createBold(`${queen1.getName()}, ${queen2.getName()}, ${queen3.getName()} and ${queen4.getName()} ${fourQueensRelation3[event]}`);
        modRelation(4, 3, queen1, queen2, queen3, queen4);
    }
    if (eventType == 4) {
        screen.createBold(`${queen1.getName()}, ${queen2.getName()}, ${queen3.getName()} and ${queen4.getName()} ${fourQueensRelation4[event]}`);
        modRelation(4, 4, queen1, queen2, queen3, queen4);
    }
}
function modRelation(hm, type, queen1, queen2, queen3 = '', queen4 = '') {
    switch(true) {
        //********************************* INICIA 2 QUEENS *********************************
        case ((hm == 2) && (type == 1)):
            //Mejora relación poco
            for (let i = 0; i < queen1.sisters.length; i++) {
                if (queen1.sisters[i].queen == queen2) {
                    queen1.sisters[i].relation +=1;
                }
            }
            for (let i = 0; i < queen2.sisters.length; i++) {
                if (queen2.sisters[i].queen == queen1) {
                    queen2.sisters[i].relation +=1;
                }
            }
            break;
        case ((hm == 2) && (type == 2)):
            //Mejora relación mucho.
            for (let i = 0; i < queen1.sisters.length; i++) {
                if (queen1.sisters[i].queen == queen2) {
                    queen1.sisters[i].relation += 3;
                }
            }
            for (let i = 0; i < queen2.sisters.length; i++) {
                if (queen2.sisters[i].queen == queen1) {
                    queen2.sisters[i].relation += 3;
                }
            }
            break;
        case ((hm == 2) && (type == 3)):
            //Empeora relation poco
            for (let i = 0; i < queen1.sisters.length; i++) {
                if (queen1.sisters[i].queen == queen2) {
                    queen1.sisters[i].relation -=1;
                }
            }
            for (let i = 0; i < queen2.sisters.length; i++) {
                if (queen2.sisters[i].queen == queen1) {
                    queen2.sisters[i].relation -=1;
                }
            }
            break;
        case ((hm == 2) && (type == 4)):
            //Empeora relation mucho
            for (let i = 0; i < queen1.sisters.length; i++) {
                if (queen1.sisters[i].queen == queen2) {
                    queen1.sisters[i].relation -=3;
                }
            }
            for (let i = 0; i < queen2.sisters.length; i++) {
                if (queen2.sisters[i].queen == queen1) {
                    queen2.sisters[i].relation -=3;
                }
            }
            break;
        case ((hm == 2) && (type == 5)):
            //La relación no se ve afectada
            break;
        //********************************* INICIA 3 QUEENS *********************************
        case ((hm == 3) && (type == 1)):
            //Mejora relación poco
            for (let i = 0; i < queen1.sisters.length; i++) {
                if (queen1.sisters[i].queen == queen2) {
                    queen1.sisters[i].relation +=1;
                }
                if (queen1.sisters[i].queen == queen3) {
                    queen1.sisters[i].relation +=1;
                }
            }
            for (let i = 0; i < queen2.sisters.length; i++) {
                if (queen2.sisters[i].queen == queen1) {
                    queen2.sisters[i].relation +=1;
                }
                if (queen2.sisters[i].queen == queen3) {
                    queen2.sisters[i].relation +=1;
                }
            }
            for (let i = 0; i < queen3.sisters.length; i++) {
                if (queen3.sisters[i].queen == queen1) {
                    queen3.sisters[i].relation +=1;
                }
                if (queen3.sisters[i].queen == queen2) {
                    queen3.sisters[i].relation +=1;
                }
            }
            break;
        case ((hm == 3) && (type == 2)):
            //Mejora relación MUCHO
            for (let i = 0; i < queen1.sisters.length; i++) {
                if (queen1.sisters[i].queen == queen2) {
                    queen1.sisters[i].relation +=3;
                }
                if (queen1.sisters[i].queen == queen3) {
                    queen1.sisters[i].relation +=3;
                }
            }
            for (let i = 0; i < queen2.sisters.length; i++) {
                if (queen2.sisters[i].queen == queen1) {
                    queen2.sisters[i].relation +=3;
                }
                if (queen2.sisters[i].queen == queen3) {
                    queen2.sisters[i].relation +=3;
                }
            }
            for (let i = 0; i < queen3.sisters.length; i++) {
                if (queen3.sisters[i].queen == queen1) {
                    queen3.sisters[i].relation +=3;
                }
                if (queen3.sisters[i].queen == queen2) {
                    queen3.sisters[i].relation +=3;
                }
            }
            break;
        case ((hm == 3) && (type == 3)):
            //Empeora relación poco
            for (let i = 0; i < queen1.sisters.length; i++) {
                if (queen1.sisters[i].queen == queen2) {
                    queen1.sisters[i].relation -=1;
                }
                if (queen1.sisters[i].queen == queen3) {
                    queen1.sisters[i].relation -=1;
                }
            }
            for (let i = 0; i < queen2.sisters.length; i++) {
                if (queen2.sisters[i].queen == queen1) {
                    queen2.sisters[i].relation -=1;
                }
                if (queen2.sisters[i].queen == queen3) {
                    queen2.sisters[i].relation -=1;
                }
            }
            for (let i = 0; i < queen3.sisters.length; i++) {
                if (queen3.sisters[i].queen == queen1) {
                    queen3.sisters[i].relation -=1;
                }
                if (queen3.sisters[i].queen == queen2) {
                    queen3.sisters[i].relation -=1;
                }
            }
            break;
        case ((hm == 3) && (type == 4)):
            //Empeora relación MUCHO
            for (let i = 0; i < queen1.sisters.length; i++) {
                if (queen1.sisters[i].queen == queen2) {
                    queen1.sisters[i].relation -=3;
                }
                if (queen1.sisters[i].queen == queen3) {
                    queen1.sisters[i].relation -=3;
                }
            }
            for (let i = 0; i < queen2.sisters.length; i++) {
                if (queen2.sisters[i].queen == queen1) {
                    queen2.sisters[i].relation -=3;
                }
                if (queen2.sisters[i].queen == queen3) {
                    queen2.sisters[i].relation -=3;
                }
            }
            for (let i = 0; i < queen3.sisters.length; i++) {
                if (queen3.sisters[i].queen == queen1) {
                    queen3.sisters[i].relation -=3;
                }
                if (queen3.sisters[i].queen == queen2) {
                    queen3.sisters[i].relation -=3;
                }
            }
            break;
        //********************************* INICIA 4 QUEENS *********************************
        case ((hm == 4) && (type == 1)):
            //Mejora relación poco
            for (let i = 0; i < queen1.sisters.length; i++) {
                if (queen1.sisters[i].queen == queen2) {
                    queen1.sisters[i].relation +=1;
                }
                if (queen1.sisters[i].queen == queen3) {
                    queen1.sisters[i].relation +=1;
                }
                if (queen1.sisters[i].queen == queen4) {
                    queen1.sisters[i].relation +=1;
                }
            }
            for (let i = 0; i < queen2.sisters.length; i++) {
                if (queen2.sisters[i].queen == queen1) {
                    queen2.sisters[i].relation +=1;
                }
                if (queen2.sisters[i].queen == queen3) {
                    queen2.sisters[i].relation +=1;
                }
                if (queen2.sisters[i].queen == queen4) {
                    queen2.sisters[i].relation +=1;
                }
            }
            for (let i = 0; i < queen3.sisters.length; i++) {
                if (queen3.sisters[i].queen == queen1) {
                    queen3.sisters[i].relation +=1;
                }
                if (queen3.sisters[i].queen == queen2) {
                    queen3.sisters[i].relation +=1;
                }
                if (queen3.sisters[i].queen == queen4) {
                    queen3.sisters[i].relation +=1;
                }
            }
            for (let i = 0; i < queen4.sisters.length; i++) {
                if (queen4.sisters[i].queen == queen1) {
                    queen4.sisters[i].relation +=1;
                }
                if (queen4.sisters[i].queen == queen2) {
                    queen4.sisters[i].relation +=1;
                }
                if (queen4.sisters[i].queen == queen3) {
                    queen4.sisters[i].relation +=1;
                }
            }
            break;
        case ((hm == 4) && (type == 2)):
            //Mejora relación MUCHO
            for (let i = 0; i < queen1.sisters.length; i++) {
                if (queen1.sisters[i].queen == queen2) {
                    queen1.sisters[i].relation +=3;
                }
                if (queen1.sisters[i].queen == queen3) {
                    queen1.sisters[i].relation +=3;
                }
                if (queen1.sisters[i].queen == queen4) {
                    queen1.sisters[i].relation +=3;
                }
            }
            for (let i = 0; i < queen2.sisters.length; i++) {
                if (queen2.sisters[i].queen == queen1) {
                    queen2.sisters[i].relation +=3;
                }
                if (queen2.sisters[i].queen == queen3) {
                    queen2.sisters[i].relation +=3;
                }
                if (queen2.sisters[i].queen == queen4) {
                    queen2.sisters[i].relation +=3;
                }
            }
            for (let i = 0; i < queen3.sisters.length; i++) {
                if (queen3.sisters[i].queen == queen1) {
                    queen3.sisters[i].relation +=3;
                }
                if (queen3.sisters[i].queen == queen2) {
                    queen3.sisters[i].relation +=3;
                }
                if (queen3.sisters[i].queen == queen4) {
                    queen3.sisters[i].relation +=3;
                }
            }
            for (let i = 0; i < queen4.sisters.length; i++) {
                if (queen4.sisters[i].queen == queen1) {
                    queen4.sisters[i].relation +=3;
                }
                if (queen4.sisters[i].queen == queen2) {
                    queen4.sisters[i].relation +=3;
                }
                if (queen4.sisters[i].queen == queen3) {
                    queen4.sisters[i].relation +=3;
                }
            }
            break;
        case ((hm == 4) && (type == 3)):
            //Empeora relación poco
            for (let i = 0; i < queen1.sisters.length; i++) {
                if (queen1.sisters[i].queen == queen2) {
                    queen1.sisters[i].relation -=1;
                }
                if (queen1.sisters[i].queen == queen3) {
                    queen1.sisters[i].relation -=1;
                }
                if (queen1.sisters[i].queen == queen4) {
                    queen1.sisters[i].relation -=1;
                }
            }
            for (let i = 0; i < queen2.sisters.length; i++) {
                if (queen2.sisters[i].queen == queen1) {
                    queen2.sisters[i].relation -=1;
                }
                if (queen2.sisters[i].queen == queen3) {
                    queen2.sisters[i].relation -=1;
                }
                if (queen2.sisters[i].queen == queen4) {
                    queen2.sisters[i].relation -=1;
                }
            }
            for (let i = 0; i < queen3.sisters.length; i++) {
                if (queen3.sisters[i].queen == queen1) {
                    queen3.sisters[i].relation -=1;
                }
                if (queen3.sisters[i].queen == queen2) {
                    queen3.sisters[i].relation -=1;
                }
                if (queen3.sisters[i].queen == queen4) {
                    queen3.sisters[i].relation -=1;
                }
            }
            for (let i = 0; i < queen4.sisters.length; i++) {
                if (queen4.sisters[i].queen == queen1) {
                    queen4.sisters[i].relation -=1;
                }
                if (queen4.sisters[i].queen == queen2) {
                    queen4.sisters[i].relation -=1;
                }
                if (queen4.sisters[i].queen == queen3) {
                    queen4.sisters[i].relation -=1;
                }
            }
            break;
        case ((hm == 4) && (type == 4)):
            //Empeora relación mucho
            for (let i = 0; i < queen1.sisters.length; i++) {
                if (queen1.sisters[i].queen == queen2) {
                    queen1.sisters[i].relation -=3;
                }
                if (queen1.sisters[i].queen == queen3) {
                    queen1.sisters[i].relation -=3;
                }
                if (queen1.sisters[i].queen == queen4) {
                    queen1.sisters[i].relation -=3;
                }
            }
            for (let i = 0; i < queen2.sisters.length; i++) {
                if (queen2.sisters[i].queen == queen1) {
                    queen2.sisters[i].relation -=3;
                }
                if (queen2.sisters[i].queen == queen3) {
                    queen2.sisters[i].relation -=3;
                }
                if (queen2.sisters[i].queen == queen4) {
                    queen2.sisters[i].relation -=3;
                }
            }
            for (let i = 0; i < queen3.sisters.length; i++) {
                if (queen3.sisters[i].queen == queen1) {
                    queen3.sisters[i].relation -=3;
                }
                if (queen3.sisters[i].queen == queen2) {
                    queen3.sisters[i].relation -=3;
                }
                if (queen3.sisters[i].queen == queen4) {
                    queen3.sisters[i].relation -=3;
                }
            }
            for (let i = 0; i < queen4.sisters.length; i++) {
                if (queen4.sisters[i].queen == queen1) {
                    queen4.sisters[i].relation -=3;
                }
                if (queen4.sisters[i].queen == queen2) {
                    queen4.sisters[i].relation -=3;
                }
                if (queen4.sisters[i].queen == queen3) {
                    queen4.sisters[i].relation -=3;
                }
            }
            break;
        default:
            break;
    }
}
function isFriend(queen1, queen2) {
    if (queen1.friends.find((queen) => {
        return queen == queen2
    }) == queen2) {
        return true;
    } else {
        false
    }
}
function isEnemy(queen1, queen2) {
    if (queen1.enemies.find((queen) => {
        return queen == queen2
    }) == queen2) {
        return true;
    } else {
        false
    }
}
function CheckFriend(queen1, queen2) {
    let index = 0;
    for (let i = 0; i < queen1.sisters.length; i++) {
        if (queen1.sisters[i].queen == queen2) {
            index = i;
        }
    }
    if (queen1.sisters[index].relation >= 5) {
        queen1.friends.push(queen2);
        queen2.friends.push(queen1);
    } else if (queen1.sisters[index].relation <= -5) {
        queen1.enemies.push(queen2);
        queen2.enemies.push(queen1);
    } else {
        return
    }
}
function queenRelations(queen) {
    for (let i = 0; i < queen.sisters.length; i++) {
        if (isFriend(queen, queen.sisters[i].queen)) {

        } else if (isEnemy(queen, queen.sisters[i].queen)) {

        } else {
            CheckFriend(queen, queen.sisters[i].queen); 
        }
    }
}
function betterSister2 (queen, queen1, queen2) {
    let index1 = 0;
    let index2 = 0;
    for (let i = 0; i < queen.sisters.length; i++) {
        if (queen.sisters[i].queen.getName() == queen1.getName()) {
            index1 = i;
        }
    }
    for (let i = 0; i < queen.sisters.length; i++) {
        if (queen.sisters[i].queen.getName() == queen2.getName()) {
            index2 = i;
        }
    }
    if (queen.sisters[index1].relation < queen.sisters[index2].relation) {
        return queen1;
    } else if (queen.sisters[index1].relation > queen.sisters[index2].relation) {
        return queen2;
    } else {
        return false; 
    }
}
function betterSister3 (queen, queen1, queen2, queen3) {
    let index1 = 0;
    let index2 = 0;
    let index3 = 0;
    let enemies = [];
    let nuthing = [];
    let flag = false;
    for (let i = 0; i < queen.sisters.length; i++) {
        if (queen.sisters[i].queen.getName() == queen1.getName()) {
            index1 = i;
        }
    }
    for (let i = 0; i < queen.sisters.length; i++) {
        if (queen.sisters[i].queen.getName() == queen2.getName()) {
            index2 = i;
        }
    }
    for (let i = 0; i < queen.sisters.length; i++) {
        if (queen.sisters[i].queen.getName() == queen3.getName()) {
            index3 = i;
        }
    }
    if (isFriend(queen, queen1)) {
        flag = true;
    } else if (isEnemy(queen, queen1)) {
        enemies.push(queen.sisters[index1]);
    } else {
        nuthing.push(queen.sisters[index1]);
    }
    if (isFriend(queen, queen2)) {
        flag = true;
    } else if (isEnemy(queen, queen2)) {
        enemies.push(queen.sisters[index2]);
    } else {
        nuthing.push(queen.sisters[index2]);
    }
    if (isFriend(queen, queen3)) {
        flag = true;
    } else if (isEnemy(queen, queen3)) {
        enemies.push(queen.sisters[index3]);
    } else {
        nuthing.push(queen.sisters[index3]);
    }
    let nutmies = nuthing.concat(enemies);
    if (randomNumber(0, 100) >= 10 && enemies.length > 0) {
        return enemies.sort((a, b) => a.relation - b.relation)[0].queen;
    } else if (nutmies.length > 0 && randomNumber(0 , 100) >= 40) {
        return nutmies.sort((a, b) => a.relation - b.relation)[0].queen;
    } else {
        return false;
    }
}
function betterSister4 (queen, queen1, queen2, queen3, queen4) {
    let index1 = 0;
    let index2 = 0;
    let index3 = 0;
    let index4 = 0;
    let enemies = [];
    let nuthing = [];
    let flag = false;
    for (let i = 0; i < queen.sisters.length; i++) {
        if (queen.sisters[i].queen.getName() == queen1.getName()) {
            index1 = i;
        }
    }
    for (let i = 0; i < queen.sisters.length; i++) {
        if (queen.sisters[i].queen.getName() == queen2.getName()) {
            index2 = i;
        }
    }
    for (let i = 0; i < queen.sisters.length; i++) {
        if (queen.sisters[i].queen.getName() == queen3.getName()) {
            index3 = i;
        }
    }
    for (let i = 0; i < queen.sisters.length; i++) {
        if (queen.sisters[i].queen.getName() == queen4.getName()) {
            index4 = i;
        }
    }
    if (isFriend(queen, queen1)) {
        flag = true;
    } else if (isEnemy(queen, queen1)) {
        enemies.push(queen.sisters[index1]);
    } else {
        nuthing.push(queen.sisters[index1]);
    }
    if (isFriend(queen, queen2)) {
        flag = true;
    } else if (isEnemy(queen, queen2)) {
        enemies.push(queen.sisters[index2]);
    } else {
        nuthing.push(queen.sisters[index2]);
    }
    if (isFriend(queen, queen3)) {
        flag = true;
    } else if (isEnemy(queen, queen3)) {
        enemies.push(queen.sisters[index3]);
    } else {
        nuthing.push(queen.sisters[index3]);
    }
    if (isFriend(queen, queen4)) {
        flag = true;
    } else if (isEnemy(queen, queen4)) {
        enemies.push(queen.sisters[index4]);
    } else {
        nuthing.push(queen.sisters[index4]);
    }
    let nutmies = nuthing.concat(enemies);
    if (randomNumber(0, 100) >= 10 && enemies.length > 0) {
        return enemies.sort((a, b) => a.relation - b.relation)[0].queen;
    } else if (nutmies.length > 0 && randomNumber(0 , 100) >= 40) {
        return nutmies.sort((a, b) => a.relation - b.relation)[0].queen;
    } else {
        return false;
    }
}
function betterSister5 (queen, queen1, queen2, queen3, queen4, queen5) {
    let index1 = 0;
    let index2 = 0;
    let index3 = 0;
    let index4 = 0;
    let index5 = 0;
    let enemies = [];
    let nuthing = [];
    let flag = false;
    for (let i = 0; i < queen.sisters.length; i++) {
        if (queen.sisters[i].queen.getName() == queen1.getName()) {
            index1 = i;
        }
    }
    for (let i = 0; i < queen.sisters.length; i++) {
        if (queen.sisters[i].queen.getName() == queen2.getName()) {
            index2 = i;
        }
    }
    for (let i = 0; i < queen.sisters.length; i++) {
        if (queen.sisters[i].queen.getName() == queen3.getName()) {
            index3 = i;
        }
    }
    for (let i = 0; i < queen.sisters.length; i++) {
        if (queen.sisters[i].queen.getName() == queen4.getName()) {
            index4 = i;
        }
    }
    for (let i = 0; i < queen.sisters.length; i++) {
        if (queen.sisters[i].queen.getName() == queen5.getName()) {
            index5 = i;
        }
    }
    if (isFriend(queen, queen1)) {
        flag = true;
    } else if (isEnemy(queen, queen1)) {
        enemies.push(queen.sisters[index1]);
    } else {
        nuthing.push(queen.sisters[index1]);
    }
    if (isFriend(queen, queen2)) {
        flag = true;
    } else if (isEnemy(queen, queen2)) {
        enemies.push(queen.sisters[index2]);
    } else {
        nuthing.push(queen.sisters[index2]);
    }
    if (isFriend(queen, queen3)) {
        flag = true;
    } else if (isEnemy(queen, queen3)) {
        enemies.push(queen.sisters[index3]);
    } else {
        nuthing.push(queen.sisters[index3]);
    }
    if (isFriend(queen, queen4)) {
        flag = true;
    } else if (isEnemy(queen, queen4)) {
        enemies.push(queen.sisters[index4]);
    } else {
        nuthing.push(queen.sisters[index4]);
    }
    if (isFriend(queen, queen5)) {
        flag = true;
    } else if (isEnemy(queen, queen5)) {
        enemies.push(queen.sisters[index5]);
    } else {
        nuthing.push(queen.sisters[index5]);
    }
    let nutmies = nuthing.concat(enemies);
    if (randomNumber(0, 100) >= 10 && enemies.length > 0) {
        return enemies.sort((a, b) => a.relation - b.relation)[0].queen;
    } else if (nutmies.length > 0 && randomNumber(0 , 100) >= 40) {
        return nutmies.sort((a, b) => a.relation - b.relation)[0].queen;
    } else {
        return false;
    }
}
function who2Block(queen, queenTop) {
    let friends = [];
    let enemies = [];
    let nuthing = [];
    let flag = false;
    for (let i = 0; i < queen.sisters.length; i++) {
        if (queen.sisters[i].queen.getName() == queenTop.getName()) {
            flag = true;
        }
        else if (isFriend(queen, queen.sisters[i].queen)) {
            friends.push(queen.sisters[i].queen);
        } else if (isEnemy(queen, queen.sisters[i].queen)) {
            enemies.push(queen.sisters[i].queen);
        } else {
            nuthing.push(queen.sisters[i].queen);
        }
    }
    let nutmies = enemies.concat(nuthing);
    if (randomNumber(0, 100) >= 10 && enemies.length > 0) {
        dragBlocked = enemies[randomNumber(0, enemies.length - 1)];
    } else if (nutmies.length > 0 && randomNumber(0 , 100) >= 50) {
        dragBlocked = nutmies[randomNumber(0, nutmies.length - 1)];
    } else {
        dragBlocked = nutmies[randomNumber(0, nutmies.length - 1)];
    }
    return dragBlocked;
}
function who2Give(queen, queenTop) {
    let friends = [];
    let nuthing = [];
    let flag = false;
    for (let i = 0; i < queen.sisters.length; i++) {
        if (queen.sisters[i].queen.getName() == queenTop.getName()) {
            flag = true;
        }
        else if (isFriend(queen, queen.sisters[i].queen)) {
            friends.push(queen.sisters[i].queen);
        } else {
            nuthing.push(queen.sisters[i].queen);
        }
    }
    let nutends = friends.concat(nuthing);
    if (randomNumber(0, 100) >= 10 && friends.length > 0) {
        dragGive = friends[randomNumber(0, friends.length - 1)];
    } else if (nutends.length > 0 && randomNumber(0 , 100) >= 50) {
        dragGive = nutends[randomNumber(0, nutends.length - 1)];
    } else {
        dragGive = nutends[randomNumber(0, nutends.length - 1)];
    }
    return dragGive;
}
function chooseMsCong4(queen, fin1, fin2, fin3, fin4) {
    let friends = [];
    let nuthing = [];
    let flag = false;
    for (let i = 0; i < queen.sisters.length; i++) {
        if (queen.sisters[i].queen.getName() == fin1.getName()) {
            flag = true;
        } else if (queen.sisters[i].queen.getName() == fin2.getName()) {
            flag = true; 
        } else if (queen.sisters[i].queen.getName() == fin3.getName()) {
            flag = true; 
        } else if (queen.sisters[i].queen.getName() == fin4.getName()) {
            flag = true;
        } else if (isFriend(queen, queen.sisters[i].queen)) {
            friends.push(queen.sisters[i].queen);
        } else {
            nuthing.push(queen.sisters[i].queen);
        }
    }
    let nutends = friends.concat(nuthing);
    if (randomNumber(0, 100) >= 10 && friends.length > 0) {
        dragGive = friends[randomNumber(0, friends.length - 1)];
    } else if (nutends.length > 0 && randomNumber(0 , 100) >= 50) {
        dragGive = nutends[randomNumber(0, nutends.length - 1)];
    } else {
        dragGive = nutends[randomNumber(0, nutends.length - 1)];
    }
    return dragGive;
}

function chooseMsCong3(queen, fin1, fin2, fin3) {
    let friends = [];
    let nuthing = [];
    let flag = false;
    for (let i = 0; i < queen.sisters.length; i++) {
        if (queen.sisters[i].queen.getName() == fin1.getName()) {
            flag = true;
        } else if (queen.sisters[i].queen.getName() == fin2.getName()) {
            flag = true; 
        } else if (queen.sisters[i].queen.getName() == fin3.getName()) {
            flag = true; 
        } else if (isFriend(queen, queen.sisters[i].queen)) {
            friends.push(queen.sisters[i].queen);
        } else {
            nuthing.push(queen.sisters[i].queen);
        }
    }
    let nutends = friends.concat(nuthing);
    if (randomNumber(0, 100) >= 10 && friends.length > 0) {
        dragGive = friends[randomNumber(0, friends.length - 1)];
    } else if (nutends.length > 0 && randomNumber(0 , 100) >= 50) {
        dragGive = nutends[randomNumber(0, nutends.length - 1)];
    } else {
        dragGive = nutends[randomNumber(0, nutends.length - 1)];
    }
    return dragGive;
}

function areRelations() {
    let screen = new Scene();
    let flag = false;
    for (let i = 0; i < currentCast.length; i++) {
        for (let o = 0; o < currentCast[i].sisters.length; o++) {
            if (isEnemy(currentCast[i], currentCast[i].sisters[o].queen)) {
                if (flag == false) {
                    screen.createHorizontalLine();
                    screen.createBigText("Relationships");
                }
                let check = document.getElementById(currentCast[i].sisters[o].queen.getName()+currentCast[i].getName());
                if (check != null) {
                    //nothing
                } else {
                    screen.createImage(currentCast[i].image, "red");
                    screen.createImage(currentCast[i].sisters[o].queen.image, "red");
                    screen.createBold(currentCast[i].getName() + " and " + currentCast[i].sisters[o].queen.getName() + " are enemies!", currentCast[i].getName() + currentCast[i].sisters[o].queen.getName());
                    flag = true;
                }
            }
            if (isFriend(currentCast[i], currentCast[i].sisters[o].queen)) {
                if (flag == false) {
                    screen.createHorizontalLine();
                    screen.createBigText("Relationships");
                }
                let check = document.getElementById(currentCast[i].sisters[o].queen.getName()+currentCast[i].getName());
                if (check != null) {
                    //nothing
                } else {
                    screen.createImage(currentCast[i].image, "green");
                    screen.createImage(currentCast[i].sisters[o].queen.image, "green");
                    screen.createBold(currentCast[i].getName() + " and " + currentCast[i].sisters[o].queen.getName() + " are friends!", currentCast[i].getName() + currentCast[i].sisters[o].queen.getName());
                    flag = true;
                }
            }
        }
    }
    return flag;
}

function missCong() {
    let screen = new Scene();
    screen.createBigText("The contestants will vote for Miss Congeniality!");
    let wholeCast = [...currentCast, ...eliminatedCast];
    shuffle(wholeCast);
    for (let i = 0; i < eliminatedCast.length; i++) {
        eliminatedCast[i].votes = 0;
        eliminatedCast[i].trackRecord[eliminatedCast[i].trackRecord.length - 1] = "GUEST";
    }
    for (let i = 0; i < currentCast.length; i++) {
        currentCast[i].votes = 0;
    }
    for (let i = 0; i < wholeCast.length; i++) {
            let flag = 0;
            if (currentCast.length == 4) {
                wholeCast[i].lipstick = chooseMsCong4(wholeCast[i], currentCast[0], currentCast[1], currentCast[2], currentCast[3]);
                if (wholeCast[i].lipstick == false) {
                    //nada
                } else {
                    while (wholeCast[i].lipstick.getName() == wholeCast[i].getName()) {
                        flag++;
                        wholeCast[i].lipstick = chooseMsCong4(wholeCast[i], currentCast[0], currentCast[1], currentCast[2], currentCast[3]);
                        if (flag >= 10) {
                            wholeCast[i].lipstick = eliminatedCast[randomNumber(0, eliminatedCast.length - 1)];
                        }
                    }
                }
            }
            if (currentCast.length == 3) {
                wholeCast[i].lipstick = chooseMsCong3(wholeCast[i], currentCast[0], currentCast[1], currentCast[2]);
                if (wholeCast[i].lipstick == false) {
                    //nada
                } else {
                    while (wholeCast[i].lipstick.getName() == wholeCast[i].getName()) {
                        flag++;
                        wholeCast[i].lipstick = chooseMsCong3(wholeCast[i], currentCast[0], currentCast[1], currentCast[2]);
                        if (flag >= 10) {
                            wholeCast[i].lipstick = eliminatedCast[randomNumber(0, eliminatedCast.length - 1)];
                        }
                    }
                }
            }
            if (wholeCast[i].lipstick == false) {
                wholeCast[i].lipstick = eliminatedCast[randomNumber(0, eliminatedCast.length - 1)];
                while (wholeCast[i].lipstick.getName() == wholeCast[i].getName()) {
                    wholeCast[i].lipstick = eliminatedCast[randomNumber(0, eliminatedCast.length - 1)];
                }
            }
            screen.createImage(wholeCast[i].image, "black");
            screen.createImage(wholeCast[i].lipstick.image, "aqua");
            screen.createBold(wholeCast[i].getName() + " voted for " + wholeCast[i].lipstick.getName() + " to be Miss Congeniality!", "votes", "votesP");
            wholeCast[i].lipstick.votes++; 
    }
    screen.createHorizontalLine();
    wholeCast.sort((a, b) => (b.votes - a.votes));
    screen.createImage(wholeCast[0].image, "aqua");
    screen.createBold("The winner of this season's Miss Congeniality is... " + wholeCast[0].getName() + "!!!");
    wholeCast[0].trackRecord[wholeCast[0].trackRecord.length - 1] = "MISS CON";
    screen.createHorizontalLine();
}
//MEJORAR EL CODIGO, QUE NO LEAN A LA MISMA PERSONA
function readingChallenge() {
    let screen = new Scene();
    for (let a = 0; a < currentCast.length; a++) {
        if (a == 0) {
            screen.createImage(currentCast[0].image, "black");
            screen.createBold("First up... " + currentCast[0].getName() + "!!");
        } else if (a == currentCast.length - 1) {
            screen.createImage(currentCast[a].image, "black");
            screen.createBold("And last but not least... " + currentCast[a].getName() + "!!");
        } else {
            screen.createImage(currentCast[a].image, "black");
            screen.createBold("Next is... " + currentCast[a].getName() + "!!");
        }
        let firstOne;
        let queenReaded;
        for (let i = 0; i < 2; i++) {
            if (firstOne == undefined) {
                queenReaded = currentCast[randomNumber(0, currentCast.length - 1)];
                while (currentCast[a].getName() == queenReaded.getName()) {
                    queenReaded = currentCast[randomNumber(0, currentCast.length - 1)];
                }
            } else {
                queenReaded = currentCast[randomNumber(0, currentCast.length - 1)];
                while (currentCast[a].getName() == queenReaded.getName() || queenReaded.getName() == firstOne.getName()) {
                    queenReaded = currentCast[randomNumber(0, currentCast.length - 1)];
                }
            }
            screen.createImage(queenReaded.image, "lightgreen");
            screen.createBold("to: " + queenReaded.getName());
            if (i == 0) {
                firstOne = queenReaded;
            }
            let read = queensReads.find((queens) => {
                return queens.queen == queenReaded.getName()
            });
            let readNumber = 0
            if (read != undefined) {
                if (read.reads.length < 1) {
                    read = queensReads.find((queens) => {
                        return queens.queen == "General"
                    });
                    readNumber = randomNumber(0, read.reads.length - 1);
                    screen.createBold(read.reads[readNumber]);
                } else {
                    readNumber = randomNumber(0, read.reads.length - 1);
                    screen.createBold(read.reads[readNumber]);
                }
            } else {
                read = queensReads.find((queens) => {
                    return queens.queen == "General"
                });
                readNumber = randomNumber(0, read.reads.length - 1);
                screen.createBold(read.reads[readNumber]);
            }
            read.reads.splice(readNumber, 1);
            if (randomNumber(0, 100) >= 99) {
                i--;
            }
        }
        screen.createHorizontalLine();
    }
}

function downloadTR() {
    let table = document.getElementById("trackRecord");
    html2canvas(table).then((canvas) => {
        let img = canvas.toDataURL("image/png");
        let a = document.createElement('a');
        a.setAttribute("href", img);
        a.setAttribute("download","TrackRecord.png");
        a.click();
        a.remove();
    });
}

let queensReads = [
    {queen: "BeBe Zahara Benet", reads: ["Heavy is the head that wears the crown. And heavier is the body.", "BeBe Zahara Benet, you look like an overweight Naomi Campbell.", "BeBe, I hear that this is the year that you might get two crowns. Which is really not a lot of dental work as far as those early seasons are concerned."]},
    {queen: "Ongina", reads: ["Ongina, I can't wait to put you on top of my Christmas tree.", "Oooooon-gina, is there an off-gina button?", "Ongina, thank you so much for taking time out of your busy schedule of auditioning to finally join us."]},
    {queen: "James Ross", reads: ["Smile for me. Don't smile.", "Mister James, was your barbecue cancelled? Your grill is fucked up.", "James Ross, if you are America's Sweetheart, America needs a heart transplant.", "You got a grill that could put Black & Decker out of business."]},
    {queen: "Raven", reads: ["And the one on the end, oh just look at her, are you going swimming, or are you doing drag, mama, what is that?", "And you! Legendary, you think you are. Legendary? Looks like leg AND dairy", "Raven, the Frosty Bitch. I think I see penguins circling that pole.", "Raven, Raven, slow and sleek, you're so boring, I fall sleep!"]},
    {queen: "Jujubee", reads: ["Oh mama, is this Jujubee? Darling, let me get to your level. We have an undergrown orangutan!", "Jujubee, with that gaping thing you call an asshole, I think I could go spelunking in there.", "Honey, don't you know a thing about doing a manicure and a pedicure? Fix them hooves, honey.", "Jujubee, I can't wait to see your clearance retail store collection you brought.", "Jujubee, this is determination. You've been here how many times? I've watched this girl crack open chicken bones and suck out the marrow. Makes me wonder, what is she willing to do this time?", "Jujubee? More like Juju-has-been."]},
    {queen: "Tatianna", reads: ["Oh, wow. We have Eminem doing drag, mama.", "Miss Tatianna, Miss Honey. You think you're so soft. Not by the hairs of your chiny chin chin.", "Tatianna, all I hear when I put my ear up to yours is the ocean.", "Everyone thinks you're pretty. I do think you're pretty. I think you have a beautiful face... for radio.", "Sweetie, I'm sorry! If you don't have a wrist band you can't be in here for the meet and greet!", "Tatianna, thank you... For letting the PA's know who to pack up first.", "Tatianna, really?"]},
    {queen: "Pandora Boxx", reads: ["Oh, darling how old are you?", "Pandora, can we talk about sun tanning?", "Pandora, by the looks of you, you're going through the change of life, honey.", "Pandora Boxx, when the CDC said that there should be no gatherings more than 10 people, Pandora was like, 'my show should be fine.'", "Pandora Boxx, oh! This bitch is so old her wigs have osteoporosis.", "Pandora's Box, now you're supposed to be the box that unleashes all the evil on Earth. Is bitterness one of 'em?", ]},
    {queen: "Jessica Wild", reads: ["Oh, wow. Is that Dumbo Flying in?", "Do you pick up satellite with those big ones?", "Jessica Wild. Those drag clothes looks like a donkey fucked a piñata and threw up." ]},
    {queen: "Morgan McMichaels", reads: ["Morgan McMichaels, sister I know you love to perform Hard Rock music. And that's good, because that face is also a hard rock.", "Morgan McMichaels, I would take the 'A' out of your name and replace it with an 'O', because I'm pretty sure we'd all like you 'Morgon'.", "Phoenix. Oh, I'm sorry, Nicole Paige Bro... Uh... Pass.", "You know, I'm not going to read Morgan McMichaels, life already has.."]},
    {queen: "Kylie Sonique Love", reads: ["Sonique, as Lady Gaga once said, there can be a hundred people in the room, and 99 have no idea who you are."]},
    {queen: "Shangela", reads: ["Miss Shangela, girl, can we have some water? Her hair is thirsty, baby.", "Shangela, I hope you still have your phone card to middle earth, 'cause the hobbits are calling!", "Shangela's the most annoying thing I've ever met in my life. She's like a pull-up toy that says 'Halleloo'. Just my opinion.", "Shangela, halleloo! The only queen I know that can make epilepsy on stage look good.", "Shangela! I always thought her name was Angela and people were just telling her to shut up.", "Shangela! From the Haus of Concreta; you are a brick!", "Shangela. What if this season, we put you IN a box? Cos you're gonna halle-lose.", "Shangela! You have come so far! Initially, your makeup was kind of busted and your outfits were a mess and your personality was super grating, but look how far you've come now. You are much older."]},
    {queen: "Raja", reads: ["Raja, you think you're fashion? You should go to OOOOOOLLLLLLD SCHOOL.", "Girl, don't go to an antique shop, they just might keep you there.", "Raja, when you're on the runway, do you keep the 800 number for suicide? Because those toes are ready to jump.", "Raja, should I call you Raja or Grandma?", "Raja, I know you call yourself top model, but I think Tyra Banks and I would agree you're just fashion roadkill.", "Raja Gemini. Oh, you are such a legend, and I'm just so excited that all it took to get you here was the promise of free wine.", "Raja, you're so old, you make Jinkx's drag feel fresh.", "Raja. Boot.", "Roger. You've always been like a sis- You've always been like a mo- You've always been like a grandmother to me. You know they say Geminis have two faces. Have you been putting the good makeup on the other face?"]},
    {queen: "Manila Luzon", reads: ["Manila Luzon, Asian role model. Well, I hope you were referring to the rolls all over your body.", "Manila Luzon. Emphasis on lose. Twice.", "Manila Luzon, I loved you so much on your season. But who's a booger now, bitch?", "Manila Luzon. You remind me of a Mound and Almond Joy. Sometimes you feel like a nut, sometimes you don't."]},
    {queen: "Alexis Mateo", reads: ["WHO CARES?", "Alexis, girl, I been thinking about you all day. I was at the zoo", " Alexis Potato, I mean- I'm so sorry, girl. Look, I know you've been here before, hopefully you bring actual talent this time... ", "So... Miss Alexis Mateo,it's really nice to have you back competing for the third time, maybe this time you won't be so overshadowed by Yara Sofia.", "Alexis Mateo. I don't wanna be shady, so I'm not gonna bring up your weight. But when you work, do they pay you in pounds?", " Alexis Mateo, you actually have a really good chance of winning this competition, because they've never had a Puerto Rican or a big girl winner."]},
    {queen: "Yara Sofia", reads: ["Oh, Yara. Your blue contacts are so creepy that it makes my skin itchy, itchy, itchy... pa'lante.", "Yara, isn't it interesting that when your flight came into town the sightings of chupacabras increased?", "Yara, WHAT THE FUCK are you saying, girl?"]},
    {queen: "Carmen Carrera", reads: ["SYPHILIS.", "And, aw, Carmen Carrera. Honey, just go jump in the ocean. You won't drown. Silicone floats."]},
    {queen: "Delta Work", reads: ["Delta Work, is that your tits or your feet?", "Delta, just grow a neck, honey.", "Mimi Imfurst."]},
    {queen: "Mariah Paris Balenciaga", reads: ["My dear friend and beautiful, Mariah Paris Balenciaga, they say you have mug for days, but with shoulders like that you need to be thug for days", "Let's see, Mariah, Paris, Balenciaga. Three iconic names that are all known worldwide... yet you remain completely unknown.", "Mariah Paris Balenciaga. Great, you're here, so we have to change the name to RuPaul's Drag Race 'Some Stars'.", "Mariah Paris Balenciaga, you look like what would happen if Will Smith absorbed Jada Pinkett.", "Mariah, girl I love you, but your career only has movement because the earth has to spin on its axis."]},
    {queen: "India Ferrah", reads: ["India Ferrah, this shade is all real. It's no wonder you work in a place called Piranha in Las Vegas, because with those teeth, you're a walking billboard for them. And also, I'm really surprised to see you, because I thought you had retired, and now I just see that you're tired.", "Miss India Ferrah. What happens in Vegas stays in Vegas, don't unpack, go back. Okay?", "India Ferrah. I'm not gonna read you 'cause I'd never kick a man... while he's down.", "India Ferrah... Oh! I'm pausing so we can all Google who you are."]},
    {queen: "Chad Michaels", reads: ["Mama Chad, it's called forever 21 not forever 41!", "Chad Michaels, you so old, you're still on Myspace.com Chad Michaels!", "Chad, Chad, my little Consuela, you so old, you look like my abuela!"]},
    {queen: "Jaremi Carey", reads: ["Jaremi, you are gorgeous, you catch the camera's eye from the right, but from the left, you snag it!", "Jaremi Carey, although reading is fundamental darling, you want to spell first, you illiterate!", "Jaremi Carey, what brand of makeup do you wear? Sherman Williams?", "Jaremi Carey, since you've fixed your snaggletooth, I'll just talk about your face. You're ugly.", "Jaremi Carey? Gila monster.", "Jaremy Carey, you hand make all of your outfits, and I love them. My favorite one was that, um, one that was like a jumpsuit, it was all orange. ... So good."]},
    {queen: "Latrice Royale", reads: ["Latrice Royale, you're free now you don't have to rock the yard sandals anymore!", "Did you know that Latrice is actually Mo Heart's bigger sister?.. Enlarged Heart.", "Mystique was a mistake", "Latrice Royale. You are my sister, bitch. I liked it better when you was my bodyguard."]},
    {queen: "Dida Ritz", reads: ["Dida let me start with you boo, there's some lotion in my purse, you need to use it on your elbows and your knees, you look like you've been galloping through flour baby.", "Dida Ritz, I don't know if that's Hot Couture or Hot Cou-torn 'cause there's holes in that shirt!", "Ladies and Gentleman, welcome to the RuPaul ball, tonight, in the category of BUTCH QUEEN: DIDA RITZ!", "Dida Ritz, a lot of you girls like to clock me for painting my skin on the gray side, but I was inspired by your knees"]},
    {queen: "Willam", reads: ["Willam, honey, your face is made out of marbles, s*** don't move!", "Willam, I know you're talented at you know, buying shoes, but you're talented at you know, drag?", "Willam Belli, Willam Belli loves to live his life and think he's Carrie Bradshaw, but in the sequel she'll be playing Scary Radshaw.", "Willam, Miss Industry, congratulations on your new role as the Big Bad Wolf, by the hair on your chinny chin chin!"]},
    {queen: "Jiggly Caliente", reads: ["Jiggly Caliente, you should feel honored! You're the first contestant in Drag Race history with child!", "Oh Jujubee, you know helium is for balloons, not your stomach", "Jiggly, I love you, come to me, come, come to me, come, I won't hurt you... here's my dentist card. Use it", "Jiggly Caliente, BMW... Body Made Wrong!", "Alright, Jiggly Caliente, may I call you... stupid?", "Jiggly Cali... Cali... I just can't bring myself to lie already. It's nothing hot about this bitch but that wig."]},
    {queen: "Jinkx Monsoon", reads: ["Jinkx Monsoon, with a name like a meteorologists', the only weather you're serving up is the weather storm of bad taste.", "Jinkx Monsoon, ashes to ashes, dust to dust, you're great at the challenges, but on the runway, you're a bust!", "Jinkx Monsoon, Boy George called. He wants his hat back.", "Jinkx-I'm-a-Man-Monsoon, that's you. Hair, makeup rotted gutted.", "Jinkx Monsoon. I finally realized where the last name comes from. I have never seen anyone that can blow quite like you.", "Jinkx Monsoon. You know, looking at you, your teeth really represent the cast here. Some are big, some are small, two of them are white. No, three of them are white, yeah.", "Now, Jinkx Monsoon, in order to read you, I'm going to imagine you naked... Oh, that's how I lost that weight."]},
    {queen: "Alaska", reads: ["Miss Alaska, I think you should wear a mask for every challenge.", "Alaska the finale of the Rolaskatox. Start over.", "Alaska, I'm sure Katya can see you from her backyard.", "Alaska? Gutted.", "Alaska, I finally got to listen to Anus, and I get it. 'Cause it sounds like what my anus does after eating Mexican.", "Alaska, shut the fuck up.", "Alaska, like her outfit, trash.", ]},
    {queen: "Roxxxy Andrews", reads: ["Roxxxy Andrews, condragulations on the weight loss, but to me, you're still Boxxxy, Mandrews.", "Roxxxy Andrews, there are two types of peanut butter: creamy (points to legs) and crunchy (points to face).", "Roxxxy Andrews, your idea of a wardrobe is a swimsuit in a different color.", "Roxxxy Andrews, the reason why you rely on your body so much is to distract everyone from your face.", "Roxxxy Andrews, I think about you all the time. Especially in the morning, at the bus stop.", "Boxy Andrews? Rotted.", "Roxxxy Andrews, It's good to see a filler bitch this season, and I'm not talking about that ass.", "Roxxxy Andrews, obviously a diet consisting of nothing but hatred for Jinkx Monsoon does a body good!"]},
    {queen: "Detox", reads: ["Detox, you won the challenge, you can take the chicken mask off now.", "Detox, is Amanda Lepore your mother? 'Cause there's a lot of silicone going on there.", "Detoxic! Honey, I know you're thinking you're serving body and look, but the only thing I'm getting is The Hills Have Eyes.", "Detox, you're so seductive, but unfortunately it's illegal to do it with you because most of your parts are under 18 years of age.", "Detox, when you walk down the runway, I do expect for the credits to start running for Gorillas in the Mist.", "and Venus D-Lite.", "Detox, no really, I mean that. This is actually your intervention, you should really stop... this."]},
    {queen: "Coco Montrese", reads: ["Coco Montrese, you are a fierce lip syncer. But when you're done, I don't know whether to clap or warm up the defibrillator.", "Coco Montrese, for someone who calls themselves a top, you sure do like being on the bottom.", "Miss Coco, you must be blind because it looks like you're using Tang for your highlight.", "Coco Montrese, I don't know why everyone keeps calling you old. How old are you? I'd say you look somewhere between 40 and death!", "Ornacia... Oh, I'm sorry. This is the first time I've seen you, Coco, without a filter.", "Janet Hagson, oh, I'm sorry, Coco Montrese. How exciting for you that Janet has a new album out, you can both come out of retirement.", "Coco Montrese, I've always wanted to know what the female Gremlin would look like in twenty five years.", "Coco, thank you for proving in season five that orange is the new black.",  "Coco, way too old."]},
    {queen: "Alyssa Edwards", reads: ["Alyssa Edwards, overbites are very in this season. Too bad your performance here is so underwhelming.", "Alyssa Edwards, your performance as Katy Perry was less than satisfactory. When you go home, get on wikipedia.com and look the bitch up, do you know anything about her!?", "Alyssa Edwards, you can't sing worth a damn, but you dance a great ballet. Darling with only one skill, it's time you sashay away.", "Alyssa Edwards, never mind.", "Alyssa Edwards, Miss US- oh wait.", "Alyssa, you are like the Abby Lee Miller of drag. Except when Abby Lee Miller dresses her body, she can cover her backrolls.", "Alyssa Edwards, my darling dear. I can't stand it when you're near.", "Alyssa Edwards, you've often been referred to as the dancing fool. I just wanna know, when did the dancing part get added?", "Alyssa Edwards, you are so talented and you haven't let it go to your head. Nothing has changed you, or your overbite!", "Alyssa Edwards, whoever said everything's bigger in Texas has obviously never seen your D. But you know what they have seen? Your body."]},
    {queen: "Ivy Winters", reads: ["I-veeeee Wintersss! You're very soft and beautiful...for a hard clown.", "Ivy Winters, you got read down for your performance in Snatch Game, but I however thought your impression of Mrs. Doubtfire was spot on.", "Ivy Winters, you're such a cute twink, but as a drag queen, you stink.", "Ivy Winters... I can't do it, because reading you is like reading a Walt Disney book, it's simply too easy.", ]},
    {queen: "Serena ChaCha", reads: ["And to my dear, dear Serena: I would read you but it does appear life already has.", "Serena ChaCha, who cancelled and you booked this gig?"]},
    {queen: "Bianca Del Rio", reads: ["Miss Bianca, you're such an old c*** if I fisted you, I would bring out some cobwebs and dust on my hand.", "Bianca Del Taco Trio, your style is as old and bitter as you. You've even got the crypt keeper crying 'BOO HOO HOO!'"]},
    {queen: "Adore Delano", reads: ["Then we have Adore. I know what you got on your SAT's. Ketchup.", "Adore, I wish someone would show you a door. Any door.", "Adore, you know you're from the west coast because it's a three hour delay before you finally get a joke.",  "A-bore De-lameo, is that a hog on your body, or are you excited to see me?", "Do you know what Adore and the value menu have in common? They're both cheap and full of fat.", "Adore Delano, do you know what makes you the number one fan favorite of all the time? Neither do I.", "And Adore Delano, uhm... really?", "Adore Delano, these other girls are gonna say you have terrible makeup skills, you have no fashion sense, and you're dumb as a rock. But they're wrong! You don't have terrible makeup skills."]},
    {queen: "Courtney Act", reads: ["Courtney Act, what were you caught in the act of? Putting your face on, because you always look unfinished.", "Pretty little Courtney Act, her real beauty is on the inside. I guess that's why you've let so many men inside you. Courtney Act, Australian for whore."]},
    {queen: "Darienne Lake", reads: ["MIss Darienne Lake, you should be arrested for animal cruelty. The way you abused those kitten heels on the runway is absolutely criminal!", "Darienne Lake, this is the girl who probably sits reverse cowgirl on the toilet just so she has a flat surface to eat off of.", "Miss Darienne Lake, you have a lot of jokes, but to me, they're more like UFO's. I mean, they are way out there and I've never seen one land."]},
    {queen: "BenDeLaCreme", reads: ["Miss BenDeLaCreme, after seeing you in drag, I realize now why Seattle has a high suicide rate.", "BenDeLaCreme, the cream always rises to the top, but then again, so does the scum.", "BenDeLaCreme, or more like has-been DeLa Creme.", "You remind me of a Russian doll, full of yourself.", "BenDeLaCreme, where you been? Like, literally, where you been?", "The low-rent Michelle Visage. Sister, it's nice to see you here."]},
    {queen: "Joslyn Fox", reads: ["Joslyn Fox, she's so gay, even her asshole has a lisp.", "Joslyn Fox, you may not be all that smart, and you may not be all that pretty... I guess that's it.", "Miss Joslyn Fox, when we need a lower rate version of Courtney Act, we'll let you know.", "Joslyn, you have some really comforting old fashioned qualities like how you paint in sepia tone and your voice sounds like a dial-up modem."]},
    {queen: "Trinity K. Bonet", reads: ["Oh Trinity. She thinks she looks like Beyoncé from Destiny's Child. On second glance, you look more like Rosemary's Baby.", "Trinity, I believe your smile belongs on Season 4. Every day is shark week with your grill.", "Trinity K. Bonet, the Holy Trinity: bad teeth, bad personality and bad attitude!"]},
    {queen: "Laganja Estranja", reads: ["Miss Laganja Estranja, next time you death drop, reverse that and drop dead.", "Laganja, ladies and gentlemen, is a cover model. I saw her on the cover of a magazine just last month; Horse and Hound Quarterly.", "Laganja you're still here?"]},
    {queen: "Milk", reads: ["Milk, your beauty and fashion is listed right on the side of your carton under 'Missing.'", "Big and Milky! Girl, just like the drink, you give me the shits.", "Milk? No. Cottage cheese? Yes.", "Wow Milk, you put a lot into this look. What, two percent?"]},
    {queen: "Gia Gunn", reads: ["G-G-G-Gia Gunn. I guess you can buy a gun at Walmart."]},
    {queen: "Violet Chachki", reads: ["Violet Chachki, you keep training those corsets girl. Pretty soon your waist size will be lower than your IQ.", "Oh look it's a giraffe, no it's a horse. Oh, it's just Miss Violet serving neigh realness.", "Violet, I don't believe the rumors. I don't believe that you took the season 4 winner crown. I don't believe you're taking this one either."]},
    {queen: "Ginjer Minj", reads: ["Ginger Minj, I disagree with the judges. I think you should bring your black hairspray down further. Full coverage.", "Ginger Minj, girl did you ever save Carol Anne from the poltergeist in the TV?", "Ginger Minj, in my eyes, the true winner of season seven... of TLC's I Didn't Know I Was Pregnant.", "Peg Bundy ate Kelly and Bud. Party!", "Ginger Minj, you're so full of shit, you should change your name to ginger rectum.", "Ginger Minj, bitch you are shaped like a deep breath.", "Ginger Minj, oh my god, I love your husband CJ. He's a top, you know what that makes Ginger? Rock bottom.", "Ginger Minj, the actor of the group. Can you finally act like you have some taste?"]},
    {queen: "Pearl", reads: ["Pearl, your razor burn is so bad the only way I can read you is by braille.", "Pearl, now that you come out of your shell, maybe you could use that as a butt pad?"]},
    {queen: "Kennedy Davenport", reads: ["Kennedy Davenport, you've got your eye on the prize and your other eye on the crown.", "Kennedy Davenport. Kennedy? Kennedy, I'm over here! I'm over here! Girl, that one eye confusing me girl.", "Kennedy Davenport; the only queen that doesn't have to turn to look both ways before crossing the street.", "Kennedy Davenport, you seem a little offended by our jokes. We weren't offended by your parents' little joke.", "Kennedy, I realise that your reads today weren't that great, but in fairness, I don't expect you to be a good reader because you always talk like you're sounding everything out."]},
    {queen: "Katya", reads: ["Katya, at this point you really should just make like your hair line and recede.", "Katya, now you get to increase your hooking fee. Thank you, RuPaul's Drag Race.", "Katya, where do you get your outfits, girl? American Apparently Not?", "Katya, are you confused? The saying is young, dumb and full of cum.", "I'm a big fan of Katya. Very manly arms. I mean, can you blame her though? After carrying the weight of season 7 on your shoulders..."]},
    {queen: "Trixie Mattel", reads: ["Trixie Mattel, making fun of you is like shooting clownfish in a barrel. Unfortunately, that's about as fishy as you'll ever be.", "Trixie Mattel, haute couture? More like haute glue.", "Is that Ben Affleck? Girl, I must be hungry for the dick if I think this thirsty bitch is her.", "Miss Trixie. Girl, I am waiting for you to change that lip color, 'cause your face looks like the back of a baboon's ass", "Trixie Mattel, she's a fashion doll, she's beautiful... She's the personification of FUPA.", "Trixie Mattel; so pretty. A year ago, she was pretty fat.", "Trixie Mattel, bitch, you call yourself the lifesize Barbie. But actually, you look like a disgruntled Ken that ate Barbie and put on her wig and costume.", "Trixie, you look like a Lisa Frank serial killer.", "Trixie, now, a lot of people clock your makeup, but I totally get it. You know, you're just painting for the back of the room, which makes sense because that's where your audience collects if you remember to lock the door."]},
    {queen: "Miss Fame", reads: ["Miss Fame, I think everything about you is so original, except for those lips, those cheeks and everything you present to the judges on the runway.", "Miss Fame, you are such a talented make-up artist. I have never met anybody whose able to shove their head so far up their own ass without smudging their eye liner."]},
    {queen: "Jasmine Masters", reads: ["Jasmine Masters, you know what--oh! (looking at the ground) Oh, my God. I'm sorry. I was just looking for her talent.", "Jasmine Masters. So boxy. I don't know whether to do my laundry on your teeth or your abs."]},
    {queen: "Bob The Drag Queen", reads: ["Bob The Drag Queen. You may be from New York, but honey, those feet are still from Mississippi.", "Bob The Drag Queen, Michelle Visage said to punch up your highlights. Your makeup makes me want to punch you in the highlights.", "Bob. Please shut up.", "Bob The Drag Queen. I had no idea that there are different shades of ashy.", "...and Bob The Drag Queen. I don't blame you for not being a great makeup artist. There's not many things you can do with coffee grounds and gasoline.", "Bob The Drag Queen. Bob, you're like the napalm of drag. Your drag is so good from afar, but far from good.", "And Bob The Drag Queen is so dark, she sits in a tub of hot water, and makes coffee."]},
    {queen: "Kim Chi", reads: ["Uh... Teletubby.", "Kim Chi. You are stomping for the gods on the runway. I just wish your drag would get raptured.", "Kim Queef. How would I describe your teeth? 'Thuthpicious.'"]},
    {queen: "Naomi Smalls", reads: ["Naomi Smalls... bitch, eat a sandwich.",  "Naomi Smalls. Your wardrobe reminds me of a legendary Drag Race queen: Nicole Paige Brooks.", "Naomi Smalls, I loved you in Bambi. As Bambi. When you came out all thin. But I loved you even more as Jack Skellington in The Nightmare Before Christmas.", "Naomi, no one knows whether to call you 'nigh-o-mi' or 'nay-o-mi,' but judging from your runway looks, no one's gonna be calling you at all.", "Naomi, I'm gonna give you some advice, darling. No one's gonna take you seriously if you were born after 'Windows 95' came out.", "Naomi Shambles. I find it amazing you have eleven brothers and sisters and no one loved you enough to tell you not to wear those shoes on national TV.", "She's so skinny, she has to run around in the shower just to get wet.", "She's so skinny she can look through the peep hole with both eyes.", "Naomi Smalls, you know you remind me ofone of those things that, the little car dealerships. Just kidding, those things make people laugh, you don't.", "Naomi Smalls, legs you are known for. However, you should be known for toes, 'cause they're always hanging out.", "Naomi Smalls, legs, legs, legs. Could we get a side of brains with that?"]},
    {queen: "Chi Chi DeVayne", reads: ["Chi Chi, your drag is just like turkey neck: cheap, and no one wants it.", "Chi Chi, you know, I fell in love with you. You have this wonderful boyfriend back home, and she was telling us stories about how she has to—he sounds really attractive—you have to remind him to shower, you tell him to clean up after himself, and then you also cook dinner. You just open up a can of beans with those teeth.", "Chi Chi, the day I met you, you sad you weren't a comedy queen. Yet you were wearing a trash bag. That was very comedic. Still, after six episodes: Your most expensive look.", "Chi Chi, your drag reminds me of my elementary school project: hot-glued together and cheap.", "Chi Chi, your drag is amazing. ...considering you look like you got dressed in hurricane forced winds.", "Chi Chi DeVayne. We all know she's poor and cheap, in fact you ring her doorbell, the toilet flushes.", "Why is everyone so shocked she can do backflips? Her teeth have been doing somersaults since she got here.", "Chi Chi DeVayne. Girl, with that mouth, you could put Black & Decker out of business, because you've got a mouth full of tools honey.", "Chi Chi DeVayne! Started from the bottom, now y... Nope, you're still on the bottom."]},
    {queen: "Derrick Barry", reads: ["Simple—I mean Derrick—I mean Britney. You know, you are pretty attractive. I'd hit that baby one more time.", "Derrick Barry. You say it takes you an hour to do your face. Why does it look like five minutes?", "Derrick Barry. It is so nice to be as pretty as homemade soap.", "It is a known fact that Derrick Barry is not very smart. When she heard Britney Spears, she said, 'Does she? I prefer fencing.'", "Derrick Barry, girl, Britney again? You're tired, moving on...", "Oh, my dear friend, Derrick Barry. You are a Las Vegas showgirl. And you're also a lost Vegas showgirl.", "Derrick Barry. You give us Britney like it's always 2008. Now, can we go ahead and open the door and #FreeBritney?", "Derrick Barry. you know, the girls in your season said you weren't a real drag queen because you couldn't paint and you could only do Britney, but I completely disagree. I don't really think you can do Britney."]},
    {queen: "Thorgy Thor", reads: ["Thorgy Thor. Girl, I love you so much, I don't know whether to give you a hug, or put some change in a cup.", "Thorgy Thor, I would read you but I wouldn't want you to worry about it.", "Thorgy Thor. You know how the kids are saying 'Brows on fleek?' Yours are on 'hide and seek.'", "Thorgy Thor—if that's your Christian name—your hair is reaching for the heavens, but your bangs are praying for release.", "Thorgy Thor! You know, I love clowns! And I never met an unfunny one until I heard you reading.", "Thorgy Thor! Oh, girl, your drinking has affected me in the following ways.", "Thorgy Thor. Mother, she looks homeless."]},
    {queen: "Robbie Turner", reads: ["Robbie 'snaggletooth' Turner, girl, you the first person I've ever seen whose teeth had a kickstand.", "Robbie Turner, Jinkx Monsoon and BenDeLaCreme shined with their Snatch Game characters, but I guess this is a trilogy I won't finish reading.", "Robbie Turner. 'Let me tell you something for free.' Why don't you borrow some Ru dollars, and go buy a new quote.", "Robbie Turner, we know you're a vintage queen, but do you have to smell like mothballs too?", "Robbie Turnter. I know you're a huge fan of classic movies and television. May I recommend one of my favorite classic movies and TV shows: Flipper."]},
    {queen: "Sasha Velour", reads: ["Sasha. You and Ru have a lot in common. He bald, you bald, he wear glasses, you wear glasses, he's rich, you- never mind."]},
    {queen: "Peppermint", reads: ["Peppermint, you assassinated Cynthia in the lipsync but, did you have to practice on your wardrobe?", " Peppermint. You need one."]},
    {queen: "Shea Couleé", reads: ["Shea Couleé, you remind me of my favorite movies. Your fashion is Coming To America, and your smile, Jurassic Park.", "Shea Shea Couleé, you sure are a scene stealer. I guess gnawing on set pieces explains those teef.", "Ladies, we're gonna do an exercise. Everybody raise your arms up to the sky, and Shea this is for you, one word. Deodorant, bitch.", "Shea Couleé. Why so emotional, baby?", "Shea Couleé. I'm very glad that Sasha could not be here, because we don't have to hear her talk about roses, but we do have to look out for that rosebud of yours."]},
    {queen: "Trinity The Tuck", reads: ["I'm so happy that we have on loan from Madam Tussauds, RuPaul's statue and miss Trinity The Tuck.", "Trinity The Tuck, I once told you that you're so beautiful inside and out, I lied you ugly stripper.", "Trinity swears she's so fishy bitch, all she's serving is Fisher-Price.", "Bitch, I thought there was some big girls 'til your nose walked in, bitch.", "Tiffany The Tuck, you've had so much plastic in you, you won't be buried in a coffin, you'll probably be buried in a recycling bin.", "Trinity The Tuck. Since you got beat by a peppermint, why does your breath still smell like shit?", "Trinity The Tuck, was that legal or illegal silicone, and whose kitchen table did you get done on?", "Trinity The Tuck. She's had so much plastic surgery, I went to her Instagram and it looks like somebody face-tuned a chicken.", "Trinity The Tuck. You on this season is just like what's in your face. Filler.", "Trinity The Tuck, okay. I don't have no read for you, bitch. You are the realist bitch in this season, from the knees down, okay?", "Trinity The Tuck. Always known as the body, but never the face."]},
    {queen: "Alexis Michelle", reads: ["Alexis Michelle, Broadway is calling. In this case, it's the one in Brooklyn where the whores work.", "Alexis Michelle, you're oh so BROOOAADWAAAY, but you're also very broad.", "Alexis, you're like a BMW. Body made wrong.", "Alexis Michelle, Pillsbury called, they want their rolls back.",  "Alexis, I love your costume. You look just like a honeybaked ham."]},
    {queen: "Nina Bo'nina Brown", reads: ["Nina Bo'nina Brown, your pads are so big, you bent down to pick something up off the street, and the garbage man said Who let this raggity couch here? Goodwill pickup is on Sunday.", "Nina Bo'nina Brown Jurassica Parker, you've had some ups and downs in this competition and I can't wait to read it all in your biography, 50 Shades Of Ashy.", ]},
    {queen: "Valentina", reads: ["Valentina, your wardrobe sure does look expensive, but money can't buy talent.", "Valentina, you think you're Miss Venezuela, but you're more like Miss Quinceañera.", "Oh yeah, I had a really good read for Valentina but I can't remember the words...", "Valentina, take that thing off your face. Oh. It is your face. Your other one.", "Valentina, have you ever tried eating your makeup? So you'll be pretty on the inside, too?"]},
    {queen: "Farrah Moan", reads: ["Farrah Moan, all those mans that buy you fancy designer shoes, they're not your boyfriends, they're called Jons and they're your employers.", "Farrah, you really are the social media queen, too bad you can't get a filter for that personality.", "Farrah Moan. the highlight of Season 9. Just like that makeup trend, you're probably out next week.", "What's up, Farrah Moan? Farrah Moan is so dumb, she thought Valentina was her best friend.", "Miss Farrah Moan. Sweets, if I was as untalented and unoriginal as you are, I too would invest everything I had in looking like somebody more famous than I.", "Farrah Moan. You're just like cotton candy. Pink, so sweet and all hot air."]},
    {queen: "Aja LaBeija", reads: ["Aja, I love your costumes. That's why I call you the Joan of Arc of drag. Great ideas, badly executed.", "Aja! Welcome to the big leagues, where Charlotte Russe and Forever 21 won't cut it little girl.", "Aja, are you from outer space? Because your ass is out of this world and your face is cratered as fuck.", "Aja, always representing Brooklyn. Honey, by the look of them clothes, you should be representing 'Broke-lyn'", "Aja, you're beautiful, you're gorgeous, you look like Seal.", "Aja, girl, if you lose this season you can move on to your true destiny; which is killing teenagers in their dreams on Elm Street.", "Aja, I feel like people didn't really get your whole thing. I mean, you do amazing special FX makeup; everybody in the room can look like they're brightly lit, but you still somehow look like you're under that one flickering light in a haunted hospital."]},
    {queen: "Eureka!", reads: ["Eureka, we found it. Girl, how could we miss it?", "Eureka O'Hara, I know you've probably seen 'Dumbo' like a thousand times. But it doesn't matter how big you paint these wings. You are staying on the ground, bitch.", "Eureka O'Hara, stop relying on that body fat.", "Eureka, they say 'Eureka! I found it', right? But when you gonna find out when to shut the fuck up sometimes?", "Eureka O'Hara, from HBO's We're Here. We wish you weren't.", "Miss Eureka O'Hara. The only thing thinning on you is your hairline."]},
    {queen: "Aquaria", reads: ["Aquaria, God's gift to makeup. So sorry God didn't bless you with the gift of a personality.", "Aquaria, I love your confidence. You're always telling yourself how you're beautiful, how you're talented, how you're gonna win. You're also a pathological liar.", "Aquaria, people don't appreciate how much money you have to spend on makeup when you covering two faces."]},
    {queen: "Kameron Michaels", reads: ["Kameron Michaels, I don't really have a read for you. Please, just fuck me. Please, just fuck me!", "Kameron Michaels, I think I speak for all the girls here when I say we're really gonna miss you next week."]},
    {queen: "Asia O'Hara", reads: ["Asia O'Hara, you are the Amazon queen. You get your tights from Amazon, you get some of your outfits from Amazon, and apparently, they sell teeth, too."]},
    {queen: "Miz Cracker", reads: ["And Miz Cracker. You coin yourself as thin, white, and salty bout you forgetting bitter. Bitter that you are a New York City queen that had to fuck Bob the Drag Queen to get to the top.", "Aquaria! Oh sorry, it's just Miz Cracker.", "Oh, Miz Cracker, you remind me of my childhood, picking Adam's apples."]},
    {queen: "Monét X Change", reads: ["Miss Monét X Change. Just an exchange? I would have asked for a full refund.", "Monét X Change, girl, you know better to be black using hotel lotion.", "Monét X Change. The sponge queen. Too bad you couldn't soak up a win.", "Monét X Change, you look like Steve Harvey without the mustache. Or the money.", "Monét X Change. Now I know why you have your name. You look so cheap, it looks like you've broken your piggy bank for some change.", "Monét X Change. Girl put some goddamn makeup on. You in full drag and you look like Bob The Drag Queen out of drag.", "Monét X Change. Or shall I call you Sponge Bob Square shape?", "Oh Monét, people are always comparing Monét to Bob The Drag Queen, and I don't think that's right, and I don't think that's fair. Bob is very talented.", "Monét X Change. Now not a lot of people know, Monét is a very talented singer. That's because she's not."]},
    {queen: "The Vixen", reads: ["The Villain. I mean, The Vixen. I really think it's so fierce that back in Chicago you have that show called 'Black Girl Magic.' Now can you show me a magic trick and just disappear?", "The Vixen, you told us from day one you are here to fight. Sweetheart, why don't you fight some of those wigs with some soap and water?", "The Vixen, do you have a housekeeper, girl? Your kitchen is a mess.", "Miss The Vixen, though your tumbles are stunning, your hair gives me tumbleweed."]},
    {queen: "Mo Heart", reads: ["Mo Heart, you've got a heart of gold, the voice of an angel, and a hairline that looks like it's been fucked with a weedwhacker.", "Mo Heart, you brag so much about how you make your own clothes, but your dresses are so ugly, they hang themselves.", "Her name's Monica, right?", "Mo Heart, do you remove your makeup with flushable toilet wipes? Because you're an ass and your makeup is shit.", "Mo Heart, you've been passed around more than the donation basket on Sunday. And had gotten less change."]},
    {queen: "Blair St. Clair", reads: [" Blair St. Clair, bitch, you look hungry. Eat a burger.", "And here's my sister, Blair St. Clair. Winning the crown is like your hit song 'Now or Ever'. Not now, and probably never.", "Okay, Blair St. Clair. You know me. I don't read somebody unless I have a genuine respect for them... so I think we're done here."]},
    {queen: "Mayhem Miller", reads: ["Mayhem, girl, it is what it is. It is what it is", "Mayhem Miller. I think maybe you should switch out the Miller for Coors Light.", "Mayhem Filler. I'm sorry, I'm sorry, I'm sorry. I mean, Meh-hem Miller.", "Mayhem Miller. Every time I look at your face, I'm always reminded it's 5:00 somewhere."]},
    {queen: "Yvie Oddly", reads: ["Girl, you're so skinny, you got people in Somalia sending you food.", " Babe, Frodo Baggins called. Girl, he wants his ring back.", "Yvie Oddly, I am so glad, bitch, that I was able to work with you this summer to see for myself that you don't stink. It's just your drag, bitch.", "Yvie Oddly. Your dad is so hot. What happened?"]},
    {queen: "Brooke Lynn Hytes", reads: ["You 80s-looking porn star. Roses are red, Violets are blue. Your Celine Dion was shit boo boo.", "You can take the girl out of L.A., but it takes three to six months for the L.A. to dissolve out of the girl."]},
    {queen: "A'keria C. Davenport", reads: ["A'keria C. Davenport. The resting bitch face of the season. Are you sure you just haven't been resting?", "A'keria C. Davenport. You know, I'm actually really excited to hit the road with you. It wasn't until I saw that ass that I truly understood the meaning of a drug mule.", "A'keria- I'm scared of her, so I can't do it.", "A'keria C. Davenport, ass almighty. That ass is magical. It reminds me of a genie's lamp. Because it's cold, dark, and when men rub it, they wish for something better.", "A'Keria Davenport, I just know you're going to carry on that notorious tradition of the Davenports, and go home without the crown.", " A'keria Davenport, my sister, my sister. Ass almighty, ankles all tiny.", "A'keria C. Davenport, one of the realest bitches I know from the waist up.", ]},
    {queen: "Silky Nutmeg Ganache", reads: ["Silky's drag transformation is incredible. She goes from a busted-looking man, and to just busted-looking!", "Silky! You gave me electric chair that hair, bitch you always comin' here reckless.", "Silk, with the good milk. The only good thing about your milk is that it has an expiration date.", "Silky Nutmeg Ganache. Isn't she precious? No really, isn't that Precious?", "Miss Silky Nasty Nutmeg Ganache. I don't know what flaps more, your lips, your body, or those shoes.", "It's so funny you use a sharpie on your face girl, that's permanent. Unlike your career.", "Oh, she was in such a hurry to get here she put her ass on backwards today.", "Silky! I remember when you were dressed up as a cockroach on the runway. That's the closest you can get to cock.", ]},
    {queen: "Nina West", reads: ["Nina West. Miami Dolphin called! They wanted their shoulders back."]},
    {queen: "Shuga Cain", reads: ["Ah Shuga Cain, Shuga Cain. More like novocaine, coz' that mug ain't for sippin, sweetie.", "Shuga, Shuga, Shuga, what can I say? Fossilized, pre-historic drag, I'mma send to see you to retirement home, grandma.", "Shuga Cain. I'm redoing my fireplace and I'm short of brick. Can I borrow your face?"]},
    {queen: "Plastique Tiara", reads: ["Plastique Tiara. That's exactly what you're gonna need when they send you home.", "Plastique Tiara. Thank God you named yourself for your beauty and not for your personality, cause Plastique Bag just doesn't have the same ring to it!", "Plastique Tiara. I'm looking for a new apartment, how much are you charging for the vacant space between your ears?", "Plastique Tiara. Girl, your drag is beautiful, I must admit, but what is it worth when it's all rented?", "Miss Plastiiique Tiara! I'm truly surprised that you're still here booboo, but I think for us all your elimination need to come."]},
    {queen: "Ra'Jah O'Hara", reads: ["Ra'Jah, I think I can speak for everybody when I say, what the hell are you doing here? M'kay."]},
    {queen: "Scarlet Envy", reads: ["Scarlet Envy, is that you? I almost didn't recognize you without the beard."]},
    {queen: "Ariel Versace", reads: ["You should read up on my new article 'How to not fall in front of RuPaul', bitch."]},
    {queen: "Crystal Methyd", reads: ["Crystal. Now, I know the judges are always saying that your make up is just, um... terrible. So I got you the season one filter, okay? It's just a towel that you put over the lens of the camera.", "Crystal Methyd, you're the prettiest girl on the planet... of the apes."]},
    {queen: "Jaida Essence Hall", reads: ["Jaida Essence Hall, the only queen to win Drag Race on a fucking Zoom call.", "Jaida Essence Hall. Look over there! It's the exit.", ]},
    {queen: "Dahlia Sin", reads: ["Dahlia. You sure do talk a big game for someone who came in 13th place on a 12-person season."]},
    {queen: "Brita", reads: ["Brita, you really do need the filter with all that spit coming out of your mouth. But, you know, if being a drag queen doesn't work out, you can always find a career as a sprinkler system."]},
    {queen: "Jackie Cox", reads: ["Miss Jackie Cox. You are so supportive, I can always count on you for a shoulder to cry on and a face to file my nails on."]},
    {queen: "Jan", reads: ["Jan, do you have a condom I can borrow? I know you're always safe.", "Jan Backpack, Jan is so uptight she doesn't need tape to tuck.", "Jan, in the middle of a global pandemic, we should stay safe every week. Do you have any advice?"]},
    {queen: "Heidi N Closet", reads: ["Heidi, you have got to be loving this social distancing, because you look best from at least six feet away."]},
    {queen: "Symone", reads: ["Symone, you're so oily I could definitely see you in a dawn commercial."]},
    {queen: "Kandy Muse", reads: ["Kandy, you have eaten tons of it.", "Kandy Muse, it is so amazing how we represent such different communities here, gay, trans, pug.", "Kandy Ho, I meant Kandy Muse is a hoe. The only time you're not talking is when you're getting plowed, Joey told me that.",  "Miss Kandy Muse, you're one of those girls that loves to be mad sis. Well I actually have something for, here's a cape now you can be super mad and fly the hell outta here girl."]},
    {queen: "Gottmik", reads: ["Gottmik, so you are so LA, even your farts have a vocal fry", "Gottmik, you are so known for your mug sis but I really think you mean mugshot because- your having a face like that is criminal."]},
    {queen: "Rosé", reads: ["Scottish Rosé, you are like a wine, you're everything a basic white girl would want, every time I'm around you I get a headache, and every time I look at your face I just see sour grapes.", "Rosé, when I think of Rosé, I think of expensive beautiful champagne but when I look at you I think of, tap water.", "Miss Rosé, your personality reminds me of a piece of Purdue chicken, white, bland, and unseasoned."]},
    {queen: "Utica Queen", reads: ["Utica, bitch you're fucking weird, RuPaul could walk up in here in cargo shorts and I would still vote you most confusing thing in the room.", "Miss Utica, you are weird, you are creepy, and for those reasons my dear, I want you to suffocate me with your big dick.", "Utica, the new Dorian Corey of drag race, I mean where are those bodies hidden you fricking freak."]},
    {queen: "Tina Burner", reads: ["Tina, if this whole drag thing doesn't work out for you, you and those shoulders have a gorgeous career in the NFL.", "TINTA BURNTER, How much Tina have you actually burned bitch? WE ALL WANNA KNOW!"]},
    {queen: "Denali", reads: ["Denali, meh forgettable.", "Denali! You do got a fat ass, bitch. And that's great cause you're going to need something to land on when she sends you home.", "Dahlia, uh uh, Dina, uh ah bitch I can never remember your name."]},
    {queen: "LaLa Ri", reads: ["LaLa Ri, bitch this look is sickening girl, is something nobody said to you in the ball challenge."]},
    {queen: "Willow Pill", reads: ["Miss Willow Pill. I'm a lady, but you, you are a dame. A little dame, a little Hunchback of Notre Dame."]},
    {queen: "Lady Camden", reads: ["Lady Cameltoe. Next time you wanna be masculine on the runway, leave the mustache at home. Your jawline is enough.", "Lady Camden. I've learned so much from Lady Camden. Did you know in British, 'f**' means cigarette? So could somebody send this cigarette home?", "Miss Lady Camden. I'm really happy for you. I'm glad you made the till this week, and I am so impressed that you managed to do it without wearing a lip for half the season."]},
    {queen: "Angeria Paris VanMicheals", reads: ["What shape is that, Wendy Williams gotta pee?", "Miss Angeria VanWinkle Bower-Chapman III. Bitch, your name is longer than a CVS receipt, ho."]},
    {queen: "Bosco", reads: ["Miss Bosco, in drag, you're really this gorgeous, beautiful burlesque woman. Outside of drag, you give me greaseball."]},
    {queen: "Daya Betty", reads: ["Daya Betty, condragulations, my dear. You are American's next... Crystal Methyd.", "Daya Betty. I'm surprised you're not a Gemini, 'cause the whole two face act you got going on could have fooled me."]},
    {queen: "DeJa Skye", reads: ["DeJa Skye, we know you're always telling bad dad jokes in the werkroom. Though you may not be a comedy queen, you certainly have the face for it.", "DeJa Skye. You're like a really good pair of socks. Soft, supportive, full of cum.", "DeJa Skye. Everyone in the season said you're helpful. You do everything for them. You remind them of Jesus. You and Jesus have something in common. You both have 12 followers."]},
    {queen: "Jorgeous", reads: ["Little Miss Jorgeous. The tiniest little waist... of time.", "Serena ChaCha.."]},
    {queen: "Jasmine Kennedie", reads: ["Miss Jasmine Mouth Almighty. You know, I am so glad that on this whole journey, you have found... your silence.", "Jasmine Kennedie, why do you look so old, but you are so young? You are the definition of white do crack.", "Jasmine. Was your inspiration behind your outfit COVID-19? Because it was tired and had a lack of taste.", "Jasmine. You are one brain dead slut. You put the bottom in lobotomy.", "Jasmine Kennedie. My lip sync assassin. More like assassinated by three non-dancers at once."]},
    {queen: "Kerri Colby", reads: ["Miss Kerri Colby, the face of a superstar... for podcasting.", "Kerri Colby. You are beautiful, just like your mother. Too bad she didn't pass down those dancing skills. It must have skipped a generation.", "Kerri Colby. Your face is so frozen hat it just asked me, do you wanna build a snowman?"]},
    {queen: "June Jambalaya", reads: ["Miss June Jambalaya. As short as your time was, maybe you should change your name to February", "June Jambalaya, you know, I know you said that you were top, but you're really good at being in the bottom."]},
    {queen: "Maddy Morphosis", reads: ["Maddy Morphosis, when I look at you, I just think, oh, man."]},
    {queen: "Orion Story", reads: ["Orion Story. You clearly are a story, a bedtime story.", "Orion, how's your last name gonna be Story? You can't even read."]},
    {queen: "Kornbread Jeté", reads: ["And my good sis Kornbread. I know you love the Mayflower because you always wear them Pilgrim pumps.", "Kornbread, the snack that smiles back. You know, a little known fact about-- an unknown fact about Kornbread actually is that she's the only person in history to ever out-pizza the Hut."]},
    {queen: "Dearis Doll", reads: ["Dearis Doll. I don't think you would create a fanpage for Dearis Doll. You should start the Shrimp Farmers Association page instead.", "Dearis Doll... You're talented... But I think you're better off raising shrimp because it fits your country image."]},
    {queen: "Amadiva", reads: ["I love the way you do all your characters because you're an actor, but putting up an act all the time must be tiring.", "Well, from listening to you all speak, I really do agree with the hashtag. Amadiva, you really are the lowest of the low. Simply speaking, a single cell organism."]},
    {queen: "Natalia Pliacam", reads: ["Natalia, I'm so happy that you're still here with me, because if you leave, I'd be the only asshole left on this show.", "Someone left a column here!", "Uncle Natalia. You're not fat, you just haven't taken a shit yet."]},
    {queen: "Année Maywong", reads: ["Année Maywong! Your makeup is beautiful, but you have a twink body, you know.", "Année Maywong... I'll come back later, this bitch is too pretty."]},
    {queen: "Petchra", reads: ["Petchra, I thought an Uber Man came to visit us. If I wanted something I'll start a chat with you.", "Petchra. Do tou wanna know why she's always wearing a cap? Because if you lift that up, we'd be witnessing a second sun."]},
    {queen: "JAJA", reads: ["Pit Crew! You know, JAJA is really happy that you're here. You're like, tall, smart, handsome, clever and it seems like you're really funny. Something she'll never be.", "Hi, JAJA. You look great today. You'll look even better when you're selling water filters."]},
    {queen: "B Ella", reads: ["Oh! This is a big studio, who left a gas tank here?! What if it explodes?!"]},
    {queen: "Tormai", reads: ["Tormai! Your face changes every week. Your chin is serving us stalactite realness. It's growing everyday", "Tormai. Now I know why you don't talk much when you're here. Because when you speak, you'd lie. And when you lie, your nose would grow. That's why you don't talk."]},
    {queen: "Vanda Miss Joaquim", reads: ["VANDA! You have a gorgeous face. But you really need to wash your hair. That chicken hairstyle can't help control all those oils", "Vanda Miss Joaquim. You are a natural born actress. The expressions on both your faces are beautiful.", "Vanda. Everybody was like... 'Oh, you look gorgeous. Your outfit is stunning. When are you going to show your skin?' But actually I'm wondering, when are you going to show your true colors?"]},
    {queen: "Angele Anang", reads: ["Angele, Thailand's very own Beyonce. I don't think she should keep being Beyonce. She should keep looking like that crazy homeless runway she did. Because she is actually filthy as she looked that day, thank you.", "Angele Anang. Beyoncé? You think? You're beyond hope.", "Angele, you're a pretty woman. You never forget to dress up. You never forget to put on makeup. But you always forget to shave your face."]},
    {queen: "Bandit", reads: ["Bandit. If gluing things to fabric was a talent, you'll have ONE talent.", "Bandit. Since you have health issues because of your age, I think you should go get some rest.", "Bandit. It's unfortunate that you're a designer. Because with that cloth around your waist, you'd look like another Chinese grocery store owner."]},
    {queen: "Pangina Heals", reads: ["Pangina. Couture and homemade aren't the same thing, bitch.", "Pangina, I would love to read you but, like most international pop stars, you didn't make it big in the States.", "Pangina, okay, so RuPaul was looking for the most beautiful, talented drag queen from Thailand. Was she busy?"]},
    {queen: "Miss Gimhuay", reads: ["Oh, hello, Uncle Natalia Pliacam! Never mind, you're not her, I thought you were her.", "Miss Gimhuay, darling. Exactly, you look like Natalia Pliacam. It's just the difference is that, she won. You're not going to win, darling.", "Miss Gimhuay, I may have gotten filler injections, but you're the one who needs insulin injections."]},
    {queen: "Genie", reads: ["Genie. You know? You might want to start polishing your lamp. It's starting to lose its shine. Just like your challenges.", "Genie, Genie, Genie. You got the most fabulous outfit. The only thing that's bigger than your costume is your ego."]},
    {queen: "Mocha Diva", reads: ["Mocha Diva, I got something to tell you again. Sashay away.", "Mocha Diva, I have a gift for you, it's a Thai book named Sombat Phudi.", "Mocha Diva. Some say 'You're not wearing nails, you're not doing drag'. Even if you're wearing nails, you're also not doing drag also. I see nothing but hell."]},
    {queen: "Srimala", reads: ["Srimala? I don't know if you've run out of jokes this week. But after we're done filming, Mic Mod Nee can help you."]},
    {queen: "The Vivienne", reads: ["The Vivienne! Queen of the Mersey. It's time you got on that ferry and fucked off!", "The Vivienne... proof you can polish a turd!", "The Vivienne, those lips are so big, when you floss your teeth it looks like my ass wearing a thong."]},
    {queen: "Divina De Campo", reads: ["Divina de Campo. Now, I love your work on the telly, but my favourite show you've done already is... The Grand National! NEIGHS"]},
    {queen: "Baga Chipz", reads: ["Baga Chipz... More like Baga Shite! She's like class in a glass... without the glass or the class!", "Baga Shitz... How many times are we gonna have to flush to get rid of you?", "Baga Chipz, I think you took the wrong stage door. They're filming Botched next door.", "Baga Chipz, more like Jabba the Hut! We can tell you are the filler queen.", "And of course, the people's love, Baga Chipz. You walked into the room as Princess Di, but I just saw Princess Di-arrhea."]},
    {queen: "Cheryl Hole", reads: ["Oh, Cheryl, you dumb, raggety-ass bitch! 'I'm in the bottom! I'm in the bottom! I'm in the bottom!' We know you're a bottom! You could use the Eiffel Tower as a marital aid, you slack bitch!", "Cheryl Hole... Or as you're more affectionately known, Cheryl Baggy, Battered, Thirsty Hole!", "Cheryl Hole, we know your biggest drag inspiration is Alyssa Edwards. You've got the dancing, the outrageous personality, the overbite and the back rolls!"]},
    {queen: "Blu Hydrangea", reads: ["And Blu... If the Milky Bar Kid and Casper The Friendly Ghost had a rent boy baby. Awww!", "Blu Hydrangea! My babe. Now, you're known as the make-up girl, but your best make-up job you've done is painting on that innocent look every single week.", "And Blu, in the immortal words of Madonna, I loathe hydrangeas.", "Blu Hydrangea, feels like we've got to keep the reading safe, cause that's very on-brand for you.", "Blu Hydrangea, you are such a horny little devil. When you took the A-Levels, you got an STD.", "Blu Hydrangea, more like a dead funeral wreath"]},
    {queen: "Crystal", reads: ["Crystal, my darling. How aptly named. Just like crystals, you are lifeless, stiff, and I can see you right through you!"]},
    {queen: "Lawrence Chaney", reads: ["Lawrence Chaney, I go to bed at night and I just lay there and wonder how you're getting on... getting on the bed without breaking it, you big bitch!", "Lawrence Chaney, the Lady Bunny of Glasgow. Much like Lady Bunny, you're known for your big wigs, those terrible white go-go boots, and maybe one day you'll find a personality.", "Lawrence Chaney, look at you, a well-rounded queen, and I do mean well-rounded, and the number one reason to stay away from Glasgow."]},
    {queen: "Bimini", reads: ["Bimini is so stupid, when she heard the government were putting chips in people, she asked for a side of vegan mayo.", "Bimini, you know, you're known for your iconic tricks on the chair. But the next time, how about you do us all a favor and make sure it's an electric one."]},
    {queen: "Tayce", reads: ["Tayce! Queen, look at you. Your runways are unsurpassed, baby girl, I must say. But I would love to see you slip into something long and flowy... like the Thames.", "Tayce, the queen of face. But the last time I remember you served me face, you was laid on your back with your tongue out, and I was sat on it."]},
    {queen: "Ellie Diamond", reads: ["Ellie Diamond, you are so stupid, you studied for your COVID test.", "Ellie Diamond, oh my God, look at you. But you're kind of lackluster. You should change that last name to Ellie Zirconia."]},
    {queen: "A'Whora", reads: ["A'Whora, I heard you've been doing some soul-searching recently. I hope you find one.", "A'Whora. I wanna give you a big squeeze, but I'm worried you'll pop and there'll be filler everywhere."]},
    {queen: "Sister Sister", reads: ["Sister Sister, I like how you do a double word play, the same way you like to double-up on people's runways when you hit the stage.", "Sister Sister, you know, you've got such a kind face... the kind you throw bricks at!"]},
    {queen: "Ella Vaday.", reads: ["Uncle Nick-- I mean, Ella Vaday. You look like such a beautiful man when you're in drag.", "Veronica Green-- Sorry, I meant Ella Vaday. Do you know what you remind me of? Unseasoned chicken.", "Ella Vaday, you are the trade of the season, but it's just a shame you can't trade that for a personality."]},
    {queen: "Kitty Scott-Claus", reads: ["Kitty Scott-Claus, more like Kitty's Scott no wins.", "Kitty-Scott Pores.", "Kitty Scott-Claus. She's described herself as having the body of a Greek goddess, but am I the one who has to tell you the Buddha is not Greek."]},
    {queen: "Scarlett Harlett", reads: ["Scarlett Harlett. How many, like, times, like, do you need, like, to say 'like' before, like, you get, like, the sentence out, like?", "Scarlett Harlett... ... Sorry. I don't want say anything, in case you interrupt me.", "Scarlett Harlett. I wanna say Starlet Harlett, but she's nothing of the sort."]},
    {queen: "Choriza May", reads: ["Choriza May, you're the horniest bitch I've ever met. Sometimes when I hug you, I can feel your chorizo.", "Chorrriza May. Proof that in every good gene pool there is a shallow end.", "Choriza May. I know we're in a pandemic, but, girl, do you and your fashion sense have to be two meters apart every fucking week?"]},
    {queen: "River Medway.", reads: ["River Meh-way.", "Jeez, River, I didn't see you there. You make absolutely no impression at all.", "River Medway. I would make a joke about the fact your name's a river and you are coasting, but there's no more time left."]},
    {queen: "Vanity Milan", reads: ["Vanity Milan. It's ironic that you call yourself Vanity, because someone who's vain might know how to do their makeup.", "Vanity Milan, the judges say you're coming to the competition slowly but surely. Now I just can't wait for your wardrobe arrive."]},
    {queen: "Priyanka", reads: ["Priyanka, it's so crazy how you can paint so fast. We paint on face, and you paint two faces.", "Priyanka, you talk about having sex a lot, but the only thing you're 'fucking' is stupid.", "Priyanka, so, apparently, you are a DTF, but to me, you're more QTL: questionable taste level."]},
    {queen: "Rita Baga", reads: ["Rita Baga, you're only in your 30's, but you paint like you're trying to get the seniors' discount at the supermarket.", "Rita Baga, the only thing worse than your drag closet is your piss-poor attitude!", "Rita Baga, last week, I saw you playing with the plastics, and I saw that there was a slinky there, and you really remind me of a slinky 'cause I don't know what you're good at, but I'd love to push you down the stairs.", "Rita Baga, you think you're all that and a bag of chips, but I'm getting more 'bag of garbage...'"]},
    {queen: "Scarlett BoBo", reads: ["Scarlett BoBo, your face is like your spot in this competition: filler.", "BoBo, you should really change your last name 'HoBo', 'cause your drag is more than pedestrian."]},
    {queen: "Jimbo", reads: ["Jimbo, I was so excited to finally see you out of drag first time, but really it's all the same: mediocre.", "Ms Jimbo, Canadian, just like Celine Dion. That explains when you do the lip-sync, you go down like the Titanic.", "Jimbo, Jimbo, Jimbo, do you know why you haven't won a lip-sync? Because there isn't a ring to, 'You're a Winner, Grandad'"]},
    {queen: "Lemon", reads: ["Lemon, can you hold my drink? I always love putting it on a 'coaster.'", "Lemon, you're so full of yourself, you could be a lemon meringue pie: light and fluffy on top with a crusty little bottom."]},
    {queen: "Ilona Verley", reads: ["Ilona Verley, in drag, you give us Morticia Addams. Out of drag, Uncle Fester.", "Okay, can we just embrace the fact that Ilona wasn't complaining for five seconds? Thanks!"]},
    {queen: "BOA", reads: ["BOA, 'Bitch On Arrival.' When are you gonna show up girl?", "BOA, I'd love do take you to the gym, not to work out with you, but to use you as my exercise ball."]},
    {queen: "Kiara", reads: ["Kiara, you just finally understanding how to speak English. But now, when will you finally understand how to do drag!?", "Kiara, I never understood the term 'loose lips' until I met you. You get moved more than a revolving door during rush hour!", "Kiara, are you a bird? 'Cause all your runways are 'cheep-cheep-cheep-cheep-cheap'", "Kiara, was your mom a bird? 'Cause you pigeon-toed, bitch!"]},
    {queen: "Adriana", reads: ["Don't say anything, because the guy who does your subtitles, honey, he's off today."]},
    {queen: "Eve 6000", reads: ["Eve 6000.  The only thing more wrecked than your emotional state is your hole. #hemorrhoids.", "Eve, getting to know you is like going to the movie theater. I'll sit back, relax, and watch as you project all of your scripted emotion over the entire room.", "Eve 6000. Sister to sister, let me give you some advice. Don't ever be ashamed of who you are. That's your parents' job."]},
    {queen: "Pythia", reads: ["Pythia, girl, with a nose like that, you remind me of Pinocchio. I'm just shocked it didn't grow nine inches when you said you had fashion taste."]},
    {queen: "Kimora Amour", reads: ["Kimora, we can tell that you're from the ball scene. I mean, your lashes love voguing.", "Kimora, I almost sat on you last time. I thought you were the toilet seat. You got so much shit coming out of that mouth."]},
    {queen: "Gia Metric", reads: ["And Gia. Or should I say Gigi not as good?", "Gia Metric, I see where you got your name. Your head is a square, your silhouette is a straight line, and your track record is a circle.", "Gia Metric, you're definitely one of the most talented queens here. That talent will take you so far, and I hope you stay there."]},
    {queen: "Suki Doll", reads: ["Suki Doll, oh, my God. The spirit is giving me a message. It says... you're a little bitch.", "Suki Doll, your name is very fitting. 'Doll' because you're the Asian version of Annabelle."]},
    {queen: "Icesis Couture", reads: ["Icesis Couture. Or as I like to say, Icesis H&M."]},
    {queen: "Kendall Gender", reads: ["Kendall, you have the greatest-- sorry, grayest breasts I've ever seen.", "Kendall Gender, in drag, Beyoncé, sure, out of drag, Jay-Z."]},
    {queen: "Vivian Vanderpuss", reads: ["Vivian Vanderpuss. My parents always taught me that two wrongs never make a right. For example, your parents.", "Miss Vivian Vanderpuss, darling. Listen, when I told you that you were filler queen, darling, it wasn't an insult; it was a recommendation.", "Vivian Vanderpuss, when they were casting for the season your name was on the top of the list. That list was, 'worst-case scenario.'"]},
    {queen: "Jada Shada Hudson.", reads: ["Jada Shayda Hudson. Jada is always saying, what's goodie? What's goodie? And after seeing her drag, I think she's actually asking what good is?", "And, Jada, I can't say nothing bad about you, I mean, that's the judges' job."]},
    {queen: "Miss Fiercalicious", reads: ["Miss Fiercalicious, if complaining was a talent, you'd finally be talented.", "Fierce. You're like a beautiful cupcake made of shit, you're really pretty, but you're still made of shit."]},
    {queen: "Irma Gerd", reads: ["Irma Gerd. Last week you dressed up as a clown, but you doing drag will always be the biggest joke for me."]},
    {queen: "Gisèle Lullaby", reads: ["Gisèle Lullaby, I love that your face is just like the city of Montreal; I can always see Mount Royal right in the center of town.", "Miss Gisele Lullaby, body shape Coca-Cola... in can."]},
    {queen: "Lady Boom Boom", reads: ["Lady Boom Boom… Like the Great North American squirrel, you're graceful, petite, and you're able to fit an alarming amount of nuts in your mouth.", "Miss Lady Boom Boom, I know what you've got in your bags. Cucumber."]},
    {queen: "Kita Mean", reads: ["It is ssssso good to have you here in the competition. Now, ♪ dun-dun da-dun-dun ♪... fuck off.", "Kita Mean. I never knew why they filmed The Hobbit in New Zealand, and now I know.", "Kita Mean! No, you know, Kita's gone through a fantastic weight-loss journey. You've got enough leftover skin to make a family resemblance costume."]},
    {queen: "Art Simone", reads: ["Art Simone, you're a brilliant drag queen and an amazing makeup artist. You can paint pretty much anything, except a win."]},
    {queen: "Karen From Finance", reads: ["You look like the kind of person who enjoys hemorrhoids.", "Karen From Finance, if I threw a stick, would you leave?", "Karen From Finance, you're in for a very big payday soon, yeah, when I hire you to do the tax on my prize money."]},
    {queen: "Elektra Shock", reads: ["I finally understand your name, 'cause it's a shock to me that you're still in the competition.", "Elektra Shock, man...", "Elektra Shock, hello. I was so excited when I found out we were coming to the COVID-free haven that is New Zealand, but if I was you, I would get a COVID test 'cause you've clearly lost your sense of taste."]},
    {queen: "Maxi Shield", reads: ["Now, I don't want to call Maxi old, but uh, the calculator on her first phone was an abacus."]},
    {queen: "Etcetera Etcetera", reads: ["You know, this competition is full of fierce talent, hilarious people, Etcetera Etcetera... It's kind of interesting, for someone that is so woke, I'm wondering when you're gonna wake the fuck up.", "Etcetera Etcetera. Now, just a recap on pronouns for the room here, now, out of drag, Etcetera uses they/them pronouns, so for example: 'They' haven't been in the top, so we won't be seeing 'them' in the final."]},
    {queen: "Carmen Farala", reads: ["Miss Carmen Farala... or Carmen de Mairena?", "I love it. You are an eternal artist. When you'll die... your remains will stay floating in the Pacific."]},
    {queen: "Sagittaria", reads: ["Aquaria. I mean, Sagittaria. How does the blood get to your brain after you take off that belt? Because I don't notice a difference.", "Sagittaria... your body says woman... but your face, Man Project."]},
    {queen: "Pupi Poisson", reads: ["Uhhhmm... Pupi Poisson. You're so, so, so, so, so old... period.", "This, the girl is ... Pupi Poisson, this is your show. This will finally lead you to stardom. Let's hope you don't do any more, and that this one catapults you, but far away.", "From here you can be seen... it happens.", "I would talk about Pupi Poisson, but my mother taught me not to disrespect the elders, so..."]},
    {queen: "Dovima Nurmi", reads: ["Dovima. I have to work a little to get something good out of you, but with how slow you walk the runway, when you walk out the door, two episodes will have passed.", "Uhhhmm... Dovima... Normi? She, for those who don't know her, has a problem for every solution.", "Dovima Nurmi. No, no, don't move, the filter will go away."]},
    {queen: "Hugáceo Crujiente", reads: ["Hugáceo Crujiente. The curtain opens, you appear, with a look that can be understood. The curtain closes. What's the movie called? The Impossible."]},
    {queen: "Arantxa Castilla La Mancha", reads: ["Your power to imitate Hannah Montana should change to Hannah Slut. Please take off your hat now and brush that hair."]},
    {queen: "Sharonne", reads: ["Sharonne, you're like Sharon Stone: a star, a legend. And old, like Sharon Stone", "Let's see, Sharonne. We've found a performance of yours when you started, the beginning. I'd like to see it, it's a pity that VHS Players got discontinued", "Sharonne Shimai, the other day I entered dressed like a Flinstone, I was coming back from watching your first performances in Cave of Altamira"]},
    {queen: "Estrella Xtravaganza", reads: ["Estrella, darling, I'm really sorry you had COVID, because you still haven't recovered your taste", "Ok, Estrella, let's come for you. Do you know Showgirls's quote that says 'There's always someone younger and hungrier coming down the stairs after you'? That's what I feel every day we go breakfast, bitch!", "Estrella, my dear, I love you. I just can say that watching you perform and model is like watching kebab's meat spinning"]},
    {queen: "Venedita Von Däsh", reads: ["Vene, darling, you're divine, girl, divine, divine, to decor my living room"]},
    {queen: "Marina", reads: ["Marina. You are so happy about being negative on your COVID test, we didn't dare to tell you it was about your personality test"]},
    {queen: "Drag Sethlas", reads: ["Sethlas, my dear, I just want to tell you one thing: Get up"]},
    {queen: "Diamante Merybrown", reads: ["Let's see, Diamante, darling, I wanted to tell you something but... you don't inspire myself at all", "Diamante Merybrown, you have a name like an expensive 5th Avenue brownie, but in reality, dear, reality is that you're a cheap brownie of a generic brand in any neighborhood of Carabanchel"]},
    {queen: "Jota Carajota", reads: ["Jota Carajota. I love your fashion sense, it's a mix between pretty and unnecesary"]},
    {queen: "Samantha Ballentines", reads: ["Samantha, dear, when we go out of here we have to do a show together. I can be Hagrid and you Voldemort!", "Samantha Ballentines. I love to go out with you, because you're a painting. Velázquez's. Oh, no, from Picasso's"]},
    {queen: "Ariel Rec", reads: ["Ariel ShReck. Oop! sorry."]},
    {queen: "Elecktra Bionic", reads: ["Elecktra. Well, you're known as the pretty queen, beauty, in fact when you won all those beauty pagean-... Oh, it wasn't you? Dirtbag.", "Elecktra, your looks on the runway and your creativity can be summed up in one word: thong.", "Elecktra, you are known for being beautiful, you have an amazing body, you are very tall. They say 'height is half the beauty', but where's the other half?"]},
    {queen: "Farida Kant", reads: ["Farida Kant! You're beautiful, great, you strut like a diva, you can sew. Honey, you'd be perfect, too bad this show is not Project Runway.", " Well, Farida, I always see you in the dressing room with your little case, you pull out needles, threads, fabrics... but when are you gonna pull out some personality?", "Farida Kant. She, on the runway, is always the most beautiful and always the best. Too bad that in the challenges, singing, dance and impersonator, sweetie, in my opinion, come make me a hem and take me away."]},
    {queen: "Le Riche", reads: ["Le Riche, when are you starting to work in the disco as a teleprompter? 'Cause as a drag queen you're not great."]},
    {queen: "Luquisha Lubamba", reads: ["Luquisha Lubamba! Like Samuele Bersani would say, you're just the copy of a thousand summaries.", "Luquisha Lubamba. Having you here makes me understand that sometimes, in life, making people pity you can save your ass."]},
    {queen: "Paloma", reads: ["Paloma! We call her Palo, we call her Papita... She's a great director, really. But fortunately there is drag otherwise you would spend your life as an extra", "You look tired right now. You really have an ass head that the last time they did you a PCR test, they diagnosed you with colorectal cancer"]},
    {queen: "La Grande Dame", reads: ["La Grande Dame, she's tall, she's slender, she's beautiful and she parades. How beautiful it is to be a coat hanger", "Dame. 1m10 of legs. After the Eiffel Tower, the most visited monument in Ile-De-France"]},
    {queen: "Lolita Banana", reads: ["It was daring, to take a retired Lady Gaga transformist into the program"]},
    {queen: "La Big Bertha", reads: ["Lova Ladiva... Euh... La Big Bertha... Sorry. Drag is in your blood! It's a pity that there is bad circulation", "Bertha, I'm not going to tease at you, I'm not going to do some weird fatphobia thing and all that... Just, please, can you pay back the sofa you broke me while sitting down on?"]},
    {queen: "Elips", reads: ["Elips, it's like a furtive little fart, it's silent, but it's violent"]},
    {queen: "Kam Hugh", reads: ["Kam. You are so cute, darling! I really want to prick her, but her surgeon has already taken so much care..."]},
    {queen: "Envy Peru", reads: ["Miss Envy Peru, the jury would like more surprises from you. I disagree. I was surprised that you made it through."]},
    {queen: "Janey Jacké", reads: ["Miss JJ, we all know you from 'All Together Now,' and I don't mean the show, but last month's bukkake.", "Miss Janey Jacké, the proud OG Miss Fish. Sadly, this will be your only title.", "JJ, I would love to read you but, like most international pop stars, you didn't make it big in the States.", "You put the ho in holland. Now, I hear that tulips are the biggest export. Is that what happened to yours."]},
    {queen: "Ma'Ma Queen", reads: ["Ma'Ma Queen. If you ever wondered what happened to Lurch from the Addams Family, here he is.", "Ma'Ma Queen reminds me of my very first pet: a stick insect. But I never saw a stick insect with roots so dark even pigeon's won't shit on them."]},
    {queen: "Miss Abby OMG", reads: ["Even though a drag wears a gold ring, it's still a trav from AliExpress.", "Abby OMG, she speaks five languages and still doesn't make sense.", "Dear Abby OMG, you look like a little bird: cheap, cheap, cheap."]},
    {queen: "ChelseaBoy", reads: ["ChelseaBoy. There's only one thing safer than PrEP. Chelsea's look."]},
    {queen: "Sederginne", reads: ["Miss Aubergine- Uh, Sederginne. Uhm, I think you're a great-looking man. That's all.", "Sederginne steam machine, it still breaks my heart they're testing make-up on animals."]},
    {queen: "Madame Madness", reads: ["Madame Madness, you're not only a queen with a beard, you're also one without a personality", "Madame Madness, I don't have a roast for you. I didn't expect you in this episode."]},
    {queen: "Ivy-Elyse Monroe", reads: ["Ivy-Elyse Monroe. Corona hit you hard, darling.", "Ivy-Elyse Monroe. "]},
    {queen: "Vivaldi", reads: ["Vivaldi. You look like one a Picasso. Nice from far, but far from nice.", "Vivaldi. It's so good that the 'Make A Wish' foundation has given you the opportunity to be here today.", "valdi. Your name sounds like music, but you look like an unfinished symphony."]},
    {queen: "The Countess", reads: ["Countess. You're beautiful, young, chic. A pity your sugar daddies couldn't buy you any talent.", "Your name's the Countess, but you can't count."]},
    {queen: "Tabitha", reads: ["Mister Potato Head. You're like an Egyptian goddess. But you've got a face like a bloodhound. And your body looks like it's been decomposing for decades.", "Tabitha, we know you look like a mocro boy but they don't eat pork, do they?", "Tabitha. You're always talking tight, but all I see is a wide neck."]},
    {queen: "My Little Puny", reads: ["My Little Puny. That Puny isn't that small girl, you're so wide I could taste your ulcer when I ate your ass."]},
    {queen: "Vanessa van Cartier", reads: ["Vanessa van Cartier.  Are you still under warranty?"]},
    {queen: "Keta Minaj", reads: ["Keta Minaj. You should've been in a gay circus, and it would be cheap of me to call you a clown, because circus dogs have feelings too.", "Keta Minaj. The only k-hole every gay wants to avoid."]},
    {queen: "General", reads: ["Smile for me. Don't smile.", 
    "You got a grill that could put Black & Decker out of business.", 
    "And the one on the end, oh just look at her, are you going swimming, or are you doing drag, mama, what is that?",
    "Honey, don't you know a thing about doing a manicure and a pedicure? Fix them hooves, honey.",
    "Everyone thinks you're pretty. I do think you're pretty. I think you have a beautiful face... for radio.",
    "Sweetie, I'm sorry! If you don't have a wrist band you can't be in here for the meet and greet!",
    "Oh, wow. Is that Dumbo Flying in?",
    "Oh, darling how old are you?",
    "Do you pick up satellite with those big ones?",
    "As Lady Gaga once said, there can be a hundred people in the room, and 99 have no idea who you are.",
    "WHO CARES?",
    "You know, looking at you, your teeth really represent the cast here. Some are big, some are small, two of them are white.",
    "Your idea of a wardrobe is a swimsuit in a different color.",
    "Rotted.",
    "Never mind.",
    "You're still here?",
    "At this point you really should just make like your hair line and recede.",
    "Haute couture? More like haute glue.",
    "I don't blame you for not being a great makeup artist. There's not many things you can do with coffee grounds and gasoline.",
    "Have you ever tried eating your makeup? So you'll be pretty on the inside, too?",
    "People don't appreciate how much money you have to spend on makeup when you covering two faces.",
    "I don't read somebody unless I have a genuine respect for them... so I think we're done here.",
    "Girl, you're so skinny, you got people in Somalia sending you food.",
    "I remember when you were dressed up as a cockroach on the runway. That's the closest you can get to cock.",
    "I'm looking for a new apartment, how much are you charging for the vacant space between your ears?",
    "I bet R. Kelly wouldn't even piss on you.",
    "Meh forgettable.",
    "You're like a really good pair of socks. Soft, supportive, full of cum.",
    "You are so stupid, you studied for your COVID test.", 
    "It's so crazy how you can paint so fast. We paint on face, and you paint two faces.",
    "The face of a superstar... for podcasting.",
    "You talk about having sex a lot, but the only thing you're 'fucking' is stupid.",
    "We can tell that you're from the ball scene. I mean, your lashes love voguing.",
    "Sister to sister, let me give you some advice. Don't ever be ashamed of who you are. That's your parents' job.",
    "You look like the kind of person who enjoys hemorrhoids.",
    "If I threw a stick, would you leave?",
    "Man...",
    "I don't have a roast for you. I didn't expect you in this episode.",
    "ah yes... wait... who is that again?"
    ]}
];

let whoWhyCompetition = [
    "they are lacking experience to be the winner",
    "working with them was frustrating and they were not in the same level as the other contestants",
    "they were the weakest person in the group",
    "they are comfortable being a beautiful girl",
    "of their runway look",
    "of their runway looks throughout the season",
    "of their performance throughout the season",
    "they are resting on being pretty",
    "of their lack of improvement throughout the season",
    "they are not on the same level as the other contestants",
    "of their performance in the competition",
    "is not really a school for kids, its a competition for the best of the best.",
    "of their delusion about their performance throughout the season",
    "of their performance in the challenge",
    "the struggle was real",
    "they doesn't have anything else to offer",
    "of their performance in the challenge and their runway look",
    "of the critiques given by the judges",
    "of their performance in the challenge and overall competition",
    "they has done well so far, so bombing looked worse.",
    "of their runways not having variation",
    "they are not ready for the competition."
];

let whoWhyRelation = [
    "they are annoying",
    "their attitude doesn't represent the values of a winner",
    "they are lacking maturity",
    "of their delusion about their performance throughout the season",
    "they lacked maturity to be on the season",
    "of their lack of professionalism and immaturity",
    "of their lack of growth",
    "they doesn't think they are a star",
    "of their lack of growth, polish, and refusal to listen to the judges critiques throughout the competition",
    "their are lacking kindness to be a winner",
    "their drag is not in the same level as the other queens",
    "of their lack of versatility",
    "they can't understand their words as they speak Spanish",
    "of their attitude in the challenge",
    "of their excuses in the competition",
    "they doesn't deserve the crown",
    "of their lack of drag maturity",
    "their personality doesn't live up to the others"
];

function lipsyncDesc() {
    let screen = new Scene();
    screen.clean();
    for (let i = 0; i < bottomQueens.length; i++) {
        bottomQueens[i].getLipsync();
        bottomQueens[i].lipsyncScore = (bottomQueens[i].lipsyncScore - bottomQueens[i].favoritism) + bottomQueens[i].unfavoritism;
    }
    screen.createHeader("It's time...");
    screen.createBold("For you to lip-sync... for your lives! Good luck, and don't fuck it up.");
    lsSong();
    screen.createHorizontalLine();
    let slay = bottomQueens.filter(function (queen) { return queen.lipsyncScore > 11; });
    let great = bottomQueens.filter(function (queen) { return queen.lipsyncScore >= 8 && queen.lipsyncScore < 12; });
    let good = bottomQueens.filter(function (queen) { return queen.lipsyncScore >= 4 && queen.lipsyncScore < 8; });
    let bad = bottomQueens.filter(function (queen) { return queen.lipsyncScore >= 2 && queen.lipsyncScore < 4; });
    let flop = bottomQueens.filter(function (queen) { return queen.lipsyncScore >= 0 && queen.lipsyncScore < 2; });
    for (let i = 0; i < bottomQueens.length; i++) {
        bottomQueens[i].lipsyncScore = (bottomQueens[i].lipsyncScore + bottomQueens[i].favoritism) - bottomQueens[i].unfavoritism;
    }
    createLipsyncDesc(slay, great, good, bad, flop);
    screen.createButton("Show result", "lipSync()");
}

function asLipsyncDesc() {
    let screen = new Scene();
    screen.clean();
    for (let i = 0; i < top2.length; i++) {
        top2[i].getASLipsync();
    }
    screen.createHeader("It's time...");
    screen.createBold("For you to lip-sync... for your legacy! Good luck, and don't fuck it up.");
    lsSong();
    screen.createHorizontalLine();
    let slay = top2.filter(function (queen) { return queen.lipsyncScore > 11; });
    let great = top2.filter(function (queen) { return queen.lipsyncScore >= 8 && queen.lipsyncScore < 12; });
    let good = top2.filter(function (queen) { return queen.lipsyncScore >= 4 && queen.lipsyncScore < 8; });
    let bad = top2.filter(function (queen) { return queen.lipsyncScore >= 2 && queen.lipsyncScore < 4; });
    let flop = top2.filter(function (queen) { return queen.lipsyncScore >= 0 && queen.lipsyncScore < 2; });
    createLipsyncDesc(slay, great, good, bad, flop);
    screen.createButton("Show result", "asLipSync()");
}
let assassin;
function lsaLipsyncDesc() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("It's time to ruveal...");
    assassin = allQueens[randomNumber(0, allQueens.length - 1)];
    bottomQueens.sort((a, b) => b.votes - a.votes);
    top2.push(assassin);
    screen.createImage(assassin.image, "royalblue");
    screen.createBold("The lip-sync assassin is... " + assassin.getName() + "!");
    screen.createParagraph("Now, it's time for you to lip-sync... for your legacy!");
    lsSong();
    for (let i = 0; i < top2.length; i++) {
        top2[i].getASLipsync();
    }
    screen.createHorizontalLine();
    let slay = top2.filter(function (queen) { return queen.lipsyncScore > 11; });
    let great = top2.filter(function (queen) { return queen.lipsyncScore >= 8 && queen.lipsyncScore < 12; });
    let good = top2.filter(function (queen) { return queen.lipsyncScore >= 4 && queen.lipsyncScore < 8; });
    let bad = top2.filter(function (queen) { return queen.lipsyncScore >= 2 && queen.lipsyncScore < 4; });
    let flop = top2.filter(function (queen) { return queen.lipsyncScore >= 0 && queen.lipsyncScore < 2; });
    createLipsyncDesc(slay, great, good, bad, flop);
    screen.createButton("Show result", "lsaLipSync()");
}

function finaleLipSyncsDesc1() {
    let screen = new Scene();
    screen.clean();
    for (let i = 0; i < firstLS.length; i++) {
        firstLS[i].getLipsync();
    }
    screen.createHeader("The Lip-Syncs...");
    screen.createBold(firstLS[0].getName() + " and " + firstLS[1].getName() + " lip-sync...");
    lsSong();
    screen.createHorizontalLine();
    let slay = firstLS.filter(function (queen) { return queen.lipsyncScore > 11; });
    let great = firstLS.filter(function (queen) { return queen.lipsyncScore >= 8 && queen.lipsyncScore < 12; });
    let good = firstLS.filter(function (queen) { return queen.lipsyncScore >= 4 && queen.lipsyncScore < 8; });
    let bad = firstLS.filter(function (queen) { return queen.lipsyncScore >= 2 && queen.lipsyncScore < 4; });
    let flop = firstLS.filter(function (queen) { return queen.lipsyncScore >= 0 && queen.lipsyncScore < 2; });
    createLipsyncDesc(slay, great, good, bad, flop);
    screen.createButton("Show result", "finaleLipSyncs()");
}

function finaleLipSyncsDesc2() {
    let screen = new Scene();
    screen.clean();
    for (let i = 0; i < secondLS.length; i++) {
        secondLS[i].getLipsync();
    }
    screen.createHeader("The Lip-Syncs...");
    screen.createBold(secondLS[0].getName() + " and " + secondLS[1].getName() + " lip-sync...");
    lsSong();
    screen.createHorizontalLine();
    let slay = secondLS.filter(function (queen) { return queen.lipsyncScore > 11; });
    let great = secondLS.filter(function (queen) { return queen.lipsyncScore >= 8 && queen.lipsyncScore < 12; });
    let good = secondLS.filter(function (queen) { return queen.lipsyncScore >= 4 && queen.lipsyncScore < 8; });
    let bad = secondLS.filter(function (queen) { return queen.lipsyncScore >= 2 && queen.lipsyncScore < 4; });
    let flop = secondLS.filter(function (queen) { return queen.lipsyncScore >= 0 && queen.lipsyncScore < 2; });
    createLipsyncDesc(slay, great, good, bad, flop);
    screen.createButton("Show result", "finaleLipSyncs2()");
}

function finaleLipSyncsDesc3() {
    let screen = new Scene();
    screen.clean();
    onTop4Finale = true;
    onFinale = true;
    chocolateBarTwistCheck = true;
    screen.createHeader("The end...");
    for (let i = 0; i < finalLS.length; i++) {
        finalLS[i].getASLipsync();
    }
    if (finaleof4gurl) {
        screen.createBold(finalLS[0].getName() + ", " + finalLS[1].getName() + ", " + finalLS[2].getName() + " and " + finalLS[3].getName() + " will lip-sync for the crown...!");
        screen.createImage(finalLS[0].image);
        screen.createImage(finalLS[1].image);
        screen.createImage(finalLS[2].image);
        screen.createImage(finalLS[3].image);
    } else if (isThisA3Way) {
        screen.createBold(finalLS[0].getName() + ", " + finalLS[1].getName() + " and " + finalLS[2].getName() + " will lip-sync for the crown...!");
        screen.createImage(finalLS[0].image);
        screen.createImage(finalLS[1].image);
        screen.createImage(finalLS[2].image);
    } else {
        screen.createBold(finalLS[0].getName() + " and " + finalLS[1].getName() + " will lip-sync for the crown...!");
        screen.createImage(finalLS[0].image);
        screen.createImage(finalLS[1].image);
    }
    lsSong();
    screen.createHorizontalLine();
    let slay = finalLS.filter(function (queen) { return queen.lipsyncScore > 11; });
    let great = finalLS.filter(function (queen) { return queen.lipsyncScore >= 8 && queen.lipsyncScore < 12; });
    let good = finalLS.filter(function (queen) { return queen.lipsyncScore >= 4 && queen.lipsyncScore < 8; });
    let bad = finalLS.filter(function (queen) { return queen.lipsyncScore >= 2 && queen.lipsyncScore < 4; });
    let flop = finalLS.filter(function (queen) { return queen.lipsyncScore >= 0 && queen.lipsyncScore < 2; });
    createLipsyncDesc(slay, great, good, bad, flop);
    for (let i = 0; i < finalLS.length; i++) {
        finalLS[i].getFinale();
    }
    screen.createButton("Show result", "finalLipSync()");
}

function createLipsyncDesc(slay, great, good, bad, flop) {
    let screen = new Scene();
    if (slay.length !== 0) {
        for (let i = 0; i < slay.length; i++)
            screen.createImage(slay[i].image);
        screen.createBold("", "slay");
        let slayText = document.getElementById("slay");
        for (let i = 0; i < slay.length; i++)
            slayText.innerHTML += `${slay[i].getName()}, `;
        slayText.innerHTML += "slayed the lipsync!";
    }
    if (great.length !== 0) {
        for (let i = 0; i < great.length; i++)
            screen.createImage(great[i].image);
        screen.createBold("", "great");
        let greatText = document.getElementById("great");
        for (let i = 0; i < great.length; i++)
            greatText.innerHTML += `${great[i].getName()}, `;
        greatText.innerHTML += "had a great lipsync!";
    }
    if (good.length !== 0) {
        for (let i = 0; i < good.length; i++)
            screen.createImage(good[i].image);
        screen.createBold("", "good");
        let goodText = document.getElementById("good");
        for (let i = 0; i < good.length; i++)
            goodText.innerHTML += `${good[i].getName()}, `;
        goodText.innerHTML += "had a good lipsync.";
    }
    if (bad.length !== 0) {
        for (let i = 0; i < bad.length; i++)
            screen.createImage(bad[i].image);
        screen.createBold("", "bad");
        let badText = document.getElementById("bad");
        for (let i = 0; i < bad.length; i++)
            badText.innerHTML += `${bad[i].getName()}, `;
        badText.innerHTML += "had a bad lipsync...";
    }
    if (flop.length !== 0) {
        for (let i = 0; i < flop.length; i++)
            screen.createImage(flop[i].image);
        screen.createBold("", "flop");
        let flopText = document.getElementById("flop");
        for (let i = 0; i < flop.length; i++)
            flopText.innerHTML += `${flop[i].getName()}, `;
        flopText.innerHTML += "flopped the lipsync...";
    }
}

function reunion() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("The Reunion!");
    missCong();
    if (currentCast.length == 4 && canFinale)
        screen.createButton("Proceed", "canadaS2Finale()");
    else if (currentCast.length == 4 && top4 || ukvstwFinale)
        screen.createButton("Proceed", "finaleLS()");
    else if (currentCast.length == 4 && (all_stars || lipsync_assassin))
        screen.createButton("Proceed", "finaleAS()");
    else if (currentCast.length == 2 && team)
        screen.createButton("Proceed", "finaleTeam()");
    else
        screen.createButton("Proceed", "finale()");
}
///// AGREGAR INMUNIDAD. AGREGAR LA FINAL DE LA S14, DE LA S7 Y S8. SEPARAR FORMATO Y FINAL.
///// REUNION.
