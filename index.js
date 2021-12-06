function goUp(folder, iterations) {
    return folder.split("/").slice(0, -iterations).join("/");
}
 
let resultat = goUp("/Users/Thibh/Desktop/Dossier_01/Tutoriel/Udemy", 3);