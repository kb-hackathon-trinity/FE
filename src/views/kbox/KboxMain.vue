<script setup>
import { computed } from 'vue';

const kbox = 
    { 
        kbox_no : 'test01',
        account_no : '123-456-789012',
        mode_no : 1,
        kbox_name : '아이폰16 사기',
        transfer_date : 15,
        amount : 10000,
        balance : 1000000,
        target_amount : 2000000,
        expiration_date : '2025-11-15'
    };

// 진행률 계산
const progressPercentage = computed(() => {
    return Math.min(Math.round((kbox.balance / kbox.target_amount) * 100), 100);
});

</script>

<template>
    <div class="container-fluid">
        <div class="kbox-card">
            <div class="kbox-header">
                <div class="kbox-logo">
                    <img src="@/assets/img/kblogo.svg">
                </div>
                <h2 class="kbox-name">{{ kbox.kbox_name }}</h2>
            </div>

            <div class="kbox-setting" @click="$router.push(`/kbox/edit/${kbox.kbox_no}`)">
                <span class="btn-setting material-symbols-outlined">
                    settings
                </span>
            </div>
            
            <div class="kbox-info">
                <p>{{ kbox.account_no }}</p>
            </div>

            <div class="kbox-row">
                <span>매월 {{ kbox.transfer_date }}일</span>
                <span>{{ kbox.amount.toLocaleString() }}원</span>
            </div>

            <div class="kbox-row">
                <span>현재금액</span>
                <span>{{ kbox.balance.toLocaleString() }}원</span>
            </div>

            <div class="kbox-row">
                <span>목표금액</span>
                <span>{{ kbox.target_amount.toLocaleString() }}원</span>
            </div>

            <div class="kbox-row">
                <span>목표날짜</span>
                <span>{{ kbox.expiration_date }}</span>
            </div>
        </div>

        <div class="kbox-bottom">
            <div class="progress-section">
                <div class="piggy-image">
                    <img src="@/assets/img/pig.png" alt="저금통">
                </div>
                <div class="progress-container">
                    <div class="progress-text">{{ progressPercentage }}%</div>
                    <div class="progress-bar">
                        <div class="progress-fill" :style="{ height: progressPercentage + '%' }"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.kbox-card {
    background-color: #fff;
    border: 4px solid #EAEAEA;
    border-radius: 15px;
    padding: 20px;
    margin-bottom: 20px;
    position: relative;
}

.kbox-logo img {
    width: 40px;
    max-height: 40px;
    object-fit: cover;
}

.kbox-header {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 15px;
}

.kbox-name {
    margin: 0;
    font-size: 1.5rem;
}

.kbox-info {
    margin-bottom: 10px;
}

.kbox-info p {
    font-size: 0.9em;
    margin: 0;
    color: #666;
}

.kbox-row {
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
    border-bottom: 1px solid #EAEAEA;
}

.kbox-row:last-child {
    border-bottom: none;
    padding-bottom: 0;
}

.kbox-bottom {
    padding: 20px;
    background-color: #fff;
    border-radius: 15px;
    border: 4px solid #EAEAEA;
}

.progress-section {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.piggy-image img {
    width: 100%;
    height: auto;
    object-fit: cover;
}

.progress-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.progress-bar {
    width: 25px;
    height: 200px;
    background-color: #f0f0f0;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
}

.progress-fill {
    width: 100%;
    background-color: #FFB300;
    position: absolute;
    bottom: 0;
    transition: height 0.3s ease;
}

.progress-text {
    margin-top: 8px;
    text-align: center;
    font-size: 0.9em;
    color: #666;
}

.kbox-setting {
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 10px;
}

.kbox-setting span {
    font-size: 1.3em;
    color: #666;
}

.kbox-setting:hover {
    background-color: #8a8a8a;
    color: #fff;
    border-radius: 50%;
}

</style>