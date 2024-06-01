function regle()
{
alert("Bienvenu(e) dans le jeu du pendu réalisé par Emmanuel SOUWOUIN.\n Les règles sont très facile.\n Vous inscrivez des lettres dans le cadre 'lettres à tester' afin de deviner le mot caché. Si la lettre écrite est dans le mot, elle apparaîtra. Si celle-ci n'est pas dans le mot, une faute sera comptée. Au bout de dix erreurs vous serez pendu 'Haut et court'. Vous avez également la possibilité d'inscrire le mot complet (en cas d'erreur, il vous sera compté une faute). \n Si vous ne voulez pas utiliser votre clavier, utiliser le 'pavé', il suffit tout simplement de cliquer sur la lettre désirée avec votre souris.\n Bon jeu à tous!");


}

var mots = ['ALIMENT' , 'ENFANT' , 'CHENILLE', 'ABEILLE', 'NAGER', 'COURIR','ARTISTE','JOUEUR','EXHIBER','SOURIRE'];

var mot_secret, taille_mot_secret, nombre_coups , lettre_trouvees , lettres_fausses , fin = false ;
var tab_mot_secret = [];

function traitement ()
{

}

mot_secret=mots[now.getSeconds() % mots.length];
taille_mot_secret = mot_secret.length();


function mot()
{
    for(var i=0; i<taille_mot_secret; i++)
    {
        document.write("<td> <p id=\""+i+"\">"+ mot_secret.charAt(i)+"</p></td>");
    
    } 
}