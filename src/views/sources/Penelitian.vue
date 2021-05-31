<template>
  <div id="penelitian">
    <Navbar />
    <div class="bg-primary">
      <div class="flex items-center px-4 py-4 container mx-auto">
        <h1 class="text-white font-bold text-2xl text-left">
          Penelitian
        </h1>
        <div class="py-4 text-left mx-auto">
          <input
            type="text"
            v-model="searchPenelitian"
            placeholder="Search Author. . ."
            class="border-2 border-gray-300 bg-white h-10 px-5 lg:pr-16 rounded-md text-sm focus:outline-none lg:w-96 w-40"
          />
        </div>
      </div>
    </div>

    <!--START Table -->
    <section id="table" class="overflow-x-auto w-full">
      <table class="table-responsive">
        <thead>
          <tr>
            <th class="w-1/2 border px-4 py-2">Judul Penelitian</th>
            <th class="w-1/6 border px-4 py-2">Skim Penelitian</th>
            <th class="w-1/6 border px-4 py-2">Ketua Pengusul</th>
            <th class="w-1/6 border px-4 py-2">Anggota</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="penelitian in filteredPenelitian" :key="penelitian.id">
            <td class="border px-6 py-4">
              <p class="">
                {{ penelitian.judul }}
              </p>
            </td>

            <td class="px-6 py-4 border">
              <p class="text-gray-500 text-sm font-semibold tracking-wide">
                {{ penelitian.skim_penelitian }}
              </p>
            </td>
            <td class="px-6 py-4 text-center border">
              <p class="text-gray-500 text-sm font-semibold tracking-wide">
                {{ penelitian.nama_ketua_penelitian }}
              </p>
            </td>
            <td class="px-6 py-4 text-center border">
              {{ penelitian.jumlah_anggota }}
            </td>
            <td class="px-4 py-4 border">
                <button class="border rounded-md border-primary items-center hover:bg-primary text-primary hover:text-white px-4 py-2">
                    <router-link :to="{name : 'Login'}">Login</router-link>
                </button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
    <!--END Table -->
    <div class="flex justify-between items-center">
      <div class="px-8 py-4">
        <p>Total : {{ penelitians.length }}</p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/layouts/Navbar.vue";
import Footer from "@/components/layouts/Footer.vue";
import axios from "axios";
export default {
  name: "Penelitian",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      searchPenelitian: "",
      penelitians: [],
    };
  },
  async mounted(){
    try{
      let response = await axios.get("http://admin-be.repo-up2m.com/api/list-penelitian")
      this.penelitians = response.data.data.data
    }
    catch(err) {
      console.log(err)
    }
  },
  computed: {
    filteredPenelitian: function() {
      var penelitian = this.penelitians;
      var searchPenelitian = this.searchPenelitian;

      if (!searchPenelitian) {
        return penelitian;
      }

      searchPenelitian = searchPenelitian.trim().toLowerCase();

      penelitian = penelitian.filter(function(item) {
        if (item.judul.toLowerCase().indexOf(searchPenelitian) !== -1) {
          return item;
        }
        if (item.nama_ketua_penelitian.toLowerCase().indexOf(searchPenelitian) !== -1) {
          return item;
        }
      });

      return penelitian;
    },
  },
};
</script>

<style scoped></style>
