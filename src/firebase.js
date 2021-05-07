import firebase from '@firebase/app';
import 'firebase/firestore';
import 'firebase/firebase-auth';
import 'firebase/storage';
// Initialize Firebase
const config = {
	apiKey: 'AIzaSyBpX_AKYedJ2OU52x2jTyxbMc2uN7oWXYg',
	authDomain: 'shop-67.firebaseapp.com',
	projectId: 'shop-67',
	storageBucket: 'shop-67.appspot.com',
	messagingSenderId: '442106326093',
	appId: '1:442106326093:web:f7c1a95fc0e9acdda74004',
	measurementId: 'G-SQZNG78FSP',
};

const fb = firebase.initializeApp(config);

const db = firebase.firestore();

export { fb, db };
