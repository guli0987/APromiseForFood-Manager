<template>
  <table class="table" :class="tableClass">
    <thead>
    <slot name="colAlias">
	  <th  v-for="alias in colAlias" :key="alias">{{alias}}</th>
	</slot>
	<!-- <slot name="columns">
	  <th v-for="column in columns" :key="column">{{column}}</th>
	</slot> -->
    </thead>
    <tbody>
    <tr v-for="(item, index) in data" :key="index">
      <slot :row="item">
        <td align="left" @click="seqClick(index)"
			v-for="(column, index) in columns"
            :key="index"
            v-if="hasValue(item, column)">
          {{itemValue(item, column)}}
        </td>
      </slot>
    </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: 'paper-table',
  props: {
    columns: Array,
	colAlias:Array,//add
    data: Array,
    type: {
      type: String, // striped | hover
      default: "striped"
    },
    title: {
      type: String,
      default: ""
    },
    subTitle: {
      type: String,
      default: ""
    }
  },
  computed: {
    tableClass() {
      return `table-${this.type}`;
    }
  },
  methods: {
    hasValue(item, column) {
      return item[column.toLowerCase()] !== "undefined";
    },
    itemValue(item, column) {
      return item[column.toLowerCase()];
    },
	seqClick(index){
		console.log("测试Click");
		/* if(index==3){//商品概述
			alert("商品概述");
		}else if(index==4){//商品展示图
			
		}else if(index==6){//	补充说明
			
		} */
		this.$emit('click-seq',index);
	}
  }
};
</script>
<style>
</style>
