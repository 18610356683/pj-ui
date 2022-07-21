<template>
  <button class="pj-button" :class="btnClass">
    <!-- // 因为有可能插槽会有一些样式，这里用span多包一层,并且判断有插槽再创建span -->
    <!-- 字体图标 -->
    <pj-icon v-if="icon" :icon="icon" class="icon"></pj-icon>
    <span v-if="this.$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "pj-button", // 组件名
  props: {
    // type 按钮颜色
    type: {
      String,
      default: "",
      validator(type) {
        if (
          type &&
          !["primary", "warning", "danger", "success", "info"].includes(type)
        ) {
          console.error("type类型不对");
        }
        return true;
      },
    },
    icon: {
      type: String,
    },
  },
  computed: {
    btnClass() {
      let classes = [];
      if (this.type) {
        classes.push(`por-button-${this.type}`);
      }
      return classes;
    },
  },
};
</script>

<style scoped lang="scss">
@import "../styles/_var.scss";
$height: 42px; // 设置一些公共变量
$font-size: 16px;
$color: #606266;
$border-color: #dcdfe6;
$background: #ecf5ff;
$active-color: #3a8ee6;
.por-button {
  //此处内容省略在前面查看

  $color-list: (
    // 类名：颜色对
    primary: $primary,
    success: $success,
    info: $info,
    warning: $warning,
    danger: $danger
  );
  // 循环颜色maps，两个参数第一个为键第二个为值
  // .$type为类名，$color为颜色
  @each $type, $color in $color-list {
    &-#{$type} {
      background: #{$color};
      border: 1px solid #{$color};
      color: #fff;
    }
  }
  // 鼠标经过
  @each $type,
    $color
      in (
        primary: $primary-hover,
        success: $success-hover,
        info: $info-hover,
        warning: $warning-hover,
        danger: $danger-hover
      )
  {
    &-#{$type}:hover {
      background: #{$color};
      border: 1px solid #{$color};
      color: #fff;
    }
  }
  // 点击
  @each $type,
    $color
      in (
        primary: $primary-active,
        success: $success-active,
        info: $info-active,
        warning: $warning-active,
        danger: $danger-active
      )
  {
    &-#{$type}:active,
    &-#{$type}:focus {
      background: #{$color};
      border: 1px solid #{$color};
      color: #fff;
    }
  }

  // 设置按钮icon大小
  .icon {
    width: 16px;
    height: 16px;
  }
}
</style>