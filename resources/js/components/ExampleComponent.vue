<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-5" mx-auto>
        <div class="col-12">
          <h1>Login</h1>
        </div>
        <div>
          <form class="form">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">Username</span>
              <input
                type="text"
                class="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">Password</span>
              <input
                type="text"
                class="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <button type="button" class="btn btn-primary">
                login
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("Component mounted.");
  },
  data() {
    return {
      name: "",
    };
  },
};
</script>
