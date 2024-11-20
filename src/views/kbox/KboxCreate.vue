<script setup>
import { ref, watch, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isEditMode = computed(() => route.name === 'kbox-edit');

const isReadonly = computed(() => {
    if (!isEditMode.value) return false;
    
    return {
        target_amount: true,
        target_months: true,
        mode: true,
        amount: true,
        expiration_date: true,
        interest_rate: true,
        principal: true,
        interest: true
    };
});

const kboxInfo = ref({
    kbox_name: '',
    target_amount: '',
    expiration_date: '',
    transfer_date: '',
    account_no: '',
    mode: '',
    interest_rate: '',
    amount: '',
});

const selectedMode = ref(''); // 선택된 모드 상태 관리

const selectMode = (mode) => {
    selectedMode.value = mode;
    kboxInfo.value.mode = mode;
};

const target_months = ref('');

watch([target_months, kboxInfo], () => {
    calculateExpirationDate();
    calculateAmount();
}, { deep: true });

const calculateAmount = () => {
    if (kboxInfo.value.target_amount && target_months.value) {
        const amount = Math.ceil(kboxInfo.value.target_amount / target_months.value / 10) * 10;
        kboxInfo.value.amount = amount;
    } else {
        kboxInfo.value.amount = '';
    }
};

const calculateExpirationDate = () => {
    if (target_months.value) {
        const today = new Date();
        const futureDate = new Date(today.setMonth(today.getMonth() + parseInt(target_months.value)));
        kboxInfo.value.expiration_date = futureDate.toISOString().split('T')[0];
    } else {
        kboxInfo.value.expiration_date = '';
    }
};

const principal = computed(() => {
    if (kboxInfo.value.amount && target_months.value) {
        return kboxInfo.value.amount * target_months.value;
    }
    return '';
});

</script>

<template>
    <div class="container-fluid">
        <h2>{{ isEditMode ? '저금통 수정' : '저금통 생성' }}</h2>
        
        <div class="kbox-create-form">
            <div class="kbox-setting-card">
                <div class="kbox-row">
                    <span>목표</span>
                    <input id="kbox-name"
                        class="kbox-input"
                        v-model="kboxInfo.kbox_name">
                </div>
                <div class="kbox-row">
                    <span>목표 금액</span>
                    <div>
                        <input id="kbox-target-amount"
                            class="kbox-input"
                            v-model="kboxInfo.target_amount"
                            :readonly="isReadonly.target_amount">원
                    </div>
                </div>
                <div class="kbox-row">
                    <span>목표 개월</span>
                    <div>
                        <input id="kbox-target-months"
                            class="kbox-input"
                            v-model="target_months">개월
                    </div>
                </div>
                <div class="kbox-row">
                    <span>이체 날짜</span>
                    <div>
                        매월 <input id="kbox-transfer-date"
                            class="kbox-input"
                            v-model="kboxInfo.transfer_date">일
                    </div>
                </div>
                <div class="kbox-row">
                    <span>출금 계좌</span>
                    <input id="kbox-account-no"
                        class="kbox-input"
                        v-model="kboxInfo.account_no">
                </div>
                <div class="kbox-btn-group">
                    <button class="btn mode-btn" 
                        :class="{ 'selected': selectedMode === 1 }"
                        @click="selectMode(1)">
                        이지
                    </button>
                    <button class="btn mode-btn"
                        :class="{ 'selected': selectedMode === 2 }"
                        @click="selectMode(2)">
                        하드
                    </button>
                </div>
            </div>


            <div class="kbox-info-card">
                <div class="kbox-row">
                    <span>이자율</span>
                    <div>
                        연 <input id="kbox-interest-rate"
                            class="kbox-input"
                            readonly>%
                    </div>
                </div>
                <div class="kbox-row">
                    <span>원금</span>
                    <div>
                        <input id="kbox-principal"
                            class="kbox-input"
                            v-model="principal"
                            readonly>원
                    </div>
                </div>
                <div class="kbox-row">
                    <span>이자</span>
                    <div>
                        <input id="kbox-interest"
                            class="kbox-input"
                            readonly>원
                    </div>
                </div>
                <div class="kbox-row">
                    <span>이체 금액</span>
                    <div>
                        <input id="kbox-amount"
                            class="kbox-input"
                            v-model="kboxInfo.amount"
                            readonly>원
                    </div>
                </div>
                <div class="kbox-row">
                    <span>만기일</span>
                    <div>
                        <input id="kbox-expiration-date"
                            class="kbox-input"
                            v-model="kboxInfo.expiration_date"
                            readonly>
                    </div>
                </div>
            </div>
            <button class="btn kbox-button">
                {{ isEditMode ? '저금통 수정' : '저금통 생성' }}
            </button>
        </div>
    </div>
</template>

<style scoped>
.kbox-setting-card, .kbox-info-card {
    background-color: #fff;
    border: 4px solid #EAEAEA;
    border-radius: 15px;
    padding: 20px;
    margin-bottom: 20px;
}

.kbox-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
    border-bottom: 1px solid #EAEAEA;
}

.kbox-btn-group {
    display: flex;
    justify-content: space-between;
    padding-top: 15px;
}

.mode-btn {
    background-color: #D4D4D4;
    width: 45%;
}

.mode-btn.selected {
    background-color: #FFCE0B;
    color: #000;
}

.kbox-button {
    background-color: #FFCE0B;
    width: 100%;
}

h2 {
    padding-left: 5px;
}

.kbox-input {
    outline: none;
    border: none;
    text-align: right;
    padding-right: 5px;
}

.input-group {
    display: flex;
    align-items: center;
}

.unit {
    margin-left: 5px;
}

#kbox-name
, #kbox-account-no {
    width: 180px;
}

#kbox-target-amount
, #kbox-amount
, #kbox-interest
, #kbox-principal
, #kbox-expiration-date {
    width: 100px;
}

#kbox-target-months
, #kbox-transfer-date
, #kbox-interest-rate {
    width: 50px;
}


</style>