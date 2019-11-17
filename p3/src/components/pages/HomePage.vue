<template>
  <div>
    <span>There are currently {{ sharedState.recipes.length }} recipes in the database.</span>
    <br />
    <br />
    <span>This month's featured recipes</span>
    <br />
    <div class='container'>
      <div class='divTable'>
        <div class='divTableBody'>
          <div class='divTableRow'>
            <div class='divTableCell'>
              <show-featured :id='1'></show-featured>
            </div>
            <div class='divTableCell'>&nbsp;</div>
            <div class='divTableCell'>
              <show-featured :id='3'></show-featured>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import * as app from './../../app.js';
import ShowFeatured from './../ShowFeatured.vue';

export default {
  name: 'HomePage',
  components: { ShowFeatured },
  data: function() {
    return {
      sharedState: app.site,
      featured: [1, 3]
    };
  },
  mounted() {}
};
</script>

<style scoped>
.container {
  width: 100%;
  margin: 0 auto;
  padding: 20px;
}
.divTable {
  display: table;
  margin: auto;
}
.divTableRow {
  display: table-row;
}
.divTableCell {
  display: table-cell;
  width: 33%;
  text-align: center;
  border-color: white;
}
.divTableBody {
  display: table-row-group;
}
</style>