<template>

    <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
        <div class="container">
            <router-link class="navbar-brand" :to="{name: 'home'}">Site Logo</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <router-link class="nav-link" :to="{name: 'home'}">HOME</router-link>
                    </li>
                    <li class="nav-item active">
                        <router-link class="nav-link" :to="{name: 'category-list'}">PRODUCT CATEGORY</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

</template>

<script>
    export default {
        name: "Header",

        mounted() {
            //console.log('Header');
        }
    }
</script>

