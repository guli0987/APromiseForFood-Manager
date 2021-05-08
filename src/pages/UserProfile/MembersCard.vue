<template>
  <card class="card" :title="title">
    <div>
      <ul class="list-unstyled team-members">
        <li>
          <div class="row" v-for="member in members" :key="member.name">
            <div class="col-3">
              <div class="avatar">
                <img :src="member.image" alt="Circle Image" class="rounded img-fluid">
              </div>
            </div>
            <div class="col-6">
              {{member.name}}
              <br>
              <span :class="getStatusClass(member.status)">
                <small>{{member.status}}</small>
              </span>
            </div>

            <div class="col-3">
              <p-button type="success" outline icon>
                <i class="fa fa-envelope"></i>
              </p-button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </card>
</template>
<script>
export default {
  data() {
    return {
      title: "团队成员",
      members: [
        {
          image: require("@/assets/img/faces/face-0.jpg"),
          name: "Dj Khaled",
          status: "离线"
        },
        {
          image: require("@/assets/img/faces/face-1.jpg"),
          name: "Creative Tim",
          status: "可用"
        },
        {
          image: require("@/assets/img/faces/face-1.jpg"),
          name: "Flume",
          status: "忙碌"
        }
      ]
    };
  },
  methods: {
    getStatusClass(status) {
      switch (status) {
        case "离线":
          return "text-muted";
        case "可用":
          return "text-success";
        case "忙碌":
          return "text-danger";
        default:
          return "text-success";
      }
    }
  }
};
</script>
<style>
</style>
