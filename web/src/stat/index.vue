<template>
    <div class="box">
            <b-table
            :data="tableDataSimple"
            paginated
            per-page="10"
            :opened-detailed="defaultOpenedDetails"
            detailed
            detail-key="id"
            @details-open="(row, index) => $toast.open(`Expanded ${row.firstName}`)"
        >
            <template slot-scope="props">
                <b-table-column field="Id" label="ID" width="40" numeric>
                    {{ props.row.Id }}
                </b-table-column>
    
                <b-table-column field="firstName" label="First Name" sortable>
                    {{ props.row.firstName }}
                </b-table-column>
    
                <b-table-column field="lastName" label="Last Name" sortable>
                    {{ props.row.lastName }}
                </b-table-column>
    
                <b-table-column field="createDate" label="Date" sortable centered>
                    <span class="tag is-success">
                        {{ new Date(props.row.createDate).toLocaleDateString() }}
                    </span>
                </b-table-column>
    
                <b-table-column label="edit">
                    <a class="button is-primary is-outlined is-rounded" @click="handleClick(props.row)"> manage </a>
                </b-table-column>
            </template>
        </b-table>
        <OpenDetail :cmodal="pcmodal" :hideDetail="hideDetail" :detail="detail"/>
    </div>
</template>

<script>
import OpenDetail from '../components/stat/OpenDetail.vue'

export default {
  components: {
    OpenDetail
  },
  data() {
      let tableDataSimple = []
      return {
        defaultOpenedDetails: [1],
        tableDataSimple,
        columnsTemplate: [
            { title: 'id', field: 'Id', visible: true },
            { title: 'First Name', field: 'firstName', visible: true },
            { title: 'Last Name', field: 'lastName', visible: true },
            { title: 'Date', field: 'createDate', visible: true },
            { title: 'role', field: 'role', visible: true },
            { title: 'edit', field: 'edit', visible: true }
        ],
        pcmodal: 'modal'
      }
  },
  async created () {
      let { body } = await this.$http.get('users')
      let { data } = body.Status.data
      if (body.Status.code === '200') {
        this.tableDataSimple = data
      }
  },
  methods: {
    handleClick(obj) {
      console.log(obj)
      this.detail = obj
      this.pcmodal = `modal is-active`
      
    },
    hideDetail() {
      this.pcmodal = `modal`
    }
  }
}
</script>