<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div class="container-fluid">
        <img href="<%= BASE_URL %>favicon.ico" alt="imagen">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Sobre Mi</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/ToolsLenguage" class="nav-link">Herramientas</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/jobProfile" class="nav-link">Perfil Laboral</router-link>
            </li>
          </ul>
          <ul class="navbar-nav mb-2 mb-lg-0 d-flex ms-auto">
            <li class="nav-item">
              <button class="btn btn-success">Contactame</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <style scoped>
  /* Estilos para el enlace activo */
  .nav-link.router-link-active {
    color: #28a745 !important; /* Color verde con !important */
    font-weight: bold; /* Texto en negrita */
  }
  </style>
  