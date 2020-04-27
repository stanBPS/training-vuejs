<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card style="text-align: center">
                    <v-card-text>
                        <h1 class="display-4">
                            <v-icon size="150px"
                                >mdi-emoticon-sad-outline</v-icon
                            >Oups...
                        </h1>
                        <br />
                        <h2 class="display-1">
                            La page que vous cherchez n'a pas pu être trouvée...
                        </h2>
                    </v-card-text>
                    <v-card-actions class="justify-center">
                        <v-btn large color="primary" link to="/">
                            Retourner sur la page d'accueil
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {};
</script>
