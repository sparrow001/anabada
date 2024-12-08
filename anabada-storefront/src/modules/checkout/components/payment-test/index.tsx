import { Badge } from "@medusajs/ui"

const PaymentTest = ({ className }: { className?: string }) => {
  return (
    <Badge color="orange" className={className}>
      <span className="font-semibold">You MUST Bring enough money to cover the cost of your reserved items.</span>
    </Badge>
  )
}

export default PaymentTest
