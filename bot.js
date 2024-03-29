
const Discord = require('discord.js');
//var Discord = require('discord.io');
var HashMap = require('hashmap');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
    require("./index.js");
});

//this is the funcation for getting a random number up to the max
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// this is the list of key word respones (question / answers)
const hashMap = new HashMap();
hashMap.set('alfred', "Alfred is Gex's butler and acts as the information provider in Gex 3: Deep Cover Gecko. He is usually found standing around in the Gex Cave, but can also be found in various parts of levels as well. He was voiced by Marc Silk.");
hashMap.set('chair', "One of the basic pieces of furniture, a chair is a type of seat. Its primary features are two pieces of a durable material, attached as back and seat to one another at a 90° or slightly greater angle, with usually the four corners of the horizontal seat attached in turn to four legs—or other parts of the seat's underside attached to three legs or to a shaft about which a four-arm turnstile on rollers can turn—strong enough to support the weight of a person who sits on the seat (usually wide and broad enough to hold the lower body from the buttocks almost to the knees) and leans against the vertical back (usually high and wide enough to support the back to the shoulder blades). The legs are typically high enough for the seated person's thighs and knees to form a 90° or lesser angle. Used in a number of rooms in homes (e.g. in living rooms, dining rooms, and dens), in schools and offices (with desks), and in various other workplaces, chairs may be made of wood, metal, or synthetic materials, and either the seat alone or the entire chair may be padded or upholstered in various colors and fabrics. Chairs vary in design. An armchair has armrests fixed to the seat; a recliner is upholstered and under its seat is a mechanism that allows one to lower the chair's back and raise into place a fold-out footrest; a rocking chair has legs fixed to two long curved slats; a wheelchair has wheels fixed to an axis under the seat.");
hashMap.set('cuz', "Cuz, as his name implies, is Gex's cousin. He is an overweight leopard gecko who wears a Hawaiian shirt. He was captured by the gangsters of 'Gangster TV' on Rez's orders, and placed in a cage on a ship in the harbor. Gex eventually managed to free his cousin as part of a mission in that level, unlocking him for use in the secret levels");
hashMap.set('gex', "Gex the Gecko is the main protagonist of the Gex series. He is addicted to television, lives in Maui and is a secret agent. He is sent to defeat enemies, lead by the main antagonist, Rez.");
hashMap.set('irs', "God! To hell with th IRS! You aren't getting any of my bugs!");
hashMap.set('rex', "Rex is Gex's prehistoric ancestor. He is a small red dinosaur from prehistoric times. Rez froze him in a block of ice inside of a cave in the 'Holiday Broadcasting' level. If Gex goes into the cave and thaws Rex out, he unlocks him as a playable character in the secret missions.");
hashMap.set('xtra', "She is a secret agent, head of the TV Terrorist Defense Unit, and Gex's love interest/partner. She plays a bigger role in Deep Cover Gecko where she is kidnapped by Rez to get to Gex. Throughout the game, Gex constantly flirts with her and she repeatedly turns him down. After Gex rescues her from Rez, she accepts his love.");
hashMap.set('foo', 'Bar!');
hashMap.set('ping', 'Pong!');
hashMap.set('pong', 'Ping!');
hashMap.set('test', 'Pass!');
hashMap.set('sussy', 'Baka? :face_with_monocle:', 'bruh');
hashMap.set('v', 6);


