export  default {
    data() {
        return{
            loadStatus: false,
            listData: [],
        }
    },
    methods: {
        searchData(objUrl){
            //console.log(objUrl.searchUrl);
            this.$Progress.start();
            axios.get(objUrl.searchUrl)
            .then(response => {
                this.$Progress.finish();
                this.listData = response.data;
                this.loadStatus = true;
                this.pagination = response.data;

                //console.log(response.data);
            })
            .catch(e => {
                console.log(e);
                this.$Progress.fail();
            });
        },
        reload(reloadObj){
            this.searchValue = '';
            this.searchField = reloadObj.name;
            this.getAllData(this.getUrl);
            this.$toastr.s('Done !!', 'Data Reload successfully !!');
        },
        getAllData: function (getUrl) {
            //console.log(getUrl +'?page=' + this.pagination.current_page);
            this.$Progress.start();
            axios.get(getUrl)
            .then(response => {
                this.$Progress.finish();
                this.listData = response.data;
                this.loadStatus = true;
                this.pagination = response.data;

                //console.log(response.data);
            })
            .catch(e => {
                console.log(e);
                this.$Progress.fail();
            });
        },
        create(createObj){
            $(createObj.modalId).modal('show');
            this.editMode = false;
            this.form.reset();
        },
        store(postObj){
            //console.log('submit');
            this.$Progress.start();
            this.form.post(postObj.postUrl)
            .then(response => {
                $(postObj.modalId).modal('hide');
                this.$Progress.finish();
                this.getAllData(this.getUrl);
                this.$toastr.s("Done !!", "Data Saved Successfully");

                //console.log(response);
            })
            .catch(e => {
                console.log(e);
                this.$Progress.fail();
            });
        },
        edit(editObj) {
            this.editMode = true;
            this.form.reset();
            this.form.clear();
            this.form.fill(editObj.editData);
            $(editObj.modalId).modal('show');
        },
        update(putObj) {
            //console.log('update');
            this.$Progress.start();
            this.form.busy = true;
            this.form.put(putObj.updateUrl)
            .then(response => {
                $(putObj.modalId).modal('hide');
                this.$Progress.finish();
                this.getAllData(this.getUrl);
                this.$toastr.s("Done !!", "Data Updated Successfully");

                //console.log(response);
            })
            .catch(e => {
                console.log(e);
                this.$Progress.fail();
            });
        },
        destroy(deleteObj) {
            this.$swal({
                title: 'Are you sure?',
                text: 'You will not be able to recover this data!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, keep it'
            }).then((result) => {
                //console.log(result);
                this.$Progress.start();
                axios.delete(deleteObj.deleteUrl)
                .then(response => {
                    this.$Progress.finish();
                    this.getAllData(this.getUrl);
                    this.$swal('Data Deleted Successfully!!!');

                    //console.log(response);
                })
                .catch(e => {
                    console.log(e);
                    this.$Progress.fail();
                });
            })
            .catch(e => {
                console.log(e);
                this.$swal('Your data is safe!!!');
            })
        }


    }
}
