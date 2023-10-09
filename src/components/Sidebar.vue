<template>
    <div>
        <v-app-bar-nav-icon class="p-4 m-3" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-navigation-drawer
        v-model="drawer"
        absolute
        bottom
        temporary
        color="secondary"
        >
        <v-list>
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                {{ user ? user.username: null }}
              </v-list-item-title>
              <v-list-item-subtitle>{{ user ? user.email:null }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list
          nav
          dense
        >
          <v-list-item to="/" link>
            <v-list-item-icon>
              <v-icon>mdi-folder</v-icon>
            </v-list-item-icon>
            <v-list-item-title>My Subscriptions</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Recommendations</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-star</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Most Important</v-list-item-title>
          </v-list-item>

        </v-list>

        <template v-slot:append>
            <div class="pa-2">
            <v-btn block @click="logout" color="primary">
                Logout
            </v-btn>
            </div>
      </template>
    </v-navigation-drawer>
    </div>
</template>

<script scoped>

export default {
    data() {
        return {
            drawer: false,
            user: {}
        }
    },
    created() {
        this.user = this.$store?.state?.auth?.user
    },
    methods: {
        logout() {
            this.$store.dispatch('logout')
            this.$router.push('/login')
        }
    }
}

</script>