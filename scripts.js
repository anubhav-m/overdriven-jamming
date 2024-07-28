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
            ishq hai ya... kya hai?`
    }
}


});
