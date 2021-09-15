<template>
  <div class="container">
    <h1>{{ $store.state.counter }}</h1>
    <button class="btn btn-primary" type="button" @click="tambahCounter">Tambah</button>
    <button class="btn btn-warning" type="button" @click="kurangiCounter">Kurang</button>
    <nuxt-link to="/store">Go To Store</nuxt-link>

    <br>
    <input type="text" class="form-control" v-model="text">
    <button class="btn btn-warning btn-sm" @click="tambahTodoList">Tambah</button>

    <br>
    <h2 class="mt-5">Todo List</h2>
    <ul>
      <li v-for="(item, index) in $store.state.todoList" :key="index">
        {{item}}
        <button class="btn btn-warning btn-sm" @click="deleteTodoList(index)">Hapus</button>
      </li>
    </ul>

    <br>
    <div class="row">
      <div class="col-md-4" v-for="(video, index) in videos" :key="index">
        <button class="btn btn-danger btn-sm" @click="deleteVideo(index)">Hapus Video</button>
        <div class="embed-responsive embed-responsive-16by9">
          <iframe class="embed-responsive-item" :src="video.banner_url" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: null,
      videos: []
    }
  },
  methods: {
    tambahCounter() {
      this.$store.commit("tambahCounter", 1000)
      console.log("tambah")
    },
    kurangiCounter() {
      this.$store.commit("kurangiCounter", 1000)
      console.log("kurangiCounter", 1)
    },
    deleteTodoList(index) {
      this.$store.commit("deleteTodoList", index)
    },
    tambahTodoList(index) {
      this.$store.commit("tambahTodoList", this.text);
    },
    ubahTodoList(index, text) {

    },
    getVideos() {
      this.$axios.$get("https://my-json-server.typicode.com/Maritho/jsonplacehoder/videos").then((reseponse) => {
        this.videos = reseponse;
      }).catch((e) => {
        console.log(e.response.message)
      });
    },
    deleteVideo(index) {
      console.log(this.videos[index])
      this.$axios.$delete(`https://my-json-server.typicode.com/Maritho/jsonplacehoder/videos/${this.videos[index].id}`).then((reseponse) => {
        this.videos.splice(index, 1);
      }).catch((e) => {
        console.log(e.response.message)
      });
    }
  },
  mounted() {
    this.getVideos();
  },
}
</script>
