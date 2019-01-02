<style lang="less">
.export-content {
  .ivu-btn-primary {
    margin: 0px 10px;
  }
  .export-page{
      float:right;
  }
}
</style>

<template>
  <div class="export-content clearfix">
    <div class>
        <!-- 禁用鼠标停留的高亮  :disabled-hover="true" -->
      <Table :columns="columns8" :data="data2"  size="small" ref="table" :loading="loading"></Table>
      <br>
      <Button type="primary" size="large" @click="exportData(1)">
        <Icon type="ios-download-outline"></Icon>导出原始数据
      </Button>
      <Button type="primary" size="large" @click="exportData(2)">
        <Icon type="ios-download-outline"></Icon>导出排序和过滤后的数据
      </Button>
      <Button type="primary" size="large" @click="exportData(3)">
        <Icon type="ios-download-outline"></Icon>导出自定义数据
      </Button>
    </div>
    <div class="export-page">
      <Page :total="100" @on-change="changePage" :page-size="size"/>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      columns8: [
        {
          title: "名字",
          key: "name",
          fixed: "left",
          width: 100
        },
        {
          title: "歌手",
          key: "singer",
          width: 100,
          sortable: true
        },
        {
          title: "年份",
          key: "year",
          width: 100,
          sortable: true,
          filters: [
            {
              label: "大于2018",
              value: 1
            },
            {
              label: "小于2018",
              value: 2
            }
          ],
          filterMultiple: false,
          filterMethod(value, row) {
            if (value === 1) {
              return row.year >= 2018;
            } else if (value === 2) {
              return row.year < 2018;
            }
          }
        },
        {
          title: "描述",
          key: "describe",
          sortable: true,
          tooltip: true
        },
        {
          title: "点赞数",
          key: "praisePoints",
          sortable: true,
          width: 100
        },
        {
          title: "评论数",
          key: "comment",
          width: 100,
          sortable: true
        }
      ],
      data2: [],
      page:"",
      size:1,
      loading: ""
    };
  },
  mounted() {
    this.handleData(this.page,this.size);
  },
  methods: {
    exportData(type) {
      if (type === 1) {
        this.$refs.table.exportCsv({
          filename: "导出原始数据"
        });
      } else if (type === 2) {
        this.$refs.table.exportCsv({
          filename: "导出排序和过滤后的数据",
          original: false
        });
      } else if (type === 3) {
        this.$refs.table.exportCsv({
          filename: "导出自定义数据",
          columns: this.columns8.filter((col, index) => index < 2),
          data: this.data2.filter((data, index) => index < 2)
        });
      }
    },
    handleData(page,size) {
      this.loading = true;
      axios
        .get("http://localhost:9091/success")
        .then(res => {
          if (res.data.code == 1) {
            this.data2 = res.data.result;
            this.size=res.data.size;
            this.page=res.data.total;
          }
          this.loading = false;
        })
        .catch(error => {});
    },
    changePage(page,size){
        this.handleData(page,this.size);
    }
  }
};
</script>
