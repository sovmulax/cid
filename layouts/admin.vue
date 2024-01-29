<template>
  <div>
    <div class="header-bg py-3">
      <header id="topnav">
        <div class="topbar-main">
          <div class="container-fluid py-3">
            <div class="logo">
              <a href="/admin" class="logo">
                <img class="w-12 object-contain" src="~/assets/img/logo.png" alt="Logo CID" />
              </a>
            </div>

            <div class="menu-extras topbar-custom">
              <ul class="navbar-right list-inline float-right mb-0">
                <li class="dropdown notification-list list-inline-item d-none d-md-inline-block">
                  <button class="text-danger rounded bg-white px-3 py-2" @click="logout">
                    <i class="mdi mdi-power text-danger"></i> Déconnexion
                  </button>
                </li>
              </ul>
            </div>

            <div class="clearfix"></div>
          </div>
        </div>

        <div class="navbar-custom">
          <div class="container-fluid">
            <div id="navigation">
              <ul class="navigation-menu">
                <li class="has-submenu">
                  <nuxt-link to="/admin/projets"><i class="ion ion-md-laptop"></i>Projets</nuxt-link>
                </li>
                <li class="has-submenu">
                  <nuxt-link to="/admin/clients"><i class="ion ion-md-business"></i>Entreprises</nuxt-link>
                </li>
                <li class="has-submenu">
                  <nuxt-link to="/admin/evenements"><i class="ion ion-md-calendar"></i>Agenda</nuxt-link>
                </li>
                <li class="has-submenu">
                  <nuxt-link to="/admin/actualites"><i class="ion ion-md-paper"></i>Actualités</nuxt-link>
                </li>
                <li class="has-submenu">
                  <nuxt-link to="/admin/membres"><i class="ion ion-md-people"></i>Membres</nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="page-title-box">
              <div class="row align-items-center">
                <div class="col-sm-6">
                  <h4 class="page-title">
                    <slot name="title-header" />
                  </h4>
                </div>
                <div class="col-sm-6">
                  <div class="d-none d-md-block float-right">
                    <div class="dropdown">
                      <slot name="btn-header" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="wrapper">
      <div class="container-fluid">
        <slot name="content" />
      </div>
    </div>

    <footer class="footer">
      <div class="container-fluid">
        <p>
          Développé par
          <a class="font-bold" href="https://sovmulax.me" target="_blank" rel="noopener noreferrer">sovmulax</a>
          x
          <a class="font-bold" href="https://marcaureln.com?ref=cid" target="_blank" rel="noopener noreferrer">
            marcaureln
          </a>
          x
          <a
            class="font-bold"
            href="https://konankouameaimefabrice.000webhostapp.com/index.php"
            target="_blank"
            rel="noopener noreferrer"
          >
            konan-fabrice
          </a>
        </p>
      </div>
    </footer>
    <NuxtSnackbar />
  </div>
</template>

<script lang="ts" setup>
const router = useRouter();
const user = useUserState();

useHead({
  link: [
    { rel: 'stylesheet', href: '/css/bootstrap.min.css' },
    { rel: 'stylesheet', href: '/css/style.css' },
    { rel: 'stylesheet', href: '/css/icons.css' },
  ],
  script: [
    { type: 'text/javascript', src: '/js/jquery.min.js' },
    { type: 'text/javascript', src: '/js/bootstrap.bundle.min.js' },
    { type: 'text/javascript', src: '/js/jquery.slimscroll.js' },
    { type: 'text/javascript', src: '/js/waves.min.js' },
    { type: 'text/javascript', src: '/js/app.js' },
  ],
});

function logout() {
  user.value = null;
  router.push('/admin/login');
}
</script>
