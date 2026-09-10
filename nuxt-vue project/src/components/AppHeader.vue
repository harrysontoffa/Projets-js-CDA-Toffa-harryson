<template>
    <div class="max-lg:collapse bg-base-200 lg:mb-48 shadow-sm w-full rounded-md">
  <input id="navbar-1-toggle" class="peer hidden" type="checkbox" />
  <label for="navbar-1-toggle" class="fixed inset-0 hidden max-lg:peer-checked:block"></label>
  <div class="collapse-title navbar">
    <div class="navbar-start">
      <label for="navbar-1-toggle" class="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <button class="btn btn-ghost text-xl">daisyUI</button>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><button> <router-link  to="/home">Acceuil</router-link></button></li>
        <li><button> <router-link  to="/interpolation">interpolation</router-link></button></li>
        <li><button> <router-link to="/userData">User</router-link></button></li>
        <li><button> <router-link to="/TpCount">Tp</router-link></button></li>
      </ul>
    </div>
    <div class="navbar-end">
      <input type="text" placeholder="Search" class="input w-64 lg:w-auto" />
    </div>
  </div>

  <div class="collapse-content lg:hidden z-1">
    <ul class="menu">
      <li><button>Item 1</button></li>
      <li>
        <button>Parent</button>
        <ul>
          <li><button>Submenu 1</button></li>
          <li><button>Submenu 2</button></li>
        </ul>
      </li>
      <li><button>Item 3</button></li>
    </ul>
  </div>
</div>
</template>