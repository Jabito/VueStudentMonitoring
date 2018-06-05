<template>
  <div>
    <div id="container">
      <div class="container-fluid" style="background-color: #122b40;">
        <div class="row" style="  background-color: #122b40;">
          <div class="">
            <!--/*/ <th:block th:include="fragments/header :: header"></th:block> /*/-->
          </div>
        </div>
      </div>

      <!-- ETO SIMULA NG PAGE -->

      <div id="page-wrapper">
        <div class="row">
          <div class="col-lg-12">
            <h1 class="page-header"> Welcome <span> </span> !</h1>
          </div>
          <!-- /.col-lg-12 -->
        </div>

        <!-- /.row -->

        <div class="row">
          <div class="col-lg-12">
            <h3>Announcement</h3>
            <ul>
              <li>Please be advice that the last day of submission is October 10, 2017.</li>
              <li>Please wear your ID in the Campus.</li>
              <li>Please secure your Belongings inside the campus.</li>

            </ul>
          </div>
        </div>

        <div class="row" style="padding-top: 50px">
          <div class="col-lg-6">

            <h3>Attendance for the week</h3>
            <table width="100%" class="table table-striped table-bordered table-hover" id="salesTableDays">
              <thead>

              <tr>
                <th>Date</th>
                <th>Attendance Count</th>
              </tr>
              </thead>
              <tbody id="tableBody">
              </tbody>
            </table>
          </div>
        </div>

        <!-- /.row -->
      </div>
      <!-- /#page-wrapper -->

    </div>
    <input type="text" id="added" />
  </div>
</template>

<script>
    export default {
        name: "Dashboard"
    }
</script>

<style scoped>

</style>
