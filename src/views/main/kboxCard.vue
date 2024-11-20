<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  balance: {
    type: Number,
    required: true
  },
  modeNo: {
    type: Number,
    required: true
  }
});

const getModeText = (modeNo) => modeNo === 1 ? 'EASY' : 'HARD';

const getAchievementRate = (balance, amount) => {
  return Math.round((balance / amount) * 100);
};
</script>

<template>
  <div class="card">
    <div class="card-header">
      <div class="title-section">
        <span>{{ title }}</span>
        <span class="mode-badge" :class="modeNo === 1 ? 'easy' : 'hard'">
          {{ getModeText(modeNo) }}
        </span>
      </div>
      <div class="amount">
        {{ amount.toLocaleString() }}원
      </div>
    </div>
    <div class="progress-section">
      <div class="achievement">
        달성률 {{ getAchievementRate(balance, amount) }}%
      </div>
      <div class="progress-container">
        <div 
          class="progress-bar" 
          :style="{ width: `${getAchievementRate(balance, amount)}%` }"
          :class="modeNo === 1 ? 'easy' : 'hard'"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  border: none;
  padding: 0;
}

.title-section {
  display: flex;
  align-items: center;
  gap: 10px;
}

.mode-badge {
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.8em;
  font-weight: bold;
}

.easy {
  background-color: #e6f3ff;
  color: #0066cc;
}

.hard {
  background-color: #ffe6e6;
  color: #cc0000;
}

.amount {
  font-weight: bold;
  color: #333;
}

.progress-section {
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 15px;
}

.achievement {
  font-size: 0.9em;
  color: #666;
  min-width: 80px;
}

.progress-container {
  flex-grow: 1;
  height: 8px;
  background-color: #eee;
  border-radius: 4px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  transition: width 0.3s ease;
}

.progress-bar.easy {
  background-color: #0066cc;
}

.progress-bar.hard {
  background-color: #cc0000;
}
</style>