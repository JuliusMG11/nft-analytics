<template>
  <div class="">
    <h2>PRICE: 20SOL</h2>
  </div>
</template>

<script setup>

// const solanaPrice = ref(null);
// const apiKey = 'YOUR_API_KEY'; // Nahraďte svým skutečným klíčem API od CoinMarketCap
// const symbol = 'SOL'; // Symbol měny, pro kterou chcete získat data (Solana v tomto případě)
// const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=1&convert=USD&symbol=${symbol}`;

// async function getSolanaPrice() {
//   try {
//     const response = await fetch(url, {
//       headers: {
//         'Accepts': 'application/json',
//         'X-CMC_PRO_API_KEY': apiKey,
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`Chyba při získávání dat: ${response.status}`);
//     }

//     const data = await response.json();
//     solanaPrice.value = data.data[0].quote.USD.price;

//     console.log(`Aktuální cena Solana: ${solanaPrice} USD`);
//   } catch (error) {
//     console.error(`Chyba: ${error.message}`);
//   }
// }

// onMounted(() => {
//     getSolanaPrice();
// })



</script>

<style lang="scss" scoped>

</style>