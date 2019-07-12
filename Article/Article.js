/* This is the data we will be using to create our article components */
/* Look over this data, then proceed to line 91*/
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: 'Nov 5th, 2018',
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: 'Javascript and You, ES6',
    date: 'May 7th, 2019',
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: 'React vs Angular vs Vue',
    date: 'June 7th, 2019',
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: 'Professional Software Development in 2019',
    date: 'Jan 1st, 2019',
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  },
  {
    title: 'The Lambda Method: Immersion',
    date: 'Nov 23rd, 2019',
    firstParagraph: 'Lorem ipsum dolor amet hoodie lomo activated charcoal helvetica   yuccie green juice banjo. Portland man bun distillery quinoa unicorn pitchfork. Vexillologist pok pok vinyl kombucha etsy, PBR&B affogato kogi readymade humblebrag sartorial four dollar toast mumblecore keytar. Raclette 8-bit four dollar toast, single-origin coffee enamel pin man bun crucifix aesthetic tattooed vexillologist bushwick typewriter taxidermy fanny pack literally. Waistcoat cornhole dreamcatcher keytar, bicycle rights try-hard polaroid mustache thundercats.',
    secondParagraph: 'Cronut vegan tbh, pug butcher humblebrag actually try-hard palo santo normcore. Try-hard quinoa selvage cold-pressed narwhal enamel pin vice. Mumblecore polaroid everyday carry pork belly hella celiac pinterest helvetica crucifix jean shorts shabby chic etsy 3 wolf moon taiyaki prism. Pork belly selvage green juice vexillologist, food truck neutra forage gochujang stumptown. Photo booth freegan gochujang readymade four loko umami meggings man bun air plant pop-up iceland jean shorts.',
    thirdParagraph: 'Echo park beard selfies flexitarian, keytar mlkshk asymmetrical. Whatever palo santo thundercats mustache brooklyn selvage. Whatever everyday carry hot chicken gluten-free pug try-hard kinfolk green juice biodiesel intelligentsia trust fund venmo pork belly. Fingerstache man braid direct trade, pok pok vegan franzen hashtag yr deep v adaptogen scenester tousled tattooed. Cray freegan gochujang scenester, glossier YOLO cloud bread small batch intelligentsia crucifix. Raw denim put a bird on it distillery crucifix. Retro la croix you probably haven\'t heard of them, try-hard williamsburg deep v edison bulb vinyl.',
  },
  {
    title: 'Lambda Grad \'Lands\' Job with NASA',
    date: 'Nov 26th, 2019',
    firstParagraph: 'Lambda ipsum dolor amet Arrested Development. I mean, it\'s one banana, Michael. What could it cost, ten dollars? Everybody dance… NOW. I\'m foolish and I\'m funny and I\'m needy. Am I needy? Are you sure I\'m not needy? \'Cause I feel needy sometimes. Well excuse me, Judge Reinhold! Great, now I\'m gonna smell to high heaven like a tuna melt! Who? i just dont want him to point out my cracker ass in front of ann. I\'ve got a nice hard cot with his name on it. You\'d do that to your own brother? I said "cot." Buster, what are you doing with mother\'s rape horn?',
    secondParagraph: 'In prison, you just have to close your eyes and take it, but here you have to close your eyes and give it. I know, I just call her Annabelle cause she\'s shaped like a…she\'s the belle of the ball! Mr. Zuckerkorn, you\'ve been warned about touching. Barry: You said spanking. The worst that could happen is that I could spill coffee all over this $3,000 suit. COME ON. I could use a leather jacket for when I\'m on my hog and have to go into a controlled slide. The worst that could happen is that I could spill coffee all over this $3,000 suit. COME ON.',
    thirdParagraph: 'That was Tom Cruise, the actor. Lucille: They said he was some kind of scientist. A night of heterosexual intercourse. I\'m foolish and I\'m funny and I\'m needy. Am I needy? Are you sure I\'m not needy? \'Cause I feel needy sometimes. Buster, you remember when we were kissing last night? Buster: It was a wild, wild ride. Look at us, crying like a bunch of girls on the last day of camp.',
  },
  {
    title: 'Lambda Introduces: Lambda Launch',
    date: 'Dec 1st, 2019',
    firstParagraph: 'Cat ipsum dolor sit amet, give attitude. Meoooow suddenly go on wild-eyed crazy rampage. Kitty time. I hate cucumber pls dont throw it at me. Scream at teh bath loves cheeseburgers yet being gorgeous with belly side up for meow in empty rooms so try to jump onto window and fall while scratching at wall. Stand with legs in litter box, but poop outside shove bum in owner\'s face like camera lens but stare at owner accusingly then wink so chase dog then run away step on your keyboard while you\'re gaming and then turn in a circle . Purr when give birth catasstrophe i can haz or hit you unexpectedly rub face on owner ask to go outside and ask to come inside and ask to go outside and ask to come inside.',
    secondParagraph: 'Run in circles scratch the box, but run up and down stairs but i can haz yet i could pee on this if i had the energy for rub whiskers on bare skin act innocent. Try to hold own back foot to clean it but foot reflexively kicks you in face, go into a rage and bite own foot, hard sleep everywhere, but not in my bed for ptracy, or fooled again thinking the dog likes me for missing until dinner time scratch my tummy actually i hate you now fight me yet sleep everywhere, but not in my bed.',
    thirdParagraph: 'Lorizzle ipsum dolizzle sit amizzle, consectetuer adipiscing fo shizzle my nizzle. Nullam dizzle velit, aliquet volutpizzle, suscipizzle quizzle, shiznit vizzle, that\'s the shizzle. Pellentesque fo shizzle gizzle. Sed erizzle. Cool izzle dolizzle gangsta pot tempus daahng dawg. Maurizzle pellentesque nibh izzle turpizzle. Vestibulum izzle ghetto. Pellentesque bizzle rhoncus nisi. In gizzle gangsta platea dictumst. I saw beyonces tizzles and my pizzle went crizzle dapibus. Shizznit tellizzle go to hizzle, pretizzle eu, mattizzle izzle, nizzle dizzle, nunc. Bow wow wow suscipizzle. Shit semper velit sizzle pimpin.',
  }
];

