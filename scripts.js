document.addEventListener('DOMContentLoaded', function () {
    const cardContainer = document.querySelector('.card-container');
  
    cardContainer.addEventListener('wheel', function (event) {
      event.preventDefault();
      cardContainer.scrollLeft += event.deltaY;
    });
  });


  document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelector('.cards');
    cards.addEventListener('click', function(e) {
        const card = e.target.closest('.card');
        if (card) {
            const cardId = card.getAttribute('data-card-id');
            handleCardClick(cardId);
        }
    });


let lyricsTitle = document.querySelector('.lyrics-title');
let lyrics = document.querySelector('.lyrics');

function handleCardClick(cardId) {
    switch(cardId) {
        case '1':
            lyricsTitle.innerHTML = "Lyrics - Bheegi Bheegi<br><br>";
            lyrics.innerHTML = `
            Bheegi bheegi si hain raaten<br>
            Bheegi bheegi yaaden<br>
            Bheegi bheegi baaten<br>
            Bheegi bheegi aankhon<br>
            Mein kaisi nami hain<br>
            Aa ha ha ha aa ha<br>
            Aa ha ha ha aa ha<br>
            Aa ha ha ha<br>
            Sapnon ka saya palkon pe aya<br>
            Pal mein hasaya pal mein rulaya<br>
            Phir bhi yeh kaisi kami hain<br>
            Aa ha ha ha aa ha<br>
            Aa ha ha ha aa ha<br>
            Aa ha ha ha<br>
            
            <br>
            <br>

            Na jaane koi kaisi hain<br>
            Yeh zindagaani zindgaani<br>
            Kahaani adhuri kahaani<br>
            Na jaane koi kaisi hain<br>
            Yeh zindagaani zindgaani<br>
            Kahaani adhuri kahaani`
            
            break;

        case '2':
            lyricsTitle.innerHTML = "Lyrics - Khamoshiyan<br><br>";
            lyrics.innerHTML = `
            Khamoshiyan aawaaz hain<br>
            Tum sunne to aao kabhi<br>
            Chhukar tumhe khill jaayengi<br>
            Ghar inko bulaao kabhi<br>
            Beqarar hain baat karne ko<br>
            Kehne do inko zaraa<br><br><br>

            Khamoshiyan. Teri meri khamoshiyan<br>
            Khamoshiyan. Lipti hui khamoshiyan<br>

            Kya uss gali mein kabhi tera jaana hua<br>
            Jahaan se zamaane ko guzre zamaana hua<br>
            Mera samay toh wahin pe hai thehra hua<br>
            Bataaun tumhe kya mere sath kya kya hua<br><br><br>

            Khamoshiyan ek saaz hai<br>
            Tum dhun koi laao zaraa<br>
            Khamoshiyan alfaaz hain<br>
            Kabhi aa gunguna le zara<br>
            Beqarar hain baat karne ko<br>
            Kehne do inko zaraa haa<br><br><br>

            Khamoshiyan. Teri meri khamoshiyan<br>
            Khamoshiyan. Lipti hui khamoshiyan<br>
            `;
            break;

        case '3':
            lyricsTitle.innerHTML = "Lyrics - Sun Raha He Na Tu <br><br>";
            lyrics.innerHTML = `
            Apne karam ki kar adaayein<br>
            Yaara, Yaaraa... yaara!<br>
            Mujhko iraade de<br>
            Kasamein de, waade de<br>
            Meri duaaon ke ishaaron ko sahaare de<br>
            Dil ko thikaane de<br>
            Naye bahaane de<br>
            Khaabon ki baarishon ko<br>
            Mausam ke paimane de<br>
            Apne karam ki kar adaayein<br>
            Kar de idhar bhi tu nigaahein<br>
            Sun raha hai naa tu<br>
            Ro raha hun main<br>
            Sun raha hai naa tu<br>
            Kyun ro raha hun main (x2)<br>
            Manzilein ruswa hain<br>
            Khoya hai raasta<br>
            Aaye le jaaye<br>
            Itni si iltejaa<br>
            Ye meri zamanat hai<br>
            Tu meri amaanat hai haan...<br>
            Apne karam ki kar adayein<br>
            Kar de idhar bhi tu nigaahein<br>
            Sun raha hai naa tu<br>
            Ro raha hoon main<br>
            Sun raha hai naa tu<br>
            Kyun ro raha hun main`;
            break;
        
        case '4':
            lyricsTitle.innerHTML = "Lyrics - Teri Galiyan<br><br>"
            lyrics.innerHTML = `
            Teri Galliyan.. Galiyan Teri Galiyan..<br>
            Mujh Ko Bhaavein Galiyaan Teri Galliyaan<br>
            Teri Galiyan.. Galiyan Teri, Galiyan..<br>
            Yoon Hi Tadpaavein, Galliyan Teri, Galliyaan..<br>
            Tu Meri Neendon Mein Sota Hai<br>
            Tu Mere Ashqon Mein Rota Hai<br>
            Sargoshi Si Hai Khayaalon Mein<br>
            Tu Na Ho, Phir Bhi Tu Hota Hai<br>
            Hai Silaa Tu Mere Dard Ka<br>
            Mere Dil Ki Duaayein Hain..<br>
            Teri Galliyan.. Galiyan Teri Galiyan..<br>
            Mujh Ko Bhaavein Galiyaan Teri Galliyaan<br>
            Teri Galiyan.. Galiyan Teri, Galiyan..<br>
            Yoon Hi Tadpaavein, Galliyan Teri, Galliyaan`;
            break; 

        case '5':
            lyricsTitle.innerHTML = "Lyrics - The Nights<br><br>";
            lyrics.innerHTML=`
            Once upon a younger year<br>
            When all our shadows disappeared<br>
            The animals inside came out to play<br>
            Went face to face with all our fears<br>
            Learned our lessons through the tears<br>
            Made memories we knew would never fade<br>
            One day, my father, he told me, "Son, don't let it slip away"<br>
            He took me in his arms, I heard him say<br>
            "When you get older your wild heart will live for younger days<br>
            Think of me if ever you're afraid"<br>
            He said, "One day, you'll leave this world behind<br>
            So live a life you will remember"<br>
            My father told me when I was just a child<br>
            "These are the nights that never die"<br>
            My father told me`;
            break;

        case '6':
            lyricsTitle.innerHTML = "Lyrics - Boulevard of broken dreams<br><br>";
            lyrics.innerHTML=`
            I walk a lonely road<br>
            The only one that I have ever known<br>
            Don't know where it goes<br>
            But it's home to me, and I walk alone<br>
            I walk this empty street<br>
            On the Boulevard of Broken Dreams<br>
            Where the city sleeps<br>
            And I'm the only one, and I walk alone<br>
            I walk alone, I walk alone<br>
            I walk alone, I walk a-<br>
            My shadow's the only one that walks beside me<br>
            My shallow heart's the only thing that's beating<br>
            Sometimes, I wish someone out there will find me<br>
            'Til then, I walk alone`;
            break;

        case '7':
            lyricsTitle.innerHTML = "Lyrics - Ae Dil He Mushkil<br><br>";
            lyrics.innerHTML = `
            Tu safar mera<br>
            Hai tu hi meri manzil<br>
            Tere bina guzara<br>
            Ae dil hai mushkil<br>
            Tu mera Khuda<br>
            Tu hi duaa mein shaamil<br>
            Tere bina guzara<br>
            Ae dil hai mushkil<br>
            Mujhe aazmaati hai teri kami<br>
            Meri har kami ko hai tu laazmi<br>
            Junoon hai mera<br>
            Banoon main tere qaabil<br>
            Tere bina guzaara<br>
            Ae Dil Hai Mushkil<br><br><br>

            Yeh rooh bhi meri<br>
            Yeh jism bhi mera<br>
            Utna mera nahi<br>
            Jitna hua tera<br>
            Tune diya hai jo<br>
            Woh dard hi sahi<br>
            Tujhse mila hai toh<br>
            Inaam hai mera<br>
            Mera aasmaan dhoondhe teri zameen<br>
            Meri har kami ko hai tu laazmi<br>
            Zameen pe na sahi<br>
            Toh aasmaan mein aa mil<br>
            Tere bina guzara<br>
            Ae dil hai mushkil<br>
            Maana ki teri maujoodgi se<br>
            Ye zindagaani mehroom hai<br>
            Jeene ka koi dooja tareeka<br>
            Na mere dil ko maaloom hai<br>
            Tujhko main kitni<br>
            Shiddat se chaahun<br>
            Chaahe toh rehna tu be-khabar<br>
            Mohtaaj manzil ka toh nahi hai<br>
            Ye ek tarfa mera safar<br>
            Safar khoobsurat hai manzil se bhi<br>
            Meri har kami ko hai tu laazmi<br>
            Adhura hoke bhi<br>
            Hai ishq mera kaamil<br>
            Tere bina guzara<br>
            Ae dil hai mushkil`;
            break;
        
        case '8':
            lyricsTitle.innerHTML="Lyrics - Khairiyat<br><br>";
            lyrics.innerHTML=`
            Khairiyat pucho, kabhi to kaifiyat pucho<br>
            Tumhare bin deewane ka kya haal hai<br>
            Dil mera dekho, na meri haisiyat pucho<br>
            Tere bin ek din jaise sau saal hai<br>
            Anjaam hai tay mera Hona tumhe hai mera<br>
            Jitni bhi hon dooriyan filhaal hain<br>
            Yeh dooriyaan filhaal hain Ho...<br>
            Khairiyat pucho, kabhi to kaifiyat pucho<br>
            Tumhare bin deewane ka kya haal hai<br>
            Dil mera dekho, na meri haisiyat pucho<br>
            Tere bin ek din jaise sau saal hai<br>
            Tumhari tasveer ke sahaare mausam kayi guzaare<br>
            Mausami na samjho par ishq ko humaare<br>
            Nazron ke saamne main aata nahi tumhare<br>
            Magar rehte ho har pal manzar me tum humare<br>
            Agar ishq se hai mila Phir dard se kya gila<br>
            Iss dard mein zindagi khush haal hai<br>
            Yeh dooriyaan filhaal hain O...<br>
            Khairiyat pucho kabhi to kaifiyat pucho<br>
            Tumhare bin deewane ka kya haal hai<br>
            Dil mera dekho, na meri haisiyat pucho<br>
            Tere bin ek din jaise sau saal hai<br>
            Anjaam hai tay mera Hona tumhe hai mera<br>
            Jitni bhi hon dooriyan filhaal hain<br>
            Yeh dooriyaan filhaal hain`;
            break;
        case '9':
            lyricsTitle.innerHTML="Lyrics - Qaafirana<br><br>";
            lyrics.innerHTML=`
            in vaadiyon mein Takraa chuke hain<br>
            humse musafir yoon to kai<br>
            dil na lagaaya humne kisi se<br>
            qisse sune hain yoon to kai<br>
            aise tum mile ho,<br>
            aise tum mile ho<br>
            jaise mil rahi ho itr se hawa<br>
            qaafirana sa hai<br>
            ishq hai ya... kya hai?<br>
            khamoshiyon mein boli tumhaari<br>
            kuch is tarah goonjti hai<br>
            kaanon se mere hote hue wo<br>
            dil ka pata DhoonDhti hai<br>
            beswaadiyon mein, beswaadiyon mein<br>
            jaise mil raha ho koi zaayka<br>
            qaafirana sa hai<br>
            ishq hai ya... kya hai?`;
            break;
        case '10':
            lyricsTitle.innerHTML= "Lyrics - Lose Yourself<br><br>";
            lyrics.innerHTML=`
            Look... If you had... one shot... or one opportunity...<br>
            To seize everything you ever wanted... one moment...<br>
            Would you capture it? Or just let it slip?<br>
            Yo<br><br>

            [Verse 1]<br>
            His palms are sweaty, knees weak, arms are heavy<br>
            There's vomit on his sweater already, mom's spaghetti<br>
            He's nervous, but on the surface he looks calm and ready<br>
            to drops bombs, but he keeps on forgetting<br>
            what he wrote down, the whole crowd goes so loud<br>
            He opens his mouth but the words won't come out<br>
            He's chokin, how? Everybody's jokin now<br>
            The clock's run out, time's up, over - BLAOW!<br>
            Snap back to reality, OHH! there goes gravity<br>
            OHH! there goes Rabbit, he choked<br>
            He's so mad, but he won't<br>
            Give up that easy nope, he won't have it<br>
            He knows, his whole back's to these ropes<br>
            It don't matter, he's dope<br>
            He knows that, but he's broke<br>
            He's so sad that he knows<br>
            when he goes back to this mobile home, that's when it's<br>
            back to the lab again, yo, this whole rap shift<br>
            He better go capture this moment and hope it don't pass him<br><br>

            [Chorus]<br>
            You better - lose yourself in the music, the moment<br>
            You own it, you better never let it go (go)<br>
            You only get one shot, do not miss your chance to blow<br>
            This opportunity comes once in a lifetime<br>
            You better - lose yourself in the music, the moment<br>
            You own it, you better never let it go (go)<br>
            You only get one shot, do not miss your chance to blow<br>
            This opportunity comes once in a lifetime<br>
            You better..`;
            break;
        case '11':
            lyricsTitle.innerHTML="Lyrics - Khuda Jaane<br><br>";
            lyrics.innerHTML=`
            Sajde Mein Yun Hi Jhukta Hoon<br>
            Tum Pe Hi Aa Ke Rukhta Hoon<br>
            Kya Yeh Sab Ko Hota Hai<br><br>

            Hum Ko Kya Lena Hai Sab Se<br>
            Tum Se Hi Sab Baatein Ab Se<br>
            Ban Gaye Ho Tum Meri Dua<br><br>

            Sajde Mein Yun Hi Jhukta Hoon<br>
            Tum Pe Hi Aa Ke Rukhta Hoon<br>
            Kya Yeh Sab Ko Hota Hai<br><br>

            Hum Ko Kya Lena Hai Sab Se<br>
            Tum Se Hi Sab Baatein Ab Se<br>
            Ban Gaye Ho Tum Meri Dua<br>
            Khuda Jaane Ke Mein Fida Hoon<br>
            Khuda Jaane Mein Mitt Gaya<br>
            Khuda Jaane Yeh Kyun Hua Hai<br>
            Ke Ban Gaye Ho Tum Mere Khuda<br><br>

            Tu Kahe To Tere Hi Kadam Ke<br>
            Main Nishanon Pe<br>
            Chalun Rukun Ishaare Pe<br>
            Tu Kahe To Khwabon Ka Bana Ke<br>
            Main Bahana Sa<br>
            Mila Karun Sirhaane Pe<br>
            Ho Tum Pe Dil Ki Baatein Seekhi<br>
            Tum Se Hi Yeh Raahein Seekhi<br>
            Tum Pe Mar Ke Main To Jee Gaaya<br><br>

            Khuda Jaane Ke Mein Fida Hoon<br>
            Khuda Jaane Mein Mitt Gaya<br>
            Khuda Jaane Yeh Kyun Hua Hai<br>
            Ke Ban Gaye Ho Tum Mere Khud`;
            break;
        
        case '12':
            lyricsTitle.innerHTML="Lyrics - Jee Le Zaraa<br><br>";
            lyrics.innerHTML=`
            Main hoon gumsum tu bhi khamosh hai<br>
            Sach hai samay ka hi sab dosh hai<br>
            Dhadkan dhadkan ik gam rehta hai<br>
            Ho.. jaane kyyn phir bhi dil kehta hai<br><br>

            Jee le zara, jee le zara<br>
            Kehta hai dil, jee le zara<br>
            Aye humsafar, aye humnawaaz<br>
            Aa paas aa, jee le zara<br><br>

            Hai zindagi mana dard bhari<br>
            Phir bhi is mein yeh raahat bhi hai<br>
            Main hoon tera, aur tu hai meri<br>
            Yun hi rahein hum, yeh chahat bhi hai<br>
            Phir dil ke dil se, pul kyu toote hain<br>
            Kyun hum jeene se itne roothe hain<br>
            Aa dil ke darwaaze hum khole<br>
            Ho.. aa hum dono jee bhar ke ro lein<br><br>

            Jee le zara, jee le zara<br>
            Kehta hai dil, jee le zara<br>
            Aye humsafar, aye humnawaaz<br>
            Aa paas aa, jee le zara`;
            break;

        case '13':
            lyricsTitle.innerHTML="Lyrics - Tum Hi Ho<br><br>";
            lyrics.innerHTML=`
            Tumhi ho... Tumhi ho...<br>
            Tere liye hi jiya main<br>
            Khud ko jo yun de diya hai<br>
            Teri wafa ne mujhko sambhala<br>
            Saare ghamon ko dil se nikala<br>
            Tere saath mera hai naseeb juda<br>
            Tujhe paake adhoora naa raha hmm.. Kyunki tum hi ho<br>
            Ab tum hi ho<br>
            Zindagi ab tum hi ho..<br>
            Chain bhi, mera dard bhi<br>
            Meri aashiqui ab tum hi ho (x2)`;
            break;
    }
}


});
