import { ref } from 'vue';
import  axios  from 'axios'
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import firebaseApp from '~/firebaseConfig'; // Uprav cestu k súboru s konfiguráciou

const db = getFirestore(firebaseApp);

const data = ref([]);

const saveDataToFirestore = async (data) => {
  const dataCollection = collection(db, 'nft_collection'); // Uprav názov kolekcie

  for (const item of data) {
    await addDoc(dataCollection, item);
  }
};

const fetchData = async () => {
  try {
    const response = await axios.get('https://api-mainnet.magiceden.dev/v2/marketplace/popular_collections');
    data.value = response.data;
    await saveDataToFirestore(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};



const fetchDataFromFirestore = async () => {
  const dataCollection = collection(db, 'nft_collection'); // Uprav názov kolekcie
  const querySnapshot = await getDocs(dataCollection);

  data.value = querySnapshot.docs.map((doc) => doc.data());
  
};


export { data, fetchData, fetchDataFromFirestore };