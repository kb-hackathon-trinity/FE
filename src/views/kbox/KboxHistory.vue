<template>
  <div class="container-fluid">
    <!-- 상단 저금통 정보 -->
    <div class="savings-header">
      <h1>{{ kboxName }}</h1>
      <p>자동이체 {{ accountNo }}</p>
      <div class="balance-info">
        <p>
          잔액: <span>{{ formatNumber(balance) }}</span>
        </p>
        <p>
          신규일: <span>{{ newDate }}</span>
        </p>
      </div>
    </div>

    <!-- 거래내역 -->
    <div class="transaction-history">
      <h2>거래내역 ({{ transactions.length }}회차)</h2>
      <div
        v-for="(transaction, index) in transactions"
        :key="transaction.id"
        class="transaction"
      >
        <h3>{{ index + 1 }}회차 | {{ formatMonth(transaction.date) }}</h3>
        <ul>
          <li>
            납입일자: <span>{{ formatDate(transaction.date) }}</span>
          </li>
          <li>
            납입금액(횟수):
            <span>
              <span style="color: #608ee9">
                {{ formatNumber(transaction.amount) }}
              </span>
              ({{ index + 1 }}회)
            </span>
          </li>
          <li>
            납입 후 잔액:
            <span>{{ formatNumber(transaction.afterBalance) }}</span>
          </li>
          <li>
            취급점: <span>{{ transaction.bank }}</span>
          </li>
          <li>
            기타: <span>{{ transaction.detail }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// 상단 저금통 데이터
const kboxName = ref("IPhone16 사기 저금통");
const accountNo = ref("110-345-638615");
const balance = ref(1275000);
const newDate = ref("2024.11.15");

// 거래내역 데이터
const transactions = ref([
  {
    id: 1,
    date: "2024-02-15",
    amount: 104167,
    afterBalance: 104167, // 잔액이 명시되지 않았으므로 null로 설정
    count: 1,
    bank: "국민은행",
    detail: "자동이체 | 전자금융",
  },
  {
    id: 2,
    date: "2024-03-15",
    amount: 104167,
    afterBalance: 208334,
    count: 1,
    bank: "국민은행",
    detail: "자동이체 | 전자금융",
  },
  {
    id: 3,
    date: "2024-04-15",
    amount: 104167,
    afterBalance: 312501,
    count: 1,
    bank: "국민은행",
    detail: "자동이체 | 전자금융",
  },
  {
    id: 4,
    date: "2024-05-15",
    amount: 104167,
    afterBalance: 416668,
    count: 1,
    bank: "국민은행",
    detail: "자동이체 | 전자금융",
  },
  {
    id: 6,
    date: "2024-06-15",
    amount: 104167,
    afterBalance: 520835,
    count: 1,
    bank: "국민은행",
    detail: "자동이체 | 전자금융",
  },
  {
    id: 8,
    date: "2024-07-15",
    amount: 104167,
    afterBalance: 625002,
    count: 1,
    bank: "국민은행",
    detail: "자동이체 | 전자금융",
  },
  {
    id: 10,
    date: "2024-08-15",
    amount: 104167,
    afterBalance: 729169,
    count: 1,
    bank: "국민은행",
    detail: "자동이체 | 전자금융",
  },
  {
    id: 12,
    date: "2024-09-15",
    amount: 104167,
    afterBalance: 833336,
    count: 1,
    bank: "국민은행",
    detail: "자동이체 | 전자금융",
  },
  {
    id: 13,
    date: "2024-10-15",
    amount: 104167,
    afterBalance: 937503,
    count: 1,
    bank: "국민은행",
    detail: "자동이체 | 전자금융",
  },
  {
    id: 15,
    date: "2024-11-15",
    amount: 104167,
    afterBalance: 1041670,
    count: 1,
    bank: "국민은행",
    detail: "자동이체 | 전자금융",
  },
]);

// 숫자에 자릿수 쉼표 추가
const formatNumber = (number) => {
  return number.toLocaleString();
};

// 날짜 형식 변환 (yyyy-MM-dd -> yyyy.MM.dd)
const formatDate = (date) => {
  return date.replace(/-/g, ".");
};

// 월만 표시 (yyyy-MM-dd -> yyyy.MM월)
const formatMonth = (date) => {
  const [year, month] = date.split("-");
  return `${year}.${month}월`;
};
</script>

<style scoped>

.savings-header {
  padding: 20px;
}

.savings-header h1 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.balance-info {
  margin-top: 0.5rem;
  border-bottom: 1px solid #000000;
}

.balance-info p {
  margin: 0.25rem 0;
  color: #7c7c7c;
  display: flex;
  justify-content: space-between; /* 양쪽 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
}

.balance-info span {
  color: black;
  text-align: right;
}

.transaction-history {
  padding: 20px;
}

.transaction {
  margin-bottom: 1.5rem;
  padding: 1rem;
  border-bottom: 1px solid #000000;
}

.transaction h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.transaction ul {
  list-style: none;
  padding: 0;
}

.transaction li {
  margin: 0.25rem 0;
  color: #7c7c7c;
  display: flex;
  justify-content: space-between; /* 양쪽 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
}

.transaction span {
  color: black;
  font-weight: bold;
}
</style>
