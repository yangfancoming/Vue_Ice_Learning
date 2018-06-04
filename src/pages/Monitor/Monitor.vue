<template>
  <div class="dashboard">
      <el-form :model="listQuery" ref="listQuery" :inline="true" class="demo-form-inline" >
          <div align="center" >
              <el-form-item prop="name" label="姓名：">
                  <el-input  placeholder="请输入姓名" v-model="listQuery.name"></el-input>
              </el-form-item>

              <el-form-item  prop="dob" label="出生日期" >
                  <el-date-picker v-model="listQuery.dob" type="date" placeholder="选择日期" :editable=false value-format="yyyy-MM-dd"> </el-date-picker>
              </el-form-item>
          </div>

          <div align="center" >
              <el-form-item>
                  <el-button type="warning" icon="el-icon-circle-plus-outline"  >新增</el-button>
                  <el-button type="primary" icon="el-icon-search" >查询</el-button>  <!--@click="queryList"-->
                  <el-button type="danger" icon="el-icon-delete" >批量删除</el-button>
                  <el-button  type="info" @click="resetForm('listQuery')">重置</el-button>
              </el-form-item>
          </div>
      </el-form>

      <el-row>
          <el-col :span="4">
              <el-tree :data="data5" show-checkbox  node-key="id" default-expand-all :expand-on-click-node="false">
                  <span class="custom-tree-node" slot-scope="{ node, data }">
                    <span>{{ node.label }}</span>
                  </span>
              </el-tree>
          </el-col>
          <el-col :span="20">
              <!--@selection-change="handleSelectionChange" -->
              <el-table ref="multipleTable" tooltip-effect="dark"  highlight-current-row  fit border  size="mini"  style="width: 100%" max-height="700"
                        element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading"  element-loading-background="rgba(0, 0, 0, 0.8)">

                  <el-table-column type="selection" width="55" align="center"> </el-table-column>
                  <el-table-column prop="id" label="编号" align="center"> </el-table-column>
                  <el-table-column prop="username" label="菜单名称" align="center"> </el-table-column>
                  <el-table-column prop="name" label="菜单地址" align="center"> </el-table-column>
                  <el-table-column prop="sid" label="菜单排序" align="center" > </el-table-column>
                  <el-table-column prop="dob" label="创建时间"  align="center" > </el-table-column> <!--Date of Enrollment    -->
                  <el-table-column prop="scope.row.isenable" label="是否启用" align="center">
                      <template slot-scope="scope">
                          <div slot="reference" class="name-wrapper">
                              <el-tag type="success" size="medium" v-if="scope.row.isenable == true">启用</el-tag>
                              <el-tag type="danger" size="medium" v-else>禁用</el-tag>
                          </div>
                      </template>
                  </el-table-column>
                  <el-table-column prop="remark" label="备注" align="center" show-overflow-tooltip> </el-table-column>

                  <el-table-column label="操作" align="center" fixed="right" width="300">     <!--align="center" 列内容居中显示 -->
                      <template slot-scope="scope">
                          <el-button size="mini" type="success" icon="el-icon-edit" >编辑</el-button>        <!--v-on:click="handleEdit(scope.$index, scope.row)"-->
                          <!--<el-button size="mini" type="danger" icon="el-icon-delete"  v-on:click="handleDelete(scope.$index, scope.row)">删除</el-button>-->
                          <!--<el-button size="mini" type="info" icon="el-icon-rank"  v-on:click="handleDelete(scope.$index, scope.row)">分配角色</el-button>-->
                      </template>
                  </el-table-column>
              </el-table>
          </el-col>
      </el-row>

  </div>
</template>

<script>
    let id = 1000;

    export default {
        data() {
            const data = [{
                id: 1,
                label: '一级 1',
                children: [{
                    id: 4,
                    label: '二级 1-1',
                    children: [{
                        id: 9,
                        label: '三级 1-1-1'
                    }, {
                        id: 10,
                        label: '三级 1-1-2'
                    }]
                }]
            }, {
                id: 2,
                label: '一级 2',
                children: [{
                    id: 5,
                    label: '二级 2-1'
                }, {
                    id: 6,
                    label: '二级 2-2'
                }]
            }, {
                id: 3,
                label: '一级 3',
                children: [{
                    id: 7,
                    label: '二级 3-1'
                }, {
                    id: 8,
                    label: '二级 3-2'
                }]
            }];
            return {
                listQuery:{},
                tableData5: [{
                    id: '12987122',
                    name: '用户管理',
                    category: '江浙小吃、小吃零食',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }, {
                    id: '12987123',
                    name: '角色管理',
                    category: '江浙小吃、小吃零食',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }, {
                    id: '12987125',
                    name: '权限管理',
                    category: '江浙小吃、小吃零食',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }, {
                    id: '12987126',
                    name: '好滋好味鸡蛋仔',
                    category: '江浙小吃、小吃零食',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }],
                data5: JSON.parse(JSON.stringify(data))
            }
        },

        methods: {
            append(data) {
                const newChild = { id: id++, label: 'testtest', children: [] };
                if (!data.children) {
                    this.$set(data, 'children', []);
                }
                data.children.push(newChild);
            },

            remove(node, data) {
                const parent = node.parent;
                const children = parent.data.children || parent.data;
                const index = children.findIndex(d => d.id === data.id);
                children.splice(index, 1);
            },

        }
    };
</script>

<style>
    .custom-tree-node {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        padding-right: 8px;
    }

    .demo-table-expand {
        font-size: 0;
    }
    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }
    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        /*width: 50%;*/
    }
</style>