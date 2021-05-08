<template>
  <div class="wrapper">
    <side-bar>
      <template slot="links">
        <sidebar-link to="/dashboard" name="销售报表" icon="ti-panel"/>
		<sidebar-link to="/shop-data" name="店铺管理" icon="ti-view-list-alt"/>
		<sidebar-link to="/table-product" name="商品清单" icon="ti-bag"/>
		<sidebar-link to="/table-list" name="订单信息" icon="ti-shopping-cart"/>
		<sidebar-link to="/stats" name="用户资料" icon="ti-user"/>
        <sidebar-link to="/typography" name="文字版式" icon="ti-text"/>
        <sidebar-link to="/icons" name="图标样式" icon="ti-pencil-alt2"/>
        <!-- <sidebar-link to="/maps" name="地图" icon="ti-map"/> -->
        <sidebar-link to="/notifications" name="通知事项" icon="ti-bell"/>
      </template>
      <mobile-menu>
        <li class="nav-item">
          <a class="nav-link">
            <i class="ti-panel"></i>
            <p>统计资料</p>
          </a>
        </li>
        <drop-down class="nav-item"
                   title="5 通知"
                   title-classes="nav-link"
                   icon="ti-bell">
          <a class="dropdown-item">Notification 1</a>
          <a class="dropdown-item">Notification 2</a>
          <a class="dropdown-item">Notification 3</a>
          <a class="dropdown-item">Notification 4</a>
          <a class="dropdown-item">Another notification</a>
        </drop-down>
        <li class="nav-item">
          <a class="nav-link">
            <i class="ti-settings"></i>
            <p>设置</p>
          </a>
        </li>
        <li class="divider"></li>
      </mobile-menu>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu";
export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MobileMenu
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    }
  }
};
</script>
