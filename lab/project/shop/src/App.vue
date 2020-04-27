<template>
    <v-app>
        <!-- Top bar -->
        <app-top-bar></app-top-bar>

        <!-- Main content -->
        <v-content>
            <v-container>
                <router-view></router-view>
            </v-container>
        </v-content>

        <!-- Footer -->
        <app-footer></app-footer>
    </v-app>
</template>

<script>
import AppTopBar from './components/AppTopBar.vue';
import AppFooter from './components/AppFooter.vue';

export default {
    components: {
        AppTopBar,
        AppFooter,
    },
};
</script>
