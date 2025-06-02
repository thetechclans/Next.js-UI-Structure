// // utils/log-error-to-firebase.ts
// import { ref, push } from "firebase/database";
// import { db } from "@/lib/firebase";

// export async function logErrorToFirebase(errorPayload: any) {
//   try {
//     const logRef = ref(db, "apiErrors");
//     await push(logRef, {
//       ...errorPayload,
//       timestamp: new Date().toISOString(),
//     });
//   } catch (e) {
//     console.error("Failed to log to Firebase:", e);
//   }
// }
