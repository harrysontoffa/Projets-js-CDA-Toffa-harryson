<template>
  <div class="list-articles">
    <h2>Liste des articles</h2>

    <div class="actions">
      <button class="danger" @click="removeAll">Supprimer tous les articles</button>
    </div>

    <p v-if="articles.length === 0" class="empty">Aucun article pour le moment.</p>

    <ul v-else>
      <li v-for="article in articles" :key="article.id" class="article-card">
        <div v-if="editingId !== article.id">
          <h3>{{ article.title }}</h3>
          <p class="author">✍️ {{ article.author }}</p>
          <p class="content">{{ article.content }}</p>
          <div class="card-actions">
            <button class="edit" @click="startEdit(article)">Modifier</button>
            <button class="danger" @click="removeArticle(article.id)">Supprimer</button>
          </div>
        </div>

        <!-- Formulaire d'édition inline -->
        <div v-else class="edit-form">
          <input v-model="editData.title" placeholder="Titre" />
          <input v-model="editData.author" placeholder="Auteur" />
          <textarea v-model="editData.content" rows="3" placeholder="Contenu"></textarea>
          <div class="card-actions">
            <button class="save" @click="saveEdit(article.id)">Enregistrer</button>
            <button @click="cancelEdit">Annuler</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="js">
import { ref, onMounted, onUnmounted } from "vue";
import ArticleDataService from "../services/ArticleDataService";

const articles = ref([]);
const editingId = ref(null);
const editData = ref({ title: "", author: "", content: "" });

let unsubscribe = null;

onMounted(() => {
  // onValue retourne une fonction de désabonnement
  unsubscribe = ArticleDataService.getAll((snapshot) => {
    const data = snapshot.val();
    if (data) {
      articles.value = Object.entries(data).map(([id, val]) => ({ id, ...val }));
    } else {
      articles.value = [];
    }
  });
});

onUnmounted(() => {
  if (unsubscribe) unsubscribe();
});

function removeArticle(id) {
  ArticleDataService.delete(id);
}

function removeAll() {
  if (confirm("Supprimer TOUS les articles ?")) {
    ArticleDataService.deleteAll();
  }
}

function startEdit(article) {
  editingId.value = article.id;
  editData.value = { title: article.title, author: article.author, content: article.content };
}

function cancelEdit() {
  editingId.value = null;
}

function saveEdit(id) {
  ArticleDataService.update(id, editData.value).then(() => {
    editingId.value = null;
  });
}
</script>

<style scoped lang="css">
.list-articles {
  max-width: 700px;
  margin: 1rem auto;
  padding: 1.5rem;
}

h2 {
  color: #333;
  margin-bottom: 1rem;
}

.actions {
  margin-bottom: 1rem;
}

.empty {
  color: #999;
  font-style: italic;
}

ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.article-card {
  padding: 1rem 1.25rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
}

.article-card h3 {
  margin: 0 0 0.25rem;
  color: #222;
}

.author {
  font-size: 0.85rem;
  color: #888;
  margin: 0 0 0.5rem;
}

.content {
  color: #444;
  margin: 0 0 0.75rem;
}

.card-actions {
  display: flex;
  gap: 0.5rem;
}

button {
  padding: 0.4rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.2s;
}

button.edit {
  background: #4a90d9;
  color: white;
}

button.edit:hover {
  background: #357abd;
}

button.danger {
  background: #e74c3c;
  color: white;
}

button.danger:hover {
  background: #c0392b;
}

button.save {
  background: #42b883;
  color: white;
}

button.save:hover {
  background: #369870;
}

button:not(.edit):not(.danger):not(.save) {
  background: #e0e0e0;
  color: #333;
}

.edit-form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.edit-form input,
.edit-form textarea {
  padding: 0.45rem 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 0.95rem;
}

.edit-form input:focus,
.edit-form textarea:focus {
  border-color: #42b883;
  outline: none;
}
</style>

