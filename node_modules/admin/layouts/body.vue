<template>
  <div>
    <div class="header-bg">
      <!-- Navigation Bar-->
      <header id="topnav">
        <div class="topbar-main">
          <div class="container-fluid">
            <!-- Logo container-->
            <div class="logo">
              <a href="index.html" class="logo">
                <img src="images/logo-sm.png" alt="" class="logo-small" />
                <img src="images/logo-light.png" alt="" class="logo-large" />
              </a>
            </div>
            <!-- End Logo container-->

            <div class="menu-extras topbar-custom">
              <ul class="navbar-right list-inline float-right mb-0">
                <li class="dropdown notification-list list-inline-item d-none d-md-inline-block">
                  <form role="search" class="app-search">
                    <div class="form-group mb-0">
                      <input type="text" class="form-control" placeholder="Search.." />
                      <button type="submit"><i class="fa fa-search"></i></button>
                    </div>
                  </form>
                </li>

                <li class="dropdown notification-list list-inline-item">
                  <div class="dropdown notification-list nav-pro-img">
                    <a
                      class="dropdown-toggle nav-link arrow-none nav-user"
                      data-toggle="dropdown"
                      href="#"
                      role="button"
                      aria-haspopup="false"
                      aria-expanded="false"
                    >
                      <img src="images/users/user-4.jpg" alt="user" class="rounded-circle" />
                    </a>
                    <div class="dropdown-menu dropdown-menu-right profile-dropdown">
                      <a class="dropdown-item text-danger" href="#"
                        ><i class="mdi mdi-power text-danger"></i> Deconnexion</a
                      >
                    </div>
                  </div>
                </li>

                <li class="menu-item list-inline-item">
                  <!-- Mobile menu toggle-->
                  <a class="navbar-toggle nav-link">
                    <div class="lines">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </a>
                  <!-- End mobile menu toggle-->
                </li>
              </ul>
            </div>
            <!-- end menu-extras -->

            <div class="clearfix"></div>
          </div>
          <!-- end container -->
        </div>
        <!-- end topbar-main -->

        <!-- MENU Start -->
        <div class="navbar-custom">
          <div class="container-fluid">
            <div id="navigation">
              <!-- Navigation Menu-->
              <ul class="navigation-menu">
                <li class="has-submenu">
                  <nuxt-link to="/"><i class="ion ion-md-home"></i>Accueil</nuxt-link>
                </li>
                <li class="has-submenu">
                  <nuxt-link to="/projects"><i class="ion ion-md-laptop"></i>Gestion de Projets</nuxt-link>
                </li>
                <li class="has-submenu">
                  <nuxt-link to="/clients"><i class="ion ion-md-business"></i>Entreprises</nuxt-link>
                </li>
                <li class="has-submenu">
                  <nuxt-link to="/events"><i class="ion ion-md-calendar"></i>Agenda / Évenements</nuxt-link>
                </li>
                <li class="has-submenu">
                  <nuxt-link to="/post"><i class="ion ion-md-paper"></i>Actualités</nuxt-link>
                </li>
                <li class="has-submenu">
                  <nuxt-link to="/members"><i class="ion ion-md-people"></i>Membres</nuxt-link>
                </li>
              </ul>
              <!-- End navigation menu -->
            </div>
            <!-- end #navigation -->
          </div>
          <!-- end container -->
        </div>
        <!-- end navbar-custom -->
      </header>
      <!-- End Navigation Bar-->

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
                  <div class="float-right d-none d-md-block">
                    <div class="dropdown"></div>
                  </div>
                </div>
                <!-- end col-->
              </div>
              <!-- end row-->
            </div>
            <!-- end page title -->
          </div>
          <!-- end col -->
        </div>
        <!-- end row-->
      </div>
    </div>

    <!-- page wrapper start -->
    <div class="wrapper">
      <div class="container-fluid">
        <slot name="content" />
      </div>
      <!-- end container-fluid -->
    </div>
    <!-- page wrapper end -->

    <!-- Footer -->
    <footer class="footer">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <span class="d-none d-sm-inline-block">
              Made with <i class="mdi mdi-heart text-danger"></i> by InputStudio X Sovmulax</span
            >
          </div>
        </div>
      </div>
    </footer>
    <!-- End Footer -->
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
