<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-primary">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Navbar</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-lg-0">
         
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" aria-current="page" to="/user">Users</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" aria-current="page" to="/blog">Blog</router-link>
          </li>
        </ul>
        <form  class="d-flex input-group w-auto">
          <input
            type="search"
            class="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
            v-model="searchVal"
          />
          <button class="input-group-text border-0" id="search-addon">
            <i class="fas fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  </nav>
</template>