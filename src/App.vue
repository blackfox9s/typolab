<template>
  <div id="app" class="wrap">
    <header class="header">
      <div class="section">
        <h1 class="header__logo">
          <span class="header__logo-img"><img src="@/assets/images/layout/logo2.png" alt="DB손해보험" /></span>
          <!--<span class="header__logo-text">동부화재의 새 이름</span>-->
        </h1>
        <span class="header__call"><a :href="`tel:${call}`">{{call}}</a></span>
      </div>
    </header>
    <div class="container">
      <Drive :call="call" />
    </div>
    <footer class="footer">
      <div class="section">
        <div class="footer__text">
          <span>㈜마케팅인슈 보험대리점</span>
          <span>대표자 : 전종진</span>
          <span>사업자등록번호 114-87-23491</span>
        </div>
        <div class="footer__text">
          <span>대리점등록번호 : 제201502000호</span>
          <span>통신판매업 신고 : 제 2017-서울마포_2181호</span>
        </div>
        <div class="footer__text">
          <span>서울시 서초구 방배로 285, 5층</span>
          <span>Tel 1688-0835</span>
          <span>E-mail : sales@goodchobo.com</span>
        </div>
        <div class="footer__text">
          Copyright ⓒ Since 2015 Marketinginsu. All Rights Reserved.
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Drive from '@/views/Drive.vue';

export default {
  name: 'app',
  components: {
    Drive,
  },
  data() {
    return {
      call: '1688·0835'
    }
  },
}
</script>

<style lang="scss">
  @import "assets/sass/main.scss";
</style>
