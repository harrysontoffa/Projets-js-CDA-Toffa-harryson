<template>
  <div class="mx-auto max-w-md p-4 md:p-8">
    <h1 class="text-3xl font-bold text-center mb-6 text-primary">
      Se Connecter
    </h1>

    <div class="card bg-base-100 shadow-2xl border border-secondary/50">
      <div class="card-body">

        <!-- Message d'erreur -->
        <div v-if="errorMessage" class="alert alert-error mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{{ errorMessage }}</span>
        </div>

        <form @submit.prevent="login" class="space-y-4">
          <div class="form-control">
            <label class="label" for="email">
              <span class="label-text">Adresse Email</span>
            </label>
            <input
              type="email"
              v-model="email"
              id="email"
              class="input input-bordered w-full"
              placeholder="votre@email.com"
              required
            />
          </div>

          <div class="form-control">
            <label class="label" for="password">
              <span class="label-text">Mot de passe</span>
            </label>
            <input
              type="password"
              v-model="password"
              id="password"
              class="input input-bordered w-full"
              placeholder="Entrez votre mot de passe"
              required
            />
          </div>

          <div class="card-actions justify-end pt-4">
            <button type="submit" class="btn btn-primary w-full" :disabled="loading">
              <span v-if="loading" class="loading loading-spinner"></span>
              <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3-3h-9m6 6l3-3m0 0l-3-3" />
              </svg>
              {{ loading ? 'Connexion en cours...' : 'Se connecter' }}
            </button>
          </div>
        </form>
      </div>
    </div>

    <p class="text-center mt-6 text-sm opacity-80">
      Vous n'avez pas encore de compte ?
      <router-link to="/register" class="link link-hover link-secondary font-semibold">
        Inscrivez-vous
      </router-link>.
    </p>
  </div>
</template>

<script setup lang="js">
import { ref } from "vue";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
import { auth } from "../firebase";

const email = ref("");
const password = ref("");
const loading = ref(false);
const errorMessage = ref("");
const router = useRouter();

async function login() {
  errorMessage.value = "";
  loading.value = true;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
    console.log("Utilisateur connecté :", userCredential.user);
    router.push("/home");
  } catch (error) {
    console.error("Erreur Firebase Auth:", error);
    switch (error.code) {
      case "auth/invalid-email":
        errorMessage.value = "Adresse email invalide.";
        break;
      case "auth/user-not-found":
      case "auth/wrong-password":
      case "auth/invalid-credential":
        errorMessage.value = "Email ou mot de passe incorrect.";
        break;
      case "auth/too-many-requests":
        errorMessage.value = "Trop de tentatives. Veuillez réessayer plus tard.";
        break;
      default:
        errorMessage.value = "Erreur de connexion : " + error.message;
    }
  } finally {
    loading.value = false;
  }
}
</script>