<template>
  <div>
    <h2 class="subtitle">Search Cryptocurrencies</h2>
    <input id="searchbar" v-model="search" class="input" type="text" placeholder="Search for Cryptocurrencies" />
    <div v-for="currency in currencies" :key="currency.id">
      <div
        v-if="
          currency.name.toLowerCase().includes(search.toLowerCase()) ||
          currency.symbol.toLowerCase().includes(search.toLowerCase())
        "
      >
        <div class="box searchResult">
          <article class="media">
            <div class="media-left"></div>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong class="is-pulled-left">{{ currency.name }} ({{ currency.symbol }})</strong>
                  <br />
                  <span class="icon-text is-pulled-left">
                    <span class="icon">
                      <i><img src="public/rankings.png" class="rankingimg" /></i>
                    </span>
                    <span class="is-pulled-left">{{ currency.rank }}</span>
                  </span>
                  <br />
                  <span class="icon-text is-pulled-left">
                    <span class="icon">
                      <i><img src="public/coin-stack.png" class="rankingimg" /></i>
                    </span>
                    <span class="is-pulled-left">{{
                      currency.type.charAt(0).toUpperCase() + currency.type.slice(1)
                    }}</span>
                  </span>
                </p>
              </div>
            </div>
          </article>
          <button class="button is-primary moreBtn is-pulled-right">
            <span class="icon">
              <i class="fab fa-twitter"></i>
            </span>
            <span class="is-centered">More about {{ currency.symbol }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { onBeforeMount, reactive, ref } from "vue";

type Currency = {
  id: number;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
};

let search = ref("");
let currencies: Currency[] = reactive([] as Currency[]);
const reqUrl = "https://api.coinpaprika.com/v1/coins";
onBeforeMount(getData);

function getData() {
  console.log("Get Data function started");
  axios.get(reqUrl).then((response) => {
    currencies.push(...response.data.splice(0, 1500)); //.splice(0, 1000)
  });
}
</script>

<style scoped>
#searchbar {
  width: 350pt;
}
.searchResult {
  width: 450pt;
  margin: auto;
  margin-top: 10pt;
  margin-bottom: 10pt;
}
.rankingimg {
  width: 85%;
  margin-top: 10%;
}
.box {
  padding-bottom: 43pt;
}
</style>
