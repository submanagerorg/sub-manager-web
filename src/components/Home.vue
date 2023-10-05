<template>
    <div >
        <div class="main">
            <h1 class="main-title">Sub Sync</h1>
            <h4 class="mt-4">You never have to worry about remembering your subscription ever again</h4>
        </div>
        <div class="p-5">
            <v-data-table
            :headers="headers"
            :items="items"
            color="primary"
            bg-color="secondary"
            class="table-style"
            >
            </v-data-table>
        </div>
    </div>
</template>

<style lang="scss" scoped>
</style>

<script scoped>

export default {
    data() {
        return {
            items: [],
            headers: [
                {
                    text: 'Name',
                    value: 'name' 
                },
                {
                    text: 'Description',
                    value: 'description' 
                },
                {
                    text: 'Amount',
                    value: 'amount' 
                },
                {
                    text: 'Currency',
                    value: 'currency' 
                },
                {
                    text: 'Status',
                    value: 'status' 
                },
                {
                    text: 'Start Date',
                    value: 'start_date'
                },
                {
                    text: 'End Date',
                    value: 'end_date'
                }
            ]
        }
    },
    created() {
        this.getSubscriptions()
    },
    methods: {
        validate(){
            this.$refs.form.validate()
        },
        async getSubscriptions(){
            let data = await this.$store.dispatch('getSubs')
            this.items = data
        }
    }
}

</script>