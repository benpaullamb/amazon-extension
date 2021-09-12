<template>
  <div class="container">
    <header>
      <h1>Amazon Search Helper</h1>
    </header>
    <main>
      <div class="input-group">
        <label for="min-ratings">Minimum Ratings</label>
        <input v-model="minRatings" @keydown.enter="filterProducts" id="min-ratings" type="number" />
      </div>
      <button @click="filterProducts">Filter</button>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      minRatings: 1000,
    };
  },
  methods: {
    filterProducts() {
      chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {
          minRatings: this.minRatings,
        });
      });
    },
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: sans-serif;
}

.container {
  min-width: 20rem;
}

header {
  padding: 1rem;
  background: #131921;

  h1 {
    color: white;
  }
}

main {
  padding: 1rem;

  .input-group {
    margin-bottom: 1rem;

    label {
      margin-bottom: 0.5rem;
      display: block;
      font-size: 18px;
    }

    input {
      padding: 0.25rem;
      font-size: 18px;
    }
  }

  button {
    min-width: 12rem;
    padding: 0.25rem 1rem;
    cursor: pointer;
    background: #ffd814;
    border: none;
    border-radius: 128px;
    box-shadow: 0 1px 2px -1px black;
    text-align: center;
    font-size: 14px;
  }
}
</style>
