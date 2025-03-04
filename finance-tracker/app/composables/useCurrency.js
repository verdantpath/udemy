export const useCurrency = (amount, country = 'USD') => {
  const currency = computed(() => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: country
    }).format(isRef(amount) ? amount.value : amount)
  })

  return {
    currency
  }
}