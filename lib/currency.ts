export function formatCurrency(amount: number): string {
  // Format as Nigerian Naira
  return `₦${amount.toLocaleString("en-NG")}`
}

export function parseCurrency(priceString: string): number {
  // Handle both $ and ₦ currency formats
  if (priceString.includes("₦")) {
    return parseFloat(priceString.replace("₦", "").replace(/,/g, ""))
  } else if (priceString.includes("$")) {
    return parseFloat(priceString.replace("$", "").replace(/,/g, ""))
  } else {
    return parseFloat(priceString.replace(/,/g, ""))
  }
}

