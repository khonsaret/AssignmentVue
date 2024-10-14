<template>
  <header class="header_section gradient-background">
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg custom_nav-container">
        <a class="navbar-brand" href="index.html">
          <span> {{ $t("tlogo") }} </span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class=""> </span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item" :class="{ active: $route.path == '/' }">
              <router-link to="/" class="nav-link">{{ $t("home") }}
                <span class="sr-only">(current)</span>
              </router-link>
            </li>
            <li class="nav-item" :class="{ active: $route.path == '/course' }">
              <router-link to="/course" class="nav-link">{{ $t("course") }}</router-link>
            </li>
            <li class="nav-item" :class="{ active: $route.path == '/about' }">
              <router-link to="/about" class="nav-link"> {{ $t("about") }}</router-link>
            </li>
            <li class="nav-item" :class="{ active: $route.path == '/process' }">
              <router-link to="/process" class="nav-link">{{ $t("process") }}</router-link>
            </li>
            <li class="nav-item" :class="{ active: $route.path == '/hosting' }">
              <router-link to="/hosting" class="nav-link">{{ $t("hosting") }}</router-link>
            </li>            
            <li>
              <button @click="changeLng" class="bg-danger"><i class="flag-icon flag-icon-kh flag-icon-squared" aria-hidden="true"></i> KH</button>
            </li>            
            <li>
              <button @click="changeLng" class="bg-danger"><i class="flag-icon flag-icon-gb flag-icon-squared" aria-hidden="true"></i> EN</button>
            </li>
            <form class="form-inline">
              <button class="btn my-2 my-sm-0 nav_search-btn" type="submit">
                <i class="fa fa-search" aria-hidden="true"></i>
              </button>
            </form>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "App",
  methods: {
    changeLng() {
      console.log(this.$i18n.locale);
      if (this.$i18n.locale == "en") {
        this.$i18n.locale = "khm";
      } else {
        this.$i18n.locale = "en";
      }
    },
  },
};
</script>