<template>
  <ul class="nav-menu">
    <li v-for="(item, index) in navLinks" :key="index" class="nav-menu__item">
      <NuxtLink class="nav-menu__link nav-menu__link--ltr" :to="item.link">
        {{ item.title }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup>
const navLinks = [
  {
    title: "Home",
    link: "/",
  },
  { title: "About", link: "/about" },
  {
    title: "Solutions",
    link: "/solutions",
    // if using a submenu the hover key is also needed
    // hover: false,
    // submenu: [
    //   { title: "Web Design & Development", link: "/web-design" },
    //   {
    //     title: "Review Repuration Management",
    //     link: "/review-management",
    //   },
    //   { title: "Branding", link: "/branding" },
    // ],
  },
  {
    title: "Portfolio",
    link: "/portfolio",
  },
  { title: "Contact", link: "/contact" },
];
</script>

<style lang="scss" scoped>
.nav-menu {
  display: flex;
  justify-content: center;
  align-content: center;
  &__item {
    align-self: center;
  }
  &__link {
    display: inline-block;
    text-transform: uppercase;
    opacity: 0.8;
    transition: $transition;
    position: relative;
    padding: 15px 0;
    margin: 0 20px;
    &:link,
    &:visited {
      color: $header-font-color;
    }
    &:hover,
    &:active {
      opacity: 1;
    }

    &::before {
      transition: 300ms;
      height: 5px;
      content: "";
      position: absolute;
      background-color: $secondary-color;
    }
    &.nuxt-link-exact-active::before {
      width: 100%;
    }

    &--ltr {
      &::before {
        width: 0%;
        bottom: 10px;
      }
      &:hover::before {
        width: 100%;
      }
    }
  }
}
.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: all 0.1s ease-in-out;
}
.dropdown-fade-enter,
.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>
