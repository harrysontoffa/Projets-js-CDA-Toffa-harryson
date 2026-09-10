<template>
  <div class="overflow-x-auto">
    <table class="table table-zebra w-full">
      <!-- En-tête (2 colonnes) -->
      <thead>
        <tr>
          <th class="w-1/2">Variables</th>
          <th class="w-1/2">Valeurs</th>
        </tr>
      </thead>
      <!-- Corps du tableau (13 lignes) -->
      <tbody>
        <tr>
          <td>unLivre</td>
          <td>{{ unLivre }}</td>
        </tr>
        <tr>
          <td>isOnline</td>
          <td>{{ isOnline }}</td>
        </tr>
        <tr>
          <td>unNombre</td>
          <td>{{ unNombre }}</td>
        </tr>
        <tr>
          <td>unTableau</td>
          <td>{{ unTableau }}</td>
        </tr>
        <tr>
          <td>unOjet</td>
          <td>{{ unObjet }}</td>
        </tr>
        <tr>
          <td>unObjet.name</td>
          <td>
            <span class="badge badge-accent">{{ unObjet.name }}</span>
          </td>
        </tr>
        <tr>
          <td>unObjet['name']</td>
          <td>
            <span class="badge badge-accent">{{ unObjet["name"] }}</span>
          </td>
        </tr>
        <tr>
          <td>unObjet.tel</td>
          <td>
            <span class="badge badge-accent">{{ unObjet.tel }}</span>
          </td>
        </tr>
        <tr>
          <td>fonctionTest()</td>
          <td>{{ fonctionTest() }}</td>
        </tr>
        <tr>
          <td>une temaire pour la route</td>
          <td>
            <span class="badge badge-accent">{{ unObjet.name }}</span>
          </td>
        </tr>
        <tr>
          <td>on affiche du HTML</td>
          <td>{{ duHTMLTemplate }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const unLivre = ref("Les mémoires de Steven Seagal");
const unTableau = ref(["du texte", 99]);
const unNombre = ref(1234567890);
// Avec les ref pour accéder on a une propriété value
unNombre.value = 8888;
const isOnline = ref(false);
isOnline.value = true;

const unObjet = ref({
  name: "COOL",
  tel: "060503030",
});

const fonctionTest = () => {
  return "Hello World";
};
// Mais le html sera pas interprété on verra ca avec la directive v-html
const duHTMLTemplate = ref("<h1>Du HTML</h1>");


</script>
