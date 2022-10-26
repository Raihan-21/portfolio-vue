<template>
  <nav
    class="site-header py-6 font-semibold"
    :class="isScrolled ? 'scrolled' : ''"
  >
    <div class="container flex">
      <div class="menu space-x-6">
        <a href="#home" class="text-primary hover:text-white">Home</a>
        <a href="#about" class="text-primary hover:text-white">About</a>
        <a href="#experience" class="text-primary hover:text-white"
          >Experience</a
        >
        <a href="#contact" class="text-primary hover:text-white">Contact</a>
      </div>
      <!-- <div
        class="mobile-only menu space-y-1 relative"
        :class="isMenuOpen ? 'opened' : ''"
        @click="menuHandler"
      >
        <div class="icon icon-1"></div>
        <div class="icon icon-2"></div>
        <div class="icon icon-3"></div>
      </div> -->
    </div>
  </nav>
</template>
<script>
export default {
  name: "Header",
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  data() {
    return {
      isScrolled: false,
      isMenuOpen: false,
    };
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 0) {
        return (this.isScrolled = true);
      }
      this.isScrolled = false;
    },
    menuHandler() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
.site-header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5;
  background: $secondary;
  &.scrolled {
    box-shadow: 0px 2px 5px 1px darken($secondary, 20);
  }
  a {
    text-decoration: none;
  }
  .container {
    justify-content: center;
  }
  .menu {
    height: 10px;
    .icon {
      position: absolute;
      right: 0;
      height: 2.5px;
      width: 20px;
      background: $primary;
      transition: all 200ms ease-in-out;
    }
    .icon-1 {
      top: 0;
      transform-origin: left;
    }
    .icon-2 {
      top: 50%;
    }
    .icon-3 {
      top: 100%;
      transform-origin: left;
    }
    &.opened {
      .icon {
        transition: all 200ms ease-in-out;
      }
      .icon-1 {
        top: 4%;
        transform: rotate(40deg);
      }
      .icon-2 {
        opacity: 0;
      }
      .icon-3 {
        top: 125%;
        transform: rotate(-40deg);
      }
    }
  }
  @media screen and (min-width: 769px) {
    .container {
      justify-content: flex-end;
    }
  }
}
</style>
