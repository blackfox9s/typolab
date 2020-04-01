<template>
  <Page
    :info="info"
    :title="title"
    :call="call"
    :checkPoint="checkPoint"
    :premium="premium">
    <div slot="terms1">
      <dl>
        <dt>보험기간, 납입기간, 가입나이, 납입주기 등</dt>
        <dd class="detail__table">
          <table>
            <thead>
            <tr>
              <th>구분</th>
              <th>보험<br class="mo-only" />기간</th>
              <th>납입<br class="mo-only" />기간</th>
              <th>가입<br class="mo-only" />나이</th>
              <th>납입<br class="mo-only" />주기</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th rowspan="3">연만기</th>
              <td>10년</td>
              <td>전기납</td>
              <td rowspan="3">만18세 ~ 80세</td>
              <td rowspan="4">월납<br />연납</td>
            </tr>
            <tr>
              <td>15년</td>
              <td>전기납</td>
            </tr>
            <tr>
              <td>20년</td>
              <td>전기납, 10, 15년납</td>
            </tr>
            <tr>
              <th>세만기</th>
              <td>80세</td>
              <td>10, 15, 20, 25, 30년납</td>
              <td>만18세 ~ 59세</td>
            </tr>
            </tbody>
          </table>
        </dd>
        <dd>
          <ul>
            <li class="list__type1">
              주1) 특별약관별로 보험기간, 가입나이 등이 상이할 수 있습니다.<br />
              자세한 내용은 홈페이지 상품공시실의 무배당 프로미라이프 참좋은운전자보험(TM) 1908의 사업방법서 별지를 확인하여 주시기 바랍니다.
            </li>
            <li class="list__type1 pointAccent">
              주2) 3년만기 자동갱신 특별약관은 3년마다 자동갱신되며, 갱신시에 적용되는 보험료는 매3년마다 재산출한 보험료를 적용합니다.<br />
              이 경우 재산출한 보험료는 높아질 수 있습니다. (잔여 갱신시간이 3년 미만일 경우 1~2년 만기로 갱신됩니다.)<br />
              갱신특약의 보험료 납입은 보통약관의 보험료 납입기간과관계없이 보험기간동안 전기납으로 계속 납입해야 합니다.
            </li>
            <li class="list__type1">
              <em>주3) 타이어파손교체비용(수리제외,연간1회한)보장(자가용)(실손)(1년만기자동갱신) 특별약관은 1년마다 자동갱신되며 갱신시에 적용되는 보험료는 매년마다 재산출한 보험료를 적용합니다. 이경우 재산출한 보험료는 높아질 수 있습니다. 또한 (보험가입나이 + 5)세와 보통약관 종료시 보험나이 중 적은 연령까지 갱신됩니다.</em>
            </li>
          </ul>
        </dd>
      </dl>
      <dl>
        <dt>적용이율 및 적립이율에 관한 사항</dt>
        <dd>
          보장부분 적용이율 : 2.5%<br />
          적립부분 적립이율 : 이 계약의 공시이율(보장성공시이율1701)
          <p class="list__type1">최저보증이율 연복리 0.3%</p>
        </dd>
      </dl>
      <dl>
        <dt>보험료 할인</dt>
        <dd class="detail__table">
          <table>
            <colgroup>
              <col width="28%" />
              <col width="24%" />
              <col width="*" />
            </colgroup>
            <thead>
            <tr>
              <th>할인제도</th>
              <th>할인율</th>
              <th>할인조건</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>당사 장기보험<br />가입자할인</td>
              <td>보험료의 1%</td>
              <td class="left">최초 가입시점에 당사 유효한 장기보험(단체보험 제외)의 계약자(피보험자)가 이 계약의 피보험자로 가입시</td>
            </tr>
            <tr>
              <td>당사 자동차보험<br />가입자할인</td>
              <td>보험료의 2%</td>
              <td class="left">최초 가입시점에 당사 유효한 자동차보험의 피보험자가 이 계약의(피보험자)로 가입한 경우</td>
            </tr>
            </tbody>
          </table>
        </dd>
        <dd>
          보험료할인은 보험료의 2%를 한도로 함
        </dd>
      </dl>
      <dl>
        <dt>기타제도</dt>
        <dd>
          중도인출 : 보험계약일로부터 1년후 신청가능<br />
          교통상해50%이상후유장해 발생시 피보험자의 보장보험료를 납입면제<br />
          <p class="list__type1">각 제도별 신청 제한사항은 약관 및 사업방법서별지를 참조하시기 바랍니다.</p>
        </dd>
      </dl>
    </div>
    <div slot="terms2">
      <dl>
        <dt>보통약관 및 의무가입 특별약관</dt>
        <dd class="detail__table">
          <table>
            <colgroup>
              <col width="30%" />
              <col width="*" />
              <col width="18%" />
            </colgroup>
            <thead>
            <tr>
              <th>보장내용</th>
              <th>지급사유</th>
              <th>가입금액<br />(만원)</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>자동차부상치료비<br />(1~3급)</td>
              <td class="left">보험기간중 피보험자가 교통사고로 자동차손해배상보장법 시행령상의 부상등급 중 1~3급에 해당되는 경우 가입금액을 지급</td>
              <td>100</td>
            </tr>
            <tr>
              <td>[의무가입]<br />교통상해 50% 후유장해(1회한)</td>
              <td class="left">보험기간중 교통상해사고로 50%이상 후유장해가 발생한 경우 1회에 한하여 가입금액을 지급</td>
              <td>1000</td>
            </tr>
            </tbody>
          </table>
        </dd>
      </dl>
      <dl>
        <dt>특별약관</dt>
        <dd class="detail__table">
          <table>
            <colgroup>
              <col width="32%" />
              <col width="*" />
              <col width="18%" />
            </colgroup>
            <thead>
            <tr>
              <th>보장내용</th>
              <th>지급사유</th>
              <th>가입금액<br />(만원)</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>자동차<br class="mo-only" />부상치료비Ⅲ</td>
              <td class="left">보험기간중 교통사고로 자동차손해배상보장법시행령상의 부상등급(1~14급)에 해당하는 경우 가입금액을 지급</td>
              <td>5</td>
            </tr>
            <tr>
              <td>교통상해입원일당<br />(1일이상 180일한도)</td>
              <td class="left">보험기간중 교통상해사고로 1일이상 입원하여 치료를 받는경우 입원 1일당 가입금액을 지급 (1회 입원당 180일 한도)</td>
              <td>3</td>
            </tr>
            <tr>
              <td>응급실내원보험금<br />(상해)</td>
              <td class="left">보험기간중 피보험자가 특약의 보험기간 중에 '응급환자'로서 또는 '응급환자'에는 해당하지 않으나 약관에서 정한 상해로 인하여 응급실에 내원하여 진료를 받은 경우 매 내원시마다 특약 보험가입금액을 지급</td>
              <td>5</td>
            </tr>
            <tr>
              <td>교통상해80%이상<br />후유장해생활자금<br />(매월7년간지급)</td>
              <td class="left">보험기간중 운전자교통상해로 장해분류표상 장해지급률이 80%이상에 해당하는 장해상태가 되었을 때 1회에 한하여 가입금액을 7년 동안 매월 지급. 매월 또는 매년 지급형태의 담보의 경우 사고발생일에 확정 지급하여 드리며, 만일 사고발생일이 없을 경우에는 해당월의 마지막 영업일을 사고발생일로 함. 또한 매월 또는 매년 지급형태의 담보의 경우 보험수익자의 요청에 따라 일시지급이 가능하며, 이 경우에는 평균공시이율로 할인한 금액을 지급</td>
              <td>500</td>
            </tr>
            <tr>
              <td>교통상해사망</td>
              <td class="left">보험기간중 교통상해사고로 사망한 경우 가입금액을 지급</td>
              <td>10,000</td>
            </tr>
            <tr>
              <td>자가용운전자 <br class="mo-only" />교통사고처리지원금Ⅳ<br />(실손)</td>
              <td class="left">
                보험기간중 자가용자동차 운전중사고로 피해자(부모,배우자, 자녀 제외)에게 아래의 상해를 입힌 경우 피보험자가 형사합의금으로 지급한 금액을 피해자 1인당 가입금액내 한도로 실손보상함<br />
                (1억원 가입기준 금액 예시)<br />
                피해자 사망시 : 1억원(한도)<br />
                보험기간중 중대법규위반 교통사고로 피해자가 42일(피해자 1인을 기준) 이상 치료를 요한다는 진단을 받은 경우<br />
                > 42~69일 : 1,000만원(한도)<br />
                > 70~139일 : 5,000만원(한도)<br />
                > 140일이상 : 1억원(한도)<br />
                보험기간중 일반교통사고로 피해자에게 중상해를 입혀 검찰에 의해 공소제기되거나
                자동차손해배상보장법 시행령 제3조에서 정한 부상급수 1급, 2급 또는 3급에 해당하는 부상을 입힌 경우 : 1억원(한도)(다수가입시 비례보상)
              </td>
              <td>7,000</td>
            </tr>
            <tr>
              <td>자동차사고 벌금<br />(실손)</td>
              <td class="left">보험기간중 운전중 대인사고로 벌금확정판결로 벌금을 부담한 경우 가입금액을 한도록 실손보상 (다수가입시 비례보상)</td>
              <td>3,000</td>
            </tr>
            <tr>
              <td>자동차사고 변호사선임비용Ⅲ<br />(실손)</td>
              <td class="left">보험기간중 운전중 대인사고로 구속 또는 정식기소되어 변호사선임비용을 부담한 경우 가입금액을 한도록 실손보상 (다수가입시 비례보상)</td>
              <td>2,000</td>
            </tr>
            </tbody>
          </table>
        </dd>
      </dl>
      <dl>
        <dt>보상하지 않는 손해</dt>
        <dd>
          <ol class="list__type2">
            <li><i>1)</i> 고의사고 및 전문 암벽등반 등 직업, 직무, 동호회 활동 중 사고(상해관련 담보에 해당)</li>
            <li><i>2)</i> 교통사고처리지원금, 자동차사고벌금, 자동차사고변호사선임비용은 음주, 무면허, 도주(뺑소니)사고</li>
            <li><i>3)</i> 기타 보상하지 않는 손해는 약관 참조</li>
          </ol>
        </dd>
      </dl>
    </div>
    <div slot="terms3">
      <dl>
        <dt>보험료예시</dt>
        <dd>
          <ul>
            <li class="list__type1">기준: 상해1급, 자가용운전자, 20년만기 20년간 매월 납입 기준 남녀동일 14,900원</li>
            <li class="list__type1">아래의 보험료는 예시이며 가입나이, 성별, 납입기간 등에 따라 달라질 수 있습니다</li>
          </ul>
        </dd>
        <dd class="detail__table">
          <table>
            <caption>[단위: 원]</caption>
            <colgroup>
              <col width="12%" />
              <col width="*" />
              <col width="18%" />
              <col width="12%" span="3" />
            </colgroup>
            <thead>
            <tr>
              <th rowspan="2">구분</th>
              <th rowspan="2">담보명</th>
              <th rowspan="2">가입금액<br />(만원)</th>
              <th colspan="3">남자</th>
            </tr>
            <tr>
              <th>30세</th>
              <th>40세</th>
              <th>50세</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>기본</td>
              <td class="left">자동차 부상치료비(1~3급)</td>
              <td class="right">100</td>
              <td class="right">117</td>
              <td class="right">117</td>
              <td class="right">117</td>
            </tr>
            <tr>
              <td>특약</td>
              <td class="left">자동차부상치료비Ⅲ</td>
              <td class="right">5</td>
              <td class="right">519</td>
              <td class="right">519</td>
              <td class="right">519</td>
            </tr>
            <tr>
              <td>특약</td>
              <td class="left">교통상해입원일당 (1일이상180일한도)</td>
              <td class="right">3</td>
              <td class="right">1,839</td>
              <td class="right">1,848</td>
              <td class="right">1,998</td>
            </tr>
            <tr>
              <td>특약</td>
              <td class="left">응급실내원보험금(상해)</td>
              <td class="right">5</td>
              <td class="right">625</td>
              <td class="right">625</td>
              <td class="right">630</td>
            </tr>
            <tr>
              <td>특약</td>
              <td class="left">교통상해 50%후유장해 (1회한)</td>
              <td class="right">1,000</td>
              <td class="right">60</td>
              <td class="right">70</td>
              <td class="right">70</td>
            </tr>
            <tr>
              <td>특약</td>
              <td class="left">교통상해 80%이상 후유장해생활자금 (매월7년간지급)</td>
              <td class="right">500</td>
              <td class="right">1,330</td>
              <td class="right">1,505</td>
              <td class="right">1,600</td>
            </tr>
            <tr>
              <td>특약</td>
              <td class="left">교통상해사망</td>
              <td class="right">10,000</td>
              <td class="right">3,000</td>
              <td class="right">3,190</td>
              <td class="right">3,480</td>
            </tr>
            <tr>
              <td>특약</td>
              <td class="left">자가용운전자 교통사고처리지원금Ⅳ (실손)</td>
              <td class="right">7,000</td>
              <td class="right">3,001</td>
              <td class="right">3,002</td>
              <td class="right">3,002</td>
            </tr>
            <tr>
              <td>특약</td>
              <td class="left">자동차사고벌금Ⅱ(실손)</td>
              <td class="right">3,000</td>
              <td class="right">288</td>
              <td class="right">288</td>
              <td class="right">288</td>
            </tr>
            <tr>
              <td>특약</td>
              <td class="left">자동차사고 변호사선임비용Ⅲ(실손)</td>
              <td class="right">2,000</td>
              <td class="right">221</td>
              <td class="right">221</td>
              <td class="right">221</td>
            </tr>
            </tbody>
            <tfoot>
            <tr>
              <th colspan="3">보장보험료</th>
              <td class="right">11,000</td>
              <td class="right">11,385</td>
              <td class="right">11,925</td>
            </tr>
            <tr>
              <th colspan="3">적립보험료</th>
              <td class="right">3,900</td>
              <td class="right">3,515</td>
              <td class="right">2,975</td>
            </tr>
            <tr>
              <th colspan="3">납입보험료</th>
              <td class="right">14,900</td>
              <td class="right">14,900</td>
              <td class="right">14,900</td>
            </tr>
            </tfoot>
          </table>
        </dd>
        <dd class="detail__table">
          <table>
            <caption>[단위: 원]</caption>
            <colgroup>
              <col width="12%" />
              <col width="*" />
              <col width="18%" />
              <col width="12%" span="3" />
            </colgroup>
            <thead>
            <tr>
              <th rowspan="2">구분</th>
              <th rowspan="2">담보명</th>
              <th rowspan="2">가입금액<br />(만원)</th>
              <th colspan="3">여자</th>
            </tr>
            <tr>
              <th>30세</th>
              <th>40세</th>
              <th>50세</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>기본</td>
              <td class="left">자동차 부상치료비(1~3급)</td>
              <td class="right">100</td>
              <td class="right">60</td>
              <td class="right">60</td>
              <td class="right">60</td>
            </tr>
            <tr>
              <td>특약</td>
              <td class="left">자동차부상치료비Ⅲ</td>
              <td class="right">5</td>
              <td class="right">235</td>
              <td class="right">235</td>
              <td class="right">235</td>
            </tr>
            <tr>
              <td>특약</td>
              <td class="left">교통상해입원일당 (1일이상180일한도)</td>
              <td class="right">3</td>
              <td class="right">1,917</td>
              <td class="right">2,547</td>
              <td class="right">3,916</td>
            </tr>
            <tr>
              <td>특약</td>
              <td class="left">응급실내원보험금(상해)</td>
              <td class="right">5</td>
              <td class="right">420</td>
              <td class="right">420</td>
              <td class="right">430</td>
            </tr>
            <tr>
              <td>특약</td>
              <td class="left">교통상해 50%후유장해 (1회한)</td>
              <td class="right">1,000</td>
              <td class="right">30</td>
              <td class="right">30</td>
              <td class="right">30</td>
            </tr>
            <tr>
              <td>특약</td>
              <td class="left">교통상해 80%이상 후유장해생활자금 (매월7년간지급)</td>
              <td class="right">500</td>
              <td class="right">515</td>
              <td class="right">620</td>
              <td class="right">615</td>
            </tr>
            <tr>
              <td>특약</td>
              <td class="left">교통상해사망</td>
              <td class="right">10,000</td>
              <td class="right">1,640</td>
              <td class="right">1,670</td>
              <td class="right">1,830</td>
            </tr>
            <tr>
              <td>특약</td>
              <td class="left">자가용운전자 교통사고처리지원금Ⅳ (실손)</td>
              <td class="right">7,000</td>
              <td class="right">3,001</td>
              <td class="right">3,001</td>
              <td class="right">3,001</td>
            </tr>
            <tr>
              <td>특약</td>
              <td class="left">자동차사고벌금Ⅱ(실손)</td>
              <td class="right">3,000</td>
              <td class="right">288</td>
              <td class="right">288</td>
              <td class="right">288</td>
            </tr>
            <tr>
              <td>특약</td>
              <td class="left">자동차사고 변호사선임비용Ⅲ(실손)</td>
              <td class="right">2,000</td>
              <td class="right">221</td>
              <td class="right">221</td>
              <td class="right">221</td>
            </tr>
            </tbody>
            <tfoot>
            <tr>
              <th colspan="3">보장보험료</th>
              <td class="right">8,327</td>
              <td class="right">9,092</td>
              <td class="right">10,626</td>
            </tr>
            <tr>
              <th colspan="3">적립보험료</th>
              <td class="right">6,573</td>
              <td class="right">5,808</td>
              <td class="right">4,274</td>
            </tr>
            <tr>
              <th colspan="3">납입보험료</th>
              <td class="right">14,900</td>
              <td class="right">14,900</td>
              <td class="right">14,900</td>
            </tr>
            </tfoot>
          </table>
        </dd>
      </dl>
      <dl>
        <dt>해지환급금 예시</dt>
        <dd>
          <ul>
            <li class="list__type1">기준: 상해1급, 자가용운전자, 남자 40세, 20년만기 20년간 매월 납입, 만기일부환급형</li>
          </ul>
        </dd>
        <dd class="detail__table pc-only">
          <table>
            <caption>[단위: 원, %]</caption>
            <thead>
            <tr>
              <th rowspan="2">경과년수</th>
              <th rowspan="2">납입 보험료</th>
              <th colspan="2">최저보증이율(0.3%)</th>
              <th colspan="2">당사 공시시율과 평균공시이율 중 낮은 이율(1.85%)</th>
              <th colspan="2">당사공시이율 (1.85%)</th>
            </tr>
            <tr>
              <th>해지 환급금</th>
              <th>환급률</th>
              <th>해지 환급금</th>
              <th>환급률</th>
              <th>해지 환급금</th>
              <th>환급률</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>1</td>
              <td class="right">178,800</td>
              <td class="right">0</td>
              <td class="right">0.00%</td>
              <td class="right">0</td>
              <td class="right">0.00%</td>
              <td class="right">0</td>
              <td class="right">0.00%</td>
            </tr>
            <tr>
              <td>3</td>
              <td class="right">536,400</td>
              <td class="right">67,570</td>
              <td class="right">12.6%</td>
              <td class="right">69,670</td>
              <td class="right">12.9%</td>
              <td class="right">69,670</td>
              <td class="right">12.9%</td>
            </tr>
            <tr>
              <td>5</td>
              <td class="right">894,000</td>
              <td class="right">136,100</td>
              <td class="right">15.2%</td>
              <td class="right">141,950</td>
              <td class="right">15.8%</td>
              <td class="right">141,950</td>
              <td class="right">15.8%</td>
            </tr>
            <tr>
              <td>10</td>
              <td class="right">1,788,000</td>
              <td class="right">334,610</td>
              <td class="right">18.7%</td>
              <td class="right">359,200</td>
              <td class="right">20.0%</td>
              <td class="right">359,200</td>
              <td class="right">20.0%</td>
            </tr>
            <tr>
              <td>20</td>
              <td class="right">3,576,000</td>
              <td class="right">689,010</td>
              <td class="right">19.2%</td>
              <td class="right">802,180</td>
              <td class="right">22.4%</td>
              <td class="right">802,180</td>
              <td class="right">22.4%</td>
            </tr>
            </tbody>
          </table>
        </dd>
        <dd class="detail__table mo-only">
          <table>
            <caption>[단위: 원, %]</caption>
            <tbody>
            <tr>
              <th rowspan="2">경과년수<br />(납입보험료)</th>
              <th>최저보증이율(0.3%)</th>
              <th>당사 공시시율과 평균공시이율 중 낮은 이율(1.85%)</th>
              <th>당사공시이율 (1.85%)</th>
            </tr>
            <tr>
              <th>해지환급금<br />(환급률)</th>
              <th>해지환급금<br />(환급률)</th>
              <th>해지환급금<br />(환급률)</th>
            </tr>
            <tr>
              <td>1년<br />(178,800)</td>
              <td class="right">0<br />(0.00%)</td>
              <td class="right">0<br />(0.00%)</td>
              <td class="right">0<br />(0.00%)</td>
            </tr>
            <tr>
              <td>3년<br />(536,400)</td>
              <td class="right">67,570<br />(12.6%)</td>
              <td class="right">69,670<br />(12.9%)</td>
              <td class="right">69,670<br />(12.9%)</td>
            </tr>
            <tr>
              <td>5년<br />(894,000)</td>
              <td class="right">136,100<br />(15.2%)</td>
              <td class="right">141,950<br />(15.8%)</td>
              <td class="right">141,950<br />(15.8%)</td>
            </tr>
            <tr>
              <td>10년<br />(1,788,000)</td>
              <td class="right">334,610<br />(18.7%)</td>
              <td class="right">359,200<br />(20.0%)</td>
              <td class="right">359,200<br />(20.0%)</td>
            </tr>
            <tr>
              <td>20년<br />(3,576,000)</td>
              <td class="right">689,010<br />(19.2%)</td>
              <td class="right">802,180<br />(22.4%)</td>
              <td class="right">802,180<br />(22.4%)</td>
            </tr>
            </tbody>
          </table>
        </dd>
        <dd>
          <ol class="list__type2">
            <li class="pointAccent"><i>1)</i>20년 만기시에 환급금이 802,180원인 만기일부 환급형 입니다. 예시된 금액은 이율에 따라 변동될 수 있습니다.</li>
            <li class="pointAccent"><i>2)</i>위 예상해지환급금은 적립부분 순보험료(적립부분 영업보험료에서 회사운영경비를 차감한 금액)를 해당이율로 부리, 적립한 것으로 향후 이계약의 공시이율, 계약내용변경, 보험료 실납입일자 등에 따라 변동될 수 있으며 미래의 수익을 보장하는 것은 아닙니다.
            </li>
            <li><i>3)</i>최저보증이율(0.3%), 평균공시이율 (2019년 기준 2.5%) 및 당사 공시이율 (2020년 2월 기준 1.85%)을 기준으로 산출된 금액입니다.</li>
            <li><i>4)</i>실제 해지 및 만기시에는 금리연동형 상품의 적립부분 부리이율인 이 계약의 공시이율(보장성공시이율1701)을 적용하여 산출하므로 공시이율 변동에 따라 실제 환급금 및 환급률은 달라질 수 있습니다.</li>
            <li><i>5)</i>평균공시이율은 감독원장이 정하는 바에 따라, 전년 9월말 기준으로 직전 12개월 간 전체 보험회사 공시이율의 평균으로, 판매시점의 공시이율을 한도로 합니다.</li>
            <li><i>6)</i>공시이율은 매월 1일 회사가 정하며, 매월 1일부터 말일까지 1개월간 확정 적용합니다.</li>
            <li><i>7)</i>상기 예시금액은 세전기준으로, 관련세법에서 정하는 요건에 부합하는 경우 과세가 가능합니다.</li>
          </ol>
        </dd>
      </dl>
    </div>
  </Page>
