<template>
  <div class="contents" :class="info.class">
    <section class="visual">
      <div class="visual-title">
        <div class="visual-title__text1">{{title.text1}}</div>
        <div class="visual-title__text2" v-html="title.text2"></div>
      </div>
      <div class="section">
        <checkPoint class="pc-only" :positionTop="true" :info="checkPoint" />
        <div class="search">
          <div class="search-form">
            <p class="search-form__title">
              <em>내 {{info.type}} 보험료 <strong>간편 조회</strong></em>
              <span>{{info.description}}</span>
            </p>
            <ul class="search-form__inputs">
              <li>
                <input type="text" placeholder="이름 (예:홍길동)"
                       v-model="params.name"
                       v-on:keyup="hangulCheck($event.target.value, 'name')" />
              </li>
              <li>
                <div class="input-custom">
                  <label>
                    <input type="radio" name="gender" value="m" v-model="params.gender" />
                    <span>남</span>
                  </label>
                  <label>
                    <input type="radio" name="gender" value="f" v-model="params.gender" />
                    <span>여</span>
                  </label>
                </div>
              </li>
              <li>
                <input type="tel" placeholder="생년월일(예:19880716)" maxlength="8"
                       v-model="params.birthday"
                       v-on:keyup="numberCheck($event.target.value, 'birth')"  />
              </li>
              <li>
                <input type="tel" placeholder="휴대폰번호(-없이 입력)" maxlength="11"
                       v-model="params.mobile_num"
                       v-on:keyup="numberCheck($event.target.value, 'mobile_num')"  />
              </li>
            </ul>
            <ul class="search-form__agree">
              <li>
                <span @click="handlePopupToggle('agree')"
                      :class="{active: params.agree === 'on'}">
                  개인정보 수집 및 이용동의
                </span>
              </li>
            </ul>
            <div class="search-form__button">
              <div>
                <span>
                  <button type="button" class="search-form__button-cal" @click="premiumCalculation">
                    <i></i>
                    보험료계산
                  </button>
                </span>
                <span>
                  <button type="button" class="search-form__button-free" @click="freeConsultation">
                    <i></i>
                    무료 상담신청
                  </button>
                </span>
              </div>
            </div>
          </div>
          <div class="price-result">
            <div class="price-result__box">
              <div>
                <p>
                  <span><em>{{premiumResult.check ? premiumResult.name : '홍길동'}}</em></span>님의<br class="pc-only" />
                  예상 {{info.type}} 보험료는
                </p>
                <p><strong><em>월 {{premiumResult.check ? premiumResult.price : '??'}}원</em></strong>입니다.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="pc-only visual-call">
          <span class="visual-call__text">무료상담전화</span>
          <span class="visual-call__number">{{call}}</span>
        </div>
        <div class="visual__number">{{ simNumber }}</div>
      </div>
    </section>

    <checkPoint class="mo-only" :positionTop="false" :info="checkPoint" />

    <section class="section detail">
      <div class="detail__tab">
        <ul>
          <li v-for="(tab, index) in tabs"
              :key="index"
              :class="{active: currentTab === index}"
              @click="handleTab(index)">
            <span>{{tab}}</span>
          </li>
        </ul>
      </div>
      <div class="detail__product-name">{{info.name}}</div>
      <div class="detail__content" v-show="currentTab === 0">
        <slot name="terms1"></slot>
      </div>
      <div class="detail__content" v-show="currentTab === 1">
        <slot name="terms2"></slot>
      </div>
      <div class="detail__content" v-show="currentTab === 2">
        <slot name="terms3"></slot>
      </div>
      <div class="detail__content" v-show="currentTab === 3">
        <dl>
          <dt>꼭 확인하세요.</dt>
          <dd>
            <ol class="list__type2">
              <li><i>1.</i>보험계약 체결 전에 반드시 상품설명서 및 약관을 읽어보시기 바랍니다.</li>
              <li><i>2.</i>보험계약자가 기존에 체결했던 보험계약을 해지하고 다른 보험계약을 체결하면 보험계약이 거절될 수 있으며, 보험료가 인상되거나 보장내용이 달라질 수 있습니다.</li>
              <li><i>3.</i>본 내용은 약관에 기초하여 인터넷 자료로 요약한 것으로 보험금의 지급사유, 보험금을 지급하지 않는 사유 및 제반사항 등 기타 자세한 사항은 약관 및 상품요약서를 반드시 참조하시기 바랍니다.</li>
              <li><i>4.</i>이 화면은 가입자의 이해를 돕기 위한 단순안내자료이므로 실제 보험을 가입할 경우 발행되는 가입설계서, 상품설명서 등과 내용이 다를 수 있으며, 보험금 지급을 위한 기초근거자료가 될 수 없습니다.</li>
            </ol>
          </dd>
        </dl>
        <dl>
          <dt>배당 여부</dt>
          <dd>이 계약은 무배당 상품으로 배당을 하지 않습니다.</dd>
        </dl>
        <dl>
          <dt>청약철회 및 품질보증제도</dt>
          <dd>
            <ul>
              <li class="list__type1">
                <em>청약의 철회</em><br />
                계약자는 보험증권을 받은 날로부터 15일이내에 그 청약을 철회할 수 있습니다. 다만, 진단계약, 보험기간이 1년 미만인 계약 또는전문보험계약자가 체결한 계약은 청약을 철회할 수 없으며, 청약을 한 날로부터 30일(만 65세 이상을 계약자로 하는 통신판매 보험계약의 경우 45일)을 초과한 경우에도 청약을 철회할 수 없습니다. 이 경우 보험증권의 교부에 관하여 다툼이 있으면 보험회사가 이를 증명해야 합니다.
              </li>
              <li class="list__type1">
                <em>품질보증제도</em><br />
                회사가 약관 및 계약자 보관용 청약서를 청약할 계약자에게 전달하지 않거나 약관의 중요한 내용을 설명하지 않은 때 또는 계약을 체결할 때 계약자가 청약서에 자필서명(날인(도장을 찍음) 및 전자서명법 제2조 제2호에 따른 전자서명 또는 동법 제2조 제3호에 따른 공인전자서명을 포함합니다)을 하지 않은 때에는 계약자는 계약이 성립한 날부터 3개월 이내에 계약을 취소할 수 있습니다. 다만, 단체(취급)계약은 계약이 성립한 날부터 1개월 이내에 계약을 취소할 수 있습니다.
              </li>
            </ul>
          </dd>
        </dl>
        <dl>
          <dt>보장개시일(책임개시일)</dt>
          <dd>
            <ul>
              <li class="list__type1">
                <em>제1회 보험료 및 회사의 보장개시</em><br />
                회사는 계약의 청약을 승낙하고 제1회 보험료를 받은 때부터 이 계약의 약관이 정한 바에 따라 보장을 합니다. 또한, 회사가 청약과 함께 제1회 보험료를 받은 후 승낙한 경우에도 제1회 보험료를 받은 때부터 보장이 개시됩니다. 자동이체 또는 신용카드로 납입하는 경우에는 자동이체신청 또는 신용카드매출승인에 필요한 정보를 제공한 때를 제1회 보험료를 받은 때로 하며, 계약자의 책임 있는 사유로 자동이체 또는 매출승인이 불가능한 경우에는 기본보험료가 납입되지 않은 것으로 봅니다. 다만, 암관련 특별약관 등에 대하여는 계약(부활(효력회복))일로부터 90일이 지난 날의 다음날부터 보장이 개시되므로, 구체적인 사항에 대해서는 반드시 약관을 참조하시기 바랍니다.
              </li>
              <li class="list__type1">
                <em>보장개시일</em><br />
                회사가 보장을 개시하는 날로서 계약이 성립되고 제1회 보험료를 받은 날을 말하나, 회사가 승낙하기 전이라도 청약과 함께 제1회 보험료를 받은 경우에는 제1회 보험료를 받은 날을 말합니다. 또한, 보장개시일을 계약일로 봅니다. 다만, 암관련 특별약관 등의 보장개시일은 계약(부활(효력회복))일로부터 90일이 지난 날의 다음날이므로, 구체적인 사항에 대해서는 반드시 약관을 참조하시기 바랍니다.
              </li>
            </ul>
          </dd>
        </dl>
        <dl>
          <dt>보험료의 납입이 연체되는 경우 납입최고(독촉)와 계약의 해지</dt>
          <dd>
            계약자가 제2회 이후의 보험료를 납입기일까지 납입하지 않아 보험료 납입이 연체 중인 경우에 회사는 14일(보험기간이 1년 미만인 경우에는 7일) 이상의 기간을 납입최고(독촉)기간(납입최고(독촉)기간의 마지막 날이 영업일이 아닌 때에는 최고(독촉)기간은 그 다음 날까지로 합니다)으로 정하여 아래 사항에 대하여 서면(등기우편 등), 전화(음성녹음) 또는 전자문서 등으로 알려드립니다.<br />
            다만, 해지 전에 발생한 보험금 지급사유에 대하여 회사는 보상하여 드립니다.
          </dd>
          <dd>계약자(보험수익자와 계약자가 다른 경우 보험수익자를 포함합니다)에게 납입최고(독촉)기간 내에 연체보험료를 납입하여야 한다는 내용</dd>
          <dd>납입최고(독촉)기간이 끝나는 날까지 보험료를 납입하지 않을 경우 납입최고(독촉)기간이 끝나는 날의 다음날에 계약이 해지된다는 내용</dd>
        </dl>
        <dl>
          <dt>계약 전 알릴의무</dt>
          <dd>계약자 또는 피보험자(보험대상자)는 청약시(진단계약의 경우 건강진단시를 말합니다) 청약서에서 질문한 사항에 대하여 알고 있는 사실을 반드시 사실대로 알려야 합니다. 다만, 진단계약의 경우 의료법 제3조(의료기관)의 규정에 의한 종합병원 및 병원에서 직장 또는 개인이 실시한 건강진단서 사본 등 건강상태를 판단할 수 있는 자료로 건강진단을 대신할 수 있습니다. 계약자 또는 피보험자(보험대상자)가 고의 또는 중대한 과실로 계약전 알릴의무를 위반한 경우, 회사는 보험금 지급사유의 발생여부에 관계없이 이 계약을 해지할 수 있습니다.</dd>
        </dl>
        <dl>
          <dt>계약 후 알릴의무</dt>
          <dd>계약자 또는 피보험자는 보험기간 중에 피보험자가 그 직업 또는 직무를 변경(자가용 운전자가 영업용 운전자로 직업 또는 직무를 변경하는 등의 경우를 포함합니다)하거나 이륜자동차 또는 원동기장치 자전거를 계속적으로 사용하게 된 경우에는 지체없이 회사에 알려야 합니다. 이에 따라 위험이 감소된 경우에는 회사는 그 차액보험료를 돌려드리며, 계약자 또는 피보험자의 고의 또는 중대한 과실로 위험이 증가된 경우에는 통지를 받은 날부터 1개월 이내에 보험료의 증액을 청구하거나 계약을 해지할 수 있습니다. 계약자 또는 피보험자가 고의 또는 중대한 과실로 직업 또는 직무의 변경사실을 회사에 알리지 않은 경우 변경 후 요율이 변경 전 요율보다 높을 때에는 회사는 동 사실을 안 날부터 1개월 이내에 계약자 또는 피보험자에게 보험료의 증액을 청구하거나 계약을 해지할 수 있습니다. 또한, 보험사고가 발생한 경우 보험금의 지급이 제한될 수 있습니다.</dd>
        </dl>
        <dl>
          <dt>일반적 면책사항</dt>
          <dd>회사는 계약자, 피보험자, 보험수익자 등의 고의로 인해 보험금 지급사유가 발생한 때에는 보험금을 지급하지 않습니다.</dd>
          <dd>회사는 피보험자가 직업, 직무 또는 동호회 활동목적으로 아래에 열거된 행위로 인하여 상해 관련 보험금 지급사유가 발생한 때에는 보험금을 지급하지 않습니다.
            <ul class="list__type3">
              <li><i>①</i>전문등반(전문적인 등산용구를 사용하여 암벽 또는 빙벽을 오르내리거나 특수한 기술, 경험, 사전 훈련을 필요로 하는 등반을 말합니다), 글라이더 조종, 스카이다이빙, 스쿠버다이빙, 행글라이딩, 수상보트, 패러글라이딩</li>
              <li><i>②</i>모터보트 · 자동차 또는 오토바이에 따른 경기, 시범, 흥행(이를 위한 연습을 포함합니다.) 또는 시운전(다만, 공용도로상에서 시운전을 하는 동안 발생한 상해는 보장합니다)</li>
              <li><i>③</i>선박승무원, 어부, 사공, 그밖에 선박에 탑승하는 것을 직무로 하는 사람의 직무상 선박 탑승</li>
            </ul>
          </dd>
          <dd>
            보험금의 지급사유, 보험금을 지급하지 않는 사유 등 기타 세부적인 사항은 약관에 따라 제한될 수 있으므로 반드시 약관을 참조하시기 바랍니다.
          </dd>
        </dl>
        <dl>
          <dt>가입제한사항</dt>
          <dd>피보험자의 상해급수에 따라 보험료는 변동되며, 일부 직업 및 병력에 따라 가입이 거절될 수도 있습니다.</dd>
        </dl>
        <dl>
          <dt>적용이율의 변동가능성</dt>
          <dd>
            <ul class="list__type3">
              <li><i>①</i>이 계약의 공시이율은 회사의 운용자산이익률과 시장금리 등을 고려하여 이 계약의 사업 방법서가 정하는 바에 따라 결정합니다.</li>
              <li><i>②</i>회사가 정한 공시이율은 매월 회사의 인터넷 홈페이지 등을 통해 공시합니다. 보험기간 중에 공시이율이 변경되는 경우 변경된 시점 이후에는 변경된 이율을 적용합니다.</li>
            </ul>
          </dd>
        </dl>
        <dl>
          <dt>비례보상 안내</dt>
          <dd>배상책임, 교통사고처리지원금, 벌금 등의 특약은 보험금을 지급할 다수의 보험계약(공제계약포함)이 체결되어 있는 경우, 약관에 따라 비례하여 보상합니다.</dd>
        </dl>
        <dl>
          <dt>예금자보호법에 따른 보호</dt>
          <dd>이 보험계약은 예금자보호법에 따라 예금보험공사가 보호하되, 보호 한도는 본 보험회사에 있는 귀하의 모든 예금보호대상 금융상품의 해약환급금(또는 만기 시 보험금이나 사고보험금)에 기타지급금을 합하여 1인당 "최고 5천만원"이며, 5천만원을 초과하는 나머지 금액은 보호하지 않습니다.(단, 보험계약자 및 보험료 납부자가 법인인 경우에는 보호하지 않습니다.)</dd>
        </dl>
        <dl>
          <dt>보험상담 및 분쟁조정 안내</dt>
          <dd>가입하신 보험에 관하여 상담이 필요하거나 불만사항이 있을때에는 먼저 저희 회사로 연락주시면 신속히 해결하실 수 있습니다.<br />또한, 처리결과에 이의가 있을 때에는 금융감독원에 민원 또는 분쟁조정을 신청하실 수 있습니다.</dd>
          <dd>
            <p class="point">당사 연락처(DB손해보험)</p>
            <p class="list__type1">상담전화 : 1588-0100 / 서울특별시 강남구 테헤란로432 DB금융센터(대치동)</p>
            <p class="point">한국소비자원</p>
            <p class="list__type1">상담전화 : 국번없이 1372 / 충청북도 음성군 맹동군 맹동면 용두로 54(두성리 600)</p>
            <p class="point">금융감독원</p>
            <p class="list__type1">상담전화 : 국번없이 1332 / 주소 서울특별시 영등포구 여의대로 38</p>
          </dd>
        </dl>
        <dl>
          <dt>보험모집질서 위반행위 신고센터</dt>
          <dd>보험계약과 관련한 보험모집질서 문란행위는 보험업법에 의해 처벌받을 수 있습니다.</dd>
          <dd>
            <p  class="list__type1">금융감독원 : 전화 국번없이 1332 / www.fss.or.kr</p>
            <p  class="list__type1">손해보험협회 : 전화 02-3702-8585, 8619 / www.knia.or.kr</p>
          </dd>
        </dl>
        <dl>
          <dt>금융감독원 보험범죄 신고센터</dt>
          <dd>보험범죄는 보험사기방지 특별법 제 8조(보험사기죄)에 의거하여 10년 이하의 징역이나 5천만원 이하의 벌금에 처해지며 보험범죄를 교사한 경우에도 동일한 처벌을 받을 수 있습니다.</dd>
          <dd>
            <p class="list__type1">전화 국번없이 1332</p>
            <p class="list__type1">인터넷 금융감독원 홈페이지(www.fss.or.kr) 내 「보험범죄신고센터」</p>
            <p class="list__type1">보험범죄신고센터(insucop.fss.or.kr)</p>
          </dd>
        </dl>
      </div>
    </section>

    <Popup class="modal-agree" ref="agree" :footerClose="popData.footerClose">
      <template slot="header">
        개인정보 수집 및 이용동의
      </template>
      <div slot="body" class="modal-agree__wrap">
        <div class="modal-agree__text">
          귀사가 금융상품 소개 등을 위하여 본인의 개인(신용)정보를 수집, 이용하고자 하는 경우에는 “개인정보보호법” 제 15조 및 22조, 신용정보의 이용 및 보호에 관한 법률 제 32조 및 제 33조에 따라 동의를 얻어야 합니다.<br />
          이에 본인은 귀사가 아래의 내용과 같이 영업목적으로 본인의 개인(신용)정보를 수집, 이용하는데 동의합니다.
        </div>
        <div class="modal-agree__desc-box">
          <strong>1. 개인정보의 수집 및 이용목적</strong><br />
          <p>- 보험상품 서비스 소개 및 가입안내(전화, SMS)</p>
          <strong>2. 수집하는 개인정보의 항목</strong><br />
          <p>- 개인식별정보(성명, 성별, 생년월일, 휴대전화번호)</p>
          <strong>3. 보유 및 이용기간</strong><br />
          <p>- 동의일로부터 3년이나 고객의 정보삭제 요청 시 즉시 삭제 진행</p>
          <strong>4. 개인정보 수집 주체 : ㈜DB손해보험, ㈜마케팅인슈</strong><br />
          <strong>5. 개인(신용)정보를 제공 받는 자 : (주)DB손해보험, (주)마케팅인슈</strong>
        </div>
        <div class="modal-agree__text">
          본 동의를 거부하시는 경우에는 보험계약 상담 등 정상적인 서비스 제공이 불가능하며 본 동의서에 의한 개인(신용) 정보 조회는 귀하의 신용등급에 영향을 주지 않습니다.<br />
          또한 고객센터(1688-0835)를 통해 철회하거나 보험계약상담 목적의 연락에 대해 중단을 요청 하실 수 있습니다.
        </div>
      </div>
      <template slot="footer">
        <div v-if="popData.agreeCheck" class="modal-agree__checkbox">
          <label>
            <input type="radio" name="agree" value="on"
                   v-model="params.agree"
                   v-on:click="handlePopupToggle('agree')" />
            <span>동의</span>
          </label>
          <label>
            <input type="radio" name="agree" value="off"
                   v-model="params.agree"
                   v-on:click="handlePopupToggle('agree')" />
            <span>미동의</span>
          </label>
        </div>
      </template>
    </Popup>

    <Popup class="modal-consult" ref="consult">
      <template slot="header">상담신청</template>
      <div slot="body" class="modal-consult__text">
        상담신청이 정상적으로<br />신청되었습니다.
      </div>
    </Popup>
  </div>
