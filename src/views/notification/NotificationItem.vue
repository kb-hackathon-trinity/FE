<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
});

</script>

<template>
    <div class="notification-item">
        <div class="notification-header">
            <span class="title">{{ title }}</span>
            <span class="date">{{ createdAt }}</span>
        </div>
        <div class="content">
            {{ content }}
        </div>
    </div>
</template>

<style scoped>
.notification-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 4px;
    padding: 0 10px;
}

.title {
    font-weight: bold;
}

.date {
    color: #666;
}

.content {
  background-color: #fff;
    border: 4px solid #EAEAEA;
    border-radius: 15px;
    padding: 10px 20px;
    margin-bottom: 20px;
}
</style>