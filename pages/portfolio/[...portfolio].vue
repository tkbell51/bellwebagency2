<template>
  <div>
    <section class="portfolio-header">
      <div class="container">
        <div
          class="portfolio-header__content w-full flex justify-between gap-16"
        >
          <div class="portfolio-header__content--text">
            <h1 class="heading-primary">
              {{ data.project.firstTitle }}<br /><span
                v-if="data.project.secondTitle"
                class="is-outline"
              >
                {{ data.project.secondTitle }}
              </span>
            </h1>
            <p class="text-white">
              {{ data.project.description }}
            </p>
          </div>
          <div
            v-if="data.project.headerImage"
            class="portfolio-header__img mx-auto"
          >
            <nuxt-img
              provider="cloudinary"
              :src="`portfolio/${data.project.headerImage}`"
              class="shadow-xl rounded-xl"
            />
          </div>
        </div>
      </div>
      <BgCurve color="white" />
    </section>
    <section>
      <div class="container">
        <nuxt-img
          provider="cloudinary"
          :src="`portfolio/${data.project.mockImage}`"
        />
      </div>
    </section>
    <section class="section__project-description">
      <div class="container">
        <div class="flex gap-4">
          <nuxt-img
            provider="cloudinary"
            class="m-auto shadow-lg my-4 w-full md:w-3/5"
            :src="`portfolio/${data.project.fullImg}`"
            :alt="`${data.project.title}`"
          />
          <div class="">
            <nuxt-img
              v-for="(image, index) in data.project.images"
              :key="index"
              provider="cloudinary"
              class="m-auto shadow-lg my-4"
              :src="`portfolio/${image}`"
              :alt="`${data.project.title}`"
            />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="flex justify-around">
          <div class="text-center">
            <p class="heading-tertiary">URL</p>
            <a :href="data.project.link" target="_blank">{{
              data.project.link
            }}</a>
          </div>
          <div class="text-center">
            <p class="heading-tertiary">Launched</p>
            <p>{{ data.project.year }}</p>
          </div>
        </div>
      </div>
    </section>
    <Vision />
    <PortfolioSection />
    <section class="section__pagination">
      <div class="container">
        <div class="pagination">
          <NuxtLink
            v-if="prev"
            :to="prev._path"
            class="prev heading-secondary text-right"
          >
            <p>Previous Project</p>
            <span class="is-outline">{{ prev.title }}</span>
          </NuxtLink>
          <Logo color="color-black" class="pagination__logo" />
          <NuxtLink v-if="next" :to="next._path" class="next heading-secondary">
            <p>Next Project</p>

            <span class="is-outline">{{ next.title }}</span>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const { path } = useRoute();
console.log("path", path);
const { data } = await useAsyncData(`/portfolio/${path}`, async () => {
  const project = queryContent().where({ _path: path }).findOne();
  console.log(project);
  const surround = queryContent()
    .only(["_path", "title", "description"])
    .sort({ date: 1 })
    .findSurround(path);
  return {
    project: await project,
    surround: await surround,
  };
});
const [prev, next] = data.value.surround;

useHead({
  title: data.value.project.title,
  meta: [
    {
      hid: "title",
      name: "title",
      content: data.value.project.title,
      description: data.value.project.description,
    },
  ],
});
</script>

<style lang="scss">
.portfolio-header {
  background: $section-gradient;
  position: relative;

  &__content {
    position: relative;
    margin: 13rem 0 15rem;
    @include respond(tab-mid) {
      flex-wrap: wrap;
    }

    &--text {
      width: 85%;
      padding-bottom: 5rem;

      .heading-primary {
        font-size: clamp(5rem, 8vw, 9rem);

        line-height: 1;
        margin-bottom: 3rem;
        position: relative;
        z-index: 2;
      }
      p {
        width: 65%;
        font-size: clamp(1.6rem, 2.5vw, 2rem);
        margin: 4rem 0;
        @include respond(tab-port) {
          width: 80%;
        }
      }

      @include respond(tab-port) {
        width: 100%;
        padding-bottom: 0;
      }
    }

    @include respond(tab-port) {
      margin: 10rem 0 11rem;
    }
  }
  &__img {
    @include respond(tab-port) {
      width: 65%;
      margin: 0;
    }
  }
  .bg-curve {
    margin-top: 5rem;
  }
}
.section__pagination {
  padding: 2rem 0;
  .pagination {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;
    @include respond(tab-small) {
      display: block;
    }

    &__logo {
      width: 8rem;
      @include respond(tab-small) {
        display: none;
      }
    }

    .prev,
    .next {
      width: 45%;
      &:hover .is-outline {
        color: $black;
      }
    }

    .is-outline {
      transition: $transition;
    }
  }
}
</style>
