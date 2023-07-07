<template>
  <main>
    <PageHeader first-title="Featured" second-title="Work" />
    <section class="section__portfolio">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <PortfolioCard
            v-for="item in portfolio"
            :key="item.title"
            :comp="item"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
useHead({ title: "Portfolio" });
const { data: portfolio } = await useAsyncData("portfolio", () =>
  queryContent("/portfolio").find()
);
</script>

<style lang="scss" scoped></style>
