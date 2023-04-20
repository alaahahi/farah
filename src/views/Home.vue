<template>
  <Header1 />
  <div class="container">
  </div>
  <UserList />
</template>

<script>
import UserList from '@/components/UserList.vue'
import Header1 from '@/components/Header1.vue'

export default {
  name: 'Home',
  components: {  UserList ,Header1}
}
</script>
