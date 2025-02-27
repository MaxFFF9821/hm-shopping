<template>
  <div>
    <router-view></router-view>
    <van-tabbar route active-color="red" inactive-color="black">
      <van-tabbar-item icon="wap-home-o" to="/home">Home</van-tabbar-item>
      <van-tabbar-item icon="apps-o" to="/category">Category</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="/cart">Cart</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/user">Me</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'LayoutIndex'
}
</script>

<style>

</style>
