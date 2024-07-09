<template>
  <div class="home pb-28">
    <section class="section-1 pt-16 bg-green-light" id="home">
      <div class="container flex">
        <div class="flex flex-col items-start">
          <h1 class="text-left jumbotron">
            <Transition name="hi"
              ><span v-show="transition.headings.intro.hi" class="text-white"
                >Hi There,</span
              ></Transition
            >
            <Transition name="myName"
              ><span
                v-show="transition.headings.intro.myName"
                class="text-white"
              >
                I'm
              </span></Transition
            >
            <Transition name="name">
              <span v-show="transition.headings.intro.name" class="text-primary"
                >Muhammad Raihan</span
              >
            </Transition>
          </h1>
          <Transition name="role"
            ><h1
              v-show="transition.headings.role"
              class="text-left mb-6 text-primary jumbotron"
            >
              <span class="text-white">A</span> Front End Developer
            </h1></Transition
          >
          <Transition name="desc">
            <p
              v-show="transition.headings.desc"
              class="desc text-left text-primary font-semibold leading-normal mb-10"
            >
              I am an enthusiatstic web developer specializing on the Front End
              side. Currently i have 2 years of experience and looking for any
              opportunity, so if you have something you can click this button
              below!
            </p></Transition
          >
          <Transition name="contact">
            <a href="#contact">
              <button
                v-show="transition.headings.contact"
                class="contact animated-btn rounded font-semibold py-4 px-6 focus:outline-none"
              >
                Contact me
              </button></a
            >
          </Transition>
        </div>
        <Transition name="avatar">
          <img
            v-show="transition.headings.avatar"
            src="@/assets/img/avatar.png"
            alt=""
            class="desktop-only"
        /></Transition>
      </div>
    </section>
    <section class="section-2 bg-white" id="about" ref="section2">
      <div>
        <Transition name="about">
          <h1 v-show="transition.about.heading" class="mb-20 heading">
            About Me
          </h1>
        </Transition>
        <Transition name="content">
          <div v-show="transition.about.content" class="container">
            <div class="profile text-left font-semibold leading-loose">
              <p class="mb-2">
                Hi, my name is Muhammad Raihan, jsut a guy who has interest in
                Front End Web Development. I have 2 years of experience in this
                and there are some experiences that you can check on
              </p>
              <p class="mb-2">
                I'm open to Job opportunities where I can contribute, learn and
                grow. If you have a good opportunity that matches my skills then
                don't hesitate to contact me.
              </p>
            </div>
            <div>
              <h2 class="mb-6 text-left">My Skills</h2>
              <div class="flex flex-wrap space-x-4 space-y-4">
                <div
                  class="skill cursor-pointer text-white bg-primary-light py-2 px-4 rounded-lg"
                >
                  HTML
                </div>
                <div
                  class="skill cursor-pointer text-white bg-primary-light py-2 px-4 rounded-lg"
                >
                  CSS
                </div>
                <div
                  class="skill cursor-pointer text-white bg-primary-light py-2 px-4 rounded-lg"
                >
                  SASS
                </div>
                <div
                  class="skill cursor-pointer text-white bg-primary-light py-2 px-4 rounded-lg"
                >
                  Javascript
                </div>
                <div
                  class="skill cursor-pointer text-white bg-primary-light py-2 px-4 rounded-lg"
                >
                  Typescript
                </div>
                <div
                  class="skill cursor-pointer text-white bg-primary-light py-2 px-4 rounded-lg"
                >
                  React.js
                </div>
                <div
                  class="skill cursor-pointer text-white bg-primary-light py-2 px-4 rounded-lg"
                >
                  Next.js
                </div>
                <div
                  class="skill cursor-pointer text-white bg-primary-light py-2 px-4 rounded-lg"
                >
                  Vue.js
                </div>
                <div
                  class="skill cursor-pointer text-white bg-primary-light py-2 px-4 rounded-lg"
                >
                  Nuxt.js
                </div>
                <div
                  class="skill cursor-pointer text-white bg-primary-light py-2 px-4 rounded-lg"
                >
                  Tailwind CSS
                </div>
                <div
                  class="skill cursor-pointer text-white bg-primary-light py-2 px-4 rounded-lg"
                >
                  Windi CSS
                </div>
                <div
                  class="skill cursor-pointer text-white bg-primary-light py-2 px-4 rounded-lg"
                >
                  Chakra UI
                </div>
              </div>
            </div>
          </div></Transition
        >
      </div>
    </section>
    <section class="section-3" id="experience" ref="section3">
      <div class="container">
        <Transition name="heading">
          <h1 v-show="transition.experience.heading" class="mb-16 heading">
            Experience
          </h1>
        </Transition>
        <Transition name="content">
          <div
            v-show="transition.experience.content"
            class="flex justify-center"
          >
            <div class="timeline space-y-12">
              <div class="timeline-section flex space-y-12 gap-x-18">
                <div class="year mt-32 desktop-only">
                  <h2 class="text-primary-light">2024</h2>
                </div>
                <div class="space-y-12">
                  <div class="step flex items-center relative space-x-12">
                    <div class="line-container desktop-only">
                      <div class="circle"></div>
                    </div>
                    <div
                      class="content py-8 px-8 rounded shadow-md shadow-primary space-y-2"
                    >
                      <h2 class="text-left">Freelance Frontend Developer</h2>
                      <p class="text-left">PT Dlabs Indonesia</p>
                      <p class="text-left text-primary-light">
                        March 2024 - Current
                      </p>
                      <ul class="text-left">
                        <li>
                          Developing and maintaining a CRM Application using
                          React.js, Typescript, and Bootstrap.
                        </li>
                        <li>
                          Developing and maintaining an electric vehicle company
                          website using Nuxt.js, Typescript, and Tailwind.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="timeline-section flex space-y-12 gap-x-18">
                <div class="year mt-32 desktop-only">
                  <h2 class="text-primary-light">2023</h2>
                </div>
                <div class="space-y-12">
                  <div class="step flex items-center relative space-x-12">
                    <div class="line-container desktop-only">
                      <div class="circle"></div>
                    </div>
                    <div
                      class="content py-8 px-8 rounded shadow-md shadow-primary space-y-2"
                    >
                      <h2 class="text-left">Frontend Developer</h2>
                      <p class="text-left">
                        PT Mobility Doctor Indonesia (<a
                          href="https://m.modoc.id/"
                          target="_blank"
                          >Modoc.id</a
                        >)
                      </p>
                      <p class="text-left text-primary-light">
                        Dec 2022 - March 2024
                      </p>
                      <ul class="text-left">
                        <li>
                          Maintained running websites functionality and user
                          interface
                        </li>
                        <li>
                          Implement web design and features into website using
                          Nuxt.js with microservice system
                        </li>
                        <li>
                          Used micro-frontend architecture in component
                          development to make component reusable in separated
                          projects
                        </li>
                        <li>
                          Write clean code by adapting atomic design pattern to
                          ease reusability on components and functions
                        </li>
                        <li>
                          Used Jenkins for automatic deployment in development
                          environment
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="timeline-section flex space-y-12 gap-x-18">
                <div class="year mt-32 desktop-only">
                  <h2 class="text-primary-light">2022</h2>
                </div>
                <div class="space-y-12">
                  <div class="step flex items-center relative space-x-12">
                    <div class="line-container desktop-only">
                      <div class="circle"></div>
                    </div>
                    <div
                      class="content py-8 px-8 rounded shadow-md shadow-primary space-y-2"
                    >
                      <h2 class="text-left">Frontend Developer</h2>
                      <p class="text-left">PT Suitmedia Kreasi Indonesia</p>
                      <p class="text-left text-primary-light">
                        Jul 2022 - Sep 2022
                      </p>
                      <ul class="text-left">
                        <li>
                          Develop corporate website using Nuxt.js and SASS
                        </li>
                        <li>
                          Maintained running website by handling bug fixes
                          reported from client
                        </li>
                        <li>
                          Worked alongside Back End Developer and Analyst to
                          fulfill client requests
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="step flex items-center relative space-x-12">
                    <div class="line-container desktop-only">
                      <div class="circle"></div>
                    </div>

                    <div
                      class="content py-8 px-8 rounded shadow-md shadow-primary space-y-2"
                    >
                      <h2 class="text-left">Frontend Developer Intern</h2>
                      <p class="text-left">PT Suitmedia Kreasi Indonesia</p>
                      <p class="text-left text-primary-light">
                        Feb 2022 - Jul 2022
                      </p>
                      <ul class="text-left">
                        <li>Build a custom CMS using Nuxt.js and SASS</li>
                        <li>
                          Translate designs created by the UI/UX Designers into
                          effective code
                        </li>
                        <li>
                          Worked alongside Back End Developer and Analyst to
                          fulfill client requests
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </section>
    <section class="section-4" id="project" ref="section4">
      <div class="container">
        <Transition name="heading">
          <h1 v-show="transition.project.heading" class="heading mb-12">
            Projects
          </h1></Transition
        >
        <Transition name="content">
          <div v-show="transition.project.content" class="cards">
            <div class="card relative rounded-lg">
              <div class="h-full overflow-hidden flex items-end">
                <img src="@/assets/img/modoc.jpg" alt="" />
                <div class="card-content text-left space-y-4">
                  <p class="card-heading font-semibold">Modoc.id</p>
                  <p class="card-desc">
                    Mobile web app for automotive consultation
                  </p>

                  <div class="card-tools space-x-2">
                    <span class="bg-primary-light py-1 px-3 rounded-lg"
                      >Nuxt.js</span
                    >
                    <span class="bg-primary-light py-1 px-3 rounded-lg"
                      >SASS</span
                    >
                    <span class="bg-primary-light py-1 px-3 rounded-lg"
                      >Windi CSS</span
                    >
                  </div>
                </div>
                <div class="card-links space-x-2">
                  <a
                    href="https://m.modoc.id"
                    target="_blank"
                    class="card-link circle"
                    ><i class="icon-arrow-up-right"></i
                  ></a>
                </div>
              </div>
            </div>
            <div class="card relative rounded-lg">
              <div class="h-full overflow-hidden flex items-end">
                <img src="@/assets/img/eiger.png" alt="" />
                <div class="card-content text-left space-y-4">
                  <p class="card-heading font-semibold">Eiger Care</p>
                  <p class="card-desc">
                    Web Content Management System for Eiger
                  </p>

                  <div class="card-tools space-x-2">
                    <span class="bg-primary-light py-1 px-3 rounded-lg"
                      >Nuxt.js</span
                    >
                    <span class="bg-primary-light py-1 px-3 rounded-lg"
                      >SASS</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="card relative rounded-lg">
              <div class="h-full overflow-hidden flex items-end">
                <img src="@/assets/img/jtt.png" alt="" />
                <div class="card-content text-left space-y-4">
                  <p class="card-heading font-semibold">JTT Jasamarga</p>
                  <p class="card-desc">Corporate website for JTT Jasamarga</p>

                  <div class="card-tools space-x-2">
                    <span class="bg-primary-light py-1 px-3 rounded-lg"
                      >Nuxt.js</span
                    >
                    <span class="bg-primary-light py-1 px-3 rounded-lg"
                      >SASS</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="card relative rounded-lg">
              <div class="h-full overflow-hidden flex items-end">
                <img src="@/assets/img/trivia-quest.png" alt="" />
                <div class="card-content text-left space-y-4">
                  <p class="card-heading font-semibold">Trivia Quest</p>
                  <p class="card-desc">
                    A trivia quiz app with various categories to play with
                  </p>

                  <div class="card-tools space-x-2">
                    <span class="bg-primary-light py-1 px-3 rounded-lg"
                      >Next.js</span
                    >
                    <span class="bg-primary-light py-1 px-3 rounded-lg"
                      >Chakra UI</span
                    >
                    <span class="bg-primary-light py-1 px-3 rounded-lg"
                      >Tailwind</span
                    >
                    <span class="bg-primary-light py-1 px-3 rounded-lg"
                      >Framer Motion</span
                    >
                  </div>
                </div>
                <div class="card-links space-x-2">
                  <a
                    href="https://github.com/Raihan-21/trivia-quest"
                    target="_blank"
                    class="card-link circle"
                    ><i class="icon-github"></i
                  ></a>
                  <a
                    href="http://trivia-quest.netlify.app/"
                    target="_blank"
                    class="card-link circle"
                    ><i class="icon-arrow-up-right"></i
                  ></a>
                </div>
              </div>
            </div>
            <div class="card relative rounded-lg">
              <div class="h-full overflow-hidden flex items-end">
                <img src="@/assets/img/todo.png" alt="" />
                <div class="card-content text-left space-y-4">
                  <p class="card-heading font-semibold">Todo App</p>
                  <p class="card-desc">
                    A responsive basic todo list app created using React
                  </p>

                  <div class="card-tools space-x-2">
                    <span class="bg-primary-light py-1 px-3 rounded-lg"
                      >Javascript</span
                    >
                    <span class="bg-primary-light py-1 px-3 rounded-lg"
                      >React</span
                    >
                  </div>
                </div>
                <div class="card-links space-x-2">
                  <a
                    href="https://github.com/Raihan-21/todo-app"
                    target="_blank"
                    class="card-link circle"
                    ><i class="icon-github"></i
                  ></a>
                  <a
                    href="https://raihan-21.github.io/todo-app/"
                    target="_blank"
                    class="card-link circle"
                    ><i class="icon-arrow-up-right"></i
                  ></a>
                </div>
              </div>
            </div>
            <div class="card relative rounded-lg">
              <div class="h-full overflow-hidden flex items-end">
                <img src="@/assets/img/be-smart.png" alt="" />
                <div class="card-content w-full text-left space-y-4">
                  <p class="text-yellow text-center w-full">
                    Website currently down due to hosting provider
                  </p>
                  <p class="card-heading font-semibold">Be Smart</p>
                  <p class="card-desc">
                    Tutoring companion website build with Node.js and React
                  </p>
                  <div class="card-tools space-x-2">
                    <span class="bg-primary-light py-1 px-3 rounded-lg"
                      >Javascript</span
                    >
                    <span class="bg-primary-light py-1 px-3 rounded-lg"
                      >React</span
                    >
                    <span class="bg-primary-light py-1 px-3 rounded-lg"
                      >SASS</span
                    >
                  </div>
                </div>
                <div class="card-links space-x-2">
                  <a
                    href="https://github.com/Raihan-21/besmart-client"
                    target="_blank"
                    class="card-link circle"
                    ><i class="icon-github"></i
                  ></a>
                  <a
                    href="https://be-smart.up.railway.app/"
                    target="_blank"
                    class="card-link circle"
                    ><i class="icon-arrow-up-right"></i
                  ></a>
                </div>
              </div>
            </div>
            <div class="card relative rounded-lg">
              <div class="h-full overflow-hidden flex items-end">
                <img src="@/assets/img/innoraine-cake-new.png" alt="" />
                <div class="card-content text-left space-y-4 w-full">
                  <!-- <p class="text-yellow text-center w-full">
                    Website currently down due to hosting provider
                  </p> -->
                  <p class="card-heading font-semibold">Innoraine Cake</p>
                  <p class="card-desc">
                    An ecommerce to order cake products created using Next.js,
                    Express.js, and PostgreSQL
                  </p>
                  <div class="card-tools space-x-2">
                    <span class="bg-primary-light py-1 px-3 rounded-lg"
                      >HTML</span
                    >
                    <span class="bg-primary-light py-1 px-3 rounded-lg"
                      >CSS</span
                    >
                    <span class="bg-primary-light py-1 px-3 rounded-lg"
                      >Next.js</span
                    >
                    <span class="bg-primary-light py-1 px-3 rounded-lg"
                      >Express.js</span
                    >
                  </div>
                </div>
                <div class="card-links space-x-2">
                  <a
                    href="https://github.com/Raihan-21/innoraine-cake-web"
                    target="_blank"
                    class="card-link circle"
                    ><i class="icon-github"></i
                  ></a>
                  <a
                    href="https://innoraine-cake.netlify.app/"
                    target="_blank"
                    class="card-link circle"
                    ><i class="icon-arrow-up-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </section>
    <section class="section-5" id="contact" ref="section5">
      <div class="container">
        <Transition name="heading">
          <h1 v-show="transition.contact.heading" class="heading mb-12">
            Contact
          </h1></Transition
        >
        <Transition name="content">
          <div v-show="transition.contact.content">
            <p class="font-semibold mb-12">
              Feel free to reach out to me, I will text you back as soon as i
              can
            </p>
            <div class="links flex justify-center space-x-4 mb-8">
              <a
                href="mailto:muhammadraihan118@gmail.com"
                class="flex justify-center items-center"
                ><i class="icon-mail text-white"></i
              ></a>
              <a
                href="https://www.linkedin.com/in/muhammad-raihan-21198b203/"
                class="flex justify-center items-center"
                ><i class="icon-linkedin text-white"></i
              ></a>
              <a
                href="https://www.instagram.com/murai45/"
                class="flex justify-center items-center"
                ><i class="icon-instagram text-white"></i
              ></a>
              <a
                href="https://github.com/Raihan-21"
                class="flex justify-center items-center"
                ><i class="icon-github text-white"></i
              ></a>
              <a
                href="https://gitlab.com/Raihan-21"
                class="flex justify-center items-center"
                ><i class="icon-gitlab text-white"></i
              ></a>
            </div>
            <a href="CV_Muhammad Raihan.pdf" download>
              <button
                class="contact animated-btn rounded font-semibold py-3 px-6 focus:outline-none"
              >
                Resume
              </button></a
            >
          </div></Transition
        >
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  data() {
    return {
      transition: {
        headings: {
          intro: { hi: false, myName: false, name: false },
          role: false,
          desc: false,
          contact: false,
          avatar: false,
        },
        about: {
          heading: false,
          content: false,
        },
        experience: {
          heading: false,
          content: false,
        },
        project: {
          heading: false,
          content: false,
        },
        contact: {
          heading: false,
          content: false,
        },
      },
    };
  },
  mounted() {
    const sections = [
      this.$refs.section2,
      this.$refs.section3,
      this.$refs.section4,
      this.$refs.section5,
    ];
    let time = 0;
    Object.keys(this.transition.headings.intro).forEach((key, index) => {
      time += 500;
      if (index !== 0) time += 250;
      setTimeout(() => {
        this.transition.headings.intro[key] = true;
      }, time);
    });
    setTimeout(() => {
      this.transition.headings.role = true;
      this.transition.headings.avatar = true;
    }, 2800);
    setTimeout(() => {
      this.transition.headings.desc = true;
    }, 3500);
    setTimeout(() => {
      this.transition.headings.contact = true;
    }, 4200);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.transition[entry.target.id].heading = true;
            setTimeout(() => {
              this.transition[entry.target.id].content = true;
            }, 300);
          }
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((section) => {
      observer.observe(section);
    });
  },
};
</script>
<style lang="scss" scoped>
.animated-btn {
  color: white;
  background-image: linear-gradient(45deg, white 50%, $primary 50%);
  background-size: 250% 100%;
  background-position: right bottom;
  transition: background-position 0.5s ease;
  &:hover {
    color: $primary;
    background-position: left top;
  }
}
section {
  .jumbotron {
    font-size: 3rem;
  }
  .heading {
    font-size: 2rem;
  }
}
.section-1 {
  min-height: 100vh;
  position: relative;
  padding: 100px 0 0 0;
  .container {
    h1 {
      width: fit-content;
    }
    .desc {
      max-width: 500px;
    }
    img {
      max-height: 400px;
    }
  }
  .hi-enter-from {
    opacity: 0;
  }
  .hi-enter-active {
    transition: all 200ms ease-in;
  }
  .hi-enter-to {
    opacity: 1;
  }
  .myName-enter-from {
    opacity: 0;
  }
  .myName-enter-active {
    transition: all 200ms ease-in-out;
  }
  .myName-enter-to {
    opacity: 1;
  }
  .name-enter-from {
    opacity: 0;
  }
  .name-enter-active {
    transition: all 200ms ease-in-out;
  }
  .name-enter-to {
    opacity: 1;
  }
  .role-enter-from {
    opacity: 0;
  }
  .role-enter-active {
    transition: all 500ms ease-in-out;
  }
  .role-enter-to {
    opacity: 1;
  }
  .desc-enter-from {
    opacity: 0;
  }
  .desc-enter-active {
    transition: all 500ms ease-in-out;
  }
  .desc-enter-to {
    opacity: 1;
  }
  .contact-enter-from {
    opacity: 0;
  }
  .contact-enter-active {
    transition: all 500ms ease-in-out;
  }
  .contact-enter-to {
    opacity: 1;
  }
  .avatar-enter-from {
    opacity: 0;
  }
  .avatar-enter-active {
    transition: all 500ms ease-in-out;
  }
  .avatar-enter-to {
    opacity: 1;
  }
  @media screen and (min-width: 481px) {
    .container {
      padding: 90px 0 0 0;
    }
  }
  @media screen and (min-width: 769px) {
    .container {
      padding: 110px 0 50px 60px;
      img {
        width: 350px;
      }
    }
  }
  @media screen and (min-width: 1200px) {
    .container {
      padding: 110px 0 0 60px;
      img {
        width: 400px;
      }
    }
  }
}
.section-2 {
  padding-top: 100px;
  .container {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    column-gap: 30px;
    row-gap: 30px;
    @media screen and (min-width: 481px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  .skill {
    height: fit-content;
    transition: all 200ms ease-in-out;
    &:hover {
      transition: all 200ms ease-in-out;
      transform: scale(1.2);
    }
  }
  .about-enter-from {
    opacity: 0;
  }
  .about-enter-active {
    transition: all 300ms ease-in-out;
  }
  .about-enter-to {
    opacity: 1;
  }
  .content-enter-from {
    opacity: 0;
  }
  .content-enter-active {
    transition: all 300ms ease-in-out;
  }
  .content-enter-to {
    opacity: 1;
  }
  @media screen and (min-width: 481px) {
    .profile {
      max-width: 550px;
    }
  }
}
.section-3 {
  min-height: 100vh;
  padding-top: 100px;
  margin-bottom: 100px;
  h2 {
    font-size: 1rem;
  }
  .timeline {
    .year {
      h2 {
        font-size: 2.5rem;
      }
    }
  }
  .line-container {
    height: 100%;
  }
  .timeline-section {
    &:first-child {
      .circle:first-child {
        background: $primary;
      }
    }
    .step {
      .content {
        border: 1px solid rgba($primary, 0.2);
      }
      .circle {
        width: 25px;
        height: 25px;
        background: white;
        border-radius: 50%;
        border: 1px solid $primary;
      }
      &:first-child {
        // .circle {
        //   background: $primary;
        // }
      }
      &:not(:first-child) {
        .circle {
          &::before {
            content: "";
            position: absolute;
            top: -40px;
            width: 1px;
            height: 60%;
            background: $primary;
            z-index: -1;
          }
        }
      }
      &:not(:last-child) {
        .circle {
          &::after {
            content: "";
            position: absolute;
            bottom: -40px;
            width: 1px;
            height: 60%;
            background: $primary;
            z-index: -1;
          }
        }
      }
    }
  }

  .heading-enter-from {
    opacity: 0;
  }
  .heading-enter-active {
    transition: all 300ms ease-in-out;
  }
  .heading-enter-to {
    opacity: 1;
  }
  .content-enter-from {
    opacity: 0;
  }
  .content-enter-active {
    transition: all 300ms ease-in-out;
  }
  .content-enter-to {
    opacity: 1;
  }
}
.section-4 {
  margin-bottom: 100px;
  .cards {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: 310px;
    gap: 30px;
    .card {
      cursor: pointer;
      color: white;
      overflow: hidden;
      // height: 100%;      overflow: hidden;
      img {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        object-fit: cover;
        z-index: -1;
      }
      .card-content {
        position: relative;
        padding: 20px;
        bottom: 0;
        z-index: 1;
        opacity: 0;
        transform: translateY(10%);
        transition: all 200ms ease-out;
        .card-heading {
          font-size: 1.5rem;
        }

        .card-tools {
          font-size: 0.8rem;
          span {
            display: inline-block;
          }
        }
      }
      .card-links {
        position: absolute;
        opacity: 0;
        top: 20px;
        right: 10px;
        transform: translateY(-10%);
        transition: all 200ms ease-out;
        .card-link {
          border: 1px solid white;
          padding: 8px;
        }
        a {
          color: white;
          text-decoration: none;
        }
      }
      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
      &:hover {
        &::before {
          background: linear-gradient(
            rgba(black, 0.1) 10%,
            rgba(black, 0.2) 30%,
            rgba(black, 0.7)
          );
        }
        .card-content {
          opacity: 1;
          transform: unset;
          transition: all 200ms ease-out;
        }
        .card-links {
          opacity: 1;
          transform: unset;
          transition: all 200ms ease-out;
        }
      }
      // &:nth-child(2) {
      //   grid-row: 1 / 3;
      // }
    }
  }
  .heading-enter-from {
    opacity: 0;
  }
  .heading-enter-active {
    transition: all 300ms ease-in-out;
  }
  .heading-enter-to {
    opacity: 1;
  }
  .content-enter-from {
    opacity: 0;
  }
  .content-enter-active {
    transition: all 300ms ease-in-out;
  }
  .content-enter-to {
    opacity: 1;
  }
  @media screen and (min-width: 769px) {
    .cards {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
.section-5 {
  min-height: fit-content;
  padding-top: 100px;
  padding-bottom: 100px;
  background: $secondary;
  h1 {
    font-size: 2.5rem !important;
  }
  a {
    // display: inline-block;
    text-decoration: none;
    height: 45px;
    width: 45px;
    // padding: 12px 13px;
    background: $primary;
    box-sizing: border-box;
    border-radius: 50%;
    i {
      font-size: 1.2rem;
      transition: all 300ms ease-out;
    }
    transition: all 300ms ease-out;
    &:hover {
      background: white;
      transition: all 300ms ease-out;
      border: 1px solid $primary;
      i {
        color: $primary;
        transition: all 300ms ease-out;
      }
    }
  }
  .heading-enter-from {
    opacity: 0;
  }
  .heading-enter-active {
    transition: all 300ms ease-in-out;
  }
  .heading-enter-to {
    opacity: 1;
  }
  .content-enter-from {
    opacity: 0;
  }
  .content-enter-active {
    transition: all 300ms ease-in-out;
  }
  .content-enter-to {
    opacity: 1;
  }
}
</style>