// this is the list of random responses
const randomResponse = new HashMap();
randomResponse.set(0, "Get your stinking paws off me you damn dirty ape!");
randomResponse.set(1, "It's tail time!");
randomResponse.set(2, "YYYEEESSS!");
randomResponse.set(3, "That's for 12 years of Full House!");
randomResponse.set(4, "Now, that's what I call getting some tail.");
randomResponse.set(5, "All right! It's tail time!");
randomResponse.set(6, "My tail's gonna kick your butt!");
randomResponse.set(7, "Time to go postal!");
randomResponse.set(8, "Say hello to the floor!");
randomResponse.set(9, "Put that in your pipe and smoke it.");
randomResponse.set(10, "I'm doing this for you!");
randomResponse.set(11, "Gecko-chop baby!");
randomResponse.set(12, "Karate-chop!");
randomResponse.set(13, "Watch me use my tail to kick your butt.");
randomResponse.set(14, "This is for Mr. Sinatra.");
randomResponse.set(15, "You're nothing see, you're nothing!");
randomResponse.set(16, "I'll give you such a pinch!");
randomResponse.set(17, "Move like a butterfly sting like a gecko!");
randomResponse.set(18, "This is for all the angels in heaven.");
randomResponse.set(19, "Eat this!");
randomResponse.set(20, "File this under 'ouch'!");
randomResponse.set(21, "Judo-chop baby!");
randomResponse.set(22, "You mean I'm not 99.9% clean?");
randomResponse.set(23, "Are you after that old sandwich in my pocket?");
randomResponse.set(24, "Hello there, my secret friend!");
randomResponse.set(25, "I ain't gonna make!");
randomResponse.set(26, "I got a mate!");
randomResponse.set(27, "You are a secret friend!");
randomResponse.set(28, "Mmmm... buttery.");
randomResponse.set(29, "Tastes are licking and...ehhhhhhh we heard it.");
randomResponse.set(30, "Spock, load the tongue.");
randomResponse.set(31, "Burp!");
randomResponse.set(32, "That's the sweet stuff darling.");
randomResponse.set(33, "Mmm... TVs instead of potatoes.");
randomResponse.set(34, "All right that's the spot.");
randomResponse.set(35, "3 more I have the whole set!");
randomResponse.set(36, "Oh gimme, gimme, gimme!");
randomResponse.set(37, "I'll take one of those, and some of these.");
randomResponse.set(38, "If this weren't a video game, I'd be on my way to prison!");
randomResponse.set(39, "Sweet like candy!");
randomResponse.set(40, "Need it! Need it! Need it!");
randomResponse.set(41, "For me! You shouldn't have!");
randomResponse.set(42, "One for me and one for me!");
randomResponse.set(43, "Licking my way to the top!");
randomResponse.set(44, "A little tongue now, a lot of tail later.");
randomResponse.set(45, "Pardon my tongue darling.");
randomResponse.set(46, "Slip of the tongue.");
randomResponse.set(47, "NOW CUT THAT OUT!");
randomResponse.set(48, "Warp core breach is imminennt, Captain!");
randomResponse.set(49, "Cut stunt gecko!");
randomResponse.set(50, "You never knocked me down!");
randomResponse.set(51, "Easy...");
randomResponse.set(52, "Damn it Jim, I'm a doctor, not a pin cushion!");
randomResponse.set(53, "Cut my eyes, I can't see!");
randomResponse.set(54, "THAT'S NOT IN THE SCRIPT!");
randomResponse.set(55, "Um, that's not in the script...");
randomResponse.set(56, "Must... regain... balance.");
randomResponse.set(57, "Uh, someone yell cut!");
randomResponse.set(58, "Mental note: get a tetanus.");
randomResponse.set(59, "Body blow! Body blow!");
randomResponse.set(60, "It hurts!");
randomResponse.set(61, "Damn this pesky gravity!");
randomResponse.set(62, "Prepare to acandom ship.");
randomResponse.set(63, "If I were real this would hurt.");
randomResponse.set(64, "Mr. Wizard!");
randomResponse.set(65, "Aaaaah!");
randomResponse.set(66, "They call him Flipper, Flipper.");
randomResponse.set(67, "SHARK!!!!");
randomResponse.set(68, "SHAAAAAAAAAAARRRRRRRRRKKKKKKK!!!");
randomResponse.set(69, "Piranhas? What Piranhas?");
randomResponse.set(70, "Piranhas? Huddle! Huddle! Huddle! Huddle! Huddle!");
randomResponse.set(71, "Is it just me or am I ENGULFED IN FLAMES?!");
randomResponse.set(72, "I'm flaming--in the manly way...");
randomResponse.set(73, "FLAME ON!");
randomResponse.set(74, "I am the god of hellfire!");
randomResponse.set(75, "Pepto...Bismol!");
randomResponse.set(76, "Indigestion!");
randomResponse.set(77, "Woah.");
randomResponse.set(78, "WOAH!");
randomResponse.set(79, "ow.");
randomResponse.set(80, "OWOWOWOW!");
// these are the acutal level quips not tied to an action
randomResponse.set(81, "Oh no, I'm too young to have a second childhood!");
randomResponse.set(82, "The government told me that shes experiements were over!");
randomResponse.set(83, "YOU'RE DESPICABLE!");
randomResponse.set(84, "Note to self: Don't drink tap water at Jerry Garcia's");
randomResponse.set(85, "Note to self: Don't step on any brown mushy rocks!");
randomResponse.set(86, "Note to self: Don't buy rocket sled made by ACME.");
randomResponse.set(87, "This is really about your father isn't it?");
randomResponse.set(88, "Damn IRS!");
randomResponse.set(89, "Will Cheech and/or CHong, report to the front desk!");
randomResponse.set(90, "Hey! I feel like I'm trapped in Boy George's pants!");
randomResponse.set(91, "Look, I just wanted a gift stop in the bathroom.");
randomResponse.set(92, "My inner child is coming out and it hurts!");
randomResponse.set(93, "And remember kids, never buy a marvolay from a guy with a top hat.");
randomResponse.set(94, "This is like a luau at Mel Blanc's house!");
randomResponse.set(95, "We're on the road to nowhere!");
randomResponse.set(96, "Have fun storming the castle!");
randomResponse.set(97, "What did you flunk out of nasty camp?");
randomResponse.set(98, "Ah to see the world as Keith Richards does.");
randomResponse.set(99, "Brought to you by up-Chuck Jones.");
randomResponse.set(100, "Has anyone seen Carol-Anne in here?");
randomResponse.set(101, "Bring out the gimp.");
randomResponse.set(102, "Hey cutie.");
randomResponse.set(103, "Hello pretty.");
randomResponse.set(104, "Bring out your dead!");
randomResponse.set(105, "I understand the head throwing, but the dress?");
randomResponse.set(106, "Is your skull a metaphor?");
randomResponse.set(107, "Jimmy Hoffa, white courtesy phone, Jimmy Hoffa.");
randomResponse.set(108, "You, my friend, have an eating disorder.");
randomResponse.set(109, "Sorry Mr. Presley, hahaha not yet thanks.");
randomResponse.set(110, "The imperial fleet would never follow us in to a floating furniture field.");
randomResponse.set(111, "Well that's real scary guys, a floating toilet.");
randomResponse.set(112, "The odds of navigating a floating furniture field are 3327 to 1.");
randomResponse.set(113, "Pat, I'll take the floating chair for $200, and the rest on account?");
randomResponse.set(114, "Well we met our panel (chuckles) walls... panels, heh...");
randomResponse.set(115, "You moved the headstones, but you didn't move the bodies!");
randomResponse.set(116, "What are you, Larry King's barber? Ha! Ha! You're alright!");
randomResponse.set(117, "Nice haircut, when did we enlist?");
randomResponse.set(118, "Red Side Story auditions are down the hall.");
randomResponse.set(119, "And stab, and kick, and two!");
randomResponse.set(120, "Go stab someone your own size!");
randomResponse.set(121, "Let me guess: your parents don't understand you.");
randomResponse.set(122, "Carrot Top, is that you?");
randomResponse.set(123, "West Side Story auditions are down the hall.");
randomResponse.set(124, "Benihana not hiring?");
randomResponse.set(125, "Hmm yes, but can you make julienne fries?");
randomResponse.set(126, "Which one of you played Coco in Fame?");
randomResponse.set(127, "Do I ammuse you? Like a clown?");
randomResponse.set(128, "I ain't afraid of no ghost!");
randomResponse.set(129, "Ugly is as Ugly does.");
randomResponse.set(130, "No! No! No! I wanted the pit there and the pendulum there!");
randomResponse.set(131, "Reminds me of Halloween at Rip Taylor's.");
randomResponse.set(132, "Uh, hi, I'm here for the real-world interview?");
randomResponse.set(133, "It beats the Matterhorn, what are you going to do?");
randomResponse.set(134, "Who forgot to pay the gravity bill?");
randomResponse.set(135, "This place is bigger than Drew Carey's bar tab.");
randomResponse.set(135, "Heeeeeeeere's Gexy!");
randomResponse.set(136, "Welcome to Under This Old House.");
randomResponse.set(137, "Man, Hef has let his place go.");
randomResponse.set(138, "The ad says Beverly Hills adjacent.");
randomResponse.set(139, "I hate these low budget b-levels.");
randomResponse.set(140, "This house is now clean.");
randomResponse.set(141, "Today is a good day to die!");
randomResponse.set(142, "Behind one of these doors is a brand new car!");
randomResponse.set(143, "Don't take career advice from Joe Piscopo.");
randomResponse.set(144, "Redrum, Redrum!");
randomResponse.set(145, "Reminds me of my bother's dorm room.");
randomResponse.set(146, "Axe in the chest for Scatman Crothers.");
randomResponse.set(147, "This is what Tim Burton thinks about when he's in the tub.");
randomResponse.set(148, "So this is never-never land, you'd never guess it from the outside.");
randomResponse.set(149, "FedEx for Roger Corman.");
randomResponse.set(150, "Lily, have you seen grandpa?");
randomResponse.set(151, "The real estate wizardy of Tom Vu at work.");
randomResponse.set(152, "Welcome to the New York city mass transit system.");
randomResponse.set(153, "I am most certainly not in the vicinity of Kansas anymore.");
randomResponse.set(154, "You have the swan-like grace of a yound Nixon.");
randomResponse.set(155, "Freddy, Jason; Jason, Freddy.");
randomResponse.set(156, "Believe me, you smell like I feel.");
randomResponse.set(157, "Ladies and gentlemen, Tom Arnold's acting coach.");
randomResponse.set(158, "Shut down all the garbage mashers on the detention level!");
randomResponse.set(159, "Hmmm.... www.dork.com!");
randomResponse.set(160, "What is this? Outtakes from Deep Space 9!?");
randomResponse.set(161, "How did I get in Bill Gates' head?");
randomResponse.set(162, "All this technology still can't explain why David Hasslehoff is so popular.");
randomResponse.set(163, "I love that guy. He's not housebroken.");
randomResponse.set(164, "This is like an all-nighter at Richard Simmons' house.");
randomResponse.set(165, "The only thing this place doesn't have is a baby gap.");
randomResponse.set(166, "All this technology so fat guys can hear Rush Limbaugh?");
randomResponse.set(167, "All this technology and Shatner still can't get a good hairpiece.");
randomResponse.set(168, "Coming soon the Wizard of Oz 2000!");
randomResponse.set(169, "I feel like I'm in the Wiz!");
randomResponse.set(170, "Boys, Tron's not gonna work once. It's not gonna work twice!");
randomResponse.set(171, "Ehhh! I should have become a Maytag repair man!");
randomResponse.set(172, "Lady, I don't know who wired this for you, but none of this stuff is grounded.");
randomResponse.set(173, "Uh, lady, you gotta change your lint filter.");
randomResponse.set(174, "Welcome to Jurassic Park, keep your eyes peeled for sleestaks and other bad special effects.");
randomResponse.set(175, "In a land before time, when Saturday Night Live was funny.");
randomResponse.set(176, "WILMA!!!!");
randomResponse.set(177, "I'll take 'Places I Can Burn To Death' for $100, Alex.");
randomResponse.set(178, "Marshall, Will, and Holly. On a routine expedition.");
randomResponse.set(179, "Add 1 million years, two white tigers and we're in Siegfried and Roy");
randomResponse.set(180, "One day soon, it'll be a smoke belching factory here!");
randomResponse.set(181, "The difference between this and Hades is that there's no Kathy Lee Gifford.");
randomResponse.set(182, "Dr.Zaius, would an ape make a human doll that talks?!");
randomResponse.set(183, "The natives will trade four of their women for the girl with the golden hair.");
randomResponse.set(184, "That's a spicy meatball.");
randomResponse.set(185, "GOODNESS GRACIOUS, GREAT BALLS OF FIRE!!!");
randomResponse.set(186, "And this is just one of the forty thousand rooms in Aaron Spelling's house!");
randomResponse.set(187, "I haven't seen blasts like this since taco night at James Earl Jones' house.");
randomResponse.set(188, "OK who's job was it to mow the lawn?");
randomResponse.set(189, "If Prince was a snail these would be his tracks.");
randomResponse.set(190, "There's a joke here about snail trails but I'm not gonna tell it.");
randomResponse.set(191, "Evolve or get out of my way pal!");
randomResponse.set(192, "Hey it's my mother-in-law!");
randomResponse.set(193, "If this is the best they've got around here in six months we'll be running this planet.");
randomResponse.set(194, "Gecko shall not kill gecko!");
randomResponse.set(195, "Soylent green is geckos!");
randomResponse.set(196, "I should've come back here to fill my lava lamp hohoho!");
randomResponse.set(197, "I am the lizard king, hear my roar!");
randomResponse.set(198, "Memo to Gilligan. Try building a raft.");
randomResponse.set(199, "A raft! How convenient! Those programmers think of everything.");
randomResponse.set(200, "My name is Caine, I seek water.");
randomResponse.set(201, "I'm looking for the two small girls that sing for Mothra.");
randomResponse.set(201, "What's harder, getting through this level or divvying up the check?");
randomResponse.set(202, "I'll beat this level but in an hour I'll be hungry for another.");
randomResponse.set(203, "I'm Tom Vu, you can be a millionaire!");
randomResponse.set(204, "Dr. Jones, I'll never get all three Sankara Stones.");
randomResponse.set(205, "Ugh, where's Short Round when you need him?");
randomResponse.set(206, "I'm lost in Dick Dale's colon.");
randomResponse.set(207, "I knew I shouldn't have hired Margaret Cho as my landscaper.");
randomResponse.set(208, "With the level six you get egg roll.");
randomResponse.set(209, "Ahh, ancient Chinese level.");
randomResponse.set(210, "Oh hoho no, not the Hellraiser box.");
randomResponse.set(211, "Yes I'm here to pick up my laundry.");
randomResponse.set(212, "This is going to be one expensive easter egg hunt.");
randomResponse.set(213, "Domo arigato Mr. digital roboto, domo.");
randomResponse.set(214, "Wax on, wax off.");
randomResponse.set(215, "Nice robe Mr. Hefner.");
randomResponse.set(216, "Come on Jake, it's Chinatown.");
randomResponse.set(217, "Yes I'm here to pick up my laundry.");
randomResponse.set(218, "Why yes I'm here to pick up my laundry.");
randomResponse.set(219, "You don't match the carpet and you have to go.");
randomResponse.set(220, "Ancient Chinese Secret, huh?");
randomResponse.set(221, "Now listen to me grasshopper.");
randomResponse.set(222, "I'm having 'Nam flashbacks, and I wasn't even there!");
randomResponse.set(223, "Waiter? Just box up the evil, I'll take it home.");
randomResponse.set(224, "Is this the Year of the Gecko?");
randomResponse.set(225, "I'm looking for a man called Scaramanga.");
randomResponse.set(226, "Hmm, reminds me of Jackie Chan's bathroom.");
randomResponse.set(227, "So, this is where all the missing socks go.");
randomResponse.set(228, "Man, this place smells like ducks.");
randomResponse.set(229, "The things I do for Mooshoo...");
randomResponse.set(230, "I'm the ultimate weapon, baby, yeah!");
randomResponse.set(231, "Akira to white courtesy phone, Akira to white courtesy phone.");
randomResponse.set(232, "Where's Shortround when you need him?");
randomResponse.set(233, "Last time I was here, I was dressed as a woman. Yes!");
randomResponse.set(234, "What's harder, getting through this level or digging up the check?");
randomResponse.set(235, "Oh, great, the dream sequence from Brazil again.");
randomResponse.set(236, "Hey where's Tom Vu and the geishas?");
randomResponse.set(237, "Captain, they are a bizarre alien race that find Adam Sandler funny.");
randomResponse.set(238, "The princess is here in the detention level.");
randomResponse.set(239, "Has anyone seen Fox Mulder's sister?");
randomResponse.set(240, "There's a gecko on my tail, R2, see what you can do with it!");
randomResponse.set(241, "First sign of an Ewok, I'm out of here.");
randomResponse.set(242, "Meet Gex gecko!");
randomResponse.set(243, "Screw the Force, who's got a grenade?");
randomResponse.set(244, "I feel like a walking dutch oven.");
randomResponse.set(245, "I don't think that's good air.");
randomResponse.set(246, "Spock, can you read me?");
randomResponse.set(247, "This is major Gex to ground control.");
randomResponse.set(248, "We don't serve you kind in here!");
randomResponse.set(249, "Are you related to the cartoon trash can at the movies?");
randomResponse.set(250, "Are you fluent in gettin' your butt kicked?");
randomResponse.set(251, "You are unwise to lower your defenses.");
randomResponse.set(252, "Alright boys, phasers on stun.");
randomResponse.set(253, "Tell me again the difference between the future and Las Vegas.");
randomResponse.set(254, "I knew Roswell would open up a casino.");
randomResponse.set(255, "Scotty, beam me into an Ivy League Sorority House.");
randomResponse.set(256, "Shouldn't I be wearing a lead apron?");
randomResponse.set(257, "Well I guess this means I can't have children.");
randomResponse.set(258, "Two to beam up.");
randomResponse.set(259, "Keep the dribbles, I just want the quadrotriticale.");
randomResponse.set(260, "Aren't you a little short for a stormtrooper?");
randomResponse.set(261, "Well, if it isn't Doctor Jellyfinger.");
randomResponse.set(262, "Is that a lightsaber are or you just happy to see me?");
randomResponse.set(263, "I can't see a thing in this helmet.");
randomResponse.set(264, "Daddy wants air! Daddy wants air!");
randomResponse.set(265, "Gexy wants new helmet! Gexy wants new helmet!");
randomResponse.set(266, "This is radio 3 erect signing off.");
randomResponse.set(267, "Out of the way, Roseanne!");
randomResponse.set(268, "500 channels and still nothing on.");
randomResponse.set(269, "At least I'm not at the DMV.");
randomResponse.set(270, "Terminator? Phone call for a Mr. Terminator.");
randomResponse.set(271, "Welcome to the only thing more evil than IRS Headquarters.");
randomResponse.set(272, "So this is where they decided to change Coke.");
randomResponse.set(273, "Looks like we got a fly in the spider's web!");
randomResponse.set(274, "Screens up.");
randomResponse.set(275, "The horror!");
//quips from boss stages
randomResponse.set(276, "And they said testing A-bombs on this island would have no effect.");
randomResponse.set(276, "Someone who is not me could stand to lose a few pounds.");
//bonus quips
randomResponse.set(277, "I've got ten seconds to save the world.");
randomResponse.set(278, "Welcome to this week's episode of 'Touched By An Uncle'.");
randomResponse.set(279, "All that work and I'm back where I started. It's just like college.");
randomResponse.set(280, "My god! This is New York! I lived here... Worked here.");
randomResponse.set(281, "Dead fly martini. Shaken not stirred.");
randomResponse.set(282, "I am the last gecko.");
randomResponse.set(283, "Gecko. Gex Gecko.");
randomResponse.set(284, "This is the big one! I'm coming Elizabeth!");
randomResponse.set(285, "Ladies and gentlemen! The new Fall TV season!");
randomResponse.set(286, "So this is New Jersey.");
randomResponse.set(287, "Evening, Mr Picasso!");
randomResponse.set(288, "To boldy go... I'm scared!");
randomResponse.set(289, "Oh William please... Give me a sponge bath.");
randomResponse.set(290, "It's tail time!");
randomResponse.set(291, "Now that's what I call gettin' some tail!");
randomResponse.set(292, "He's dead Jim.");
randomResponse.set(293, "This one's for Johnny!");
randomResponse.set(294, "This is for Keith Moon!");
randomResponse.set(295, "This for Mr. Sinatra.");
randomResponse.set(296, "Swingin' baby!");
randomResponse.set(297, "Hey look, SNL!");
randomResponse.set(298, "Hey... reruns of Rhoda.");
randomResponse.set(299, "Kill your TV man.");
randomResponse.set(300, "Read a book!");
randomResponse.set(301, "Off the TV, nothin' but net!");
randomResponse.set(302, "Support your local library!");
randomResponse.set(303, "Into the garbage chute fly-boy!");
randomResponse.set(304, "Go into the Liiiight.");
randomResponse.set(305, "I know when I'm not wanted.");
randomResponse.set(306, "I'll just go in here.");
randomResponse.set(307, "Adriane!");
randomResponse.set(308, "Ohh, that had to hurt!");
randomResponse.set(309, "You probably think that hurts, OUCH!");
randomResponse.set(310, "Not yet thanks.");
randomResponse.set(311, "Higher, Higher, Lower!");
randomResponse.set(312, "Sorry, I only cry at weddings.");
randomResponse.set(313, "Nobody touch me.");
randomResponse.set(314, "Hardy blow! Hardy blow!");
randomResponse.set(315, "Easy...");
randomResponse.set(316, "Now, CUT THAT OUT!");
randomResponse.set(317, "Feed me!");
randomResponse.set(318, "Soylent Green is good!");
randomResponse.set(319, "I'm hungry dammit!");
randomResponse.set(320, "For me? ... You shouldn't have!");
randomResponse.set(321, "This is perfect for my collection!");
randomResponse.set(322, "Sweeet, like candy.");
randomResponse.set(323, "Need it! Need it! Need it! Need it!");
randomResponse.set(324, "I'm so hungry I could cry!");
randomResponse.set(325, "I see you've met Mr. Tongue.");
randomResponse.set(326, "I'll take this and this and this and this.");
randomResponse.set(327, "Hungry. Must find food.");
randomResponse.set(328, "That's it, that hits the spot.");
randomResponse.set(329, "Mmmm, TVs instead of potatoes!");
randomResponse.set(330, "I've dated colder.");
randomResponse.set(331, "She's as cold as ice.");
randomResponse.set(332, "I feel like Ben Franklin's wallet.");
randomResponse.set(333, "Dude, I'm trippin'.");
randomResponse.set(334, "Pulse racing, heart pounding, where's the john?");
randomResponse.set(335, "I am IRONMAN!");
randomResponse.set(336, "I'm Superman!");
randomResponse.set(337, "Scotty, shields up!");
randomResponse.set(338, "Geronimo!");
randomResponse.set(339, "I'm invincible!");
randomResponse.set(340, "AAAAROOOGA!");
randomResponse.set(350, "Beat it!");
randomResponse.set(351, "Ibs harb bo quib when your unber waber.");
randomResponse.set(352, "I'm workin' without a net here!");
randomResponse.set(353, "This looks familiar.");
randomResponse.set(354, "Spock, do you read me?");
randomResponse.set(355, "My name is Forrest GEX.");
randomResponse.set(356, "What this place needs is color.");
randomResponse.set(357, "Soon there will be a smoke-belching factory here.");
randomResponse.set(358, "Note to self, don't drink tap water at Jerry Garcia's.");
randomResponse.set(359, "Oh-kay! Time to bring out the maids!");
randomResponse.set(360, "Obi Wan has taught you well!");
randomResponse.set(361, "I suppose you know it’s be-kind-to-geckos month.");
randomResponse.set(362, "If I had a life I'd be glad to get back to it.");
randomResponse.set(363, "It reminds me of Ed tapping his birthday keg.");
randomResponse.set(364, "Thats one small step for GEX.");
randomResponse.set(365, "Lock and load little lizard.");
randomResponse.set(366, "Time to teach someone some manners.");
randomResponse.set(367, "Its Party time!!");
randomResponse.set(368, "Let's get it on!");
randomResponse.set(369, "This place is weirder than Rick James' place on the 4th of July.");
randomResponse.set(370, "This is about as much fun as being Mike Tyson's cell-mate on Valentines day.");
randomResponse.set(371, "This place has all the warmth of a Dick Clark special.");
randomResponse.set(372, "Waaaa, All I really wanted was this!");
randomResponse.set(373, "BABADOOOOO!");
randomResponse.set(374, "Ah! Not yet, no!");
randomResponse.set(375, "Oh yeah!");
randomResponse.set(375, "If this were a plane crash I could eat the other passengers.");
randomResponse.set(376, "Looks like Beetlejuice threw up.");
randomResponse.set(377, "Looks like Bugs Bunny after the trots.");
randomResponse.set(378, "Gex, there is no substitute.");
randomResponse.set(379, "Waiter, if you could just box up the evil and I'll take it home.");
randomResponse.set(380, "Warning! Yellow patch! Warning!");
randomResponse.set(381, "Viva Las Vegas! This isn't Las Vegas?");
randomResponse.set(382, "The Playboy Mansion! Yes!");
randomResponse.set(383, "I'M OUTTA ORDER?! YOU'RE OUTTA ORDER! THIS WHOLE LEVEL'S OUTTA ORDER!!");
randomResponse.set(384, "Any of you mugs know where I can get a pair of concrete shoes around here?");

