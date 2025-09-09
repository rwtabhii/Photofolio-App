import {db} from "../../src/firebaseinit.js"
import { addDoc, collection, getDocs,deleteDoc, doc } from "firebase/firestore";


// get the albums from the firebase/firestore
export const fetchAlbumsApi = async () => {
  const getAlbums = await getDocs(collection(db, "albums"));
  return getAlbums.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// add the album in the firebase/firestore
export const addAlbumApi = async(data)=>{
  console.log(data)
 const  addData = await addDoc(collection(db,"albums"),data);
  return {id:addData.id,name:data.name}
}

// delete the album form the firestore
export const deleteAlbumApi=async(id)=>{
    const dltAlbum = doc(db,"albums",id);
    await deleteDoc(dltAlbum);
}

