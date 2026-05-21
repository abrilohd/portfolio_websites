export default function CircuitOverlay({ opacity = 0.06 }) {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40h80M40 0v80M20 0v20M20 20h20M60 60h20M60 40v20M0 20h10M70 20h10' stroke='%234A7FD4' stroke-width='0.6' fill='none'/%3E%3Ccircle cx='20' cy='20' r='2' fill='%234A7FD4'/%3E%3Ccircle cx='60' cy='60' r='2' fill='%234A7FD4'/%3E%3Ccircle cx='40' cy='40' r='1.5' fill='%23F5C518'/%3E%3Ccircle cx='60' cy='20' r='1.5' fill='%234A7FD4'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        opacity,
      }}
      aria-hidden="true"
    />
  )
}