// this is the bot listener
client.on('message', message => {
    // if the chat message starts with an bang (!)
    if (message.content.substring(0, 1) == '!') {
        // parse the message and get the vbalues between the ! and the space
        var cmd = message.content.substring(1).split(' ')[0];
        // search the commands for a key that matches
        var response = hashMap.get(cmd);
        const exampleEmbed = new Discord.MessageEmbed().setTitle('Gex Says...').setColor('#66CC33');

        if(response) {
            // USE THE HASH RESPONSE
        } else if (cmd == 'help') {
            // the keyword help will list the command keys
            var response = '!quote/quip/random \n !voicelines \n !' + hashMap.keys().join('\n !')
            exampleEmbed.setTitle('Try one of these...');
        } else if (cmd == 'quote') {
            // if not a key then grab a random from the random response
            var response = randomResponse.get(getRandomInt(randomResponse.size));
        } else if (cmd == 'quip') {
            // if not a key then grab a random from the random response
            var response = randomResponse.get(getRandomInt(randomResponse.size));
        } else if (cmd == 'random') {
            // if not a key then grab a random from the random response
            var response = randomResponse.get(getRandomInt(randomResponse.size));
        } else {
            message.channel.send('not a command idot', {
                files: [
                    "./resources/cow.gif"
                ]
            }) 
        }
       //write the response value to the channel
       if(response) {
           exampleEmbed.setDescription(response)
           message.channel.send(exampleEmbed);
       }     
    }
});

client.login(process.env.BOT_TOKEN);
