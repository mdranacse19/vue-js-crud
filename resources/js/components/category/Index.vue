<template>
    <div class="container">

        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header d-flex ">
                        <div class="">
                            <b>Product Category List</b>
                        </div>
                        <div class="ml-auto">
                            <button class="btn btn-primary btn-sm" @click="create({'modalId':'#createCategory'})"><i class="fa fa-plus-square" aria-hidden="true"></i> Add Category</button>
                            <button class="btn btn-info btn-sm" @click="reload({'name':'name'})"><i class="fa fa-refresh" aria-hidden="true"></i> Reload</button>
                        </div>
                    </div>

                    <div class="card-body">

                        <div class="row mb-3" >
                            <div class="col-2">
                                <h6><b>Search By</b></h6>
                            </div>
                            <div class="col-3">
                                <select name="searchField" id="searchField" v-model="searchField" class="form-control">
                                    <option value="name">Name</option>
                                    <option value="slug">Slug</option>
                                </select>
                            </div>
                            <div class="col-7">
                                <input type="text" name="searchValue" v-model="searchValue" class="form-control">
                            </div>
                        </div>

                        <table v-if="loadStatus" class="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Slug</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(category, index) in listData.data">
                                    <th scope="row">{{ index+1 }}</th>
                                    <td>{{ category.name }}</td>
                                    <td>{{ category.slug }}</td>
                                    <td>
                                        <button class="btn btn-primary btn-sm" @click="edit({'editData':category, 'modalId':'#createCategory'})"><i class="fa fa-pencil-square" aria-hidden="true"></i> Edit</button>
                                        <button class="btn btn-danger btn-sm" @click="destroy({'deleteUrl':'/api/product-category/'+ category.id})"><i class="fa fa-trash" aria-hidden="true"></i> Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <pagination v-if="pagination.last_page > 1"
                                    :pagination="pagination"
                                    :offset="5"
                                    @paginate=" searchValue === '' ?
                                        getAllData(getUrl+ '?page=' +pagination.current_page) :
                                        searchData({'searchUrl':'/api/search/product-category/'+searchField+'/'+searchValue+'?page='+pagination.current_page})"
                        ></pagination>

                    </div>
                </div>
            </div>
        </div>



        <!-- for create -->
        <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" id="createCategory" aria-labelledby="createCategory" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">

                    <div class="modal-header">
                        <h5 class="modal-title" id="customerModalLongTitle"><b> {{ editMode ? 'Update' : ' Add New' }} Category </b></h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <form @submit.prevent=" editMode ? update({'updateUrl':'/api/product-category/'+ form.id, 'modalId':'#createCategory'}) : store({'postUrl':'/api/product-category', 'modalId':'#createCategory'}) " @keydown="form.onKeydown($event)">

                        <div class="container">
                            <div class="modal-body">
                                <alert-error :form="form"></alert-error>

                                <div class="form-group row">
                                    <label >Category Name</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" :class="{ 'is-invalid': form.errors.has('name') }"
                                               v-model="form.name" name="name" placeholder="Enter category name">
                                        <has-error :form="form" field="name"></has-error>
                                    </div>
                                </div>
                            </div>

                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button :disabled="form.busy" type="submit" class="btn btn-info"> {{ editMode ? 'Update' : 'Save' }}  Changes</button>
                            </div>
                        </div>

                    </form>

                </div>
            </div>
        </div>


    </div>
</template>

<script>
import Form from "vform";

export default {

    data() {
      return{
          searchValue: '',
          searchField: 'name',
          editMode: false,
          form: new Form ({
              id: '',
              name: '',
              slug: '',
          }),
          pagination: {
              current_page: 1,
          },
          getUrl: '/api/product-category',
      }
    },
    watch:{
        searchValue: function (newQ, oldQ){
            if(newQ === ''){
                this.getAllData(this.getUrl);
            }else{
                this.searchData({'searchUrl':'/api/search/product-category/'+this.searchField+'/'+this.searchValue+'?page='+this.pagination.current_page});
            }
        }
    },
    mounted() {
        //console.log(this.getUrl)
        this.getAllData(this.getUrl);
    },
    methods: {

    }
}
</script>
