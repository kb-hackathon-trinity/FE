<template>
  <div class="container-fluid">
    <!-- 상단 금액 및 금리 정보 -->
    <div class="header-info">
      <div>
        <p>받으실 금액</p>
        <p class="highlight">{{ formatNumber(receivedAmount) }}원</p>
      </div>
      <div>
        <p>적용금리</p>
        <p>{{ formatInterestRate(interestRate) }}%</p>
      </div>
    </div>

    <!-- 세부 정보 -->
    <div class="details">
      <div class="detail-item" style="border-top: 1px solid #000000">
        <span>원금</span>
        <span>{{ formatNumber(principal) }}원</span>
      </div>
      <div class="detail-item">
        <span>이자(세전)</span>
        <span>{{ formatNumber(preTaxInterest) }}원</span>
      </div>
    </div>

    <!-- 세금 정보 -->
    <div class="details">
      <p>세금</p>
      <div class="tax-info">
        <div class="detail-item-box">
          <span>소득세</span>
          <span>{{ formatNumber(incomeTax) }}원</span>
        </div>
        <div class="detail-item-box">
          <span>지방소득세</span>
          <span>{{ formatNumber(localIncomeTax) }}원</span>
        </div>
      </div>
    </div>

    <!-- 과세 구분 -->
    <div class="details">
      <div class="detail-item">
        <span>과세구분</span>
        <span>{{ taxCategory }}</span>
      </div>
      <div class="detail-item">
        <span>기준일</span>
        <span>{{ standardDate }}</span>
      </div>
      <div class="detail-item">
        <span>만기일</span>
        <span>{{ maturityDate }}</span>
      </div>
    </div>

    <!-- 하단 버튼 -->
    <div class="button-container">
      <button @click="handleCancel">해지</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const receivedAmount = ref(999900);
const interestRate = ref(1.0);
const principal = ref(990000);
const preTaxInterest = ref(9900);
const incomeTax = ref(1380);
const localIncomeTax = ref(130);
const taxCategory = ref("일반과세");
const standardDate = ref("2024.11.15");
const maturityDate = ref("2025.11.15");

// 숫자 형식 포맷팅 함수
const formatNumber = (number) => {
  return number.toLocaleString();
};

// 소숫점 둘째자리까지 변환하는 함수
const formatInterestRate = (rate) => {
  return parseFloat(rate).toFixed(2); // 소숫점 둘째자리까지 변환
};

// 버튼 클릭 핸들러
const handleCancel = () => {
  confirm("정말 해지하시겠습니까?");
};
</script>

<style scoped>

.header-info {
  display: flex;
  justify-content: space-between;
  text-align: center;
  padding: 20px;
}

.header-info p {
  margin: 0;
}

.highlight {
  font-size: 1.2rem;
  font-weight: bold;
  color: #000;
}

.details {
  padding: 20px;
}

.detail-item {
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid #000000;
}

.detail-item-box {
  display: flex;
  justify-content: space-between;
  margin: 1rem 0.5rem;
  border-bottom: none;
}

.tax-info {
  background-color: #ededec;
  padding: 0.5rem;
}

.button-container {
  text-align: center;
  margin-top: 2rem;
}

button {
  background-color: #ffce0b;
  border: none;
  padding: 0.5rem 2rem;
  font-size: 1rem;
  color: #000;
  border-radius: 12px;
  cursor: pointer;
  width: 90%;
  height: 54px;
}
</style>
