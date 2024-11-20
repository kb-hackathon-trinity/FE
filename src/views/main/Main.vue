<script setup>
import KboxCard from '@/views/main/kboxCard.vue';

const cards = [
    { id: 1, mode_no: 2, kbox_name: '아이폰16 사기', target_amount: 1275000, balance: 1000000 },
    { id: 2, mode_no: 1, kbox_name: '여행', target_amount: 3000000, balance: 2000000 },
    { id: 3, mode_no:1 ,kbox_name: '맥북', target_amount: 2000000, balance: 1500000 },
];

const accountInfo = {
    accountNumber: '123-456-789012',
    balance: '1,234,567원',
};
</script>

<template>
    <div class="container-fluid">

        <div class="account-card">
            <div class="account-header">
                <div class="account-image">
                    <img src="@/assets/img/kblogo.svg">
                </div>
                <div class="notification-icon" @click="$router.push('/notification')">
                    <span class="btn-noti material-symbols-outlined">
                        notifications
                    </span>
                </div>
            </div>
            <div class="account-number">
                <p>{{ accountInfo.accountNumber }}</p>
            </div>
            <div class="account-balance">
                <p>{{ accountInfo.balance }}</p>
            </div>
        </div>

        <div class="card-list">
            <KboxCard
                v-for="card in cards"
                :key="card.id"
                :title="card.kbox_name"
                :amount="card.target_amount"
                :balance="card.balance"
                :mode-no="card.mode_no" />
        </div>
    </div>
</template>

<style scoped>
.account-card {
    background-color: #fff;
    border: 4px solid #EAEAEA;
    border-radius: 15px;
    padding: 20px;
    margin-bottom: 20px;
    position: relative;
}

.account-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
}

.account-image {
    margin-bottom: 15px;
}

.account-image img {
    width: 40px;
    max-height: 40px;
    object-fit: cover;
}

.account-number {
    margin-bottom: 10px;
}

.account-number p,
.account-balance p {
    font-size: 0.9em;
    color: #333;
    margin: 0;
}

.account-balance p {
    font-size: 1.3em;
    font-weight: bold;
}

.card-list {
    display: flex;
    flex-direction: column;
    /* 세로 정렬 */
    gap: 15px;
    /* 카드 간격 */
}

.card {
    background-color: #fff;
    border-radius: 8px;
    padding: 15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 100%;
}

h2,
h3 {
    margin-top: 0;
    color: #333;
}

.notification-icon {
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 10px;
}

.notification-icon span {
    font-size: 1.3em;
    color: #666;
}

.btn-noti:hover {
    background-color: #8a8a8a;
    color: #fff;
    border-radius: 50%;
}

</style>