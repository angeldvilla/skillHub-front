import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

// FIREBASE
export const getUsers = createAsyncThunk("users/getUsers", async () => {
  try {
    const usersRef = collection(db, "users");
    const snapshot = await getDocs(usersRef);
    const usersData = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return usersData;
  } catch (error) {
    console.error("Something went wrong:", error);
    throw error;
  }
});

export const getUser = createAsyncThunk("users/getUser", async (id) => {
  try {
    const userRef = doc(collection(db, "users"), id);
    const snapshot = await getDoc(userRef);
    if (snapshot.exists()) {
      return { id: snapshot.id, ...snapshot.data() };
    } else {
      throw new Error("User not found.");
    }
  } catch (error) {
    console.error("Something went wrong:", error);
    throw error;
  }
});

export const postUser = createAsyncThunk("users/postUser", async (userData) => {
  try {
    const docRef = await addDoc(collection(db, "users"), userData);
    return docRef;
  } catch (error) {
    throw new Error(error);
  }
});

export const userLogin = createAsyncThunk(
  "users/userLogin",
  async (userData) => {
    const { data } = await axios.post(
      "http://localhost:3002/user/login",
      userData
    );
    return data;
  }
);

// MONGO
export const getUsersFromMongo = createAsyncThunk(
  "users/getUsersFromMongo",
  async () => {
    try {
      const { data } = await axios.get("http://localhost:3002/user");
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const postUserToMongo = createAsyncThunk(
  "users/postUserToMongo",
  async (userData) => {
    const { data } = await axios.post(
      "http://localhost:3002/user/register",
      userData
    );
    return data;
  }
);
