<script>
export default {
  name: "AppHeader",
};
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">Book Library</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link" :to="{ name: 'home' }"
            >Home</router-link
          >
          <router-link class="nav-link" :to="{ name: 'books' }"
            >Books</router-link
          >
          <router-link class="nav-link" :to="{ name: 'about-us' }"
            >About Us</router-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<style></style>
