<script setup>
import { ref, onMounted } from 'vue';

const currentTime = ref('');

const updateTime = () => {
    const now = new Date();
    currentTime.value = now.toLocaleTimeString('ko-KR', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });
};

onMounted(() => {
    updateTime();
    setInterval(updateTime, 1000);
});
</script>

<template>
    <nav class="nav-container">
        <div class="time">{{ currentTime }}</div>
        <div class="icons">
            <span class="material-symbols-outlined">
                signal_cellular_alt
            </span>
            <span class="material-symbols-outlined">
                wifi
            </span>
            <span class="material-symbols-outlined">
                battery_horiz_075
            </span>
        </div>
    </nav>
</template>

<style scoped>
.nav-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8rem 1rem;
    background-color: white;
    z-index: 1000;
}

.nav-content {
    font-size: 0.9rem;
}

.time {
    font-size: 0.9rem;
    font-weight: 500;
}

.icons {
    display: flex;
    gap: 0.4rem;
}

.material-symbols-outlined {
    font-size: 1.2rem;
}

</style>

