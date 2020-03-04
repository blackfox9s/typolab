<template>
  <section class="check-point" :class="{section: !positionTop}">
    <dl>
      <dt>
        <span>주요보상내용</span>
        <em>CHECK</em>
      </dt>
      <dd>
        <ul>
          <li v-for="(item, index) in info" :key="index">
            <div>
              <span class="check-point__icon">
                <img :src="require(`@/assets/images/${item.icon}`)" alt="" />
              </span>
              <span class="check-point__text1" v-html="item.text1"></span>
              <span class="check-point__text2" v-html="item.text2"></span>
              <span class="check-point__text3" v-html="item.text3"></span>
            </div>
          </li>
        </ul>
      </dd>
    </dl>
  </section>
</template>

<script>
export default {
  name: 'CheckPoint',
  props: [
    'positionTop',
    'info'
  ],
}
</script>

<style scoped>

</style>
