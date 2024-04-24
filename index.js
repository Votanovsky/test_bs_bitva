import Atropos from 'https://cdn.jsdelivr.net/npm/atropos@2/atropos.min.mjs';

console.log(Atropos);

const myAtropos = Atropos({
    el: '.my-atropos',
    // rest of parameters
});

// setTimeout(() => {
//     // destroy it when needed
//     myAtropos.destroy();
// }, 10000)