</template>

<script>
import Page from '@/components/Page.vue';

export default {
  name: 'Drive',
  components: {
    Page,
  },
  props: [
    'call',
  ],
  data() {
    return {
      info: {
        name: '무배당 프로미라이프 참좋은운전자보험(TM)',
        class: 'page-driver',
        type: '운전자',
        description: '',
        params: {
          category_code: 'DR',
        },
      },
      title: {
        number: {
          pc: '손해보험협회 심의필 제28105호(2020.03.03)',
          mo: '손해보험협회 심의필 제28106호(2020.03.03)'
        },
        text1: '대한민국 첫번째 운전자보험',
        text2: 'DB손해보험<br /> 운전자보험',
      },
      checkPoint: [
        {
          icon: 'driver_icon1.png',
          text1: '교통사고 80%이상<br />후유장해',
          text2: '매월 생활자금 보장',
          text3: '(특약)',
        },
        {
          icon: 'driver_icon2.png',
          text1: '교통상해입원일당',
          text2: '1일 이상 180일 한도',
          text3: '(특약)',
        },
        {
          icon: 'driver_icon3.png',
          text1: '자동차사고 변호사<br /> 선임비용',
          text2: '교통사고처리지원금 보장',
          text3: '(특약)',
        }
      ],
      premium: {
        m: {
          start: 1999,
          end: 1956,
          minAge: 20,
          maxAge: 65,
          price: [
            '14,900',
          ],
        },
        f: {
          start: 1999,
          end: 1956,
          minAge: 20,
          maxAge: 65,
          price: [
            '14,900',
          ],
        },
      },
    }
  },
  mounted() {}
}
</script>

<style scoped>

</style>
