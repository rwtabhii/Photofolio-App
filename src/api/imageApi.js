import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  setDoc,
  Timestamp,
  query,
  orderBy,
  doc,
} from "firebase/firestore";
import { db } from "../../src/firebaseinit.js";

// fetch images for an album
export const fetchImagesApi = async (albumId) => {
  const ref = collection(db, "albums", albumId, "images");
  const snapshot = await getDocs(query(ref, orderBy("created", "desc")));
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
};

// add image
export const addImageApi = async (albumId, { title, url }) => {
  const newRef = await addDoc(collection(db, "albums", albumId, "images"), {
    title,
    url,
    created: Timestamp.now(),
  });
  return { id: newRef.id, title, url };
};

// update image
export const updateImageApi = async (albumId, imageId, { title, url }) => {
  const ref = doc(db, "albums", albumId, "images", imageId);
  await setDoc(ref, { title, url, created: Timestamp.now() });
  return { id: imageId, title, url };
};

// delete image
export const deleteImageApi = async (albumId, id) => {
  await deleteDoc(doc(db, "albums", albumId, "images", id));
};
