<template>
  <div>
    <table>
      <thead>
      <tr>
        <th v-for="key in columns"
            @click="sortBy(key)"
            :class="{active: sortKey == key}">
          {{ key | capitalize }}
          <span class="arrow" :class="sortedOrders[key] > 0 ? 'asc' : 'dsc'">
          </span>
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="entry in attendanceLog">
        <td>
          {{entry.firstName}}
        </td>
        <td>
          {{entry.lastName}}
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "AttendanceLogs",
    props: {
      data: Array,
      columns: Array,
      filterKey: String
    },
    created() {
      this.getAttendanceList('')
    },
    data: function () {
      var sortOrders = {}
      // this.columns.forEach(function (key) {
      //   sortOrders[key] = 1
      // })
      return {
        sortKey: '',
        sortOrders: sortOrders,
        attendanceLog: []
      }
    },
    computed: {
      filteredData: function () {
        var sortKey = this.sortKey
        var filterKey = this.filterKey && this.filterKey.toLowerCase()
        var order = this.sortOrders[sortKey] || 1
        var data = this.data
        if (filterKey) {
          data = data.filter(function (row) {
            return Object.keys(row).some(function (key) {
              return String(row[key]).toLowerCase().indexOf(filterKey) > -1
            })
          })
        }
        if (sortKey) {
          data = data.slice().sort(function (a, b) {
            a = a[sortKey]
            b = b[sortKey]
            return (a === b ? 0 : a > b ? 1 : -1) * order
          })
        }
        return data
      }
    },
    filters: {
      capitalize: function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
      }
    },
    methods: {
      sortBy: function (key) {
        this.sortKey = key
        this.sortOrders[key] = this.sortOrders[key] * -1
      },
      getAttendanceList: function (id) {
        axios.get(this.$endpoint + '/getAttendanceLogsDetails', {
          params: {
            studId: id
          },
          headers: {
            "content-type": "application/x-www-form-urlencoded"
          }
        }).then(response => {
          console.log('response', response)
          this.attendanceLog = response.data
        }).catch(e => {

        })
      }
    }
  }
</script>

<style scoped>

</style>
