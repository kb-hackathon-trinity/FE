<script setup>
import { ref } from 'vue';

const showDropdown = ref(false);

function toggleDropdown() {
  showDropdown.value = !showDropdown.value;
}
</script>

<template>
    <nav class="navbar">
        <div class="nav-section left">
            <button class="nav-button"><span class="material-symbols-outlined">
                    home
                </span><br />
                홈</button>
        </div>

        <div class="nav-section center">
            <button class="nav-button" @click="toggleDropdown">
                <span class="btn-add material-symbols-outlined">
                    add_circle
                </span>
            </button>
            
            <div v-if="showDropdown" class="dropdown-menu">
                <button class="dropdown-item">일반 저금통</button>
                <hr />
                <button class="dropdown-item">모임 저금통</button>
            </div>
        </div>

        <div class="nav-section right">
            <button class="nav-button"><span class="material-symbols-outlined">
                    person
                </span><br />
                마이페이지</button>
        </div>
    </nav>
</template>

<style scoped>
.navbar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8rem;
    background-color: #ffffff;
    box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
}

.nav-section {
    flex: 1;
    display: flex;
}

.left {
    justify-content: flex-start;
}

.center {
    justify-content: center;
    position: relative; /* Required for dropdown positioning */
}

.right {
    justify-content: flex-end;
}

.nav-button {
    padding: 0.8rem 1rem;
    border: none;
    background: none;
    cursor: pointer;
    font-size: 16px;
}

.nav-button:hover {
    color: #666;
}

.btn-add {
    color: #ffffff;
    background-color: #FFCE0B;
    border-radius: 50%;
}

.dropdown-menu {
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
    overflow: visible;
    z-index: 10;
    margin-bottom: 10px; /* 삼각형을 위한 여백 추가 */
}

.dropdown-menu::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid #ffffff;
    filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.1));
}

.dropdown-item {
    padding: 0.8rem 1rem;
    background: none;
    border: none;
    text-align: center;
    cursor: pointer;
    font-size: 16px;
}

.dropdown-item:hover {
    background-color: #f0f0f0;
}

hr {
    margin: 0.5rem 0 !important;
}
</style>
