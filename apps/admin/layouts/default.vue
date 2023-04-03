<template>
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
                    <!-- item-->
                    <a class="dropdown-item" href="#"><i class="mdi mdi-account-circle"></i> Profile</a>
                    <a class="dropdown-item" href="#"><i class="mdi mdi-wallet"></i> My Wallet</a>
                    <a class="dropdown-item d-block" href="#"
                      ><span class="badge badge-success float-right">11</span
                      ><i class="mdi mdi-settings"></i> Settings</a
                    >
                    <a class="dropdown-item" href="#"><i class="mdi mdi-lock-open-outline"></i> Lock screen</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item text-danger" href="#"><i class="mdi mdi-power text-danger"></i> Logout</a>
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
                <a href="index.html"><i class="ion ion-md-business"></i>Entreprises</a>
              </li>
              <li class="has-submenu">
                <a href="index.html"><i class="ion ion-md-calendar"></i>Agenda / Évenements</a>
              </li>
              <li class="has-submenu">
                <a href="index.html"><i class="ion ion-md-paper"></i>Actualités</a>
              </li>
              <li class="has-submenu">
                <a href="index.html"><i class="ion ion-md-people"></i>Membres</a>
              </li>
              <li class="has-submenu">
                <a href="index.html"><i class="ion ion-md-laptop"></i>Gestion de Projets</a>
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
                <h4 class="page-title">Dashboard</h4>
                <ol class="breadcrumb">
                  <li class="breadcrumb-item active">Welcome to Veltrix Dashboard</li>
                </ol>
              </div>
              <div class="col-sm-6">
                <div class="float-right d-none d-md-block">
                  <div class="dropdown">
                    <button
                      class="btn btn-danger dropdown-toggle arrow-none waves-effect waves-light"
                      type="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="mdi mdi-settings mr-2"></i> Settings
                    </button>
                  </div>
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
  <div>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
