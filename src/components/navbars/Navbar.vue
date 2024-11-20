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
            <!-- Dropdown menu -->
            <div v-if="showDropdown" class="dropdown-menu">
                <button class="dropdown-item">Menu 1</button>
                <button class="dropdown-item">Menu 2</button>
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

/* Dropdown menu styling */
.dropdown-menu {
    position: absolute;
    bottom: 100%; /* Position above the button */
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
    overflow: hidden;
    z-index: 10;
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
</style>
