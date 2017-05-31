var Product = require('../models/product');
var Article = require('../models/article');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var title = 'Batman\'s logo';
var price = 5;
var car = 'Lamborghini ';
var bike = 'Bianchi';

var products = [
    /*new Product({
        imagePath: 'http://static2.businessinsider.com/image/56e71048dd0895ed158b4682-1200/1940-the-original-batman-logo-resembled-a-man-in-a-cape-its-a-bit-bulky-but-fit-the-time-period-where-he-was-wearing-a-costume-instead-of-high-tech-armor.jpg',
        title: title + '1940',
        description: '1940: The original Batman logo resembled a man in a cape. It\'s a bit bulky, but fit the time period where he was wearing a costume instead of high-tech armor.',
        price: price
    }),
    new Product({
        imagePath: 'http://static5.businessinsider.com/image/56e71048dd0895ed158b4683-1200/1965-the-updated-logo-from-the-60s-comic-run-resembles-a-bat-in-flight-as-opposed-to-a-costumed-man.jpg',
        title: title + '1965',
        description: '1965: The updated logo from the \'60s comic run resembles a bat in flight as opposed to a costumed man.',
        price: price
    }),
    new Product({
        imagePath: 'http://static1.businessinsider.com/image/56e71048dd0895ed158b4684-1200/1966-the-symbol-from-the-live-action-adam-west-show-is-best-known-for-zooming-in-and-out-over-a-spinning-background-during-transitions.jpg',
        title: title + '1966',
        description: '1966: The symbol from the live-action Adam West show is best known for zooming in and out over a spinning background during transitions.',
        price: price
    }),
    new Product({
        imagePath: 'http://static5.businessinsider.com/image/56e71048dd0895ed158b4685-1200/1973-this-one-from-the-73-comic-run-is-a-step-backward-as-it-returned-to-the-man-in-costume-style-logo-also-notice-the-long-ears.jpg',
        title: title + '1973',
        description: '1973: This one, from the \'73 comic run, is a step backward, as it returned to the man-in-costume-style logo. Also, notice the long ears.',
        price: price
    }),
    new Product({
        imagePath: 'http://static6.businessinsider.com/image/56e71048dd0895ed158b4686-1200/1977-from-the-new-adventures-of-batman-the-first-batman-in-animation-this-is-an-update-of-the-1966-symbol-likely-because-the-tv-show-brought-in-a-new-era-of-fans-familiar-with-how-the-logo-appeared-onscreen.jpg',
        title: title + '1977',
        description: '1977: From the "New Adventures of Batman," the first Batman in animation. This is an update of the 1966 symbol, likely because the TV show brought in a new era of fans familiar with how the logo appeared onscreen.',
        price: price
    }),*/
    new Product({
        imagePath: 'https://www.lamborghini.com/en-en/sites/en-en/files/DAM/lamborghini/gateway-family/huracan/car/huracan-avio.png',
        title: car + 'Huracán AVIO',
        description: 'With the Huracán Avio you are not just a driver, you’re a pilot. Just make sure your seat belt is securely fastened. Now press the ignition button and feel what it means to reach the sky, while keeping your feet firmly on the ground. The unbelievable power of the Huracán now features a completely new livery, inspired by the prestigious history of aeronautical engineering. Aggressive yet elegant, the Huracán Avio is a tribute to the bravery and courage of the Air Force, giving you an incomparable sense of freedom and adrenaline. Is the crew ready for departure? ',
        price: price * 100000
    }),
    new Product({
        imagePath: 'https://www.lamborghini.com/en-en/sites/en-en/files/DAM/lamborghini/gateway-family/huracan/car/huracan-spyder.png',
        title: car + 'Huracán Spyder',
        description: 'Designed to cut through the air and become one with the sky, the Huracán Spyder is the pinnacle of Italian taste and hand craftsmanship, a sports car concept elevated to the performance and sensation of a coupé.The result? Behind you, the roar of the powerful V-10 engine. Above your head, an ultra-lightweight soft top that opens in just 17 seconds. Ahead, only the horizon awaits. Discover the unique characteristics and detailed technical specifications of the Huracán Spyder below.',
        price: price * 105000
    }),
    new Product({
        imagePath: 'https://www.lamborghini.com/en-en/sites/en-en/files/DAM/lamborghini/gateway-family/aventador/cars/aventador-coupe.png',
        title: car + 'Aventador Coupé',
        description: 'Forget the idea of performance you are used to. The Aventador Coupé has been engineered to revolutionize this concept and establish a new benchmark in the segment of super sports Product and beyond. This car aims to bring the future forward. This is a true supercar legend in the making, which combines the tradition of the Lamborghini brand with a level of innovation which takes the House of the Raging Bull to hitherto unexplored territory.',
        price: price * 150000
    }),
    new Product({
        imagePath: 'https://www.lamborghini.com/en-en/sites/en-en/files/DAM/lamborghini/gateway-family/one-off/cars/centenario.png',
        title: car + 'CENTENARIO',
        description: 'The new Lamborghini Centenario represents a new, extremely precious piece in Lamborghini\'s one-off strategy. It is a perfect example of the innovative design and the engineering skills of the bull-branded manufacturer.The best tribute to the 100th anniversary of the birth of Mr. Ferruccio Lamborghini, a man who managed to create a world-class brand, and who always believed that nothing is impossible, thus producing legendary and extraordinary vehicles that made history for super sports Product.',
        price: price * 200000
    }),
    new Product({
        imagePath: 'https://www.lamborghini.com/en-en/sites/en-en/files/DAM/lamborghini/gateway-family/aventador/cars/aventador-sv.png',
        title: car + 'Aventador SV COUPÉ',
        description: 'The groundbreaking innovations we introduced with the Aventador marked the beginning of a new era for super sports Product. With the Aventador SV Coupé we have completely redefined the concept.The Superveloce has been designed as the sportiest Lamborghini ever, thanks to a further improved naturally aspirated V12 engine, engineering solutions geared to extreme lightness, and a mix of innovative technological features, such as the magnetorheological push-rod suspension and the Lamborghini Dynamic Steering system.',
        price: price * 300500
    }),
    new Product({
        imagePath: 'http://www.lg.com/ua/images/mobile-phones/md05817856/gallery/medium01.jpg',
        title: 'LG G6',
        description: 'Record Smoother, Clearer Videos Even on the Move Incredible Hi-Fi Listening Experience Wide-Angle Front & Rear Cameras to Get the Bigger Picture Next-Level Audio Recording Enhanced Productivity and Performance with Android™ Nougat',
        price: price * 2000
    }),
    new Product({
        imagePath: 'http://www.lg.com/ua/images/mobile-phones/md05803370/gallery/medium01.jpg',
        title: 'LG K10',
        description: 'Expansive, Immersive Hi-Res Screen Security at Your Fingertips Fast and Powerful Processing Precise Stylus Pen with Quick Access to UX Advanced Photography with Product-Exclusive Features',
        price: price * 1500
    }),
    new Product({
        imagePath: 'http://www.lg.com/ua/images/mobile-phones/md05769968/gallery/medium01.jpg',
        title: 'LG X Power',
        description: 'Long-Lasting, Fast-Charging 4,100 mAh Non-Removable Battery† High Def Screen Shows More Detail Sleek Design with Comfortable Grip Powerful Cameras with Product-Exclusive Features Connect Directly to Other Devices',
        price: price * 1700
    }),
    new Product({
        imagePath: 'http://www.lg.com/ua/images/mobile-phones/h818p/gallery/G4_lg_large_01.jpg',
        title: 'LG G4',
        description: '16 MP Rear-Facing Camera 5.5" IPS Quantum Display 8 MP Front Camera microSD™ Card for Expandable Storage (up to 2TB)',
        price: price * 1450
    }),
    new Product({
        imagePath: 'http://www.lg.com/ua/images/mobile-phones/h502f/gallery/medium01.jpg',
        title: 'LG Magna',
        description: 'Android™ 5.1 Lollipop OS 5.0" IPS Touchscreen Display 5 MP Front-Facing Camera with 5 MP Rear-Facing Camera 3G/4G LTE/Enhanced LTE',
        price: price * 1550
    }),
    new Product({
        imagePath: 'http://www.lg.com/ua/images/mobile-phones/md05814959/gallery/medium01.jpg',
        title: 'LG K8',
        description: 'Innovative, Curved Design 5.5 “ Curved, Full HD Display Stunning Photos, Even in Low Light Fast, Seamless Multi-Tasking',
        price: price * 1200
    }),
    new Product({
        imagePath: 'http://www.bianchi.com/images/800-600-Fix/823317e6-0e2a-4170-a2e8-fce4198a6df0',
        title: bike + 'Methanol 9.5 CV',
        description: 'Methanol CV 29" carbon HM monocoque w/Countervail, 1.5" tapered HT, Pressfit BB92 (41x92mm), HDM bottom pull or Side Swing, 27,2mm seatpost, PM 160mm carbon dropout 12x148mm BOOST Shimano thru axle, internal cable routing Di2 compatible, sizes 15,17,19,21" ',
        price: price * 1000
    }),
    new Product({
        imagePath: 'http://www.bianchi.com/images/800-600-Fix/04f9905f-7acb-467f-96bc-16762ac12b7e',
        title: bike + 'Methanol 9.3 FS',
        description: 'Methanol 29 FS 100mm full carbon HM monocoque, 4-bar linkage, 1.5" tapered HT, PF30, ERC, high direct mount, PM 160mm carbon dropout, 12x142 Shimano E-Thru standard, internal cable routing, seatpost diam. 31,6mm, sizes 17,19,21" ',
        price: price * 1200
    }),
    new Product({
        imagePath: 'http://www.bianchi.com/images/800-600-Fix/00afd414-c7fb-438a-a9be-35898ca74a3a',
        title:bike + 'Ethanol 27.2 FSE',
        description: '',
        price: price * 2000
    }),
    new Product({
        imagePath: 'http://www.bianchi.com/images/800-600-Fix/d8bbbc83-51fa-47ea-90bc-590b5f4d9aa3',
        title:bike + 'Jab 27.2 ',
        description: ' Jab 27,5" alu 6061 triple butted, 1.5" tapered HT, BSA 73mm, seatpost 27,2mm, HDM Front Derailleur, bottom pull, PM 160mm bottom mounting dropout 12x142mm, sizes 15,17,19,21" ',
        price: price * 800
    }),
    new Product({
        imagePath: 'http://www.bianchi.com/images/800-600-Fix/41dda241-7577-4caa-a711-43f35de9d995',
        title:bike + 'Duel 27.0',
        description: ' Duel 27,5" alu, 1.1/8" HT, BSA 68mm, seatpost diam. 27,2mm, seat tube diam. 31,8mm, FD top pull, INTL 160mm disc mounting dropouts 9x135mm QR, ST w/V-Brake studs, external cable routing under TT, sizes 15-17-19-21" ',
        price: price * 900
    }),
    new Product({
        imagePath: 'http://www.bianchi.com/images/800-600-Fix/a4b6bff5-c308-45e1-bcea-1fab1c12d575',
        title:bike + 'Ethanol 27.2 SX2',
        description: 'Ethanol 27,5" carbon, 1.5" tapered HT, PF30 73mm, seatpost diam. 27,2mm, low clamp diam. 31.8mm, bottom pull, PM 160mm bottom mounting dropout 12x142mm, internal cable routing inside DT, sizes 15,17,19,21" ',
        price: price * 1000
    }),
    new Product({
        imagePath: 'http://www.bianchi.com/images/800-600-Fix/6ac14811-26f3-49ba-b21e-c2b95d18dbd1',
        title:bike + 'Kuma 27.0 ',
        description: 'Kuma 27,5" Alu, 1.1/8" HT, BSA 68mm, seatpost diam. 31,6mm, low clamp diam. 34,9mm bottom pull, PM 160mm disc lower mounting dropouts QR 9x135mm, external cable routing under DT, sizes 15-17-19-21" ',
        price: price * 500
    })
];

