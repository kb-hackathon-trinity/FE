<script setup>
import { ref, onMounted, computed } from "vue";

// Props 명시적으로 정의
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
  modeNo: {
    type: Number,
    required: true,
  },
});

// Progress bar width 상태
const progressWidth = ref(0);

// 달성률 계산
const getAchievementRate = computed(() => {
  return Math.round((props.balance / props.amount) * 100); // props로 접근
});

// 동적으로 CSS 클래스 결정
const rateClass = computed(() => {
  if (getAchievementRate.value > 70) {
    return "gold";
  } else if (getAchievementRate.value > 30) {
    return "wh";
  } else {
    return "bronze";
  }
});

// EASY / HARD 모드 텍스트 반환
const getModeText = (modeNo) => (modeNo === 1 ? "EASY" : "HARD");

// Mounted 시 애니메이션 실행
onMounted(() => {
  let currentWidth = 0;
  const targetWidth = getAchievementRate.value;

  const interval = setInterval(() => {
    if (currentWidth >= targetWidth) {
      progressWidth.value = targetWidth;
      clearInterval(interval);
    } else {
      currentWidth += 1; // 증가 속도 조절 가능
      progressWidth.value = currentWidth;
    }
  }, 10); // 속도 조정 가능
});
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
      <div class="amount">{{ amount.toLocaleString() }}원</div>
    </div>
    <div class="progress-section">
      <div class="achievement">달성률 {{ progressWidth }}%</div>
      <div class="progress-container">
        <div
          class="progress-bar"
          :style="{ width: `${progressWidth}%` }"
          :class="rateClass"
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
  transition: width 0.1s ease; /* 부드러운 전환 */
}

.progress-bar.bronze {
  background-color: #cd7f32;
}

.progress-bar.wh {
  background-color: silver;
}

.progress-bar.gold {
  background-color: #ffd700;
}
</style>
