<template>
  <div class="search">
    <van-nav-bar title="Search Item" left-arrow @click-left="$router.go(-1)" />

    <van-search v-model="search" show-action placeholder="Key word" clearable>
      <template #action>
        <div @click="goSearch(search)" >Search</div>
      </template>
    </van-search>

    <!-- 搜索历史 -->
    <div class="search-history" v-if="history.length > 0">
      <div class="title">
        <span>Search History</span>
        <van-icon @click="clearHistory" name="delete-o" size="16" />
      </div>
      <div class="list">
        <div v-for="item in history" :key="item" class="list-item" @click="goSearch(item)">{{ item }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getHistoryInfo, setHistoryInfo } from '@/utils/storage'

export default {
  name: 'SearchIndex',
  data () {
    return {
      search: '',
      history: getHistoryInfo()
    }
  },
  methods: {
    goSearch (key) {
      // console.log('searching', key)
      const index = this.history.indexOf(key)
      if (index !== -1) {
        this.history.splice(index, 1)
        // this.history.unshift(key)
      }
      this.history.unshift(key)
      setHistoryInfo(this.history)
      this.$router.push(`/searchlist?search=${key}`)
    },
    clearHistory () {
      this.history = []
      setHistoryInfo()
    }
  }
}
</script>

<style lang="less" scoped>
.search {
  .searchBtn {
    background-color: #fa2209;
    color: #fff;
  }
  ::v-deep .van-search__action {
    background-color: #c21401;
    color: #fff;
    padding: 0 20px;
    border-radius: 0 5px 5px 0;
    margin-right: 10px;
  }
  ::v-deep .van-icon-arrow-left {
    color: #333;
  }
  .title {
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
  }
  .list {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 0 10px;
    gap: 5%;
  }
  .list-item {
    width: 30%;
    text-align: center;
    padding: 7px;
    line-height: 15px;
    border-radius: 50px;
    background: #fff;
    font-size: 13px;
    border: 1px solid #efefef;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 10px;
  }
}
</style>
