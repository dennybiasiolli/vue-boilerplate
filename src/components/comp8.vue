<template>
  <div>
    <p>
      Coumponent mounted {{ count }} times
    </p>
    <p>
      Counter is even? {{ isCountEven }}
    </p>
    <p>
      Counter is odd? {{ isCountOdd }}
    </p>
    <p>
      State with local data: {{ countPlusLocalData }}
    </p>
    <p>
      State with local computed data: {{ countPlusLocalComputed }}
    </p>
    <p>
      Local state: {{ localState }}
    </p>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapGetters, mapActions } = createNamespacedHelpers('a')

export default {
  data() {
    return {
      localCount: 10,
      localState: 1000
    }
  },
  computed: Object.assign(
    // local computed properties
    {
      localComputed() {
        return 100
      }
    },

    // state properties, different use cases
    mapState({
      // arrow functions can make the code very succinct!
      count: state => state.count,

      // passing the string value 'count' is same as `state => state.count`
      countAlias: 'count',

      // to access local state with `this`, a normal function must be used
      countPlusLocalData(state) {
        return state.count + this.localCount
      },
      countPlusLocalComputed(state) {
        return state.count + this.localComputed
      }
    }),

    // getter properties (like computed properties for store)
    mapGetters(['isCountEven', 'isCountOdd'])
  ),
  mounted() {
    this.incrementAsync().then(() => {})
    this.localState++
  },
  methods: Object.assign({}, mapActions(['incrementAsync']))
}
</script>
