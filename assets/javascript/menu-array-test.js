//Slide In and Out Menu
$(document).ready(function () {
    $(".fa-times").click(function () {
        $(".sidebar_menu").addClass("hide_menu");
        $(".toggle_menu").addClass("opacity_one");
    });

    $(".toggle_menu").click(function () {
        $(".sidebar_menu").removeClass("hide_menu");
        $(".toggle_menu").removeClass("opacity_one");
    });
});

//Random Image Generator Function

//Global Variable
var lastIndex = 0;

//Random Image Generator
function randomImage() {
    var theImage = document.getElementById('#myimage1');
    var imgDir = 'assets/images/cards';

    //Image Array
    var cardImages = new array('gpk-Adam-Bomb.jpg', 'gpk-Ailin-Al.jpg', 'gpk-Amazin-Grace.jpg', 'gpk-Apple-Cory.jpg', 'gpk-Armpit-Britt.jpg',
        'gpk-Babbling-Brooke.jpg', 'gpk-Bad-Breath-Seth.jpg', 'gpk-Ball-N-Shane.jpg', 'gpk-Barfin-Marvin.jpg', 'gpk-Bernie-Burns.jpg',
        'gpk-Bony-Tony.jpeg', 'gpk-Brainy-Janie.jpg', 'gpk-Broad-Maud.jpg', 'gpk-Burger-Ben.jpg', 'gpk-Burnin-Vernon.jpg',
        'gpk-Busy-Bea.jpg', 'gpk-Chilly-Millie.jpg', 'gpk-Chopped-Susie.jpg', 'gpk-Christina-Barfarina.jpg', 'gpk-Condo-Minnie.jpg',
        'gpk-Corkscrewed-Drew.jpg', 'gpk-Coy-Roy', 'gpk-Crystal-Gale.png', 'gpk-Dead-Ted.jpg', 'gpk-Dental-Hygene.jpg',
        'gpk-Disgustin-Dustin.jpg', 'gpk-Dogged-Doug.jpg', 'gpk-Dressy-Jesse.jpg', 'gpk-Drew-Tattoo.jpg', 'gpk-Drippy-Dan.jpg',
        'gpk-Dustin-to-Dust.jpg', 'gpk-Dyna-Mike.jpg', 'gpk-Eye-Candy-Mandy.jpg', 'gpk-Fat-Chance.jpg', 'gpk-Fiery-Phil.jpg', 'gpk-Flat-Pat.jpeg',
        'gpk-Foul-Phil.jpg', 'gpk-Fryin-Brian.jpg', 'gpk-Fryin-Ryan.jpg', 'gpk-Gassy-Gus.jpg', 'gpk-George-Clowny.jpg',
        'gpk-Glowing-Amber.jpg', 'gpk-Graffitti-Petey.jpg', 'gpk-Greaser-Greg.jpg', 'gpk-GuilloTina.jpg', 'gpk-Gutsy-Gabriel.jpg',
        'gpk-Hairy-Mary.jpg', 'gpk-Hamburger-Pattie.jpg', 'gpk-Handy-Hannah.jpg', 'gpk-Handy-Randy.jpg', 'gpk-Head-Alexis.jpg', 'gpk-Hollow-Wayne.jpg',
        'gpk-Holly-Daze.jpg', 'gpk-Holly-Wood.jpg', 'gpk-Horsey-Henry.jpg', 'gpk-Intense-Payne.jpg', 'gpk-Intensive-Carrie.jpg',
        'gpk-Itchy-Ritchie.jpg', 'gpk-Jez-Dispenser.jpg', 'gpk-John-John.jpg', 'gpk-Jolted-Joe.jpg', 'gpk-Juicy-Jess.jpg', 'gpk-Junk-Food-John.png',
        'gpk-Junky-Jeff.jpg', 'gpk-Karate-Kate.jpg', 'gpk-Ken-Not-Hold-It.jpg', 'gpk-Kent-Stand-It.jpg', 'gpk-Knittin-Brittany.jpg', 'gpk-Leaky-Leslie.jpg',
        'gpk-Lily-Popped.jpg', 'gpk-Loony-Lenny.jpg', 'gpk-Mad-Mike.jpg', 'gpk-Mark-Bark.jpg', 'gpk-Max-Axe.jpg', 'gpk-Mean-Gene.jpg',
        'gpk-Messy-Tessie.jpg', 'gpk-Moe-Bile.jpg', 'gpk-Nasty-Nick.jpg', 'gpk-Nervous-Rex.jpg', 'gpk-Nested-Ernesto.jpg',
        'gpk-Off-The-Wall-Paul.jpg', 'gpk-One-Eyed-Jack.jpg', 'gpk-Oozy-Suzy.jpg', 'gpk-Over-Flo.jpg', 'gpk-PATTY-pUTTY.jpg', 'gpk-Peeled-Paul.jpeg',
        'gpk-Prickly-Rick.jpg', 'gpk-Ruby-Cube.jpg', 'gpk-Russell-Muscle.jpg', 'gpk-Sally-Suction.jpg', 'gpk-Sausage-Sam.jpg', 'gpk-Scabby-Abby.jpg',
        'gpk-Scary-Carrie.jpeg', 'gpk-Second-Hand-Rose.jpg', 'gpk-Sewer-Sue.jpg', 'gpk-Sheared Sherwood.jpg', 'gpk-Sheri-Cola.png', 'gpk-Sherwood-Forest.jpg',
        'gpk-Sidney-Kidney.jpg', 'gpk-Skid-Mark.jpg', 'gpk-Slimy-Hymie.jpg', 'gpk-Slobby-Robbie.jpg', 'gpk-Slop-Top-Todd.jpg', 'gpk-Sloshed-Josh.png',
        'gpk-Smelly-Kelly.jpeg', 'gpk-Soft-Boiled-Sam.jpg', 'gpk-Spacy-Stacy.jpg', 'gpk-Split-Kit.jpg', 'gpk-Stinkin-Stephanie.jpg', 'gpk-Teed-Off-Tom.jpg',
        'gpk-Tire-Jack.png', 'gpk-Tongue-Tied-Tina.jpg', 'gpk-Touch-Toni.jpg', 'gpk-Umbilical-Corey.jpg', 'gpk-Up-Chuck.gif', 'gpk-Upside-Down-Donald.jpg',
        'gpk-Valerie-Vomit.jpg', 'gpk-Vile-Kyle.jpg', 'gpk-Wrinkled-Rita.jpg', 'gpk-Yicchy-Mickey.jpg');

    var imgIndex = 0;

    if (cardImages.length > 1) {
        while (imgIndex == lastIndex) {
            imgIndex = Math.floor(Math.random() * cardImages.length);
        }

        lastIndex = imgIndex;

    var imgPath = imgDir + cardImages[imgIndex];

    theImage.src = imgPath;
    theImage.alt = cardImages[imgIndex];
    }
    else {
        return false;
    }
}