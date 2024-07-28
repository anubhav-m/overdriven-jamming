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
        default:
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
    }
}


});
