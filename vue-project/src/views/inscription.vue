<template>
    <div class="hero bg-base-200 min-h-screen">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold">Login now!</h1>
      <p class="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div class="card-body">
        <fieldset class="fieldset">
          <label class="label">Nom d'utilisateur</label>
          <input  v-model="nomUser"  type="text" class="input" placeholder="nom Utilisateur"  autocomplete="off"/>
          <p class="text-red-500 font-bold">{{ conditionNom }}</p>
          <label class="label">Adresse Email</label>
          <input v-model="email" type="text" class="input" placeholder="Email" autocomplete="off"/>
          <p class="text-red-500 font-bold">{{ conditionMail }}</p>
          <label class="label">Mot de passe</label>
          <input v-model="password" type="password" class="input" placeholder="Password" />

          <ul class="flex flex-col gap-4" v-if="true" >
            <li v-for="password in password" >{{ conditionPassword }}</li>
          </ul>
         

          <label class="label">Confirmer le mot de passe</label>
          <input v-model="confPassword" type="password" class="input" placeholder="Password" />
          <p class="text-red-500 font-bold">{{ conditionConfPassword }}</p>
          <div class="flex gap-6" ><div class="h-4 w-4 rounded-sm border "></div> <p>J'accepte les conditions générales</p> </div>
          <button class="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </div>
    </div>
  </div>
</div>
</template>

<script setup lang="js">


import { ref, computed, watch } from 'vue';

const email = ref('')
const nomUser = ref('')
const password = ref('')
const confPassword = ref('')
 const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 const regexNomUser = /^[a-zA-Z0-9_]{3,10}$/
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).{8,}$/
 





 const conditionNom = computed(()=>{
    
    if(nomUser.value.length === 0 ){
        return ''
    }

    else if(nomUser.value && regexNomUser.test(nomUser.value)){
        
        return "Nom valide"
    }
    else if(nomUser.value && !regexNomUser.test(nomUser.value)){
        return "Nom invalide"
    }

 });

 const conditionMail = computed(()=>{
    if(email.value.length === 0 ){
        return ''
    }

    else if(email.value && regexEmail.test(email.value)){
        return "Valide email"
    }
    else if(email.value && !regexEmail.test(email.value)){
        return "email invalide"
    }
 });
    



const conditionPassword = computed (()=>{
    if(password.value.length === 0){
        return ''
    }
    else if(password.value && regexPassword.test(password.value)){
        
        return "mots de passe valide"
    }
    else if(password.value && !regexPassword.test(password.value)){
        return "Mots de passe invalide"
    }
})

const conditionConfPassword = computed(()=>{
    if(!password.value){
        return ''
    }
    else if(password.value && confPassword.value && password.value !== confPassword.value){
        return "Mots de passe non identique"
    }
    else if( password.value && confPassword.value && password.value === confPassword.value){
        return "Mots de passes identique"
    }

})


 

</script>