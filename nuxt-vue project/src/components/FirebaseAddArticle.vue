<template>
  <div class="add-article">
    <h2>Ajouter un article</h2>
    <form @submit.prevent="submitArticle">
      <div class="form-group">
        <label for="title">Titre</label>
        <input
          id="title"
          v-model="article.title"
          type="text"
          placeholder="Titre de l'article"
          required
        />
      </div>
      <div class="form-group">
        <label for="content">Contenu</label>
        <textarea
          id="content"
          v-model="article.content"
          placeholder="Contenu de l'article"
          rows="4"
          required
        ></textarea>
      </div>
      <div class="form-group">
        <label for="author">Auteur</label>
        <input
          id="author"
          v-model="article.author"
          type="text"
          placeholder="Auteur"
          required
        />
      </div>
      <div class="form-actions">
        <button type="submit">Ajouter</button>
        <button type="button" @click="resetForm">Réinitialiser</button>
      </div>
    </form>
    <p v-if="message" class="message">{{ message }}</p>
  </div>
</template>

<script setup lang="js">
import { ref } from "vue";
import ArticleDataService from "../services/ArticleDataService";

const article = ref({
  title: "",
  content: "",
  author: "",
});

const message = ref("");

function submitArticle() {
  ArticleDataService.create(article.value)
    .then(() => {
      message.value = "Article ajouté avec succès !";
      resetForm();
    })
    .catch((err) => {
      message.value = "Erreur : " + err.message;
    });
}

function resetForm() {
  article.value = { title: "", content: "", author: "" };
}
</script>

<style scoped lang="css">
.add-article {
  max-width: 600px;
  margin: 1rem auto;
  padding: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fafafa;
}

h2 {
  margin-bottom: 1rem;
  color: #333;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

label {
  font-weight: bold;
  margin-bottom: 0.3rem;
  color: #555;
}

input,
textarea {
  padding: 0.5rem 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 0.95rem;
  transition: border-color 0.2s;
}

input:focus,
textarea:focus {
  border-color: #42b883;
  outline: none;
}

.form-actions {
  display: flex;
  gap: 0.75rem;
}

button {
  padding: 0.5rem 1.2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.95rem;
  transition: background 0.2s;
}

button[type="submit"] {
  background: #42b883;
  color: white;
}

button[type="submit"]:hover {
  background: #369870;
}

button[type="button"] {
  background: #e0e0e0;
  color: #333;
}

button[type="button"]:hover {
  background: #c8c8c8;
}

.message {
  margin-top: 0.75rem;
  color: #42b883;
  font-weight: bold;
}
</style>

