<template>
   <v-card flat>
        <h3>Coin</h3>
      <v-card-title>
        <v-text-field
          v-model="search"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="coins"
        item-key="name"
        :search="search.toString().toLocaleLowerCase()"
        :page.sync="page"
        :items-per-page="itemsPerPage"
        hide-default-footer>
      </v-data-table>
      <v-row class="text-center px-4 align-center" wrap>
            <v-col class="text-truncate" cols="12" md="2">
                Toplam {{ totalRecords }} Coin
            </v-col>
            <v-col cols="12" md="6">
                <v-pagination
                    v-model="page"
                    :length="pageCount">
                </v-pagination>
            </v-col>
          
        </v-row>
    </v-card>
  
  </template>
  <script>
  import { mapState } from 'vuex';
  export default {
    data () {
    return {
      search: '',
      headers: [
        { text: 'symbol', align: 'left', value: 'symbol' },
        { text: 'lastPrice', value: 'lastPrice' },
        { text: 'priceChangePercent', value: 'priceChangePercent' },
      
      ],
      page: 1,
      itemsPerPage: 10,
      perPageChoices: [
          {text:'5 records/page' , value: 5},
          {text:'10 records/page' , value: 10},
          {text:'20 records/page' , value: 20},
      ]
    }
  },
  computed: {
      totalRecords() {
      
        return this.coins.length
      },
      pageCount() {
          return 100 / this.itemsPerPage
      },
      ...mapState(["coins"])
  },
   
    mounted (){
      this.$store.dispatch("loadCoins")
    }
   
      }
  
</script>