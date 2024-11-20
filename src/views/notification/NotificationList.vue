<script setup>
import { computed } from 'vue';

import Notification from '../notification/NotificationItem.vue'

const notifications = [
    {notification_no : 1, title : '자동 이체 - 잔액 부족', content : '아이폰16 사기', createdAt : '2024-11-20'},
    {notification_no : 2, title : '저금통 만기 안내', content : '맥북', createdAt : '2024-11-10'},
    {notification_no : 3, title : '모임 저금통 초대', content : '이탈리아 여행', createdAt : '2024-10-20'},
]

// 날짜별로 알림을 그룹화하고 요일을 추가하는 computed 속성
const groupedNotifications = computed(() => {
    const groups = {};
    notifications.forEach(noti => {
        if (!groups[noti.createdAt]) {
            const date = new Date(noti.createdAt);
            const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
            const weekday = weekdays[date.getDay()];
            const formattedDate = `${noti.createdAt} ${weekday}요일`;
            groups[noti.createdAt] = {
                displayDate: formattedDate,
                items: []
            };
        }
        groups[noti.createdAt].items.push(noti);
    });
    return groups;
});
</script>

<template>
    <div class="container-fluid">
        <h2>알림함</h2>

        <div class="noti-list">
            <div v-for="(group, date) in groupedNotifications" :key="date" class="date-group">
                <div class="date-header">{{ group.displayDate }}</div>
                <Notification
                    v-for="noti in group.items"
                    :key="noti.notification_no"
                    :title="noti.title"
                    :content="noti.content"
                    :createdAt="noti.createdAt" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.date-header {
    padding: 10px;
    font-weight: bold;
    color: #666;
    background-color: #D9D9D9;
    margin: 0 auto 20px auto;
    border-radius: 20px;
    width: 50%;
    text-align: center;
}

.date-group:first-child .date-header {
    margin-top: 0;
}

h2 {
    padding-left: 5px;
}
</style>