/* Step 1: Create a function that creates a component. You will want your component to look like the template below: 
  
  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class='expandButton'></span>
  </div>

  Hint: You will need to use createElement more than once here!

  Your function should take either an object as it's one argument, or 5 separate arguments mapping to each peice of the data object above.

  Step 2: Add an event listener to the expandButton span. This event listener should toggle the class 'article-open' on the 'article' div.

  Step 3: return the entire component.

  Step 4: Map over the data, creating a component for each oject and add each component to the DOM as children of the 'articles' div.

  Step 5: Add a new article to the array. Make sure it is in the same format as the others. Refresh the page to see the new artible

*/

function createComponent(par1, par2, par3, par4, par5) {
  // Define new elements
  const articles = document.querySelector('.articles');
  const article = document.createElement('div');
  const title = document.createElement('h2');
  const date = document.createElement('p');
  const firstParagraph = document.createElement('p');
  const secondParagraph = document.createElement('p');
  const thirdParagraph = document.createElement('p');
  const button = document.createElement('span');
  
  // Setup structure of elements
  articles.appendChild(article);
  article.appendChild(title);
  article.appendChild(date);
  article.appendChild(button);
  article.appendChild(firstParagraph);
  article.appendChild(secondParagraph);
  article.appendChild(thirdParagraph);

  // Set class names
  article.classList.add('article');
  date.classList.add('date');
  button.classList.add('expandButton');

  // Set text content
  title.textContent = par1;
  date.textContent = par2;
  firstParagraph.textContent = par3;
  secondParagraph.textContent = par4;
  thirdParagraph.textContent = par5;
  button.textContent = 'Show';

  button.addEventListener('click', () => {
    article.classList.toggle('article-open')
    if(article.classList.contains('article-open')) {
    article.classList.toggle('close')
    }
  })

  return article;
}

data.forEach(obj => {
  createComponent(obj.title, obj.date, obj.firstParagraph, obj.secondParagraph, obj.thirdParagraph)
});