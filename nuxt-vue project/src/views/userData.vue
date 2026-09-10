<template>
    <div class="container flex-col w-max h-max border-1-grey-400 shadow-[0_0_20px_rgba(0,0,0,0.15)] mx-auto my-auto rounded-sm px-10 py-10">
        <P>Tp-Databinding: Profil utilisateur (interpolation + V-bind)</P>
        <div class="border-1 rounded-full w-20 h-20 bg-blue-600"></div>
        <p class="font-bold">{{ nameUser }}</p>
        <input type="text" :placeholder= "`${nameUser}`" class="border-1 px-2 py-2" >
        <p>Age: <span>{{ ageUser }}</span></p>
        <p>Age+10:  <span>{{ augmenterAge() }}</span></p>
        <p>NB Fétiche : <span>{{ nombreRandom() }}</span></p>
    </div>
</template>

<script setup lang="js">
    const nameUser =  'Dr Mario';
    const ageUser =  30;
    const imageUser  = 'https://static.wikia.nocookie.net/superuniverse64/images/f/fc/MARIO_CURSE.png/revision/latest/scale-to-width-down/340?cb=20230422125040'

    const augmenterAge = () => {
    // Avec les ref on peut accéder à leur value
    // Voyez ref comme une sorte de conteneur réactif de vue pour les variables
    return ageUser + 10;
    }
    //const nombreRandom = ref(Date.now()) // ou Math.floor(Math.random() * 100)
    const nombreRandom = () => {
    // return new Date.now();
    return Math.random();
}
</script>