var articles = [
    new Article({
        name: 'Right tools can make online shopping easier',
        author: 'October 25, 2009|By Gregory Karp, personal finance writer for The Morning Call, Allentown, Pa.',
        text: 'Online shopping can be a smart consumer\'s best friend, with the ability to easily comparison shop, search for discounts and make purchases with a few mouse clicks.\r\n\r\nYou could always visit shopping comparison sites, such as MySimon.com, or search for coupon codes at one of many code-aggregators. But now a slew of Web browser add-ons makes smart online shopping easier. Here\'s a sampling:\r\n\r\nBilleo toolbar: With perhaps the most functionality, billeo.com helps with shopping, discount codes and bill paying. It will autofill your logins and passwords to retailer sites, as well as forms for your shipping and billing addresses and credit card information. On the checkout page, it will alert you if a discount code is available for your purchase and autofill the code.\r\n\r\nBilleo will save transaction confirmation pages to provide a shopping history. And it aids with paying via vendor sites.\r\n\r\nPersonal information is encrypted and stored on your computer rather than at Billeo, said company founder Murali Subbarao.\r\n\r\nBilleo is available for Internet Explorer and Firefox on Windows and Firefox for Mac. Offer Assistant, which applies discounts and coupon codes, is expected soon for the Mac, Subbarao said.\r\n\r\nDealio: One important function Billeo doesn\'t have is comparing prices among retailers. Dealio.com\/toolbar will do that and search eBay. Comparisons include tax and shipping for a true apples-to-apples approach. The toolbar works with IE and Firefox on Windows only.\r\n\r\nInvisibleHand plug-in: If you don\'t want a bunch of toolbars stealing your browser real estate, getinvisiblehand.com is for you. It shows itself only when you\'re on a product description page. It will alert you when another retailer has a lower price on the item. Firefox only.\r\n\r\nRetailmenot and CouponCabin: Retailmenot.ourtoolbar.com and couponcabin.com\/toolbar are among the better sites to search for coupon codes, which can be entered at online checkout to give you goodies, including discounts or free shipping. Both are available for IE and Firefox. Retailmenot also has a version for Apple\'s Safari browser.\r\n\r\nPriceProtectr toolbar: What if the price for an item drops soon after the purchase? Many retailers offer price-protection policies that refund the difference within a certain time frame, such as 30 days after purchase. Priceprotectr.com\/toolbar.jsp makes it easy to log your purchases at its Web site, which alerts you by e-mail if the price drops within the retailer\'s price-protection period. Available for IE and Firefox.\r\n\r\nBut shopping toolbars can be controversial:\r\n\r\n*Privacy. See what information it stores.\r\n\r\n*Profits. Companies that make toolbars offering coupon codes and steering you to lower prices earn money by driving traffic to retailers.\r\n\r\n*Rewards. You can grab some of that affiliate money by joining and using a shopping rewards program, such as FatWallet.com.'
    }),
    new Article({
        name: 'Deutsche Post aims for top spot in e-commerce logistics: paper',
        author: 'May 24, 2014|Reuters',
        text: 'FRANKFURT (Reuters) - Deutsche Post is aiming for a top spot in the global logistics market for online shopping, its chief executive told a German weekly, adding small acquisitions could help achieve this.\r\n\r\n\"Indeed, we want to be a global leader in logistics services for the e-commerce sector. In Germany, we\'re the number one already,\" Frank Appel told Euro am Sonntag in an interview published on Saturday.\r\n\r\nDeutsche Post, the world\'s biggest postal and logistics group, is best known internationally for its DHL parcel delivery business but it is keen to win more work from the global boom in online shopping.\r\n\r\nE-commerce is expanding rapidly, with online retail sales in Europe seen doubling from 2012 levels to around 323 billion euros ($440 billion) by 2018, market research firm Mintel forecasts.\r\n\r\nAppel said it was the group\'s goal to grow organically in the e-commerce sector.\r\n\r\n\"However, smaller acquisitions ... are always possible - also in this area,\" he said.\r\n\r\nDeutsche Post, which went public in 2000 and lost its German mail monopoly seven years later, makes three-quarters of group revenues from its DHL logistics business, compensating for the decline in traditional letter deliveries.\r\n\r\n($1 = 0.7336 euros)\r\n\r\n(Reporting by Christoph Steitz; Editing by Alison Williams)'
    }),
    new Article({
        name: 'Geneva mom tries alternative to online shopping',
        author: 'November 25, 2011|By Becky Yerak | Tribune reporter',
        text: 'Online shopping has been displacing bricks-and-mortar trips for many consumers, but this year that trend has been reversed for Lisa Fullerton.\r\n\r\nThe Geneva stay-at-home mom typically shops online during the early holiday season, but this year she and her sisters decided to start a new family tradition of coming downtown for Black Friday shopping and lunch.\r\n\r\n\"I worked at a Gap outlet last Black Friday and saw a lot of families do that, and I thought it would be a fun tradition,\" Fullerton said.\r\n\r\nShe got downtown at about 10:30 a.m. on Black Friday. Her first stop was the Gap store on Michigan Avenue, but nothing caught her eye. She then visited Eddie Bauer across the street, where she bought $250 in merchandise, mostly gifts.\r\n\r\nShe was then off to meet her sisters at the Weber Grill restaurant, a recommendation by an Eddie Bauer worker.\r\n\r\nFullerton figured that she\'d spend about another $50 on gifts today, bringing her total Black Friday spending to about $300, but still hasn\'t bought anything for her two kids, ages 10 and 8. She figures that she\'ll spend about $800 by the time the holiday is over, about the same amount as last year.\r\n\r\nbyerak@tribune.com\r\n\r\nTwitter: @beckyyerak\r\n'
    }),
    new Article({
        name: 'Alibaba invests $692 million in Chinese department store operator',
        author: 'March 30, 2014|Elzio Barreto | Reuters',
        text: 'HONG KONG (Reuters) - China\'s Alibaba Group Holding Ltd agreed to invest $692 million in a Chinese department store operator as the e-commerce giant looks to bring the benefits and convenience of online shopping to customers who visit real bricks-and-mortar stores.\r\n\r\nAlibaba, whose businesses will come under investor scrutiny ahead of the group\'s planned mega IPO in the United States this year, said it will buy $214 million worth of shares in Hong Kong-listed Intime Retail (Group) Co Ltd.\r\n\r\nIt also agreed to acquire $478 million of convertible bonds, which would give Alibaba a 26.1 percent stake in the department store operator once the bonds are converted into shares in three years.\r\n\r\nIn recent months Alibaba has gone on a shopping spree, spending more than $2.7 billion to expand into media, chat services and mapping technology.\r\n\r\nThe expansion has encroached on the turf of social networking giant Tencent Holdings Ltd, which has in turn made inroads into Alibaba\'s territory with its partnership with China\'s No.2 online retailer JD.com.\r\n\r\nThe purchases come as Alibaba starts its preparations for an initial public offering set to be the biggest-ever technology listing, surpassing Facebook Inc\'s $16 billion listing in 2012.\r\n\r\nIntime will issue 220.54 million shares at HK$7.5335 each and HK$3.71 billion worth of convertible bonds to a unit of Alibaba, the department store operator said in a filing to the Hong Kong stock exchange on Monday.\r\n\r\nAs part of the investment, Alibaba and Intime will form a joint venture to develop online-to-offline, or O2O, business in shopping malls, department stores and supermarkets in China. Alibaba will own about 80 percent of the venture, with Intime controlling the rest.\r\n\r\nO2O businesses seek to benefit from the meteoric rise of smartphone use in China and can help turn a search into a shopping trip or meal based on the user\'s location.\r\n\r\nShares in Intime surged as much as 17 percent shortly after the market open on Monday, following a trend of Hong Kong-listed companies whose shares gained sharply after receiving investments from Alibaba.\r\n\r\nThe gains were short-lived, with Intime reversing course and losing as much as 11.4 percent by mid-morning as investors digested details of the purchase, in which Alibaba offered to buy the stock at a 13.7 percent discount to its last traded price on March 26.\r\n\r\nAppliance maker Haier Electronics Group Ltd soared 20 percent in December after Alibaba unveiled plans to invest $361 million.\r\n\r\nChinaVision Media Group more than tripled earlier in March after Alibaba agreed to buy a controlling stake for $804 million to gain access to TV and movie content. ($1 = 7.7573 Hong Kong Dollars)\r\n\r\n(Additional reporting by Donny Kwok and Paul Carsten in Beijing; Editing by Christopher Cushing and Ryan Woo)'
    }),
    new Article({
        name: 'Online shopping gender gap',
        author: 'March 15, 2008|By The Wall Street Journal',
        text: 'This group is a retailer\'s dream: When shopping online, they spend more, make snap decisions -- and return less stuff.\r\n\r\nWho are these desirable shoppers? Men.\r\n\r\nWhile men and women shop differently in brick-and-mortar stores, the Internet has long been seen as offering similar speed and efficiency to both genders. But recent research by analysts and retailers has turned up significant gender differences when it comes to online shopping.\r\n\r\nThe most striking is men\'s need for speed. \"Men tend to value their time more,\" says Sucharita Mulpuru, a Forrester Research analyst.\r\n\r\nBut men also spend more money online -- and they spend big on luxury. Such findings, coupled with the relative strength of men\'s apparel in general -- sales rose 4.4 percent to $57.2 billion last year, compared with a 1.1 percent increase to $103.1 billion for women\'s apparel, according to market researcher NPD Group -- are prompting more online fashion retailers to take aim at men.\r\n\r\nSome retailers are launching shopping sites just for men, while others, including Neiman Marcus Group and Saks are beefing up their men\'s sections and tweaking their sites to make it easier -- and faster -- for men to shop. Neimanmarcus.com, for example, now gives shoppers a way to view 52 ties at once in its new Tie Shop, instead of having to look at them nine at a time.\r\n\r\nMen also return fewer items. Forrester\'s Mulpuru estimates that men send back fewer than 10 percent of their apparel purchases, while women return more than 20 percent of the apparel they purchase.\r\n\r\nBY THE NUMBERS\r\n\r\n* $2,401: Average amount men spent on online fashion, including clothing and accessories, in the previous three months.\r\n\r\n* $1,527: Average amount women spent on online fashion in the previous three months.\r\n\r\n[SURVEY OF 1,300 LUXURY SHOPPERSLAST FALL BY RESEARCHER UNITY MARKETING]'
    }),
    new Article({
        name: 'FACTBOX-What is bitcoin and how does it work?',
        author: 'February 25, 2014|Reuters',
        text: 'SAN FRANCISCO, Feb 25 (Reuters) - Mt. Gox, once the world\'s\r\nbiggest bitcoin exchange, abruptly stopped trading on Tuesday,\r\nshaking investor confidence in the digital currency that is\r\nstruggling for legitimacy.\r\n\r\nWHAT IS BITCOIN?\r\n\r\nA form of electronic money independent of traditional\r\nbanking, bitcoins started circulating in 2009 and have become\r\nthe most prominent of several fledgling digital currencies.\r\n\r\nThe virtual currency relies on a network of computers that\r\nsolve complex mathematical problems as part of a process that\r\nverifies and permanently records the details of every bitcoin\r\ntransaction that is made.\r\n\r\nUnlike traditional currencies, where a central bank decides\r\nhow much money to print based on goals like controlling\r\ninflation, no central authority governs the supply of bitcoins.\r\nLike other commodities and currencies, its value depends on\r\npeople\'s confidence in it.\r\n\r\nHOW VOLATILE IS IT?\r\n\r\nThe dollar price of bitcoins quoted on online exchange\r\nBitstamp spiked from around $30 a year ago to more than $1,100\r\nin December as more people became aware of the currency and\r\nspeculators jumped into the highly volatile market. But growing\r\nattention from regulators and concerns that bitcoins could be\r\nmore susceptible to fraud than previously thought have sparked a\r\nsteady decline in prices, to around $530 on Tuesday.\r\n\r\nCompounding the issue, its price can vary greatly depending\r\non the exchange.\r\n\r\nWHERE CAN I USE MY BITCOINS?\r\n\r\nProponents say bitcoins could one day become widely used by\r\nconsumers for online shopping and other electronic transactions.\r\nCertain online retailers such as Overstock.com and physical\r\nstores, mostly smaller operations, already accept the digital\r\ncurrency, but its adoption is not widespread.\r\n\r\nCritics say bitcoin is too volatile to be widely adopted\r\nand warn of its lack of regulation and its use to pay for\r\nillegal drugs and other nefarious transactions.\r\n\r\nHOW DO YOU STORE, TRADE AND SPEND BITCOINS?\r\n\r\nBitcoins are held in virtual wallets with unique keys.\r\nTransactions are made by sending bitcoins from one wallet to a\r\nunique key associated with another wallet in a cryptographic\r\nprocess that is verified by computers across the bitcoin\r\nnetwork.\r\n\r\nBitcoin wallets can be stored offline or online at exchanges\r\nlike Bitstamp and BTC-E.\r\n\r\nHOW ARE BITCOINS CREATED?\r\n\r\nThe system was designed to reward computers that do the\r\ncrucial work of verifying transactions with the occasional\r\npayoff of new bitcoins in a process known as bitcoin mining.\r\n\r\nThe growth in the virtual currency\'s value has created a\r\nmarket for souped-up computers and chips especially designed for\r\nthe cryptographic calculations used in bitcoin.\r\n\r\nAbout 12.4 million bitcoins, worth $6.2 billion at recent\r\nprices, have been minted since the currency began circulating,\r\naccording to Blockchain.info.\r\n\r\nWHAT HAPPENED TO MT. GOX?\r\n\r\nThe Tokyo-based bourse halted withdrawals earlier this month\r\nafter detecting \"unusual activity\", and on Tuesday it abruptly\r\nstopped trading. An unverified document circulating on the\r\nInternet purporting to be a crisis plan for Mt. Gox said more\r\nthan 744,000 bitcoins were \"missing due to malleability-related\r\ntheft.\"\r\n\r\nMt. Gox began as a website for exchanging trading cards\r\nbefore turning to bitcoin.\r\n\r\nWHAT\'S THE FUTURE OF BITCOIN?\r\n\r\nBitcoin critics say Mt. Gox\'s apparent failure proves the\r\nunregulated currency is far from ready for widespread use. They\r\nalso point to hacking attacks at other exchanges.\r\n\r\nBut proponents say it\'s early days for virtual currencies\r\nand note that newer bitcoin exchanges and other startups aiming\r\nto make bitcoin mainstream are supervised by seasoned venture\r\ncapitalists and financial experts.\r\n\r\nMany bitcoin advocates still hold out the hope of creating a\r\ndigital currency system free of government intervention or\r\ncontrol.\r\n\r\n(Reporting by Noel Randewich, editing by Ross Colvin)'
    })
];

//seed(products);
//seed(articles);
function seed(array){
    var done = 0;
    for (var i = 0; i < array.length; i++){
        array[i].save(function (err, result) {
            done++;
            if (done === array.length) mongoose.disconnect()
        })
    }
}