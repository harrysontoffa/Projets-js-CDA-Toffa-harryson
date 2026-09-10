<template>
    <div class="flex flex-col mt-8 mx-auto my-auto mb-8 w-max h-max px-10 py-10 justify-center items-center gap-3 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
            <div class="w-max h-max font-bold">Dynamique styling (Class) </div>
            <div class="flex flex-col gap-3">
                <div class="flex gap-10">
                    <button id="carte1" @click="styling1" class=" border-1 px-3 py-2 rounded-sm">Carte 1 via style</button>
                    <button id="carte2" @click="styling2" class=" border-1 px-3 py-2 rounded-sm">Carte 2 via style</button>
                </div>

                <div class="flex gap-10">
                    <button id="carte3" @click="styling3" class=" border-1 px-3 py-2 rounded-sm">Carte 3 via style</button>
                    <button id="carte4" @click="styling4" class=" border-1 px-3 py-2 rounded-sm">Carte 4 via style</button>
                </div>
            </div>
    </div>
</template>

<script setup lang="js">
function styling1(){
    const color =  "blue"
  const button1 = document.getElementById('carte1')
//   button1.classList.toggle("bg-red-600")
  button1.classList.toggle(`bg-${color}-600`)
}
function styling2(){
    const color =  "pink"
  const button2 = document.getElementById('carte2')
//   button2.classList.toggle("bg-blue-600")
  button2.classList.toggle(`bg-${color}-600`)
}
function styling3(){
    const color =  "green"
  const button3 = document.getElementById('carte3')
//   button3.classList.toggle("bg-yellow-600")
  button3.classList.toggle(`bg-${color}-600`)
}
function styling4(){
    const color =  "yellow"
  const button4 = document.getElementById('carte4')
//   button4.classList.toggle("bg-green-600")
  button4.classList.toggle(`bg-${color}-600`)
}
</script>