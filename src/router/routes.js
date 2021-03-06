import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import Notifications from "@/pages/Notifications.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Typography from "@/pages/Typography.vue";
import TableList from "@/pages/TableList.vue";
import ShopInfo from "@/pages/ShopInfo.vue";
import ShopGoods from "@/pages/ShopGoods.vue"

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "销售报表（月）",
        component: Dashboard
      },
      {
        path: "stats",
        name: "清单",
        component: UserProfile
      },
      {
        path: "notifications",
        name: "通知",
        component: Notifications
      },
      {
        path: "icons",
        name: "图示",
        component: Icons
      },
      {
        path: "maps",
        name: "地图",
        component: Maps
      },
      {
        path: "typography",
        name: "版式",
        component: Typography
      },
      {
        path: "table-list",
        name: "表格清单",
        component: TableList
      },
			{
			  path: "shop-data",
			  name: "店铺管理",
			  component: ShopInfo
			},
			{
			  path: "shop-goods",
			  name: "商品清单",
			  component: ShopGoods
			},
    ]
  },
  { path: "*", component: NotFound }
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
