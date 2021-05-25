<template>
  <div id="pengabdian">
    <Navbar />
    <div class="bg-primary">
      <div class="block lg:flex items-center px-4 py-4 container mx-auto">
        <h1 class="text-white font-bold text-2xl text-left">
          Penelitian
        </h1>
        <div class="py-4 text-left mx-auto">
          <input
            type="text"
            v-model="search"
            placeholder="Search Author . . ."
            class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-md text-sm focus:outline-none lg:w-96 w-full"
            @keyup="searchPengabdian"
          />
        </div>
      </div>
    </div>

    <!--START Table -->
    <section id="table">
      <table class="table-responsive">
        <thead>
          <tr>
            <th class="w-1/2 border py-4">Judul Pengabdian</th>
            <th class="w-1/6 border py-4">Skim Pengabdian</th>
            <th class="w-1/6 border py-4">Ketua Pengusul</th>
            <th class="w-1/6 border py-4">Anggota</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="pengabdian in pengabdians" :key="pengabdian.id" class="hover:bg-gray-100 border">
            <td class="border">
              <p class="">
                {{ pengabdian.judul }}
              </p>
            </td>

            <td class="px-6 py-4 border">
              <p class="text-gray-500 text-sm font-semibold tracking-wide">
                {{ pengabdian.skim_pengabdian }}
              </p>
            </td>
            <td class="px-6 py-4 text-center border">
              <p class="text-gray-500 text-sm font-semibold tracking-wide">
                {{ pengabdian.nama_ketua_pengabdian }}
              </p>
            </td>
            <td class="px-6 py-4 text-center border">
              {{ pengabdian.jumlah_anggota }}
            </td>
            <td class="px-4 py-4">
                <button class="border rounded-md border-primary items-center hover:bg-primary text-primary hover:text-white px-4 py-2">
                    Download
                </button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
    <!--END Table -->
    <div class="flex justify-between items-center">
      <div class="px-8 py-4">
        <p>Total : {{ pengabdians.length }}</p>
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
  name: "Pengabdian",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      search: "",
      pengabdians: [],
    };
  },
  methods: {
    searchPengabdian() {
      axios
        .get(
          "http://admin-be.repo-up2m.com/api/list-pengabdian?q=" + this.search
        )
        .then((res) => (this.pengabdians = res.data.data.data))
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    axios
      .get("http://admin-be.repo-up2m.com/api/list-pengabdian")
      .then((res) => (this.pengabdians = res.data.data.data))
      .catch((err) => console.log(err));
  },
};
</script>

<style lang="scss" scoped></style>