</template>

<script>
import { isMobile, osName } from 'mobile-device-detect';
import api from '@/utils/api';
import CheckPoint from '@/components/CheckPoint.vue';
import Popup from '@/components/Popup.vue';

export default {
  name: 'Page',
  components: {
    CheckPoint,
    Popup,
  },
  props: [
    'info',
    'title',
    'call',
    'checkPoint',
    'premium',
  ],
  data() {
    return {
      currentTab: 0,
      tabs: [
        '가입안내',
        '보장내용',
        '가입예시',
        '꼭 알아두실 사항',
      ],
      params: {
        company_type: 1,
        page_title: 'good-db',
        conversion_type: 'counsel',
        service_code: 'LS16',
        page: 'good-db',
        chkDays:1,
        device: null,
        device_os: null,
        name: '',
        mobile_num: '',
        birthday: '',
        gender: '',
        agree: '',
      },
      nameCheckList: ['개새끼', '개색기', '개색끼', '개자식', '개보지', '개자지', '개년', '개걸래', '개걸레', '씨발', '씨팔', '씨부랄', '씨바랄', '씹창', '씹탱', '씹보지', '씹자지', '씨방세', '씨방새', '씨펄', '시펄', '십탱', '씨박', '썅', '쌍놈', '쌍넘', '싸가지', '쓰벌', '씁얼', '상넘이', '상놈의', '상놈이', '상놈을', '좆', '좃', '존나게', '존만한', '같은년', '넣을년', '버릴년', '부랄년', '바랄년', '미친년', '니기미', '니미씹', '니미씨', '니미럴', '니미랄', '호로', '후레아들', '호로새끼', '후레자식', '후래자식', '후라들년', '후라들넘', '빠구리', 'script', 'iframe', '병신'],
      telCheckList: ['12345678', '00000000', '11111111', '22222222', '33333333', '44444444', '55555555', '66666666', '77777777', '88888888', '99999999', '1231234', '1234567', '12341234', '0000000', '1111111', '2222222', '3333333', '4444444', '5555555', '6666666', '7777777', '8888888', '9999999'],
      insurance: {
        minAge: '',
        maxAge: '',
        userAge: '',
        price: {},
      },
      premiumResult: {
        check: false,
        name: '',
        price: '',
      },
      popData: {
        agreeCheck: true,
        headerClose: false,
        footerClose: false,
      },
      sid: null,
    }
  },
  computed: {
    simNumber () {
      return isMobile ? this.title.number.mo : this.title.number.pc;
    }
  },
  mounted() {
    if(isMobile) {
      kakaoPixel('2604128586190927182').pageView('방문_M');
    } else {
      kakaoPixel('2604128586190927182').pageView('방문_PC');
    }
    this.params = Object.assign(this.params, this.info.params);
    this.params.device = isMobile ? 'mo' : 'pc';
    this.params.device_os = osName;
    this.sid = this.urlParame('sid');
    if (this.sid) {
      this.params.emid = this.sid;
    } else {
      delete this.params.emid;
    }
  },
  methods: {
    urlParame(query) {
      const path = decodeURIComponent(window.location.href);
      const results = new RegExp('[?&]' + query + '=([^&#]*)').exec(path);
      return results === null ? null : results[1] || null;
    },
    hangulCheck(value, key) {
      for (let i = 0; i < value.length; i++) {
        if (value.charCodeAt(i) >= 0 && value.charCodeAt(i) <= 127){
          const regex = /[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/gi;
          this.params[key] = value.replace(regex, '');
        }
      }
    },
    numberCheck(value, key) {
      const regex = /[^0-9]/g;
      this.params[key] = value.replace(regex, '');
    },
    handleTab(index) {
      this.currentTab = index;
    },
    insuranceAgeCalculator: function (birthday) {
      const d = new Date();
      const today = {
        year: d.getFullYear(),
        month: d.getMonth() + 1,
        date: d.getDate(),
      };
      const birth = {
        year: parseInt(birthday[0]),
        month: parseInt(birthday[1]),
        date: parseInt(birthday[2]),
      };
      let totalMonth = (today.year * 12 + today.month) - (birth.year * 12 + birth.month);
      if (today.date < birth.date) {
        totalMonth -= 1;
      }
      let age = parseInt(totalMonth / 12, 10);
      if ((totalMonth % 12) > 5) {
        age += 1;
      }
      return age;
    },
    ageCalculator(year) {
      const d = new Date();
      const age = d.getFullYear() - year;
      return age + 1;
    },
    checkValue() {
      /* 이름 */
      if (this.params.name === '') {
        alert('이름을 입력해주세요.');
        return false;
      } else {
        for (let i = 0; i < this.nameCheckList.length; i++) {
          if (this.params.name.toLowerCase().indexOf(this.nameCheckList[i]) >= 0) {
            alert('이름을 잘못 입력하셨습니다.');
            return false;
          }
        }
      }

      /* 성별 */
      if (this.params.gender === '') {
        alert('성별을 선택해 주세요.');
        return false;
      }

      /* 생년월일 */
      if (this.params.birthday === '') {
        alert('생년월일 - 반드시 입력하여야 합니다.');
        return false;
      } else if (this.params.birthday.length !== 8) {
        alert('생년월일을 입력하세요.');
      } else {
        const birth = [
          this.params.birthday.substring(0, 4),
          this.params.birthday.substring(4, 6),
          this.params.birthday.substring(6, 8),
        ];
        const birthReg = /^(0[0-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
        this.insurance.minAge = this.premium[this.params.gender].minAge;
        this.insurance.maxAge = this.premium[this.params.gender].maxAge;
        this.insurance.userAge = this.insuranceAgeCalculator(birth);

        if (!birthReg.test(birth[1] + '-' + birth[2])) {
          alert('생년월일 - 입력값이 잘못되었습니다.');
          return false;
        } else  if (this.insurance.userAge < this.insurance.minAge || this.insurance.userAge > this.insurance.maxAge) {
          alert(`본 상품은 보험나이 ${this.insurance.minAge}세부터 ${this.insurance.maxAge}세까지만 보험료 계산이 가능합니다. 그 외에는 전문상담원을 통해 안내드립니다.`);
          return false;
        }
      }

      /* 전화번호 */
      if (this.params.mobile_num === '') {
        alert('휴대폰번호를 입력하세요');
        return false;
      } else if (this.params.mobile_num.length < 10){
        alert('전화번호 형식에 맞춰서 입력하세요.\nex)01012552678)');
        return false;
      } else {
        const tel = this.params.mobile_num;
        if(tel.length < 11){
          this.params.mobile_num1 = tel.substr(0, 3);
          this.params.mobile_num2 = tel.substr(3, 3);
          this.params.mobile_num3 = tel.substr(6);
        }else{
          this.params.mobile_num1 = tel.substr(0, 3);
          this.params.mobile_num2 = tel.substr(3, 4);
          this.params.mobile_num3 = tel.substr(7);
        }
        for (let i = 0; i < this.telCheckList.length; i++) {
          const checkNumber = this.params.mobile_num2 + '' + this.params.mobile_num3;
          if (checkNumber.indexOf(this.telCheckList[i]) >= 0) {
            alert('전화번호를 확인해주세요.');
            return false;
          }
        }
      }

      /* 동의 */
      if (this.params.agree !== 'on') {
        alert('개인정보 수집 및 이용에 동의를 하셔야 상담신청이 가능합니다. ');
        return false;
      }

      return true;
    },
    /* 버튼 */
    premiumCalculation() {
      if (this.checkValue()) {
        this.premiumCalculationResult();
        this.premiumResult.check = true;
        this.premiumResult.name = this.params.name;
        this.premiumResult.price = this.insurance.price.all ? this.insurance.price.all : this.insurance.price[this.insurance.userAge];
        this.statisticsPremiumCalculation();
      } else {
        this.premiumResult.check = false;
      }
    },
    premiumCalculationResult() {
      const startAge = this.insurance.minAge;// 시작하는 출생연도
      const endAge = this.insurance.maxAge;// 끝나는 출생연도
      const counting = endAge - startAge;
      const price = this.premium[this.params.gender].price.reverse();

      let ageKey = startAge;
      if(price.length === 1) {
        this.insurance.price.all = price[0];
      } else {
        for (let i = 0; i <= counting; i++) {
          this.insurance.price[ageKey] = price[i];
          ageKey += 1;
        }
      }
    },
    async freeConsultation() {
      if (this.checkValue()) {
        const response = await api.call('/cpa/attend.cb', {
          method: 'post',
          params: this.params,
        });
        if (response.data.status) {
          if (this.sid) {
            this.receive();
          }
          this.reset();
          this.statisticsFreeConsultation();
          this.handlePopupToggle('consult');
        }
      }
    },
    reset() {
      this.params = {
        ...this.params,
        name: '',
        mobile_num: '',
        birth: '',
        gender: '',
        agree1: '',
        agree2: '',
      };
      this.premiumResult= {
        check: false,
        name: '',
        price: '',
      };
    },
    receive() {
      api.call('/cpa/receive.cb', {
        method: 'get',
        params: {
          acode: 'call',
          sid: this.sid,
        },
      });
    },
    /* 팝업 */
    handlePopupToggle(refName, type) {
      if (type === 'detail') {
        this.popData.agreeCheck = false;
        this.popData.footerClose = true;
        this.$refs[refName].handleOpenClose();
      } else {
        this.popData.agreeCheck = true;
        this.popData.footerClose = false;
        if(refName === 'consult') {
          if (this.params.agree === 'on') {
            this.params.agree = 'off';
          }
          this.$refs[refName].handleOpenClose();
        } else {
          this.$refs[refName].handleOpenClose();
        }
      }
    },
    /* gtag */
    statisticsPremiumCalculation(url) {
      const callback = function () {
        if (typeof (url) != 'undefined') {
          window.location = url;
        }
      };
      if (isMobile) {
        Emf.convCall(1023, 5511, 0, 0, 0);
        gtag('event', 'conversion', {
          'send_to': 'AW-674307215/lMG7CLb6pLoBEI-5xMEC',
          'event_callback': callback
        });
        kakaoPixel('2604128586190927182').pageView();
        kakaoPixel('2604128586190927182').completeRegistration('M_보험료계산');
      } else {
        Emf.convCall(1023, 5509, 0, 0, 0);
        gtag('event', 'conversion', {
          'send_to': 'AW-674307215/zbQwCInKr7oBEI-5xMEC',
          'event_callback': callback
        });
        kakaoPixel('2604128586190927182').pageView();
        kakaoPixel('2604128586190927182').completeRegistration('PC_보험료계산');
      }
      return false;
    },
    statisticsFreeConsultation(url) {
      const callback = function () {
        if (typeof (url) != 'undefined') {
          window.location = url;
        }
      };
      if (isMobile) {
        Emf.convCall(1023, 5512, 0, 0, 0);
        gtag('event', 'conversion', {
          'send_to': 'AW-674307215/ZmpKCP3WlLoBEI-5xMEC',
          'event_callback': callback
        });
        kakaoPixel('2604128586190927182').pageView();
        kakaoPixel('2604128586190927182').completeRegistration('M_상담신청');
      } else {
        Emf.convCall(1023, 5510, 0, 0, 0);
        gtag('event', 'conversion', {
          'send_to': 'AW-674307215/nKzzCJzklLoBEI-5xMEC',
          'event_callback': callback
        });
        kakaoPixel('2604128586190927182').pageView();
        kakaoPixel('2604128586190927182').completeRegistration('PC_상담신청');
      }
      return false;
    },
  },
}
</script>

<style scoped>

</style>
