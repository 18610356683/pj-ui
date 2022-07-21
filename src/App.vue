<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <div>
    <pj-button>默认按钮</pj-button>
    <pj-icon icon="icon-anquanrenzheng"></pj-icon>
    <pj-button type="primary" icon="icon-anquanrenzheng">安全认证 </pj-button>
    <pj-button type="primary">主要按钮</pj-button>
    <pj-button type="warning">警告按钮</pj-button>
    <pj-button type="danger">危险按钮</pj-button>
    <pj-button type="success">成功按钮</pj-button>
    <pj-button type="info">信息按钮</pj-button>

    <pj-button-group>
      <pj-button icon="icon-anquanrenzheng" type="primary">上一页</pj-button>
      <pj-button icon="icon-anquanrenzheng" type="primary">下一页</pj-button>
    </pj-button-group>
  </div>
</template>

<style scoped>
</style>
