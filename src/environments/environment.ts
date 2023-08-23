import { initializeApp } from 'firebase/app';

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyD3oU5sbXqBApxo5-arsmuDtUTF7bTaVVc',
    authDomain: 'auth-firebase-e0c5c.firebaseapp.com',
    projectId: 'auth-firebase-e0c5c',
    storageBucket: 'auth-firebase-e0c5c.appspot.com',
    messagingSenderId: '574659681494',
    appId: '1:574659681494:web:bd295a2e0d1bd1e3083d77'
  }
};
// Initialise Firebase
const app = initializeApp(environment.firebaseConfig);

/*
 * Pour faciliter le débogage en mode développement, vous pouvez importer le fichier suivant
 * pour ignorer les traces d'erreur liées à la zone telles que `zone.run`, `zoneDelegate.invokeTask`.
 *
 * Cet import doit être mis en commentaire en mode production car il aura un impact négatif
 * sur les performances s'il y a une erreur.
 */
// import 'zone.js/plugins/zone-error';  // Inclus avec Angular CLI.
